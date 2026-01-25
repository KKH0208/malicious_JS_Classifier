/* 元のURL: https://zoom.us */
// 外部JS: https://st1.zoom.us/homepage/publish/primary/assets/js/home-main.js
// pure vanila javascript
(function(){
    // ********** polyfills **********
    if (!Array.from) {
        Array.from = function (iterable) {
            return [].slice.call(iterable);
        };
    };
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {
            if (this == null) {
                throw new TypeError('Array.prototype.forEach called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            var T = thisArg;
            var k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }
    // ********** carousels **********
    function addTogglePrevNextBtnsActive(carouselInstance, prevBtn, nextBtn) {
        function togglePrevNextBtnsState() {
            if (carouselInstance.canScrollPrev()) {
                prevBtn.removeAttribute('disabled');
            } else {
                prevBtn.setAttribute('disabled', 'disabled');
            }

            if (carouselInstance.canScrollNext()) {
                nextBtn.removeAttribute('disabled');
            } else {
                nextBtn.setAttribute('disabled', 'disabled');
            }
        }

        carouselInstance
            .on('select', togglePrevNextBtnsState)
            .on('init', togglePrevNextBtnsState)
            .on('reInit', togglePrevNextBtnsState);

        return function () {
            prevBtn.removeAttribute('disabled');
            nextBtn.removeAttribute('disabled');
        };
    }

    function addPrevNextBtnsClickHandlers(carouselInstance, prevBtn, nextBtn) {
        function scrollPrev() {
            carouselInstance.scrollPrev();
        }
        function scrollNext() {
            carouselInstance.scrollNext();
        }

        prevBtn.addEventListener('click', scrollPrev, false);
        nextBtn.addEventListener('click', scrollNext, false);

        var removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
            carouselInstance,
            prevBtn,
            nextBtn
        );

        return function () {
            removeTogglePrevNextBtnsActive();
            prevBtn.removeEventListener('click', scrollPrev, false);
            nextBtn.removeEventListener('click', scrollNext, false);
        };
    }

    function addDotBtnsAndClickHandlers(carouselInstance, dotsNode) {
        var dotNodes = [];

        function addDotBtnsWithClickHandlers() {
            dotsNode.innerHTML = carouselInstance
                .scrollSnapList()
                .map(function () {
                    return '<button class="zt-carousel__dot" type="button"></button>';
                })
                .join('');

            function scrollTo(index) {
                carouselInstance.scrollTo(index);
            }

            dotNodes = Array.from(dotsNode.querySelectorAll('.zt-carousel__dot'));
            dotNodes.forEach(function (dotNode, index) {
                dotNode.addEventListener(
                    'click',
                    function () {
                        scrollTo(index);
                    },
                    false
                );
            });
        }

        function toggleDotBtnsActive() {
            var previous = carouselInstance.previousScrollSnap();
            var selected = carouselInstance.selectedScrollSnap();
            dotNodes[previous].classList.remove('zt-carousel__dot--selected');
            dotNodes[selected].classList.add('zt-carousel__dot--selected');
        }

        carouselInstance
            .on('init', addDotBtnsWithClickHandlers)
            .on('reInit', addDotBtnsWithClickHandlers)
            .on('init', toggleDotBtnsActive)
            .on('reInit', toggleDotBtnsActive)
            .on('select', toggleDotBtnsActive)
            .on('slidesInView', function () {
                if (
                    carouselInstance.plugins() &&
                    carouselInstance.plugins().autoplay
                ) {
                    carouselInstance.plugins().autoplay.reset();
                }
            });

        return function () {
            dotsNode.innerHTML = '';
        };
    }

    (function () {
        var instances = Array.from(document.querySelectorAll('.zt-carousel'));
        instances.map(function (node) {
            var isCarousel = node.hasAttribute('carousel');
            if (!isCarousel) return;

            var autoplay = node.hasAttribute('autoplay');
            var loop = node.hasAttribute('loop') || false;
            var align = node.getAttribute('align') || 'center';

            var viewportNode = node.querySelector('.zt-carousel__viewport');
            var prevBtnNode = node.querySelector('.zt-carousel__button--prev');
            var nextBtnNode = node.querySelector('.zt-carousel__button--next');
            var dotsNode = node.querySelector('.zt-carousel__dots');

            var OPTIONS = { align: align, loop: loop, dragFree: true };

            var autoplayPlugin = EmblaCarouselAutoplay({
                delay: 5000,
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true
            });

            var carouselInstance = EmblaCarousel(
                viewportNode,
                OPTIONS,
                autoplay ? [autoplayPlugin] : []
            );

            var removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
                carouselInstance,
                prevBtnNode,
                nextBtnNode
            );

            var removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
                carouselInstance,
                dotsNode
            );

            carouselInstance.on('destroy', removePrevNextBtnsClickHandlers);
            carouselInstance.on('destroy', removeDotBtnsAndClickHandlers);
        });
    })();
    // ********** carousel ends **********

    /* ********** Tab switching functionality ********** */
    function registryTabSwitching(tabItemClass, tabPaneClass, activeClass) {
        var tabItems = Array.from(document.querySelectorAll('.' + tabItemClass));
        var tabPanes = Array.from(document.querySelectorAll('.' + tabPaneClass));

        tabItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and panes
                tabItems.forEach(function(tab) {
                    tab.classList.remove(activeClass);
                });
                tabPanes.forEach(function(pane) {
                    pane.classList.remove(activeClass);
                });
                
                // Add active class to clicked tab and corresponding pane
                this.classList.add(activeClass);
                document.getElementById(targetTab).classList.add(activeClass);
            });
        });
    }

    /* ********** platform sectionTab switching functionality ********** */
    function platformRegistryTabSwitching() {
        registryTabSwitching('one-platform-tab-item', 'one-platform-tab-pane', 'one-platform-active');
    }

    /* ********** companies achievements tab switching functionality ********** */
    function achievementsRegistryTabSwitching() {
        registryTabSwitching('achievements-mobile-tab-item', 'achievements-mobile-content', 'achievements-mobile-item-active');
    }

    /* ********** companies achievements section ********** */
    function achievementsSection() {
        // Get all image items
        var imageItems = Array.from(document.querySelectorAll('.achievements-image-gallery-item'));

        // Set active image
        function setActiveImage(index) {
            var activeClass = 'achievements-image-gallery-active';
            // Remove all active classes
            imageItems.forEach(function(item) {
                item.classList.remove(activeClass);
            });
            // Add active class to specified index image
            imageItems[index].classList.add(activeClass);
        }

        // Add mouse hover event to each image item
        imageItems.forEach(function(item, index) {
            item.addEventListener('mouseenter', function() {
                setActiveImage(index);
            });
        });

        // Initialize: ensure first image is active
        setActiveImage(0);
    }

    /* ********** platform sectionTab switching functionality ********** */
    document.addEventListener('DOMContentLoaded', function() {
        platformRegistryTabSwitching();
        achievementsRegistryTabSwitching();
        achievementsSection();
    });

  //news-card
  var newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(function (card) {
      var icon = card.querySelector('.card-action-button-alt')
      card.addEventListener('click', function () {
          var url = icon.getAttribute('data-url');
          if (url) {
              window.open(url, '_blank');
          }
      });
      card.addEventListener('mouseenter', function () {
          icon.style.background = '#0B5CFF';
          icon.querySelector('.arrow-icon-alt').src = 'https://st1.zoom.us/homepage/publish/primary/assets/img/news-arrow-right-icon.svg';
      });
      card.addEventListener('mouseleave', function () {
          icon.style.background = '#ffffff';
          icon.querySelector('.arrow-icon-alt').src = 'https://st1.zoom.us/homepage/publish/primary/assets/img/news-arrow-right-icon-white.svg';
      });
  });
})()

