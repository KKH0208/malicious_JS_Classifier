/* 元のURL: https://msn.com */

        try {
            window._pageTimings = { TTJSStart: Math.round(performance.now()) };
            window._clientSettings = JSON.parse(document.head.dataset.clientSettings);
        } catch (e) {
            console.error("Error in adding TTJSStart marker");
        }
    

