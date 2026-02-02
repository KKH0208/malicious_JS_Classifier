/* 元のURL: https://indiatimes.com */

    function extractArticleIdFromUrl(url) {
        var match = url.match(/articleshow\/(\d+)\.html/);
        if (match) {
            return match[1];
        }
        console.warn("Could not extract article ID from URL");
        return 0;
    }


