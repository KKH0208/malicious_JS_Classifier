/* 元のURL: https://kaspersky.com */
// 外部JS: https://content.kaspersky-labs.com/public/analytics-scripts/analytical_functions.js
/*
 *
 * Basic methods
 *
 */
function KLGetQueryParam(key, url) {
  var urlVal = (url || "").trim() || window.location.href;

  if (!urlVal || !key) {
    return undefined;
  }

  var search = urlVal.split("#")[0].split("?")[1];

  if (!search) {
    return undefined;
  }

  var pairs = search.split("&");

  for (var p = 0; p < pairs.length; p++) {
    var pair = pairs[p].split("=");

    try {
      var pairKeyLower = decodeURIComponent(pair[0].toLowerCase());

      if (pairKeyLower === key.toLowerCase()) {
        try {
          return decodeURIComponent(pair[1] || "");
        } catch (err) {
          console.log(err);

          return pair[1];
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function KLSetCookie(name, value, days) {
  var expires = "";
  var domain = document.location.hostname.replace(/^www\./i, "");
  var resultDomain = domain.replace(/^(.*)(\.kaspersky.*)$/i, "$2");

  if (resultDomain[0] !== ".") {
    resultDomain = "." + resultDomain;
  }

  if (days) {
    var date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }

  document.cookie = name + "=" + value + expires + "; path=/; domain=" + resultDomain + ";";
}

function KLReadCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

function KLRemoveUrlParameter(key, url) {
  var urlVal = (url || "").trim() || document.location.href;

  if (!urlVal || !key) {
    return urlVal;
  }

  var splitByHash = urlVal.split("#");
  var href = splitByHash[0];
  var hash = splitByHash[1];
  var splitByQmark = href.split("?");
  var pathname = splitByQmark[0];
  var search = splitByQmark[1];

  if (!search) {
    return pathname + (hash ? "#" + hash : "");
  }

  var pairs = search.split("&");
  var resultSearchList = [];

  for (var p = 0; p < pairs.length; p++) {
    var pair = pairs[p].split("=");

    try {
      var pairKeyLower = decodeURIComponent(pair[0].toLowerCase());

      if (pairKeyLower !== key.toLowerCase()) {
        resultSearchList.push(pairs[p]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  var resultSearch = resultSearchList.join("&");

  return pathname + (resultSearch ? "?" + resultSearch : "") + (hash ? "#" + hash : "");
}

function KLRemoveQueryAndHashFromUrl(url) {
  return (url || "").split(/#|\?/)[0] || "";
}

/*
 *
 * WebDev methods
 *
 */
function KLPushEventToDataLayer(data) {
  window.dataLayer = window.dataLayer || [];

  if (data) {
    // visit and visitor params
    window.dataLayer.push({
      event: "kl_ym_event",
      ymParamsKL: data.ymParamsKL,
      ymUserParamsKL: data.ymUserParamsKL,
    });

    // clear dataLayer vars
    window.dataLayer.push({
      ymParamsKL: undefined,
      ymUserParamsKL: undefined,
    });
  }
}

function KLTrackDownload(downloadHrefProp, appIds) {
  var downloadHrefVal = KLRemoveQueryAndHashFromUrl(downloadHrefProp) || "";
  var appIdsVal = "appIds: " + String(appIds) || "";
  var data = {
    ymParamsKL: {
      KLTrackDownload: {
        [appIdsVal]: {
          ["downloadHref: " + downloadHrefVal]: {},
        },
      },
    },
  };

  KLPushEventToDataLayer(data);
}

function KLTrackEvent(eventProp, dataProp) {
  var event = eventProp || "";
  var dataVal = dataProp || {};
  var eventDetails =
    event +
    ":" +
    '{"eventCategory": ' +
    (dataVal.eventCategory || "") +
    ', "eventAction": ' +
    (dataVal.eventAction || "") +
    ', "eventLabel": ' +
    (dataVal.eventLabel || "") +
    "}";
  var data = {
    ymParamsKL: {
      KLTrackEvent: {
        [eventDetails]: {},
      },
    },
  };

  KLPushEventToDataLayer(data);
}

function KLTrackLRCFallback() {
  var countryDict = {
    com: "GL",
    couk: "UK",
    usa: "US",
    comau: "AU",
    coin: "IN",
    coza: "ZA",
    "me-en": "ME",
    me: "ME",
    es: "ES",
    fr: "FR",
    be: "FR",
    it: "IT",
    de: "DE",
    nl: "NL",
    se: "SE",
    dk: "DK",
    no: "NO",
    fi: "FI",
    ru: "RU",
    cojp: "JP",
    latam: "LA",
    combr: "BR",
    comtr: "TR",
    comcn: "CN",
    ca: "CA",
    cafr: "CA",
    pt: "PT",
    cz: "CZ",
    gr: "GR",
    hu: "HU",
    ro: "RO",
    rs: "RS",
    bg: "BG",
    afrique: "FRZA",
    comtw: "TW",
    comvn: "VN",
    comhk: "HK",
    coth: "TH",
    cokr: "KR",
    ma: "FRMA",
  };
  var dataDomain = window.document.querySelector("html").getAttribute("data-domain");
  var verdictRegion = countryDict[dataDomain];
  var verdictPartner = window.kaspersky.verdictPartnerId;
  var verdictChannel = window.kaspersky.verdictChannel;
  var verdictLicenseProduct =
    typeof window.kaspersky.verdictLicenseProduct === "string" &&
    window.kaspersky.verdictLicenseProduct.toUpperCase().indexOf("FALLBACK") !== -1
      ? "FALLBACK"
      : window.kaspersky.verdictLicenseProduct.split("_")[0];
  var verdictDevices = window.kaspersky.verdictDevices;
  var verdictTerm = window.kaspersky.verdictTerm === 0 ? 0 : window.kaspersky.verdictTerm;
  var verdictLicenseStatus = window.kaspersky.verdictLicenseStatus;
  var verdictSourceCase = KLGetQueryParam("uni") ? "UNINSTALL" : "REGULAR";
  var verdictDaysExpired = window.kaspersky.verdictDaysExpired;
  var verdictLicenseType = window.kaspersky.verdictLicenseType;
  var verdictPartNumber = window.kaspersky.verdictPartNumber;
  var verdictSite =
    window.kaspersky.verdictLicenseType.toUpperCase().indexOf("TRIAL") === -1 &&
    window.kaspersky.verdictLicenseProduct.search(/^.+_T$/i) === -1
      ? "LRC"
      : "ATT";
  var totalVerdict = [
    verdictRegion,
    verdictSite,
    verdictPartner,
    verdictChannel,
    verdictLicenseProduct,
    verdictDevices,
    verdictTerm,
    verdictLicenseStatus,
    verdictSourceCase,
    verdictDaysExpired,
    verdictLicenseType,
    verdictPartNumber,
  ]
    .map(function (value) {
      return (value || "[NULL]").toString().toUpperCase();
    })
    .join("_");
  var serialNumber = (window.kaspersky.serialNumber || KLGetQueryParam("serial") || "").toUpperCase() || "[NULL]";
  var data = {
    ymParamsKL: {
      KLTrackLRCFallback: {
        ["totalVerdict: " + totalVerdict]: {},
        ["serialNumber: " + serialNumber]: {},
      },
    },
  };

  KLPushEventToDataLayer(data);
}

function KLTrackProductView(currency, sku, productName, productPrice, productLicense) {
  // change product context
  var brands = typeof window.kaspersky.businessType === "string" ? window.kaspersky.businessType.toLowerCase() : "";
  var name = typeof productName === "string" ? productName.toLowerCase() : "";
  var license = typeof productLicense === "string" ? productLicense.toLowerCase() : "";
  var dictButtonLicense = {
    purchase: "new",
    renewal: "renew",
    "trial opt-out": "trial",
  };
  var products = [
    {
      id: sku || "[NULL]",
      name: name || "[NULL]",
      brand: brands || "[NULL]",
      category: dictButtonLicense[license] || "[NULL]",
      quantity: 1,
      price: Number(productPrice) || 0,
    },
  ];
  var ecomViewData = {
    ecommerce: {
      currencyCode: currency || "USD",
      detail: {
        products: products,
      },
    },
  };

  window.ecomYandex = window.ecomYandex || [];
  window.ecomYandex.push(ecomViewData);

  var data = {
    ymParamsKL: {
      KLTrackProductView: {
        [name]: {
          ["sku: " + sku]: {},
        },
      },
    },
  };

  KLPushEventToDataLayer(data);
}

function KLTrackSaleButton(saleButtonProduct, saleButtonSku, saleButtonPrice, saleButtonLicense, saleButtonCurrency) {
  // track add_to_cart here
  var brands = typeof window.kaspersky.businessType === "string" ? window.kaspersky.businessType.toLowerCase() : "";
  var name = typeof saleButtonProduct === "string" ? saleButtonProduct.toLowerCase() : "";
  var license = typeof saleButtonLicense === "string" ? saleButtonLicense.toLowerCase() : "";
  var dictButtonLicense = {
    purchase: "new",
    renewal: "renew",
    "trial opt-out": "trial",
  };
  var products = [
    {
      id: saleButtonSku || "[NULL]",
      name: name || "[NULL]",
      brand: brands || "[NULL]",
      category: dictButtonLicense[license] || "[NULL]",
      quantity: 1,
      price: Number(saleButtonPrice) || 0,
    },
  ];
  var ecomAddedData = {
    ecommerce: {
      currencyCode: saleButtonCurrency || "USD",
      add: {
        products: products,
      },
    },
  };

  window.ecomYandex = window.ecomYandex || [];
  window.ecomYandex.push(ecomAddedData);

  var data = {
    ymParamsKL: {
      KLTrackSaleButton: {
        ["saleButtonProduct: " + saleButtonProduct || "[NULL]"]: {},
      },
    },
  };

  KLPushEventToDataLayer(data);
}

function KLTrackMaxymiser(data) {
  // TO DO
}

function KLTrackCroSegment(segmentName) {
  // TO DO
}

function KLTrackCta(ctaHref, ctaName) {
  var data = {
    ymParamsKL: {
      KLTrackCta: {
        ["ctaName: " + ctaName]: {
          ["ctaHref: " + KLRemoveUrlParameter("_ga", ctaHref)]: {},
        },
      },
    },
  };

  KLPushEventToDataLayer(data);
}

if (window === window.top && !window.KLClickListenerAdded) {
  window.KLClickListenerAdded = true;
  window.document.addEventListener("click", function (e) {
    var target = e.target;
    var closest = target && typeof target.closest === "function";

    if (closest) {
      saleBuyElement = target.closest('[data-omniture-sale-button-type="Buy"]');

      if (saleBuyElement) {
        var saleButtonProduct = (saleBuyElement.getAttribute("data-omniture-product-name") || "").toLowerCase();
        var saleButtonSku = saleBuyElement.getAttribute("data-omniture-option-sku");
        var saleButtonPrice = saleBuyElement.getAttribute("data-omniture-option-price");
        var saleButtonLicense = (saleBuyElement.getAttribute("data-omniture-option-purchase-type") || "").toLowerCase();
        var saleButtonCurrency = saleBuyElement.getAttribute("data-omniture-option-currency");

        KLTrackSaleButton(saleButtonProduct, saleButtonSku, saleButtonPrice, saleButtonLicense, saleButtonCurrency);
      } else {
        var CTAElement = target.closest("[data-omniture-cta-name]");

        if (CTAElement) {
          var ctaHref = CTAElement.getAttribute("href") || "[NULL]";
          var ctaName = CTAElement.getAttribute("data-omniture-cta-name") || "[NULL]";

          KLTrackCta(ctaHref, ctaName);
        }
      }
    }
  });
}

function KLCheckReturningVisitorAndTimestamp() {
  // create returning visitor timestamp
  var currentDate = new Date();
  var timestamp = currentDate.getTime();

  // check omCampaign cookie conditions, get params for campaign, refferer
  var omCampaignCookie = KLReadCookie("omCampaign");
  var campaign =
    KLGetQueryParam("campaign") ||
    KLGetQueryParam("affiliate") ||
    KLGetQueryParam("reseller") ||
    KLGetQueryParam("typnews") ||
    KLGetQueryParam("ADDITIONAL_reseller") ||
    KLGetQueryParam("cid") ||
    KLGetQueryParam("c_id") ||
    KLGetQueryParam("referer2") ||
    KLGetQueryParam("salesFlag") ||
    KLGetQueryParam("salesflag") ||
    "";

  // set omCampaign cookie
  if (campaign != "") {
    KLSetCookie("omCampaign", campaign, 1000);
  }

  var omCampaignRegexp = /(^EMA|^MD_)|(.*(_inp_|ipm(_|-|\.)|_emm_|Email|_myk_).*)/i;
  var emailReferrerRegexp = /.*(gmail\.com|outlook\.live\.com|yopmail\.com|mail\.|webmail\.|email|web\.mail\.).*/i;
  var omCampaignCookieVisitor = false;
  var omCampaignParamVisitor = false;
  var emailReferrer = false;
  var LRCSerial = false;
  var isRenewalUser =
    window.location.pathname.search("/renewal-center/") !== -1 ||
    window.location.pathname.search("/upgrade-center/") !== -1;
  var renewProduct = false;
  var eVar69 = KLGetQueryParam("acmid");
  var isSaasUser = window.location.host === "saasnews.kaspersky.com";

  if (omCampaignCookie && omCampaignCookie.search(omCampaignRegexp) !== -1) {
    omCampaignCookieVisitor = true;
  } else if (campaign && campaign.search(omCampaignRegexp) !== -1) {
    omCampaignParamVisitor = true;
  } else if (typeof document.referrer === "string") {
    emailReferrer = document.referrer.search(emailReferrerRegexp) !== -1;
  } else if (isRenewalUser && KLGetQueryParam("serial")) {
    LRCSerial = true;
  }

  // check products
  if (Array.isArray(window.kaspersky.products) && window.kaspersky.products.length > 0) {
    for (var i = 0; i < kaspersky.products.length; i++) {
      if ((window.kaspersky.products[i].licenseType || "").toLowerCase() === "renew") {
        renewProduct = true;
      }
    }
  }

  if (
    omCampaignCookieVisitor ||
    omCampaignParamVisitor ||
    emailReferrer ||
    eVar69 ||
    LRCSerial ||
    isSaasUser ||
    renewProduct
  ) {
    if (!KLReadCookie("returningVisitorTimestamp")) {
      KLSetCookie("returningVisitorTimestamp", timestamp, 1000);
    }
  }
}

/*
 *
 * WebDev cart methods
 *
 */
function KLGetEcomProviderChars() {
  if (window.kaspersky.platformName === "Digital River") {
    return "DR";
  } else if (window.kaspersky.platformName === "Avangate") {
    return "AV";
  } else if (window.kaspersky.platformName === "Nexway") {
    return "NW";
  } else if (window.kaspersky.platformName === "Allsoft") {
    return "AS";
  } else {
    return "XX";
  }
}

function KLGetBusinessType() {
  var products = window.kaspersky.products;
  var isLegacyShop = typeof products === "string" && products !== "";

  if (isLegacyShop || Array.isArray(window.kaspersky.products)) {
    // first check products
    if (isLegacyShop) {
      return ["legacy", "products"];
    }

    var isB2B = !!products.find(function (product) {
      return product && (product.business || "").toLowerCase() === "b2b";
    });

    // for all prods not b2b
    var isB2C = isB2B
      ? false
      : !!products.find(function (product) {
          return product && (product.business || "").toLowerCase().length > 0;
        });

    if (isB2B) {
      return ["b2b", "products"];
    } else if (isB2C) {
      return ["b2c", "products"];
    } else {
      return ["empty", "products"];
    }
  } else if (typeof window.kaspersky.businessType === "string" && window.kaspersky.businessType !== "") {
    // then check dataLayer
    return [window.kaspersky.businessType.toLowerCase(), "dataLayer"];
  } else {
    // finally check url
    if (
      window.location.href.indexOf("small-business-security") > -1 ||
      window.location.href.indexOf("small-to-medium-business-security") > -1 ||
      window.location.href.indexOf("enterprise-security") > -1 ||
      window.location.href.indexOf("small-office-security") > -1
    ) {
      return ["b2b", "url"];
    } else {
      return ["b2c", "url"];
    }
  }
}

function KLGetSiteClass() {
  var hostName = window.location.hostname.toLowerCase();
  var pathName = window.location.pathname.toLowerCase();

  if (
    pathName.indexOf("/lp/") !== -1 ||
    pathName.indexOf("/acq/") !== -1 ||
    window.kaspersky.platformName === "Landing Pages"
  ) {
    return "Landing Pages";
  } else if (pathName.indexOf("/blog/") !== -1 || hostName.indexOf("blog") !== -1) {
    return "Kaspersky Daily Blog";
  } else if (["Nexway", "Digital River", "Avangate", "Allsoft"].indexOf(window.kaspersky.platformName) !== -1) {
    return "Shopping Cart";
  } else {
    return "Websites";
  }
}

function KLTrackAddToCartCandyRack(products) {
  // TO DO for candyRack
}

function KLRemoveFromCart(products) {
  var product = products[0];
  var ecomProductsRemoved = {
    id: product.sku || product.id || "[NULL]", // sku or id
    name: product.itemName.toLowerCase() || "[NULL]", // short product name
    category: product.licenseType.toLowerCase() || "[NULL]", // new, renew or trial
    brand: product.business.toLowerCase() || "[NULL]", // B2B, B2C, other
    variant: product.itemInternalName.toLowerCase() || "[NULL]", // full product name
    quantity: 1,
    price: typeof product.sumWoVat === "number" ? +product.sumWoVat.toFixed(2) : 0, // price w/o vat
  };
  var ecomRemovedData = {
    ecommerce: {
      currencyCode: window.kaspersky.currency || "USD",
      remove: {
        products: ecomProductsRemoved,
      },
    },
  };

  window.ecomYandex = window.ecomYandex || [];
  window.ecomYandex.push(ecomRemovedData);
}


