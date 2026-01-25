/* 元のURL: https://eset.com */

document.addEventListener("DOMContentLoaded", () => {
  const targetNode = document.getElementsByTagName("body")[0];
  const userWaySelector = 'userwayAccessibilityIcon';
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList" && document.getElementById(userWaySelector) !== null) {

        const htmlElement = document.querySelector('html');
    if (htmlElement.classList.contains('phone')) {
        const userWayElement = document.getElementById('userwayAccessibilityIcon');
        setTimeout(function(){
            userWayElement.style.bottom = '90px';
        }, 200);
    }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
});



