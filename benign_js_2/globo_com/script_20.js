/* 元のURL: https://globo.com */

    window.pages = window.pages || {};
    window.pages.SETTINGS = window.pages.SETTINGS || {};
    window.pages.SETTINGS.IS_PREVIEW = false;
    window.cdaaas = window.cdaaas || {};
    window.cdaaas.SETTINGS.MAB_ACTIVE = true;
    window.cdaaas.SETTINGS.AD_AB_TEST = { enabled: false };
    window.cdaaas.SETTINGS.CHANNEL = window.cdaaas.SETTINGS.MOBILE_GROUP || {};

    (window.cdaaas ??= {}).SETTINGS ??= {};
    window.cdaaas.SETTINGS.PLAYER ??= {};
    window.cdaaas.SETTINGS.PLAYER.OPTIONS ??= {};
    window.cdaaas.SETTINGS.PLAYER.PIP_OPTIONS ??= {};
    window.cdaaas.SETTINGS.PLAYER.ASYNC_OPTIONS ??= {};

    // Atribuições
    window.cdaaas.SETTINGS.PLAYER.OPTIONS.daxExtras = { ambient: "web" };
    window.cdaaas.SETTINGS.PLAYER.OPTIONS.autoPlay = true;
    window.cdaaas.SETTINGS.PLAYER.OPTIONS.autoNext = false;
    window.cdaaas.SETTINGS.PLAYER.OPTIONS.pip = true;
    window.cdaaas.SETTINGS.PLAYER.PIP_OPTIONS.orientation = "bottom-right";
    window.cdaaas.SETTINGS.PLAYER.ASYNC_OPTIONS.adCustomData = undefined;


  

