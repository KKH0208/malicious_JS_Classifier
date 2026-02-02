/* 元のURL: https://ubuntu.com */

  document.addEventListener('DOMContentLoaded', () => {
    /** init gtm after 2 seconds - can be adjusted */
    setTimeout(initGTM, 2000);
  });
  document.addEventListener('scroll', initGTMOnEvent);
  document.addEventListener('mousemove', initGTMOnEvent);
  document.addEventListener('touchstart', initGTMOnEvent);
  document.addEventListener('keydown', initGTMOnEvent);

  function initGTMOnEvent(event) {
    initGTM();
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
  }

  function initGTM() {
    if (window.gtmDidInit) {
      return false;
    }
    window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    // ensure PageViews is always tracked (on script load)
    script.onload = () => {
      dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
        'gtm.uniqueEventId': 0
      });
    };
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K92JCQ';
    document.head.appendChild(script);
  }


