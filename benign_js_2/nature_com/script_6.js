/* 元のURL: https://nature.com */

    (function(w, d) {
        w.idpVerifyPrefix = 'https://verify.nature.com';
        w.ra21Host = 'https://wayf.springernature.com';
        var moduleSupport = (function() {
            return 'noModule' in d.createElement('script');
        })();

        if (w.config.mustardcut === true) {
            w.loader = {
                index: 0,
                registered: [],
                scripts: [
                     
                        {src: '/static/js/journal-homepage-es6-bundle-a6d0d5d2c1.js', test: 'journal-homepage-js', module: true},
                        {src: '/static/js/journal-homepage-es5-bundle-42f73acb74.js', test: 'journal-homepage-js', nomodule: true}
                    
                ].filter(function (s) {
                    if (s.src === null) return false;
                    if (moduleSupport && s.nomodule) return false;
                    return !(!moduleSupport && s.module);
                }),

                register: function (value) {
                    this.registered.push(value);
                },

                ready: function () {
                    if (this.registered.length === this.scripts.length) {
                        this.registered.forEach(function (fn) {
                            if (typeof fn === 'function') {
                                setTimeout(fn, 0); 
                            }
                        });
                        this.ready = function () {};
                    }
                },

                insert: function (s) {
                    var t = d.getElementById('js-position' + this.index);
                    if (t && t.insertAdjacentElement) {
                        t.insertAdjacentElement('afterend', s);
                    } else {
                        d.head.appendChild(s);
                    }
                    ++this.index;
                },

                createScript: function (script, beforeLoad) {
                    var s = d.createElement('script');
                    s.id = 'js-position' + (this.index + 1);
                    s.setAttribute('data-test', script.test);
                    if (beforeLoad) {
                        s.defer = 'defer';
                        s.onload = function () {
                            if (script.noinit) {
                                loader.register(true);
                            }
                            if (d.readyState === 'interactive' || d.readyState === 'complete') {
                                loader.ready();
                            }
                        };
                    } else {
                        s.async = 'async';
                    }
                    s.src = script.src;
                    return s;
                },

                init: function () {
                    this.scripts.forEach(function (s) {
                        loader.insert(loader.createScript(s, true));
                    });

                    d.addEventListener('DOMContentLoaded', function () {
                        loader.ready();
                        var conditionalScripts;
                        
                            conditionalScripts = [
                                {match: 'math,span.mathjax-tex', src: '/static/js/math-es6-bundle-5e408a4c18.js', test: 'math-js', module: true},
                                {match: 'math,span.mathjax-tex', src: '/static/js/math-es5-bundle-d614c7d7ce.js', test: 'math-js', nomodule: true}
                            ];
                        

                        if (conditionalScripts) {
                            conditionalScripts.filter(function (script) {
                                return !!document.querySelector(script.match) && !((moduleSupport && script.nomodule) || (!moduleSupport && script.module));
                            }).forEach(function (script) {
                                loader.insert(loader.createScript(script));
                            });
                        }
                    }, false);
                }
            };
            loader.init();
        }
    })(window, document);


