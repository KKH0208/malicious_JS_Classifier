/* 元のURL: https://yahoo.com */

        (function () {
            var waferReady = window.wafer;
            waferReady = waferReady && waferReady.ready;
            function initViewer() {
                if (window.YAHOO && window.YAHOO.viewer) {
                    window.YAHOO.viewer.init({"context":{"device":"desktop","lang":"en-US","region":"US","site":"fp"},"enableSeamlessAPI":true,"enableSeamlessProgramming":true,"factualPoll":{"config":{"doNotUseshareWidth":true},"ctrl":"FactualPoll","enabled":true,"m_id":"polls","xhrPathPrefix":"/fire_ms/_rcv/remote"},"enableChartbeat":true,"clickHandler":{"clusterSize":5,"ntkClusterSize":5},"clusterArticleRapidConfig":{"pl2":"seamless-article"},"mainArticleRapidConfig":{"pl2":"seamless-article"},"enableTopicSubnavigation":true,"userConsent":true});
                }
            }
            if (waferReady) {
                waferReady(initViewer);
            } else {
                document.body.addEventListener('wafer:ready', initViewer);
            }
        })();
    

