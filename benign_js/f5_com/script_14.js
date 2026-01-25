/* 元のURL: https://f5.com */

    const searchButtonSelector = "#search-bar-open-button";

    document.querySelector("#skiplink-search").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(searchButtonSelector).click();
    });


