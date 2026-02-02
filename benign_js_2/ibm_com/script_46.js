/* 元のURL: https://ibm.com */
// 外部JS: https://ibm.com/etc.clientlibs/adobe-cms/components/content/atoms/image-dm/clientlibs/site.lc-cdf1f98956703ddaa9b16a5d74875d46-lc.min.js
// /libs/core/wcm/components/image/v3/image/clientlibs/site/js/utils.js
/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function(document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.utils = (function() {
        var NS = "cmp";

        /**
         * Reads options data from the Component wrapper element, defined via {@code data-cmp-*} data attributes
         *
         * @param {HTMLElement} element The component element to read options data from
         * @param {String} is The component identifier
         * @returns {String[]} The options read from the component data attributes
         */
        var readData = function(element, is) {
            var data = element.dataset;
            var options = [];
            var capitalized = is;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var reserved = ["is", "hook" + capitalized];

            for (var key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    var value = data[key];

                    if (key.indexOf(NS) === 0) {
                        key = key.slice(NS.length);
                        key = key.charAt(0).toLowerCase() + key.substring(1);

                        if (reserved.indexOf(key) === -1) {
                            options[key] = value;
                        }
                    }
                }
            }
            return options;
        };

        /**
         * Set up the final properties of a component by evaluating the transform function or fall back to the default value on demand
         * @param {String[]} options the options to transform
         * @param {Object} properties object of properties of property functions
         * @returns {Object} transformed properties
         */
        var setupProperties = function(options, properties) {
            var transformedProperties = {};

            for (var key in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, key)) {
                    var property = properties[key];
                    if (options && options[key] != null) {
                        if (property && typeof property.transform === "function") {
                            transformedProperties[key] = property.transform(options[key]);
                        } else {
                            transformedProperties[key] = options[key];
                        }
                    } else {
                        transformedProperties[key] = properties[key]["default"];
                    }
                }
            }
            return transformedProperties;
        };

        return {
            readData: readData,
            setupProperties: setupProperties
        };
    }());
}(window.document));

/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function (document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.image = window.CMP.image || {};
    window.CMP.image.dynamicMediaIBM = (function () {

        function init() {
            const DPR = window.devicePixelRatio || 1;
            const TIMEOUT = 3000;
            let IMAGE_CONFIG = {};

            function getUrl(src) {
                let url;
                try {
                    url = new URL(src);
                } catch (err) {
                    url = new URL(window.location.origin + src);
                }
                return url;
            }

            function getWidth(component, parent) {
                let width = component.offsetWidth;
                while (width < 20 && parent && !component._autoWidth) {
                    width = parent.offsetWidth;
                    parent = parent.parentNode;
                }
                return width;
            }

            async function fetchDynamicMedia(src) {
                const url = getUrl(src + "?req=set,json").toString();
                return fetch(url, { signal: AbortSignal.timeout(TIMEOUT) })
                    .then(response => {
                        if (response.status >= 200 && response.status < 400) return response.text();
                        return Promise.reject(response);
                    })
                    .then(jsonp => {
                        const regexPayload = new RegExp(/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gmi);
                        const resPayload = regexPayload.exec(jsonp);
                        return resPayload ? JSON.parse(resPayload[2]) : Promise.reject(jsonp);
                    })
                    .then(json => {
                        if (json?.set?.relation?.length > 0) return json.set.relation;
                        return Promise.reject(json);
                    })
                    .catch(err => {
                        console.error(`Error fetching DynamicMedia information for image ${url}`, err);
                    });
            }

            /**
             * Returns an object with srcset and src attributes based on the provided parameters.
             * @param {number} aspectratio Aspect ratio of the image
             * @param {string} renderType Render type for the image, can be "dynamicMedia", "assetDelivery" or "adaptiveServlet"
             * @param {string} renderMode Render mode for the image, can be "crop", "picture" or "original"
             * @param {number} elemWidth Width of the element where the image will be displayed
             * @returns Object with srcset and src attributes
             */
            function getImageAttributes(aspectratio, renderType, renderMode, elemWidth) {
                const dmUrl = IMAGE_CONFIG.urls.dynamicmedia;
                const adaptiveUrl = IMAGE_CONFIG.urls.adaptiveservlet;
                const webpUrl = IMAGE_CONFIG.urls.assetdelivery;

                const [w, h] = aspectratio.split('x');
                const calculatedSizes = calculateSizes(parseInt(w) / parseInt(h));

                const cropWidth = IMAGE_CONFIG.widths.find(e => e < elemWidth) || 320;
                const preferredSize = calculatedSizes.find(item => item.targetWidth === cropWidth);

                let srcset;
                let src;
                switch (renderType) {
                    case "dynamicMedia":
                        srcset = buildDynamicMediaSrcset(dmUrl, renderMode === "original" ? undefined : aspectratio, calculatedSizes);
                        src = buildDynamicMediaSrcset(dmUrl, renderMode === "original" ? undefined : aspectratio, [preferredSize])[0];
                        break;
                    case "assetDelivery":
                        srcset = buildAssetDeliverySrcset(webpUrl, calculatedSizes);
                        src = buildAssetDeliverySrcset(webpUrl, [preferredSize])[0];
                        break;
                    default:
                        // allowedRenditionWidths is not provided due to performance issues
                        /**
                         * srcset = buildAdaptiveServletSrcset(adaptiveUrl, calculatedSizes);
                         * src = buildAdaptiveServletSrcset(adaptiveUrl, [preferredSize])[0];
                         */
                        srcset = [];
                        src = adaptiveUrl.toString()
                        .replace(/\.\d+\{.width\}/, '')
                        .replace(/\.\d+%7B.width%7D/, '');
                }
                return { srcset: srcset.join(','), src: src.split(' ')[0] };
            }

            function buildAdaptiveServletSrcset(srcUrl, calculatedSizes) {
                return calculatedSizes.map(size => {
                    const url = getUrl(srcUrl);
                    url.pathname = url.pathname.replace('%7B.width%7D', `.${size.targetWidth}`);
                    return `${url.toString()} ${size.outputWidth}w`;
                });
            }
            function buildAssetDeliverySrcset(srcUrl, calculatedSizes) {
                return calculatedSizes.map(size => {
                    const url = getUrl(srcUrl);
                    url.searchParams.set('width', size.targetWidth);
                    return `${url.toString()} ${size.outputWidth}w`;
                });
            }
            function buildDynamicMediaSrcset(srcUrl, aspectratio, calculatedSizes) {
                return calculatedSizes.map(size => {
                    let url;
                    if (IMAGE_CONFIG.usecustomcrop && IMAGE_CONFIG.customcrops && IMAGE_CONFIG.customcrops[aspectratio]) {
                        url = getUrl(IMAGE_CONFIG.customcrops[aspectratio]);
                    } else {
                        url = getUrl(srcUrl);
                        if (aspectratio) url.pathname = `${url.pathname}:${aspectratio}`;
                    }
                    url.searchParams.set('dpr', `on,${DPR}`);
                    url.searchParams.set('wid', size.targetWidth);
                    url.searchParams.set('hei', size.targetHeight);
                    return `${url.toString()} ${size.outputWidth}w`;
                });
            }

            /**
             * Returns an array of objects with targetWidth, targetHeight, outputWidth and outputHeight
             * based on the provided aspect ratio and widths.
             * @param {number} aspectratio Aspect ratio of the image
             * @returns Array of objects with targetWidth, targetHeight, outputWidth and outputHeight
             */
            function calculateSizes(aspectratio) {
                return IMAGE_CONFIG.widths.map(width => {
                    let tW = parseInt(width);
                    let tH = Math.round(tW / aspectratio);
                    // If the target dimensions (without DPR) are bigger than MAX_IMAGE_SIZE, skip
                    if (tW > IMAGE_CONFIG.maximagesize || tH > IMAGE_CONFIG.maximagesize) return null;

                    // Calculate output dimensions
                    let oW = tW;
                    let oH = Math.round(oW / aspectratio);
                    if (DPR > 1) { // When DPR is > 1, the image returned is double the size
                        oW *= 2;
                        oH *= 2;
                    }
                    if (oW > IMAGE_CONFIG.maximagesize) { // Dynamic media does not serve images bigger than MAX_IMAGE_SIZE
                        oW = IMAGE_CONFIG.maximagesize;
                        oH = Math.round(oW / aspectratio);
                    }
                    if (oH > IMAGE_CONFIG.maximagesize) { // Same happens with the height... Recalculate width in case height > MAX_IMAGE_SIZE
                        oW = Math.round(IMAGE_CONFIG.maximagesize * aspectratio);
                        oH = IMAGE_CONFIG.maximagesize;
                    }
                    return { targetWidth: tW, targetHeight: tH, outputWidth: oW, outputHeight: oH };
                })
                    .filter(item => item !== null)
                    .filter((() => {
                        // Clear duplicated entries based on outputWidth
                        const seen = new Set();
                        return item => {
                            const key = item.outputWidth;
                            if (seen.has(key)) return false;
                            seen.add(key);
                            return true;
                        };
                    })());
            }

            return async (component) => {
                IMAGE_CONFIG = JSON.parse(component.querySelector('script[type="application/json"]').textContent || '{}');
                IMAGE_CONFIG.usecustomcrop = IMAGE_CONFIG.usecustomcrop === "true";
                IMAGE_CONFIG.maximagesize = parseInt(IMAGE_CONFIG.maximagesize);

                const imageCmp = component.querySelector('img');
                const original = { width: imageCmp.getAttribute('width'), height: imageCmp.getAttribute('height') };
                const elemWidth = getWidth(imageCmp, component);

                const crops = await fetchDynamicMedia((IMAGE_CONFIG.urls.dynamicmedia || '').split('?')[0]);

                // Determine the render type based on the properties and crops
                let renderType = "adaptiveServlet";
                if (IMAGE_CONFIG.urls.assetdelivery) renderType = "assetDelivery";
                if (crops) renderType = "dynamicMedia";

                // Determine the render mode based on the aspect ratio provided
                let renderMode = "crop";
                if (IMAGE_CONFIG.aspectratio && IMAGE_CONFIG.aspectratio.includes('|')) renderMode = "picture";
                if (!IMAGE_CONFIG.aspectratio || IMAGE_CONFIG.aspectratio === "original") renderMode = "original";

                if (renderMode === "picture") {
                    // Different cropping configuration for different breakpoints
                    const breakpoints = IMAGE_CONFIG.aspectratio.split('|').reverse();
                    const sourceCmps = [...component.querySelectorAll('source')];
                    // Get the most optimizal width crop based on image display width
                    const initialBreakpoint = sourceCmps.find(sourceCmp => window.matchMedia(sourceCmp.getAttribute('media')).matches);

                    sourceCmps.forEach((sourceCmp, i) => {
                        let aspectratio = `${original.width}x${original.height}`;
                        const selectedCrop = crops?.find(e => e.userdata.SmartCropDef === breakpoints[i]) ?? undefined;
                        if (selectedCrop) {
                            aspectratio = selectedCrop.userdata.SmartCropDef;
                            renderMode = "picture";
                        } else renderMode = "original";

                        const { srcset, src } = getImageAttributes(aspectratio, renderType, renderMode, elemWidth);
                        sourceCmp.setAttribute('srcset', srcset);

                        if (sourceCmp === initialBreakpoint) imageCmp.setAttribute('src', src);
                    });
                    // Image doesnt need srcset
                    imageCmp.removeAttribute('srcset');
                } else {
                    let aspectratio = `${original.width}x${original.height}`;
                    const selectedCrop = crops?.find(e => e.userdata.SmartCropDef === IMAGE_CONFIG.aspectratio) ?? undefined;
                    if (selectedCrop) aspectratio = selectedCrop.userdata.SmartCropDef;
                    else renderMode = "original";
                    const { srcset, src } = getImageAttributes(aspectratio, renderType, renderMode, elemWidth);
                    imageCmp.setAttribute('srcset', srcset);
                    imageCmp.setAttribute('src', src);
                }
            }
        }
        return {
            setDMAttributes: function (component) {
                init()(component);
            }
        };
    }());
    document.dispatchEvent(new CustomEvent("core.wcm.components.commons.site.image.dynamic-media.loaded"));
}(window.document));
// /libs/core/wcm/components/image/v3/image/clientlibs/site/js/image.js
/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function (document) {

    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.image = window.CMP.image || {};
    window.CMP.image.v3 = (function () {
        var IS = "image";

        var selectors = {
            self: "[data-cmp-hook-image='imageV3IBM']",
            lightbox: "[data-cmp-hook-image]:has(>c4d-expressive-modal)"
        };

        var properties = {
            "widths": {
                "default": [],
                "transform": function (value) {
                    var widths = [];
                    value.split(",").forEach(function (item) {
                        item = parseFloat(item);
                        if (!isNaN(item)) {
                            widths.push(item);
                        }
                    });
                    return widths;
                }
            },
            "dmimage": {
                "default": false,
                "transform": function (value) {
                    return !(value === null || typeof value === "undefined");
                }
            },
            "src": {
                "transform": function (value) {
                    return decodeURIComponent(value);
                }
            }
        };

        function Image(config) {
            var that = this;
            /**
             * Init the image if the image is from dynamic media
             * @param {HTMLElement} component the image component
             */
            that.initImage = function (component) {
                var options = CMP.utils.readData(component, IS);
                that._properties = CMP.utils.setupProperties(options, properties);
                if (that._properties.dmimage) {
                    // CMP.image.dynamicMedia.setDMAttributes(component, that._properties);
                    CMP.image.dynamicMediaIBM.setDMAttributes(component, that._properties);
                }
            };
            that.initImage(config.element);
        }

        return {
            init: function () {
                var elements = document.querySelectorAll(selectors.self);
                for (var i = 0; i < elements.length; i++) {
                    new Image({ element: elements[i], options: CMP.utils.readData(elements[i], IS) });
                }

                var lightboxes = document.querySelectorAll(selectors.lightbox);
                for (var i = 0; i < lightboxes.length; i++) {
                    lightboxes[i].querySelector('div.image-border').addEventListener('click', (ev) => {
                        var expressiveModal = ev.target.closest(selectors.lightbox).querySelector('c4d-expressive-modal');
                        expressiveModal.setAttribute("open", "true");
                    });
                }

                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                var body = document.querySelector("body");
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        // needed for IE
                        var nodesArray = [].slice.call(mutation.addedNodes);
                        if (nodesArray.length > 0) {
                            nodesArray.forEach(function (addedNode) {
                                if (addedNode.querySelectorAll) {
                                    var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                                    elementsArray.forEach(function (element) {
                                        new Image({ element: element, options: CMP.utils.readData(element, IS) });
                                    });
                                }
                            });
                        }
                    });
                });

                observer.observe(body, {
                    subtree: true,
                    childList: true,
                    characterData: true
                });
            }
        };
    }());

    var documentReady = document.readyState !== "loading" ? Promise.resolve() : new Promise(function (resolve) {
        document.addEventListener("DOMContentLoaded", resolve);
    });
    Promise.all([documentReady]).then(window.CMP.image.v3.init);
}(window.document));


