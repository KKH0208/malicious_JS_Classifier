/* 元のURL: https://www.gov.uk */

//<![CDATA[
  document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#giraffe"),
      form = document.querySelector("#something-is-wrong")

    form.addEventListener("submit", spamCapture);

    function spamCapture(e) {
      if (input.value.length !== 0) return;
      e.preventDefault();
    }
  });

//]]>


