/* 元のURL: https://stripe.com */
(() => {
  function displayContentForState(state) {
    document
      .querySelectorAll(`template[data-mount-on-state="${state}"]`)
      .forEach((template) =>
        document
          .querySelectorAll(template.dataset.mountTarget)
          .forEach((target) => {
            while (target.firstChild) target.removeChild(target.firstChild);
            target.appendChild(template.content.cloneNode(true));
          }),
      );
  }
  const siteAuthCookie = document.cookie.match(/(?:^|;)\s*site-auth=([^;]+);?/);
  const hasLoggedInCookie = document.cookie.match(
    /(?:^|;)\s*__Secure-has_logged_in=([^;]+);?/,
  );

  const isLoggedIn = siteAuthCookie && siteAuthCookie[1] === '1';
  const hasLoggedIn = hasLoggedInCookie && hasLoggedInCookie[1];

  if (isLoggedIn) {
    displayContentForState('logged-in');
  } else if (hasLoggedIn) {
    displayContentForState('logged-out-existing');
  } else {
    displayContentForState('logged-out-new');
  }
})();


