/* 元のURL: https://ibm.com */

    if(window.location.href.includes("/careers")){
       document.querySelector('c4d-masthead-container').setAttribute("has-search","false");
       document.querySelector('c4d-masthead-container').setAttribute("has-profile","false");
    }
     document.addEventListener("DOMContentLoaded", function() {
        const mastheadContainer = document.querySelector("c4d-masthead-container");
        if (mastheadContainer && mastheadContainer.getAttribute("has-global") === "false") {
            document.querySelector('.earth-language-icon').style.display = 'none';
        }
        else{
               document.querySelector('.earth-language-icon').style.setProperty('display', 'block', 'important');
        }
    });


