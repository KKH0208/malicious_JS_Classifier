/* 元のURL: https://media.net */

  document.addEventListener('DOMContentLoaded', () => {
    const submitLinks = document.querySelectorAll('[data-form-submit="true"]');

    submitLinks.forEach(submitLink => {
      submitLink.addEventListener('click', (event) => {
        event.preventDefault();

        const form = submitLink.closest('form');

        const submitButton = form.querySelector('input[type="submit"]');

        if (submitButton) {
        	console.log(submitButton);
          submitButton.click();
        } else {
          console.error('Submit button not found in the form');
        }
      });
    });
  });


