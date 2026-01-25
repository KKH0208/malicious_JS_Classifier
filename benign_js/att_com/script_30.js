/* 元のURL: https://att.com */
// 外部JS: https://att.com/gnav/main/2.1/prerender/consumer/scripts/globalnav-nx-ui.esm.js
import { p as e, b as t } from "./p-ce22c440.js";

export { s as setNonce } from "./p-ce22c440.js";

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */ (() => {
  const t = import.meta.url, a = {};
  return "" !== t && (a.resourcesUrl = new URL(".", t).href), e(a);
})().then((e => t([ [ "p-9ef5bb531b", [ [ 0, "att-gnav-alerts", {
  feed: [ 8 ],
  show: [ 4 ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  slotNumber: [ 2, "slot-number" ],
  alertsTab: [ 32 ],
  alertsLimit: [ 32 ],
  noticesLimit: [ 32 ],
  offersLimit: [ 32 ]
}, null, {
  feed: [ "feedHandler" ]
} ] ] ], [ "p-35f2b4c506", [ [ 0, "attwc-globalnav-footer", {
  customerType: [ 1, "customer-type" ],
  excludeGNComps: [ 1, "exclude-g-n-comps" ],
  GnavType: [ 1, "gnav-type" ],
  loadGlobalFonts: [ 4, "load-global-fonts" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  disableChangeLang: [ 4, "disable-change-lang" ]
}, null, {
  customerType: [ "customerTypeHandler" ]
} ], [ 32, "att-gnav-footer-bootstrap-v2", {
  excludeGnComps: [ 1, "exclude-gn-comps" ],
  GnavType: [ 1, "gnav-type" ],
  customerType: [ 1, "customer-type" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  excludeLinkBarn: [ 4, "exclude-link-barn" ]
}, [ [ 8, "changeLanguageLinkClick", "updateLanguage" ], [ 0, "keydown", "handleKeyDown" ], [ 1, "mousedown", "handleMouseDown" ] ] ], [ 32, "legal-links-v2", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  customerType: [ 1, "customer-type" ],
  excludeChangeLang: [ 4, "exclude-change-lang" ],
  legalLinksSection: [ 32 ]
} ], [ 32, "link-barn-v2", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  linkBarnData: [ 32 ]
} ], [ 32, "footer-disclaimer-v2", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  copyrightContent: [ 32 ]
} ], [ 32, "resources-links", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  resourceLinks: [ 32 ]
} ], [ 32, "top-panel", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  customerType: [ 1, "customer-type" ],
  topPanel: [ 32 ]
} ], [ 32, "accordion-component", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  heading: [ 1 ],
  links: [ 16 ],
  index: [ 2 ],
  linkBarnAccordionOpenAll: [ 4, "link-barn-accordion-open-all" ],
  rows: [ 2 ],
  colomns: [ 2 ],
  linkBarnLength: [ 2, "link-barn-length" ]
} ], [ 32, "spanish-language-link", {
  excludeChangeLang: [ 4, "exclude-change-lang" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  spanishLinkSection: [ 32 ]
} ] ] ], [ "p-77d2e9fd3b", [ [ 32, "attwc-globalnav-header", {
  customerType: [ 1, "customer-type" ],
  excludeGNComps: [ 1, "exclude-g-n-comps" ],
  partnerApp: [ 1028, "partner-app" ],
  disableCartFlyout: [ 4, "disable-cart-flyout" ],
  GnavType: [ 1, "gnav-type" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  loadGlobalFonts: [ 4, "load-global-fonts" ],
  stylesMode: [ 1, "styles-mode" ]
}, [ [ 0, "reAuthenticate", "reAuthHandler" ], [ 8, "DM_EVENT_PAGELOAD", "DMeventPageload" ], [ 8, "load", "readyStateChange" ] ], {
  customerType: [ "customerTypeHandler" ]
} ], [ 32, "att-gnav-header-bootstrap", {
  customerType: [ 1, "customer-type" ],
  partnerApp: [ 4, "partner-app" ],
  auth: [ 4 ],
  excludeGNComps: [ 1025, "exclude-g-n-comps" ],
  GnavType: [ 1, "gnav-type" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  loadGlobalFonts: [ 4, "load-global-fonts" ],
  disableCartFlyout: [ 4, "disable-cart-flyout" ],
  activeGNEle: [ 32 ],
  isSearchActive: [ 32 ]
}, [ [ 9, "scroll", "updategnMask" ], [ 8, "gnActiveModule", "GNActiveModule" ], [ 8, "updateGNPartnerUI", "updateGNPartnerUI" ] ] ], [ 32, "att-gnav-profile-widget", {
  showMenu: [ 1028, "show-menu" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  customerType: [ 1, "customer-type" ],
  auth: [ 4 ],
  _state: [ 32 ],
  iruData: [ 32 ],
  iruPopupOpen: [ 32 ],
  alertsData: [ 32 ],
  isAlertsOpen: [ 32 ],
  displayNotificationBanner: [ 32 ],
  notificationDetails: [ 32 ]
}, [ [ 8, "gnActiveModule", "GNActiveModule" ], [ 8, "reloadProfileMenu", "reload" ], [ 8, "refreshAlert", "reloadAlerts" ], [ 8, "gnInCompleteState", "gnInCompleteState" ] ], {
  showMenu: [ "menuHandler" ]
} ], [ 32, "att-gnav-cart-widget", {
  openMenu: [ 1028, "open-menu" ],
  disableCartCall: [ 1028, "disable-cart-call" ],
  disableCartFlyout: [ 1028, "disable-cart-flyout" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  cartRes: [ 32 ]
}, [ [ 0, "getCartUpdate", "fetchCart" ], [ 8, "gnActiveModule", "GNActiveModule" ] ] ], [ 32, "att-gnav-hamburger-menu", {
  customerType: [ 1, "customer-type" ],
  excludeGNComps: [ 1, "exclude-g-n-comps" ],
  auth: [ 4 ],
  showMenu: [ 1028, "show-menu" ],
  showSecondayMenu: [ 1025, "show-seconday-menu" ],
  loadCustomStyles: [ 4, "load-custom-styles" ],
  _states: [ 32 ]
}, [ [ 8, "gnActiveModule", "GNActiveModule" ] ] ], [ 32, "att-gnav-universal-nav", {
  excludeGNComps: [ 1, "exclude-g-n-comps" ],
  loadCustomStyles: [ 4, "load-custom-styles" ]
} ], [ 0, "att-gnav-bg-image" ], [ 32, "att-gnav-home-button", {
  customerType: [ 1, "customer-type" ],
  loadCustomStyles: [ 4, "load-custom-styles" ]
} ], [ 32, "att-gnav-horizontal-nav", {
  loadCustomStyles: [ 4, "load-custom-styles" ]
} ], [ 0, "att-gnav-partner-nav" ], [ 32, "att-gnav-search-widget", {
  customerType: [ 1, "customer-type" ],
  isSearchActive: [ 1028, "is-search-active" ],
  isMobile: [ 1028, "is-mobile" ],
  isTablet: [ 1028, "is-tablet" ],
  searchText: [ 32 ],
  toggleSuggestFlyout: [ 32 ],
  autoSuggest: [ 32 ],
  selectedSuggestion: [ 32 ]
}, [ [ 8, "gnActiveModule", "GNActiveModule" ], [ 8, "openGNSearch", "openGNSearch" ], [ 8, "closeGNSearch", "closeGNSearch" ], [ 9, "resize", "handleResize" ] ] ], [ 4, "att-gnav-segment-bar" ], [ 32, "att-gnav-skipnav-widget", {
  loadCustomStyles: [ 4, "load-custom-styles" ],
  focusWithin: [ 32 ]
} ], [ 0, "att-gnav-badge", {
  count: [ 8 ],
  currentState: [ 32 ]
} ], [ 0, "att-gnav-mp-widget", {
  linkPath: [ 1, "link-path" ],
  linkPosition: [ 1, "link-position" ],
  linkId: [ 1, "link-id" ],
  linkClass: [ 1, "link-class" ]
} ] ] ] ], e)));

