/* 元のURL: https://spotify.com */
// 外部JS: https://open.spotifycdn.com/cdn/js/retargeting-pixels.02346b5d.js
(function (w) {
  function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(function (c) {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
        })
        .join(''),
    );
  }

  function getOpenServerDataBase64(id, fallback = {}) {
    try {
      const element = document.getElementById(id);
      return element
        ? JSON.parse(b64DecodeUnicode(element.innerHTML))
        : fallback;
    } catch {
      return fallback;
    }
  }

  const config = getOpenServerDataBase64('appServerConfig');
  if (!config.retargetingPixels) return;

  Object.entries(config.retargetingPixels).forEach(function (pixel) {
    const pixelPlatform = pixel[0];
    const pixelId = pixel[1];

    switch (pixelPlatform) {
      case 'twitter':
        w.__TWITTER_PIXEL_ID__ = pixelId;
        break;

      case 'pinterest':
        w.__PINTEREST_PIXEL_ID__ = pixelId;
        break;

      case 'snapchat':
        w.__SNAPCHAT_PIXEL_ID__ = pixelId;
        break;

      default:
        break;
    }
  });
})(window);


