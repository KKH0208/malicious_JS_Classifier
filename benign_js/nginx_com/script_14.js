/* 元のURL: https://nginx.com */

    const searchButtonSelector = "#search-bar-open-button";

    document.querySelector("#skiplink-search").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(searchButtonSelector).click();
    });


