/* 元のURL: https://ft.com */
(function coreExperience() {
    if (/\bcore\b/.test(document.documentElement.className)) {
      // eslint-disable-next-line no-var
      var currentScript = document.scripts[document.scripts.length - 1];
      // eslint-disable-next-line no-var
      var img = new Image();
      img.alt = '';
      img.src = currentScript.getAttribute('data-pixel-src');
    }
  })();

