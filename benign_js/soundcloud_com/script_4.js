/* 元のURL: https://soundcloud.com */

  (function () {
    var theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-' + theme);
  })();


