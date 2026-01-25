/* 元のURL: https://dailymail.co.uk */

  (function() {
    let lastSentIphoneHeight = null;

    window.addEventListener('message', function (event) {
      try {
        if (!event.data) {
          return;
        }

        var eventData = null;

        try {
          eventData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        } catch (jsonErr) {
          return;
        }

        if (!eventData) {
          return;
        }

        var handledIframe = document.querySelector('iframe[name="xp-iframe-mhb11jytd5xbsbp3dii"]');
        var iframe = null;
        var newHeight = null;

        if (eventData.docHeight && eventData.iframe) {
          iframe = document.getElementsByName(eventData.iframe)[0];
          newHeight = eventData.docHeight;

          if (iframe !== handledIframe) {
            return;
          }
        }

        if (eventData.currentHeightChange && handledIframe.contentWindow === event.source) {
          iframe = handledIframe;
          newHeight = eventData.currentHeightChange;
        }

        if (eventData.sentinel === 'amp' && eventData.height) {
          if (handledIframe.contentWindow === event.source) {
            iframe = handledIframe;
            newHeight = eventData.height;
          }
        }

        if (!iframe || !newHeight || typeof newHeight !== 'number') {
          return;
        }
        
        var newHeight = newHeight + 'px';
        var box = iframe.getBoundingClientRect();
        var isInViewport = box.y > (0 - box.height + Math.min(200, box.height)) && box.y < window.innerHeight

        iframe.style.height = newHeight;

        const getElementTotalHeight = (element) => {
          if (!element) {
            return 0;
          }
        
          const elementStyle = window.getComputedStyle(element);
          const bottomMargin = parseInt(elementStyle.marginBottom, 10);
          const topMargin = parseInt(elementStyle.marginTop, 10);
        
          return element.getBoundingClientRect().height + bottomMargin + topMargin;
        };

        const iphoneResizer = window.webkit &&
          window.webkit.messageHandlers && 
          window.webkit.messageHandlers.onXpModuleResizeMessage;

        const sendIphoneResizeMessage = () => {
          if (!iphoneResizer) {
            return;
          }

          const newHeight = getElementTotalHeight(document.body);

          if (lastSentIphoneHeight === newHeight || newHeight < 100) {
            return;
          }

          const message = {
            data: {
              height: newHeight
            },
            scope: 'mol-fe-xpmodule-iframe-creator'
          };

          iphoneResizer.postMessage(JSON.stringify(message), '*');
          lastSentIphoneHeight = newHeight;
        }

        sendIphoneResizeMessage();
      } catch (error) {
        console.error('Error resizing iframe', error);
      }
    });
  })();


