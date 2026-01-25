/* 元のURL: https://twitch.tv */
function prefersDarkMode(){var e=window.CSS&&window.CSS.supports.bind(window.CSS)||window.supportsCSS;return!!(!!e&&(e("--f:0")||e("--f",0)))&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}-1===document.cookie.indexOf("twilight-user")&&-1===document.cookie.indexOf("twilight-auth")||document.querySelector("body").classList.add("logged-in"),("1"===localStorage.getItem("twilight.theme")||prefersDarkMode())&&document.querySelector("body").classList.add("dark-theme")

