/* 元のURL: https://nvidia.com */

  function loadAPACFonts(lang) {
    const APACFontMapping = {
      "zh-cn": ['1rem "Source-Han-Sans-SC"'],
      "zh-tw": ['1rem "Source-Han-Sans-TC"'],
      "ja-jp": ['1rem "Source-Han-Sans-JP"'],
      "ko-kr": ['1rem "Source-Han-Sans-KR"'],
    };
    const cookieHeader = "nv-" + lang + "-fonts-loaded";
    const className = lang + "-fonts-loaded";
    if (!(lang in APACFontMapping)) {
      //this font optimization only applies to APAC fonts
      return;
    }
    if (window.cookieHelpers.getCookie(cookieHeader)) {
      document.body.classList.add(className);
      return;
    }
    if (!("fonts" in document)) {
      //old browser doesn't support the css font loading api
      return;
    }
    Promise.all(
      APACFontMapping[lang].map((font) => document.fonts.load(font))
    ).then(() => {
      document.body.classList.add(className);
      window.cookieHelpers.setCookieWithExpiry(
        cookieHeader,
        "true",
        1
      );
    });
  }
  window.addEventListener("load", () => {
    const lang = document.documentElement.lang;
    console.log("font cache:",lang);
    loadAPACFonts(lang);
  });


