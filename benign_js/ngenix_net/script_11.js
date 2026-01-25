/* 元のURL: https://ngenix.net */

  (function () {
    const button = document.querySelector('.cookie-notification button.notification__btn');
    if (!button) return;

    function onBtnClickHandler() {
      const forms = document.querySelectorAll('form input[name="00N1v1708607463"]');
      localStorage.setItem('ngenix-cookies', 'Да');
      for (const form of forms) form.value = 'Да';
    }

    button.addEventListener('click', onBtnClickHandler);
  })();


