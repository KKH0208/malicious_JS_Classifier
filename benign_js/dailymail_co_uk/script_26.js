/* 元のURL: https://dailymail.co.uk */
// 外部JS: https://www.dailymail.co.uk/rta2/v2-mol-3.13.2.js
(function(){
    var define = (function amdLoader() {
    var loaded = {};
    var pending = {};
    function errorRequire(reference) {
        console.error("Cannot require ", reference);
    }
    return function (moduleID, factoryInput, factory) {
        var requiredDeps = factoryInput.slice(2);
        var loadedDeps = requiredDeps.map(function (id) { return loaded[id].exports; });
        if (loadedDeps.some(function (m) { return !m; })) {
            pending[moduleID] = { factory: factory, requires: requiredDeps };
        }
        else {
            loaded[moduleID] = { factory: factory, requires: loadedDeps };
            (function loadAndCheckPending(id, loadedDeps) {
                // @ts-ignore
                loaded[id].factory.apply(void 0, [errorRequire, loaded[id].exports = {}].concat(loadedDeps));
                Object.keys(pending).forEach(function (k) {
                    var _a, _b;
                    if ((((_b = (_a = pending[k]) === null || _a === void 0 ? void 0 : _a.requires) === null || _b === void 0 ? void 0 : _b.indexOf(id)) || -1) >= 0) {
                        var nextDeps = pending[k].requires.map(function (id) { return loaded[id].exports; });
                        if (!nextDeps.some(function (m) { return !m; })) {
                            loaded[k] = { factory: pending[k].factory, requires: nextDeps };
                            delete pending[k];
                            loadAndCheckPending(k, nextDeps);
                        }
                    }
                });
            })(moduleID, loadedDeps);
        }
    };
})();
    var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Type common to both CLIENT scripts and SERVER endpoints */
define("rta3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("rta3-server", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("web-report", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
define("version", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = void 0;
    exports.version = "3.13.2";
});
/// <reference lib="DOM" />
define("base-3.0", ["require", "exports", "version"], function (require, exports, version_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RTA3 = RTA3;
    /* RTA v3 static script */
    /**
     * Send a report to RTA that a page has been viewed
     * @param rta3Origin - the origin of the RTA server
     * @param reporter - a constant string that indirectly defines how any `reportData` is to be interpreted
     * @param reportData - site-specific data about what is being viewed (parsed by RUFUS). This can be undefined.
     * @param documentReferrer - the URL of the document that precedes the one being reported
     *      on. Defaults to `document.referrer`. Passing a non-url string here will "force" the RTA referrer to that
     *      specified in preference to the "normal" RTA rules
     * @param reportingUrl - the URL of the page being tracked. Defaults to window.location.href, but for
     *      things like the XP module that are reporting on another page they are hosted on, that should be passed
     * @param userSuppliedIDs - the RTA3IDs for this event. If not supplied, this script will use (and update) localStorage
     * @returns RTA3Page - methods for sending supplementary events for this page. Not, for single page applications (like newzit), the return
     *      values are specific to the original reported page, and should be maintained locally appropriately. The returned values have
     *      methods that do not require binding in order to function
     */
    function RTA3(rta3Origin, reporter, reportData, documentReferrer, reportingUrl, userSuppliedIDs) {
        var _a;
        if (documentReferrer === void 0) { documentReferrer = document.referrer; }
        if (reportingUrl === void 0) { reportingUrl = window.location.href; }
        if (userSuppliedIDs === void 0) { userSuppliedIDs = undefined; }
        var writeIDs = function () { };
        var setIDs;
        var ids = new Promise(function (resolve) { return setIDs = resolve; });
        var noLiveServer = {
            events: function () { },
            event: function () { },
            defer: function (key) {
                if (!key) {
                    console.warn("RTA3 invaklid key");
                    return;
                }
                var keyid = 'rta3d|' + key + '|' + rta3host;
                localStorage.removeItem(keyid);
                ids.then(function (id) {
                    if (id) {
                        localStorage.setItem(keyid, JSON.stringify(id));
                    }
                });
            },
            deferred: function (key, f) { },
            ids: ids,
            rta3host: ''
        };
        if (!rta3Origin) {
            console.warn("RTA3 configuration error");
            return noLiveServer;
        }
        var rta3host = undefined;
        rta3host = (_a = rta3Origin.match(/https?:\/\/([^\/]+).*/)) === null || _a === void 0 ? void 0 : _a[1];
        if (!rta3host) {
            console.warn("RTA3 configuration error");
            return noLiveServer;
        }
        noLiveServer.rta3host = rta3host;
        var storedIDs = userSuppliedIDs;
        if (!userSuppliedIDs) {
            try {
                var locals = localStorage.getItem('rta3|' + rta3host) || undefined;
                storedIDs = locals && JSON.parse(locals);
            }
            catch (_error) {
                storedIDs = undefined;
                console.warn("RTA3 ID error");
                return noLiveServer;
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", rta3Origin + '/s/3', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    storedIDs = JSON.parse(xhr.responseText);
                    if (!userSuppliedIDs && storedIDs) {
                        writeIDs = function () { localStorage.setItem('rta3|' + rta3host, JSON.stringify(storedIDs)); };
                        writeIDs();
                        if (storedIDs.d) {
                            methods.events = noLiveServer.events;
                        }
                        setIDs(storedIDs);
                    }
                }
                else {
                    methods.events = noLiveServer.events;
                    setIDs(null);
                }
            }
        };
        var m = {
            id: storedIDs,
            p: reportingUrl,
            r: documentReferrer,
            e: reportData,
            t: reporter,
            v: version_1.version
        };
        xhr.send(JSON.stringify(m));
        var methods = {
            /* Save the RTA context to permit an update of this event AFTER the page has exited */
            defer: noLiveServer.defer,
            /* Update the last deferred report. Can only be called once per deferred page */
            deferred: function (key, f) {
                if (!key) {
                    console.warn("RTA3 invaklid key");
                    return;
                }
                var keyid = 'rta3d|' + key + '|' + rta3host;
                var deferred = localStorage.getItem(keyid);
                if (!deferred) {
                    console.warn("RTA3 deferred report not found. Sending to current page");
                    return methods.events(f);
                }
                localStorage.removeItem(keyid);
                var m = {
                    id: JSON.parse(deferred),
                    t: reporter,
                    f: f
                };
                navigator.sendBeacon(rta3Origin + '/s/3', JSON.stringify(m));
            },
            /* Send events for the current page */
            events: function (events) {
                ids.then(function (id) {
                    if (id) {
                        writeIDs();
                        var m_1 = {
                            id: id,
                            t: reporter,
                            f: events
                        };
                        navigator.sendBeacon(rta3Origin + '/s/3', JSON.stringify(m_1));
                    }
                });
            },
            /* Send a single event for the current page */
            event: function (args) {
                methods.events([args]);
            },
            ids: ids,
            rta3host: rta3host
        };
        return methods;
    }
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/generateUniqueID", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateUniqueID = void 0;
    /**
     * Performantly generate a unique, 30-char string by combining a version
     * number, the current timestamp with a 13-digit number integer.
     * @return {string}
     */
    var generateUniqueID = function () {
        return "v2-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
    };
    exports.generateUniqueID = generateUniqueID;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/initMetric", ["require", "exports", "web-vitals/src/lib/generateUniqueID"], function (require, exports, generateUniqueID_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initMetric = void 0;
    var initMetric = function (name, value) {
        return {
            name: name,
            value: typeof value === 'undefined' ? -1 : value,
            delta: 0,
            entries: [],
            id: (0, generateUniqueID_js_1.generateUniqueID)()
        };
    };
    exports.initMetric = initMetric;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/observe", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observe = void 0;
    /**
     * Takes a performance entry type and a callback function, and creates a
     * `PerformanceObserver` instance that will observe the specified entry type
     * with buffering enabled and call the callback _for each entry_.
     *
     * This function also feature-detects entry support and wraps the logic in a
     * try/catch to avoid errors in unsupporting browsers.
     */
    var observe = function (type, callback) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(type)) {
                // More extensive feature detect needed for Firefox due to:
                // https://github.com/GoogleChrome/web-vitals/issues/142
                if (type === 'first-input' && !('PerformanceEventTiming' in self)) {
                    return;
                }
                var po = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
                po.observe({ type: type, buffered: true });
                return po;
            }
        }
        catch (e) {
            // Do nothing.
        }
        return;
    };
    exports.observe = observe;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/onHidden", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onHidden = void 0;
    var onHidden = function (cb, once) {
        var onHiddenOrPageHide = function (event) {
            if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
                cb(event);
                if (once) {
                    removeEventListener('visibilitychange', onHiddenOrPageHide, true);
                    removeEventListener('pagehide', onHiddenOrPageHide, true);
                }
            }
        };
        addEventListener('visibilitychange', onHiddenOrPageHide, true);
        // Some browsers have buggy implementations of visibilitychange,
        // so we use pagehide in addition, just to be safe.
        addEventListener('pagehide', onHiddenOrPageHide, true);
    };
    exports.onHidden = onHidden;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/onBFCacheRestore", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onBFCacheRestore = void 0;
    var onBFCacheRestore = function (cb) {
        addEventListener('pageshow', function (event) {
            if (event.persisted) {
                cb(event);
            }
        }, true);
    };
    exports.onBFCacheRestore = onBFCacheRestore;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/bindReporter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindReporter = void 0;
    var bindReporter = function (callback, metric, reportAllChanges) {
        var prevValue;
        return function (forceReport) {
            if (metric.value >= 0) {
                if (forceReport || reportAllChanges) {
                    metric.delta = metric.value - (prevValue || 0);
                    // Report the metric if there's a non-zero delta or if no previous
                    // value exists (which can happen in the case of the document becoming
                    // hidden when the metric value is 0).
                    // See: https://github.com/GoogleChrome/web-vitals/issues/14
                    if (metric.delta || prevValue === undefined) {
                        prevValue = metric.value;
                        callback(metric);
                    }
                }
            }
        };
    };
    exports.bindReporter = bindReporter;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/getVisibilityWatcher", ["require", "exports", "web-vitals/src/lib/onBFCacheRestore", "web-vitals/src/lib/onHidden"], function (require, exports, onBFCacheRestore_js_1, onHidden_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getVisibilityWatcher = void 0;
    var firstHiddenTime = -1;
    var initHiddenTime = function () {
        return document.visibilityState === 'hidden' ? 0 : Infinity;
    };
    var trackChanges = function () {
        // Update the time if/when the document becomes hidden.
        (0, onHidden_js_1.onHidden)(function (_a) {
            var timeStamp = _a.timeStamp;
            firstHiddenTime = timeStamp;
        }, true);
    };
    var getVisibilityWatcher = function () {
        if (firstHiddenTime < 0) {
            // If the document is hidden when this code runs, assume it was hidden
            // since navigation start. This isn't a perfect heuristic, but it's the
            // best we can do until an API is available to support querying past
            // visibilityState.
            if (window.__WEB_VITALS_POLYFILL__) {
                firstHiddenTime = window.webVitals.firstHiddenTime;
                if (firstHiddenTime === Infinity) {
                    trackChanges();
                }
            }
            else {
                firstHiddenTime = initHiddenTime();
                trackChanges();
            }
            // Reset the time on bfcache restores.
            (0, onBFCacheRestore_js_1.onBFCacheRestore)(function () {
                // Schedule a task in order to track the `visibilityState` once it's
                // had an opportunity to change to visible in all browsers.
                // https://bugs.chromium.org/p/chromium/issues/detail?id=1133363
                setTimeout(function () {
                    firstHiddenTime = initHiddenTime();
                    trackChanges();
                }, 0);
            });
        }
        return {
            get firstHiddenTime() {
                return firstHiddenTime;
            }
        };
    };
    exports.getVisibilityWatcher = getVisibilityWatcher;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/getFCP", ["require", "exports", "web-vitals/src/lib/bindReporter", "web-vitals/src/lib/getVisibilityWatcher", "web-vitals/src/lib/initMetric", "web-vitals/src/lib/observe", "web-vitals/src/lib/onBFCacheRestore"], function (require, exports, bindReporter_js_1, getVisibilityWatcher_js_1, initMetric_js_1, observe_js_1, onBFCacheRestore_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFCP = void 0;
    var getFCP = function (onReport, reportAllChanges) {
        var visibilityWatcher = (0, getVisibilityWatcher_js_1.getVisibilityWatcher)();
        var metric = (0, initMetric_js_1.initMetric)('FCP');
        var report;
        var entryHandler = function (entry) {
            if (entry.name === 'first-contentful-paint') {
                if (po) {
                    po.disconnect();
                }
                // Only report if the page wasn't hidden prior to the first paint.
                if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                    metric.value = entry.startTime;
                    metric.entries.push(entry);
                    report(true);
                }
            }
        };
        // TODO(philipwalton): remove the use of `fcpEntry` once this bug is fixed.
        // https://bugs.webkit.org/show_bug.cgi?id=225305
        // The check for `getEntriesByName` is needed to support Opera:
        // https://github.com/GoogleChrome/web-vitals/issues/159
        // The check for `window.performance` is needed to support Opera mini:
        // https://github.com/GoogleChrome/web-vitals/issues/185
        var fcpEntry = window.performance && performance.getEntriesByName &&
            performance.getEntriesByName('first-contentful-paint')[0];
        var po = fcpEntry ? null : (0, observe_js_1.observe)('paint', entryHandler);
        if (fcpEntry || po) {
            report = (0, bindReporter_js_1.bindReporter)(onReport, metric, reportAllChanges);
            if (fcpEntry) {
                entryHandler(fcpEntry);
            }
            (0, onBFCacheRestore_js_2.onBFCacheRestore)(function (event) {
                metric = (0, initMetric_js_1.initMetric)('FCP');
                report = (0, bindReporter_js_1.bindReporter)(onReport, metric, reportAllChanges);
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        metric.value = performance.now() - event.timeStamp;
                        report(true);
                    });
                });
            });
        }
    };
    exports.getFCP = getFCP;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/getCLS", ["require", "exports", "web-vitals/src/lib/initMetric", "web-vitals/src/lib/observe", "web-vitals/src/lib/onHidden", "web-vitals/src/lib/onBFCacheRestore", "web-vitals/src/lib/bindReporter", "web-vitals/src/getFCP"], function (require, exports, initMetric_js_2, observe_js_2, onHidden_js_2, onBFCacheRestore_js_3, bindReporter_js_2, getFCP_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCLS = void 0;
    var isMonitoringFCP = false;
    var fcpValue = -1;
    var getCLS = function (onReport, reportAllChanges) {
        // Start monitoring FCP so we can only report CLS if FCP is also reported.
        // Note: this is done to match the current behavior of CrUX.
        if (!isMonitoringFCP) {
            (0, getFCP_js_1.getFCP)(function (metric) {
                fcpValue = metric.value;
            });
            isMonitoringFCP = true;
        }
        var onReportWrapped = function (arg) {
            if (fcpValue > -1) {
                onReport(arg);
            }
        };
        var metric = (0, initMetric_js_2.initMetric)('CLS', 0);
        var report;
        var sessionValue = 0;
        var sessionEntries = [];
        var entryHandler = function (entry) {
            // Only count layout shifts without recent user input.
            if (!entry.hadRecentInput) {
                var firstSessionEntry = sessionEntries[0];
                var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                // If the entry occurred less than 1 second after the previous entry and
                // less than 5 seconds after the first entry in the session, include the
                // entry in the current session. Otherwise, start a new session.
                if (sessionValue &&
                    entry.startTime - lastSessionEntry.startTime < 1000 &&
                    entry.startTime - firstSessionEntry.startTime < 5000) {
                    sessionValue += entry.value;
                    sessionEntries.push(entry);
                }
                else {
                    sessionValue = entry.value;
                    sessionEntries = [entry];
                }
                // If the current session value is larger than the current CLS value,
                // update CLS and the entries contributing to it.
                if (sessionValue > metric.value) {
                    metric.value = sessionValue;
                    metric.entries = sessionEntries;
                    report();
                }
            }
        };
        var po = (0, observe_js_2.observe)('layout-shift', entryHandler);
        if (po) {
            report = (0, bindReporter_js_2.bindReporter)(onReportWrapped, metric, reportAllChanges);
            (0, onHidden_js_2.onHidden)(function () {
                po.takeRecords().map(entryHandler);
                report(true);
            });
            (0, onBFCacheRestore_js_3.onBFCacheRestore)(function () {
                sessionValue = 0;
                fcpValue = -1;
                metric = (0, initMetric_js_2.initMetric)('CLS', 0);
                report = (0, bindReporter_js_2.bindReporter)(onReportWrapped, metric, reportAllChanges);
            });
        }
    };
    exports.getCLS = getCLS;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/lib/polyfills/firstInputPolyfill", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetFirstInputPolyfill = exports.firstInputPolyfill = void 0;
    var firstInputEvent;
    var firstInputDelay;
    var firstInputTimeStamp;
    var callbacks;
    var listenerOpts = { passive: true, capture: true };
    var startTimeStamp = new Date();
    /**
     * Accepts a callback to be invoked once the first input delay and event
     * are known.
     */
    var firstInputPolyfill = function (onFirstInput) {
        callbacks.push(onFirstInput);
        reportFirstInputDelayIfRecordedAndValid();
    };
    exports.firstInputPolyfill = firstInputPolyfill;
    var resetFirstInputPolyfill = function () {
        callbacks = [];
        firstInputDelay = -1;
        firstInputEvent = null;
        eachEventType(addEventListener);
    };
    exports.resetFirstInputPolyfill = resetFirstInputPolyfill;
    /**
     * Records the first input delay and event, so subsequent events can be
     * ignored. All added event listeners are then removed.
     */
    var recordFirstInputDelay = function (delay, event) {
        if (!firstInputEvent) {
            firstInputEvent = event;
            firstInputDelay = delay;
            firstInputTimeStamp = new Date;
            eachEventType(removeEventListener);
            reportFirstInputDelayIfRecordedAndValid();
        }
    };
    /**
     * Reports the first input delay and event (if they're recorded and valid)
     * by running the array of callback functions.
     */
    var reportFirstInputDelayIfRecordedAndValid = function () {
        // In some cases the recorded delay is clearly wrong, e.g. it's negative
        // or it's larger than the delta between now and initialization.
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
        if (firstInputDelay >= 0 &&
            // @ts-ignore (subtracting two dates always returns a number)
            firstInputDelay < firstInputTimeStamp - startTimeStamp) {
            var entry_1 = {
                entryType: 'first-input',
                name: firstInputEvent.type,
                target: firstInputEvent.target,
                cancelable: firstInputEvent.cancelable,
                startTime: firstInputEvent.timeStamp,
                processingStart: firstInputEvent.timeStamp + firstInputDelay,
            };
            callbacks.forEach(function (callback) {
                callback(entry_1);
            });
            callbacks = [];
        }
    };
    /**
     * Handles pointer down events, which are a special case.
     * Pointer events can trigger main or compositor thread behavior.
     * We differentiate these cases based on whether or not we see a
     * 'pointercancel' event, which are fired when we scroll. If we're scrolling
     * we don't need to report input delay since FID excludes scrolling and
     * pinch/zooming.
     */
    var onPointerDown = function (delay, event) {
        /**
         * Responds to 'pointerup' events and records a delay. If a pointer up event
         * is the next event after a pointerdown event, then it's not a scroll or
         * a pinch/zoom.
         */
        var onPointerUp = function () {
            recordFirstInputDelay(delay, event);
            removePointerEventListeners();
        };
        /**
         * Responds to 'pointercancel' events and removes pointer listeners.
         * If a 'pointercancel' is the next event to fire after a pointerdown event,
         * it means this is a scroll or pinch/zoom interaction.
         */
        var onPointerCancel = function () {
            removePointerEventListeners();
        };
        /**
         * Removes added pointer event listeners.
         */
        var removePointerEventListeners = function () {
            removeEventListener('pointerup', onPointerUp, listenerOpts);
            removeEventListener('pointercancel', onPointerCancel, listenerOpts);
        };
        addEventListener('pointerup', onPointerUp, listenerOpts);
        addEventListener('pointercancel', onPointerCancel, listenerOpts);
    };
    /**
     * Handles all input events and records the time between when the event
     * was received by the operating system and when it's JavaScript listeners
     * were able to run.
     */
    var onInput = function (event) {
        // Only count cancelable events, which should trigger behavior
        // important to the user.
        if (event.cancelable) {
            // In some browsers `event.timeStamp` returns a `DOMTimeStamp` value
            // (epoch time) instead of the newer `DOMHighResTimeStamp`
            // (document-origin time). To check for that we assume any timestamp
            // greater than 1 trillion is a `DOMTimeStamp`, and compare it using
            // the `Date` object rather than `performance.now()`.
            // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
            var isEpochTime = event.timeStamp > 1e12;
            var now = isEpochTime ? new Date : performance.now();
            // Input delay is the delta between when the system received the event
            // (e.g. event.timeStamp) and when it could run the callback (e.g. `now`).
            var delay = now - event.timeStamp;
            if (event.type == 'pointerdown') {
                onPointerDown(delay, event);
            }
            else {
                recordFirstInputDelay(delay, event);
            }
        }
    };
    /**
     * Invokes the passed callback const for =  each event type with t =>he
     * `onInput` const and =  `listenerOpts =>`.
     */
    var eachEventType = function (callback) {
        var eventTypes = [
            'mousedown',
            'keydown',
            'touchstart',
            'pointerdown',
        ];
        eventTypes.forEach(function (type) { return callback(type, onInput, listenerOpts); });
    };
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/getFID", ["require", "exports", "web-vitals/src/lib/bindReporter", "web-vitals/src/lib/getVisibilityWatcher", "web-vitals/src/lib/initMetric", "web-vitals/src/lib/observe", "web-vitals/src/lib/onBFCacheRestore", "web-vitals/src/lib/onHidden", "web-vitals/src/lib/polyfills/firstInputPolyfill"], function (require, exports, bindReporter_js_3, getVisibilityWatcher_js_2, initMetric_js_3, observe_js_3, onBFCacheRestore_js_4, onHidden_js_3, firstInputPolyfill_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFID = void 0;
    var getFID = function (onReport, reportAllChanges) {
        var visibilityWatcher = (0, getVisibilityWatcher_js_2.getVisibilityWatcher)();
        var metric = (0, initMetric_js_3.initMetric)('FID');
        var report;
        var entryHandler = function (entry) {
            // Only report if the page wasn't hidden prior to the first input.
            if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                metric.value = entry.processingStart - entry.startTime;
                metric.entries.push(entry);
                report(true);
            }
        };
        var po = (0, observe_js_3.observe)('first-input', entryHandler);
        report = (0, bindReporter_js_3.bindReporter)(onReport, metric, reportAllChanges);
        if (po) {
            (0, onHidden_js_3.onHidden)(function () {
                po.takeRecords().map(entryHandler);
                po.disconnect();
            }, true);
        }
        if (window.__WEB_VITALS_POLYFILL__) {
            // Prefer the native implementation if available,
            if (!po) {
                window.webVitals.firstInputPolyfill(entryHandler);
            }
            (0, onBFCacheRestore_js_4.onBFCacheRestore)(function () {
                metric = (0, initMetric_js_3.initMetric)('FID');
                report = (0, bindReporter_js_3.bindReporter)(onReport, metric, reportAllChanges);
                window.webVitals.resetFirstInputPolyfill();
                window.webVitals.firstInputPolyfill(entryHandler);
            });
        }
        else {
            // Only monitor bfcache restores if the browser supports FID natively.
            if (po) {
                (0, onBFCacheRestore_js_4.onBFCacheRestore)(function () {
                    metric = (0, initMetric_js_3.initMetric)('FID');
                    report = (0, bindReporter_js_3.bindReporter)(onReport, metric, reportAllChanges);
                    (0, firstInputPolyfill_js_1.resetFirstInputPolyfill)();
                    (0, firstInputPolyfill_js_1.firstInputPolyfill)(entryHandler);
                });
            }
        }
    };
    exports.getFID = getFID;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/getLCP", ["require", "exports", "web-vitals/src/lib/bindReporter", "web-vitals/src/lib/getVisibilityWatcher", "web-vitals/src/lib/initMetric", "web-vitals/src/lib/observe", "web-vitals/src/lib/onBFCacheRestore", "web-vitals/src/lib/onHidden"], function (require, exports, bindReporter_js_4, getVisibilityWatcher_js_3, initMetric_js_4, observe_js_4, onBFCacheRestore_js_5, onHidden_js_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLCP = void 0;
    var reportedMetricIDs = {};
    var getLCP = function (onReport, reportAllChanges) {
        var visibilityWatcher = (0, getVisibilityWatcher_js_3.getVisibilityWatcher)();
        var metric = (0, initMetric_js_4.initMetric)('LCP');
        var report;
        var entryHandler = function (entry) {
            // The startTime attribute returns the value of the renderTime if it is not 0,
            // and the value of the loadTime otherwise.
            var value = entry.startTime;
            // If the page was hidden prior to paint time of the entry,
            // ignore it and mark the metric as final, otherwise add the entry.
            if (value < visibilityWatcher.firstHiddenTime) {
                metric.value = value;
                metric.entries.push(entry);
                report();
            }
        };
        var po = (0, observe_js_4.observe)('largest-contentful-paint', entryHandler);
        if (po) {
            report = (0, bindReporter_js_4.bindReporter)(onReport, metric, reportAllChanges);
            var stopListening_1 = function () {
                if (!reportedMetricIDs[metric.id]) {
                    po.takeRecords().map(entryHandler);
                    po.disconnect();
                    reportedMetricIDs[metric.id] = true;
                    report(true);
                }
            };
            // Stop listening after input. Note: while scrolling is an input that
            // stop LCP observation, it's unreliable since it can be programmatically
            // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
            ['keydown', 'click'].forEach(function (type) {
                addEventListener(type, stopListening_1, { once: true, capture: true });
            });
            (0, onHidden_js_4.onHidden)(stopListening_1, true);
            (0, onBFCacheRestore_js_5.onBFCacheRestore)(function (event) {
                metric = (0, initMetric_js_4.initMetric)('LCP');
                report = (0, bindReporter_js_4.bindReporter)(onReport, metric, reportAllChanges);
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        metric.value = performance.now() - event.timeStamp;
                        reportedMetricIDs[metric.id] = true;
                        report(true);
                    });
                });
            });
        }
    };
    exports.getLCP = getLCP;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/getTTFB", ["require", "exports", "web-vitals/src/lib/initMetric"], function (require, exports, initMetric_js_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTTFB = void 0;
    var afterLoad = function (callback) {
        if (document.readyState === 'complete') {
            // Queue a task so the callback runs after `loadEventEnd`.
            setTimeout(callback, 0);
        }
        else {
            // Queue a task so the callback runs after `loadEventEnd`.
            addEventListener('load', function () { return setTimeout(callback, 0); });
        }
    };
    var getNavigationEntryFromPerformanceTiming = function () {
        // Really annoying that TypeScript errors when using `PerformanceTiming`.
        var timing = performance.timing;
        var navigationEntry = {
            entryType: 'navigation',
            startTime: 0,
        };
        for (var key in timing) {
            if (key !== 'navigationStart' && key !== 'toJSON') {
                navigationEntry[key] = Math.max(timing[key] -
                    timing.navigationStart, 0);
            }
        }
        return navigationEntry;
    };
    var getTTFB = function (onReport) {
        var metric = (0, initMetric_js_5.initMetric)('TTFB');
        afterLoad(function () {
            try {
                // Use the NavigationTiming L2 entry if available.
                var navigationEntry = performance.getEntriesByType('navigation')[0] ||
                    getNavigationEntryFromPerformanceTiming();
                metric.value = metric.delta =
                    navigationEntry.responseStart;
                // In some cases the value reported is negative or is larger
                // than the current page time. Ignore these cases:
                // https://github.com/GoogleChrome/web-vitals/issues/137
                // https://github.com/GoogleChrome/web-vitals/issues/162
                if (metric.value < 0 || metric.value > performance.now())
                    return;
                metric.entries = [navigationEntry];
                onReport(metric);
            }
            catch (error) {
                // Do nothing.
            }
        });
    };
    exports.getTTFB = getTTFB;
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("web-vitals/src/index", ["require", "exports", "web-vitals/src/getCLS", "web-vitals/src/getFCP", "web-vitals/src/getFID", "web-vitals/src/getLCP", "web-vitals/src/getTTFB", "web-vitals/src/types"], function (require, exports, getCLS_js_1, getFCP_js_2, getFID_js_1, getLCP_js_1, getTTFB_js_1, types_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTTFB = exports.getLCP = exports.getFID = exports.getFCP = exports.getCLS = void 0;
    Object.defineProperty(exports, "getCLS", { enumerable: true, get: function () { return getCLS_js_1.getCLS; } });
    Object.defineProperty(exports, "getFCP", { enumerable: true, get: function () { return getFCP_js_2.getFCP; } });
    Object.defineProperty(exports, "getFID", { enumerable: true, get: function () { return getFID_js_1.getFID; } });
    Object.defineProperty(exports, "getLCP", { enumerable: true, get: function () { return getLCP_js_1.getLCP; } });
    Object.defineProperty(exports, "getTTFB", { enumerable: true, get: function () { return getTTFB_js_1.getTTFB; } });
    __exportStar(types_js_1, exports);
});
define("base-web-report", ["require", "exports", "base-3.0", "web-vitals/src/index"], function (require, exports, base_3_0_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptedRtaParams = scriptedRtaParams;
    exports.sendInitialReport = sendInitialReport;
    /* Helper function - read the config from the textContent of the script tag */
    function scriptedRtaParams(elt) {
        var _a;
        if (!elt || elt.tagName !== 'SCRIPT' || !(elt instanceof HTMLScriptElement)) {
            throw new Error("RTA2: config error (no element)");
        }
        var rtaConfig = (elt.textContent && eval('(' + elt.textContent + ')')) || {};
        if (typeof rtaConfig === 'function')
            rtaConfig = rtaConfig();
        rtaConfig.hosts = asStringArray(rtaConfig.hosts || [(_a = elt.src.match(/(https?:\/\/)([^/]+)/)) === null || _a === void 0 ? void 0 : _a[2]]);
        var r = {
            page: rtaConfig.page || {}
        };
        // Only return non-undefined values (since we often spread the results)
        Object.keys(rtaConfig).forEach(
        // @ts-ignore
        function (k) { return rtaConfig[k] !== undefined ? (r[k] = rtaConfig[k]) : undefined; });
        return r;
    }
    // Determine which element loaded the script and read the config/params from it
    function sendInitialReport(rtaConfig, overridePageUrl) {
        if (!rtaConfig.hosts.length) {
            throw new Error("RTA2: config error (no host)");
        }
        var scrollingElt = document.scrollingElement || document.documentElement;
        var intersectionThreshold = 0.8;
        var updateDelta = new Map();
        var scrollDepthBand = 100;
        var pageState = {
            scrollDepth: {},
            lastTime: Date.now(),
            latency: {},
            lastHref: []
        };
        // Report initial page view
        var initialReport = getWebReport(rtaConfig.page);
        var protocol = window.location.protocol.startsWith('http') ? window.location.protocol : 'https:';
        var pages = rtaConfig.hosts.map(function (host) { return (0, base_3_0_1.RTA3)(protocol + "//" + host, rtaConfig.reporter || "GenericJS", initialReport, rtaConfig.referrerOverride || document.referrer, overridePageUrl || rtaConfig.overridePageUrl || window.location.href); });
        var pageEvents = {};
        var Rta = {
            defer: function (key) {
                flushEvents();
                pages.forEach(function (p) { return p.defer(key); });
            },
            deferred: function (key, f) {
                pages.forEach(function (p) { return p.deferred(key, f.map(function (ev) { return (__assign({ dwell: null }, ev)); })); });
            },
            sendEvent: function (ev) {
                pages.forEach(function (page) { return page.event(ev); });
            },
            updateReport: function (ev) {
                var wu = { dwell: Date.now() - initialReport.ts };
                var updated = false;
                Object.keys(ev).forEach(function (k) {
                    // @ts-ignore: there must be a nice way of typing this
                    if (updated || (updated = ev[k] && initialReport[k] != ev[k])) {
                        initialReport[k] = wu[k] = ev[k];
                    }
                });
                if (updated)
                    pages.forEach(function (page) { return page.event(wu); });
            },
            pageEvent: function (events) {
                if (events && typeof events === 'object')
                    Object.assign(pageEvents, events);
            },
            videoEvent: function (ve) {
                if (!ve.id || !(ve === null || ve === void 0 ? void 0 : ve.action.startsWith('video.')))
                    return; // Bad video event
                if (ve.action === 'video.progress' || ve.action === 'video.content-completed') {
                    ve.unattended = !pageState.lastInteraction;
                    Rta.sendEvent(ve);
                }
                else {
                    var vie = __assign(__assign({}, initialReport), ve);
                    Rta.sendEvent(vie);
                }
            },
            forceNextExit: function (href, trackSrc, pos) {
                pageState.lastHref.push([href, trackSrc ? trackSrc : null, Math.floor(pos / scrollDepthBand), null]);
            },
            // Available ONLY for the v2->v3 adapters, these are NOT
            // part of v3 API
            _: {
                flush: function () { },
                stopTrackingThisPage: function () { },
                pages: pages
            }
        };
        // Initialse web vitals
        function _saveCWV(v) { pageState.latency[v.name] = v.value; }
        (0, index_1.getCLS)(_saveCWV, true);
        (0, index_1.getFCP)(_saveCWV, true);
        (0, index_1.getFID)(_saveCWV, true);
        (0, index_1.getLCP)(_saveCWV, true);
        (0, index_1.getTTFB)(_saveCWV);
        function flushEvents() {
            var update = getWebUpdate(initialReport, pageEvents);
            pages.forEach(function (page) { return page.event(update); });
        }
        Rta._.flush = flushEvents;
        Rta._.stopTrackingThisPage = function () {
            // Remove all the eventHandlers, timers and observers
            deInit();
            // ...and send any results
            flushEvents();
            // This page is now not being tracked
            Rta._.flush = Rta._.stopTrackingThisPage = function () { };
        };
        // Start up the eventHandlers, timers & observers
        var deInit = function () { };
        if (rtaConfig.pageSelector ? document.querySelector(rtaConfig.pageSelector) : document.body)
            deInit = completeInit();
        else
            deInit = addListener(window, 'DOMContentLoaded', function () {
                deInit();
                deInit = completeInit();
            });
        if (rtaConfig.exportedAs && typeof rtaConfig.exportedAs === 'string') {
            // @ts-ignore: forced export
            window[rtaConfig.exportedAs] = Rta;
        }
        return Rta;
        /* Internal implementation */
        function completeInit() {
            var contentElt = (rtaConfig.pageSelector && document.querySelector(rtaConfig.pageSelector)) || document.body;
            // Report on page unload/hide, etc
            var removeHandlers = setupEventHandlers(initialReport, contentElt, flushEvents);
            var removeObservers = function () { };
            return function () {
                removeHandlers();
                removeObservers();
            };
        }
        // Legacy compatability with MoL reporting
        // Other sites should supply their own versions in the script 'page' data
        function getDefaultSwVersions() {
            var global = window;
            var swVersions = {};
            if (global.adverts) {
                swVersions.adverts = global.adverts.version;
            }
            if (global.PageCriteria) {
                swVersions.cljNode = global.PageCriteria.cljNode;
                swVersions.cljVersion = global.PageCriteria.cljVersion;
            }
            if (global.fbiaHtmlVersion) {
                swVersions.fbiaHtmlVersion = global.fbiaHtmlVersion;
            }
            if (global.DM && typeof global.DM.getPageMetadata === "function") {
                var dmpm = global.DM.getPageMetadata();
                if (dmpm) {
                    swVersions.bundle = dmpm.bundleVersion;
                    swVersions.syncBundle = dmpm.syncBundleVersion;
                    swVersions.asyncBundle = dmpm.asyncBundleVersion;
                    swVersions.videoBundle = dmpm.videoBundleVersion;
                }
            }
            return swVersions;
        }
        // Generate the initial report from the browser API
        function getWebReport(args) {
            var _a, _b, _c;
            // Browser generic
            var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            var memory = performance.memory || console.memory;
            // Page defaults (can be over-ridden/appended by args) derived from generic DOM elements
            // MoL hackery - get the keywords from the meta tags, which is safe as Metro, iNews also supply them
            var title = (args === null || args === void 0 ? void 0 : args.title) || ((_a = document.head.querySelector('meta[property="og:title"]')) === null || _a === void 0 ? void 0 : _a.content) || document.title;
            var searchTitle = (_b = document.head.querySelector('meta[property="mol:headline"]')) === null || _b === void 0 ? void 0 : _b.content;
            var metaTags = document.querySelector('meta[name=news_keywords]') || document.querySelector('meta[name=keywords]');
            var tags = [];
            try {
                new Set(__spreadArray(__spreadArray(__spreadArray([], asStringArray(args === null || args === void 0 ? void 0 : args.tags), true), ((metaTags === null || metaTags === void 0 ? void 0 : metaTags.content.split(',')) || []), true), (title.match(/(^|\W)(demi rose|rita ora|nudity|nude|sex|sexual|bikini|lingerie|busty|naked|boobs|skimpy|topless|thong|porn|orgasm|racy)(\W|$)/i) ? ["Commercially sensitive"] : []), true).map(function (t) { return t.trim(); }).filter(function (t) { return t && t.length > 0; })).forEach(function (t) { return tags.push(t); });
            }
            catch (ex) {
                console.log("Set.forEach unimplemented");
            }
            // Values that might be derived from MoL-specific global values
            var swVersions = Object.assign(getDefaultSwVersions(), args === null || args === void 0 ? void 0 : args.swVersions);
            var molABTest = asStringArray((args === null || args === void 0 ? void 0 : args.molABTest)
                // MOL-specific implementation for molABTest cookie
                || window.molABTest
                || (function () {
                    try {
                        // @ts-ignore
                        return JSON.parse(decodeURIComponent(document.cookie.split(/; ?/).filter(function (s) { return s.indexOf("molABTest") == 0; })[0].split("=")[1]));
                    }
                    catch (ex) { }
                })());
            var trackSrc = undefined;
            try {
                var trackSrcRta = JSON.parse(localStorage.getItem('trackSrcRta'));
                if (Date.now() - trackSrcRta[0] < 9876 && typeof trackSrcRta[1] === 'string' && trackSrcRta[1])
                    trackSrc = trackSrcRta[1];
                window.postMessage({ type: 'rta-trackSrc', trackSrc: trackSrc }, '*');
            }
            catch (ex) { }
            localStorage.removeItem('trackSrcRta');
            var global = window;
            return __assign(__assign({}, Object.keys(args).reduce(function (a, k) {
                if (args[k] && !['tags', 'title', 'autoRefresh', 'swVersions', 'molABTest', 'authors', 'clientSegment'].includes(k))
                    a[k] = args[k];
                return a;
            }, {})), { 
                // Required
                ts: Date.now(), 
                // RTA args
                trackSrc: trackSrc, 
                // Page args
                authors: asStringArray(args === null || args === void 0 ? void 0 : args.authors), rp: (args === null || args === void 0 ? void 0 : args.rp) || 'other', tags: tags.length ? tags : undefined, title: title, searchTitle: searchTitle && searchTitle.length > title.length ? searchTitle : undefined, autoRefresh: args === null || args === void 0 ? void 0 : args.autoRefresh, swVersions: swVersions, molABTest: molABTest, 
                // Browser generic
                notificationPermissions: (_c = window.Notification) === null || _c === void 0 ? void 0 : _c.permission, connection: connection ? {
                    type: connection.type,
                    downlink: connection.downlink,
                    downlinkMax: connection.downlinkMax,
                    effectiveType: connection.effectiveType,
                    rtt: connection.rtt
                } : undefined, startMemory: memory ? {
                    jsHeapSizeLimit: memory.jsHeapSizeLimit,
                    totalJSHeapSize: memory.totalJSHeapSize,
                    usedJSHeapSize: memory.usedJSHeapSize
                } : undefined });
        }
        function flatMap(m) {
            var e = m.entries();
            var z;
            var r = [];
            while (z = e.next()) {
                if (z.value !== undefined)
                    r.push(z.value);
                if (z.done)
                    return r;
            }
            return r;
        }
        function copy(o) {
            if (typeof o === 'object' && o) {
                return Array.isArray(o)
                    ? o.map(function (e) { return copy(e); })
                    : Object.keys(o).reduce(function (a, k) {
                        a[k] = copy(o[k]);
                        return a;
                    }, {});
            }
            else
                return o;
        }
        // Merge "current" in into acc, returning the sparse
        // object that represents the change
        function diff(current, cumulative) {
            var a = {};
            Object.keys(current).forEach(function (_k) {
                var k = _k;
                var src = current[k];
                var acc = cumulative[k];
                // Like ES, we IGNORE `undefined`. Only defined values
                // are considered updates. `undefined` means "no change"
                if (src !== undefined) {
                    if (typeof acc !== typeof src) {
                        // different type
                        a[k] = cumulative[k] = copy(src);
                    }
                    else {
                        if (typeof src !== 'object') {
                            // Same type, not objects
                            if (acc !== src) {
                                // different primitive value
                                a[k] = cumulative[k] = src;
                            }
                        }
                        else {
                            // Both are objects
                            if (Array.isArray(src)) {
                                // NOTE: diff excludes arrays as ES re-writes them
                                if (!acc || !Array.isArray(acc) || !src.every(function (s, i) { return s === acc[i]; })) {
                                    // The array has changed (somehow: NB not checking arrays where objects are reused!)
                                    a[k] = cumulative[k] = copy(src);
                                }
                            }
                            else if (src === null) {
                                // next is null
                                if (cumulative[k] !== null) {
                                    a[k] = cumulative[k] = src;
                                }
                            }
                            else if (!acc && src !== null) {
                                a[k] = cumulative[k] = src;
                            }
                            else {
                                // Both non-null
                                // Take account of cases where the underlying object has been re-used
                                var b = diff(src, acc);
                                if (Object.keys(b).length) {
                                    // @ts-ignore
                                    a[k] = b;
                                }
                            }
                        }
                    }
                }
            });
            return a;
        }
        function encodeScrollDepth() {
            var sd = {};
            var maxDepth = -1;
            if (pageState.scrollDepth)
                for (var dp in pageState.scrollDepth)
                    if (pageState.scrollDepth[dp] > 0) {
                        maxDepth = Math.max(maxDepth, parseInt(dp, 36));
                        sd[dp] = Math.log(pageState.scrollDepth[dp] || 1) * 10 + 0.5 | 0;
                    }
            return {
                scrollDepth: sd,
                scrollDepthMax: maxDepth >= 0 ? maxDepth : undefined
            };
        }
        // Generate the report update, for example on page interaction/unload events
        function getWebUpdate(initialReport, pageEvents) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var memory = performance.memory || console.memory;
            var timing = performance.timing;
            var now = Date.now();
            function kbytes(n) {
                return Math.round(n / 1024) * 1024;
            }
            var update = __assign(__assign({ pageEvents: pageEvents ? __assign({}, pageEvents) : undefined, perf: pageState.latency, exitMemory: memory && initialReport.startMemory ? {
                    // Rounded, to improve delta performance
                    jsHeapSizeLimit: kbytes(memory.jsHeapSizeLimit),
                    totalJSHeapSize: kbytes(memory.totalJSHeapSize),
                    usedJSHeapSize: kbytes(memory.usedJSHeapSize),
                    jsHeapSizeLimitDelta: kbytes(memory.jsHeapSizeLimit - initialReport.startMemory.jsHeapSizeLimit),
                    totalJSHeapSizeDelta: kbytes(memory.totalJSHeapSize - initialReport.startMemory.totalJSHeapSize),
                    usedJSHeapSizeDelta: kbytes(memory.usedJSHeapSize - initialReport.startMemory.usedJSHeapSize)
                } : undefined, dwell: Date.now() - initialReport.ts, requestTime: (timing === null || timing === void 0 ? void 0 : timing.requestStart) ? timing.requestStart - timing.navigationStart : undefined, domInteractive: (timing === null || timing === void 0 ? void 0 : timing.domInteractive) ? timing.domInteractive - timing.requestStart : undefined, domLoaded: (timing === null || timing === void 0 ? void 0 : timing.domContentLoadedEventEnd) ? timing.domContentLoadedEventEnd - timing.requestStart : undefined, domComplete: (timing === null || timing === void 0 ? void 0 : timing.domComplete) ? timing.domComplete - timing.requestStart : undefined, load: (timing === null || timing === void 0 ? void 0 : timing.loadEventEnd) ? timing.loadEventEnd - timing.requestStart : undefined, lastEvent: pageState.lastEvent, selectedText: pageState.selectedText, unattended: !pageState.lastInteraction, click: pageState.click, lastHref: ((_a = pageState.lastHref) === null || _a === void 0 ? void 0 : _a.length) ? pageState.lastHref : undefined }, encodeScrollDepth()), { 
                // MOL-specific data, included for compatability at unload time, but not defined for non-MOL sites
                adReportData: (_c = (_b = window.adverts) === null || _b === void 0 ? void 0 : _b.getRtaReport) === null || _c === void 0 ? void 0 : _c.call(_b), revenue: (_e = (_d = window.adverts) === null || _d === void 0 ? void 0 : _d.getRevenueSummary) === null || _e === void 0 ? void 0 : _e.call(_d), impressions: (_h = (_g = (_f = window.adverts) === null || _f === void 0 ? void 0 : _f.getRendered) === null || _g === void 0 ? void 0 : _g.call(_f)) === null || _h === void 0 ? void 0 : _h.length });
            var cumulativeUpdate = updateDelta.get(initialReport);
            if (cumulativeUpdate) {
                var delta = diff(update, cumulativeUpdate);
                delta.dwell = update.dwell;
                return delta;
            }
            else {
                updateDelta.set(initialReport, copy(update));
                return update;
            }
        }
        // Set up event handlers to track pageState and update the page report
        function setupEventHandlers(initialReport, contentElt, flushEvents) {
            var hidden;
            var visibilityChange = undefined;
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            }
            else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
            }
            else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }
            function interaction(handler) {
                return function (e) {
                    pageState.lastInteraction = { type: e.type, ts: Date.now() };
                    handler(e);
                };
            }
            function onScroll(e) {
                if (e)
                    recordEventLatency(e);
                var now = Date.now();
                var period = Math.floor(Math.min(30 * 60 * 1000, now - pageState.lastTime) / 50);
                if (period) {
                    var thisPos = scrollingElt.scrollTop / scrollDepthBand | 0;
                    var endPos = (pageState.lastPos || 0) + (window.innerHeight / scrollDepthBand | 0);
                    pageState.scrollDepth = pageState.scrollDepth || {};
                    for (var p = (pageState.lastPos || 0); p != endPos; p += 1) {
                        var pos = void 0;
                        if (p > 500)
                            pos = 'dw';
                        else
                            pos = p.toString(36);
                        pageState.scrollDepth[pos] = (pageState.scrollDepth[pos] || 0) + period;
                    }
                    pageState.lastTime = now;
                    pageState.lastPos = thisPos;
                }
            }
            function pageShow() {
                if (pageState.hiddenTime) {
                    var lostTime = Date.now() - pageState.hiddenTime;
                    initialReport.ts += lostTime;
                }
                pageState.unloaded = false;
                pageState.hiddenTime = undefined;
            }
            function pageHide(e) {
                beforeUnload(e);
                pageState.hiddenTime = Date.now();
            }
            function handleVisibilityChange(e) {
                if (document[hidden]) {
                    pageHide(e);
                }
                else {
                    pageShow();
                }
            }
            function beforeUnload(e) {
                var _a;
                if (pageState.unloaded)
                    return;
                onScroll(e);
                pageState.lastEvent = e.type;
                pageState.unloaded = true;
                flushEvents();
                pageState.hiddenTime = Date.now();
                //if (e.type === 'beforeunload') {
                var trackSrc = (_a = pageState.lastHref[pageState.lastHref.length - 1]) === null || _a === void 0 ? void 0 : _a[1];
                if (trackSrc)
                    localStorage.setItem('trackSrcRta', JSON.stringify([Date.now(), trackSrc]));
                else
                    localStorage.removeItem('trackSrcRta');
                //}
            }
            function recordEventLatency(e) {
                var eventLatency = (e.timeStamp >= 1e12 ? Date.now() : performance.now()) - e.timeStamp | 0;
                if (eventLatency) {
                    var latency = pageState.latency;
                    if (!latency['first_' + e.type]) {
                        latency['max_' + e.type] = (latency['first_' + e.type] = eventLatency);
                    }
                    else {
                        if (latency['max_' + e.type] < eventLatency)
                            latency['max_' + e.type] = eventLatency;
                    }
                }
            }
            function recordLastClick(e) {
                var _a, _b, _c, _d;
                function selectorOf(e) {
                    var attr = e.getAttribute("data-track");
                    if (attr)
                        return '[data-track="' + attr + '"]';
                    if (e.id)
                        return e.tagName.toLowerCase() + "#" + e.id;
                    return e.tagName.toLowerCase() + (e.className ? "." + e.className.toString().split(/\s+/)[0] : "");
                }
                recordEventLatency(e);
                var path = e.composedPath();
                var exitHref = undefined;
                var trackSrc;
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var e_1 = path_1[_i];
                    if (!exitHref && (e_1 instanceof HTMLAnchorElement) && e_1.href) {
                        exitHref = e_1;
                        trackSrc = e_1.getAttribute('data-track') || e_1.getAttribute('data-track-module');
                    }
                    if (exitHref && !trackSrc && (trackSrc = (_b = (_a = e_1).getAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, 'data-track-module')))
                        break;
                }
                var href = exitHref === null || exitHref === void 0 ? void 0 : exitHref.href;
                if (href) {
                    var trackRta = void 0;
                    try {
                        trackRta = JSON.parse(((_d = (_c = __spreadArray([], path, true).find(function (e) { var _a; return e instanceof HTMLElement && ((_a = e.dataset) === null || _a === void 0 ? void 0 : _a.trackRta); })) === null || _c === void 0 ? void 0 : _c.dataset) === null || _d === void 0 ? void 0 : _d.trackRta) || "null");
                    }
                    catch (ex) {
                        trackRta = null;
                    }
                    var idx = pageState.lastHref.findIndex(function (s) { return s[0] == href; });
                    if (idx >= 0)
                        pageState.lastHref.splice(idx, 1);
                    var r = exitHref.getBoundingClientRect();
                    var pos = (r.top + r.bottom) / 2 + scrollingElt.scrollTop;
                    pageState.lastHref.push([href, trackSrc ? trackSrc : null, Math.floor(pos / scrollDepthBand), trackRta]);
                }
                /* Walk up the tree until we get to a fixed position (the elt doesn't scroll)
                  or a document-like content node, which we choose to define as one of:
          
                 contentElt - specified by the config
                 scollingElt - determined by the page behaviout
                 body
                */
                var fixed = path.find(function (elt) {
                    var _a;
                    return elt instanceof Element
                        && ((_a = window.getComputedStyle(elt)) === null || _a === void 0 ? void 0 : _a.position) === 'fixed';
                });
                var found = fixed || path.find(function (elt) { return elt instanceof Element
                    && (elt === scrollingElt
                        || elt === contentElt
                        || elt === document.body); });
                if (found) {
                    var b = found.getBoundingClientRect();
                    pageState.click = {
                        x: e.clientX - b.left,
                        y: e.clientY - b.top,
                        top: selectorOf(found)
                    };
                    if (!fixed && (scrollingElt.contains(found) || scrollingElt === found))
                        pageState.click.y += scrollingElt.scrollTop;
                }
            }
            var eventListeners = [
                addListener(document, 'mousemove', interaction(recordEventLatency)),
                addListener(document, 'click', interaction(recordLastClick)),
                addListener(document, 'contextmenu', interaction(recordLastClick)),
                addListener(document, 'selectstart', interaction(function () { pageState.selectedText = true; })),
                addListener(window, 'pagehide', pageHide),
                addListener(window, 'pageshow', pageShow),
                addListener(window, 'beforeunload', beforeUnload)
            ];
            if (visibilityChange)
                eventListeners.push(addListener(document, visibilityChange, handleVisibilityChange));
            var scrollListeners = [addListener(document, "scroll", findScrollElt)];
            var nodes = document.querySelectorAll("*");
            nodes.forEach(function (n) { return scrollListeners.push(addListener(n, "scroll", findScrollElt)); });
            function findScrollElt(e) {
                if (e.target instanceof Element || e.target instanceof Document) {
                    scrollListeners.forEach(function (remover) { return remover(); });
                    scrollListeners = [];
                    scrollingElt = e.target === document ? document.documentElement : e.target;
                    eventListeners.push(addListener(e.target, 'scroll', interaction(onScroll)));
                }
            }
            // Worst case - periodically send update
            var pingTimer;
            (function ping(t) {
                pingTimer = setTimeout(function () {
                    onScroll();
                    flushEvents();
                    ping(t * 1.4);
                }, t);
            })(7500);
            return function removeEventHandlers() {
                clearTimeout(pingTimer);
                scrollListeners.forEach(function (remover) { return remover(); });
                eventListeners.forEach(function (remover) { return remover(); });
            };
        }
        function isImg(e) {
            return ('getBoundingClientRect' in e) && e.nodeName === 'IMG';
        }
        function isVideo(e) {
            return ('getBoundingClientRect' in e) && e.nodeName === 'VIDEO';
        }
        function getSrc(e) {
            var _a;
            if (isImg(e))
                return e.dataset.src || e.src;
            if (isVideo(e))
                return e.src || ((_a = e.querySelector('source')) === null || _a === void 0 ? void 0 : _a.src);
        }
    }
    function asStringArray(a) {
        if (typeof a === 'string')
            return [a];
        if (Array.isArray(a))
            return a.filter(function (s) { return typeof s === 'string'; });
        return [];
    }
    var listenOpts = {
        capture: true,
        passive: true
    };
    function addListener(n, event, handler) {
        n.addEventListener(event, handler, listenOpts);
        return function () { return n.removeEventListener(event, handler, listenOpts); };
    }
});
define("rta-v2-adapter", ["require", "exports", "base-web-report"], function (require, exports, base_web_report_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.v2adapter = v2adapter;
    function v2adapter(params, loader) {
        var _a, _b;
        if (loader === void 0) { loader = document.currentScript; }
        /*
        // Set a cookie for AMP: At present this doesn't work - something to do with domains, probably
        rta3.then(rta3 => rta3._.pages[0]?.ids).then(ids => {
            if (ids) {
              document.cookie = `rta3=${btoa(JSON.stringify(ids))}; SameSite=None; Secure; Expires=${new Date(Date.now()+366*86400000).toString()}`;
            }
        });
        */
        if (!loader || loader.nodeName != "SCRIPT") {
            console.warn("RTA: Bad configuration");
            return;
        }
        var dataHosts = params.hosts
            || ((_a = loader.getAttribute("data-hosts")) === null || _a === void 0 ? void 0 : _a.split(','))
            || [(_b = loader.src.match(/(https?:\/\/)([^/]+)/)) === null || _b === void 0 ? void 0 : _b[2]];
        if (!dataHosts[0]) {
            console.warn("RTA: Bad configuration");
            return;
        }
        var peBuffer = {};
        var setRta3;
        var rta3 = new Promise(function (resolve) { return setRta3 = resolve; });
        var reInitialise = false;
        function tedEvent(name, args) {
            switch (name) {
                case 'cview':
                case 'view':
                case 'report':
                    if (reInitialise) {
                        rta3.then(function (rta3) { return rta3._.stopTrackingThisPage(); });
                        peBuffer = {};
                        rta3 = new Promise(function (resolve) { return setRta3 = resolve; });
                    }
                    reInitialise = true;
                    // Fix up v2 pages which are supplying tags as a comma-sep string
                    if (typeof (args === null || args === void 0 ? void 0 : args.tags) === 'string')
                        args.tags = (args === null || args === void 0 ? void 0 : args.tags).split(",");
                    // Fix up v2 pages which are reporting "author", and not "authors"
                    if (!args.authors && typeof (args === null || args === void 0 ? void 0 : args.author) === 'string') {
                        args.authors = [args === null || args === void 0 ? void 0 : args.author];
                        delete args.author;
                    }
                    // Hack for tabbed mobile home page: use args.channel if it looks like a mobile home page tab name
                    var ch = void 0;
                    if ('channel' in args && typeof args.channel === 'string' && window.location.pathname !== args.channel + '/index.html' && (ch = args.channel.match((/\/((us|au)?home)\/(.*)/))) && (ch === null || ch === void 0 ? void 0 : ch[1]) && (ch === null || ch === void 0 ? void 0 : ch[3])) {
                        var effectiveUrl = window.location.href.replace("/" + ch[1], args.channel);
                        setRta3((0, base_web_report_1.sendInitialReport)(__assign(__assign({}, params), { page: args, hosts: dataHosts }), effectiveUrl));
                    }
                    else {
                        setRta3((0, base_web_report_1.sendInitialReport)(__assign(__assign({}, params), { page: args, hosts: dataHosts })));
                    }
                    break;
                case 'page_event':
                    {
                        var pe_1 = args;
                        if (pe_1.name.startsWith('paywall_signup') || pe_1.name == 'paywall_click') {
                            // v3.13.0: implement defer for paywall signup events
                            rta3.then(function (rta3) { return rta3.defer('paywall'); });
                        }
                        else if ('value' in pe_1 && pe_1.name.endsWith('_conversion')) {
                            // v3.13.0: implement deferred for paywall conversion events
                            rta3.then(function (rta3) {
                                var _a;
                                return rta3.deferred('paywall', [{ pageEvents: (_a = {}, _a[pe_1.name] = pe_1.value, _a) }]);
                            });
                            return; // Already applied to the signup page - don't send on the current page
                        }
                        switch (pe_1.action) {
                            case 'increment':
                                peBuffer[pe_1.name] = (Number(peBuffer[pe_1.name]) || 0) + 1;
                                break;
                            default: // 'set'
                                peBuffer[pe_1.name] = pe_1.value;
                                break;
                        }
                        rta3.then(function (rta3) {
                            var _a;
                            return rta3.pageEvent((_a = {}, _a[pe_1.name] = peBuffer[pe_1.name], _a));
                        });
                    }
                    break;
                case 'video-event':
                    rta3.then(function (rta3) { return rta3.videoEvent(args); });
                    break;
                case 'push':
                case 'share':
                    rta3.then(function (rta3) { return rta3.sendEvent(args); });
                    break;
                case 'fff-view':
                    rta3.then(function (rta3) { return rta3.sendEvent({
                        legacyEventName: name,
                        legacyEvent: args
                    }); });
                    break;
                case 'update':
                    rta3.then(function (rta3) { return rta3.updateReport(args); });
                    break;
                default:
                    if (name.startsWith('fff-buy')) {
                        rta3.then(function (rta3) { return rta3.sendEvent({
                            legacyEventName: name,
                            legacyEvent: args
                        }); });
                    }
                    // else some unknown v2 event - we just eat them
                    break;
            }
        }
        var RTA = {
            // See https://github.com/MailOnline/fbi-agent/blob/f84dd65a2c7403724560a0a0cfe956f06e3692d7/resources/templates/facebook/share-bar.html#L1-L19
            ito: function (_) { },
            geo: function (_) { },
            tedEvent: tedEvent,
            tedFinalEvent: function (name, args) {
                RTA.tedEvent(name, args);
                rta3.then(function (rta3) { return rta3._.flush(); });
            },
            forceNextExit: function (href, trackSrc, pos) {
                rta3.then(function (rta3) { return rta3.forceNextExit(href, trackSrc, pos); });
            },
            // See https://github.com/MailOnline/mol-fe-news-search-ui/blob/68582a2971b10724d178740141f0a2e00c40f572/src/client/webPush/macros/buildRTATrackMacro.ts#L7
            // See https://github.com/MailOnline/mol-fe-sync-bundler/blob/next-release/packages/mol-fe-browser-notifications-sync/src/marcos/buildRTATrack.js#L8
            get hosts() {
                return function () { return dataHosts; };
            },
            // See https://github.com/MailOnline/mol-fe-sync-bundler/blob/next-release/packages/mol-fe-browser-notifications-sync/src/marcos/buildRTATrack.js#L8
            get ruids() {
                return rta3.then(function (rta3) { return Promise.all(rta3._.pages.map(function (page) { return page.ids; }))
                    .then(function (pgIds) { return pgIds
                    .reduce(function (a, id, idx) {
                    a[rta3._.pages[idx].rta3host] = id;
                    return a;
                }, {}); }); });
            },
            get ids() {
                return rta3.then(function (rta3) { return rta3._.pages[0].ids.then(function (i) {
                    var _a;
                    return i && {
                        user: String(i.u.id),
                        created: i.u.ts,
                        // See https://github.com/MailOnline/mol-fe-news-search-ui/blob/68582a2971b10724d178740141f0a2e00c40f572/src/client/tracking/index.ts#L77
                        page: i.phid,
                        visit: String(i.v.id) + ".",
                        loyalty: Math.min(((_a = i.l) === null || _a === void 0 ? void 0 : _a.length) || 0, 9)
                    };
                }); });
            }
        };
        window.RTA = RTA;
    }
});
define("bundle.v2-mol", ["require", "exports", "rta-v2-adapter"], function (require, exports, rta_v2_adapter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, rta_v2_adapter_1.v2adapter)({
        pageSelector: '#page-container,#mobile-content > .scrollable-content'
    });
});
;
  })();

