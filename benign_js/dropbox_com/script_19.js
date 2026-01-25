/* 元のURL: https://dropbox.com */

    window.addRequireLoadCallback(function() {
        window.require(["js/edison/edison"], function (edisonModule) {
            if (edisonModule.Edison.markServerSidePrefetchStarted) {
                edisonModule.Edison.markServerSidePrefetchStarted([]);
            }
        });
    });



