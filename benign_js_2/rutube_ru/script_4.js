/* 元のURL: https://rutube.ru */
try {
      var themeConfig = {"name":"data-themeid","dark":"dark","light":"light"};

      if (typeof window === 'undefined' || !window.localStorage) {
        document.documentElement.setAttribute("data-themeid", "dark");
      } else {
        window.localStorage.setItem("freyr-theme-config", JSON.stringify(themeConfig));
        var _colorScheme = window.localStorage.getItem("freyr-color-scheme-value");
        var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "dark";
        var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        var computedThemeValue = themeConfig[computedColorScheme] ?? computedColorScheme;
        document.documentElement.setAttribute(themeConfig.name, computedThemeValue);
      }
    } catch {
      document.documentElement.setAttribute("data-themeid", "dark");
    }
  

