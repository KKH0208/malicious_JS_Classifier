window.addEventListener('DOMContentLoaded', function() {
      var closeBtnEl = document.querySelector('.fluxoverlay__btn');
      if (closeBtnEl) {
        closeBtnEl.addEventListener('click', function(e) {
          e.stopPropagation();
          const overlayWrapperEl = document.querySelector('.fluxoverlay__wrapper');
          if (overlayWrapperEl) {
            overlayWrapperEl.textContent = '';
            overlayWrapperEl.style.display = 'none';
          }
        }, true);
      }
    });
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            var slot = event.slot;
            var divId = slot.getSlotElementId();
            // オーバーレイ広告がemptyの場合
            if (divId === 'div-gpt-ad-PC/Overlay' && event.isEmpty) {
                var overlayWrapperEl = document.querySelector('.fluxoverlay__wrapper');
                if (overlayWrapperEl) {
                    overlayWrapperEl.textContent = '';
                    overlayWrapperEl.style.display = 'none';
                }
            }
        });
    });