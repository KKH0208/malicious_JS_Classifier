/* 元のURL: https://nvidia.com */

        (() => {
            let getViewportDimensions = () => {
                return {
                    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                    height: Math.max(document.documentElement.clientHeight || 0, window.clientHeight || 0)
                }
            }

            let getViewportType = () => {
                const viewport = getViewportDimensions();
                if (viewport.width < 640) {
                    return 'mobile';
                } else if (viewport.width >= 640 && viewport.width < 1024) {
                    return 'tablet';
                } else if (viewport.width >= 1024 && viewport.width < 1350) {
                    return 'laptop';
                } else if (viewport.width >= 1350) {
                    return 'desktop';
                }
            }
            let currentViewportType = getViewportType();

            window.addEventListener("resize", () => {
                const oldResolution = currentViewportType;
                currentViewportType = getViewportType();
                if (oldResolution !== currentViewportType) {
                    window.dispatchEvent(new CustomEvent("onNvBreakpointChange", {
                      detail: {
                            breakpoint: currentViewportType,
                            changedFrom: oldResolution,
                            vw: getViewportDimensions().width,
                            vh: getViewportDimensions().height
                        }
                    }));
                }
            });

            // START: Header Height Calculation and Custom Event for Header Height Change
            
            let lastTotalHeight = 0;
            const headerSelectors = [
                // Below are Common Selectors
                '.global-nav:not(.pull-up)>.geo-locator', // Geo - Locator
                '.global-nav:not(.pull-up)>.nav-header', // Main Nav - Desktop
                '.global-nav:not(.pull-up)>.mobile-nav', // Main Nav - Mobile
                '.global-nav>#unibrow-container', // Unibrow - Injected via Target
                '.global-nav>.sub-brand-nav', // Common Sub Brand Nav
                '.global-nav>.breadcrumb .subnav', // Page Sub Brand Nav
                '.global-nav>.in-page-nav-outer-container', // In-page Nav
                '.global-nav>.cmp-verticalnavigation__toc-mobile', // Vertical navigation
            ];

            // Configuration for MutationObservers.
            // Add a `debugName` property to help identify which observer is firing.
            const mutationObserversConfig = [
              {
                selector: 'nav.global-nav',
                debugName: 'Global Navigation Container',
                options: { attributes: true, attributeFilter: ['class', 'style'], childList: true }
              },
              {
                selector: '.global-nav>.geo-locator',
                debugName: 'Geo Locator',
                options: { attributes: true, attributeFilter: ['class', 'style'], childList: true }
              },
              {
                selector: '.global-nav>#unibrow-container',
                debugName: 'Unibrow Container',
                options: { attributes: true, attributeFilter: ['class', 'style'], childList: true }
              }
            ];

            // Configuration for ResizeObservers.
            // Add new objects to this array to monitor additional elements for size changes.
            const resizeObserversConfig = [
              {
                selector: '.global-nav>.geo-locator',
                debugName: 'Geo Locator (ResizeObserver)'
              }
            ];

            // ---------------------------------------------------------------------
            // Utility Functions
            // ---------------------------------------------------------------------

            /**
             * Function to calculate the total height of the header elements.
             * This function loops through the provided header selectors, calculates their height, 
             * and returns the total sum of these heights.
             * 
             * @returns {Number} The total height of all header elements.
             */
            const calculateTotalHeight = () => {
                let totalHeight = 0;
                    headerSelectors.forEach((headerSelector) => {
                    const headerHeight = document.querySelector(headerSelector)?.offsetHeight || 0;
                    totalHeight += headerHeight;
                });
                return totalHeight;
            }

            /**
             * Updates the header layout by recalculating the total header height,
             * updating CSS custom properties, and dispatching a custom event if a change occurred.
             */
            const updateHeaderLayout = () => {
              const newTotalHeight = calculateTotalHeight();
              if (newTotalHeight !== lastTotalHeight) {
                lastTotalHeight = newTotalHeight;
                console.debug('[UpdateHeaderLayout] New total header height in pixels:', newTotalHeight);
                window.dispatchEvent(new CustomEvent("onNvHeaderHeightChange", { detail: newTotalHeight }));
                document.documentElement.style.setProperty('--nv-header-height', newTotalHeight + 'px');
              
                // Calculate pull-up height using either the mobile navigation or desktop navigation
                // plus the geo-locator height.
                const mobileNavHeight = 
                  document.querySelector('.global-nav>.mobile-nav')?.offsetHeight ||
                  document.querySelector('.global-nav>.nav-header')?.offsetHeight || 0;
                const geoLocatorHeight = document.querySelector('.global-nav>.geo-locator')?.offsetHeight || 0;
                const pullUpHeight = mobileNavHeight + geoLocatorHeight;
                document.documentElement.style.setProperty('--nv-global-nav-pull-up', pullUpHeight + 'px');
              }
            };

            /**
            * Attaches a MutationObserver to the given element using the specified options.
            *
            * @param {HTMLElement} element - The DOM element to observe.
            * @param {Object} options - Options for the MutationObserver.
            * @param {String} debugName - A name to identify this observer in logs.
            */
            const attachMutationObserver = (element, options, debugName = 'Unknown MutationObserver') => {
              if (!element) return;
              const observer = new MutationObserver((mutationsList) => {
                console.debug('[MutationObserver][' + debugName + '] Triggered for element:', element);
                console.debug('[MutationObserver][' + debugName + '] Mutation details:', mutationsList);
                updateHeaderLayout();
              });
              observer.observe(element, options);
            };
          
            /**
             * Attaches a ResizeObserver to the given element.
             *
             * @param {HTMLElement} element - The DOM element to observe for size changes.
             * @param {String} debugName - A name to identify this observer in logs.
             */
            const attachResizeObserver = (element, debugName = 'Unknown ResizeObserver') => {
              if (!element || !window.ResizeObserver) return;
              const resizeObserver = new ResizeObserver((entries) => {
                entries.forEach(entry => {
                  console.debug('[ResizeObserver]['+ debugName + '] Triggered for element:', element);
                  console.debug('[ResizeObserver]['+ debugName + '] New size:', entry.contentRect);
                });
                updateHeaderLayout();
              });
              resizeObserver.observe(element);
            };
          
            // ---------------------------------------------------------------------
            // Observer Initialization Functions
            // ---------------------------------------------------------------------
          
            /**
             * Initializes and attaches MutationObservers for all configured elements.
             */
            const setMutationObservers = () => {
              mutationObserversConfig.forEach(config => {
                const element = document.querySelector(config.selector);
                attachMutationObserver(element, config.options, config.debugName);
              });
            };
          
            /**
             * Initializes and attaches ResizeObservers for all configured elements.
             */
            const setResizeObservers = () => {
              resizeObserversConfig.forEach(config => {
                const element = document.querySelector(config.selector);
                attachResizeObserver(element, config.debugName);
              });
            };
              
            /**
             * Main function to set up all header observers—both MutationObservers and ResizeObservers.
             * Calling window.setHeaderObservers() will initialize and attach all observers.
             */
            window.setHeaderObservers = () => {
              setMutationObservers();
              setResizeObservers();
              // Perform an initial update to ensure proper header layout on load.
              updateHeaderLayout();
            };
            
            /**
             * Function to get the current total height of all header elements.
             * This function returns the total header height by retrieving --nv-header-height value.
             * 
             * @returns {Number} The current total height of all header elements.
             */
            window.getHeaderHeight = () => {
                const rootStyles = getComputedStyle(document.documentElement);
                const headerHeight = rootStyles.getPropertyValue('--nv-header-height').trim();
                return parseFloat(headerHeight);
            };
            
            // END: Header Height Calculation and Custom Event for Header Height Change

            // START: setContainerHeight
            /* 
                setContainerHeight sets the height of nv-container image or video.
                This is included in head section to improve the page performance
            */
            
            const containerWithFitBgEnabled = [];
            window.setContainerHeight = (containerID) => {
                var element = document.getElementById(containerID);
                var disableMidgroundImgAutoHeight = null;
                var disableVideoAutoHeight = null;
                if (element.classList.contains('v1-1')) {
                    disableMidgroundImgAutoHeight = 'true';
                    disableVideoAutoHeight = 'true';
                }
                var vpWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                var imageContainer = element.querySelector('.nv-img-as-bg');
                var videoContainer = element.querySelector('.nv-video-as-bg');
                var image = element.querySelector('#image-' + containerID);
                var video = element.querySelector('#video-' + containerID);
                disableMidgroundImgAutoHeight = disableMidgroundImgAutoHeight || element.getAttribute('data-cmp-disableMidgroundAutoHeight');
                disableVideoAutoHeight = disableVideoAutoHeight || element.getAttribute('data-cmp-disableVideoAutoHeight');
                if (!image && !video) {
                    return;
                }
                if (!containerWithFitBgEnabled.includes(containerID)
                    && (imageContainer?.classList.contains('t-img-fit')
                    || imageContainer?.classList.contains('p-img-fit')
                    || imageContainer?.classList.contains('t-image-fit-contain')
                    || imageContainer?.classList.contains('t-image-fit-cover')
                    || imageContainer?.classList.contains('p-image-fit-contain')
                    || imageContainer?.classList.contains('p-image-fit-cover')
                    || videoContainer?.classList.contains('t-video-fit')
                    || videoContainer?.classList.contains('p-video-fit')
                    || videoContainer?.classList.contains('t-video-fit-contain')
                    || videoContainer?.classList.contains('t-video-fit-cover')
                    || videoContainer?.classList.contains('p-video-fit-contain')
                    || videoContainer?.classList.contains('p-video-fit-cover'))) {
                        containerWithFitBgEnabled.push(containerID);
                }
                if (image && !image.classList.contains('hide')) {
                    var imgHeight = image.naturalHeight;
                    var imgRenderedHeight = image.height;
                    var childElement = imageContainer;
                    if (imgHeight === 1 || imgRenderedHeight === 1) {
                        return;
                    }
                }
                if (video && !video.classList.contains('hide') && video.children.length > 0) {
                    var videoHeight = video.videoHeight;
                    var videoRenderedHeight = video.getBoundingClientRect().height;
                    var childElement = videoContainer;
                }

                element.style.height = null;
                if (childElement) childElement.style.height = null;

                const isMobileViewport = vpWidth < 640;
                const isTabletViewport = vpWidth >= 640 && vpWidth < 1024;

                if (isMobileViewport) {
                    if (imageContainer?.classList.contains('p-image-c-top') || imageContainer?.classList.contains('p-image-c-bottom')) {
                        disableMidgroundImgAutoHeight = 'false';
                    }
                    if (videoContainer?.classList.contains('p-video-c-top') || videoContainer?.classList.contains('p-video-c-bottom')) {
                        disableVideoAutoHeight = 'false';
                    }
                }

                if (isTabletViewport) {
                    if (imageContainer?.classList.contains('t-image-c-top') || imageContainer?.classList.contains('t-image-c-bottom')) {
                        disableMidgroundImgAutoHeight = 'false';
                    }
                    if (videoContainer?.classList.contains('t-video-c-top') || videoContainer?.classList.contains('t-video-c-bottom')) {
                        disableVideoAutoHeight = 'false';
                    }   
                }

                if (videoHeight !== undefined && videoHeight != 1 && videoHeight !== 0 && disableVideoAutoHeight  !== 'true') {
                    const pVideoCTop = childElement.classList.contains('p-video-c-top');
                    const pVideoCBottom = childElement.classList.contains('p-video-c-bottom');
                    const pVideoFit = childElement.classList.contains('p-video-fit');

                    const tVideoCTop = childElement.classList.contains('t-video-c-top');
                    const tVideoCBottom = childElement.classList.contains('t-video-c-bottom');
                    const tVideoFit = childElement.classList.contains('t-video-fit');

                    let setChildHeight = false;
                    let height = videoHeight;

                    if (isMobileViewport && (pVideoCTop || pVideoCBottom || pVideoFit)) {
                      setChildHeight = pVideoCTop || pVideoCBottom;
                      height = pVideoFit ? videoRenderedHeight : videoHeight;
                    } else if (isTabletViewport && (tVideoCTop || tVideoCBottom || tVideoFit)) {
                      setChildHeight = tVideoCTop || tVideoCBottom;
                      height = tVideoFit ? videoRenderedHeight : videoHeight;
                    }
                    
                    setChildHeight ? (childElement.style.height = height + 'px') : (element.style.height = height + 'px');
                }
                else if (imgHeight !== undefined && imgHeight != 1 && disableMidgroundImgAutoHeight !== 'true') {
                    const pImageCTop = childElement.classList.contains('p-image-c-top');
                    const pImageCBottom = childElement.classList.contains('p-image-c-bottom');
                    const pImgFit = childElement.classList.contains('p-img-fit');

                    const tImageCTop = childElement.classList.contains('t-image-c-top');
                    const tImageCBottom = childElement.classList.contains('t-image-c-bottom');
                    const tImgFit = childElement.classList.contains('t-img-fit');

                    let height = imgHeight;
                    let setChildHeight = false;

                    if (isMobileViewport && (pImageCTop || pImageCBottom || pImgFit)) {
                      height = imgRenderedHeight;
                      setChildHeight = pImageCTop || pImageCBottom;
                    } else if (isTabletViewport && (tImageCTop || tImageCBottom || tImgFit)) {
                      height = imgRenderedHeight;
                      setChildHeight = tImageCTop || tImageCBottom;
                    }

                    setChildHeight ? (childElement.style.height = height + 'px') : (element.style.height = height + 'px');
                } else if (video?.hasAttribute('poster') && disableVideoAutoHeight !== 'true') {
                    element.style.height = videoRenderedHeight + 'px';
                }

                // If container is authored inside carousel - adjust height as per first container height 
                var nvContainer = element.parentNode,
                    nvContainerParent = nvContainer?.parentNode,
                    isCarouselSlide = nvContainerParent?.classList.contains('cmp-carousel__item') || false;
                if (isCarouselSlide) {
                    var carouselSlideId = nvContainerParent.getAttribute('id'),
                        carouselId = carouselSlideId.match(/(.*)-item-(.*)-tabpanel/)[1],
                        firstSlide = document.querySelector('#' + carouselId + ' [data-cmp-slide-no="1"]'),
                        firstSlideImageHeight = firstSlide?.querySelector('.nv-img-as-bg')?.style.height,
                        firstSlideVideoHeight = firstSlide?.querySelector('.nv-video-as-bg')?.style.height,
                        containerImg = nvContainer.querySelector('.nv-img-as-bg'),
                        containerVideo = nvContainer.querySelector('.nv-video-as-bg');

                    if (firstSlideImageHeight && containerImg) containerImg.style.height = firstSlideImageHeight;
                    if (firstSlideVideoHeight && containerVideo) containerVideo.style.height = firstSlideVideoHeight;
                }
            }

            window.addEventListener('onNvBreakpointChange', (e) => {
                document.querySelectorAll('[data-cmp-is="nv-container"]').forEach((container) => {
                    const containerId = container.getAttribute('id');
                    window.initBuildVideo(containerId);
                    window.initLazyLoadingImages(containerId);
                    window.setContainerHeight(containerId);
                });
            });

            // Call setContainerHeight for containers with Fit Image Background or Fit Video Background is Enabled
            // Fit Image / Video Background is applicabled only for Mobile & Tablet viewports
            window.addEventListener('resize', (e) => {
                if (containerWithFitBgEnabled.length > 0) {
                    const vpWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                    if (vpWidth <= 1023) {
                        containerWithFitBgEnabled.forEach(containerId => window.setContainerHeight(containerId));
                    }
                }
            });
            // END: setContainerHeight

            // Variables
            let videoSources = {};

            /**
             * @breif Accepts components JSON data to build source elements for each device type
             * @param Object videoSource 
             */
            let buildSources = (videoSource) => {
                for (const viewport in videoSource) {
                    const fragment = createSrcFragment(videoSource[viewport]);
                    videoSources[viewport] = fragment;
                }
            }

            /**
             * @breif Creats document fragment that contain maximum of upto 3 <source> tags (webm, mp4, ogg)
             * @param {*} videos - Array of objects with type and src properties
             * @returns DocumentFragment with maximum of upto 3 <source> tags
             */
            let createSrcFragment = (videos) => {
                const fragment = new DocumentFragment();
                const videoWebm = videos.find((src) => src.type === 'video/webm');
                const videoMp4 = videos.find((src) => src.type === 'video/mp4');
                const videoOgg = videos.find((src) => src.type === 'video/ogg');
                if (videoWebm && videoWebm.src && videoWebm.type) {
                    fragment.appendChild(createSource(videoWebm));
                }
                if (videoMp4 && videoMp4.src && videoMp4.type) {
                    fragment.appendChild(createSource(videoMp4));
                }
                if (videoOgg && videoOgg.src && videoOgg.type) {
                    fragment.appendChild(createSource(videoOgg));
                }
                return fragment;
            }

            /**
             * @breif Creates source element
             * @param {*} videos - Object with type and src properties
             * @returns HTMLElement <source>
             */
            let createSource = (video) => {
                const source = document.createElement('source');
                source.setAttribute('src', video.src);
                source.setAttribute('type', video.type);
                return source;
            }

            /**
             * Adds source elments to video and trigger play
             * @param {*} videoEle 
             * @param {*} videoSources 
             */
            let loadVideo = (videoEle, videoSources) => {
                videoEle.classList.remove('hide');
                videoEle.appendChild(videoSources);
            }

            let initLazyLoadingVideo = (containerId) => {
                //Select all videos that have lazy loading enabled
                const container = document.getElementById(containerId);
                const videoTarget = container.querySelector('video[data-nv-lazyload]');
            
                if (videoTarget) {
                    //Intersection Observer Callback Function
                    const loadVideo = (entries, observer) => {
                        const [entry] = entries;
                        if (!entry.isIntersecting) {
                            return;
                        }
                        entry.target.play();
                    
                        videoTarget.removeAttribute('data-nv-lazyload');
                    
                        observer.unobserve(entry.target);
                    };
                
                    const videoObserver = new IntersectionObserver(loadVideo, {
                        root: null,
                        rootMargin: "300px"
                    })
                
                    // Set the Videos to be observed
                    videoObserver.observe(videoTarget);
                
                }
            }

            /**
             * @breif Build <source> and append to <video>. Handles changing video source by screen size.
             */
            window.initBuildVideo = (containerId) => {
                const container = document.getElementById(containerId);
                const video = container.querySelector('.nv-video-load-src>video');
                if (video) {
                    const videoSource = JSON.parse(video.dataset.videoSource);
                    let screen = document.documentElement.clientWidth || document.body.clientWidth;
                    buildSources(videoSource);
                
                    if (Object.keys(videoSources).length > 0) {
                        while (video.firstChild) {
                            video.removeChild(video.lastChild);
                        }
                        if (screen < 640) {
                            if (videoSources.mobile) loadVideo(video, videoSources.mobile);
                            else video.classList.add('hide');
                        } else if (screen >= 640 && screen < 1024) {
                            if (videoSources.tablet) loadVideo(video, videoSources.tablet);
                            else video.classList.add('hide');
                        } else if (screen >= 1024 && screen < 1350) {
                            if (videoSources.laptop) loadVideo(video, videoSources.laptop);
                            else video.classList.add('hide');
                        } else if (screen >= 1350) {
                            if (videoSources.desktop) loadVideo(video, videoSources.desktop);
                            else video.classList.add('hide');
                        }
                    }

                    if (video.hasAttribute('poster')) {
                        window.setContainerHeight(containerId);
                    }
                
                    video.onloadeddata = function() {
                        window.setContainerHeight(containerId);
                        video.play();
                    }
                    video.onended = () => {
                        if (!video.hasAttribute('loop')) {
                            video.classList.add('hide');
                            window.setContainerHeight(containerId);
                        }
                    }
                
                    if (video.hasAttribute('data-nv-lazyload')) {
                        initLazyLoadingVideo(containerId);
                    } else {
                        video.load();
                    }
                
                    video.classList.remove('nv-video-load-src');
                    video.classList.add('nv-video-src-loaded');
                }
            }

            window.initLazyLoadingImages = (containerId) => {
                //Select all images that have lazy loading enabled
                const container = document.getElementById(containerId);
                const picture = container.querySelector('picture[data-nv-lazyload]');
                if (picture) {
                    const imageTarget = picture.querySelector('img');
                
                    //Intersection Observer Callback Function
                    const loadImage = (entries, observer) => {
                        const [entry] = entries;
                        if (!entry.isIntersecting) {
                            return;
                        }
                    
                        const picture = entry.target.parentNode,
                            srcsetMobile = picture.getAttribute('data-srcset-mobile'),
                            srcsetTablet = picture.getAttribute('data-srcset-tablet'),
                            srcsetLaptop = picture.getAttribute('data-srcset-laptop'),
                            srcsetDesktop = picture.getAttribute('data-srcset-desktop');
                        picture.querySelector('source[data-source-mobile]').srcset = srcsetMobile;
                        picture.querySelector('source[data-source-tablet]').srcset = srcsetTablet;
                        picture.querySelector('source[data-source-laptop]').srcset = srcsetLaptop;
                        picture.querySelector('source[data-source-desktop]').srcset = srcsetDesktop;
                        picture.querySelector('img').src = srcsetDesktop.split(',')[0];
                        picture.querySelector('img').srcset = srcsetDesktop.split(',')[1];
                    
                        if (imageTarget.closest('.nv-img-as-bg')) {
                            imageTarget.onload = function() {
                                window.setContainerHeight(containerId);
                            }
                        }
                    
                        picture.removeAttribute('data-nv-lazyload');
                    
                        observer.unobserve(entry.target);
                    };
                
                    const imageObserver = new IntersectionObserver(loadImage, {
                        root: null,
                        rootMargin: "300px"
                    });
                
                    // Set the Images to be observed
                    imageObserver.observe(imageTarget);
                
                }
            };
        })();
    

