/* 元のURL: https://intuit.com */

document.addEventListener("DOMContentLoaded", function() {  
  // Set height of element with id nav_control to 60px
  var navControl = document.getElementById('sticky_container');
  if (navControl) {
    navControl.style.height = '60px';
  }
  
  // Make element with id control_sticky sticky on scroll
  var controlSticky = document.getElementById('nav_sticky');
  if (controlSticky) {
    window.addEventListener('scroll', function() {
      var stickyTop = controlSticky.getBoundingClientRect().top;
      var controlWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      
      if (window.pageYOffset > stickyTop) {
        controlSticky.style.position = 'fixed';
        controlSticky.style.top = '0';
        controlSticky.style.width = controlWidth + 'px'; // Set width to viewport width
        controlSticky.style.left = '0'; // Align to the left
        controlSticky.style.zIndex = '1000'; // Ensure it stays on top
        controlSticky.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height
      } else {
        controlSticky.style.position = '';
        controlSticky.style.top = '';
        controlSticky.style.width = '';
        controlSticky.style.left = '';
        controlSticky.style.zIndex = '';
      }
    });
  }
})


