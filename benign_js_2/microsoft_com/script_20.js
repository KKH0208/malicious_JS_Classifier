/* 元のURL: https://microsoft.com */
// 外部JS: https://microsoft.com/echo/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-base.ACSHASH65bde2857c48f1f6b8a6cf1d38ab6bf9.min.js
/*******************************************************************************
 * Copyright 2017 Adobe
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
if (window.Element && !Element.prototype.closest) {
    // eslint valid-jsdoc: "off"
    Element.prototype.closest =
        function(s) {
            "use strict";
            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
            var el      = this;
            var i;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {
                    // continue
                }
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };
}

if (window.Element && !Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            "use strict";
            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
            var i       = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {
                // continue
            }
            return i > -1;
        };
}

if (!Object.assign) {
    Object.assign = function(target, varArgs) { // .length of function is 2
        "use strict";
        if (target === null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource !== null) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

(function(arr) {
    "use strict";
    arr.forEach(function(item) {
        if (Object.prototype.hasOwnProperty.call(item, "remove")) {
            return;
        }
        Object.defineProperty(item, "remove", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

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
(function(document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.image = window.CMP.image || {};
    window.CMP.image.dynamicMedia = (function() {
        var autoSmartCrops = {};
        var SRC_URI_TEMPLATE_WIDTH_VAR = "{.width}";
        var SRC_URI_TEMPLATE_DPR_VAR = "{dpr}";
        var SRC_URI_DPR_OFF = "dpr=off";
        var SRC_URI_DPR_ON = "dpr=on,{dpr}";
        var dpr = window.devicePixelRatio || 1;
        var config = {
            minWidth: 20
        };

        /**
         * get auto smart crops from dm
         * @param {String} src the src uri
         * @returns {{}} the smart crop json object
         */
        var getAutoSmartCrops = function(src) {
            var request = new XMLHttpRequest();
            var url = src.split(SRC_URI_TEMPLATE_WIDTH_VAR)[0] + "?req=set,json";
            request.open("GET", url, false);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // success status
                    var responseText = request.responseText;
                    var rePayload = new RegExp(/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gmi);
                    var rePayloadJSON = new RegExp(/^{[\s\S]*}$/gmi);
                    var resPayload = rePayload.exec(responseText);
                    var payload;
                    if (resPayload) {
                        var payloadStr = resPayload[2];
                        if (rePayloadJSON.test(payloadStr)) {
                            payload = JSON.parse(payloadStr);
                        }

                    }
                    // check "relation" - only in case of smartcrop preset
                    if (payload && payload.set.relation && payload.set.relation.length > 0) {
                        for (var i = 0; i < payload.set.relation.length; i++) {
                            autoSmartCrops[parseInt(payload.set.relation[i].userdata.SmartCropWidth)] =
                                ":" + payload.set.relation[i].userdata.SmartCropDef;
                        }
                    }
                } else {
                    // error status
                }
            };
            request.send();
            return autoSmartCrops;
        };

        /**
         * Build and return the srcset value based on the available auto smart crops
         * @param {String} src the src uri
         * @param {Object} smartCrops the smart crops object
         * @returns {String} the srcset
         */
        var getSrcSet = function(src, smartCrops) {
            var srcset;
            var keys = Object.keys(smartCrops);
            if (keys.length > 0) {
                srcset = [];
                for (var key in autoSmartCrops) {
                    srcset.push(src.replace(SRC_URI_TEMPLATE_WIDTH_VAR, smartCrops[key]) + " " + key + "w");
                }
            }
            return  srcset.join(",");
        };

        /**
         * Get the optimal width based on the available sizes
         * @param {[Number]} sizes the available sizes
         * @param {Number} width the element width
         * @returns {String} the optimal width
         */
        function getOptimalWidth(sizes, width) {
            var len = sizes.length;
            var key = 0;

            while ((key < len - 1) && (sizes[key] < width)) {
                key++;
            }

            return sizes[key] !== undefined ? sizes[key].toString() : width;
        }

        /**
         * Get the width of an element or parent element if the width is smaller than the minimum width
         * @param {HTMLElement} component the image component
         * @param {HTMLElement | Node} parent the parent element
         * @returns {Number} the width of the element
         */
        var getWidth = function(component, parent) {
            var width = component.offsetWidth;
            while (width < config.minWidth && parent && !component._autoWidth) {
                width =  parent.offsetWidth;
                parent = parent.parentNode;
            }
            return width;
        };

        /**
         * Set the src and srcset attribute for a Dynamic Media Image which auto smart crops enabled.
         * @param {HTMLElement} component the image component
         * @param {{}} properties the component properties
         */
        var setDMAttributes = function(component, properties) {
            // for v3 we first have to turn the dpr on
            var src = properties.src.replace(SRC_URI_DPR_OFF, SRC_URI_DPR_ON);
            src = src.replace(SRC_URI_TEMPLATE_DPR_VAR, dpr);
            var smartCrops = {};
            var width;
            if (properties["smartcroprendition"] === "SmartCrop:Auto") {
                smartCrops = getAutoSmartCrops(src);
            }
            var hasWidths = (properties.widths && properties.widths.length > 0) || Object.keys(smartCrops).length > 0;
            if (hasWidths) {
                var image = component.querySelector("img");
                var elemWidth = getWidth(component, component.parentNode);
                if (properties["smartcroprendition"] === "SmartCrop:Auto") {
                    image.setAttribute("srcset", CMP.image.dynamicMedia.getSrcSet(src, smartCrops));
                    width = getOptimalWidth(Object.keys(smartCrops, elemWidth));
                    image.setAttribute("src", CMP.image.dynamicMedia.getSrc(src, smartCrops[width]));
                } else {
                    width = getOptimalWidth(properties.widths, elemWidth);
                    image.setAttribute("src", CMP.image.dynamicMedia.getSrc(src, width));
                }
            }
        };

        /**
         * Get the src attribute based on the optimal width
         * @param {String} src the src uri
         * @param {String} width the element width
         * @returns {String} the final src attribute
         */
        var getSrc = function(src, width) {
            if (src.indexOf(SRC_URI_TEMPLATE_WIDTH_VAR) > -1) {
                src = src.replace(SRC_URI_TEMPLATE_WIDTH_VAR, width);
            }
            return src;
        };


        return {
            getAutoSmartCrops: getAutoSmartCrops,
            getSrcSet: getSrcSet,
            getSrc: getSrc,
            setDMAttributes: setDMAttributes,
            getWidth: getWidth
        };
    }());
    document.dispatchEvent(new CustomEvent("core.wcm.components.commons.site.image.dynamic-media.loaded"));
}(window.document));

/*******************************************************************************
 * Copyright 2016 Adobe
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
(function() {
    "use strict";

    var NS = "cmp";
    var IS = "image";

    var EMPTY_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    var LAZY_THRESHOLD_DEFAULT = 0;
    var SRC_URI_TEMPLATE_WIDTH_VAR = "{.width}";
    var SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY = "width={width}";
    var SRC_URI_TEMPLATE_DPR_VAR = "{dpr}";

    var selectors = {
        self: "[data-" + NS + '-is="' + IS + '"]',
        image: '[data-cmp-hook-image="image"]',
        map: '[data-cmp-hook-image="map"]',
        area: '[data-cmp-hook-image="area"]'
    };

    var lazyLoader = {
        "cssClass": "cmp-image__image--is-loading",
        "style": {
            "height": 0,
            "padding-bottom": "" // will be replaced with % ratio
        }
    };

    var properties = {
        /**
         * An array of alternative image widths (in pixels).
         * Used to replace a {.width} variable in the src property with an optimal width if a URI template is provided.
         *
         * @memberof Image
         * @type {Number[]}
         * @default []
         */
        "widths": {
            "default": [],
            "transform": function(value) {
                var widths = [];
                value.split(",").forEach(function(item) {
                    item = parseFloat(item);
                    if (!isNaN(item)) {
                        widths.push(item);
                    }
                });
                return widths;
            }
        },
        /**
         * Indicates whether the image should be rendered lazily.
         *
         * @memberof Image
         * @type {Boolean}
         * @default false
         */
        "lazy": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        },
        /**
         * Indicates image is DynamicMedia image.
         *
         * @memberof Image
         * @type {Boolean}
         * @default false
         */
        "dmimage": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        },
        /**
         * The lazy threshold.
         * This is the number of pixels, in advance of becoming visible, when an lazy-loading image should begin
         * to load.
         *
         * @memberof Image
         * @type {Number}
         * @default 0
         */
        "lazythreshold": {
            "default": 0,
            "transform": function(value) {
                var val =  parseInt(value);
                if (isNaN(val)) {
                    return LAZY_THRESHOLD_DEFAULT;
                }
                return val;
            }
        },
        /**
         * The image source.
         *
         * Can be a simple image source, or a URI template representation that
         * can be variable expanded - useful for building an image configuration with an alternative width.
         * e.g. '/path/image.coreimg{.width}.jpeg/1506620954214.jpeg'
         *
         * @memberof Image
         * @type {String}
         */
        "src": {
            "transform": function(value) {
                return decodeURIComponent(value);
            }
        }
    };

    var devicePixelRatio = window.devicePixelRatio || 1;

    function Image(config) {
        var that = this;

        var smartCrops = {};

        var useAssetDelivery = false;
        var srcUriTemplateWidthVar = SRC_URI_TEMPLATE_WIDTH_VAR;

        function init(config) {
            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");

            // check if asset delivery is used
            if (config.options.src && config.options.src.indexOf(SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY) >= 0) {
                useAssetDelivery = true;
                srcUriTemplateWidthVar = SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY;
            }

            that._properties = CMP.utils.setupProperties(config.options, properties);
            cacheElements(config.element);
            // check image is DM asset; if true try to make req=set
            if (config.options.src && Object.prototype.hasOwnProperty.call(config.options, "dmimage") && (config.options["smartcroprendition"] === "SmartCrop:Auto")) {
                smartCrops = CMP.image.dynamicMedia.getAutoSmartCrops(config.options.src);
            }

            if (!that._elements.noscript) {
                return;
            }

            that._elements.container = that._elements.link ? that._elements.link : that._elements.self;

            unwrapNoScript();

            if (that._properties.lazy) {
                addLazyLoader();
            }

            if (that._elements.map) {
                that._elements.image.addEventListener("load", onLoad);
            }

            window.addEventListener("resize", onWindowResize);
            ["focus", "click", "load", "transitionend", "animationend", "scroll"].forEach(function(name) {
                document.addEventListener(name, that.update);
            });

            that._elements.image.addEventListener("cmp-image-redraw", that.update);

            that._interSectionObserver = new IntersectionObserver(function(entries, interSectionObserver) {
                entries.forEach(function(entry) {
                    if (entry.intersectionRatio > 0) {
                        that.update();
                    }
                });
            });
            that._interSectionObserver.observe(that._elements.self);

            that.update();
        }

        function loadImage() {
            var hasWidths = (that._properties.widths && that._properties.widths.length > 0) || Object.keys(smartCrops).length > 0;
            var replacement;
            if (Object.keys(smartCrops).length > 0) {
                var optimalWidth = getOptimalWidth(Object.keys(smartCrops), false);
                replacement = smartCrops[optimalWidth];
            } else {
                replacement = hasWidths ? (that._properties.dmimage ? "" : ".") + getOptimalWidth(that._properties.widths, true) : "";
            }
            if (useAssetDelivery) {
                replacement = replacement !== "" ? ("width=" + replacement.substring(1)) : "";
            }
            var url = that._properties.src.replace(srcUriTemplateWidthVar, replacement);
            url = url.replace(SRC_URI_TEMPLATE_DPR_VAR, devicePixelRatio);

            var imgSrcAttribute = that._elements.image.getAttribute("src");

            if (url !== imgSrcAttribute) {
                if (imgSrcAttribute === null || imgSrcAttribute === EMPTY_PIXEL) {
                    that._elements.image.setAttribute("src", url);
                } else {
                    var urlTemplateParts = that._properties.src.split(srcUriTemplateWidthVar);
                    // check if image src was dynamically swapped meanwhile (e.g. by Target)
                    var isImageRefSame = imgSrcAttribute.startsWith(urlTemplateParts[0]);
                    if (isImageRefSame && urlTemplateParts.length > 1) {
                        isImageRefSame = imgSrcAttribute.endsWith(urlTemplateParts[urlTemplateParts.length - 1]);
                    }
                    if (isImageRefSame) {
                        that._elements.image.setAttribute("src", url);
                        if (!hasWidths) {
                            window.removeEventListener("scroll", that.update);
                        }
                    }
                }
            }
            if (that._lazyLoaderShowing) {
                that._elements.image.addEventListener("load", removeLazyLoader);
            }
            that._interSectionObserver.unobserve(that._elements.self);
        }

        function getOptimalWidth(widths, useDevicePixelRatio) {
            var container = that._elements.self;
            var containerWidth = container.clientWidth;
            while (containerWidth === 0 && container.parentNode) {
                container = container.parentNode;
                containerWidth = container.clientWidth;
            }

            var dpr = useDevicePixelRatio ? devicePixelRatio : 1;
            var optimalWidth = containerWidth * dpr;
            var len = widths.length;
            var key = 0;

            while ((key < len - 1) && (widths[key] < optimalWidth)) {
                key++;
            }

            return widths[key].toString();
        }

        function addLazyLoader() {
            var width = that._elements.image.getAttribute("width");
            var height = that._elements.image.getAttribute("height");

            if (width && height) {
                var ratio = (height / width) * 100;
                var styles = lazyLoader.style;

                styles["padding-bottom"] = ratio + "%";

                for (var s in styles) {
                    if (Object.prototype.hasOwnProperty.call(styles, s)) {
                        that._elements.image.style[s] = styles[s];
                    }
                }
            }
            that._elements.image.setAttribute("src", EMPTY_PIXEL);
            that._elements.image.classList.add(lazyLoader.cssClass);
            that._lazyLoaderShowing = true;
        }

        function unwrapNoScript() {
            var markup = decodeNoscript(that._elements.noscript.textContent.trim());
            var parser = new DOMParser();

            // temporary document avoids requesting the image before removing its src
            var temporaryDocument = parser.parseFromString(markup, "text/html");
            var imageElement = temporaryDocument.querySelector(selectors.image);
            imageElement.removeAttribute("src");
            that._elements.container.insertBefore(imageElement, that._elements.noscript);

            var mapElement = temporaryDocument.querySelector(selectors.map);
            if (mapElement) {
                that._elements.container.insertBefore(mapElement, that._elements.noscript);
            }

            that._elements.noscript.parentNode.removeChild(that._elements.noscript);
            if (that._elements.container.matches(selectors.image)) {
                that._elements.image = that._elements.container;
            } else {
                that._elements.image = that._elements.container.querySelector(selectors.image);
            }

            that._elements.map = that._elements.container.querySelector(selectors.map);
            that._elements.areas = that._elements.container.querySelectorAll(selectors.area);
        }

        function removeLazyLoader() {
            that._elements.image.classList.remove(lazyLoader.cssClass);
            for (var property in lazyLoader.style) {
                if (Object.prototype.hasOwnProperty.call(lazyLoader.style, property)) {
                    that._elements.image.style[property] = "";
                }
            }
            that._elements.image.removeEventListener("load", removeLazyLoader);
            that._lazyLoaderShowing = false;
        }

        function isLazyVisible() {
            if (that._elements.container.offsetParent === null) {
                return false;
            }

            var wt = window.pageYOffset;
            var wb = wt + document.documentElement.clientHeight;
            var et = that._elements.container.getBoundingClientRect().top + wt;
            var eb = et + that._elements.container.clientHeight;

            return eb >= wt - that._properties.lazythreshold && et <= wb + that._properties.lazythreshold;
        }

        function resizeAreas() {
            if (that._elements.areas && that._elements.areas.length > 0) {
                for (var i = 0; i < that._elements.areas.length; i++) {
                    var width = that._elements.image.width;
                    var height = that._elements.image.height;

                    if (width && height) {
                        var relcoords = that._elements.areas[i].dataset.cmpRelcoords;
                        if (relcoords) {
                            var relativeCoordinates = relcoords.split(",");
                            var coordinates = new Array(relativeCoordinates.length);

                            for (var j = 0; j < coordinates.length; j++) {
                                if (j % 2 === 0) {
                                    coordinates[j] = parseInt(relativeCoordinates[j] * width);
                                } else {
                                    coordinates[j] = parseInt(relativeCoordinates[j] * height);
                                }
                            }

                            that._elements.areas[i].coords = coordinates;
                        }
                    }
                }
            }
        }

        function cacheElements(wrapper) {
            that._elements = {};
            that._elements.self = wrapper;
            var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");

            for (var i = 0; i < hooks.length; i++) {
                var hook = hooks[i];
                var capitalized = IS;
                capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
                var key = hook.dataset[NS + "Hook" + capitalized];
                that._elements[key] = hook;
            }
        }

        function onWindowResize() {
            that.update();
            resizeAreas();
        }

        function onLoad() {
            resizeAreas();
        }

        that.update = function() {
            if (that._properties.lazy) {
                if (isLazyVisible()) {
                    loadImage();
                }
            } else {
                loadImage();
            }
        };

        if (config && config.element) {
            init(config);
        }
    }

    function onDocumentReady() {
        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Image({ element: elements[i], options: CMP.utils.readData(elements[i], IS) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body             = document.querySelector("body");
        var observer         = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
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

    var documentReady = document.readyState !== "loading" ? Promise.resolve() : new Promise(function(resolve) {
        document.addEventListener("DOMContentLoaded", resolve);
    });

    Promise.all([documentReady]).then(onDocumentReady);
    /*
        on drag & drop of the component into a parsys, noscript's content will be escaped multiple times by the editor which creates
        the DOM for editing; the HTML parser cannot be used here due to the multiple escaping
     */
    function decodeNoscript(text) {
        text = text.replace(/&(amp;)*lt;/g, "<");
        text = text.replace(/&(amp;)*gt;/g, ">");
        return text;
    }

})();


/*******************************************************************************
 * Copyright 2016 Adobe
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
(function() {
    "use strict";

    var NS = "cmp";
    var IS = "formText";
    var IS_DASH = "form-text";
    var SELF_SELECTOR = "[data-" + NS + '-is="' + IS + '"]';

    var selectors = {
        self: SELF_SELECTOR,
        validationMessage: SELF_SELECTOR + " .cmp-form-text__validation-message"
    };

    var displayValidationMessage = false;

    var properties = {
        /**
         * A validation message to display if there is a type mismatch between the user input and expected input.
         *
         * @type {String}
         */
        constraintMessage: "",
        /**
         * A validation message to display if no input is supplied, but input is expected for the field.
         *
         * @type {String}
         */
        requiredMessage: ""
    };

    function readData(element) {
        var data = element.dataset;
        var options = [];
        var capitalized = IS;
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
    }

    function FormText(config) {
        if (config.element) {
            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");
        }

        this._cacheElements(config.element);
        this._setupProperties(config.options);

        this._elements.input.addEventListener("invalid", this._onInvalid.bind(this));
        this._elements.input.addEventListener("input", this._onInput.bind(this));
        if (displayValidationMessage) {
            this._elements.input.checkValidity();
        }
    }

    FormText.prototype._onInvalid = function(event) {
        event.target.setCustomValidity("");
        if (event.target.validity.typeMismatch) {
            if (this._properties.constraintMessage) {
                event.target.setCustomValidity(this._properties.constraintMessage);
            }
        } else if (event.target.validity.valueMissing) {
            if (this._properties.requiredMessage) {
                event.target.setCustomValidity(this._properties.requiredMessage);
            }
        }
        if (displayValidationMessage) {
            var validationMessage = event.target.parentElement.querySelector(".cmp-form-text__validation-message");
            if (validationMessage) {
                validationMessage.innerText = event.target.validationMessage;
            }
        }
    };

    FormText.prototype._onInput = function(event) {
        event.target.setCustomValidity("");
        if (displayValidationMessage) {
            event.target.checkValidity();
        }
    };

    FormText.prototype._cacheElements = function(wrapper) {
        this._elements = {};
        this._elements.self = wrapper;
        var hooks = this._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS_DASH + "]");
        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            var capitalized = IS;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var key = hook.dataset[NS + "Hook" + capitalized];
            this._elements[key] = hook;
        }
    };

    FormText.prototype._setupProperties = function(options) {
        this._properties = {};

        for (var key in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, key)) {
                var property = properties[key];
                if (options && options[key] != null) {
                    if (property && typeof property.transform === "function") {
                        this._properties[key] = property.transform(options[key]);
                    } else {
                        this._properties[key] = options[key];
                    }
                } else {
                    this._properties[key] = properties[key]["default"];
                }
            }
        }
    };

    function onDocumentReady() {
        var validationMessages = document.querySelectorAll(selectors.validationMessage);
        if (validationMessages && validationMessages.length > 0) {
            displayValidationMessage = true;
        }

        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new FormText({ element: elements[i], options: readData(elements[i]) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body = document.querySelector("body");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new FormText({ element: element, options: readData(element) });
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

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

})();


(() => {
  window.addEventListener("load", function() {
  if(window.perfTrackerExtEnabled) {
    if (window.isValidLcp) {
      try {
        const navTiming = getNavTiming();
        var telemetryInitializer = function (envelope) {
          envelope.data.timing = navTiming.timing;
          envelope.data.navigation = navTiming.navigation;
          window.fcpEntry.lcp = window.lcpEntry.renderTime || window.lcpEntry.loadTime;
          envelope.data.paint = window.fcpEntry;
          window.lcpEntry.resourceTimings  = window.resourceTimings.map(entry => {
            return {
              name: entry.name,
              duration: entry.duration,
              startTime: entry.startTime,
              responseStart: entry.responseStart,
              responseEnd: entry.responseEnd
            };
          });
          envelope.data.paint.lcpEntry = window.lcpEntry;
          envelope.data["bStore"] = findCookieValue('bStore');
          envelope.data["vsbStore"] = findCookieValue('busPurPerm');
        };
        window.telemetry.webAnalyticsPlugin.addTelemetryInitializer(telemetryInitializer);
      }
      catch (e){}
    }
  }
  else if (window.isFeatureEnabled("perf-tracker-1ds")) {   
    if (window.performance.toJSON === undefined) {
      console.log("Performance telemetry was not found");
    } else {
        const navTiming = getNavTiming();
        try {
          let lcp;
          let fcp = window.performance.getEntriesByName('first-contentful-paint')[0].toJSON();
            const po = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            lcp = lastEntry.renderTime || lastEntry.loadTime;
            fcp['lcp'] = lcp;
            var telemetryInitializer = function (envelope) {
              envelope.data.timing = navTiming.timing;
              envelope.data.navigation = navTiming.navigation;
              envelope.data.paint = fcp;
              envelope.data["bStore"] = findCookieValue('bStore');
              envelope.data["vsbStore"] = findCookieValue('busPurPerm');
            };
            window.telemetry.webAnalyticsPlugin.addTelemetryInitializer(telemetryInitializer);
           });
          po.observe({type: 'largest-contentful-paint', buffered: true});      
      }
      catch (e){}   
    }
  }
});

const getNavTiming = () => {
  if (window.performance.toJSON ) {
    var json;
    var stringifiedJson;
    json = window.performance.toJSON();
    stringifiedJson = JSON.stringify(json);
    var perf = JSON.parse(stringifiedJson);
    return {
      timing: perf.timing, 
      navigation: perf.navigation
    }
  } else {
    return {
      timing: null,
      navigation: null
    }
  }
}

const findCookieValue = (cname) => {
  if (!document.cookie) return '';
  const cookieString = document.cookie.split('; ').find(c => c.startsWith(cname));
  if (cookieString) return cookieString.split('=')[1];
  else return '';
}

})();
(() => {
  // Shared utility module for telemetry
  const TelemetryUtils = {
    setAttributes(element, attributes) {
      Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
      });
    },

    getSlotNumber(element, siblings) {
      return Array.prototype.indexOf.call(siblings, element) + 1;
    },

    findClosestParent(element, parentTags) {
      return parentTags.map(tag => element.closest(tag)).find(parent => parent);
    },

    formatComponentName(parentComponentTagName) {
      return parentComponentTagName
        .toLowerCase()                                   // Convert to lowercase
        .replace(/^reimagine-/, '')                      // Remove "reimagine-" from the start
        .replace(/-/g, ' ')                              // Replace all hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    },

    getGlobalHeading(headingBlock) {
      if (!headingBlock) return { eyebrowLabel: "", eyebrowHeadingText: "" };

      const eyebrowLabelElement = headingBlock.querySelector("[slot='heading-block__eyebrow-label']");
      const eyebrowHeadingTextElement = headingBlock.querySelector("[slot='heading-block__heading-text']");
      const eyebrowLabel = eyebrowLabelElement?.textContent?.trim() || "";
      const eyebrowHeadingText = eyebrowHeadingTextElement?.textContent?.trim() || "";

      return { eyebrowLabel, eyebrowHeadingText };
    },

    getLocalHeadingText(element, headingTag, headingSlot) {
      const headingBlock = element?.closest(headingTag);
      const headingEl = headingBlock?.querySelector(`[slot='${headingSlot}']`);
      return headingEl?.textContent?.trim() ?? "";
    }
  };

  const ActionTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-button, reimagine-link");

      elements.forEach(element => {
        const heroProductParent = element.closest("reimagine-hero-product");
        const ctaBannerParent = element.closest("reimagine-cta-banner");
        const sectionWithQuoteBannerParent = element.closest(".reimagine-section-with-quote");
        const featuresAndPricing3Col = element.closest("reimagine-features-and-pricng-3-col");
        const cardGridFeaturedParent = element.closest("reimagine-card-feature");
        const cardGridMixedStackParent = element.closest("reimagine-mixed-stack");
        const relatedProductsParent = element.closest("reimagine-related-products");
        const cardInHeroParent = element.closest("reimagine-card-in-hero");
        const accordionParent = element.closest("reimagine-accordion");
        const secondaryNavParent = element.closest("reimagine-secondary-nav");
        const dataWithCaptionParent = element.closest("reimagine-data-with-caption");
        const carouselFeaturedParent = element.closest("reimagine-carousel-featured");
        const statParent = element.closest("reimagine-stat");
        const shareParent = element.closest("reimagine-share"); // New logic for reimagine-share
        const heroCategoryParent = element.closest("reimagine-hero-category");
        const cardPromoParent = element.closest("reimagine-card-promo");
        const cardStatParent = element.closest("reimagine-card-stat");
        const cardCaseStudyParent = element.closest("reimagine-card-case-study");
        const mediaTabsBlade = element.closest(".reimagine-high-impact-media-tabs-blade");
        const storyGridParent = element.closest("reimagine-story-grid");
        const heroFeaturedXLVideoParent = element.closest("reimagine-hero-featured-xl-video");
        const editorialFeaturedCard = element.closest("reimagine-card-editorial");
        const editorialFeaturedBlade = element.closest("reimagine-editorial-featured");
        const bannerNewsParent = element.closest(".reimagine-banner-news");
        const heroImpactParent = element.closest(".reimagine-hero-impact");
        const bannerSearchParent = element.closest(".reimagine-banner-search");
        const utilityLogoFooter = element.closest(".reimagine-utility-logo-footer");
        const footnoteParent = element.closest("reimagine-footnote");
        const bannerFeaturedParent = element.closest("reimagine-banner-featured");
        const linkMedia = element.closest("reimagine-link-media");
        const logoFooter = element.closest("reimagine-logo-footer");

        if (editorialFeaturedCard) {
          this.setTelemetryAttributesEditorialCard(element);
        } else if (heroProductParent) {
          const isCardInHero = !!element.closest("reimagine-card-in-hero");
          this.setTelemetryAttributesHeroProduct(element, heroProductParent, isCardInHero);
        } else if (ctaBannerParent) {
          this.setTelemetryAttributesSimpleBladeLinks(element, ctaBannerParent);
        } else if (featuresAndPricing3Col) {
          this.setTelemetryAttributesForFeaturesAndPricng3Col(element, featuresAndPricing3Col, false);
        } else if (cardGridFeaturedParent) {
          this.setTelemetryAttributesUnderCarouselFeatured(element, cardGridFeaturedParent, true);
        } else if (accordionParent) {
          this.setTelemetryAttributesUnderAccordion(element, accordionParent, true);
        } else if (sectionWithQuoteBannerParent) {
          this.setTelemetryAttributesSectionWithQuoteBanner(element, sectionWithQuoteBannerParent, true);
        } else if (secondaryNavParent) {
          this.setTelemetryAttributesUnderAccordion(element, secondaryNavParent, true);
        } else if (carouselFeaturedParent) {
          this.setTelemetryAttributesUnderCarouselFeatured(element, carouselFeaturedParent, true);
        } else if (mediaTabsBlade) {
          this.setTelemetryAttributesForHighImpactMediaTabs(element, highImpactMediaTabsParent, true);
        }
        else if (cardGridMixedStackParent) {
          this.setTelemetryAttributesForMixedStack(element, cardGridMixedStackParent, false);
        }
        else if (relatedProductsParent) {
          this.setTelemetryAttributesForRelatedProducts(element, relatedProductsParent);
        }
        else if (cardInHeroParent) {
          this.setTelemetryAttributesCardInHero(element, cardInHeroParent);
        }
        else if (statParent) {
          this.setTelemetryAttributesUnderStat(element, statParent);
        } else if (shareParent) {
          this.setTelemetryAttributesForShare(element, shareParent); // Call the new method
        } else if (heroCategoryParent) {
          this.setTelemetryAttributesHeroCategory(element, heroCategoryParent);
        } else if (cardPromoParent) {
          this.setTelemetryAttributesCard(element, cardPromoParent);
        } else if (cardStatParent) {
          this.setTelemetryAttributesCard(element, cardStatParent);
        } else if (cardCaseStudyParent) {
          this.setTelemetryAttributesCard(element, cardCaseStudyParent);
        } else if (storyGridParent) {
          this.setTelemetryAttributesSimpleBladeLinks(element, storyGridParent);
        } else if (heroFeaturedXLVideoParent) {
          this.setTelemetryAttributesSimpleBladeLinks(element, heroFeaturedXLVideoParent);
        } else if (dataWithCaptionParent) {
          this.setTelemetryAttributesSimpleBladeLinks(element, dataWithCaptionParent, true);
        } else if (editorialFeaturedBlade) {
          this.setTelemetryAttributesEditorialFeaturedBlade(element);
        } else if (bannerNewsParent) {
          this.setTelemetryAttributesBannerNews(element, bannerNewsParent);
        } else if (heroImpactParent) {
          this.setTelemetryAttributesSimpleBladeLinks(element, heroImpactParent, false);
        } else if (bannerSearchParent) {
          this.setTelemetryAttributesBannerSearch(element, bannerSearchParent);
        } else if (utilityLogoFooter) {
          this.setTelemetryAttributesUtilityLogoFooter(element, utilityLogoFooter);
        } else if (footnoteParent) {
          this.setTelemetryAttributesFootnote(element);
        } else if (bannerFeaturedParent) {
          this.setTelemetryAttributesBannerFeatured(element, bannerFeaturedParent);
        } else if (linkMedia) {
          this.setTelemetryAttributesUtilityLinkMedia(element, linkMedia);
        } else if (logoFooter) {
          this.setTelemetryAttributesLogoFooter(element, logoFooter);
        } else {
          this.setTelemetryAttributes(element);
        }
      });

      document.addEventListener("click", this.handleClick);
    },

    // Used for standalon reimagine-button and reimagine-link elements
    setTelemetryAttributes(element) {
      let slotNumber = 1;
      const parentComponent = element.parentElement;
      if (parentComponent.tagName.toLowerCase() === "reimagine-button-group") {
        const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link")
        slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      }

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);
      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Component Button" : "Component Link"
      });
    },
    // Used for reimagine-hero-product and reimagine-data-with-icon Blades
    setTelemetryAttributesSectionWithQuoteBanner(element, parentComponent, contentType) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = "Section with Quote Banner";

      const headingBlock = parentComponent.querySelector("reimagine-heading-block");
      const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
      const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
      const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";
      const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";

      const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-view": combinedHeading,
        "data-bi-ct": contentType ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link")
      });
    },

    // Useed for reimagine-hero-product and reimagine-data-with-icon Blades
    setTelemetryAttributesHeroProduct(element, parentComponent, contentType) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      const headingBlock = parentComponent.querySelector("reimagine-heading-block");
      const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
      const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
      const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";
      const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";

      const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-view": combinedHeading,
        "data-bi-ct": contentType ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link")
      });
    },

    // Used for Setting Telemetry Attributes for Simple Blade Links adding component name of Blade.
    // Use this for blades that have a custom tag from WC repo and no additional logic required.
    setTelemetryAttributesSimpleBladeLinks(element, parentComponent, isInCard = false) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      const headingBlock = parentComponent.querySelector("reimagine-heading-block");
      const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
      const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": eyebrowHeadingText,
        "data-bi-ehn": eyebrowHeadingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-view": eyebrowHeadingText,
        "data-bi-ct": isInCard ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link")
      });
    },

    // Used for reimagine-mixed-stack Blade
    setTelemetryAttributesForMixedStack(element, parentComponent, contentType) {
      // Iterating through each reimagine-layout-column within reimagine-mixed-stack
      const layoutColumns = parentComponent.querySelectorAll("reimagine-layout-column");
      let slotIndex = 1;

      layoutColumns.forEach((column, columnIndex) => {
        // For each column, we need to process reimagine-button and reimagine-link elements
        const siblingElements = column.querySelectorAll("reimagine-button, reimagine-link");

        siblingElements.forEach((element, index) => {
          const slotNumber = slotIndex++;

          const isButton = element.tagName.toLowerCase() === "reimagine-button";
          const textSlot = isButton ? "button__text" : "link__text";
          const textElement = element.querySelector(`span[slot='${textSlot}']`);
          const elementText = textElement ? textElement.textContent.trim() : "";
          const enCtaAttribute = element.getAttribute("enCtatext");
          const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";

          // Fetch dynamic heading text inside the column
          const headingTextElement = column.querySelector("[slot='text-block__heading']");
          const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
          const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

          const headingBlock = parentComponent.parentElement.querySelector("reimagine-heading-block");
          const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
          const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
          const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent?.trim() : "";
          const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent?.trim() : "";

          const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

          // Set telemetry for the current element
          TelemetryUtils.setAttributes(element, {
            "data-bi-cn": elementText,
            "data-bi-ecn": enCtaAttributeText,
            "data-bi-hn": headingText,
            "data-bi-ehn": headingText,
            "data-bi-sn": slotNumber,
            "data-bi-compnm": parentComponentTagName,
            "data-bi-ct": contentType ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link"),
            "data-bi-view": combinedHeading
          });
        });
      });
    },

    // Used for reimagine-features-and-pricng-3-col Blade
    setTelemetryAttributesForFeaturesAndPricng3Col(element, parentComponent, contentType) {
      // Iterating through each reimagine-layout-column within reimagine-features-and-pricing-3-col
      const layoutColumns = parentComponent.querySelectorAll("reimagine-layout-column");
      let slotIndex = 1;

      layoutColumns.forEach((column, columnIndex) => {
        // For each column, we need to process reimagine-button and reimagine-link elements
        const siblingElements = column.querySelectorAll("reimagine-button, reimagine-link");

        siblingElements.forEach((element, index) => {
          const slotNumber = slotIndex++;

          const isButton = element.tagName.toLowerCase() === "reimagine-button";
          const textSlot = isButton ? "button__text" : "link__text";
          const textElement = element.querySelector(`span[slot='${textSlot}']`);
          const elementText = textElement ? textElement.textContent.trim() : "";
          const enCtaAttribute = element.getAttribute("enCtatext");
          const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";

          // Fetch dynamic heading text inside the column
          const headingTextElement = column.querySelector("[slot='text-block__heading']");
          const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
          const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

          // heading block is under of UI shell and not under carousel-featured. Parent component is carousel-featured and parentElement is UI shell
          const headingBlock = parentComponent.parentElement.querySelector("reimagine-heading-block");
          const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
          const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
          const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent?.trim() : "";
          const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent?.trim() : "";

          const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

          // Set telemetry for the current element
          TelemetryUtils.setAttributes(element, {
            "data-bi-cn": elementText,
            "data-bi-ecn": enCtaAttributeText,
            "data-bi-hn": headingText,
            "data-bi-ehn": headingText,
            "data-bi-sn": slotNumber,
            "data-bi-compnm": parentComponentTagName,
            "data-bi-ct": contentType ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link"),
            "data-bi-view": combinedHeading
          });
        });
      });
    },

    // Used for reimagine-accordion and reimagine-secondary-nav Components
    setTelemetryAttributesUnderAccordion(element, parentComponent, contentType) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      // button or link is not under accordion-item or secondary-nav-item but under accordion or secondary-nav
      if (!element.closest("reimagine-accordion-item") && !element.closest("reimagine-secondary-nav-item")) {
        TelemetryUtils.setAttributes(element, {
          "data-bi-cn": elementText,
          "data-bi-ecn": enCtaAttributeText,
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-ct": isButton ? "Component Button" : "Component Link"
        });
      } else {
        const headingTextElement = element.closest("reimagine-accordion-item") ?
          element.closest("reimagine-accordion-item").querySelector("[slot='collapse__title']") :
          element.closest("reimagine-secondary-nav").querySelector("[slot='collapse__title']");

        const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
        const headingBlock = parentComponent.parentElement.parentElement.querySelector("reimagine-heading-block");
        const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
        const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
        const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";
        const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";
        const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

        // Set telemetry for the current element
        TelemetryUtils.setAttributes(element, {
          "data-bi-cn": elementText,
          "data-bi-ecn": enCtaAttributeText,
          "data-bi-hn": headingText,  // Set dynamic heading text here
          "data-bi-ehn": headingText, // You can use this if needed
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-view": combinedHeading,
          "data-bi-ct": contentType ? (isButton ? "Subheader Button" : "Subheader Link") : (isButton ? "Component Button" : "Component Link")
        });
      }
    },

    // Used for reimagine-high-impact-media-tabs Blade
    setTelemetryAttributesForHighImpactMediaTabs(element, parentComponent, contentType) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";

      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";

      const headingBlock = parentComponent.querySelector("reimagine-heading-block") ||
        parentComponent.querySelector(".heading-column reimagine-heading-block") ||
        parentComponent.querySelector("reimagine-container reimagine-heading-block");

      let eyebrowLabel = "";
      let eyebrowHeadingText = "";
      let combinedHeading = "";

      if (headingBlock) {
        const { eyebrowLabel: el, eyebrowHeadingText: eht } = TelemetryUtils.getGlobalHeading(headingBlock);
        eyebrowLabel = el;
        eyebrowHeadingText = eht;
        combinedHeading = eyebrowLabel && eyebrowHeadingText
          ? `${eyebrowLabel} | ${eyebrowHeadingText}`
          : eyebrowLabel || eyebrowHeadingText;
      }

      // For identifying the current carousel item and related indicator
      let dataBiAn = "";
      const carouselItem = element.closest("reimagine-carousel-item");
      if (carouselItem) {
        const carousel = carouselItem.closest("reimagine-carousel");
        if (carousel) {
          const allItems = Array.from(carousel.querySelectorAll("reimagine-carousel-item"));
          const index = allItems.indexOf(carouselItem);
          const indicators = carousel.querySelectorAll("reimagine-carousel-indicator");

          if (index !== -1 && indicators[index]) {
            const img = indicators[index].querySelector("img");
            if (img) {
              dataBiAn = img.getAttribute("alt") || "";
            }
          }
        }
      }

      // If in a tab-panel, extract the active tab's label
      const tabPanel = element.closest("reimagine-tab-panel");
      if (tabPanel) {
        const tabs = tabPanel.closest("reimagine-tabs");
        if (tabs) {
          const tabPanels = Array.from(tabs.querySelectorAll("reimagine-tab-panel"));
          const tabIndex = tabPanels.indexOf(tabPanel);
          const tabItems = tabs.querySelectorAll("reimagine-tab");

          if (tabIndex !== -1 && tabItems[tabIndex]) {
            const tabLabel = tabItems[tabIndex].textContent.trim();
            dataBiAn = `Tab_${tabIndex + 1}_${tabLabel}`;
          }
        }
      }

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": eyebrowHeadingText,
        "data-bi-ehn": eyebrowHeadingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": "High Impact Media Tabs",
        "data-bi-view": combinedHeading,
        "data-bi-an": dataBiAn,
        "data-bi-ct": contentType
          ? (isButton ? "Card Button" : "Card Link")
          : (isButton ? "Component Button" : "Component Link")
      });
    },

    // Used for reimagine-carousel-featured Blade
    setTelemetryAttributesUnderCarouselFeatured(element, parentComponent, contentType) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      let combinedHeading = "";
      let dataBihn = "";
      let dataBiehn = "";
      let dataBiAn = "";
      let eyebrowLabel = "";
      let eyebrowHeadingText = "";
      if (parentComponent.tagName.toLowerCase() === "reimagine-carousel-featured") {
        //setting the data-bi-view values
        const headingBlock = parentComponent.parentElement.querySelector("reimagine-heading-block");
        if (headingBlock) {
          ({ eyebrowLabel, eyebrowHeadingText } = TelemetryUtils.getGlobalHeading(headingBlock));
          combinedHeading = eyebrowLabel && eyebrowHeadingText
            ? `${eyebrowLabel} | ${eyebrowHeadingText}`
            : eyebrowLabel || eyebrowHeadingText;
        }

        //setting the data-bi-an values
        const indicators = parentComponent.querySelectorAll("reimagine-carousel-indicator");
        const carouselItems = parentComponent.querySelectorAll("reimagine-carousel-item");
        // Find the index of the current carousel item
        const carouselItem = element.closest("reimagine-carousel-item");
        let itemIndex = Array.from(carouselItems).indexOf(carouselItem);

        let associatedIndicator = null;
        // Match the carousel item index with the corresponding indicator
        if (itemIndex !== -1 && indicators[itemIndex]) {
          associatedIndicator = indicators[itemIndex];

          // Get the media image inside the indicator
          if (associatedIndicator) {
            const mediaImage = associatedIndicator.querySelector("img");
            dataBiAn = mediaImage ? mediaImage.getAttribute("alt") : "";
          }
        }
        dataBihn = eyebrowHeadingText;
        dataBiehn = eyebrowHeadingText;
      } else if (parentComponent.tagName.toLowerCase() === "reimagine-card-feature") {
        let currentTabPanel = element.closest("reimagine-tab-panel");
        if (currentTabPanel) {
          let tabsComponent = currentTabPanel.closest("reimagine-tabs");
          let tabIndex = Array.from(tabsComponent.querySelectorAll("reimagine-tab-panel")).indexOf(currentTabPanel);

          // Fetch corresponding tab label dynamically
          let tabItems = Array.from(tabsComponent.querySelectorAll("reimagine-tab"));
          let tabLabel = tabItems[tabIndex] ? tabItems[tabIndex].textContent.trim() : "";
          dataBiAn = `Tab_${tabIndex + 1}_${tabLabel}`;
        }
        dataBihn = headingText;
        dataBiehn = headingText;

        // Setting data-bi-view value
        let tabsParent = parentComponent.closest("reimagine-tabs")?.parentElement;
        let headingBlock = tabsParent?.querySelector("reimagine-heading-block");

        if (headingBlock) {
          ({ eyebrowLabel, eyebrowHeadingText } = TelemetryUtils.getGlobalHeading(headingBlock));
          combinedHeading = eyebrowLabel && eyebrowHeadingText
            ? `${eyebrowLabel} | ${eyebrowHeadingText}`
            : eyebrowLabel || eyebrowHeadingText;
        }
      }

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": dataBihn,
        "data-bi-ehn": dataBiehn,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-an": dataBiAn,
        "data-bi-view": combinedHeading,
        "data-bi-ct": contentType ? (isButton ? "Card Button" : "Card Link") : (isButton ? "Component Button" : "Component Link")
      });
    },
    setTelemetryAttributesUnderStat(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Stat Popover Button" : "Stat Popover Link"
      });
    },

    setTelemetryAttributesForShare(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Share Button" : "Share Link"
      });
    },


    setTelemetryAttributesForRelatedProducts(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      const isButton = element.tagName.toLowerCase() === "reimagine-button";

      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Component Button" : "Component Link"
      });
    },

    setTelemetryAttributesCardInHero(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      const isButton = element.tagName.toLowerCase() === "reimagine-button";

      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Component Button" : "Component Link"
      });
    },

    setTelemetryAttributesHeroCategory(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);

      const isButton = element.tagName.toLowerCase() === "reimagine-button";
      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      const headingBlock = parentComponent.querySelector("reimagine-heading-block");
      const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
      const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
      const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";
      const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";

      const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": eyebrowHeadingText,
        "data-bi-ehn": eyebrowHeadingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-view": combinedHeading,
        "data-bi-ct": isButton ? "Component Button" : "Component Link"
      });
    },

    setTelemetryAttributesCard(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      const isButton = element.tagName.toLowerCase() === "reimagine-button";

      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
      const headingTextElement = parentComponent.querySelector("[slot='text-block__heading']");
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Component Button" : "Component Link"
      });
    },

    setTelemetryAttributesEditorialCard(element) {
      this.setTelemetryAttributes(element);
      const headingText = TelemetryUtils.getLocalHeadingText(element, 'reimagine-card-editorial', 'text-block__heading');
      TelemetryUtils.setAttributes(element, {
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-compnm": 'reimagine-card-editorial',
      });
    },

    setTelemetryAttributesEditorialFeaturedBlade(element) {
      this.setTelemetryAttributes(element);
      const headingText = TelemetryUtils.getLocalHeadingText(element, 'reimagine-section-title', 'section-title__body-text');
      TelemetryUtils.setAttributes(element, {
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-compnm": 'reimagine-editorial-featured',
      });
    },

    setTelemetryAttributesBannerNews(element, parentComponent) {
      const siblingElements = parentComponent.querySelectorAll("reimagine-button, reimagine-link");
      const slotNumber = TelemetryUtils.getSlotNumber(element, siblingElements);
      const isButton = element.tagName.toLowerCase() === "reimagine-button";

      const textSlot = isButton ? "button__text" : "link__text";
      const textElement = element.querySelector(`span[slot='${textSlot}']`);
      const elementText = textElement ? textElement.textContent.trim() : "";
      const enCtaAttribute = element.getAttribute("enCtatext");
      const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";

      const parentCard = element.closest("reimagine-card-banner");
      const headingTextElement = parentCard ? parentCard.querySelector("[slot='text-block__heading']") : null;
      const headingText = headingTextElement ? headingTextElement.textContent.trim() : "";
      const parentComponentTagName = "Banner News";

      TelemetryUtils.setAttributes(element, {
        "data-bi-cn": elementText,
        "data-bi-ecn": enCtaAttributeText,
        "data-bi-hn": headingText,
        "data-bi-ehn": headingText,
        "data-bi-sn": slotNumber,
        "data-bi-compnm": parentComponentTagName,
        "data-bi-ct": isButton ? "Card Button" : "Card Link"
      });
    },

    setTelemetryAttributesBannerSearch(element, bannerSearchParent) {
      this.setTelemetryAttributes(element);

      const headingTextElement = bannerSearchParent
        ? bannerSearchParent.querySelector("[slot='heading-block__heading-text']")
        : null;

      const headingText = headingTextElement
        ? headingTextElement.textContent.trim()
        : "";

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Banner Search (Blade)",
        "data-bi-view": headingText,
      });
    },
    setTelemetryAttributesUtilityLogoFooter(element) {
      this.setTelemetryAttributes(element);

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Cascade Utility/Logo Footer (Blade)",
      });
    },

    setTelemetryAttributesBannerFeatured(element) {
      this.setTelemetryAttributes(element);

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Cascade Banner / Featured (Blade)",
      });
    },

    setTelemetryAttributesFootnote(element) {
      this.setTelemetryAttributes(element);

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Cascade Footnote (Foundational)",
      });
    },

    setTelemetryAttributesUtilityLinkMedia(element) {
      this.setTelemetryAttributes(element);

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Cascade Utility / Link Media (Blade)",
      });
    },

    setTelemetryAttributesLogoFooter(element) {
      this.setTelemetryAttributes(element);

      TelemetryUtils.setAttributes(element, {
        "data-bi-compnm": "Cascade Utility / Logo Footer (Blade)",
      });
    },

    handleClick(event) {
      const element = event.target.closest("reimagine-button, reimagine-link");
      if (element) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element);
      }
    }
  };

  const AccordionTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-accordion");

      elements.forEach(element => {
        const accordionParent = element.closest("reimagine-high-impact-accordion");
        const productAccordionParent = element.closest("reimagine-high-impact-product-accordion");

        if (accordionParent) {
          this.setTelemetryAttributesForHighImpactAccordion(element, accordionParent);
        } else if (productAccordionParent) {
          this.setTelemetryAttributesForHighImpactAccordion(element, productAccordionParent);
        } else {
          this.setTelemetryAttributesAccordionComponent(element);
        }
      });

      document.addEventListener("click", this.handleClick);
    },

    // Used for reimagine-accordion component
    setTelemetryAttributesAccordionComponent(element) {
      const childElements = element.querySelectorAll("reimagine-accordion-item");
      const parentComponent = element;

      childElements.forEach(element => {
        const slotNumber = TelemetryUtils.getSlotNumber(element, childElements);
        const textElement = element.querySelector("[slot='collapse__title']");
        const elementText = textElement ? textElement.textContent.trim() : "";
        const enCtaAttribute = element.getAttribute("titleEn");
        const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
        const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

        // heading block is under of UI shell
        const headingBlock = parentComponent.parentElement.parentElement.querySelector("reimagine-heading-block");
        const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
        const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
        const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent?.trim() : "";
        const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent?.trim() : "";

        const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;

        // Set telemetry data attributes on the element
        TelemetryUtils.setAttributes(element, {
          "data-bi-cn": elementText,
          "data-bi-ecn": enCtaAttributeText,
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-ct": "Subheader Link",
          "data-bi-view": combinedHeading
        });
      });
    },

    // Used for reimagine-high-impact-accordion blades
    setTelemetryAttributesForHighImpactAccordion(element, parentComponent) {
      const childElements = element.querySelectorAll("reimagine-accordion-item");

      childElements.forEach(element => {
        const slotNumber = TelemetryUtils.getSlotNumber(element, childElements);
        const textElement = element.querySelector("[slot='collapse__title']");
        const elementText = textElement ? textElement.textContent.trim() : "";
        const enCtaAttribute = element.getAttribute("titleEn");
        const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";
        const parentComponentTagName = TelemetryUtils.formatComponentName(parentComponent.tagName);

        // Set telemetry data attributes on the element
        TelemetryUtils.setAttributes(element, {
          "data-bi-cn": elementText,
          "data-bi-ecn": enCtaAttributeText,
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-ct": "Subheader Link",
          "data-bi-an": parentComponentTagName,
          "data-bi-view": parentComponentTagName
        });
      });
    },

    handleClick(event) {
      const element = event.target.closest("reimagine-accordion-item");
      if (element) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element);
      }
    }
  };

  const HeroQuicklinksTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-base-ui-shell.reimagine-hero-quicklinks, .reimagine-hero-quicklinks");

      elements.forEach(component => {
        const buttons = component.querySelectorAll("reimagine-button, reimagine-link");
        buttons.forEach(button => {
          const isButton = button.tagName.toLowerCase() === "reimagine-button";
          const textSlot = isButton ? "button__text" : "link__text";
          const textElement = button.querySelector(`span[slot='${textSlot}']`);
          const elementText = textElement ? textElement.textContent.trim() : "";
          const enCtaAttribute = button.getAttribute("enCtatext");
          const enCtaAttributeText = enCtaAttribute ? enCtaAttribute.trim() : "";

          // Check for hero-with-quicklinks-header to determine component name
          let compName = "reimagine-utility-quicklinks";
          if (component.querySelector(".hero-with-quicklinks-header")) {
            compName = "reimagine-hero-quicklinks";
          }

          // Get heading information
          const headingBlock = component.querySelector("reimagine-heading-block");
          let combinedHeading = "";
          if (headingBlock) {
            const { eyebrowLabel, eyebrowHeadingText } = TelemetryUtils.getGlobalHeading(headingBlock);
            combinedHeading = eyebrowLabel && eyebrowHeadingText
              ? `${eyebrowLabel} | ${eyebrowHeadingText}`
              : eyebrowLabel || eyebrowHeadingText;
          }

          // Set telemetry attributes
          const siblingElements = component.querySelectorAll("reimagine-button, reimagine-link");
          const slotNumber = TelemetryUtils.getSlotNumber(button, siblingElements);

          TelemetryUtils.setAttributes(button, {
            "data-bi-cn": elementText,
            "data-bi-ecn": enCtaAttributeText,
            "data-bi-sn": slotNumber,
            "data-bi-compnm": compName,
            "data-bi-view": combinedHeading,
            "data-bi-ct": isButton ? "Component Button" : "Component Link"
          });
        });

        // Handle secondary nav items within hero quicklinks
        const secondaryNavItems = component.querySelectorAll("reimagine-secondary-nav-item");
        secondaryNavItems.forEach(item => {
          const secondaryNav = item.closest("reimagine-secondary-nav");
          if (secondaryNav) {
            const slotNumber = TelemetryUtils.getSlotNumber(item, secondaryNav.querySelectorAll("reimagine-secondary-nav-item"));
            const label = item.textContent ? item.textContent.trim() : "";
            const tabLabel = label.trim().replace(/\s{2,}/g, "-");

            // Check for hero-with-quicklinks-header to determine component name
            let compName = "reimagine-utility-quicklinks";
            if (component.querySelector(".hero-with-quicklinks-header")) {
              compName = "reimagine-hero-quicklinks";
            }

            TelemetryUtils.setAttributes(item, {
              "data-bi-cn": tabLabel,
              "data-bi-ecn": tabLabel,
              "data-bi-sn": slotNumber,
              "data-bi-compnm": compName,
              "data-bi-ct": "Secondary Nav Item"
            });
          }
        });
      });

      document.addEventListener("click", this.handleClick);
    },

    handleClick(event) {
      const buttonElement = event.target.closest("reimagine-button, reimagine-link");
      if (buttonElement) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(buttonElement);
      }
      const secondaryNavItem = event.target.closest("reimagine-secondary-nav-item");
      if (secondaryNavItem) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(secondaryNavItem);
      }
    }
  };

  const SecondaryNavTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-secondary-nav");

      elements.forEach(nav => {
        const items = nav.querySelectorAll("reimagine-secondary-nav-item");
        const parentComponentTagName = TelemetryUtils.formatComponentName(nav.tagName);
        items.forEach(item => {
          const slotNumber = TelemetryUtils.getSlotNumber(item, nav.querySelectorAll("reimagine-secondary-nav-item"));
          const label = item.textContent ? item.textContent.trim() : "";
          const tabLabel = label.trim().replace(/\s{2,}/g, "-"); // Replace 2+ spaces with a hyphen
          const configuration = item.getAttribute("configuration");
          const enLabelText = item.getAttribute("enLabelText");
          const enDescText = item.getAttribute("enDescText");
          const descSlot = item.getAttribute("descSlot");//to check if description slot is enabled
          let enCtaText = "";
          //To check if the set description is visible to the end user
          if ((configuration === "vertical" || configuration === "horizontal") && descSlot === true) {
            // Concatenate the label and description
            enCtaText = enLabelText + (enDescText ? "-" + enDescText : "");
          }
          else {
            enCtaText = tabLabel;
          }

          TelemetryUtils.setAttributes(item, {
            "data-bi-cn": tabLabel,
            "data-bi-ecn": enCtaText.trim(),
            "data-bi-sn": slotNumber,
            "data-bi-compnm": parentComponentTagName,
            "data-bi-ct": "Secondary Nav Item"
          });
        });
      });

      document.addEventListener("click", this.handleClick);
    },

    handleClick(event) {
      const element = event.target.closest("reimagine-secondary-nav-item");
      if (element) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element);
      }
    }
  };

  const TabTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-tabs");

      elements.forEach(tab => {
        const bannerFeaturedParent = tab.closest("reimagine-banner-featured");

        if (bannerFeaturedParent) {
          const parentComponentTagName = 'Cascade Banner / Featured (Blade)';
          this.setTelemetryAttributes(tab, parentComponentTagName);
        } else {
          const parentComponentTagName = TelemetryUtils.formatComponentName(tab.tagName);
          this.setTelemetryAttributes(tab, parentComponentTagName);
        }
      });

      document.addEventListener("click", this.handleClick);
    },

    /**
     * Set telemetry attributes for the Reimagine Tabs component
     * @param {*} tab - Reimagine Tabs component
     * @param {*} parentComponentTagName - data-bi-compnm for each tab item
     */
    setTelemetryAttributes(tab, parentComponentTagName) {
      const items = tab.querySelectorAll("reimagine-tab");
      items.forEach((item, index) => {
        const slotNumber = TelemetryUtils.getSlotNumber(item, tab.querySelectorAll("reimagine-tab"));
        const headingBlock = item.parentElement.parentElement.parentElement.querySelector("reimagine-heading-block");
        const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
        const eyebrowHeadingTextElement = headingBlock?.querySelector("[slot='heading-block__heading-text']");
        const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";
        const eyebrowHeadingText = eyebrowHeadingTextElement ? eyebrowHeadingTextElement.textContent.trim() : "";
        const combinedHeading = eyebrowLabel && eyebrowHeadingText ? `${eyebrowLabel} | ${eyebrowHeadingText}` : eyebrowLabel || eyebrowHeadingText;
        const label = item.textContent ? item.textContent.trim() : "";
        const tabLabel = label.trim().replace(/\s{2,}/g, "-"); //Replace 2+ spaces with a hyphen
        const areaName = `Tab_${index + 1}_${tabLabel}`;

        let enCtaText = "";
        const listItem = item.querySelector("reimagine-list-item");//Check if Tabs contains list item
        if (listItem) {
          const eyebrowElement = listItem.getAttribute("eyebrowTextEn") || "";
          const titleElement = listItem.getAttribute("titleTextEn") || "";
          enCtaText = eyebrowElement ? eyebrowElement + "-" + titleElement : titleElement;
        }
        else {
          const itemPill = item.querySelector("reimagine-pill");
          enCtaText = itemPill.getAttribute("labelEn") || "";
        }

        TelemetryUtils.setAttributes(item, {
          "data-bi-cn": tabLabel,
          "data-bi-ecn": enCtaText.trim(),
          "data-bi-hn": eyebrowHeadingText,
          "data-bi-ehn": eyebrowHeadingText,
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-ct": "reimagine-pill",
          "data-bi-view": combinedHeading,
          "data-bi-an": areaName,
        });
      });
    },

    handleClick(event) {
      const element = event.target.closest("reimagine-tab");
      if (element) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element);
      }
    }
  };

  const CarouselIndicatorTelemetry = {
    init() {
      const elements = document.querySelectorAll("reimagine-carousel");

      elements.forEach(element => {
        const carouselFeaturedIndicatorParent = element.parentElement;
        if (carouselFeaturedIndicatorParent.tagName.toLowerCase() === "reimagine-carousel-featured") {
          this.setTelemetryAttributesUnderCarouselFeaturedForIndicators(element, carouselFeaturedIndicatorParent);
        }
      });

      document.addEventListener("click", this.handleClick);
    },

    setTelemetryAttributesUnderCarouselFeaturedForIndicators(element, parentComponent) {
      const items = element.querySelectorAll("reimagine-carousel-indicator");
      const parentComponentTagName = TelemetryUtils.formatComponentName(element.tagName);
      items.forEach(item => {
        const slotNumber = TelemetryUtils.getSlotNumber(item, element.querySelectorAll("reimagine-carousel-indicator"));
        const headingBlock = parentComponent.parentElement.querySelector("reimagine-heading-block");
        const eyebrowLabelElement = headingBlock?.querySelector("[slot='heading-block__eyebrow-label']");
        const eyebrowLabel = eyebrowLabelElement ? eyebrowLabelElement.textContent.trim() : "";

        TelemetryUtils.setAttributes(item, {
          "data-bi-hn": eyebrowLabel,
          "data-bi-ehn": eyebrowLabel,
          "data-bi-sn": slotNumber,
          "data-bi-compnm": parentComponentTagName,
          "data-bi-view": eyebrowLabel
        });
      });

    },

    handleClick(event) {
      const element = event.target.closest("reimagine-carousel-indicator");
      if (element) {
        window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("reimagine-accordion, reimagine-high-impact-accordion")) AccordionTelemetry.init();
    if (document.querySelector("reimagine-secondary-nav")) SecondaryNavTelemetry.init();
    if (document.querySelector("reimagine-carousel-indicator")) CarouselIndicatorTelemetry.init();
    if (document.querySelector("reimagine-tabs")) TabTelemetry.init();
    if (document.querySelector("reimagine-button, reimagine-link")) ActionTelemetry.init();
    if (document.querySelector("reimagine-base-ui-shell.reimagine-hero-quicklinks, .reimagine-hero-quicklinks ")) HeroQuicklinksTelemetry.init();
    
    // Use queueMicrotask to ensure the event is dispatched after all synchronous code completes
    queueMicrotask(() => {
      document.dispatchEvent(new CustomEvent('telemetryV1complete'));
    });
  });
})();

$(document).ready(function() {
    $('[clickgroup-telemetry-enabled]').each(function() {
        var anchorCount = $(this).find('a').length;
        if (anchorCount === 1) {
          $(this).css('cursor', 'pointer');
        }
     });

    $('[clickgroup-telemetry-enabled]').click(function(e) {
        if ($(e.target).closest('a').length) {
        // Code to execute when the anchor tag is clicked
            let currentElement = $(e.target).closest('a');
            if ( currentElement && currentElement.html()) {
                currentElement.data( "telemetry", true );
                captureTelemetryPageAction.call(this, currentElement.data());
            }
        }

        if (!$(e.target).closest('a').length) {
        // Code to execute when the div (excluding the anchor tags) is clicked
            let currentElement = retrieveCurrentElement(e);
            if ( currentElement && currentElement.html()) {
//              let linkGroup = currentElement.find("a") || currentElement.find(".link-group");
                let linkGroup = currentElement.find("a");
                var anchorCount = linkGroup.length;
                // Redirect if there is only one anchor tag
                if (anchorCount === 1) {
                  let card = currentElement.find(".card");
                  let linkDataSet = linkGroup[0].dataset;
                  if (card.length>0 && card[0].dataset && card[0].dataset.hasOwnProperty("biCompnm")) {
                      linkDataSet = card[0].dataset;
                  }

                    currentElement.data( "telemetry", true );
                    captureTelemetryPageAction.call(this, linkDataSet);
                    // Get the href of the first anchor tag inside the div
                    var anchorHref = linkGroup[0].getAttribute('href');
                    var target = linkGroup[0].getAttribute('target');
                    if(linkGroup[0].hasAttribute("href") && !linkGroup.hasClass("video-trigger")){
                        // Redirect the page to the same path as the anchor's href if target is not _blank
                        window.open(anchorHref, target);
                    } else {
                        linkGroup[0].click();
                    }
                }
            }
        }

        function captureTelemetryPageAction(linkDataSet) {
            let content = {};
            this.isCapturePageActionLoadedh = function () {
                return window.telemetry && window.telemetry.webAnalyticsPlugin && window.telemetry.webAnalyticsPlugin.capturePageAction;
            };
            if (this.isCapturePageActionLoadedh()) {
                content.cN = linkDataSet.biCn;
                content.cT = linkDataSet.biCt;
                content.ecn = linkDataSet.biEcn;
                content.ehn = linkDataSet.biEhn;
                content.pa = linkDataSet.biPa;
                content.hn = linkDataSet.biHn;
                content.compnm = linkDataSet.biCompnm;
                content.assetid = linkDataSet.biAssetid;
                content.carpos = linkDataSet.biCarpos;
                window.telemetry.webAnalyticsPlugin.capturePageAction(null, {
                    behavior: linkDataSet.biBhvr,
                    targetUri: linkDataSet.targetUri,
                    content: content
                });
            }
        }

        function retrieveCurrentElement(e) {
            if ($(e.target).closest("[clickgroup-telemetry-enabled]").html()) {
                let currentElement = $(e.target).closest("[clickgroup-telemetry-enabled]");
                return currentElement;
            }
        }
    });
});
(function() {
    "use strict";

    $('.tabindex-0').attr("tabindex", "0");
    
})();
(function () {
  "use strict";
  let Util, Modal;

  onMwfInitialized(() => {
	Util = window.mwf.Util;
	Modal = window.mwf.Modal;
	if (!document.querySelector('[data-mount="modal"] universal-media-player'))
		return;

    const modals = document.querySelectorAll('[data-mount="modal"]');
    let instances;
    waitFor(
      1000,
      3000,
      () => (instances = Modal.getInstances())?.length >= modals.length
    )
      .then(() => {
        instances.forEach((modal) => {
          if (modal.el.querySelector("universal-media-player")) {
            modal.el.removeEventListener("keydown", modal.onKeydown);
            // Replace with modified keydown handler
            modal.onKeydown = keydownHandler.bind(modal);
          }
        });
      })
      .catch((error) => {
        console.log("Error overriding Moray on Modal keydown handler:", error);
      });
  });

  function keydownHandler(event) {
    const ump = this.el.querySelector("universal-media-player");
    const lastShadowDom = ump?.shadowRoot
      ?.querySelector("ump-controls")
      ?.shadowRoot?.querySelector("ump-control-bar")?.shadowRoot;
    // Shadow DOM traversal can't guarantee the order or visibility of elements
    // Have to assume "Fullscreen" button is the last tabbable element for now
    this.lastTabbableElement = lastShadowDom?.querySelector(
      '[data-testid="fullscreen-button"]'
    );

    switch (Util.getKeyCode(event)) {
      case Util.keyCodes.ESC: {
        event.preventDefault();
        this.hide();
        break;
      }
      case Util.keyCodes.TAB: {
        if (
          (document.activeElement === this.firstTabbableElement ||
            document.activeElement === this.el) &&
          event.shiftKey
        ) {
          event.preventDefault();
          this.lastTabbableElement.focus();
        }
        if (
          document.activeElement === ump &&
          lastShadowDom.activeElement === this.lastTabbableElement &&
          !event.shiftKey
        ) {
          event.preventDefault();
          this.firstTabbableElement.focus();
        }

        break;
      }
    }
  }

  function onMwfInitialized(cb) {
    if (typeof window !== undefined && window.mwf) cb();
    else document.addEventListener("mwfInitialized", () => cb());
  }

  async function waitFor(interval, total, satisfied) {
    let waited = 0;
    while (!satisfied() && waited < total) {
      await new Promise((resolve) => setTimeout(resolve, interval));
      waited += interval;
    }
  }
})();

!function(){var t={6415:function(){$((function(){"use strict";var t=$("#emailSup-modal");if(0!==t.length){var e=t.find(".countryList"),n=e.attr("data-attribute-lang");if(n){var r=n.split("-"),o=r[r.length-1],i=e.find("option[selected]");o!==i.attr("value")&&0!==e.find($("option[value=".concat(o,"]"))).length&&(i.removeAttr("selected"),e.find($("option[value=".concat(o,"]"))).attr("selected",""))}}}))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(6415)}()}();
var msftEmailModal = (function() {    

    var emailModalSelector = '#emailSignupForm';
    var today = new Date();

    function modalExists() {

        var emailForm = document.querySelector(emailModalSelector);
        return !!emailForm;
    }

    function shouldRender() {

        if (!modalExists()) {
            return false;
        }
    
        var oldDate = localStorage.lastEmailSupPop ? new Date(localStorage.lastEmailSupPop) : today;
        oldDate.setMonth(oldDate.getMonth() + 1);

        return oldDate <= today;
    }

    function render() {

        localStorage.lastEmailSupPop = today;
        setupHandlers();

        var modalElement = document.querySelector('#emailSup-modal');

        var formValidation = new mwf.FormValidation({
            el: document.querySelector(emailModalSelector),
            preventFormSubmission: true,
        });

        formValidation.el.addEventListener('onValid', function (e) {
                
            $('.emailSup-swapContent').toggle();
            $('#emailSup-modal').focus();
            
            var url = $(modalElement).data("emailsupSelectorEndpoint");
            
            var data = {
                email: $('.userEmail').val(),
                country: $('.countryList').val(),
                culture: navigator.language
            }
            $.post(url, data).fail(function(xhr, status, error) {
                localStorage.removeItem('lastEmailSupPop');
                console.log(`Error signing up for email: ${status} ${error}`);
            });
        });

        var options = {};

        if (mwf.version) { // starting with mwf version 1.0, this property indicates its version number
            options.el = modalElement;            
        } else {
            options.modal = modalElement;
        }

        var modal = new mwf.Modal(options);
        modal.show();
    }

    function setupHandlers() {

        $('.countryList').change(function () {

            var country = $('.countryList').val();
            var $consentNotCanada = $('#consentNotCanada');
            var $consentCanada = $('#consentCanada');
    
            if (country == "CA") {
                $consentCanada.show();
                $consentNotCanada.hide();
                $consentCanada.attr("aria-hidden", "false");
                $consentNotCanada.attr("aria-hidden", "true");
            } else {            
                $consentCanada.hide();
                $consentNotCanada.show();
                $consentCanada.attr("aria-hidden", "true");
                $consentNotCanada.attr("aria-hidden", "false");
            }        
        });
    }

    return {
        shouldRender: shouldRender,
        render: render
    }
}());
$(document).ready(function() {
    "use strict";
    var emailContainer = $(".modal-header .emailSup-swapContent");
    if (typeof emailContainer !== 'undefined' && emailContainer) {
        var headerElement = emailContainer.first().find(":header");
        var buttonItem = document.querySelector(".emailSup-swapContent button.form-group");
        if (typeof buttonItem !== 'undefined' && buttonItem) {
            buttonItem.dataset.biHn = headerElement.text().trim();
            buttonItem.dataset.biEhn = headerElement.text().trim();
            buttonItem.dataset.biCompnm = "Modal: Default"
        }
    }
    if($(".countryList").find("option[selected]").attr("value") == "CA"){
		$("#consentNotCanada").css("display","none");
		$("#consentCanada").css("display","block");
	}
	else{
		$("#consentCanada").css("display","none");
		$("#consentNotCanada").css("display","block");
	}
});
var msGeoSelector = (function() {
    "use strict";

    var LOCALE_COOKIE_KEY = "mslocale",
        LOCALE_REGION_INDEX = 1,
        LOCALE_LANGUAGE_INDEX = 0,
        GEOSELECTOR_ID = "geo-selector-modal",
        CLOSED_EVENT = "ms.geoselector.closed";

    var GEOSELECTOR_CSS_SELECTOR = '#' + GEOSELECTOR_ID;
    var currentLocale, preferredLocale, preferredAkamaiRegion, currentNonStandardLocale, preferredNonStandardLocale;

    function notifyModalDone() {
        setTimeout(function() {
            $(document).trigger(CLOSED_EVENT);
        }, 3000);
    }

    function checkGoogleBot(){
        var botAgentNames = ['googlebot']; // Googlebot user agent will also block all Google's other user agents.
        var isGoogleBot = false;
        if (navigator != null) {
            var userAgent = navigator.userAgent;
            if (userAgent && userAgent.includes(botAgentNames[0])){
                isGoogleBot = true
            }
        }
        return isGoogleBot;
    }

    function render() {
        var geoSelectorEndPoint = $(GEOSELECTOR_CSS_SELECTOR).data("geoSelectorEndpoint");
        var geoSelectorCFPath = $(GEOSELECTOR_CSS_SELECTOR).data("geoSelectorCfpath");
        var params;
        if (typeof(preferredLocale) !== "undefined" && preferredLocale) {
            params = {
                preferredRegion: preferredLocale.region,
                preferredLanguage: preferredLocale.language,
                preferredNonStandardLocaleCode: preferredNonStandardLocale ? preferredNonStandardLocale.localeCode : undefined,
                currentRegion: currentLocale.region,
                currentLanguage: currentLocale.language,
                currentNonStandardLocaleCode: currentNonStandardLocale ? currentNonStandardLocale.localeCode : undefined,
                cfPath: geoSelectorCFPath,
                supportNonstandardLocales: window.isFeatureEnabled("support-unsupported-locales")
            }
        } else {
            params = {
                currentRegion: currentLocale.region,
                currentLanguage: currentLocale.language,
                preferredAkamaiRegion: preferredAkamaiRegion,
                currentNonStandardLocaleCode: currentNonStandardLocale ? currentNonStandardLocale.localeCode : undefined,
                cfPath: geoSelectorCFPath,
                supportNonstandardLocales: window.isFeatureEnabled("support-unsupported-locales")
            }
        }

        $.get(geoSelectorEndPoint, params)
            .done(function(data) {
                processDataResponse(data);
            }).fail(function() {
                notifyModalDone();
            });
    }

    function processDataResponse(data) {

        try {
            if (!data || checkGoogleBot()) {
                notifyModalDone();
                return;
            }
            if(typeof(preferredLocale) == "undefined"){
                preferredLocale = {
                    language: data.language,
                    region: data.country,
                    localeCode: data.language + '-' + data.country
                };
            }

            $(".preferred-redirect-confirm")
                .html(data.marketRedirectConfirm)
                .attr("lang", data.language)
                .attr("hreflang", data.language)
                .attr("dir", data.dir);

            $(".preferred-redirect-reject")
                .html(data.marketRedirectReject)
                .attr("lang", data.language)
                .attr("dir", data.dir);

            $(".preferred-redirect-text")
                .html(data.marketRedirectText)
                .attr("lang", data.language)
                .attr("dir", data.dir);

            $(".preferred-redirect-heading")
                .html(data.marketRedirectHeading)
                .attr("lang", data.language)
                .attr("dir", data.dir);

            $(".preferred-redirect-translate")
                .html(data.marketRedirectTranslate)
                .attr("lang", data.language)
                .attr("dir", data.dir);

            $(".preferred-redirect-cancel")
                .attr("aria-label", data.marketRedirectCancel)
                .attr("lang", data.language)
                .attr("dir", data.dir);

            $(".redirect-text").each(function() {
                var redirectText = getCountryLanguageReplacedString($(this).text(), data.primaryCountry);
                $(this).html(redirectText);
            });

            $(".redirect-heading").each(function() {
                var redirectHeadingText = getCountryLanguageReplacedString($(this).text(), data.secondaryCountry);
                $(this).html(redirectHeadingText);
            });

            $(".redirect-confirm").each(function() {
                var redirectText = getCountryLanguageReplacedString($(this).text(), data.primaryCountry);
                $(this).html(redirectText);

                //JSLL data- attributes on Button
                $(this).attr("data-bi-cN", redirectText.trim());
                $(this).attr("data-bi-ecN", redirectText.trim());
				$(this).attr("data-bi-hN", $(".preferred-redirect-heading").text().trim());
				$(this).attr("data-bi-ehN", $(".preferred-redirect-heading").text().trim());
            });

            $(".redirect-reject").each(function() {
                var redirectHeadingText = getCountryLanguageReplacedString($(this).text(), data.secondaryCountry);
                $(this).html(redirectHeadingText);

                //JSLL data- attributes on Button
                $(this).attr("data-bi-cN", redirectHeadingText.trim());
                $(this).attr("data-bi-ecN", redirectHeadingText.trim());
				$(this).attr("data-bi-hN", $(".preferred-redirect-heading").text().trim());
				$(this).attr("data-bi-ehN", $(".preferred-redirect-heading").text().trim());
            });

            if (currentLocale.language === preferredLocale.language) {
                $(".same-language-hide").hide();
            }
            var geoSelector = document.querySelector(GEOSELECTOR_CSS_SELECTOR);

            geoSelector.addEventListener('onHide', function(e) {
                notifyModalDone();
            });
            var options = {};

            if (mwf.version) { // starting with mwf version 1.0, this property indicates its version number
                options.el = geoSelector;
            } else {
                options.modal = geoSelector;
            }

            var modal = new mwf.Modal(options);

            if (checkGeoSelectorReturnData(data)){
                var redirectURL = window.location.href.replace("/" + (currentNonStandardLocale ? currentNonStandardLocale.localeCode : currentLocale.localeCode), "/" + (preferredNonStandardLocale ? preferredNonStandardLocale.localeCode : preferredLocale.localeCode));
                $.ajax({
                    url: redirectURL,
                    type: "HEAD",
                    error: function(){
                        notifyModalDone();
                    },
                    complete: function(jqXHR) {
                        switch (jqXHR.status) {
                            case 200:
                                modal.show();
                                break;
                            default:
                                notifyModalDone();
                        }
                    }
                });
            }
            else{
                notifyModalDone();
            }


            $('.redirect-reject').click({
                currentLocale: currentLocale,
                currentNonStandardLocale: currentNonStandardLocale
            }, setLocaleToCookie);

            setRedirectConfirm();
        } catch (e) {
            notifyModalDone();
        }
    }

    function checkGeoSelectorReturnData(data) {
        return ((data.marketRedirectConfirm != null && data.marketRedirectConfirm != "") &&
               (data.marketRedirectReject  != null && data.marketRedirectReject != "") &&
               (data.marketRedirectText != null && data.marketRedirectText != "") &&
               (data.marketRedirectHeading != null && data.marketRedirectHeading != "") &&
               (data.marketRedirectTranslate != null && data.marketRedirectTranslate != "" ));
    }


    function getCountryLanguageReplacedString(text, countryLanguage) {
        return text.replace("{0}", countryLanguage);
    }

    function getLocaleFromCookie(localeCookie, isNonStandard) {
        localeCookie = localeCookie.replace(/\|/g, ",");
        localeCookie = localeCookie.replace(/\'/g, "\"");
        var obj = $.parseJSON(localeCookie);
        return isNonStandard ? getLocaleFromCode(obj.v) : getLocaleFromCode(obj.u);
    }

    function setRedirectConfirm() {
        var href = window.location.href.replace("/" + (currentNonStandardLocale ? currentNonStandardLocale.localeCode : currentLocale.localeCode), "/" + (preferredNonStandardLocale ? preferredNonStandardLocale.localeCode : preferredLocale.localeCode));
        $(".redirect-confirm").attr("href", href);
    }

    function setLocaleToCookie(event) {
        var allLocaleStr = "'u':'" + event.data.currentLocale.localeCode + "'";
        if(event.data.currentNonStandardLocale) {
            allLocaleStr += "|'v':'" + event.data.currentNonStandardLocale.localeCode + "'";
        }
        var msLocale = "{'r':'1'|" + allLocaleStr + "}";
        var hostname = location.hostname;
        var domain = hostname.substring(hostname.indexOf('.'), hostname.length);
        $.cookie.raw = true;
        $.cookie('mslocale', msLocale, {
            expires: 45,
            domain: domain,
            path: '/'
        });
    }

    function getLocaleFromCode(localeCode) {
        if(localeCode) {
            var localeSplit = localeCode.split("-");
            if (localeSplit.length >= LOCALE_REGION_INDEX) {
                return {
                    language: localeSplit[LOCALE_LANGUAGE_INDEX].toLowerCase(),
                    region: localeSplit[localeSplit.length - 1].toLowerCase(),
                    localeCode: localeCode.toLowerCase()
                };
            }
        }
    }

    function geoSelectorComponentExists($geoSelector) {
        return $geoSelector.length && $geoSelector.length > 0;
    }

    function cookieLocalesAreSame(localeCookie, $geoSelector) {

        var currentLocaleCode =  $geoSelector.data("currentLocaleCode");
        var currentNonStandardLocaleCode = $geoSelector.data("currentNonStandardLocaleCode");
        var preferredLocaleFromCookie = getLocaleFromCookie(localeCookie, false);
        var preferredNonStandardLocaleFromCookie = getLocaleFromCookie(localeCookie, true);
        var currentLocaleFromCode = getLocaleFromCode(currentLocaleCode, false);
        var currentNonStandardLocalefromCode = getLocaleFromCode(currentNonStandardLocaleCode, true);

        if(preferredNonStandardLocaleFromCookie && currentLocaleFromCode && currentLocaleFromCode.region === preferredNonStandardLocaleFromCookie.region) {
            return true;
        } else if (preferredLocaleFromCookie && currentNonStandardLocalefromCode && preferredLocaleFromCookie.region === currentNonStandardLocalefromCode.region) {
            return true;
        } else if (preferredNonStandardLocaleFromCookie && currentNonStandardLocalefromCode && preferredNonStandardLocaleFromCookie.region === currentNonStandardLocalefromCode.region) {
            return true;
        } else if (preferredLocaleFromCookie && currentLocaleFromCode && !preferredNonStandardLocaleFromCookie && !currentNonStandardLocalefromCode && preferredLocaleFromCookie.region === currentLocaleFromCode.region) {
            return true;
        }

        preferredLocale = preferredLocaleFromCookie;
        preferredNonStandardLocale = preferredNonStandardLocaleFromCookie;
        currentLocale = currentLocaleFromCode;
        currentNonStandardLocale = currentNonStandardLocalefromCode;

        return false;
    }

    function akamaiLocalesDiffer($geoSelector) {
        var geoInfo = $('.geo-info').data();
        if(geoInfo && geoInfo.country_code){
            preferredAkamaiRegion = geoInfo.country_code.toLowerCase();
            var currentLocaleCode = $geoSelector.data("currentLocaleCode");
            var currentNonStandardLocaleCode = $geoSelector.data("currentNonStandardLocaleCode");
            currentLocale = getLocaleFromCode(currentLocaleCode);
            currentNonStandardLocale = getLocaleFromCode(currentNonStandardLocaleCode);
            if (currentNonStandardLocale && preferredAkamaiRegion) {
                return Promise.resolve(currentNonStandardLocale.region !== preferredAkamaiRegion);
            } else if (currentLocale && preferredAkamaiRegion) {
                return Promise.resolve(currentLocale.region !== preferredAkamaiRegion);
            }
        }
        return Promise.resolve(true);
    }

    function shouldRender() {
        var $geoSelector = $(GEOSELECTOR_CSS_SELECTOR);

        if (!geoSelectorComponentExists($geoSelector)) {
            return Promise.resolve(false);
        }

        var localeCookie = $.cookie(LOCALE_COOKIE_KEY);
        var localeCookieExists = localeCookie !== undefined;

        if (localeCookieExists) {
            var shouldRenderBasedOffLocaleCookie = !cookieLocalesAreSame(localeCookie, $geoSelector);
            return Promise.resolve(shouldRenderBasedOffLocaleCookie);
        }

        return akamaiLocalesDiffer($geoSelector);
    }

    return {
        shouldRender: shouldRender,
        render: render,
        CLOSED_EVENT: CLOSED_EVENT
    }
}());
$( document ).ready(function() {
	"use strict";
	document.querySelectorAll("div.content-placement-item .link-group > a").forEach(function(item){
        // Find the closest content-placement-item
        var contentPlacementItem = item.closest(".content-placement-item");

        if (typeof contentPlacementItem !== 'undefined' && contentPlacementItem) {
            // assign to data-bi-ehn attribute
            item.dataset.biEhn = contentPlacementItem.querySelector("h1, h2, h3, h4, h5, h6").textContent;

            // assign to data-bi-hn attribute
            item.dataset.biHn = contentPlacementItem.querySelector("h1, h2, h3, h4, h5, h6").textContent;

            // Read the Component name and assign to data-bi-compname attribute
            item.dataset.biCompname = contentPlacementItem.getAttribute("data-content-placement-style");

            // Read the Heading text of that content placement item and assign to data-bi-hn attribute
            var jsllImage = contentPlacementItem.querySelector("img").src;
            if (typeof jsllImage !== 'undefined' && jsllImage) {
                item.dataset.biAssetid = jsllImage;
            }
        }
    });
});
(function() {
    "use strict";

    var $uhfSkipToMain = $("#uhfSkipToMain");
    var $acomHeaderSkipToMain = $(".azure-skip-nav");
    var href = "";
    if($uhfSkipToMain.length) {
        href = $uhfSkipToMain.data("href");
        href = href && href.replace("#", "") || "mainContent";
    } else if($acomHeaderSkipToMain.length) {
        href = $acomHeaderSkipToMain[0].getAttribute("href");
        href = href && href.replace("#", "") || "main";
    }

    $('.microsoft-template-layout-container').attr("id", href);
})();
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
window.lazySizesConfig = window.lazySizesConfig || {};

//page is optimized for fast onload event
lazySizesConfig.loadMode = 1;

//load all elements after the window onload event
lazySizesConfig.preloadAfterLoad = true;
$(()=>{
    document.addEventListener('click', (e)=>{
        //if (e.target.matches('moray-anchor') || e.target.matches('moray-tab')|| e.target.matches('moray-button')||  e.target.matches('cascade-checklist') ) {
        //    window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(e.target);
        //}
    });
  });
/*! For license information please see dynamic-price-bundle.js.LICENSE.txt */
(()=>{var t={892:t=>{var e;self,e=()=>(()=>{"use strict";var t={6489:(t,e)=>{e.Q=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");var a={},h=t.length;if(h<2)return a;var c=e&&e.decode||s,l=0,u=0,p=0;do{if(-1===(u=t.indexOf("=",l)))break;if(-1===(p=t.indexOf(";",l)))p=h;else if(u>p){l=t.lastIndexOf(";",u-1)+1;continue}var d=i(t,l,u),f=n(t,u,d),m=t.slice(d,f);if(!r.call(a,m)){var g=i(t,u+1,p),E=n(t,p,g);34===t.charCodeAt(g)&&34===t.charCodeAt(E-1)&&(g++,E--);var y=t.slice(g,E);a[m]=o(y,c)}l=p+1}while(l<h);return a},Object.prototype.toString;var r=Object.prototype.hasOwnProperty;function i(t,e,r){do{var i=t.charCodeAt(e);if(32!==i&&9!==i)return e}while(++e<r);return r}function n(t,e,r){for(;e>r;){var i=t.charCodeAt(--e);if(32!==i&&9!==i)return e+1}return r}function s(t){return-1!==t.indexOf("%")?decodeURIComponent(t):t}function o(t,e){try{return e(t)}catch(e){return t}}}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{r.r(i),r.d(i,{DynamicPrice:()=>Ye});var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}var n=function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)};function s(t,e,r,i){var n,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o}function o(t,e,r){if(r||2===arguments.length)for(var i,n=0,s=e.length;n<s;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,h=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),l=new WeakMap;class u{constructor(t,e,r){if(this._$cssResult$=!0,r!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&l.set(e,t))}return t}toString(){return this.cssText}}const p=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new u("string"==typeof t?t:t+"",void 0,c))(e)})(t):t,{is:d,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:g,getOwnPropertySymbols:E,getPrototypeOf:y}=Object,b=globalThis,v=b.trustedTypes,_=v?v.emptyScript:"",A=b.reactiveElementPolyfillSupport,T=(t,e)=>t,H={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},P=(t,e)=>!d(t,e),S={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:P};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class B extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&f(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);n.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,e=[...g(t),...E(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(h)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),i=a.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:H).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:H;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??P)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[T("elementProperties")]=new Map,B[T("finalized")]=new Map,A?.({ReactiveElement:B}),(b.reactiveElementVersions??=[]).push("2.0.4");const C=globalThis,w=C.trustedTypes,$=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,N="?"+L,R=`<${N}>`,I=document,M=()=>I.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,k="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,F=/>/g,j=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,X=/"/g,K=/^(?:script|style|textarea|title)$/i,z=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),W=z(1),Y=(z(2),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),q=new WeakMap,Q=I.createTreeWalker(I,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const tt=(t,e)=>{const r=t.length-1,i=[];let n,s=2===e?"<svg>":"",o=G;for(let e=0;e<r;e++){const r=t[e];let a,h,c=-1,l=0;for(;l<r.length&&(o.lastIndex=l,h=o.exec(r),null!==h);)l=o.lastIndex,o===G?"!--"===h[1]?o=x:void 0!==h[1]?o=F:void 0!==h[2]?(K.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=j):void 0!==h[3]&&(o=j):o===j?">"===h[0]?(o=n??G,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?j:'"'===h[3]?X:V):o===X||o===V?o=j:o===x||o===F?o=G:(o=j,n=void 0);const u=o===j&&t[e+1].startsWith("/>")?" ":"";s+=o===G?r+R:c>=0?(i.push(a),r.slice(0,c)+O+r.slice(c)+L+u):r+L+(-2===c?e:u)}return[J(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class et{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[h,c]=tt(t,e);if(this.el=et.createElement(h,r),Q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(O)){const e=c[s++],r=i.getAttribute(t).split(L),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:r,ctor:"."===o[1]?ot:"?"===o[1]?at:"@"===o[1]?ht:st}),i.removeAttribute(t)}else t.startsWith(L)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(K.test(i.tagName)){const t=i.textContent.split(L),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],M()),Q.nextNode(),a.push({type:2,index:++n});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===N)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(L,t+1));)a.push({type:7,index:n}),t+=L.length-1}n++}}static createElement(t,e){const r=I.createElement("template");return r.innerHTML=t,r}}function rt(t,e,r=t,i){if(e===Y)return e;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const s=U(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(e=rt(t,n._$AS(t,e.values),n,i)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??I).importNode(e,!0);Q.currentNode=i;let n=Q.nextNode(),s=0,o=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new nt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ct(n,this,t)),this._$AV.push(e),a=r[++o]}s!==a?.index&&(n=Q.nextNode(),s++)}return Q.currentNode=I,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),U(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Z&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=et.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new it(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new et(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new nt(this.S(M()),this.S(M()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(t,e=this,r,i){const n=this.strings;let s=!1;if(void 0===n)t=rt(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==Y,s&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=rt(this,i[r+o],e,o),a===Y&&(a=this._$AH[o]),s||=!U(a)||a!==this._$AH[o],a===Z?t=Z:t!==Z&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}s&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class at extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class ht extends st{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=rt(this,t,e,0)??Z)===Y)return;const r=this._$AH,i=t===Z&&r!==Z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==Z&&(r===Z||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const lt=C.litHtmlPolyfillSupport;lt?.(et,nt),(C.litHtmlVersions??=[]).push("3.1.2");class ut extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=r?.renderBefore??null;i._$litPart$=n=new nt(e.insertBefore(M(),t),t,void 0,r??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ut._$litElement$=!0,ut.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ut});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:ut}),(globalThis.litElementVersions??=[]).push("4.0.4");const dt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:P},ft=(t=dt,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=r;return function(r){const n=this[i];e.call(this,r),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function mt(t){return(e,r)=>"object"==typeof r?ft(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}const gt=Symbol();class Et{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,r){this.u=0,this.status=0,(this.p=t).addController(this);const i="object"==typeof e?e:{task:e,args:r};this._=i.task,this.v=i.args,this.j=i.argsEqual??yt,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,r;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let n=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){n=!0,r=t}if(this.u===i){if(e===gt)this.status=0;else{if(!1===n){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(r)}catch{}this.status=3,this.o?.(r)}this.l=e,this.h=r}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const yt=(t,e)=>t===e||t.length===e.length&&t.every(((t,r)=>!P(t,e[r]))),bt=((t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new u(r,t,c)})`
  :host {
    text-decoration: inherit;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .ellipsis-loading span {
    animation: 1.4s ease 0s infinite normal both running blink;
  }
  .ellipsis-loading span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .ellipsis-loading span:nth-child(3) {
    animation-delay: 0.4s;
  }
  .ellipsis-loading span:nth-child(4) {
    animation-delay: 0.6s;
  }
  .ellipsis-loading span:nth-child(5) {
    animation-delay: 0.8s;
  }

  .discounted-price {
    font-weight: 600;
  }
  .original-price {
    text-decoration: line-through;
    font-weight: normal;
  }
  .discounted-card-price,
  .undiscounted-original-card-price {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .original-card-price {
    text-decoration: line-through;
    font-weight: normal;
    font-size: 0.75rem;
    opacity: 0.6;
  }
`;var vt,_t,At;function Tt(t){return t.type===_t.literal}function Ht(t){return t.type===_t.argument}function Pt(t){return t.type===_t.number}function St(t){return t.type===_t.date}function Bt(t){return t.type===_t.time}function Ct(t){return t.type===_t.select}function wt(t){return t.type===_t.plural}function $t(t){return t.type===_t.pound}function Ot(t){return t.type===_t.tag}function Lt(t){return!(!t||"object"!=typeof t||t.type!==At.number)}function Nt(t){return!(!t||"object"!=typeof t||t.type!==At.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(vt||(vt={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(_t||(_t={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(At||(At={}));var Rt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,It=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Mt(t){var e={};return t.replace(It,(function(t){var r=t.length;switch(t[0]){case"G":e.era=4===r?"long":5===r?"narrow":"short";break;case"y":e.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=4===r?"long":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][r-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][r-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][r-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][r-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][r-1];break;case"s":e.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),e}var Ut=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,Dt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,kt=/^(@+)?(\+|#+)?[rs]?$/g,Gt=/(\*)(0+)|(#+)(0+)|(0+)/g,xt=/^(0+)$/;function Ft(t){var e={};return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(kt,(function(t,r,i){return"string"!=typeof i?(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length):"+"===i?e.minimumSignificantDigits=r.length:"#"===r[0]?e.maximumSignificantDigits=r.length:(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length+("string"==typeof i?i.length:0)),""})),e}function jt(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Vt(t){var e;if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var r=t.slice(0,2);if("+!"===r?(e.signDisplay="always",t=t.slice(2)):"+?"===r&&(e.signDisplay="exceptZero",t=t.slice(2)),!xt.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function Xt(t){return jt(t)||{}}function Kt(t){for(var e={},r=0,i=t;r<i.length;r++){var s=i[r];switch(s.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=s.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=s.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=n(n(n({},e),{notation:"scientific"}),s.options.reduce((function(t,e){return n(n({},t),Xt(e))}),{}));continue;case"engineering":e=n(n(n({},e),{notation:"engineering"}),s.options.reduce((function(t,e){return n(n({},t),Xt(e))}),{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Gt,(function(t,r,i,n,s,o){if(r)e.minimumIntegerDigits=i.length;else{if(n&&s)throw new Error("We currently do not support maximum integer digits");if(o)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(xt.test(s.stem))e.minimumIntegerDigits=s.stem.length;else if(Dt.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Dt,(function(t,r,i,n,s,o){return"*"===i?e.minimumFractionDigits=r.length:n&&"#"===n[0]?e.maximumFractionDigits=n.length:s&&o?(e.minimumFractionDigits=s.length,e.maximumFractionDigits=s.length+o.length):(e.minimumFractionDigits=r.length,e.maximumFractionDigits=r.length),""}));var o=s.options[0];"w"===o?e=n(n({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=n(n({},e),Ft(o)))}else if(kt.test(s.stem))e=n(n({},e),Ft(s.stem));else{var a=jt(s.stem);a&&(e=n(n({},e),a));var h=Vt(s.stem);h&&(e=n(n({},e),h))}}return e}var zt,Wt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Yt(t){var e=t.hourCycle;if(void 0===e&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r,i=t.language;return"root"!==i&&(r=t.maximize().region),(Wt[r||""]||Wt[i||""]||Wt["".concat(i,"-001")]||Wt["001"])[0]}var Zt=new RegExp("^".concat(Rt.source,"*")),qt=new RegExp("".concat(Rt.source,"*$"));function Qt(t,e){return{start:t,end:e}}var Jt=!!String.prototype.startsWith&&"_a".startsWith("a",1),te=!!String.fromCodePoint,ee=!!Object.fromEntries,re=!!String.prototype.codePointAt,ie=!!String.prototype.trimStart,ne=!!String.prototype.trimEnd,se=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},oe=!0;try{oe="a"===(null===(zt=fe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===zt?void 0:zt[0])}catch(F){oe=!1}var ae,he=Jt?function(t,e,r){return t.startsWith(e,r)}:function(t,e,r){return t.slice(r,r+e.length)===e},ce=te?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r,i="",n=t.length,s=0;n>s;){if((r=t[s++])>1114111)throw RangeError(r+" is not a valid code point");i+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return i},le=ee?Object.fromEntries:function(t){for(var e={},r=0,i=t;r<i.length;r++){var n=i[r],s=n[0],o=n[1];e[s]=o}return e},ue=re?function(t,e){return t.codePointAt(e)}:function(t,e){var r=t.length;if(!(e<0||e>=r)){var i,n=t.charCodeAt(e);return n<55296||n>56319||e+1===r||(i=t.charCodeAt(e+1))<56320||i>57343?n:i-56320+(n-55296<<10)+65536}},pe=ie?function(t){return t.trimStart()}:function(t){return t.replace(Zt,"")},de=ne?function(t){return t.trimEnd()}:function(t){return t.replace(qt,"")};function fe(t,e){return new RegExp(t,e)}if(oe){var me=fe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ae=function(t,e){var r;return me.lastIndex=e,null!==(r=me.exec(t)[1])&&void 0!==r?r:""}}else ae=function(t,e){for(var r=[];;){var i=ue(t,e);if(void 0===i||be(i)||ve(i))break;r.push(i),e+=i>=65536?2:1}return ce.apply(void 0,r)};var ge=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.locale=e.locale,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,r){for(var i=[];!this.isEOF();){var n=this.char();if(123===n){if((s=this.parseArgument(t,r)).err)return s;i.push(s.val)}else{if(125===n&&t>0)break;if(35!==n||"plural"!==e&&"selectordinal"!==e){if(60===n&&!this.ignoreTag&&47===this.peek()){if(r)break;return this.error(vt.UNMATCHED_CLOSING_TAG,Qt(this.clonePosition(),this.clonePosition()))}if(60===n&&!this.ignoreTag&&Ee(this.peek()||0)){if((s=this.parseTag(t,e)).err)return s;i.push(s.val)}else{var s;if((s=this.parseLiteral(t,e)).err)return s;i.push(s.val)}}else{var o=this.clonePosition();this.bump(),i.push({type:_t.pound,location:Qt(o,this.clonePosition())})}}}return{val:i,err:null}},t.prototype.parseTag=function(t,e){var r=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:_t.literal,value:"<".concat(i,"/>"),location:Qt(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var n=this.parseMessage(t+1,e,!0);if(n.err)return n;var s=n.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ee(this.char()))return this.error(vt.INVALID_TAG,Qt(o,this.clonePosition()));var a=this.clonePosition();return i!==this.parseTagName()?this.error(vt.UNMATCHED_CLOSING_TAG,Qt(a,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:_t.tag,value:i,children:s,location:Qt(r,this.clonePosition())},err:null}:this.error(vt.INVALID_TAG,Qt(o,this.clonePosition())))}return this.error(vt.UNCLOSED_TAG,Qt(r,this.clonePosition()))}return this.error(vt.INVALID_TAG,Qt(r,this.clonePosition()))},t.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&ye(this.char());)this.bump();return this.message.slice(t,this.offset())},t.prototype.parseLiteral=function(t,e){for(var r=this.clonePosition(),i="";;){var n=this.tryParseQuote(e);if(n)i+=n;else{var s=this.tryParseUnquoted(t,e);if(s)i+=s;else{var o=this.tryParseLeftAngleBracket();if(!o)break;i+=o}}}var a=Qt(r,this.clonePosition());return{val:{type:_t.literal,value:i,location:a},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(Ee(t=this.peek()||0)||47===t)?null:(this.bump(),"<");var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===t||"selectordinal"===t)break;return null;default:return null}this.bump();var e=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(39===r){if(39!==this.peek()){this.bump();break}e.push(39),this.bump()}else e.push(r);this.bump()}return ce.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null;var r=this.char();return 60===r||123===r||35===r&&("plural"===e||"selectordinal"===e)||125===r&&t>0?null:(this.bump(),ce(r))},t.prototype.parseArgument=function(t,e){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(vt.EXPECT_ARGUMENT_CLOSING_BRACE,Qt(r,this.clonePosition()));if(125===this.char())return this.bump(),this.error(vt.EMPTY_ARGUMENT,Qt(r,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(vt.MALFORMED_ARGUMENT,Qt(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(vt.EXPECT_ARGUMENT_CLOSING_BRACE,Qt(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:_t.argument,value:i,location:Qt(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(vt.EXPECT_ARGUMENT_CLOSING_BRACE,Qt(r,this.clonePosition())):this.parseArgumentOptions(t,e,i,r);default:return this.error(vt.MALFORMED_ARGUMENT,Qt(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),r=ae(this.message,e),i=e+r.length;return this.bumpTo(i),{value:r,location:Qt(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,r,i){var s,o=this.clonePosition(),a=this.parseIdentifierIfPossible().value,h=this.clonePosition();switch(a){case"":return this.error(vt.EXPECT_ARGUMENT_TYPE,Qt(o,h));case"number":case"date":case"time":this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var l=this.clonePosition();if((y=this.parseSimpleArgStyleIfPossible()).err)return y;if(0===(f=de(y.val)).length)return this.error(vt.EXPECT_ARGUMENT_STYLE,Qt(this.clonePosition(),this.clonePosition()));c={style:f,styleLocation:Qt(l,this.clonePosition())}}if((b=this.tryParseArgumentClose(i)).err)return b;var u=Qt(i,this.clonePosition());if(c&&he(null==c?void 0:c.style,"::",0)){var p=pe(c.style.slice(2));if("number"===a)return(y=this.parseNumberSkeletonFromString(p,c.styleLocation)).err?y:{val:{type:_t.number,value:r,location:u,style:y.val},err:null};if(0===p.length)return this.error(vt.EXPECT_DATE_TIME_SKELETON,u);var d=p;this.locale&&(d=function(t,e){for(var r="",i=0;i<t.length;i++){var n=t.charAt(i);if("j"===n){for(var s=0;i+1<t.length&&t.charAt(i+1)===n;)s++,i++;var o=1+(1&s),a=s<2?1:3+(s>>1),h=Yt(e);for("H"!=h&&"k"!=h||(a=0);a-- >0;)r+="a";for(;o-- >0;)r=h+r}else r+="J"===n?"H":n}return r}(p,this.locale));var f={type:At.dateTime,pattern:d,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?Mt(d):{}};return{val:{type:"date"===a?_t.date:_t.time,value:r,location:u,style:f},err:null}}return{val:{type:"number"===a?_t.number:"date"===a?_t.date:_t.time,value:r,location:u,style:null!==(s=null==c?void 0:c.style)&&void 0!==s?s:null},err:null};case"plural":case"selectordinal":case"select":var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(vt.EXPECT_SELECT_ARGUMENT_OPTIONS,Qt(m,n({},m)));this.bumpSpace();var g=this.parseIdentifierIfPossible(),E=0;if("select"!==a&&"offset"===g.value){if(!this.bumpIf(":"))return this.error(vt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Qt(this.clonePosition(),this.clonePosition()));var y;if(this.bumpSpace(),(y=this.tryParseDecimalInteger(vt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,vt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return y;this.bumpSpace(),g=this.parseIdentifierIfPossible(),E=y.val}var b,v=this.tryParsePluralOrSelectOptions(t,a,e,g);if(v.err)return v;if((b=this.tryParseArgumentClose(i)).err)return b;var _=Qt(i,this.clonePosition());return"select"===a?{val:{type:_t.select,value:r,options:le(v.val),location:_},err:null}:{val:{type:_t.plural,value:r,options:le(v.val),offset:E,pluralType:"plural"===a?"cardinal":"ordinal",location:_},err:null};default:return this.error(vt.INVALID_ARGUMENT_TYPE,Qt(o,h))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(vt.EXPECT_ARGUMENT_CLOSING_BRACE,Qt(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(vt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Qt(r,this.clonePosition()));this.bump();break;case 123:t+=1,this.bump();break;case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null};t-=1;break;default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var r=[];try{r=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty");for(var e=t.split(Ut).filter((function(t){return t.length>0})),r=[],i=0,n=e;i<n.length;i++){var s=n[i].split("/");if(0===s.length)throw new Error("Invalid number skeleton");for(var o=s[0],a=s.slice(1),h=0,c=a;h<c.length;h++)if(0===c[h].length)throw new Error("Invalid number skeleton");r.push({stem:o,options:a})}return r}(t)}catch(t){return this.error(vt.INVALID_NUMBER_SKELETON,e)}return{val:{type:At.number,tokens:r,location:e,parsedOptions:this.shouldParseSkeletons?Kt(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,r,i){for(var n,s=!1,o=[],a=new Set,h=i.value,c=i.location;;){if(0===h.length){var l=this.clonePosition();if("select"===e||!this.bumpIf("="))break;var u=this.tryParseDecimalInteger(vt.EXPECT_PLURAL_ARGUMENT_SELECTOR,vt.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;c=Qt(l,this.clonePosition()),h=this.message.slice(l.offset,this.offset())}if(a.has(h))return this.error("select"===e?vt.DUPLICATE_SELECT_ARGUMENT_SELECTOR:vt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);"other"===h&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===e?vt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:vt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Qt(this.clonePosition(),this.clonePosition()));var d=this.parseMessage(t+1,e,r);if(d.err)return d;var f=this.tryParseArgumentClose(p);if(f.err)return f;o.push([h,{value:d.val,location:Qt(p,this.clonePosition())}]),a.add(h),this.bumpSpace(),h=(n=this.parseIdentifierIfPossible()).value,c=n.location}return 0===o.length?this.error("select"===e?vt.EXPECT_SELECT_ARGUMENT_SELECTOR:vt.EXPECT_PLURAL_ARGUMENT_SELECTOR,Qt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(vt.MISSING_OTHER_CLAUSE,Qt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var r=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var n=!1,s=0;!this.isEOF();){var o=this.char();if(!(o>=48&&o<=57))break;n=!0,s=10*s+(o-48),this.bump()}var a=Qt(i,this.clonePosition());return n?se(s*=r)?{val:s,err:null}:this.error(e,a):this.error(t,a)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var e=ue(this.message,t);if(void 0===e)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char();10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(he(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),r=this.message.indexOf(t,e);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var e=this.offset();if(e===t)break;if(e>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&be(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),e=this.offset(),r=this.message.charCodeAt(e+(t>=65536?2:1));return null!=r?r:null},t}();function Ee(t){return t>=97&&t<=122||t>=65&&t<=90}function ye(t){return 45===t||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function be(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function ve(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function _e(t){t.forEach((function(t){if(delete t.location,Ct(t)||wt(t))for(var e in t.options)delete t.options[e].location,_e(t.options[e].value);else Pt(t)&&Lt(t.style)||(St(t)||Bt(t))&&Nt(t.style)?delete t.style.location:Ot(t)&&_e(t.children)}))}function Ae(t,e){void 0===e&&(e={}),e=n({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var r=new ge(t,e).parse();if(r.err){var i=SyntaxError(vt[r.err.kind]);throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==e?void 0:e.captureLocation)||_e(r.val),r.val}function Te(t,e){var r=e&&e.cache?e.cache:Oe,i=e&&e.serializer?e.serializer:Ce;return(e&&e.strategy?e.strategy:Be)(t,{cache:r,serializer:i})}function He(t,e,r,i){var n,s=null==(n=i)||"number"==typeof n||"boolean"==typeof n?i:r(i),o=e.get(s);return void 0===o&&(o=t.call(this,i),e.set(s,o)),o}function Pe(t,e,r){var i=Array.prototype.slice.call(arguments,3),n=r(i),s=e.get(n);return void 0===s&&(s=t.apply(this,i),e.set(n,s)),s}function Se(t,e,r,i,n){return r.bind(e,t,i,n)}function Be(t,e){return Se(t,this,1===t.length?He:Pe,e.cache.create(),e.serializer)}var Ce=function(){return JSON.stringify(arguments)};function we(){this.cache=Object.create(null)}we.prototype.get=function(t){return this.cache[t]},we.prototype.set=function(t,e){this.cache[t]=e};var $e,Oe={create:function(){return new we}},Le={variadic:function(t,e){return Se(t,this,Pe,e.cache.create(),e.serializer)},monadic:function(t,e){return Se(t,this,He,e.cache.create(),e.serializer)}};!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}($e||($e={}));var Ne,Re=function(t){function r(e,r,i){var n=t.call(this,e)||this;return n.code=r,n.originalMessage=i,n}return e(r,t),r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),Ie=function(t){function r(e,r,i,n){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(r,'". Options are "').concat(Object.keys(i).join('", "'),'"'),$e.INVALID_VALUE,n)||this}return e(r,t),r}(Re),Me=function(t){function r(e,r,i){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(r),$e.INVALID_VALUE,i)||this}return e(r,t),r}(Re),Ue=function(t){function r(e,r){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(r,'"'),$e.MISSING_VALUE,r)||this}return e(r,t),r}(Re);function De(t){return"function"==typeof t}function ke(t,e,r,i,n,s,o){if(1===t.length&&Tt(t[0]))return[{type:Ne.literal,value:t[0].value}];for(var a=[],h=0,c=t;h<c.length;h++){var l=c[h];if(Tt(l))a.push({type:Ne.literal,value:l.value});else if($t(l))"number"==typeof s&&a.push({type:Ne.literal,value:r.getNumberFormat(e).format(s)});else{var u=l.value;if(!n||!(u in n))throw new Ue(u,o);var p=n[u];if(Ht(l))p&&"string"!=typeof p&&"number"!=typeof p||(p="string"==typeof p||"number"==typeof p?String(p):""),a.push({type:"string"==typeof p?Ne.literal:Ne.object,value:p});else if(St(l)){var d="string"==typeof l.style?i.date[l.style]:Nt(l.style)?l.style.parsedOptions:void 0;a.push({type:Ne.literal,value:r.getDateTimeFormat(e,d).format(p)})}else if(Bt(l))d="string"==typeof l.style?i.time[l.style]:Nt(l.style)?l.style.parsedOptions:i.time.medium,a.push({type:Ne.literal,value:r.getDateTimeFormat(e,d).format(p)});else if(Pt(l))(d="string"==typeof l.style?i.number[l.style]:Lt(l.style)?l.style.parsedOptions:void 0)&&d.scale&&(p*=d.scale||1),a.push({type:Ne.literal,value:r.getNumberFormat(e,d).format(p)});else{if(Ot(l)){var f=l.children,m=l.value,g=n[m];if(!De(g))throw new Me(m,"function",o);var E=g(ke(f,e,r,i,n,s).map((function(t){return t.value})));Array.isArray(E)||(E=[E]),a.push.apply(a,E.map((function(t){return{type:"string"==typeof t?Ne.literal:Ne.object,value:t}})))}if(Ct(l)){if(!(y=l.options[p]||l.options.other))throw new Ie(l.value,p,Object.keys(l.options),o);a.push.apply(a,ke(y.value,e,r,i,n))}else if(wt(l)){var y;if(!(y=l.options["=".concat(p)])){if(!Intl.PluralRules)throw new Re('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',$e.MISSING_INTL_API,o);var b=r.getPluralRules(e,{type:l.pluralType}).select(p-(l.offset||0));y=l.options[b]||l.options.other}if(!y)throw new Ie(l.value,p,Object.keys(l.options),o);a.push.apply(a,ke(y.value,e,r,i,n,p-(l.offset||0)))}}}}return(v=a).length<2?v:v.reduce((function(t,e){var r=t[t.length-1];return r&&r.type===Ne.literal&&e.type===Ne.literal?r.value+=e.value:t.push(e),t}),[]);var v}function Ge(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,r){t[e]=r}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(Ne||(Ne={}));var xe=function(){function t(e,r,i,s){var a,h,c,l=this;if(void 0===r&&(r=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=l.formatToParts(t);if(1===e.length)return e[0].value;var r=e.reduce((function(t,e){return t.length&&e.type===Ne.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t}),[]);return r.length<=1?r[0]||"":r},this.formatToParts=function(t){return ke(l.ast,l.locales,l.formatters,l.formats,t,void 0,l.message)},this.resolvedOptions=function(){var t;return{locale:(null===(t=l.resolvedLocale)||void 0===t?void 0:t.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=t.resolveLocale(r),"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{},p=(u.formatters,function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]])}return r}(u,["formatters"]));this.ast=t.__parse(e,n(n({},p),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=(h=t.formats,(c=i)?Object.keys(h).reduce((function(t,e){var r,i;return t[e]=(r=h[e],(i=c[e])?n(n(n({},r||{}),i||{}),Object.keys(r).reduce((function(t,e){return t[e]=n(n({},r[e]),i[e]||{}),t}),{})):r),t}),n({},h)):h),this.formatters=s&&s.formatters||(void 0===(a=this.formatterCache)&&(a={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Te((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,o([void 0],e,!1)))}),{cache:Ge(a.number),strategy:Le.variadic}),getDateTimeFormat:Te((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,o([void 0],e,!1)))}),{cache:Ge(a.dateTime),strategy:Le.variadic}),getPluralRules:Te((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,o([void 0],e,!1)))}),{cache:Ge(a.pluralRules),strategy:Le.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(t){if(void 0!==Intl.Locale){var e=Intl.NumberFormat.supportedLocalesOf(t);return e.length>0?new Intl.Locale(e[0]):new Intl.Locale("string"==typeof t?t:t[0])}},t.__parse=Ae,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}();const Fe=xe;class je{constructor(){this.lang=Ve("lang",document?.documentElement?.getAttribute("lang")),this.dir=Ve("dir",document?.documentElement?.getAttribute("dir")),new MutationObserver((()=>{document.dispatchEvent(new CustomEvent("localeChanged",{detail:{lang:this.lang=Ve("lang",document.documentElement.lang),dir:this.dir=Ve("dir",document.documentElement.dir)}}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}}function Ve(t,e){return"lang"===t?e&&e.includes("-")&&e.length>=5?e.toLowerCase():"en-us":"dir"===t?e&&e.match(/^(ltr|rtl)$/i)?e.toLowerCase():"ltr":(console.warn("Invalid validation type!"),"")}const Xe=function(){let t;return function(){return t||(t=new je),t}}(),Ke=t=>{class e extends t{constructor(){super(...arguments),this.i18nManager=Xe(),this.locChangeHandler=t=>{this.lang=t.detail.lang,this.dir=t.detail.dir,this.requestUpdate()},this.errorHandler=(t,e)=>{if(console.warn(`I18nMixin ${t}: ${e}`),"undefined"!=typeof process&&process?.env?.STORYBOOK&&"ERROR"===t)throw new Error(e)}}connectedCallback(){super.connectedCallback(),this.lang=this.i18nManager?.lang||"en-us",this.dir=this.i18nManager?.dir||"ltr",document.addEventListener("localeChanged",this.locChangeHandler),Object.keys(this.translations||{})?.forEach((t=>{const{dict:e}=this.constructor;e&&Object.keys(e).length||this.errorHandler("ERROR","Found translations but dictionary is not defined"),e&&!(t in e)&&this.errorHandler("ERROR",`Translation passed in for wrong or obsolete key: '${t}'`)}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("localeChanged",this.locChangeHandler)}msg(t,e){if(!t)return"";const r=this.constructor.dict?.[t]||"";if(!this.lang)return r;const{dict:i}=this.constructor;i&&!(t in i)&&this.errorHandler("ERROR",`Invalid key: '${t}'`);let n=this.translations?.[t];n||(this.translations&&this.errorHandler("WARNING",`Missing translation for key: '${t}'`),n=r);let s=n;try{s=this.format(n,e)}catch(t){this.errorHandler("ERROR",`Error interpolating '${n}'\n${t}`)}return s??n??""}format(t,e){return new Fe(t,this.lang).format(e)}}return e.dict={},s([mt({type:Object,reflect:!1})],e.prototype,"translations",void 0),e};Ke(ut);var ze,We=r(6489);!function(t){t.price="price",t.labeledPrice="labeled-price",t.savings="savings",t.cardPrice="card-price"}(ze||(ze={}));let Ye=class extends(Ke(ut)){constructor(){super(...arguments),this.pid="",this.sku="",this.isM365=!1,this.locale="",this.env="prod",this.displayType=ze.price,this.errorText="price unavailable",this.useAuth=!1,this.productTask=new Et(this,{task:async([t,e,r,i,n],{signal:s})=>{if(!t)throw new Error("Product id is required");r=r?.toLowerCase()||this.lang||"en-us",i=i||(location.hostname.includes("www.")||location.hostname.includes("adobeprod")?"prod":"ppe");const o=n?this.getHeaders():{},a=`https://www${"prod"===i?"":"ppe"}.microsoft.com/msstoreapi${"prod"===i?"prod":"ppe"}/api/buyBox?locale=${r}&productId=${t}`+(this.sku?"/"+this.sku:"")+"&environment="+("prod"===i?"prod":"ppe")+(e?"&isM365Page=true":""),h=await fetch(a,{signal:s,headers:o});if(console.debug("request sent",a,o),!h)throw new Error(`${t} - dynamicPrice fetch no response`);if(!h.ok){let e;try{e=await(h?.json())}catch(t){e=null}throw new Error(`DynamicPrice fetch bad response. pid-${t} Status: ${e?.statusCode||h?.status}\n Message: ${e?.message||h?.statusText}\n Failure: ${e?.failure}`)}const c=h.json();if(!c)throw new Error(`${t} - DynamicPrice fetch: data is empty`);return c},args:()=>[this.pid,this.isM365,this.locale,this.env,this.useAuth,this.displayType]}),this.extract=t=>{switch(this.displayType){case ze.price:case ze.labeledPrice:case ze.cardPrice:return this.extractPrice(t);case ze.savings:return this.extractSavings(t);default:throw new Error(`Display type ${this.displayType} not supported`)}},this.extractSavings=t=>{const e=this.sku?(t.skuInfo?.[this.sku.toUpperCase()]||t.skuInfo?.[this.sku.toLowerCase()])?.badge:t.productInfo?.dynamicBadge??this.findPrice(t)?.badge;if(!e)throw new Error("${pid} - savings not found");return e.badgeFormat?this.format(e.badgeFormat,{0:e.savingsPrice})||this.errorText:W` ${e.savingsType}
        ${e.savingsPrice||this.errorText}`},this.extractPrice=t=>{const e=this.sku?(t.skuInfo?.[this.sku.toUpperCase()]||t.skuInfo?.[this.sku.toLowerCase()])?.price:this.findPrice(t)?.price;if(!e)throw new Error(`${t.productId} - price not found`);const r=e.recurrencePrice||e.currentPrice;if(this.displayType===ze.labeledPrice){const t=e.originalPrice||e.dynamicOriginalPrice,i=t?W` <span part="original-price" class="original-price"
              >${t}</span
            >
            <span part="discounted-price" class="discounted-price"
              >${r}</span
            >`:r;return e.priceFormat?this.format(e.priceFormat,{0:i})||this.errorText:W` ${e.fromText} ${i}`||this.errorText}if(this.displayType===ze.cardPrice){const t=e.originalPrice||e.dynamicOriginalPrice,i=t?W` <span part="discounted-card-price" class="discounted-card-price"
              >${r}</span
            >
            <span part="original-card-price" class="original-card-price"
              >${t}</span
            >`:W` <span
            part="undiscounted-original-card-price"
            class="undiscounted-original-card-price"
            >${r}</span
          >`;return e.priceFormat?this.format(e.priceFormat,{0:i})||this.errorText:W` ${e.dynamicFromText} ${i}`||this.errorText}return r||this.errorText},this.findPrice=t=>"Bundles"===t.pageData?.productType?t.productInfo:this.displayType===ze.savings?Object.values(t.skuInfo||{})[0]:Object.values(t.skuInfo||{}).filter((t=>t?.price?.currentValue)).reduce(((t,e)=>t&&t.price.currentValue<e.price.currentValue?t:e),void 0),this.getHeaders=()=>{const t={},e=We.Q(document.cookie??""),r=e?.["Cascade.OpenIdConnect"];r&&(t["Cascade.OpenIdConnect"]=r);const i=window.msauth?.AuthTicket;return i&&(t.CompactTicket=i),t}}updated(){if(this.textContent!==this.shadowRoot?.textContent){const t=this.textContent=this.shadowRoot?.textContent||"";this.dispatchEvent(new CustomEvent("DYNAMIC-PRICE-UPDATED",{bubbles:!0,composed:!0,detail:{priceText:t}}))}}render(){return this.productTask.render({pending:()=>W`<span class="ellipsis-loading"
          >$<span> • </span><span> • </span><span> • </span><span> • </span
          ><span> • </span><span> • </span></span
        >`,complete:t=>{let e;try{e=this.extract(t)}catch(t){console.error(t),e=`${this.errorText}`}return W`${e}`},error:t=>(console.log(t),W`${this.errorText}`)})}firstUpdated(){this.requestUpdate()}};var Ze;Ye.styles=bt,s([mt({attribute:"pid"})],Ye.prototype,"pid",void 0),s([mt({attribute:"sku"})],Ye.prototype,"sku",void 0),s([mt({attribute:"ism365",type:Boolean})],Ye.prototype,"isM365",void 0),s([mt({attribute:"locale"})],Ye.prototype,"locale",void 0),s([mt({attribute:"env"})],Ye.prototype,"env",void 0),s([mt({attribute:"display-type"})],Ye.prototype,"displayType",void 0),s([mt({attribute:"error-text"})],Ye.prototype,"errorText",void 0),s([mt({attribute:"use-auth",type:Boolean})],Ye.prototype,"useAuth",void 0),Ye=s([(Ze="dynamic-price",(t,e)=>{customElements.get(Ze)?console.warn(`${Ze} is already defined.`):void 0!==e?e.addInitializer((()=>{customElements.define(Ze,t)})):customElements.define(Ze,t)})],Ye)})(),i})(),t.exports=e()}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(892)})()})();
/*! For license information please see dynamic-user-info-bundle.js.LICENSE.txt */
(()=>{var t={407:t=>{var e;self,e=()=>(()=>{"use strict";var t={d:(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{DynamicUserInfo:()=>Ke});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var n=function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)};function s(t,e,r,i){var n,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o}function o(t,e,r){if(r||2===arguments.length)for(var i,n=0,s=e.length;n<s;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const h=globalThis,a=h.ShadowRoot&&(void 0===h.ShadyCSS||h.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(t,e,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(e,t))}return t}toString(){return this.cssText}}const p=(t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),i=h.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}},f=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new u("string"==typeof t?t:t+"",void 0,l))(e)})(t):t,{is:d,defineProperty:m,getOwnPropertyDescriptor:E,getOwnPropertyNames:g,getOwnPropertySymbols:y,getPrototypeOf:b}=Object,_=globalThis,v=_.trustedTypes,A=v?v.emptyScript:"",H=_.reactiveElementPolyfillSupport,T=(t,e)=>t,S={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},B=(t,e)=>!d(t,e),P={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&m(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=E(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);n.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??P}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,e=[...g(t),...y(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:S).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:S;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??B)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[T("elementProperties")]=new Map,C[T("finalized")]=new Map,H?.({ReactiveElement:C}),(_.reactiveElementVersions??=[]).push("2.0.4");const N=globalThis,L=N.trustedTypes,R=L?L.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,$="?"+I,w=`<${$}>`,M=document,U=()=>M.createComment(""),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,k="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,V=/>/g,j=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,X=/"/g,z=/^(?:script|style|textarea|title)$/i,W=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=W(1),Z=(W(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),J=new WeakMap,Q=M.createTreeWalker(M,129);function tt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(e):e}const et=(t,e)=>{const r=t.length-1,i=[];let n,s=2===e?"<svg>":"",o=F;for(let e=0;e<r;e++){const r=t[e];let h,a,l=-1,c=0;for(;c<r.length&&(o.lastIndex=c,a=o.exec(r),null!==a);)c=o.lastIndex,o===F?"!--"===a[1]?o=x:void 0!==a[1]?o=V:void 0!==a[2]?(z.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=j):void 0!==a[3]&&(o=j):o===j?">"===a[0]?(o=n??F,l=-1):void 0===a[1]?l=-2:(l=o.lastIndex-a[2].length,h=a[1],o=void 0===a[3]?j:'"'===a[3]?X:K):o===X||o===K?o=j:o===x||o===V?o=F:(o=j,n=void 0);const u=o===j&&t[e+1].startsWith("/>")?" ":"";s+=o===F?r+w:l>=0?(i.push(h),r.slice(0,l)+O+r.slice(l)+I+u):r+I+(-2===l?e:u)}return[tt(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class rt{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const o=t.length-1,h=this.parts,[a,l]=et(t,e);if(this.el=rt.createElement(a,r),Q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&h.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(O)){const e=l[s++],r=i.getAttribute(t).split(I),o=/([.?@])?(.*)/.exec(e);h.push({type:1,index:n,name:o[2],strings:r,ctor:"."===o[1]?ht:"?"===o[1]?at:"@"===o[1]?lt:ot}),i.removeAttribute(t)}else t.startsWith(I)&&(h.push({type:6,index:n}),i.removeAttribute(t));if(z.test(i.tagName)){const t=i.textContent.split(I),e=t.length-1;if(e>0){i.textContent=L?L.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],U()),Q.nextNode(),h.push({type:2,index:++n});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===$)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(I,t+1));)h.push({type:7,index:n}),t+=I.length-1}n++}}static createElement(t,e){const r=M.createElement("template");return r.innerHTML=t,r}}function it(t,e,r=t,i){if(e===Z)return e;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const s=G(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(e=it(t,n._$AS(t,e.values),n,i)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);Q.currentNode=i;let n=Q.nextNode(),s=0,o=0,h=r[0];for(;void 0!==h;){if(s===h.index){let e;2===h.type?e=new st(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new ct(n,this,t)),this._$AV.push(e),h=r[++o]}s!==h?.index&&(n=Q.nextNode(),s++)}return Q.currentNode=M,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),G(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==q&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=rt.createElement(tt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new nt(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new rt(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new st(this.S(U()),this.S(U()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,i){const n=this.strings;let s=!1;if(void 0===n)t=it(this,t,e,0),s=!G(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=it(this,i[r+o],e,o),h===Z&&(h=this._$AH[o]),s||=!G(h)||h!==this._$AH[o],h===q?t=q:t!==q&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}s&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ht extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class at extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class lt extends ot{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=it(this,t,e,0)??q)===Z)return;const r=this._$AH,i=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==q&&(r===q||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const ut=N.litHtmlPolyfillSupport;ut?.(rt,st),(N.litHtmlVersions??=[]).push("3.1.2");class pt extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=r?.renderBefore??null;i._$litPart$=n=new st(e.insertBefore(U(),t),t,void 0,r??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}pt._$litElement$=!0,pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pt});const ft=globalThis.litElementPolyfillSupport;ft?.({LitElement:pt}),(globalThis.litElementVersions??=[]).push("4.0.4");const dt={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:B},mt=(t=dt,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=r;return function(r){const n=this[i];e.call(this,r),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function Et(t){return(e,r)=>"object"==typeof r?mt(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}var gt,yt,bt;function _t(t){return t.type===yt.literal}function vt(t){return t.type===yt.argument}function At(t){return t.type===yt.number}function Ht(t){return t.type===yt.date}function Tt(t){return t.type===yt.time}function St(t){return t.type===yt.select}function Bt(t){return t.type===yt.plural}function Pt(t){return t.type===yt.pound}function Ct(t){return t.type===yt.tag}function Nt(t){return!(!t||"object"!=typeof t||t.type!==bt.number)}function Lt(t){return!(!t||"object"!=typeof t||t.type!==bt.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(gt||(gt={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(yt||(yt={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(bt||(bt={}));var Rt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ot=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function It(t){var e={};return t.replace(Ot,(function(t){var r=t.length;switch(t[0]){case"G":e.era=4===r?"long":5===r?"narrow":"short";break;case"y":e.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=4===r?"long":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][r-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][r-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][r-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][r-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][r-1];break;case"s":e.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),e}var $t=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,wt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Mt=/^(@+)?(\+|#+)?[rs]?$/g,Ut=/(\*)(0+)|(#+)(0+)|(0+)/g,Gt=/^(0+)$/;function Dt(t){var e={};return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(Mt,(function(t,r,i){return"string"!=typeof i?(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length):"+"===i?e.minimumSignificantDigits=r.length:"#"===r[0]?e.maximumSignificantDigits=r.length:(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length+("string"==typeof i?i.length:0)),""})),e}function kt(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ft(t){var e;if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var r=t.slice(0,2);if("+!"===r?(e.signDisplay="always",t=t.slice(2)):"+?"===r&&(e.signDisplay="exceptZero",t=t.slice(2)),!Gt.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function xt(t){return kt(t)||{}}function Vt(t){for(var e={},r=0,i=t;r<i.length;r++){var s=i[r];switch(s.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=s.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=s.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=n(n(n({},e),{notation:"scientific"}),s.options.reduce((function(t,e){return n(n({},t),xt(e))}),{}));continue;case"engineering":e=n(n(n({},e),{notation:"engineering"}),s.options.reduce((function(t,e){return n(n({},t),xt(e))}),{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Ut,(function(t,r,i,n,s,o){if(r)e.minimumIntegerDigits=i.length;else{if(n&&s)throw new Error("We currently do not support maximum integer digits");if(o)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(Gt.test(s.stem))e.minimumIntegerDigits=s.stem.length;else if(wt.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(wt,(function(t,r,i,n,s,o){return"*"===i?e.minimumFractionDigits=r.length:n&&"#"===n[0]?e.maximumFractionDigits=n.length:s&&o?(e.minimumFractionDigits=s.length,e.maximumFractionDigits=s.length+o.length):(e.minimumFractionDigits=r.length,e.maximumFractionDigits=r.length),""}));var o=s.options[0];"w"===o?e=n(n({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=n(n({},e),Dt(o)))}else if(Mt.test(s.stem))e=n(n({},e),Dt(s.stem));else{var h=kt(s.stem);h&&(e=n(n({},e),h));var a=Ft(s.stem);a&&(e=n(n({},e),a))}}return e}var jt,Kt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Xt(t){var e=t.hourCycle;if(void 0===e&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r,i=t.language;return"root"!==i&&(r=t.maximize().region),(Kt[r||""]||Kt[i||""]||Kt["".concat(i,"-001")]||Kt["001"])[0]}var zt=new RegExp("^".concat(Rt.source,"*")),Wt=new RegExp("".concat(Rt.source,"*$"));function Yt(t,e){return{start:t,end:e}}var Zt=!!String.prototype.startsWith&&"_a".startsWith("a",1),qt=!!String.fromCodePoint,Jt=!!Object.fromEntries,Qt=!!String.prototype.codePointAt,te=!!String.prototype.trimStart,ee=!!String.prototype.trimEnd,re=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},ie=!0;try{ie="a"===(null===(jt=ue("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===jt?void 0:jt[0])}catch(V){ie=!1}var ne,se=Zt?function(t,e,r){return t.startsWith(e,r)}:function(t,e,r){return t.slice(r,r+e.length)===e},oe=qt?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r,i="",n=t.length,s=0;n>s;){if((r=t[s++])>1114111)throw RangeError(r+" is not a valid code point");i+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return i},he=Jt?Object.fromEntries:function(t){for(var e={},r=0,i=t;r<i.length;r++){var n=i[r],s=n[0],o=n[1];e[s]=o}return e},ae=Qt?function(t,e){return t.codePointAt(e)}:function(t,e){var r=t.length;if(!(e<0||e>=r)){var i,n=t.charCodeAt(e);return n<55296||n>56319||e+1===r||(i=t.charCodeAt(e+1))<56320||i>57343?n:i-56320+(n-55296<<10)+65536}},le=te?function(t){return t.trimStart()}:function(t){return t.replace(zt,"")},ce=ee?function(t){return t.trimEnd()}:function(t){return t.replace(Wt,"")};function ue(t,e){return new RegExp(t,e)}if(ie){var pe=ue("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ne=function(t,e){var r;return pe.lastIndex=e,null!==(r=pe.exec(t)[1])&&void 0!==r?r:""}}else ne=function(t,e){for(var r=[];;){var i=ae(t,e);if(void 0===i||Ee(i)||ge(i))break;r.push(i),e+=i>=65536?2:1}return oe.apply(void 0,r)};var fe=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.locale=e.locale,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,r){for(var i=[];!this.isEOF();){var n=this.char();if(123===n){if((s=this.parseArgument(t,r)).err)return s;i.push(s.val)}else{if(125===n&&t>0)break;if(35!==n||"plural"!==e&&"selectordinal"!==e){if(60===n&&!this.ignoreTag&&47===this.peek()){if(r)break;return this.error(gt.UNMATCHED_CLOSING_TAG,Yt(this.clonePosition(),this.clonePosition()))}if(60===n&&!this.ignoreTag&&de(this.peek()||0)){if((s=this.parseTag(t,e)).err)return s;i.push(s.val)}else{var s;if((s=this.parseLiteral(t,e)).err)return s;i.push(s.val)}}else{var o=this.clonePosition();this.bump(),i.push({type:yt.pound,location:Yt(o,this.clonePosition())})}}}return{val:i,err:null}},t.prototype.parseTag=function(t,e){var r=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:yt.literal,value:"<".concat(i,"/>"),location:Yt(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var n=this.parseMessage(t+1,e,!0);if(n.err)return n;var s=n.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!de(this.char()))return this.error(gt.INVALID_TAG,Yt(o,this.clonePosition()));var h=this.clonePosition();return i!==this.parseTagName()?this.error(gt.UNMATCHED_CLOSING_TAG,Yt(h,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:yt.tag,value:i,children:s,location:Yt(r,this.clonePosition())},err:null}:this.error(gt.INVALID_TAG,Yt(o,this.clonePosition())))}return this.error(gt.UNCLOSED_TAG,Yt(r,this.clonePosition()))}return this.error(gt.INVALID_TAG,Yt(r,this.clonePosition()))},t.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&me(this.char());)this.bump();return this.message.slice(t,this.offset())},t.prototype.parseLiteral=function(t,e){for(var r=this.clonePosition(),i="";;){var n=this.tryParseQuote(e);if(n)i+=n;else{var s=this.tryParseUnquoted(t,e);if(s)i+=s;else{var o=this.tryParseLeftAngleBracket();if(!o)break;i+=o}}}var h=Yt(r,this.clonePosition());return{val:{type:yt.literal,value:i,location:h},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(de(t=this.peek()||0)||47===t)?null:(this.bump(),"<");var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===t||"selectordinal"===t)break;return null;default:return null}this.bump();var e=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(39===r){if(39!==this.peek()){this.bump();break}e.push(39),this.bump()}else e.push(r);this.bump()}return oe.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null;var r=this.char();return 60===r||123===r||35===r&&("plural"===e||"selectordinal"===e)||125===r&&t>0?null:(this.bump(),oe(r))},t.prototype.parseArgument=function(t,e){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(gt.EXPECT_ARGUMENT_CLOSING_BRACE,Yt(r,this.clonePosition()));if(125===this.char())return this.bump(),this.error(gt.EMPTY_ARGUMENT,Yt(r,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(gt.MALFORMED_ARGUMENT,Yt(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(gt.EXPECT_ARGUMENT_CLOSING_BRACE,Yt(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:yt.argument,value:i,location:Yt(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(gt.EXPECT_ARGUMENT_CLOSING_BRACE,Yt(r,this.clonePosition())):this.parseArgumentOptions(t,e,i,r);default:return this.error(gt.MALFORMED_ARGUMENT,Yt(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),r=ne(this.message,e),i=e+r.length;return this.bumpTo(i),{value:r,location:Yt(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,r,i){var s,o=this.clonePosition(),h=this.parseIdentifierIfPossible().value,a=this.clonePosition();switch(h){case"":return this.error(gt.EXPECT_ARGUMENT_TYPE,Yt(o,a));case"number":case"date":case"time":this.bumpSpace();var l=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition();if((y=this.parseSimpleArgStyleIfPossible()).err)return y;if(0===(d=ce(y.val)).length)return this.error(gt.EXPECT_ARGUMENT_STYLE,Yt(this.clonePosition(),this.clonePosition()));l={style:d,styleLocation:Yt(c,this.clonePosition())}}if((b=this.tryParseArgumentClose(i)).err)return b;var u=Yt(i,this.clonePosition());if(l&&se(null==l?void 0:l.style,"::",0)){var p=le(l.style.slice(2));if("number"===h)return(y=this.parseNumberSkeletonFromString(p,l.styleLocation)).err?y:{val:{type:yt.number,value:r,location:u,style:y.val},err:null};if(0===p.length)return this.error(gt.EXPECT_DATE_TIME_SKELETON,u);var f=p;this.locale&&(f=function(t,e){for(var r="",i=0;i<t.length;i++){var n=t.charAt(i);if("j"===n){for(var s=0;i+1<t.length&&t.charAt(i+1)===n;)s++,i++;var o=1+(1&s),h=s<2?1:3+(s>>1),a=Xt(e);for("H"!=a&&"k"!=a||(h=0);h-- >0;)r+="a";for(;o-- >0;)r=a+r}else r+="J"===n?"H":n}return r}(p,this.locale));var d={type:bt.dateTime,pattern:f,location:l.styleLocation,parsedOptions:this.shouldParseSkeletons?It(f):{}};return{val:{type:"date"===h?yt.date:yt.time,value:r,location:u,style:d},err:null}}return{val:{type:"number"===h?yt.number:"date"===h?yt.date:yt.time,value:r,location:u,style:null!==(s=null==l?void 0:l.style)&&void 0!==s?s:null},err:null};case"plural":case"selectordinal":case"select":var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(gt.EXPECT_SELECT_ARGUMENT_OPTIONS,Yt(m,n({},m)));this.bumpSpace();var E=this.parseIdentifierIfPossible(),g=0;if("select"!==h&&"offset"===E.value){if(!this.bumpIf(":"))return this.error(gt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Yt(this.clonePosition(),this.clonePosition()));var y;if(this.bumpSpace(),(y=this.tryParseDecimalInteger(gt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,gt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return y;this.bumpSpace(),E=this.parseIdentifierIfPossible(),g=y.val}var b,_=this.tryParsePluralOrSelectOptions(t,h,e,E);if(_.err)return _;if((b=this.tryParseArgumentClose(i)).err)return b;var v=Yt(i,this.clonePosition());return"select"===h?{val:{type:yt.select,value:r,options:he(_.val),location:v},err:null}:{val:{type:yt.plural,value:r,options:he(_.val),offset:g,pluralType:"plural"===h?"cardinal":"ordinal",location:v},err:null};default:return this.error(gt.INVALID_ARGUMENT_TYPE,Yt(o,a))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(gt.EXPECT_ARGUMENT_CLOSING_BRACE,Yt(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(gt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Yt(r,this.clonePosition()));this.bump();break;case 123:t+=1,this.bump();break;case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null};t-=1;break;default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var r=[];try{r=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty");for(var e=t.split($t).filter((function(t){return t.length>0})),r=[],i=0,n=e;i<n.length;i++){var s=n[i].split("/");if(0===s.length)throw new Error("Invalid number skeleton");for(var o=s[0],h=s.slice(1),a=0,l=h;a<l.length;a++)if(0===l[a].length)throw new Error("Invalid number skeleton");r.push({stem:o,options:h})}return r}(t)}catch(t){return this.error(gt.INVALID_NUMBER_SKELETON,e)}return{val:{type:bt.number,tokens:r,location:e,parsedOptions:this.shouldParseSkeletons?Vt(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,r,i){for(var n,s=!1,o=[],h=new Set,a=i.value,l=i.location;;){if(0===a.length){var c=this.clonePosition();if("select"===e||!this.bumpIf("="))break;var u=this.tryParseDecimalInteger(gt.EXPECT_PLURAL_ARGUMENT_SELECTOR,gt.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;l=Yt(c,this.clonePosition()),a=this.message.slice(c.offset,this.offset())}if(h.has(a))return this.error("select"===e?gt.DUPLICATE_SELECT_ARGUMENT_SELECTOR:gt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);"other"===a&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===e?gt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:gt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Yt(this.clonePosition(),this.clonePosition()));var f=this.parseMessage(t+1,e,r);if(f.err)return f;var d=this.tryParseArgumentClose(p);if(d.err)return d;o.push([a,{value:f.val,location:Yt(p,this.clonePosition())}]),h.add(a),this.bumpSpace(),a=(n=this.parseIdentifierIfPossible()).value,l=n.location}return 0===o.length?this.error("select"===e?gt.EXPECT_SELECT_ARGUMENT_SELECTOR:gt.EXPECT_PLURAL_ARGUMENT_SELECTOR,Yt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(gt.MISSING_OTHER_CLAUSE,Yt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var r=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var n=!1,s=0;!this.isEOF();){var o=this.char();if(!(o>=48&&o<=57))break;n=!0,s=10*s+(o-48),this.bump()}var h=Yt(i,this.clonePosition());return n?re(s*=r)?{val:s,err:null}:this.error(e,h):this.error(t,h)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var e=ae(this.message,t);if(void 0===e)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char();10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(se(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),r=this.message.indexOf(t,e);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var e=this.offset();if(e===t)break;if(e>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ee(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),e=this.offset(),r=this.message.charCodeAt(e+(t>=65536?2:1));return null!=r?r:null},t}();function de(t){return t>=97&&t<=122||t>=65&&t<=90}function me(t){return 45===t||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function Ee(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function ge(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function ye(t){t.forEach((function(t){if(delete t.location,St(t)||Bt(t))for(var e in t.options)delete t.options[e].location,ye(t.options[e].value);else At(t)&&Nt(t.style)||(Ht(t)||Tt(t))&&Lt(t.style)?delete t.style.location:Ct(t)&&ye(t.children)}))}function be(t,e){void 0===e&&(e={}),e=n({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var r=new fe(t,e).parse();if(r.err){var i=SyntaxError(gt[r.err.kind]);throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==e?void 0:e.captureLocation)||ye(r.val),r.val}function _e(t,e){var r=e&&e.cache?e.cache:Ce,i=e&&e.serializer?e.serializer:Se;return(e&&e.strategy?e.strategy:Te)(t,{cache:r,serializer:i})}function ve(t,e,r,i){var n,s=null==(n=i)||"number"==typeof n||"boolean"==typeof n?i:r(i),o=e.get(s);return void 0===o&&(o=t.call(this,i),e.set(s,o)),o}function Ae(t,e,r){var i=Array.prototype.slice.call(arguments,3),n=r(i),s=e.get(n);return void 0===s&&(s=t.apply(this,i),e.set(n,s)),s}function He(t,e,r,i,n){return r.bind(e,t,i,n)}function Te(t,e){return He(t,this,1===t.length?ve:Ae,e.cache.create(),e.serializer)}var Se=function(){return JSON.stringify(arguments)};function Be(){this.cache=Object.create(null)}Be.prototype.get=function(t){return this.cache[t]},Be.prototype.set=function(t,e){this.cache[t]=e};var Pe,Ce={create:function(){return new Be}},Ne={variadic:function(t,e){return He(t,this,Ae,e.cache.create(),e.serializer)},monadic:function(t,e){return He(t,this,ve,e.cache.create(),e.serializer)}};!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}(Pe||(Pe={}));var Le,Re=function(t){function e(e,r,i){var n=t.call(this,e)||this;return n.code=r,n.originalMessage=i,n}return i(e,t),e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),Oe=function(t){function e(e,r,i,n){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(r,'". Options are "').concat(Object.keys(i).join('", "'),'"'),Pe.INVALID_VALUE,n)||this}return i(e,t),e}(Re),Ie=function(t){function e(e,r,i){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(r),Pe.INVALID_VALUE,i)||this}return i(e,t),e}(Re),$e=function(t){function e(e,r){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(r,'"'),Pe.MISSING_VALUE,r)||this}return i(e,t),e}(Re);function we(t){return"function"==typeof t}function Me(t,e,r,i,n,s,o){if(1===t.length&&_t(t[0]))return[{type:Le.literal,value:t[0].value}];for(var h=[],a=0,l=t;a<l.length;a++){var c=l[a];if(_t(c))h.push({type:Le.literal,value:c.value});else if(Pt(c))"number"==typeof s&&h.push({type:Le.literal,value:r.getNumberFormat(e).format(s)});else{var u=c.value;if(!n||!(u in n))throw new $e(u,o);var p=n[u];if(vt(c))p&&"string"!=typeof p&&"number"!=typeof p||(p="string"==typeof p||"number"==typeof p?String(p):""),h.push({type:"string"==typeof p?Le.literal:Le.object,value:p});else if(Ht(c)){var f="string"==typeof c.style?i.date[c.style]:Lt(c.style)?c.style.parsedOptions:void 0;h.push({type:Le.literal,value:r.getDateTimeFormat(e,f).format(p)})}else if(Tt(c))f="string"==typeof c.style?i.time[c.style]:Lt(c.style)?c.style.parsedOptions:i.time.medium,h.push({type:Le.literal,value:r.getDateTimeFormat(e,f).format(p)});else if(At(c))(f="string"==typeof c.style?i.number[c.style]:Nt(c.style)?c.style.parsedOptions:void 0)&&f.scale&&(p*=f.scale||1),h.push({type:Le.literal,value:r.getNumberFormat(e,f).format(p)});else{if(Ct(c)){var d=c.children,m=c.value,E=n[m];if(!we(E))throw new Ie(m,"function",o);var g=E(Me(d,e,r,i,n,s).map((function(t){return t.value})));Array.isArray(g)||(g=[g]),h.push.apply(h,g.map((function(t){return{type:"string"==typeof t?Le.literal:Le.object,value:t}})))}if(St(c)){if(!(y=c.options[p]||c.options.other))throw new Oe(c.value,p,Object.keys(c.options),o);h.push.apply(h,Me(y.value,e,r,i,n))}else if(Bt(c)){var y;if(!(y=c.options["=".concat(p)])){if(!Intl.PluralRules)throw new Re('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',Pe.MISSING_INTL_API,o);var b=r.getPluralRules(e,{type:c.pluralType}).select(p-(c.offset||0));y=c.options[b]||c.options.other}if(!y)throw new Oe(c.value,p,Object.keys(c.options),o);h.push.apply(h,Me(y.value,e,r,i,n,p-(c.offset||0)))}}}}return(_=h).length<2?_:_.reduce((function(t,e){var r=t[t.length-1];return r&&r.type===Le.literal&&e.type===Le.literal?r.value+=e.value:t.push(e),t}),[]);var _}function Ue(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,r){t[e]=r}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(Le||(Le={}));var Ge=function(){function t(e,r,i,s){var h,a,l,c=this;if(void 0===r&&(r=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=c.formatToParts(t);if(1===e.length)return e[0].value;var r=e.reduce((function(t,e){return t.length&&e.type===Le.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t}),[]);return r.length<=1?r[0]||"":r},this.formatToParts=function(t){return Me(c.ast,c.locales,c.formatters,c.formats,t,void 0,c.message)},this.resolvedOptions=function(){var t;return{locale:(null===(t=c.resolvedLocale)||void 0===t?void 0:t.toString())||Intl.NumberFormat.supportedLocalesOf(c.locales)[0]}},this.getAst=function(){return c.ast},this.locales=r,this.resolvedLocale=t.resolveLocale(r),"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{},p=(u.formatters,function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]])}return r}(u,["formatters"]));this.ast=t.__parse(e,n(n({},p),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=(a=t.formats,(l=i)?Object.keys(a).reduce((function(t,e){var r,i;return t[e]=(r=a[e],(i=l[e])?n(n(n({},r||{}),i||{}),Object.keys(r).reduce((function(t,e){return t[e]=n(n({},r[e]),i[e]||{}),t}),{})):r),t}),n({},a)):a),this.formatters=s&&s.formatters||(void 0===(h=this.formatterCache)&&(h={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:_e((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,o([void 0],e,!1)))}),{cache:Ue(h.number),strategy:Ne.variadic}),getDateTimeFormat:_e((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,o([void 0],e,!1)))}),{cache:Ue(h.dateTime),strategy:Ne.variadic}),getPluralRules:_e((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,o([void 0],e,!1)))}),{cache:Ue(h.pluralRules),strategy:Ne.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(t){if(void 0!==Intl.Locale){var e=Intl.NumberFormat.supportedLocalesOf(t);return e.length>0?new Intl.Locale(e[0]):new Intl.Locale("string"==typeof t?t:t[0])}},t.__parse=be,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}();const De=Ge;class ke{constructor(){this.lang=Fe("lang",document?.documentElement?.getAttribute("lang")),this.dir=Fe("dir",document?.documentElement?.getAttribute("dir")),new MutationObserver((()=>{document.dispatchEvent(new CustomEvent("localeChanged",{detail:{lang:this.lang=Fe("lang",document.documentElement.lang),dir:this.dir=Fe("dir",document.documentElement.dir)}}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}}function Fe(t,e){return"lang"===t?e&&e.includes("-")&&e.length>=5?e.toLowerCase():"en-us":"dir"===t?e&&e.match(/^(ltr|rtl)$/i)?e.toLowerCase():"ltr":(console.warn("Invalid validation type!"),"")}const xe=function(){let t;return function(){return t||(t=new ke),t}}(),Ve=t=>{class e extends t{constructor(){super(...arguments),this.i18nManager=xe(),this.locChangeHandler=t=>{this.lang=t.detail.lang,this.dir=t.detail.dir,this.requestUpdate()},this.errorHandler=(t,e)=>{if(console.warn(`I18nMixin ${t}: ${e}`),"undefined"!=typeof process&&process?.env?.STORYBOOK&&"ERROR"===t)throw new Error(e)}}connectedCallback(){super.connectedCallback(),this.lang=this.i18nManager?.lang||"en-us",this.dir=this.i18nManager?.dir||"ltr",document.addEventListener("localeChanged",this.locChangeHandler),Object.keys(this.translations||{})?.forEach((t=>{const{dict:e}=this.constructor;e&&Object.keys(e).length||this.errorHandler("ERROR","Found translations but dictionary is not defined"),e&&!(t in e)&&this.errorHandler("ERROR",`Translation passed in for wrong or obsolete key: '${t}'`)}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("localeChanged",this.locChangeHandler)}msg(t,e){if(!t)return"";const r=this.constructor.dict?.[t]||"";if(!this.lang)return r;const{dict:i}=this.constructor;i&&!(t in i)&&this.errorHandler("ERROR",`Invalid key: '${t}'`);let n=this.translations?.[t];n||(this.translations&&this.errorHandler("WARNING",`Missing translation for key: '${t}'`),n=r);let s=n;try{s=this.format(n,e)}catch(t){this.errorHandler("ERROR",`Error interpolating '${n}'\n${t}`)}return s??n??""}format(t,e){return new De(t,this.lang).format(e)}}return e.dict={},s([Et({type:Object,reflect:!1})],e.prototype,"translations",void 0),e};var je;Ve(pt);let Ke=je=class extends(Ve(pt)){constructor(){super(...arguments),this.userInfoKey="",this.userInfo="",this.retrieveUserInfo=async()=>{const t=t=>t.find((t=>t.toLowerCase()===this.userInfoKey?.toLowerCase())),e=t(je.validKeys);if(e){const t=await(window?.CascadeAuthSDK?.getInstance()?.getUserInfo());this.userInfo=t?.[e]||window.msauth?.[e]||""}const r=t(je.validCookieKeys);if(r){const t=document.cookie.split("; ").find((t=>t.split("=")[0]===r));this.userInfo=t?.split("=")?.[1]||window.msauth?.[r]||""}}}async connectedCallback(){super.connectedCallback(),await this.retrieveUserInfo()}render(){return Y`<span>${this.userInfo}</span>`}};var Xe;return Ke.validKeys=["Name","FirstName","LastName","EmailAddress"],Ke.validCookieKeys=["DisplayName"],s([Et({attribute:"user-info-key"})],Ke.prototype,"userInfoKey",void 0),s([Et({state:!0,attribute:!1})],Ke.prototype,"userInfo",void 0),Ke=je=s([(Xe="dynamic-user-info",(t,e)=>{customElements.get(Xe)?console.warn(`${Xe} is already defined.`):void 0!==e?e.addInitializer((()=>{customElements.define(Xe,t)})):customElements.define(Xe,t)})],Ke),e})(),t.exports=e()}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(407)})()})();
var msftModalManager = (function() 
{
    var topBodyElement;

    function intialize() {
        topBodyElement = document.querySelector('#modalsRenderedAfterPageLoad');
    }

    function setupListeners() {

        function setVisibility(isVisible) {
            $(topBodyElement)
                .siblings()
                .toArray()
                .filter(function (sibling) {
                    return sibling.tagName !== 'SCRIPT' && sibling.tagName !== 'META';
                })
                .forEach(function (sibling) {
                    if (isVisible) {
                        sibling.setAttribute('aria-hidden', true);
                    } else {
                        sibling.removeAttribute('aria-hidden');
                    }  
                });
        }

        $('.modal.renderModalOnPageLoad').on('onShow', function(e) {
            //console.log('modal shown:', e.target.id);
            setVisibility(true);     
        });

        $('.modal.renderModalOnPageLoad').on('onHide', function(e) {
            //console.log('modal hidden', e.target.id);
            setVisibility(false);      
        });
    }

    function prependModalsToTopOfBody() {

        // modals that are rendered after page load (not after the result of some other trigger, like a button click) 
        // need to be moved to the top of the DOM, for accessibility

        document.querySelectorAll('.renderModalOnPageLoad').forEach(function (modal) {
            topBodyElement.appendChild(modal);
        });
    }

    function renderModalsInSequence() {

        msGeoSelector.shouldRender().then(function(geoSelectorShouldRender) {

            if (geoSelectorShouldRender) {
                msGeoSelector.render();

                msftEmailModal.shouldRender() && $(document).on(msGeoSelector.CLOSED_EVENT, function (e) {
                    msftEmailModal.render();
                });

            } else {
                msftEmailModal.shouldRender() && msftEmailModal.render();
            }
        }).catch(function() {
            msftEmailModal.shouldRender() && msftEmailModal.render();
        });
    }

    function renderModals() {
        intialize();
        setupListeners();
        prependModalsToTopOfBody();
        renderModalsInSequence();
    }

    $(document).ready(function () {
        renderModals();
    });
}());


