/* 元のURL: https://zoom.us */
// 外部JS: https://st1.zoom.us/homepage/publish/primary/assets/js/home-header-footer.js
document.addEventListener("DOMContentLoaded", function () {
  handleMarketVerifyFlow().then(function (result) {
    userLoginStatus();
  });
})
function datalayerTracking_605() {
  function DataLayerNavigation() {
    var self = this;

    this.DataLayerHelper = {
      pushEvent: function (eventName, data) {
        if (!eventName) return;

        var eventData = {
          event: eventName,
        };

        if (!data) data = {};

        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            eventData[key] = data[key] === "" ? undefined : data[key];
          }
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventData);
      },
    };
  }

  DataLayerNavigation();

  const _productsTabItemToggle = document.querySelectorAll(
    "#accordion-content-products .zdcm-megamenu__workplace__column > ul > li.zdcm-megamenu__list-item-heading--disabled"
  );
  if (_productsTabItemToggle.length > 0) {
    _productsTabItemToggle.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = undefined;
        var linkText =
          event.currentTarget.innerText || event.target.innerText || "";
        if (event.currentTarget.getAttribute("aria-expanded") == "true") {
          linkText = linkText.toLowerCase() + " - expand";
        } else {
          linkText = linkText.toLowerCase() + " - collapse";
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav - products menu",
        });
      });
    });
  }

  //Mobile Menu Tracking
  const _applicationDownloadCenterClicks = document.querySelectorAll(
    ".zdcm-mobile-menu .zdcm-mobile-menu__footer .zdcm-download-wrapper .zdcm-mobile-download-card a, .zdcm-main-nav .zdcm-download-wrapper .zdcm-mobile-download-card a, .zdcm-mobile-menu .zdcm-tablet-menu__footer .zdcm-download-wrapper .zdcm-mobile-download-card a,.zdcm-tablet-menu__itmes .zdcm-mobile-download-card a"
  );
  if (_applicationDownloadCenterClicks.length > 0) {
    _applicationDownloadCenterClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$i, _link$querySelector;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$i =
            (_link$querySelector = link.querySelector(
              ".zdcm-mobile-donwload-content-title"
            )) === null ||
            _link$querySelector === void 0 ||
            (_link$querySelector = _link$querySelector.innerText) === null ||
            _link$querySelector === void 0
              ? void 0
              : _link$querySelector.split("\n")[0].trim()) !== null &&
          _link$querySelector$i !== void 0
            ? _link$querySelector$i
            : "";
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav mobile",
        });
      });
    });
  }

  const _productAppMobileClicks = document.querySelectorAll(
    ".zdcm-mobile-menu .zdcm-mobile-menu__footer .zdcm-mobile-level-2-items .zdcm-mobile-download-card > a"
  );
  if (_productAppMobileClicks.length > 0) {
    _productAppMobileClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t, _link$querySelector2;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$t =
            (_link$querySelector2 = link.querySelector(
              ".zdcm-mobile-donwload-content-item"
            )) === null || _link$querySelector2 === void 0
              ? void 0
              : _link$querySelector2.textContent.trim()) !== null &&
          _link$querySelector$t !== void 0
            ? _link$querySelector$t
            : "";
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav mobile",
        });
      });
    });
  }

  const _moblieSignUpClicks = document.querySelectorAll(
    ".zdcm-mobile-menu .zdcm-mobile-menu__footer .zdcm-footer-cta-wrapper, .zdcm-mobile-profile-actions-cta, .zdcm-mobile-menu .zdcm-tablet-menu__footer .zdcm-footer-cta-wrapper,.zdcm-hub-mobile-menu-static-items ul > li > a"
  );
  if (_moblieSignUpClicks.length > 0) {
    _moblieSignUpClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t2, _link$querySelector3;
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          (_link$querySelector$t2 =
            (_link$querySelector3 = link.querySelector(
              "span.visually-hidden"
            )) === null || _link$querySelector3 === void 0
              ? void 0
              : _link$querySelector3.textContent.trim()) !== null &&
          _link$querySelector$t2 !== void 0
            ? _link$querySelector$t2
            : "";
        if (!linkText || linkText == "") {
          var linkText = event.currentTarget.innerText;
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav mobile",
        });
      });
    });
  }

  const _pricingEvent = document.querySelectorAll(
    "li.zdcm-mobile-menu__list-item a.zdcm-mobile-menu__link"
  );
  if (_pricingEvent.length > 0) {
    _pricingEvent.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          event.currentTarget.innerText || event.target.innerText || "";
        if (linkText) {
          var _filter$map$join$trim;
          linkText =
            (_filter$map$join$trim = [...event.currentTarget.childNodes]
              .filter((node) => node.nodeType === Node.TEXT_NODE)
              .map((node) => node.textContent.trim())
              .join(" ")
              .trim()) === null || _filter$map$join$trim === void 0
              ? void 0
              : _filter$map$join$trim.toLowerCase();
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText,
          linkUrl: href,
          uiLocation: "universal nav",
        });
      });
    });
  }

  var userInfoClick = document.querySelector("button.zdcm-user-info");
  if (userInfoClick != null) {
    userInfoClick.addEventListener("click", () => {
      let eventData = {
        event: "navClick",
        linkText: "my account",
        linkUrl: undefined,
        uiLocation: "universal nav",
      };
      window.dataLayer.push(eventData);
    });
  }

  const _userAccountDetail = document.querySelectorAll(
    "li.zdcm-resources-nav__dropdown-list-item a"
  );
  if (_userAccountDetail.length > 0) {
    _userAccountDetail.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText = event.currentTarget.getAttribute("Title");
        if (linkText == "" || linkText == null) {
          var downloadCenter = event.currentTarget.querySelector(
            ".zdcm-donwload-content-title"
          );
          if (downloadCenter != null) {
            linkText = downloadCenter.innerText;
          } else {
            linkText = "my account";
          }
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav" + " - my account",
        });
      });
    });
  }

  var waffleMenuClick = document.querySelector(
    "li.zdcm-item-waffle button.zdcm-waffle-menu"
  );
  if (waffleMenuClick != null) {
    waffleMenuClick.addEventListener("click", () => {
      var linkText =
        waffleMenuClick.ariaExpanded == "true"
          ? "product selector menu - expand"
          : "product selector menu - close";
      let eventData = {
        event: "navClick",
        linkText: linkText,
        uiLocation: "universal nav",
      };
      window.dataLayer.push(eventData);
    });
  }

  var waffleViewAllClick = document.querySelector(
    "span.zdcm-waffle-title-cta a"
  );
  if (waffleViewAllClick != null) {
    waffleViewAllClick.addEventListener("click", (event) => {
      const href = event.currentTarget.href || event.target.href || undefined;
      var linkText =
        event.currentTarget.innerText || event.target.innerText || "";
      if (linkText) {
        var _filter$map$join$trim2;
        linkText =
          (_filter$map$join$trim2 = [...event.currentTarget.childNodes]
            .filter((node) => node.nodeType === Node.TEXT_NODE)
            .map((node) => node.textContent.trim())
            .join(" ")
            .trim()) === null || _filter$map$join$trim2 === void 0
            ? void 0
            : _filter$map$join$trim2.toLowerCase();
      }
      window.dataLayer.push({
        event: "navClick",
        linkText: linkText,
        linkUrl: href,
        uiLocation: "universal nav - product selector menu",
      });
    });
  }

  const _waffleButtons = document.querySelectorAll(
    "li.zdcm-item-waffle div.zdcm-megamenu.zdcm-megamenu-fit > div > a, li.zdcm-item-waffle div.zdcm-megamenu.zdcm-megamenu-fit > div > div > a"
  );
  if (_waffleButtons.length > 0) {
    _waffleButtons.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          event.currentTarget.innerText || event.target.innerText || "";
        if (linkText) {
          var _filter$map$join$trim3;
          var textContent =
            (_filter$map$join$trim3 = [...event.currentTarget.childNodes]
              .filter((node) => node.nodeType === Node.TEXT_NODE)
              .map((node) => node.textContent.trim())
              .join(" ")
              .trim()) === null || _filter$map$join$trim3 === void 0
              ? void 0
              : _filter$map$join$trim3.toLowerCase();
          linkText = textContent ? textContent : linkText.toLowerCase();
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText,
          linkUrl: href,
          uiLocation: "universal nav" + " - product selector menu",
        });
      });
    });
  }

  var mobileHamburger = document.querySelector(
    "li.zdcm-mobile-hamburger button.zdcm-main-nav__hamburger-trigger"
  );
  if (mobileHamburger != null) {
    mobileHamburger.addEventListener("click", () => {
      var linkText =
        mobileHamburger.ariaExpanded == "true" ? "expand" : "close";
      let eventData = {
        event: "navClick",
        linkText: linkText,
        uiLocation: "universal nav mobile",
      };
      window.dataLayer.push(eventData);
    });
  }

  const observer = new MutationObserver(() => {
    const searchBoxClick = document.querySelector(
      "#standaloneSearchboxMobile .magic-box-input input"
    );
    if (searchBoxClick) {
      searchBoxClick.addEventListener("click", () => {
        const eventData = {
          event: "searchInteraction",
          searchInteraction: "search bar clicked",
          uiLocation: "universal nav mobile",
        };
        window.dataLayer.push(eventData);
      });
      observer.disconnect(); // Stop observing once it's bound
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  const _mobileFooterMenuItems = document.querySelectorAll(
    "div.zdcm-mobile-footer-menu-items ul li a"
  );
  if (_mobileFooterMenuItems.length > 0) {
    _mobileFooterMenuItems.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          event.currentTarget.innerText || event.target.innerText || "";
        var eventName = "navClick";
        if (href && href.includes("tel:")) {
          eventName = "phoneClick";
        }
        if (linkText) {
          var _filter$map$join$trim4;
          linkText =
            (_filter$map$join$trim4 = [...event.currentTarget.childNodes]
              .filter((node) => node.nodeType === Node.TEXT_NODE)
              .map((node) => node.textContent.trim())
              .join(" ")
              .trim()) === null || _filter$map$join$trim4 === void 0
              ? void 0
              : _filter$map$join$trim4.toLowerCase();
        }
        if (eventName != "phoneClick") {
          window.dataLayer.push({
            event: eventName,
            linkText: linkText,
            linkUrl: href,
            uiLocation: "universal nav mobile",
          });
        }
      });
    });
  }

  /** Zoom Logo Event **/
  var _document$querySelect;
  (_document$querySelect = document.querySelector(
    ".zdcm-main-nav__left .zdcm-main-nav__logo"
  )) === null ||
    _document$querySelect === void 0 ||
    _document$querySelect.addEventListener("click", function (event) {
      const href = event.currentTarget.href || event.target.href || undefined;
      window.dataLayer.push({
        event: "navClick",
        linkText: "zoom logo",
        linkUrl: href,
        uiLocation: "universal nav",
      });
    });

  const _singleLinkNavEvent = document.querySelectorAll(
    ".zdcm-main-nav__list-item > a"
  );
  if (_singleLinkNavEvent.length > 0) {
    _singleLinkNavEvent.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          event.currentTarget.innerText || event.target.innerText || "";
        if (linkText) {
          var _filter$map$join$trim5;
          var textContent =
            (_filter$map$join$trim5 = [...event.currentTarget.childNodes]
              .filter((node) => node.nodeType === Node.TEXT_NODE)
              .map((node) => node.textContent.trim())
              .join(" ")
              .trim()) === null || _filter$map$join$trim5 === void 0
              ? void 0
              : _filter$map$join$trim5.toLowerCase();
          linkText = textContent ? textContent : linkText.toLowerCase();
        }
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText,
          linkUrl: href,
          uiLocation: "universal nav",
        });
      });
    });
  }

  /** Universal Navigation Menu **/
  const _universalNavigationMenu = document.querySelectorAll(
    ".zdcm-main-nav__left .zdcm-main-nav__megamenu-trigger"
  );
  if (_universalNavigationMenu.length > 0) {
    _universalNavigationMenu.forEach(function (item) {
      item === null ||
        item === void 0 ||
        item.addEventListener("click", function (event) {
          const clickedItem = event.currentTarget;
          const labelText = clickedItem.textContent.trim().toLowerCase();
          const href = clickedItem.href || undefined;
          const parentLi = clickedItem.closest("li");
          setTimeout(function () {
            const isExpanded =
              parentLi && parentLi.classList.contains("zdcm-active");
            const linkText = `${labelText} - ${
              isExpanded ? "expand" : "collapse"
            }`;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "linkClick",
              linkText: linkText,
              linkUrl: href,
              uiLocation: "universal nav",
            });
          }, 50); // let class update apply
        });
    });
  }

  /** Universal Navigation menu - Product menu Ends **/

  const _productMenuTabsClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-main-nav__list-item .zdcm-megamenu-products-wrapper .fdn-tabs__tablist .fdn-tabs__tab, .zdcm-mobile-menu__main-nav #accordion-content-products .zdcm-megamenu-products-wrapper .fdn-tabs__tablist .fdn-tabs__tab, .zdcm-mobile-menu__content-panel .zdcm-megamenu-products-wrapper .fdn-tabs__tablist .fdn-tabs__tab"
  );
  if (_productMenuTabsClicks.length > 0) {
    _productMenuTabsClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t3, _link$querySelector4;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$t3 =
            (_link$querySelector4 = link.querySelector(".fdn-tabs__title")) ===
              null || _link$querySelector4 === void 0
              ? void 0
              : _link$querySelector4.textContent.trim()) !== null &&
          _link$querySelector$t3 !== void 0
            ? _link$querySelector$t3
            : "";
        if (!href) {
          window.dataLayer.push({
            event: "navClick",
            linkText: linkText.toLowerCase(),
            linkUrl: href,
            uiLocation: "universal nav - products menu",
          });
        }
      });
    });
  }

  const _productMenuTabsLearnMoreClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-main-nav__list-item .zdcm-megamenu-products-wrapper .fdn-tabs__tablist .fdn-tabs__tab a"
  );
  if (_productMenuTabsLearnMoreClicks.length > 0) {
    _productMenuTabsLearnMoreClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _event$currentTarget;
        const href = event.currentTarget.href || event.target.href || undefined;
        var linkText =
          ((_event$currentTarget = event.currentTarget) === null ||
          _event$currentTarget === void 0 ||
          (_event$currentTarget = _event$currentTarget.offsetParent) === null ||
          _event$currentTarget === void 0 ||
          (_event$currentTarget =
            _event$currentTarget.getAttribute("title")) === null ||
          _event$currentTarget === void 0
            ? void 0
            : _event$currentTarget.toLowerCase()) || "";
        if (href) {
          window.dataLayer.push({
            event: "navClick",
            linkText: linkText + " - learn more",
            linkUrl: href,
            uiLocation: "universal nav - products menu",
          });
        }
      });
    });
  }

  const _downloadCenterClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-main-nav__list-item .zdcm-megamenu-products-action-wrapper .zdcm-items-right .zdcm-megamenu-products-download-card:not(.zdcm-megamenu-products-support) a"
  );
  if (_downloadCenterClicks.length > 0) {
    _downloadCenterClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t4, _link$querySelector5;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$t4 =
            (_link$querySelector5 = link.querySelector(
              ".zdcm-donwload-content-title"
            )) === null || _link$querySelector5 === void 0
              ? void 0
              : _link$querySelector5.textContent.trim()) !== null &&
          _link$querySelector$t4 !== void 0
            ? _link$querySelector$t4
            : "";
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav",
        });
      });
    });
  }

  const _DeveloperAppCenterClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-main-nav__list-item .zdcm-megamenu-products-action-wrapper .zdcm-megamenu-products-action:not(.zdcm-items-right) .zdcm-megamenu-products-download-card a"
  );
  if (_DeveloperAppCenterClicks.length > 0) {
    _DeveloperAppCenterClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t5, _link$querySelector6;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$t5 =
            (_link$querySelector6 = link.querySelector(
              ".zdcm-donwload-content-title"
            )) === null || _link$querySelector6 === void 0
              ? void 0
              : _link$querySelector6.textContent.trim()) !== null &&
          _link$querySelector$t5 !== void 0
            ? _link$querySelector$t5
            : "";
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav",
        });
      });
    });
  }

  const _trackAllUniversalNavMenuClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-megamenu-products-wrapper .zdcm-megamenu-products-categories .zdcm-megamenu__workplace__column .zdcm-megamenu__list-item a, nav.zdcm-mobile-menu .zdcm-accordion-content .zdcm-megamenu-products-wrapper .zdcm-megamenu-products-categories .zdcm-megamenu__workplace__column .zdcm-megamenu__list-item a,.zdcm-mobile-menu__content-panel .zdcm-megamenu-products-wrapper .zdcm-megamenu-products-categories .zdcm-megamenu__workplace__column .zdcm-megamenu__list-item a"
  );
  if (_trackAllUniversalNavMenuClicks.length > 0) {
    _trackAllUniversalNavMenuClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        var _link$querySelector$t6, _link$querySelector7, _event$target$closest;
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText =
          (_link$querySelector$t6 =
            (_link$querySelector7 = link.querySelector(
              "span.visually-hidden"
            )) === null || _link$querySelector7 === void 0
              ? void 0
              : _link$querySelector7.textContent.trim()) !== null &&
          _link$querySelector$t6 !== void 0
            ? _link$querySelector$t6
            : "";
        const menuName =
          (_event$target$closest = event.target.closest(".zdcm-megamenu")) ===
            null ||
          _event$target$closest === void 0 ||
          (_event$target$closest =
            _event$target$closest.getAttribute("aria-label")) === null ||
          _event$target$closest === void 0
            ? void 0
            : _event$target$closest.toLowerCase();
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav - " + menuName + " menu",
        });
      });
    });
  }

  //Function for hub page new Navigation
  const _trackAllUniversalNavHubPageClicks = document.querySelectorAll(
    "nav.zdcm-main-nav .zdcm-main-nav__left .zdcm-main-nav__list-item .zdcm-megamenu-fit .zdcm-main-nav__dropdown-list-item a"
  );
  if (_trackAllUniversalNavHubPageClicks.length > 0) {
    _trackAllUniversalNavHubPageClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = event.currentTarget.href || event.target.href || undefined;
        const linkText = event.currentTarget.innerText || "";
        window.dataLayer.push({
          event: "navClick",
          linkText: linkText.toLowerCase(),
          linkUrl: href,
          uiLocation: "universal nav - " + linkText.toLowerCase() + " menu",
        });
      });
    });
  }

  /** Universal Nav Menu - Search **/
  const _searchClicks = document.querySelectorAll("#coveoSearchHeader");
  if (_searchClicks.length > 0) {
    _searchClicks.forEach((link) => {
      link.addEventListener("click", function (event) {
        const isExpanded = link.getAttribute("aria-expanded") === "true";
        window.dataLayer.push({
          event: "searchInteraction",
          searchInteraction: isExpanded ? "search bar clicked" : "clear search",
          uiLocation: "universal nav",
        });
      });
    });
  }

  let meetButtons = document.querySelectorAll(
    ".zdcm-item-meet > .zdcm-main-nav__megamenu-trigger"
  );
  if (meetButtons.length > 0) {
    meetButtons.forEach((button, index) => {
      let previousState = button.getAttribute("aria-expanded");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "aria-expanded") {
            const newState = button.getAttribute("aria-expanded");
            if (newState !== previousState) {
              previousState = newState;
              const nextState = newState === "true" ? "expand" : "collapse";
              this.DataLayerHelper.pushEvent("navClick", {
                linkText: `Meet - ${nextState}`,
                linkUrl: undefined,
                uiLocation: "universal nav",
              });
            }
          }
        });
      });
      observer.observe(button, {
        attributes: true,
      });
    });
  }

  const dropdownLinks = document.querySelectorAll(
    ".zdcm-item-meet .zdcm-main-nav__dropdown-link"
  );
  if (dropdownLinks.length > 0) {
    dropdownLinks.forEach((link) => {
      link.addEventListener("click", () => {
        var _link$innerText;
        const linkText =
          (_link$innerText = link.innerText) === null ||
          _link$innerText === void 0
            ? void 0
            : _link$innerText.split("\n")[0].trim();
        const linkUrl = link.href;
        this.DataLayerHelper.pushEvent("navClick", {
          linkText: linkText,
          linkUrl: linkUrl,
          uiLocation: "universal nav - meet",
        });
      });
    });
  }

  // Track accordion buttons (Products, AI, Solutions)
  const accordionButtons = document.querySelectorAll(
    ".zdcm-mobile-menu__accordion.js-accordion-trigger"
  );
  if (accordionButtons.length > 0) {
    accordionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        var _btn$textContent;
        const ariaExpand =
          btn === null || btn === void 0
            ? void 0
            : btn.getAttribute("aria-expanded");
        const sectionName =
          btn === null ||
          btn === void 0 ||
          (_btn$textContent = btn.textContent) === null ||
          _btn$textContent === void 0
            ? void 0
            : _btn$textContent.trim().toLowerCase();
        var linkText = sectionName;
        if (ariaExpand == "true") {
          linkText = linkText + " - expand";
        } else {
          linkText = linkText + " - collapse";
        }
        this.DataLayerHelper.pushEvent("linkClick", {
          linkText: linkText,
          linkUrl: undefined,
          uiLocation: "universal nav mobile",
        });
      });
    });
  }

  const accordionButtons1 = document.querySelectorAll(
    ".zdcm-mobile-menu__accordion.js-accordion-trigger"
  );
  accordionButtons1.forEach((btn) => {
    btn.addEventListener("click", () => {
      var _btn$closest;
      const sectionName =
        ((_btn$closest = btn.closest("li")) === null ||
        _btn$closest === void 0 ||
        (_btn$closest = _btn$closest.getAttribute("data-content")) === null ||
        _btn$closest === void 0
          ? void 0
          : _btn$closest.trim()) || btn.textContent.trim();
      setTimeout(() => {
        const backBtn = document.querySelector(".zdcm-mobile-back");
        if (backBtn) {
          backBtn.removeEventListener("click", backBtn._dlHandler);
          const handler = () => {
            this.DataLayerHelper.pushEvent("linkClick", {
              linkText: sectionName.toLowerCase() + " - collapse",
              linkUrl: undefined,
              uiLocation: "universal nav mobile",
            });
          };
          backBtn._dlHandler = handler;
          backBtn.addEventListener("click", handler);
        }
      }, 300);
    });
  });

  function DataLayerFooter() {
    this.footer = document.querySelector(".footer-content");
    this.DataLayerHelper = {
      pushEvent: function (eventName, data) {
        if (!eventName) return;
        data = data || {};
        var eventData = {
          event: eventName,
        };
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            eventData[key] = data[key] === "" ? undefined : data[key];
          }
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventData);
      },
    };
  }

  DataLayerFooter.prototype._init = function () {
    if (this.footer) {
      this._trackFooterLinks();
      this._trackSocialLinks();
      this._trackLegalLinks();
      this._trackCurrencyDropdown();
      this._trackLanguageDropdown();
      this._trackFooterDesktopDownloadCenter();
      this._trackFooterMobileDownloadLinks();
      this._trackMobileCurrencyLanguageDropdowns();
      this._trackMobilePrimaryDropdownToggles();
    }
  };

  DataLayerFooter.prototype._trackFooterLinks = function () {
    var self = this;
    var links = this.footer.querySelectorAll(".zdcm-module-footer-nav__link");
    for (var i = 0; i < links.length; i++) {
      (function (link) {
        link.addEventListener("click", function () {
          var href = link.href || undefined;
          if (href && href.indexOf("tel:") === 0) return;

          var linkLabel = "";
          var childNodes = link.childNodes;
          for (var j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType === 3) {
              // TEXT_NODE
              linkLabel += childNodes[j].textContent.trim() + " ";
            }
          }
          linkLabel = linkLabel.trim().toLowerCase();

          var section = link.closest("section");
          var sectionHeader = "";
          if (section) {
            var titleElem = section.querySelector(
              ".zdcm-module-footer-nav__title"
            );
            if (titleElem && titleElem.getAttribute) {
              sectionHeader = titleElem.getAttribute("Title") || "";
              sectionHeader = sectionHeader.toLowerCase();
            }
          }

          var linkText =
            sectionHeader && linkLabel
              ? sectionHeader + " - " + linkLabel
              : linkLabel;

          self.DataLayerHelper.pushEvent("navClick", {
            linkText: linkText,
            linkUrl: href,
            uiLocation: "universal footer",
          });
        });
      })(links[i]);
    }

    var mainLinks = this.footer.querySelectorAll(
      ".zdcm-module-footer-nav__title"
    );
    if (window.innerWidth > 1024) {
      for (var k = 0; k < mainLinks.length; k++) {
        (function (mainLink) {
          mainLink.addEventListener("click", function () {
            var href = mainLink.href || undefined;
            var text = mainLink.innerText || "";
            var linkText = text.split("\n")[0].trim();
            self.DataLayerHelper.pushEvent("navClick", {
              linkText: linkText,
              linkUrl: href,
              uiLocation: "universal footer",
            });
          });
        })(mainLinks[k]);
      }
    }
  };

  DataLayerFooter.prototype._trackSocialLinks = function () {
    var self = this;
    var links = this.footer.querySelectorAll(
      "ul.social__list li.social__item a.social__link"
    );
    for (var i = 0; i < links.length; i++) {
      (function (link) {
        link.addEventListener("click", function () {
          var platform = (link.title || "").trim().toLowerCase();
          self.DataLayerHelper.pushEvent("navClick", {
            linkText: platform,
            linkUrl: link.href,
            uiLocation: "universal footer",
          });
        });
      })(links[i]);
    }
  };

  DataLayerFooter.prototype._trackLegalLinks = function () {
    var self = this;
    var links = this.footer.querySelectorAll(
      "div.utility-nav ul.utility-nav__list li.utility-nav__item a"
    );
    for (var i = 0; i < links.length; i++) {
      (function (link) {
        link.addEventListener("click", function () {
          var text = (link.innerText || "").trim().toLowerCase();
          self.DataLayerHelper.pushEvent("navClick", {
            linkText: text,
            linkUrl: link.href || "",
            uiLocation: "universal footer",
          });
        });
      })(links[i]);
    }
  };

  DataLayerFooter.prototype._trackCurrencyDropdown = function () {
    var self = this;
    var currencyBtn = this.footer.querySelector(
      '[data-template="js-currency-content"]'
    );
    if (currencyBtn) {
      var isExpanded = false;
      currencyBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;
        var state = isExpanded ? "expand" : "collapse";
        self.DataLayerHelper.pushEvent("linkClick", {
          linkText: "currency - " + state,
          uiLocation: "universal footer",
        });

        if (isExpanded) {
          var currencyButtons = document.querySelectorAll(
            "#js-currency-content .zdcm-module-footer-dropdown__link"
          );
          for (var i = 0; i < currencyButtons.length; i++) {
            (function (button) {
              if (!button.hasAttribute("data-dl-bound")) {
                button.setAttribute("data-dl-bound", "true");
                button.addEventListener("click", function () {
                  var label = button.textContent.trim().toLowerCase();
                  self.DataLayerHelper.pushEvent("linkClick", {
                    linkText: "currency - " + label,
                    uiLocation: "universal footer",
                  });

                  // collapse dropdown
                  isExpanded = false;
                  self.DataLayerHelper.pushEvent("linkClick", {
                    linkText: "currency - collapse",
                    uiLocation: "universal footer",
                  });
                });
              }
            })(currencyButtons[i]);
          }
        }
      });
    }
  };

  DataLayerFooter.prototype._trackLanguageDropdown = function () {
    var self = this;
    var languageBtn = this.footer.querySelector(
      '[data-template="js-language-content"]'
    );
    if (languageBtn) {
      var isExpanded = false;
      languageBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;
        var state = isExpanded ? "expand" : "collapse";
        self.DataLayerHelper.pushEvent("linkClick", {
          linkText: "language - " + state,
          uiLocation: "universal footer",
        });

        if (isExpanded) {
          var languageLinks = document.querySelectorAll(
            "#js-language-content .zdcm-module-footer-dropdown__link"
          );
          for (var i = 0; i < languageLinks.length; i++) {
            (function (link) {
              if (!link.hasAttribute("data-dl-bound")) {
                link.setAttribute("data-dl-bound", "true");
                link.addEventListener("click", function () {
                  var label = link.textContent.trim().toLowerCase();
                  self.DataLayerHelper.pushEvent("linkClick", {
                    linkText: "language - " + label,
                    uiLocation: "universal footer",
                  });

                  // collapse dropdown
                  isExpanded = false;
                  self.DataLayerHelper.pushEvent("linkClick", {
                    linkText: "language - collapse",
                    uiLocation: "universal footer",
                  });
                });
              }
            })(languageLinks[i]);
          }
        }
      });
    }
  };

  DataLayerFooter.prototype._trackFooterDesktopDownloadCenter = function () {
    var self = this;
    var downloadLink = document.querySelector(
      ".zdcm-module-footer-nav__getApp-desktop a.link-app-desktop"
    );
    if (downloadLink) {
      downloadLink.addEventListener("click", function () {
        var downloadTextElem = downloadLink.querySelector(
          ".zdcm-module-footer-nav-downloadText"
        );
        var linkText = downloadTextElem
          ? downloadTextElem.textContent.trim()
          : "Download Center";
        var linkUrl = downloadLink.getAttribute("href");
        self.DataLayerHelper.pushEvent("navClick", {
          linkText: linkText,
          linkUrl: linkUrl,
          uiLocation: "universal footer",
        });
      });
    }
  };

  DataLayerFooter.prototype._trackFooterMobileDownloadLinks = function () {
    var self = this;
    var downloadLinks = document.querySelectorAll(
      ".zdcm-module-footer-nav__getApp a.link-app"
    );
    for (var i = 0; i < downloadLinks.length; i++) {
      (function (link) {
        link.addEventListener("click", function () {
          var downloadTextElem = link.querySelector(
            ".zdcm-module-footer-nav-downloadText"
          );
          var linkText = downloadTextElem
            ? downloadTextElem.textContent.trim()
            : "Download App";
          var linkUrl = link.getAttribute("href");
          self.DataLayerHelper.pushEvent("navClick", {
            linkText: linkText,
            linkUrl: linkUrl,
            uiLocation: "universal footer - mobile",
          });
        });
      })(downloadLinks[i]);
    }
  };

  DataLayerFooter.prototype._trackMobileCurrencyLanguageDropdowns =
    function () {
      var self = this;

      function pushDL(text) {
        self.DataLayerHelper.pushEvent("linkClick", {
          linkText: text,
          uiLocation: "universal footer - mobile",
        });
      }

      // Language dropdown
      var languageContainer = document.querySelector(
        "#js-language-mobile-content"
      );
      var languageBtn = this.footer.querySelector(
        '[data-template="js-language-mobile-content"]'
      );
      if (languageBtn && languageContainer) {
        var langExpanded = false;
        languageBtn.addEventListener("click", function () {
          langExpanded = !langExpanded;
          pushDL("language - " + (langExpanded ? "expand" : "collapse"));
        });
        var langLinks = languageContainer.querySelectorAll(
          ".zdcm-module-footer-dropdown__link"
        );
        for (var i = 0; i < langLinks.length; i++) {
          (function (link) {
            if (!link.hasAttribute("data-dl-bound")) {
              link.setAttribute("data-dl-bound", "true");
              link.addEventListener("click", function () {
                var label = link.textContent.trim().toLowerCase();
                pushDL("language - " + label);
                langExpanded = false;
                pushDL("language - collapse");
              });
            }
          })(langLinks[i]);
        }
      }

      // Currency dropdown
      var currencyContainer = document.querySelector(
        "#js-currency-mobile-content"
      );
      var currencyBtn = this.footer.querySelector(
        '[data-template="js-currency-mobile-content"]'
      );
      if (currencyBtn && currencyContainer) {
        var curExpanded = false;
        currencyBtn.addEventListener("click", function () {
          curExpanded = !curExpanded;
          pushDL("currency - " + (curExpanded ? "expand" : "collapse"));
        });
        var curButtons = currencyContainer.querySelectorAll(
          ".zdcm-module-footer-dropdown__link"
        );
        for (var i = 0; i < curButtons.length; i++) {
          (function (button) {
            if (!button.hasAttribute("data-dl-bound")) {
              button.setAttribute("data-dl-bound", "true");
              button.addEventListener("click", function () {
                var label = button.textContent.trim().toLowerCase();
                pushDL("currency - " + label);
                curExpanded = false;
                pushDL("currency - collapse");
              });
            }
          })(curButtons[i]);
        }
      }
    };

  DataLayerFooter.prototype._trackMobilePrimaryDropdownToggles = function () {
    var self = this;

    function waitForFooterLinks(selector, callback) {
      var interval = setInterval(function () {
        var elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
          clearInterval(interval);
          callback(elements);
        }
      }, 100);
    }

    waitForFooterLinks(
      ".zdcm-module-footer-top__primary .zdcm-module-footer-nav section > a",
      function (links) {
        for (var i = 0; i < links.length; i++) {
          (function (link) {
            link.addEventListener("click", function (event) {
              var linkText =
                event.currentTarget.innerText || event.target.innerText || "";
              var textContent = "";
              var childNodes = event.currentTarget.childNodes;
              for (var j = 0; j < childNodes.length; j++) {
                if (childNodes[j].nodeType === 3) {
                  // TEXT_NODE
                  textContent += childNodes[j].textContent.trim() + " ";
                }
              }
              textContent = textContent.trim().toLowerCase();
              if (textContent) {
                linkText = textContent;
              } else {
                linkText = linkText.toLowerCase();
              }

              if (event.currentTarget.classList.contains("active")) {
                linkText += " - expand";
              } else {
                linkText += " - collapse";
              }

              window.dataLayer = window.dataLayer || [];
              if (window.innerWidth <= 1024) {
                window.dataLayer.push({
                  event: "linkClick",
                  linkText: linkText,
                  uiLocation: "universal footer - mobile",
                });
              }
            });
          })(links[i]);
        }
      }
    );
  };

  // Create an instance of the tracking object
  var footerTracker = new DataLayerFooter();

  // Initialize tracking
  footerTracker._init();

 document.querySelectorAll(".module-video-expander a").forEach(link => {
         link.addEventListener('click', function (event) {
            const href = event.currentTarget.href || event.target.href || undefined;
            const linkText = event.currentTarget.innerText || event.target.innerText || '';
            const titleText = document.querySelector('h1.module-video-expander__title').innerText || '';
            const eventData = {
               'event': 'linkClick',
               'linkText': linkText.toLowerCase(),
               'linkUrl': href,
               'uiLocation': 'hero',
               'contentTitle': titleText
            };
            window.dataLayer.push(eventData);
         });
      });

}

function userLoginStatus() {
  try {
    function deleteCookie(cookieName) {
      // Delete cookie at root path
      document.cookie = `${cookieName}=; Max-Age=-99999999; path=/;`;
      // Delete cookie at each sub-path
      const pathParts = location.pathname.split("/");
      for (let i = 0; i < pathParts.length; i++) {
        const path = pathParts.slice(0, i + 1).join("/");
        document.cookie = `${cookieName}=; Max-Age=-99999999; path=${path};`;
      }
      // Delete cookie on all domain variations
      const hostname = location.hostname;
      const domainParts = hostname.split(".");
      if (domainParts.length > 1) {
        for (let i = 0; i < domainParts.length - 1; i++) {
          const domain = domainParts.slice(-i - 1).join(".");
          document.cookie = `${cookieName}=; Max-Age=-99999999; path=/; domain=.${domain};`;
        }
      }
    }



    // Get a cookie by name
    function getCookie(name) {
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        if (parts[0] === name) {
          return parts[1];
        }
      }
      return null;
    }

    var cmsGuid = getCookie("_zm_cms_guid");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://zoom.us/market_verify/v2", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            var userStatus =
              data && data.result && data.result.userStatus
                ? data.result.userStatus
                : "Not Found";
            if (userStatus === "authenticated") {
              var signUpFree = document.querySelector(".zdcm-unauthorized");
              if (signUpFree) signUpFree.style.display = "none";

              var signInDesktop = document.querySelector("#signInDesktop");
              if (signInDesktop) signInDesktop.style.display = "none";

              var userProfile = document.querySelector("#userProfile");
              if (userProfile) userProfile.style.display = "block";

              var firstName = data && data.result && data.result.firstName;
              var lastName = data && data.result && data.result.lastName;
              var trimmedFirstName =
                firstName && firstName.length > 1 ? firstName.substring(0) : "";
              var trimmedLastName =
                lastName && lastName.length > 1 ? lastName.substring(0) : "";
              var initials =
                (trimmedFirstName && trimmedFirstName[0]
                  ? trimmedFirstName[0].toUpperCase()
                  : "") +
                (trimmedLastName && trimmedLastName[0]
                  ? trimmedLastName[0].toUpperCase()
                  : "");

              document.querySelector("span.zdcm-profile-picture").innerText =
                initials;
              document.querySelector("span.zdcm-user-initials").innerText =
                initials;
              document.querySelector("span.zdcm-user-name").innerText =
                firstName + " " + lastName;
              document.querySelector("#myAccount .visually-hidden").innerText =
                firstName + " " + lastName;

              var signInTab = document.querySelector("#signInTab");
              if (signInTab) signInTab.style.display = "none";

              var signInMobile = document.querySelector("#signInMobile");
              if (signInMobile) signInMobile.style.display = "none";

              var signUpFreeMobile =
                document.querySelector("#signUpFreeMobile");
              if (signUpFreeMobile) signUpFreeMobile.style.display = "none";

              var whatsNewDesktop = document.querySelector("#whatsNewDesktop");
              if (whatsNewDesktop) whatsNewDesktop.style.display = "block";
            } else if (userStatus === "unauthenticated") {
              var userProfile = document.querySelector("#userProfile");
              if (userProfile) userProfile.style.display = "none";

              var whatsNewDesktop = document.querySelector("#whatsNewDesktop");
              if (whatsNewDesktop) whatsNewDesktop.style.display = "none";
            }
            pushPageLoadToDataLayer(data.result);           
          } catch (e) {
            console.error("JSON Parse Error:", e);
            pushPageLoadToDataLayer();           
          }
        }
      }
    };
    xhr.send("cms_guid=" + encodeURIComponent(cmsGuid));
  } catch (error) {}
}

function pushPageLoadToDataLayer(marketVerifyResult) {
    let marketVerifyObject = {}
    window.zmGlobalMrktKey = ''
    if (marketVerifyResult) {
      let userRole = processMarketVerifyValue(
        marketVerifyResult.userRole,
        'User Role'
      )

      let rateMrr = processMarketVerifyValue(
        marketVerifyResult.rateMrr,
        'Rate Mrr'
      )

      marketVerifyObject = Object.assign(
        {
          event: document.getElementById('market-verify-eventname').value,
          pageName:
            document.getElementById('market-verify-pagename').value ||
            undefined,
          pageLanguage:
            document.getElementById('market-verify-pagelanguage').value ||
            undefined,
          userCountry:
            document.getElementById('market-verify-usercountry').value ||
            undefined,
          zoom_id: processMarketVerifyValue(
            marketVerifyResult.zmGlobalMrktKey,
            'Zoom Global Marketing Key'
          ),
          fullUrl:
            document.getElementById('market-verify-fullUrl').value || undefined,
          userStatus: processMarketVerifyValue(
            marketVerifyResult.userStatus,
            'User Status'
          ),
          userRole: processMarketVerifyValue(
            marketVerifyResult.userRole,
            'User Role'
          ),
          productUserType: processMarketVerifyValue(
            marketVerifyResult.productUserType,
            'Product User Type'
          ),
          accountType: processMarketVerifyValue(
            marketVerifyResult.accountType,
            'Account Type'
          ),
          accountPlanType: processMarketVerifyValue(
            marketVerifyResult.accountPlanType,
            'Account Plan Type'
          ),
          accountChannel: processMarketVerifyValue(
            marketVerifyResult.accountChannel,
            'Account Channel'
          ),
          domainType: processMarketVerifyValue(
            marketVerifyResult.domainType,
            'Domain Type'
          ),
          billingCycle: processMarketVerifyValue(
            marketVerifyResult.billingCycle,
            'Billing Cycle'
          ),
          expirationDate: processMarketVerifyValue(
            marketVerifyResult.expirationDate,
            'Expiration date'
          ),
          autoRenew: processMarketVerifyValue(
            marketVerifyResult.autoRenew,
            'Auto Renew'
          ),
          rateMrr: processMarketVerifyValue(
            marketVerifyResult.rateMrr,
            'Rate Mrr'
          ),
          chargeType: processMarketVerifyValue(
            marketVerifyResult.chargeType,
            'Charge Typr'
          ),
          licenseCount: processMarketVerifyValue(
            marketVerifyResult.licenseCount,
            'License Count'
          ),
          paidStartDate: processMarketVerifyValue(
            marketVerifyResult.paidStartDate,
            'Paid Start Date'
          ),
          licenseDiscount: processMarketVerifyValue(
            marketVerifyResult.licenseDiscount,
            'License Discount'
          ),
          addOns: processMarketVerifyValue(
            marketVerifyResult.addOns,
            'Add Ons'
          ),
          trackingGuid: processMarketVerifyValue(
            marketVerifyResult.trackingGuid,
            'Tacking Guid'
          ),
          visitorGuid: processMarketVerifyValue(
            marketVerifyResult.visitorGuid,
            'Visitor Guid'
          ),
          salesChannel: processMarketVerifyValue(
            marketVerifyResult.salesChannel,
            'Sales Channel'
          ),
          verticalSegment: processMarketVerifyValue(
            marketVerifyResult.verticalSegment,
            'Vertical Segment'
          ),
          salesSegment: processMarketVerifyValue(
            marketVerifyResult.salesSegment,
            'Sales Segment'
          ),
          salesDivision: processMarketVerifyValue(
            marketVerifyResult.salesDivision,
            'Sales Division'
          ),
          billingCountry: processMarketVerifyValue(
            marketVerifyResult.billingCountry,
            'Billing Country'
          ),
          employeeCount: processMarketVerifyValue(
            marketVerifyResult.employeeCount,
            'Employee Count'
          ),
          webClusterId: processMarketVerifyValue(
            marketVerifyResult.webClusterId,
            'Web Cluster ID'
          ),
          segmentValue: processMarketVerifyValue(
            marketVerifyResult.segmentValue,
            'Segment Value'
          ),
          userAge: processMarketVerifyValue(
            marketVerifyResult.userAge,
            'User Age'
          ),
          accountNo: processMarketVerifyValue(
            marketVerifyResult.accountNo,
            'Account Number'
          ),
          email: processMarketVerifyValue(
            marketVerifyResult.email,
            'Email'
          ),
          isFeedbackEnabled: processMarketVerifyValue(
            marketVerifyResult.isFeedbackEnabled,
            'Is Feedback Enabled'
          ),
          isPaidUser: processMarketVerifyValue(
            marketVerifyResult.isPaidUser,
            'Is Paid User'
          ),
          couponType: processMarketVerifyValue(
            marketVerifyResult.couponType,
            'Coupon Type'
          ),
          discountType: processMarketVerifyValue(
            marketVerifyResult.discountType,
            'Discount Type'
          ),
          pageType: processMarketVerifyValue(
            'marketing',
            'Page Type'
          ),
          experimentVariant: processMarketVerifyValue(
            marketVerifyResult.experimentVariant,
            'Experiment Variant'
          ),
          accountHealthScore: processMarketVerifyValue(
            marketVerifyResult.accountHealthScore,
            'Account Health Score'
          ),
          phonePropensityScore: processMarketVerifyValue(
            marketVerifyResult.phonePropensityScore,
            'Phone Propensity Score'
          ),
          winbackPropensityScore: processMarketVerifyValue(
            marketVerifyResult.winbackPropensityScore,
            'Winback Propensity Score'
          ),
          meetingsUpsellScore: processMarketVerifyValue(
            marketVerifyResult.meetingsUpsellScore,
            'Meetings Upsell Score'
          ),
          meetingsUpsellProduct: processMarketVerifyValue(
            marketVerifyResult.meetingsUpsellProduct,
            'Meetings Upsell Product'
          ),
          meetingsUpsellChannel: processMarketVerifyValue(
            marketVerifyResult.meetingsUpsellChannel,
            'Meetings Upsell Channel'
          ),
          isSensitiveReferrer: processMarketVerifyValue(
            marketVerifyResult.isSensitiveReferrer,
            'Is Sensitive Referrer'
          ),
          fromOP: processMarketVerifyValue(
            marketVerifyResult.fromOP,
            'From OP'
          ),
          Vertical: processMarketVerifyValue(
            marketVerifyResult.Vertical,
            'Vertical'
          )
        },
        window.extraPageLoadFields || {}
      )

      let isAuthenticated =
        marketVerifyObject.userStatus !== undefined &&
        marketVerifyObject.userStatus === 'authenticated'
      if (
        isAuthenticated &&
        marketVerifyObject.visitorGuid !== undefined &&
        marketVerifyObject.zoom_id !== undefined
      ) {
        window.zmGlobalMrktId = marketVerifyObject.visitorGuid
        window.zmGlobalMrktKey = marketVerifyObject.zoom_id
        createCookieWithValue(
          '_zm_mtk_guid',
          marketVerifyObject.visitorGuid
        )
        createCookieWithValue(
          '_zm_global_mtk_key',
          marketVerifyObject.zoom_id
        )
      } else {
        window.zmGlobalMrktKey = ''
        createCookieWithValue('_zm_global_mtk_key', '')
      }
    } else {
      marketVerifyObject = Object.assign(
        {
          event: document.getElementById('market-verify-eventname').value,
          pageName:
            document.getElementById('market-verify-pagename').value ||
            undefined,
          pageLanguage:
            document.getElementById('market-verify-pagelanguage').value ||
            undefined,
          userCountry:
            document.getElementById('market-verify-usercountry').value ||
            undefined,
          zoom_id: window.zmGlobalMrktKey || undefined,
          fullUrl:
            document.getElementById('market-verify-fullUrl').value || undefined,
          userStatus: undefined,
          userRole: undefined,
          productUserType: undefined,
          accountType: undefined,
          accountPlanType: undefined,
          accountChannel: undefined,
          domainType: undefined,
          billingCycle: undefined,
          expirationDate: undefined,
          autoRenew: undefined,
          rateMrr: undefined,
          chargeType: undefined,
          licenseCount: undefined,
          paidStartDate: undefined,
          licenseDiscount: undefined,
          addOns: undefined,
          trackingGuid: undefined,
          visitorGuid: undefined,
          salesChannel: undefined,
          verticalSegment: undefined,
          salesSegment: undefined,
          salesDivision: undefined,
          billingCountry: undefined,
          employeeCount: undefined,
          webClusterId: undefined,
          segmentValue: undefined,
          userAge: undefined,
          accountNo: undefined,
          email: undefined,
          isFeedbackEnabled: undefined,
          isPaidUser: undefined,
          couponType: undefined,
          discountType: undefined,
          pageType: undefined,
          experimentVariant: undefined,
          accountHealthScore: undefined,
          phonePropensityScore: undefined,
          winbackPropensityScore: undefined,
          meetingsUpsellScore: undefined,
          meetingsUpsellProduct: undefined,
          meetingsUpsellChannel: undefined,
          isSensitiveReferrer: undefined,
          fromOP: undefined,
          Vertical: undefined
        },
        window.extraPageLoadFields || {}
      )
    }

    window['optimizely'] = window['optimizely'] || []
    window['optimizely'].push({
      type: 'tags',
      tags: {
        zm_usr_id_sha256: window.zmGlobalMrktKey || ''
      }
    })

    window.dataLayer.push(marketVerifyObject)
  }
function createCookieWithValue(cookieName, cookieValue) {
   if (cookieValue != undefined) {
     let domain =
       location.hostname.split('.').reverse()[1] +
       '.' +
       location.hostname.split('.').reverse()[0]
     setCookie(cookieName, cookieValue, 365, domain)
   }
 }

  function setCookie(cookieName, value, days, domain) {
   var expires = ''
   if (days) {
     var date = new Date()
     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
     expires = '; expires=' + date.toUTCString()
   }
   if (typeof value === 'object') {
     // because of Safari bug handling JSON in cookies commas need to be stripped out
     let obj = {}
     for (const [key, item] of Object.entries(value)) {
       if (typeof item == 'string') obj[key] = item.replace(/,/, 'U+0002C')
       else obj[key] = item
     }
     // turn value into JSON
     value = JSON.stringify(obj)
   }
   // create cookie
   document.cookie =
     cookieName +
     '=' +
     (value || '') +
     expires +
     '; path=/;secure;samesite=none;domain=.' +
     domain
 }
function   processMarketVerifyValue(result, propertyName) {
    if (result === 0) {
      return result
    }

    if (Number.isInteger(result)) {
      return result
    }

    if (result == null) {
      return undefined
    }

    if (result != '') {
      return result
    }

    if (typeof result === 'boolean') {
      return result;
    }
    return undefined
  }


function waitUntil(predicate, success, error) {
        const int = setInterval(() => {
            if (predicate()) {
                clearInterval(int);
                success();
            }
        }, 33);

        setTimeout(() => {
            if (int !== null) {
                clearInterval(int);
                if (typeof error === 'function') error();
            }
        }, 10000);
    }

function initialize() {
  const createFocusTrap = (el, config) => ({
      activate: () => {
          if (config.onActivate) config.onActivate();
      },
      deactivate: () => {
          if (config.onDeactivate) config.onDeactivate();
      }
  });
  class AccordionWidget {
      constructor(el, props = {}) {
          if (!el) return;
          this.el = el;
          let triggerClass = 'js-accordion-trigger';
          let panelClass = 'js-accordion-panel';
          if (props.id) {
              triggerClass += props.id;
              panelClass += props.id;
          }
          const expandFirst = el.dataset.firstexpanded === 'true';
          this.multiSelectable = this.el.hasAttribute('aria-multiselectable');
          let selectedIndex;
          if (Number.isInteger(props.selectedIndex)) {
              selectedIndex = props.selectedIndex;
          } else if (expandFirst) {
              selectedIndex = 0;
          }
          this.accordionTriggers = this.el.getElementsByClassName(triggerClass);
          this.accordionPanels = this.el.getElementsByClassName(panelClass);
          if (this.accordionTriggers.length === 0 || this.accordionTriggers.length !== this.accordionPanels.length) return;
          if (selectedIndex === undefined && el.dataset.openPanels) {
              let openPanels = el.dataset.openPanels.split(',');
              const panelArr = [];
              for (const panel of openPanels) {
                  const n = parseInt(panel);
                  if ((n | 0) > 0 && n % 1 === 0 && n <= this.accordionTriggers.length) {
                      panelArr.push(n - 1);
                      if (!this.multiSelectable) break;
                  }
              }
              if (panelArr.length) selectedIndex = panelArr;
          }
          this._init(selectedIndex);
      }
      _init(selectedIndex) {
          this.accordionTriggersLength = this.accordionTriggers.length;
          this.expandedAccordions = new Array(this.accordionTriggersLength);
          this.clickListener = this._clickEvent.bind(this);
          this.keydownListener = this._keydownEvent.bind(this);
          this.focusListener = this._focusEvent.bind(this);
          this.keys = {
              prev: 38,
              next: 40,
              space: 32
          };
          let initialSelectedIndex;
          for (let i = 0; i < this.accordionTriggersLength; i++) {
              this.accordionTriggers[i].index = i;
              this.accordionTriggers[i].addEventListener('click', this.clickListener, false);
              this.accordionTriggers[i].addEventListener('keydown', this.keydownListener, false);
              this.accordionTriggers[i].addEventListener('focus', this.focusListener, false);
              this.accordionTriggers[i].classList.add('is-accordion-trigger');
              if (this.accordionTriggers[i].classList.contains('is-selected')) {
                  this.expandedAccordions[i] = true;
              }
          }
          for (let i = 0; i < this.accordionPanels.length; i++) {
              this.accordionPanels[i].classList.add('is-accordion-panel');
          }
          if (!isNaN(selectedIndex)) {
              initialSelectedIndex = selectedIndex;
              this.expandedAccordions = new Array(this.accordionTriggersLength);
              this.expandedAccordions[initialSelectedIndex] = true;
          } else if (Array.isArray(selectedIndex)) {
              initialSelectedIndex = selectedIndex;
              this.expandedAccordions = new Array(this.accordionTriggersLength);
              for (let i = 0; i < this.accordionTriggersLength; i++) {
                  if (selectedIndex.includes(i)) this.expandedAccordions[i] = true;
              }
          } else {
              initialSelectedIndex = this.expandedAccordions.lastIndexOf(true);
              if (!this.multiSelectable) {
                  this.expandedAccordions = new Array(this.accordionTriggersLength);
                  this.expandedAccordions[initialSelectedIndex] = true;
              }
          }
          this.initialSetIndex = selectedIndex;
          this.setSelected(initialSelectedIndex);
          this.setExpanded();
          this.setAPI();
          this.el.classList.add('is-accordion');
          this.el.classList.add('is-initialized');
      }
      _clickEvent(e) {
          e.preventDefault();
          this.setSelected(e.target.index, true);
          this.setExpanded(e.target.index, true);
      }
      _keydownEvent(e) {
          let targetIndex;
          switch (e.keyCode) {
              case this.keys.space:
              case this.keys.prev:
              case this.keys.next:
                  e.preventDefault();
                  break;
              default:
                  return;
          }
          if (e.keyCode === this.keys.space) {
              e.target.click();
              return;
          } else if (e.keyCode === this.keys.prev && e.target.index > 0) {
              targetIndex = e.target.index - 1;
          } else if (e.keyCode === this.keys.next && e.target.index < this.accordionTriggersLength - 1) {
              targetIndex = e.target.index + 1;
          } else return;
          this.setSelected(targetIndex, true);
      }
      _focusEvent() {
          if (this.accordionTriggersLength === 1) this.setSelected(0);
      }
      setSelected(index, userInvoked) {
          if (index === -1) {
              this.accordionTriggers[0].setAttribute('tabindex', 0);
              return;
          }
          if (Array.isArray(index)) index = index[0];
          for (let i = 0; i < this.accordionTriggersLength; i++) {
              if (i === index) {
                  this.accordionTriggers[i].classList.add('is-selected');
                  if (userInvoked) this.accordionTriggers[i].focus();
              } else {
                  this.accordionTriggers[i].classList.remove('is-selected');
              }
          }
      }
      setExpanded(index, userInvoked) {
          let i;
          if (index === -1) this.expandedAccordions = [];
          if (userInvoked) {
              if (this.multiSelectable) this.expandedAccordions[index] = !this.expandedAccordions[index];
              else {
                  for (i = 0; i < this.accordionTriggersLength; i++) {
                      this.expandedAccordions[i] = i === index ? !this.expandedAccordions[i] : false;
                  }
              }
          }
          this.hidePanelContent = item => {
              setTimeout(() => {
                  item.setAttribute('aria-hidden', true);
                  item.setAttribute('hidden', true);
              }, 325);
          };
          const animateHeight = (el, from, to, duration, callback) => {
              const startTime = performance.now();
              const step = now => {
                  const elapsed = now - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  el.style.height = from + (to - from) * progress + 'px';
                  if (progress < 1) requestAnimationFrame(step);
                  else {
                      if (callback) callback();
                  }
              };
              requestAnimationFrame(step);
          };
          let hasExpanded = false;
          for (i = 0; i < this.accordionTriggersLength; i++) {
              const panel = this.accordionPanels[i];
              if (this.expandedAccordions[i]) {
                  panel.setAttribute('aria-hidden', false);
                  panel.removeAttribute('hidden');
                  this.accordionTriggers[i].setAttribute('aria-expanded', true);
                  this.accordionTriggers[i].classList.add('is-expanded');
                  panel.classList.add('is-open');
                  if (typeof gsap !== 'undefined') {
                      let wrapper = panel.querySelector('.mobile-megamenu-products-wrapper');
                      let targetHeight = wrapper ? wrapper.scrollHeight : panel.scrollHeight;
                      gsap.fromTo(panel, {
                          height: 0
                      }, {
                          height: targetHeight,
                          duration: 0.3,
                          onComplete: () => {
                              panel.style.height = 'auto';
                          }
                      });
                  } else if (panel.classList.contains('mobile-megamenu')) {
                      panel.style.height = '0px';
                      const targetHeight = panel.scrollHeight;
                      animateHeight(panel, 0, targetHeight, 300, () => {
                          panel.style.height = 'auto';
                      });
                  }
                  panel.parentElement.classList.add('is-active');
                  hasExpanded = true;
              } else {
                  this.accordionTriggers[i].setAttribute('aria-expanded', false);
                  this.accordionTriggers[i].classList.remove('is-expanded');
                  panel.classList.remove('is-open');
                  if (typeof gsap !== 'undefined') {
                      let currentHeight = panel.offsetHeight;
                      gsap.fromTo(panel, {
                          height: currentHeight
                      }, {
                          height: 0,
                          duration: 0.3
                      });
                  } else if (panel.classList.contains('mobile-megamenu')) {
                      if (panel.style.height === 'auto') {
                          panel.style.height = panel.scrollHeight + 'px';
                      }
                      animateHeight(panel, parseFloat(panel.style.height), 0, 300);
                  }
                  panel.parentElement.classList.remove('is-active');
                  this.hidePanelContent(panel);
              }
          }
          if (hasExpanded) this.el.classList.add('has-expanded-el');
          else this.el.classList.remove('has-expanded-el');
          this.hasExpanded = hasExpanded;
      }
      setAPI() {
          this.close = () => {
              this.setSelected(-1);
              this.setExpanded(-1);
          };
          this.openInit = () => {
              const index = this.initialSetIndex;
              if (Number.isInteger(index)) {
                  this.setSelected(index, true);
                  this.setExpanded(index, true);
              }
          };
      }
      destroy() {
          this.el.classList.remove('is-initialized');
          for (let i = 0; i < this.accordionTriggersLength; i++) {
              this.accordionTriggers[i].removeAttribute('aria-expanded');
              this.accordionTriggers[i].classList.remove('is-expanded');
              this.accordionPanels[i].removeAttribute('aria-hidden');
              this.accordionPanels[i].classList.remove('is-open');
              this.accordionPanels[i].removeAttribute('tabindex');
              this.accordionTriggers[i].removeEventListener('click', this.clickListener, false);
              this.accordionTriggers[i].removeEventListener('keydown', this.keydownListener, false);
              this.accordionTriggers[i].removeEventListener('focus', this.focusListener, false);
              delete this.accordionTriggers[i].index;
          }
      }
  }
  class NavigationHub {
      constructor(el) {
          var _el$querySelector;
          this.el = el;
          this.resizeHandler = null;
          this.isMobile = () => window.innerWidth <= 767;
          this.domMap = {
              $mainHeader: el,
              $megamenuTriggers: el.querySelectorAll('.zdcm-header .zdcm-main-nav__megamenu-trigger'),
              $backtoMobileMenu: el.querySelector('.zdcm-header .zdcm-mobile-back'),
              $megamenu: el.querySelectorAll('.zdcm-header .zdcm-megamenu'),
              $menuTrigger: el.querySelectorAll('.zdcm-header .zdcm-main-nav__hamburger-trigger'),
              $mobileMenu: el.querySelector('.zdcm-header .zdcm-mobile-menu'),
              $menuDropdown: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown'),
              $menuDropdownRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdownrestricted'),
              $menuDropdownList: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-list'),
              $menuDropdownListRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-listrestricted'),
              $menuDropdownJoin: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-join'),
              $menuDropdownJoinRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-joinrestricted'),
              $menuDropdownListJoin: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-list-join'),
              $menuDropdownListJoinRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-list-joinrestricted'),
              $menuDropdownWebAppRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-webapprestricted'),
              $menuDropdownWebAppListRestricted: el.querySelector('.zdcm-header .zdcm-resources-nav__dropdown-list-webapprestricted'),
              $mobileMenuList: el.querySelector('.zdcm-header .zdcm-mobile-menu__list'),
              $megamenuListItems: el.querySelectorAll('.zdcm-header .zdcm-megamenu__list-item'),
              $mobileMegamenuListItems: el.querySelectorAll('.zdcm-header .zdcm-mobile-megamenu__list-item'),
              $mobileMenuListItems: el.querySelectorAll('.zdcm-header .zdcm-mobile-menu__list-item'),
              $isPageWithoutHeader: ((_el$querySelector = el.querySelector('#page-type')) === null || _el$querySelector === void 0 ? void 0 : _el$querySelector.value) == 'leadgeneration',
              $sectionSelector: '.zdcm-mobile-megamenu__section, .zdcm-megamenu__section',
              $contentPanel: el.querySelector('.zdcm-mobile-menu__content-panel'),
              $accordionSelector: '.zdcm-mobile-menu__accordion',
              $accordionContentClass: 'zdcm-accordion-content',
              $expandedClass: 'zdcm-mobile-menu--expanded',
              $activeClass: 'zdcm-is-active',
              $sectionActiveClass: 'zdcm-section-active',
              $activeContentClass: 'zdcm-active-content',
              $megamenuAccordionTriggers: el.querySelectorAll('.zdcm-megamenu__list-item-heading--disabled'),
              $megamenuAccordionActiveClass: 'zdcm-megamenu-accordion-active',
              $megamenuAccordionTriggers: el.querySelectorAll('.zdcm-megamenu__list-item-heading--disabled, .zdcm-megamenu__list-item-heading-anchor'),
              $userAccountMenu: el.querySelector('.zdcm-item-profile > .zdcm-megamenu')

          };
          if (!this.domMap.$isPageWithoutHeader) {
              this.addListeners();
              this.setBlockSizes();
              this.initAccordions();
              this.detectIcons();
              this.initMobileAccordions();
              this.initMegamenuAccordions();
              this.detectExpandedMenu();
              this.enableSticky();
              const self = this;
              this.attachHoverHandlers();
              this.initHubMobileAccordion();
              this.focusTrap = createFocusTrap(this.el, {
                  onActivate: () => {
                      el.classList.add('zdcm-header--active');
                      self.domMap.$menuTrigger.forEach(trigger => {
                          trigger.setAttribute('aria-expanded', 'true');
                      });
                  },
                  onDeactivate: () => {
                      el.classList.remove('zdcm-header--active');
                      self.domMap.$menuTrigger.forEach(trigger => {
                          trigger.setAttribute('aria-expanded', 'false');
                      });
                  }
              });
          }
          const coveoSearchHeader = document.getElementById('coveoSearchHeader');
          if (!coveoSearchHeader) {
              return;
          }
          coveoSearchHeader.addEventListener('click', () => {
              injectSearchScript();
          });
          const leftHamburger = document.querySelector("nav.zdcm-main-nav .zdcm-main-nav__left button.zdcm-main-nav__hamburger-trigger");
          if (!leftHamburger) {
              return;
          }
          leftHamburger.addEventListener('click', () => {
              injectSearchScript();
          });
          const rightHamburger = document.querySelector("nav.zdcm-main-nav .zdcm-main-nav__right li.zdcm-mobile-hamburger");
          if (!rightHamburger) {
              return;
          }
          rightHamburger.addEventListener('click', () => {
              injectSearchScript();
          });
      }
      attachHoverHandlers() {
          const listItems = this.el.querySelectorAll('.zdcm-megamenu__workplace__column .zdcm-megamenu__list li');
          listItems.forEach(item => {
              item.addEventListener('mouseenter', () => {
                  const bgImage = item.getAttribute('data-bg-image');
                  const logo = item.getAttribute('data-logo');
                  const desc = item.getAttribute('data-desc');
                  const title = item.getAttribute('data-title');
                  const position = item.getAttribute('data-position');
                  const cta = item.getAttribute('data-cta');

                  // Only proceed if all required attributes are present
                  if (!bgImage || !desc || !title) return;

                  // Find the nearest .zdcm-megamenu-products-container
                  const container = item.closest('.fdn-tabs__tabpanel') || item.closest('.zdcm-megamenu-products-container');
                  if (!container) return;
                  const backgroundImg = container.querySelector('.zdcm-news-background');
                  const logoImg = container.querySelector('.zdcm-news-logo');
                  const titleSpan = container.querySelector('.zdcm-icon-label span');
                  const descParagraph = container.querySelector('.zdcm-news-description p');
                  const newsContent = container.querySelector('.zdcm-news-content');
                  const newsCTA = container.querySelector('.zdcm-news-cta a');
                  if (backgroundImg) {
                      backgroundImg.src = bgImage;
                      if (backgroundImg.hasAttribute('srcset')) backgroundImg.removeAttribute('srcset');
                  }
                  if (logoImg && logo != "") {
                      logoImg.src = logo;
                      if (logoImg.hasAttribute('srcset')) logoImg.removeAttribute('srcset');
                  }
                  if (titleSpan) titleSpan.textContent = title;
                  if (descParagraph) descParagraph.innerHTML = desc;
                  if (newsCTA) newsCTA.setAttribute('href', cta);

                  // Update the position class
                  if (newsContent) {
                      newsContent.classList.remove('zdcm-content-top', 'zdcm-content-bottom');
                      if (position === 'top') {
                          newsContent.classList.add('zdcm-content-top');
                      } else if (position === 'bottom') {
                          newsContent.classList.add('zdcm-content-bottom');
                      }
                  }
              });
          });
      }
      enableSticky() {
          const {
              $mainHeader
          } = this.domMap;

          // Create a handler function so you don't repeat code
          const handleScroll = () => {
              if (window.scrollY > 25) {
                  $mainHeader.classList.add('zdcm-sticky');
              } else {
                  $mainHeader.classList.remove('zdcm-sticky');
              }
          };

          // Run it once on page load
          handleScroll();

          // Attach it to scroll event
          window.addEventListener('scroll', handleScroll);
      }
      addListeners() {
          const {
              $mainHeader,
              $megamenu,
              $megamenuTriggers,
              $backtoMobileMenu,
              $menuDropdown,
              $menuDropdownRestricted,
              $menuDropdownList,
              $menuDropdownListRestricted,
              $menuDropdownJoin,
              $menuDropdownJoinRestricted,
              $menuDropdownListJoin,
              $menuDropdownListJoinRestricted,
              $menuDropdownWebAppRestricted,
              $menuDropdownWebAppListRestricted,
              $menuTrigger,
              $searchForm,
              $searchLabel,
              $searchInput,
              $searchClose
          } = this.domMap;
          $megamenuTriggers.forEach(trigger => trigger.addEventListener('click', this.handleMegamenuTriggerClick.bind(this)));
          $backtoMobileMenu.addEventListener('click', () => {
              const accordionList = this.el.querySelectorAll('.zdcm-expand-state .zdcm-mobile-menu .zdcm-mobile-menu__list .zdcm-accordion-content');
              const activeLi = this.el.querySelector('.zdcm-expand-state .zdcm-mobile-menu .zdcm-mobile-menu__list .zdcm-mobile-menu__list-item.zdcm-is-active');
              if (activeLi) {
                  activeLi.classList.remove('zdcm-is-active');
                  const button = activeLi.querySelector('button');
                  if (button) {
                      button.setAttribute('aria-expanded', 'false');
                  }
              }
              accordionList.forEach(accordion => {
                  accordion.style.cssText += 'height:0px;opacity:0';
              });
              $mainHeader.classList.remove('zdcm-expand-state');
          });
          $megamenu.forEach(megamenu => megamenu.addEventListener('focusout', this.handleMegamenuFocusout.bind(this)));
          if ($menuDropdown != null) {
              $menuDropdown.addEventListener('click', this.handleMenuDropdownClick.bind(this));
          }
          if ($menuDropdownRestricted != null) {
              $menuDropdownRestricted.addEventListener('click', this.handleMenuDropdownClickRestricted.bind(this));
          }
          if ($menuDropdownWebAppRestricted != null) {
              $menuDropdownWebAppRestricted.addEventListener('click', this.handleMenuDropdownWebAppClickRestricted.bind(this));
          }
          if ($menuDropdownList != null) {
              $menuDropdownList.addEventListener('focusout', this.handleMenuDropdownListFocusout.bind(this));
          }
          if ($menuDropdownListRestricted != null) {
              $menuDropdownListRestricted.addEventListener('focusout', this.handleMenuDropdownListFocusoutRestricted.bind(this));
          }
          if ($menuDropdownWebAppListRestricted != null) {
              $menuDropdownWebAppListRestricted.addEventListener('focusout', this.handleMenuDropdownListWebAppFocusoutRestricted.bind(this));
          }
          if ($menuDropdownJoin != null) {
              $menuDropdownJoin === null || $menuDropdownJoin === void 0 || $menuDropdownJoin.addEventListener('click', this.handleMenuDropdownJoinClick.bind(this));
          }
          if ($menuDropdownJoinRestricted != null) {
              $menuDropdownJoinRestricted === null || $menuDropdownJoinRestricted === void 0 || $menuDropdownJoinRestricted.addEventListener('click', this.handleMenuDropdownJoinClickRestricted.bind(this));
          }
          if ($menuDropdownListJoin != null) {
              $menuDropdownListJoin === null || $menuDropdownListJoin === void 0 || $menuDropdownListJoin.addEventListener('focusout', this.handleMenuDropdownListJoinFocusout.bind(this));
          }
          if ($menuDropdownListJoinRestricted != null) {
              $menuDropdownListJoinRestricted === null || $menuDropdownListJoinRestricted === void 0 || $menuDropdownListJoinRestricted.addEventListener('focusout', this.handleMenuDropdownListJoinFocusoutRestricted.bind(this));
          }
          $menuTrigger.forEach(trigger => {
              trigger.addEventListener('click', () => {
                  // Your toggle menu logic here
                  if ($mainHeader.classList.contains('zdcm-expand-state')) {
                      $mainHeader.classList.remove('zdcm-expand-state');
                  }
                  this.handleMenuTriggerClick();
                  this.hideMobileContent();
              });
          });
          if ($searchForm != null) {
              $searchForm === null || $searchForm === void 0 || $searchForm.addEventListener('submit', this.handleSearchSubmit.bind(this));
          }
          if ($searchLabel != null) {
              $searchLabel === null || $searchLabel === void 0 || $searchLabel.addEventListener('click', this.handleSearchLabelClick.bind(this));
          }
          if ($searchInput != null) {
              $searchInput === null || $searchInput === void 0 || $searchInput.addEventListener('input', this.handleSearchInput.bind(this));
          }
          if ($searchClose != null) {
              $searchClose === null || $searchClose === void 0 || $searchClose.addEventListener('click', this.handleSearchClose.bind(this));
          }
          let resizeTimeout;
          window.addEventListener('resize', () => {
              this.setBlockSizes(this.el);
              this.detectSize(this.el);
              if (resizeTimeout) {
                  clearTimeout(resizeTimeout);
              }
              resizeTimeout = setTimeout(() => {
                  // Function to call when resizing is done
                  this.detectMobileOverride(this.el);
                  if (this.isMobile()) {
                      this.initMegamenuAccordions();
                  } else {
                      this.closeAllMegamenuAccordions();
                  }
              }, 250);
          });
          window.addEventListener('click', this.handleClickOutside.bind(this));
          this.updateUserMenuTopPosition = this.updateUserMenuTopPosition.bind(this)
          window.addEventListener('resize', this.updateUserMenuTopPosition)
          var self = this;
          waitUntil(
              function () {
                  return document.querySelector('.zdcm-item-profile') !== null;
              },
              function () {
                  self.updateUserMenuTopPosition();
              }
          );
        window.addEventListener('load', () => this.updateUserMenuTopPosition());
      }

      updateUserMenuTopPosition() {
          var self = this;
          requestAnimationFrame(function () {
              setTimeout(function () {
                  var $userAccountMenu = self.domMap.$userAccountMenu;
                  if (window.innerWidth < 768) {
                      if ($userAccountMenu) {
                          $userAccountMenu.style.setProperty('--userProfileMenuHeight', $userAccountMenu.offsetHeight + 'px');
                          $userAccountMenu.style.setProperty('--viewportHeight', document.documentElement.clientHeight + 'px');
                      }
                  } else {
                      if ($userAccountMenu) {
                          $userAccountMenu.style.removeProperty('--userProfileMenuHeight');
                          $userAccountMenu.style.removeProperty('--viewportHeight');
                      }
                  }
              }, 500);
          });
      }



      // forcing navigation to mobile view for languages that have too much text to display in desktop mode
      detectMobileOverride() {
          let navigationContainerWidth = document.querySelector('.zdcm-header .zdcm-main-nav__container').offsetWidth;
          let leftContentWidth = document.querySelector('.zdcm-header .zdcm-main-nav__left').offsetWidth;
          let rightContentWidth = document.querySelector('.zdcm-header .zdcm-main-nav__right').offsetWidth;
          if (!this.el.classList.contains('zdcm-main-nav__mobile-override')) {
              if (leftContentWidth + rightContentWidth >= navigationContainerWidth - 40) {
                  this.el.classList.add('zdcm-main-nav__mobile-override');
              } else {
                  this.el.classList.remove('zdcm-main-nav__mobile-override');
              }
          } else {
              this.el.classList.remove('zdcm-main-nav__mobile-override');
              this.detectMobileOverride();
          }
      }
      initAccordions() {
          const {
              $mobileMenuList
          } = this.domMap;
          new AccordionWidget($mobileMenuList);
      }
      initMobileAccordions() {
          this.injectContentIntoSidebar();
          this.attachTriggerEvents();
          this.initResizeHandler();
      }
      initHubMobileAccordion() {
          const menuToggle = this.el.querySelector('.zdcm-hub-menu-open');
          const menuPanel = this.el.querySelector('.zdcm-hub-menu-panel');

          // Toggle main menu
          menuToggle === null || menuToggle === void 0 || menuToggle.addEventListener('click', () => {
              const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
              menuToggle.setAttribute('aria-expanded', String(!isExpanded));
              menuPanel.setAttribute('aria-hidden', String(isExpanded));
              if (!isExpanded) {
                  menuPanel.classList.add('active');
                  menuPanel.style.height = menuPanel.scrollHeight + 'px';
                  menuPanel.addEventListener('transitionend', function handler() {
                      menuPanel.style.height = 'auto';
                      menuPanel.removeEventListener('transitionend', handler);
                  });
              } else {
                  // Collapse
                  menuPanel.style.height = menuPanel.scrollHeight + 'px';
                  requestAnimationFrame(() => {
                      menuPanel.style.height = '0';
                      menuPanel.classList.remove('active');
                  });
              }
          });

          // Accordion functionality inside menu
          const accordions = this.el.querySelectorAll('.zdcm-hub-accordion');
          accordions.forEach(accordion => {
              accordion.addEventListener('click', () => {
                  const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
                  const panel = accordion.nextElementSibling;

                  // Collapse all other accordions
                  accordions.forEach(otherAcc => {
                      if (otherAcc !== accordion) {
                          otherAcc.setAttribute('aria-expanded', 'false');
                          const otherPanel = otherAcc.nextElementSibling;
                          otherPanel.setAttribute('aria-hidden', 'true');
                          otherPanel.style.height = '0';
                          otherPanel.classList.remove('active');
                      }
                  });
                  if (!isExpanded) {
                      accordion.setAttribute('aria-expanded', 'true');
                      panel.setAttribute('aria-hidden', 'false');
                      panel.classList.add('active');
                      panel.style.height = panel.scrollHeight + 'px';
                      panel.addEventListener('transitionend', function handler() {
                          panel.style.height = 'auto';
                          panel.removeEventListener('transitionend', handler);
                      });
                  } else {
                      accordion.setAttribute('aria-expanded', 'false');
                      panel.setAttribute('aria-hidden', 'true');
                      panel.style.height = panel.scrollHeight + 'px';
                      requestAnimationFrame(() => {
                          panel.style.height = '0';
                          panel.classList.remove('active');
                      });
                  }
              });
          });
      }
      injectContentIntoSidebar() {
          if (!this.domMap.$contentPanel) return;
          this.domMap.$mobileMenuListItems.forEach(item => {
              var _item$querySelector;
              const contentId = item.getAttribute('data-content');
              if (!contentId || item.querySelector(`.${this.domMap.$accordionContentClass}`)) return;
              const sourceContent = this.domMap.$contentPanel.querySelector(`[data-content-id="${contentId}"]`);
              if (!sourceContent) return;
              const accordionContent = document.createElement('div');
              accordionContent.className = this.domMap.$accordionContentClass;
              accordionContent.id = `accordion-content-${contentId}`;
              accordionContent.setAttribute('aria-hidden', 'true');
              const clonedContent = sourceContent.cloneNode(true);
              clonedContent.classList.remove(this.domMap.$activeContentClass);
              accordionContent.appendChild(clonedContent);
              item.parentNode.insertBefore(accordionContent, item.nextSibling);
              (_item$querySelector = item.querySelector(this.domMap.$accordionSelector)) === null || _item$querySelector === void 0 || _item$querySelector.setAttribute('aria-controls', `accordion-content-${contentId}`);
          });
      }
      attachTriggerEvents() {
          this.domMap.$mobileMenuListItems.forEach(item => {
              const trigger = item.querySelector(this.domMap.$accordionSelector);
              const contentId = item.getAttribute('data-content');
              if (trigger && contentId) {
                  const newTrigger = trigger.cloneNode(true);
                  trigger.parentNode.replaceChild(newTrigger, trigger);
                  newTrigger.addEventListener('click', e => {
                      e.preventDefault();
                      e.stopPropagation();
                      this.handleClick(item, contentId);
                  });
              }
          });
      }
      initResizeHandler() {
          if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = this.debounce(() => {
              this.isMobile() ? this.hidePanelContent() : this.closeAllAccordions();
          }, 100);
          window.addEventListener('resize', this.resizeHandler);
      }
      handleClick(item, contentId) {
          this.isMobile() ? this.handleAccordion(item, contentId) : this.handlePanel(item, contentId);
      }
      handleAccordion(item, contentId) {
          const isActive = item.classList.contains(this.domMap.$activeClass);
          this.domMap.$mobileMenuListItems.forEach(otherItem => {
              if (otherItem !== item) this.closeAccordionItem(otherItem);
          });
          isActive ? this.closeAccordionItem(item) : this.openAccordionItem(item, contentId);
      }
      handlePanel(item, contentId) {
          var _this$domMap$$content;
          const isActive = item.classList.contains(this.domMap.$activeClass);
          this.domMap.$mobileMenuListItems.forEach(otherItem => {
              if (otherItem !== item) this.setItemState(otherItem, false);
          });
          (_this$domMap$$content = this.domMap.$contentPanel) === null || _this$domMap$$content === void 0 || _this$domMap$$content.querySelectorAll('[data-content-id]').forEach(content => content.classList.remove(this.domMap.$activeContentClass));
          if (isActive) {
              this.setItemState(item, false);
              this.domMap.$mobileMenu.classList.remove(this.domMap.$expandedClass);
          } else {
              var _this$domMap$$content2;
              this.setItemState(item, true);
              (_this$domMap$$content2 = this.domMap.$contentPanel) === null || _this$domMap$$content2 === void 0 || (_this$domMap$$content2 = _this$domMap$$content2.querySelector(`[data-content-id="${contentId}"]`)) === null || _this$domMap$$content2 === void 0 || _this$domMap$$content2.classList.add(this.domMap.$activeContentClass);
              this.domMap.$mobileMenu.classList.add(this.domMap.$expandedClass);
          }
      }
      setItemState(item, isActive) {
          var _item$querySelector2;
          item.classList.toggle(this.domMap.$activeClass, isActive);
          (_item$querySelector2 = item.querySelector(this.domMap.$accordionSelector)) === null || _item$querySelector2 === void 0 || _item$querySelector2.setAttribute('aria-expanded', isActive.toString());
      }
      openAccordionItem(item, contentId) {
          const {
              $mainHeader
          } = this.domMap;
          const accordionContent = document.getElementById(`accordion-content-${contentId}`);
          if (!accordionContent) return;
          this.setItemState(item, true);
          if ($mainHeader) {
              $mainHeader.classList.add('zdcm-expand-state');
          }
          const height = (accordionContent.style.height = 'auto', accordionContent.scrollHeight);
          accordionContent.style.cssText += 'height:0px;opacity:0';
          accordionContent.offsetHeight;
          requestAnimationFrame(() => {
              accordionContent.style.cssText += `height:${height}px;opacity:1`;
              accordionContent.setAttribute('aria-hidden', 'false');
          });
          setTimeout(() => item.classList.contains(this.domMap.$activeClass) && (accordionContent.style.height = 'auto'), 400);

          // Reinitialize tabs inside the accordion content
          setTimeout(() => {
              this.reinitializeTabsInAccordion(accordionContent);
              const rect = item.getBoundingClientRect();
              if (rect.top < 0 || rect.bottom > window.innerHeight) {
                  item.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest'
                  });
              }
          }, 200);
      }
      closeAccordionItem(item) {
          const contentId = item.getAttribute('data-content');
          const accordionContent = document.getElementById(`accordion-content-${contentId}`);
          if (!accordionContent) return;
          const height = accordionContent.scrollHeight;
          accordionContent.style.height = `${height}px`;
          accordionContent.offsetHeight;
          requestAnimationFrame(() => {
              accordionContent.style.cssText += 'height:0px;opacity:0';
              accordionContent.setAttribute('aria-hidden', 'true');
          });
          this.setItemState(item, false);
          item.querySelectorAll(this.domMap.$sectionSelector).forEach(section => {
              section.classList.remove(this.domMap.$sectionActiveClass);
          });
      }
      reinitializeTabsInAccordion(accordionContent) {
          // Find any tab components within the accordion content
          const tabContainers = accordionContent.querySelectorAll('.fdn-tabs, .zdcm-tabs, [data-tabs]');
          tabContainers.forEach(container => {
              // Check if tabs are already initialized
              if (container.dataset.tabsInitialized) return;

              // Mark as initialized
              container.dataset.tabsInitialized = 'true';

              // Find tab triggers and panels
              const tabTriggers = container.querySelectorAll('[role="tab"], .tab-trigger, .tabs__tab');
              const tabPanels = container.querySelectorAll('[role="tabpanel"], .tab-panel, .tabs__panel');
              if (tabTriggers.length === 0 || tabPanels.length === 0) return;

              // Initialize first tab as active
              tabTriggers.forEach((trigger, index) => {
                  trigger.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
                  trigger.setAttribute('tabindex', index === 0 ? '0' : '-1');

                  // Add click handler
                  trigger.addEventListener('click', e => {
                      e.preventDefault();
                      this.handleTabClick(trigger, tabTriggers, tabPanels);
                  });

                  // Add keyboard navigation
                  trigger.addEventListener('keydown', e => {
                      this.handleTabKeydown(e, trigger, tabTriggers, tabPanels);
                  });
              });

              // Show first panel, hide others
              tabPanels.forEach((panel, index) => {
                  panel.hidden = index !== 0;
                  panel.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');
              });
          });
      }
      handleTabClick(clickedTrigger, allTriggers, allPanels) {
          // Find index of clicked trigger
          const clickedIndex = Array.from(allTriggers).indexOf(clickedTrigger);
          if (clickedIndex === -1) return;

          // Update triggers
          allTriggers.forEach((trigger, index) => {
              const isSelected = index === clickedIndex;
              trigger.setAttribute('aria-selected', isSelected ? 'true' : 'false');
              trigger.setAttribute('tabindex', isSelected ? '0' : '-1');
              trigger.classList.toggle('is-active', isSelected);
          });

          // Update panels
          allPanels.forEach((panel, index) => {
              const isVisible = index === clickedIndex;
              panel.hidden = !isVisible;
              panel.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
              panel.classList.toggle('is-active', isVisible);
          });
      }
      handleTabKeydown(e, currentTrigger, allTriggers, allPanels) {
          const triggers = Array.from(allTriggers);
          const currentIndex = triggers.indexOf(currentTrigger);
          let newIndex = currentIndex;
          switch (e.key) {
              case 'ArrowLeft':
              case 'ArrowUp':
                  e.preventDefault();
                  newIndex = currentIndex - 1;
                  if (newIndex < 0) newIndex = triggers.length - 1;
                  break;
              case 'ArrowRight':
              case 'ArrowDown':
                  e.preventDefault();
                  newIndex = currentIndex + 1;
                  if (newIndex >= triggers.length) newIndex = 0;
                  break;
              case 'Home':
                  e.preventDefault();
                  newIndex = 0;
                  break;
              case 'End':
                  e.preventDefault();
                  newIndex = triggers.length - 1;
                  break;
              default:
                  return;
          }

          // Focus and activate new tab
          const newTrigger = triggers[newIndex];
          newTrigger.focus();
          this.handleTabClick(newTrigger, allTriggers, allPanels);
      }
      closeAllAccordions() {
          this.domMap.$mobileMenuListItems.forEach(item => {
              if (item.classList.contains(this.domMap.$activeClass)) {
                  this.isMobile() ? this.closeAccordionItem(item) : this.closePanelItem(item);
              }
          });
      }
      closePanelItem(item) {
          var _this$domMap$$content3;
          const contentId = item.getAttribute('data-content');
          this.setItemState(item, false);
          (_this$domMap$$content3 = this.domMap.$contentPanel) === null || _this$domMap$$content3 === void 0 || (_this$domMap$$content3 = _this$domMap$$content3.querySelector(`[data-content-id="${contentId}"]`)) === null || _this$domMap$$content3 === void 0 || _this$domMap$$content3.classList.remove(this.domMap.$activeContentClass);
          this.domMap.$mobileMenu.classList.remove(this.domMap.$expandedClass);
      }
      hidePanelContent() {
          var _this$domMap$$content4;
          this.domMap.$mobileMenu.classList.remove(this.domMap.$expandedClass);
          this.domMap.$mobileMenuListItems.forEach(item => this.setItemState(item, false));
          (_this$domMap$$content4 = this.domMap.$contentPanel) === null || _this$domMap$$content4 === void 0 || _this$domMap$$content4.querySelectorAll('[data-content-id]').forEach(content => content.classList.remove(this.domMap.$activeContentClass));
      }
      showMobileContent(contentId) {
          const targetItem = this.el.querySelector(`[data-content="${contentId}"]`);
          if (targetItem) this.handleClick(targetItem, contentId);
      }
      hideMobileContent() {
          this.isMobile() ? this.closeAllAccordions() : this.hidePanelContent();
      }
      debounce(func, wait) {
          let timeout;
          return (...args) => {
              clearTimeout(timeout);
              timeout = setTimeout(() => func(...args), wait);
          };
      }
      initMegamenuAccordions() {
          if (!this.isMobile()) return;
          this.attachMegamenuAccordionTriggers();
      }
      attachMegamenuAccordionTriggers() {
          // Select both classes as accordion triggers
          const triggers = this.el.querySelectorAll('.fdn-tabs__tabpanel .zdcm-megamenu__list-item-heading--disabled, .fdn-tabs__tabpanel .zdcm-megamenu__list-item-heading-anchor');
          triggers.forEach((trigger, index) => {
              trigger.addEventListener('click', e => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.handleMegamenuAccordionClick(trigger, index);
              });
              trigger.setAttribute('aria-expanded', 'false');
              trigger.setAttribute('role', 'button');
              trigger.setAttribute('tabindex', '0');
              trigger.style.cursor = 'pointer';
              trigger.addEventListener('keydown', e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      this.handleMegamenuAccordionClick(trigger, index);
                  }
              });
          });
      }
      handleMegamenuAccordionClick(trigger, index) {
          const {
              $megamenuAccordionActiveClass
          } = this.domMap;
          const parentList = trigger.parentElement;
          const isActive = parentList.classList.contains($megamenuAccordionActiveClass);
          this.el.querySelectorAll('.zdcm-megamenu__list').forEach(list => {
              this.closeMegamenuAccordion(list);
          });
          if (!isActive) {
              this.openMegamenuAccordion(parentList, trigger);
          }
      }
      openMegamenuAccordion(parentList, trigger) {
          const {
              $megamenuAccordionActiveClass
          } = this.domMap;
          const listItems = parentList.querySelectorAll('li:not(.zdcm-megamenu__list-item-heading--disabled):not(.zdcm-megamenu__list-item-heading-anchor)');
          parentList.classList.add($megamenuAccordionActiveClass);
          trigger.setAttribute('aria-expanded', 'true');
          listItems.forEach(item => {
              item.classList.add('accordion-open');
          });
      }
      closeMegamenuAccordion(parentList) {
          const {
              $megamenuAccordionActiveClass
          } = this.domMap;

          // Look for either trigger class
          const trigger = parentList.querySelector('.zdcm-megamenu__list-item-heading--disabled, .zdcm-megamenu__list-item-heading-anchor');
          const listItems = parentList.querySelectorAll('li:not(.zdcm-megamenu__list-item-heading--disabled):not(.zdcm-megamenu__list-item-heading-anchor)');
          parentList.classList.remove($megamenuAccordionActiveClass);
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
          listItems.forEach(item => {
              item.classList.remove('accordion-open');
          });
      }
      closeAllMegamenuAccordions() {
          this.el.querySelectorAll('.zdcm-megamenu__list').forEach(list => {
              this.closeMegamenuAccordion(list);
          });
      }
      detectExpandedMenu() {
          const {
              $mobileMenuListItems,
              $mobileMenu
          } = this.domMap;
          const observer = new MutationObserver(callback);

          function callback(mutationsList, observer) {
              for (const mutation of mutationsList) {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                      if (mutation.target.classList.contains('zdcm-is-active')) {
                          requestAnimationFrame(() => $mobileMenu.scroll({
                              top: 0,
                              behavior: 'smooth'
                          }));
                      }
                  }
              }
          }
          $mobileMenuListItems.forEach(item => observer.observe(item, {
              attributes: true
          }));
      }
      setBlockSizes() {
          document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
      }
      detectSize() {
          const isMobile = window.matchMedia('(max-width: 1024px)').matches;
          if (!isMobile) {
              this.focusTrap.deactivate();
          }
      }
      detectIcons() {
          const {
              $megamenuListItems,
              $mobileMegamenuListItems
          } = this.domMap;
          $megamenuListItems.forEach(item => {
              const $icon = item.querySelector('.zdcm-megamenu__list-item-icon');
              if ($icon) {
                  item.classList.add('zdcm-megamenu__list-item--has-icon');
              }
          });
          $mobileMegamenuListItems.forEach(item => {
              const $icon = item.querySelector('.zdcm-header .zdcm-mobile-megamenu__list-item-icon');
              if ($icon) {
                  item.classList.add('zdcm-mobile-megamenu__list-item--has-icon');
              }
          });
      }
      handleMegamenuTriggerClick(e) {
          const {
              $megamenuTriggers,
              $mainHeader,
              $menuTrigger
          } = this.domMap;
          $megamenuTriggers.forEach(trigger => {
              if ($mainHeader.classList.contains('zdcm-header--active')) {
                  const isActive = $mainHeader.classList.contains('zdcm-header--active');
                  $menuTrigger.forEach(trigger => {
                      trigger.setAttribute('aria-expanded', !isActive);
                  });
                  if (isActive) {
                      this.focusTrap.deactivate();
                      document.body.style.overflow = '';
                  } else {
                      this.focusTrap.activate();
                      document.body.style.overflow = 'hidden';
                  }
              }
              if (trigger.hasAttribute('aria-expanded') && trigger.getAttribute('aria-expanded') === 'false') {
                  trigger.setAttribute('aria-expanded', trigger === e.target);
                  if (trigger === e.target) trigger.parentElement.classList.add('zdcm-active');
              } else {
                  trigger.setAttribute('aria-expanded', false);
                  trigger.parentElement.classList.remove('zdcm-active');
              }
          });
      }
      handleSearchSubmit(e) {
          e.preventDefault();
          const {
              $searchForm,
              $searchInput
          } = this.domMap;
          const searchValue = $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.value;
          const searchDataUrl = $searchForm === null || $searchForm === void 0 ? void 0 : $searchForm.dataset.url;
          if (searchValue.length) {
              window.location.href = `${searchDataUrl}/#q=${searchValue}&t=All&sort=relevancy`;
          }
      }
      handleSearchLabelClick() {
          const {
              $searchForm
          } = this.domMap;
          $searchForm === null || $searchForm === void 0 || $searchForm.classList.add('zdcm-resources-nav__search-form--active');
      }
      handleSearchInput() {
          const {
              $searchForm,
              $searchInput
          } = this.domMap;
          $searchForm === null || $searchForm === void 0 || $searchForm.classList.toggle('zdcm-resources-nav__search-form--filled', $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.value.length);
      }
      handleMenuTriggerClick() {
          const {
              $menuTrigger
          } = this.domMap;
          const isActive = this.el.classList.contains('zdcm-header--active');
          $menuTrigger.forEach(trigger => {
              trigger.setAttribute('aria-expanded', !isActive);
          });
          if (isActive) {
              this.focusTrap.deactivate();
              document.body.style.overflow = '';
          } else {
              this.focusTrap.activate();
              document.body.style.overflow = 'hidden';
          }
      }
      handleSearchClose() {
          const {
              $searchForm
          } = this.domMap;
          $searchForm === null || $searchForm === void 0 || $searchForm.classList.remove('zdcm-resources-nav__search-form--active');
          $searchForm === null || $searchForm === void 0 || $searchForm.classList.add('zdcm-resources-nav__search-form--closing');
          setTimeout(() => $searchForm === null || $searchForm === void 0 ? void 0 : $searchForm.classList.remove('zdcm-resources-nav__search-form--closing'), 300);
      }
      handleMenuDropdownClick() {
          const {
              $menuDropdown,
              $menuDropdownList
          } = this.domMap;
          const isActive = $menuDropdownList.classList.contains('zdcm-resources-nav__dropdown-list--active');
          $menuDropdown.setAttribute('aria-expanded', !isActive);
          $menuDropdownList.classList.toggle('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownClickRestricted() {
          const {
              $menuDropdownRestricted,
              $menuDropdownListRestricted
          } = this.domMap;
          const isActive = $menuDropdownListRestricted.classList.contains('zdcm-resources-nav__dropdown-list--active');
          $menuDropdownRestricted.setAttribute('aria-expanded', !isActive);
          $menuDropdownListRestricted.classList.toggle('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownWebAppClickRestricted() {
          const {
              $menuDropdownWebAppRestricted,
              $menuDropdownWebAppListRestricted
          } = this.domMap;
          const isActive = $menuDropdownWebAppListRestricted.classList.contains('zdcm-resources-nav__dropdown-list--active');
          $menuDropdownWebAppRestricted.setAttribute('aria-expanded', !isActive);
          $menuDropdownWebAppListRestricted.classList.toggle('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownListFocusout(e) {
          if (e.currentTarget.contains(e.relatedTarget)) return;
          const {
              $menuDropdown,
              $menuDropdownList
          } = this.domMap;
          $menuDropdown.setAttribute('aria-expanded', false);
          $menuDropdownList.classList.remove('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownListFocusoutRestricted(e) {
          if (e.currentTarget.contains(e.relatedTarget)) return;
          const {
              $menuDropdownRestricted,
              $menuDropdownListRestricted
          } = this.domMap;
          $menuDropdownRestricted.setAttribute('aria-expanded', false);
          $menuDropdownListRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownListWebAppFocusoutRestricted(e) {
          if (e.currentTarget.contains(e.relatedTarget)) return;
          const {
              $menuDropdownWebAppRestricted,
              $menuDropdownWebAppListRestricted
          } = this.domMap;
          $menuDropdownWebAppRestricted.setAttribute('aria-expanded', false);
          $menuDropdownWebAppListRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownJoinClick() {
          const {
              $menuDropdownJoin,
              $menuDropdownListJoin
          } = this.domMap;
          const isActive = $menuDropdownListJoin === null || $menuDropdownListJoin === void 0 ? void 0 : $menuDropdownListJoin.classList.contains('zdcm-resources-nav__dropdown-list--active');
          $menuDropdownJoin === null || $menuDropdownJoin === void 0 || $menuDropdownJoin.setAttribute('aria-expanded', !isActive);
          $menuDropdownListJoin === null || $menuDropdownListJoin === void 0 || $menuDropdownListJoin.classList.toggle('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownJoinClickRestricted() {
          const {
              $menuDropdownJoinRestricted,
              $menuDropdownListJoinRestricted
          } = this.domMap;
          const isActive = $menuDropdownListJoinRestricted === null || $menuDropdownListJoinRestricted === void 0 ? void 0 : $menuDropdownListJoinRestricted.classList.contains('zdcm-resources-nav__dropdown-list--active');
          $menuDropdownJoinRestricted === null || $menuDropdownJoinRestricted === void 0 || $menuDropdownJoinRestricted.setAttribute('aria-expanded', !isActive);
          $menuDropdownListJoinRestricted === null || $menuDropdownListJoinRestricted === void 0 || $menuDropdownListJoinRestricted.classList.toggle('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownListJoinFocusout(e) {
          if (e.currentTarget.contains(e.relatedTarget)) return;
          const {
              $menuDropdownJoin,
              $menuDropdownListJoin
          } = this.domMap;
          $menuDropdownJoin === null || $menuDropdownJoin === void 0 || $menuDropdownJoin.setAttribute('aria-expanded', false);
          $menuDropdownListJoin === null || $menuDropdownListJoin === void 0 || $menuDropdownListJoin.classList.remove('zdcm-resources-nav__dropdown-list--active');
      }
      handleMenuDropdownListJoinFocusoutRestricted(e) {
          if (e.currentTarget.contains(e.relatedTarget)) return;
          const {
              $menuDropdownJoinRestricted,
              $menuDropdownListJoinRestricted
          } = this.domMap;
          $menuDropdownJoinRestricted === null || $menuDropdownJoinRestricted === void 0 || $menuDropdownJoinRestricted.setAttribute('aria-expanded', false);
          $menuDropdownListJoinRestricted === null || $menuDropdownListJoinRestricted === void 0 || $menuDropdownListJoinRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
      }
      handleClickOutside(e) {
          const {
              $menuDropdown,
              $menuDropdownRestricted,
              $menuDropdownList,
              $menuDropdownListRestricted,
              $menuDropdownJoin,
              $menuDropdownJoinRestricted,
              $menuDropdownListJoin,
              $menuDropdownListJoinRestricted,
              $menuDropdownWebAppRestricted,
              $menuDropdownWebAppListRestricted,
              $megamenuTriggers
          } = this.domMap;
          var isDropdownList = false;
          if ($menuDropdownList != null) {
              isDropdownList = $menuDropdownList.contains(e.target);
          }
          var isDropdownTrigger = false;
          if ($menuDropdown != null) {
              isDropdownTrigger = $menuDropdown.contains(e.target);
          }
          let isDropdownListRestricted = null;
          if ($menuDropdownListRestricted != null) {
              isDropdownListRestricted = $menuDropdownListRestricted.contains(e.target);
          }
          let isDropdownTriggerRestricted = null;
          if ($menuDropdownRestricted != null) {
              isDropdownTriggerRestricted = $menuDropdownRestricted.contains(e.target);
          }
          let isDropdownWebAppListRestricted = null;
          if ($menuDropdownWebAppListRestricted != null) {
              isDropdownWebAppListRestricted = $menuDropdownWebAppListRestricted.contains(e.target);
          }
          let isDropdownWebAppTriggerRestricted = null;
          if ($menuDropdownWebAppRestricted != null) {
              isDropdownWebAppTriggerRestricted = $menuDropdownWebAppRestricted.contains(e.target);
          }
          let isDropdownListJoin = null;
          if ($menuDropdownListJoin != null) {
              isDropdownListJoin = $menuDropdownListJoin.contains(e.target);
          }
          let isDropdownListJoinRestricted = null;
          if ($menuDropdownListJoinRestricted != null) {
              isDropdownListJoinRestricted = $menuDropdownListJoinRestricted.contains(e.target);
          }
          let isDropdownTriggerJoin = null;
          if ($menuDropdownJoin != null) {
              isDropdownTriggerJoin = $menuDropdownJoin.contains(e.target);
          }
          let isDropdownTriggerJoinRestricted = null;
          if ($menuDropdownJoinRestricted != null) {
              isDropdownTriggerJoinRestricted = $menuDropdownJoinRestricted.contains(e.target);
          }
          let ismenuDropdownWebAppListRestricted = null;
          if ($menuDropdownWebAppListRestricted != null) {
              ismenuDropdownWebAppListRestricted = $menuDropdownWebAppListRestricted.contains(e.target);
          }
          let ismenuDropdownWebAppRestricted = null;
          if ($menuDropdownWebAppRestricted != null) {
              ismenuDropdownWebAppRestricted = $menuDropdownWebAppRestricted.contains(e.target);
          }
          const isMegamenuTrigger = Array.from($megamenuTriggers).some(trigger => {
              const megamenu = trigger.parentElement.querySelector('.zdcm-header .zdcm-megamenu');
              return trigger.contains(e.target) || megamenu && megamenu.contains(e.target);
          });
          if ($menuDropdown != null && $menuDropdownList != null) {
              if (!isDropdownList && !isDropdownTrigger) {
                  $menuDropdown.setAttribute('aria-expanded', false);
                  $menuDropdownList.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if ($menuDropdownRestricted != null && $menuDropdownListRestricted != null) {
              if (!isDropdownListRestricted && !isDropdownTriggerRestricted) {
                  $menuDropdownRestricted.setAttribute('aria-expanded', false);
                  $menuDropdownListRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if ($menuDropdownWebAppRestricted != null && $menuDropdownWebAppListRestricted != null) {
              if (!isDropdownWebAppListRestricted && !isDropdownWebAppTriggerRestricted) {
                  $menuDropdownWebAppRestricted.setAttribute('aria-expanded', false);
                  $menuDropdownWebAppListRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if ($menuDropdownListJoin != null && $menuDropdownJoin != null) {
              if (!isDropdownListJoin && !isDropdownTriggerJoin) {
                  $menuDropdownJoin === null || $menuDropdownJoin === void 0 || $menuDropdownJoin.setAttribute('aria-expanded', false);
                  $menuDropdownListJoin === null || $menuDropdownListJoin === void 0 || $menuDropdownListJoin.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if ($menuDropdownListJoinRestricted != null && $menuDropdownJoinRestricted != null) {
              if (!isDropdownListJoinRestricted && !isDropdownTriggerJoinRestricted) {
                  $menuDropdownJoinRestricted === null || $menuDropdownJoinRestricted === void 0 || $menuDropdownJoinRestricted.setAttribute('aria-expanded', false);
                  $menuDropdownListJoinRestricted === null || $menuDropdownListJoinRestricted === void 0 || $menuDropdownListJoinRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if ($menuDropdownWebAppListRestricted != null && $menuDropdownWebAppRestricted != null) {
              if (!ismenuDropdownWebAppListRestricted && !ismenuDropdownWebAppRestricted) {
                  $menuDropdownWebAppRestricted === null || $menuDropdownWebAppRestricted === void 0 || $menuDropdownWebAppRestricted.setAttribute('aria-expanded', false);
                  $menuDropdownWebAppListRestricted === null || $menuDropdownWebAppListRestricted === void 0 || $menuDropdownWebAppListRestricted.classList.remove('zdcm-resources-nav__dropdown-list--active');
              }
          }
          if (!isMegamenuTrigger) {
              $megamenuTriggers.forEach(trigger => {
                  trigger.setAttribute('aria-expanded', false);
                  trigger.parentElement.classList.remove('zdcm-active');
              });
          }
      }
      handleMegamenuFocusout(e) {
          const hasCoveoSearchSuggestion = e.currentTarget.querySelector('.magic-box-suggestion') !== null;
          if (e.currentTarget.contains(e.relatedTarget) || hasCoveoSearchSuggestion) return;
          const {
              $megamenuTriggers
          } = this.domMap;
          $megamenuTriggers.forEach(trigger => {
              trigger.setAttribute('aria-expanded', false);
              trigger.parentElement.classList.remove('zdcm-active');
          });
      }
      timeout(time) {
          let controller = new AbortController();
          setTimeout(() => controller.abort(), time * 1000);
          return controller;
      }
      initBlockVisibility(result) {
          try {
              new BlockVisibilityService(result);
          } catch (err) {}
      }
  }
  const navEl = document.querySelector('header');
  if (navEl) new NavigationHub(navEl);

  const tabsEl = document.querySelectorAll('.fdn-tabs');
  tabsEl.forEach(function (tabEl) {
      if (tabEl) new Tabs(tabEl);
  });
  // Footer init
  var footerElement = document.querySelector('.zdcm-module-footer ');
  var footer = new FooterV1(footerElement);
}

function addCoveoScripts() {
        const scripts = [
            'https://www.zoom.com/ClientResources/Scripts/CoveoLazyLoad/CoveoJsSearch.Lazy.min.js',
            'https://www.zoom.com/ClientResources/Scripts/coveo-en.js'
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true; // optional: loads scripts asynchronously
            document.head.appendChild(script);
        });
    }

function injectSearchScript() {
        const scriptContent = `
(function () {
    var user_locale = 'en-us';
    var APIKey_Search = 'xxf1623479-48a6-4dce-8475-28e0b0720fbc';

    String.toLocaleString({
      "en-us": {
        "ZoomPlaceholder": "Enter search here...",
        "ZoomHeader": "What are you looking for?",
        "All": "All",
        "Support": "Support",
        "Videos": "Videos",
        "Source": "Source",
        "Explore Zoom": "Explore Zoom",
        "Solutions": "Solutions",
        "Support Articles": "Support Articles",
        "Community": "Community"
      }
    });

    String["locale"] = user_locale;
    Coveo.SearchEndpoint.configureCloudV2Endpoint('', APIKey_Search, 'https://platform.cloud.coveo.com/rest/search');

    const initSearchbox = (rootSelector) => {
      const root = document.querySelector(rootSelector);
      if (!root) return;

      Coveo.initSearchbox(root, "/en/search/", {
        Analytics: { searchHub: 'Marketing' },
        Searchbox: { placeholder: "ZoomPlaceholder" }
      });

      Coveo.$$(root).on(Coveo.InitializationEvents.afterComponentsInitialization, function () {
        root.querySelector(".magic-box-clear")?.addEventListener('click', function () {
          root.querySelector(".CoveoSearchbox")?.classList.toggle('transition-hidden');
          root.querySelector(".FlyoutButton")?.classList.toggle('transition-hidden');
        });
      });

      root.querySelector('.FlyoutButton')?.addEventListener('click', function () {
        root.querySelector(".CoveoSearchbox")?.classList.toggle('transition-hidden');
        root.querySelector(".FlyoutButton")?.classList.toggle('transition-hidden');
      });
    };

    initSearchbox('#standaloneSearchbox');
    initSearchbox('#standaloneSearchboxMobile');
})();
`;

        const scriptTag = document.createElement('script');
        scriptTag.textContent = scriptContent;
        document.head.appendChild(scriptTag);
    }

  function Tabs(el) {
        this.el = el;

        this.domMap = {
            $tabs: el.querySelectorAll('.fdn-tabs__tab:not([disabled])'),
            $tabPanels: el.querySelectorAll('.fdn-tabs__tabpanel'),
            initialActiveTabs: el.querySelectorAll('.nav-link.active'),
            $innerTabs: el.querySelectorAll('.nested-product-tab-wrapper__inner-nav .nav-link'),
            indicators: el.querySelectorAll('.nav-tabs__indicator--horizontal')
        };

        this.addListeners();
        // this.DataLayerTab = new DataLayerTab()
        this.initNestedTabsIndicator();
        this.handleResize = this.debounce(this.handleResize.bind(this), 200);
        window.addEventListener('resize', this.handleResize);
        this.updateIndicatorWidth = this.updateIndicatorWidth.bind(this);
        window.addEventListener('resize', this.updateIndicatorWidth);
        this.updateIndicatorWidth();

        var self = this;
        requestAnimationFrame(function () {
            var defaultTab = self.el.querySelector('.fdn-tabs__tab[aria-selected="true"]') || self.domMap.initialActiveTabs[0];
            if (defaultTab) {
                self.scrollToSection(defaultTab);
            }
        });
    }

    Tabs.prototype.addListeners = function () {
        var self = this;
        var $tabs = this.domMap.$tabs;
        var $innerTabs = this.domMap.$innerTabs;

        for (var i = 0; i < $tabs.length; i++) {
            $tabs[i].addEventListener('click', function (e) {
                self.handleTabClick(e);
            });
        }

        for (var j = 0; j < $innerTabs.length; j++) {
            $innerTabs[j].addEventListener('click', function (e) {
                self.handleInnerTabClick(e);
            });
        }
    };



    Tabs.prototype.handleTabClick = function (e) {
        var $tab = e.currentTarget;
        var tabPanelId = $tab.getAttribute('aria-controls');
        var $tabPanel = this.el.querySelector('#' + tabPanelId);
        var $tabs = this.domMap.$tabs;
        var $tabPanels = this.domMap.$tabPanels;

        for (var i = 0; i < $tabs.length; i++) {
            $tabs[i].setAttribute('aria-selected', false);
        }

        $tab.setAttribute('aria-selected', true);
        $tab.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });

        for (var j = 0; j < $tabPanels.length; j++) {
            $tabPanels[j].classList.remove('show', 'active');
            $tabPanels[j].hidden = true;
        }

        this.scrollToSection($tab);

        if ($tabPanel) {
            $tabPanel.classList.add('show', 'active');
            $tabPanel.hidden = false;

            var video = $tabPanel.querySelector('div[data-cmp-is="autosized-video"]');
            if (video) {
                this.initInlineVideo(video);
            }

            var lottieWrapper = $tabPanel.querySelector('.lottie-animation-wrapper');
            if (lottieWrapper) {
                lottieWrapper.classList.remove('active');
                void lottieWrapper.offsetWidth;
                lottieWrapper.classList.add('active');
            }
        }

        var mainIndicator = this.el.querySelector('.nav-tabs__indicator--horizontal');
        if (mainIndicator) {
            this.updateIndicator($tab, 'horizontal', mainIndicator);
        }
    };

    Tabs.prototype.initInlineVideo = function (video) {
        if (!video) return;

        var videoPlayer = video.querySelector('video');
        var pauseBtn = video.querySelector('.fdn-autoVideo__video-control--pause');
        var playBtn = video.querySelector('.fdn-autoVideo__video-control--play');
        var restartBtn = video.querySelector('.fdn-autoVideo__video-control--restart');

        restartBtn.hidden = true;
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        playBtn.hidden = true;
        pauseBtn.hidden = false;
    };

    Tabs.prototype.initNestedTabsIndicator = function () {
        var indicators = this.domMap.indicators;
        var initialActiveTabs = this.domMap.initialActiveTabs;

        if (indicators.length > 0 && initialActiveTabs.length > 0) {
            var indicator = indicators[0];
            var activeTab = initialActiveTabs[0];
            this.updateIndicator(activeTab, 'horizontal', indicator);
        }
    };

    Tabs.prototype.updateIndicator = function (tab, orientation, indicator) {
        var context = tab.closest('.nested-product-tab-wrapper__inner-nav') || this.el;
        var targetIndicator = indicator || context.querySelector('.nav-tabs__indicator--' + orientation);

        if (targetIndicator && tab) {
            if (orientation === 'horizontal') {
                var offsetLeft = tab.offsetLeft;
                var offsetWidth = tab.offsetWidth;
                targetIndicator.style.left = offsetLeft + 'px';
                targetIndicator.style.width = offsetWidth + 'px';
            }
        }
    };

    Tabs.prototype.handleInnerTabClick = function (event) {
        event.preventDefault();
        var currentTab = event.currentTarget;
        var tabContainer = currentTab.closest('.nested-product-tab-wrapper__inner-nav');
        var self = this;

        var tabs = tabContainer.querySelectorAll('.nav-link');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active', 'first-active');
            tabs[i].setAttribute('aria-selected', 'false');
        }

        currentTab.classList.add('active');
        currentTab.setAttribute('aria-selected', 'true');

        var indicator = tabContainer.querySelector('.nav-tabs__indicator--horizontal');
        this.updateIndicator(currentTab, 'horizontal', indicator);
        this.scrollToSection(currentTab);

        var nestedTabPanelId = currentTab.getAttribute('data-target');
        var nestedTabPanel = this.el.querySelector(nestedTabPanelId);

        if (nestedTabPanel) {
            var allPanes = this.el.querySelectorAll('.fdn-tabs__tabpanel');
            for (var j = 0; j < allPanes.length; j++) {
                allPanes[j].classList.remove('show', 'active');
                allPanes[j].hidden = true;
            }

            nestedTabPanel.classList.add('show', 'active');
            nestedTabPanel.hidden = false;

            var lottieWrapper = nestedTabPanel.querySelector('.lottie-animation-wrapper');
            if (lottieWrapper) {
                lottieWrapper.classList.remove('active');
                void lottieWrapper.offsetWidth;
                lottieWrapper.classList.add('active');
            }

            var lottieJsonEls = nestedTabPanel.querySelectorAll('.lottie-animation-json');
            for (var k = 0; k < lottieJsonEls.length; k++) {
                if (lottieJsonEls[k].LottieInstance) {
                    lottieJsonEls[k].LottieInstance.goToAndPlay(0, true);
                }
            }
        }
    };

    Tabs.prototype.scrollToSection = function (currentTab) {
        var container = currentTab.parentElement;
        var containerRect = container.getBoundingClientRect();
        var tabRect = currentTab.getBoundingClientRect();
        var offset = currentTab.offsetLeft - ((containerRect.width - tabRect.width) / 2);
        container.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    };

    Tabs.prototype.updateIndicatorWidth = function () {
        var activeTab = this.el.querySelector('.fdn-tabs__tab[aria-selected="true"]');
        var indicator = this.el.querySelector('.nav-tabs__indicator--horizontal');
        var self = this;

        if (activeTab && indicator) {
            requestAnimationFrame(function () {
                var tabWidth = activeTab.getBoundingClientRect().width;

                if (tabWidth === 0) {
                    setTimeout(function () {
                        tabWidth = activeTab.getBoundingClientRect().width;
                        if (tabWidth > 0) {
                            indicator.style.width = tabWidth + 'px';
                            indicator.style.left = activeTab.getBoundingClientRect().left + 'px';
                        }
                    }, 100);
                } else {
                    indicator.style.width = tabWidth + 'px';
                    indicator.style.left = activeTab.getBoundingClientRect().left + 'px';
                }
            });
        }
    };

    Tabs.prototype.handleResize = function () {
        var $innerTabs = this.domMap.$innerTabs;
        for (var i = 0; i < $innerTabs.length; i++) {
            if ($innerTabs[i].classList.contains('active')) {
                this.updateIndicator($innerTabs[i], 'horizontal');
                this.scrollToSection($innerTabs[i]);
            }
        }
    };

    Tabs.prototype.debounce = function (func, wait) {
        var timeout;
        var context = this;
        return function () {
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        };
    };

    function FooterV1(el) {
        this.el = el;
        this.domMap = {
            titles: this.el.querySelectorAll(".zdcm-module-footer-nav__title"),
            dropdown: this.el.querySelectorAll('.zdcm-module-footer-dropdown')
        };
        this.accordionClickHandlers = [];

        this.footerAccordion();
        this.openDropdown();

        var languageBtn = this.el.querySelectorAll('.zdcm-module-footer-dropdown__btn[data-template="js-language-content"], .zdcm-module-footer-dropdown__btn[data-template="js-language-mobile-content"]');
        var currencyBtn = this.el.querySelectorAll('.zdcm-module-footer-dropdown__btn[data-template="js-currency-content"], .zdcm-module-footer-dropdown__btn[data-template="js-currency-mobile-content"]');

        for (var i = 0; i < languageBtn.length; i++) {
            languageBtn[i].addEventListener('click', this.bindDropdownLogic.bind(this));
        }
        for (var j = 0; j < currencyBtn.length; j++) {
            currencyBtn[j].addEventListener('click', this.bindDropdownLogic.bind(this));
        }

        var self = this;
        document.addEventListener("currencySync", function (data) {
            self.onChangeCurrencyD(data);
        });

        if (typeof allCurrencyList !== 'undefined' && allCurrencyList) {
            for (var c = 0; c < allCurrencyList.length; c++) {
                if (allCurrencyList[c].isSelected === true) {
                    this.setCurrencyCookie(allCurrencyList[c].currencyAbbreviation);
                    break;
                }
            }
        }

        window.addEventListener("resize", this.handleResize.bind(this));
        setTimeout(function () {
            let trustDom = document.querySelector('.utility-nav__item #ot-do-not-sell');
            if (trustDom) {
                trustDom.innerHTML = '<img alt=\"\" src=\"https://st1.zoom.us/homepage/publish/assets/images/privacyoptions.png" />Your Privacy Choices';
            }
        }, 5000)

    }

    FooterV1.prototype.footerAccordion = function () {
        var self = this;
        if (window.innerWidth > 1024) {
            for (var i = 0; i < self.domMap.titles.length; i++) {
                var title = self.domMap.titles[i];
                var panel = title.nextElementSibling;
                title.classList.remove("active");
                if (panel && panel.classList.contains("zdcm-module-footer-nav__panel")) {
                    panel.style.maxHeight = "";
                    panel.style.opacity = "";
                    panel.style.overflow = "";
                    panel.style.transition = "";
                    panel.style.marginBottom = "";
                    panel.style.display = "";
                }
            }
        } else {
            for (var j = 0; j < self.domMap.titles.length; j++) {
                var oldTitle = self.domMap.titles[j];
                var newTitle = oldTitle.cloneNode(true);
                oldTitle.parentNode.replaceChild(newTitle, oldTitle);
            }

            self.domMap.titles = self.el.querySelectorAll(".zdcm-module-footer-nav__title");

            for (var k = 0; k < self.domMap.titles.length; k++) {
                (function (title, index) {
                    var panel = title.nextElementSibling;

                    if (panel && panel.classList.contains("zdcm-module-footer-nav__panel")) {
                        panel.style.overflow = "hidden";
                        panel.style.transition = "max-height 0.4s ease, opacity 0.3s ease";

                        if (index === 0) {
                            title.classList.add("active");
                            panel.style.maxHeight = panel.scrollHeight + "px";
                            panel.style.opacity = "1";
                            panel.style.marginBottom = '40px';
                        } else {
                            title.classList.remove("active");
                            panel.style.maxHeight = "0px";
                            panel.style.opacity = "0";
                            panel.style.marginBottom = '0px';
                        }
                    }

                    title.addEventListener("click", function (e) {
                        e.preventDefault();
                        var isAlreadyOpen = title.classList.contains("active");

                        for (var l = 0; l < self.domMap.titles.length; l++) {
                            var t = self.domMap.titles[l];
                            var otherPanel = t.nextElementSibling;
                            if (t !== title) {
                                t.classList.remove("active");
                                if (otherPanel && otherPanel.classList.contains("zdcm-module-footer-nav__panel")) {
                                    otherPanel.style.maxHeight = "0px";
                                    otherPanel.style.opacity = "0";
                                    otherPanel.style.marginBottom = '0px';
                                }
                            }
                        }

                        var currentPanel = title.nextElementSibling;

                        if (currentPanel && currentPanel.classList.contains("zdcm-module-footer-nav__panel")) {
                            if (isAlreadyOpen) {
                                title.classList.remove("active");
                                currentPanel.style.maxHeight = "0px";
                                currentPanel.style.opacity = "0";
                                currentPanel.style.marginBottom = '0px';
                            } else {
                                title.classList.add("active");
                                currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
                                currentPanel.style.opacity = "1";
                                currentPanel.style.marginBottom = '40px';
                            }
                        }
                    });
                })(self.domMap.titles[k], k);
            }
        }
    };

    FooterV1.prototype.openDropdown = function () {
        var self = this;

        for (var i = 0; i < self.domMap.dropdown.length; i++) {
            (function (button) {
                button.addEventListener('click', function (event) {
                    event.stopPropagation();

                    var targetId = button.getAttribute('data-target');
                    var dropdown = document.getElementById(targetId);
                    var parent = button.closest('.zdcm-module-footer-dropdown');
                    if (parent) {
                        parent.classList.toggle('open');
                        var allDropdowns = document.querySelectorAll('.zdcm-module-footer-dropdown');
                        for (var j = 0; j < allDropdowns.length; j++) {
                            if (allDropdowns[j] !== parent) {
                                allDropdowns[j].classList.remove('open');
                            }
                        }

                    }
                });
            })(self.domMap.dropdown[i]);
        }

        document.addEventListener('click', function (event) {
            var isInsideDropdown = event.target.closest('.zdcm-module-footer-dropdown');
            if (!isInsideDropdown) {
                var allDropdowns = document.querySelectorAll('.zdcm-module-footer-dropdown');
                for (var i = 0; i < allDropdowns.length; i++) {
                    allDropdowns[i].classList.remove('open');
                }
            }
        });
    };

    FooterV1.prototype.handleResize = function () {
        var self = this;
        requestAnimationFrame(function () {
            if (window.innerWidth > 1024) {
                for (var i = 0; i < self.domMap.titles.length; i++) {
                    var title = self.domMap.titles[i];
                    var panel = title.nextElementSibling;
                    title.classList.remove("active");

                    if (panel && panel.classList.contains("zdcm-module-footer-nav__panel")) {
                        panel.style.maxHeight = "";
                        panel.style.opacity = "";
                        panel.style.overflow = "";
                        panel.style.transition = "";
                        panel.style.marginBottom = "";
                        panel.style.display = "";
                    }
                }
            } else {
                self.footerAccordion();
            }
        });
    };

    FooterV1.prototype.bindDropdownLogic = function () {
        var self = this;

        var languageLinks = document.querySelectorAll(
            '#js-language-content .zdcm-module-footer-dropdown__link, #js-language-mobile-content .zdcm-module-footer-dropdown__link'
        );

        for (var i = 0; i < languageLinks.length; i++) {
            (function (link) {
                link.addEventListener('click', function () {
                    var locale = link.getAttribute('data-locale');
                    if (locale) {
                        self.setLanguageCookie(locale);
                        for (var j = 0; j < languageLinks.length; j++) {
                            if (languageLinks[j].getAttribute('data-locale') === locale) {
                                languageLinks[j].classList.add('active');
                            } else {
                                languageLinks[j].classList.remove('active');
                            }
                        }
                    }
                });
            })(languageLinks[i]);
        }

        var currencyItems = document.querySelectorAll(
            '#js-currency-content .zdcm-module-footer-dropdown__item, #js-currency-mobile-content .zdcm-module-footer-dropdown__item'
        );

        for (var k = 0; k < currencyItems.length; k++) {
            (function (item) {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    var currency = item.getAttribute('data-currency-value');
                    if (currency) {
                        var event;
                        try {
                            event = new CustomEvent("currencySync", {
                                detail: {
                                    currency: currency
                                },
                                bubbles: true
                            });
                        } catch (e) {
                            event = document.createEvent('CustomEvent');
                            event.initCustomEvent("currencySync", true, true, {
                                currency: currency
                            });
                        }
                        document.dispatchEvent(event);
                    }
                });
            })(currencyItems[k]);
        }
    };

    FooterV1.prototype.onChangeCurrencyD = function (data) {
        try {
            var currencyAbbreviation = data.detail.currency;
            var currency = currencyAbbreviation;

            var currencyItems = document.querySelectorAll(
                '#js-currency-content .zdcm-module-footer-dropdown__item, #js-currency-mobile-content .zdcm-module-footer-dropdown__item'
            );

            var item = null;
            for (var i = 0; i < currencyItems.length; i++) {
                if (currencyItems[i].id === currencyAbbreviation) {
                    item = currencyItems[i];
                    break;
                }
            }

            if (!item) {
                return;
            }

            var button = item.querySelector('.zdcm-module-footer-dropdown__link');
            var currencyButtons = document.querySelectorAll('[data-template="js-currency-content"], [data-template="js-currency-mobile-content"]');

            if (button && currencyButtons.length > 0) {
                var allLinks = document.querySelectorAll('#js-currency-content .zdcm-module-footer-dropdown__link, #js-currency-mobile-content .zdcm-module-footer-dropdown__link');
                for (var j = 0; j < allLinks.length; j++) {
                    allLinks[j].classList.remove('active');
                }

                button.classList.add('active');

                for (var k = 0; k < currencyButtons.length; k++) {
                    currencyButtons[k].innerHTML = button.innerText + '<img class="zdcm-module-footer-dropdown__svg" src="https://st1.zoom.us/homepage/publish/assets/images/CaretDown.svg">';
                }
            }

            if (currency) {
                this.setCurrencyCookie(currency);
                var flag = document.querySelector("#IsIncludeCurrencyFilter");
                if (flag && flag.value === "1") {
                    var changeEvent = document.createEvent('CustomEvent');
                    changeEvent.initCustomEvent("currencyChanged", true, true, {
                        currency: currency
                    });
                    document.dispatchEvent(changeEvent);
                } else {
                    callPricingAPI();
                }

                var allPrices = [].concat(
                    Array.prototype.slice.call(document.querySelectorAll('.fdn-pricing-card__price-container')),
                    Array.prototype.slice.call(document.querySelectorAll('.fdn-event-card__price')),
                    Array.prototype.slice.call(document.querySelectorAll('.fdn-expanding-card__price'))
                );

                for (var z = 0; z < allPrices.length; z++) {
                    if (allPrices[z].dataset.currencyValue === currency) {
                        allPrices[z].classList.add('active');
                    } else {
                        allPrices[z].classList.remove('active');
                    }
                }
            }

        } catch (error) {
            console.error('Error in onChangeCurrencyD:', error);
        }
    };

    FooterV1.prototype.setCurrencyCookie = function (currencyAbbreviation) {
        try {
            var currencyCookie = "_zm_currency";
            var domain;
            if (location.hostname.indexOf('.') > -1) {
                var parts = location.hostname.split('.');
                domain = parts[parts.length - 2] + '.' + parts[parts.length - 1];
            } else {
                domain = location.hostname;
            }
            setCookieWithDomain(currencyCookie, currencyAbbreviation, 365, domain);
        } catch (error) {
            console.error('Error setting currency cookie:', error);
        }
    };

    FooterV1.prototype.setLanguageCookie = function (languageCode) {
        try {
            var languageCookie = "_zm_lang";
            setCookie(languageCookie, languageCode, 365);
        } catch (error) {
            console.error('Error setting language cookie:', error);
        }
    };

document.addEventListener("DOMContentLoaded", function () {
  addCoveoScripts();
  initialize();
      /* Code for Cms guid Cookie deletion */
    document.querySelectorAll("a[href]").forEach((a) => {
      try {
        const url = new URL(a.href);
        if (
          url.hostname === "dev-integration.zoomdev.us" || url.hostname === "zoom.us" &&
          url.href.toLowerCase().includes("signin")
        ) {
          a.addEventListener("click", function () {
            deleteCookie("_zm_cms_guid");
          });
        }
      } catch (e) {
        // Ignore malformed URLs
      }
    });
  datalayerTracking_605();
 
  const coveoSearchHeader = document.getElementById("coveoSearchHeader");
  if (!coveoSearchHeader) {
    return;
  }
  coveoSearchHeader.addEventListener("click", () => {
    injectSearchScript();
  });
  const leftHamburger = document.querySelector(
    "nav.zdcm-main-nav .zdcm-main-nav__left button.zdcm-main-nav__hamburger-trigger"
  );
  if (!leftHamburger) {
    return;
  }
  leftHamburger.addEventListener("click", () => {
    injectSearchScript();
  });
  const rightHamburger = document.querySelector(
    "nav.zdcm-main-nav .zdcm-main-nav__right li.zdcm-mobile-hamburger"
  );
  if (!rightHamburger) {
    return;
  }
  rightHamburger.addEventListener("click", () => {
    injectSearchScript();
  });
});


const domainMap = {
  "int.zoom.com": "https://dev-integration.zoomdev.us",
  "int.zoomdev.us": "https://dev-integration.zoomdev.us",
  "localhost": "https://dev-integration.zoomdev.us",
  "stage.zoom.com": "https://zoomdev.us",
  "www.zoom.com": "https://zoom.us"
};

function isChromeUserAgent() {
  const userAgent = navigator.userAgent;
  return ![
    "Chrome", "Chromium", "CriOS", "Edg", "Brave", "OPR", "SamsungBrowser", "Vivaldi"
  ].some(browserId => userAgent.includes(browserId));
}

function removeUrlExtraParams(paramsToRemove) {
  let url = new URL(window.location);
  let searchParams = new URLSearchParams(url.search);

  paramsToRemove.forEach(param => {
    searchParams.delete(param);
  });

  url.search = searchParams.toString();
  history.pushState({}, document.title, url.toString());
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	// see if value is JSON
	let isJSON = function isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	};
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) {
			let content = c.substring(nameEQ.length, c.length);
			if (isJSON(content)) {
				content = JSON.parse(content);
				// replace commas
				for (const [key, item] of Object.entries(content)) {
					if (typeof item == 'string') content[key] = item.replace('U+0002C',',')
				}
			}
			return content;
		}
	}
	return null;
}

function isThirdPartyCookieDisabled(timeoutMs = 3000) {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    const targetOrigin = getCurrentDomain(true);
    let resolved = false;

    iframe.style.display = 'none';
    iframe.src = `${targetOrigin}/third_party_cookie_check.html`;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        iframe.remove();
        resolve(true);
      }
    }, timeoutMs);

    iframe.onload = () => {
      try {
        iframe.contentWindow.postMessage({ type: 'checkCookies' }, targetOrigin);
      } catch (e) {
        clearTimeout(timeout);
        resolved = true;
        iframe.remove();
        resolve(true);
      }
    };

    function handleMessage(event) {
      if (
        event.origin === targetOrigin &&
        event.source === iframe.contentWindow &&
        event.data.type === 'cookieStatus'
      ) {
        clearTimeout(timeout);
        resolved = true;
        window.removeEventListener('message', handleMessage);
        iframe.remove();
        resolve(!event.data.status);
      }
    }

    window.addEventListener('message', handleMessage);
    document.body.appendChild(iframe);
  });
}

function getCurrentDomain() {
  return "https://zoom.us";
}

function deleteCookie(cookieName) {
  // Delete cookie at root path
  document.cookie = `${cookieName}=; Max-Age=-99999999; path=/;`;

  // Delete cookie at each sub-path
  const pathParts = location.pathname.split("/");

  for (let i = 0; i < pathParts.length; i++) {
    const path = pathParts.slice(0, i + 1).join("/");
    document.cookie = `${cookieName}=; Max-Age=-99999999; path=${path};`;
  }

  // Delete cookie on all domain variations
  const hostname = location.hostname;
  const domainParts = hostname.split(".");

  if (domainParts.length > 1) {
    for (let i = 0; i < domainParts.length - 1; i++) {
      const domain = domainParts.slice(-i - 1).join(".");
      document.cookie = `${cookieName}=; Max-Age=-99999999; path=/; domain=.${domain};`;
    }
  }
}

function setSecureCookie(cookieName, cookieValue, domain) {
  try {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour

    const expiresAttribute = `; expires=${expirationDate.toUTCString()}`;

    let valueToStore;

    if (typeof cookieValue === "object") {
      const escapedObject = {};

      for (const [key, value] of Object.entries(cookieValue)) {
        // Replace a single comma in strings with U+0002C
        escapedObject[key] = (typeof value === "string") ? value.replace(/,/, "U+0002C") : value;
      }

      valueToStore = JSON.stringify(escapedObject);
    } else {
      valueToStore = cookieValue || "";
    }

    document.cookie = `${cookieName}=${valueToStore}${expiresAttribute}; path=/; secure; samesite=none; domain=.${domain}`;
  } catch (error) {
    console.log("Error setting cookie:", error);
  }
}

function setSecureCookieWithExpiry(cookieName, cookieValue, expiryDays, domain) {
  try {
    let expiresAttribute = "";

    if (expiryDays) {
      const expirationDate = new Date();
      expirationDate.setTime(
        expirationDate.getTime() + expiryDays * 24 * 60 * 60 * 1000
      );
      expiresAttribute = `; expires=${expirationDate.toUTCString()}`;
    }

    let valueToStore;

    if (typeof cookieValue === "object") {
      const escapedObject = {};

      for (const [key, value] of Object.entries(cookieValue)) {
        escapedObject[key] = (typeof value === "string") ? value.replace(/,/, "U+0002C") : value;
      }

      valueToStore = JSON.stringify(escapedObject);
    } else {
      valueToStore = cookieValue || "";
    }

    document.cookie = `${cookieName}=${valueToStore}${expiresAttribute}; path=/; secure; samesite=none; domain=.${domain}`;
  } catch (error) {
    console.log("Error setting cookie:", error);
  }
}

function syncStatus(queryString) {
  let newUrl = "";
  const syncStatusElement = document.getElementById("sync-status");

  if (syncStatusElement && syncStatusElement.value && syncStatusElement.value.trim() !== '') {
    let adjustedQuery = queryString;
    //If query starts with '?', replace with '&'
    if (adjustedQuery.startsWith("?")) {
      adjustedQuery = "&" + adjustedQuery.substring(1);
    }
    const urlWithoutQuery = window.location.origin + window.location.pathname;
    newUrl = syncStatusElement.value + urlWithoutQuery+adjustedQuery;
    window.location.href = newUrl
  }
}

var authorized = false;

async function handleCmsGuidFlow() {
  const thirdPartyCookiesDisabled = await isThirdPartyCookieDisabled();
  if (thirdPartyCookiesDisabled || isChromeUserAgent()) {
    const urlParams = new URLSearchParams(window.location.search);
    const cmsGuidFromUrl = urlParams.get("cms_guid");
    const fromParam = urlParams.get("from");

    // Remove params from URL
    removeUrlExtraParams(["cms_guid", "from"]);

    const cmsGuidCookie = getCookie("_zm_cms_guid");

    if (cmsGuidFromUrl === "false" && fromParam === "logout") {
      // Clear cookie and set authorized to false
      deleteCookie("_zm_cms_guid");
      authorized = false;

    } else if (cmsGuidCookie === "" || cmsGuidCookie === null || cmsGuidCookie === undefined) {
      if (cmsGuidFromUrl === "false") {
        setSecureCookie("_zm_cms_guid", "false", "zoom.com");

      } else if (cmsGuidFromUrl !== null) {
        setSecureCookieWithExpiry("_zm_cms_guid", cmsGuidFromUrl, 1, "zoom.com");

      } else {
        syncStatus(window.location.search);
      }

    } else if (cmsGuidCookie === "false") {
      authorized = false;
    }

    return true;

  } else {
       return false;
  }
}

async function handleMarketVerifyFlow() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://www.zoom.com' && event.origin !== 'https://support.zoom.com') {
        return;
      }

      if (event.data && event.data.type === 'checkCookies') {
        document.cookie = "thirdparty_test=1; SameSite=None; Secure";
        const hasCookie = document.cookie.includes('thirdparty_test=');
        event.source.postMessage({ type: 'cookieStatus', status: hasCookie }, event.origin);
      }
    });

    const result = await handleCmsGuidFlow();
    return result;
}


