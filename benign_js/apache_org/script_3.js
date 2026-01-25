/* 元のURL: https://apache.org */

    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#pagefind-search" });
    });
    var pageTitle = 'Welcome to The Apache Software Foundation';
    if(pageTitle === '404'){
      window.addEventListener('DOMContentLoaded', (event) => {
          new PagefindUI({ element: "#page-404-search" });
      });
    }
  

