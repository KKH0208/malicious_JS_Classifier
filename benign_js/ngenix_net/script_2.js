/* 元のURL: https://ngenix.net */

  (function () {
    try {
      const element = document.querySelector('#json-data');
      window.__jsonData = JSON.parse(element?.textContent || '{}');
    } catch (err) {
      console.warn(err);
      window.__jsonData = {};
    }
  })();


