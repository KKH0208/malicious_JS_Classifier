/* 元のURL: https://soundcloud.com */

  (function () {
    window.ddjskey = '7FC6D561817844F25B65CDD97F28A1';
    // https://docs.datadome.co/docs/how-to-configure-the-javascript-tag
    window.ddoptions = {
      ajaxListenerPath: [{"host":"api-v2.soundcloud.com","path":"/tracks","strict":true},{"host":"api-v2.soundcloud.com","path":"/tracks/*/comments","strict":true},{"host":"api-v2.soundcloud.com","path":"/users/*/conversations/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/me/followings/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/users/*/track_likes/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/users/*/playlist_likes/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/users/*/system_playlist_likes/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/users/*/emails","strict":true},{"host":"api-v2.soundcloud.com","path":"/playlists","strict":true},{"host":"api-v2.soundcloud.com","path":"/playlists/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/me","strict":true},{"host":"api-v2.soundcloud.com","path":"/me/track_reposts/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/me/track_reposts/*/caption","strict":true},{"host":"api-v2.soundcloud.com","path":"/me/playlist_reposts/*","strict":true},{"host":"api-v2.soundcloud.com","path":"/uploads/*/track-transcoding","strict":true},{"host":"api-v2.soundcloud.com","path":"/uploads/track-upload-policy","strict":true},{"host":"graph.soundcloud.com","path":"/graphql","strict":true}],
      overrideAbortFetch: true,
      sessionByHeader: true,
      cookieName: 'datadome',
      endpoint: 'https://dwt.soundcloud.com/js/',
      disableAutoRefreshOnCaptchaPassed: true,
      enableTagEvents: true,
      abortAsyncOnCaptchaDisplay: false,
    };
  })();


