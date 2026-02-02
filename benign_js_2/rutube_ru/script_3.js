/* 元のURL: https://rutube.ru */

try {
  const themesMap = {"dark2021":"dark","white2022":"light"};
  const storageKey = 'freyr-color-scheme-value';
  function getCookie(name) {
    const cookie = Object.fromEntries(new URLSearchParams(document.cookie.replace(/; /g, '&')));
    return cookie[name] || undefined;
  }
  const freyrTheme = localStorage.getItem(storageKey);
  if (freyrTheme == null) {
    const freyjaTheme = getCookie('wdpThemeId');
    const mappedFreyrTheme = themesMap[freyjaTheme];
    if (mappedFreyrTheme != null) {
      localStorage.setItem(storageKey, mappedFreyrTheme);
    }
  }
} catch {}


