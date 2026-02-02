/* 元のURL: https://wired.com */
window.Martech = window.Martech || new Promise((resolve) => {
  window._mt_init = { resolve };
});

window.Martech.then((martech) => {
  martech.setConfig({
    // custom behavior for header based authentication
    authHeaders: () => ({
      'Authorization': 'Bearer ' + (
        martech.util.getCookie('CN_token_id') ||
        martech.util.getCookie('CN_userAuth')
      )
    }),
  });
});

