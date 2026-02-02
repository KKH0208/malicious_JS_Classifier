/* 元のURL: https://opendns.com */
// 外部JS: https://opendns.com/assets/js/combined-footer.min.js
document.body.classList.contains("business-section") &&
    "enterprise-security" !== window.location.pathname.replace(/\//g, "") &&
    (document.cookie = "isExcludedFromUmbrellaTest=true;path=/"), function() {
    var __indexOf =
            [].indexOf ||
            function(item) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this && this[i] === item) return i;
                return -1;
            },
        __slice = [].slice;
    !(function(root, factory) {
        return "function" == typeof define && define.amd
            ? define("waypoints", ["jquery"], function($) {
                  return factory($, root);
              })
            : factory(root.jQuery, root);
    })(window, function($, window) {
        var $w,
            Context,
            Waypoint,
            allWaypoints,
            contextCounter,
            contextKey,
            contexts,
            isTouch,
            jQMethods,
            methods,
            resizeEvent,
            scrollEvent,
            waypointCounter,
            waypointKey,
            wp,
            wps;
        return ($w = $(
            window
        )), (isTouch = __indexOf.call(window, "ontouchstart") >= 0), (allWaypoints = { horizontal: {}, vertical: {} }), (contextCounter = 1), (contexts = {}), (contextKey = "waypoints-context-id"), (resizeEvent = "resize.waypoints"), (scrollEvent = "scroll.waypoints"), (waypointCounter = 1), (waypointKey = "waypoints-waypoint-ids"), (wp = "waypoint"), (wps = "waypoints"), (Context = (function() {
            function Context($element) {
                var _this = this;
                (this.$element = $element), (this.element =
                    $element[0]), (this.didResize = !1), (this.didScroll = !1), (this.id =
                    "context" + contextCounter++), (this.oldScroll = {
                    x: $element.scrollLeft(),
                    y: $element.scrollTop()
                }), (this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }), (this.element[contextKey] = this.id), (contexts[
                    this.id
                ] = this), $element.bind(scrollEvent, function() {
                    var scrollHandler;
                    if (!_this.didScroll && !isTouch)
                        return (_this.didScroll = !0), (scrollHandler = function() {
                            return _this.doScroll(), (_this.didScroll = !1);
                        }), window.setTimeout(
                            scrollHandler,
                            $[wps].settings.scrollThrottle
                        );
                }), $element.bind(resizeEvent, function() {
                    var resizeHandler;
                    if (!_this.didResize)
                        return (_this.didResize = !0), (resizeHandler = function() {
                            return $[wps]("refresh"), (_this.didResize = !1);
                        }), window.setTimeout(
                            resizeHandler,
                            $[wps].settings.resizeThrottle
                        );
                });
            }
            return (Context.prototype.doScroll = function() {
                var axes,
                    _this = this;
                return (axes = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }), !isTouch ||
                    (axes.vertical.oldScroll && axes.vertical.newScroll) ||
                    $[wps]("refresh"), $.each(axes, function(aKey, axis) {
                    var direction, isForward, triggered;
                    return (triggered = []), (isForward = axis.newScroll > axis.oldScroll), (direction = isForward ? axis.forward : axis.backward), $.each(
                        _this.waypoints[aKey],
                        function(wKey, waypoint) {
                            var _ref, _ref1;
                            return axis.oldScroll < (_ref = waypoint.offset) &&
                            _ref <= axis.newScroll
                                ? triggered.push(waypoint)
                                : axis.newScroll < (_ref1 = waypoint.offset) &&
                                  _ref1 <= axis.oldScroll
                                  ? triggered.push(waypoint)
                                  : void 0;
                        }
                    ), triggered.sort(function(a, b) {
                        return a.offset - b.offset;
                    }), isForward ||
                        triggered.reverse(), $.each(triggered, function(
                        i,
                        waypoint
                    ) {
                        if (
                            waypoint.options.continuous ||
                            i === triggered.length - 1
                        )
                            return waypoint.trigger([direction]);
                    });
                }), (this.oldScroll = {
                    x: axes.horizontal.newScroll,
                    y: axes.vertical.newScroll
                });
            }), (Context.prototype.refresh = function() {
                var axes,
                    cOffset,
                    isWin,
                    _this = this;
                return (isWin = $.isWindow(
                    this.element
                )), (cOffset = this.$element.offset()), this.doScroll(), (axes = {
                    horizontal: {
                        contextOffset: isWin ? 0 : cOffset.left,
                        contextScroll: isWin ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: isWin ? 0 : cOffset.top,
                        contextScroll: isWin ? 0 : this.oldScroll.y,
                        contextDimension: isWin
                            ? $[wps]("viewportHeight")
                            : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }), $.each(axes, function(aKey, axis) {
                    return $.each(_this.waypoints[aKey], function(i, waypoint) {
                        var adjustment, elementOffset, oldOffset, _ref, _ref1;
                        if (
                            (
                                (adjustment = waypoint.options.offset),
                                (oldOffset = waypoint.offset),
                                (elementOffset = $.isWindow(waypoint.element)
                                    ? 0
                                    : waypoint.$element.offset()[
                                          axis.offsetProp
                                      ]),
                                $.isFunction(adjustment)
                                    ? (adjustment = adjustment.apply(
                                          waypoint.element
                                      ))
                                    : "string" == typeof adjustment &&
                                      (
                                          (adjustment = parseFloat(adjustment)),
                                          waypoint.options.offset.indexOf("%") >
                                              -1 &&
                                              (adjustment = Math.ceil(
                                                  axis.contextDimension *
                                                      adjustment /
                                                      100
                                              ))
                                      ),
                                (waypoint.offset =
                                    elementOffset -
                                    axis.contextOffset +
                                    axis.contextScroll -
                                    adjustment),
                                (!waypoint.options.onlyOnScroll ||
                                    null == oldOffset) &&
                                    waypoint.enabled
                            )
                        )
                            return null !== oldOffset &&
                            oldOffset < (_ref = axis.oldScroll) &&
                            _ref <= waypoint.offset
                                ? waypoint.trigger([axis.backward])
                                : null !== oldOffset &&
                                  oldOffset > (_ref1 = axis.oldScroll) &&
                                  _ref1 >= waypoint.offset
                                  ? waypoint.trigger([axis.forward])
                                  : null === oldOffset &&
                                    axis.oldScroll >= waypoint.offset
                                    ? waypoint.trigger([axis.forward])
                                    : void 0;
                    });
                });
            }), (Context.prototype.checkEmpty = function() {
                if (
                    $.isEmptyObject(this.waypoints.horizontal) &&
                    $.isEmptyObject(this.waypoints.vertical)
                )
                    return this.$element.unbind(
                        [resizeEvent, scrollEvent].join(" ")
                    ), delete contexts[this.id];
            }), Context;
        })()), (Waypoint = (function() {
            function Waypoint($element, context, options) {
                var idList, _ref;
                "bottom-in-view" === options.offset &&
                    (options.offset = function() {
                        var contextHeight;
                        return (contextHeight = $[wps](
                            "viewportHeight"
                        )), $.isWindow(context.element) ||
                            (contextHeight = context.$element.height()), contextHeight -
                            $(this).outerHeight();
                    }), (this.$element = $element), (this.element =
                    $element[0]), (this.axis = options.horizontal
                    ? "horizontal"
                    : "vertical"), (this.callback =
                    options.handler), (this.context = context), (this.enabled =
                    options.enabled), (this.id =
                    "waypoints" +
                    waypointCounter++), (this.offset = null), (this.options = options), (context.waypoints[
                    this.axis
                ][this.id] = this), (allWaypoints[this.axis][
                    this.id
                ] = this), (idList =
                    null != (_ref = this.element[waypointKey])
                        ? _ref
                        : []), idList.push(this.id), (this.element[
                    waypointKey
                ] = idList);
            }
            return (Waypoint.prototype.trigger = function(args) {
                if (this.enabled)
                    return null != this.callback &&
                        this.callback.apply(this.element, args), this.options
                        .triggerOnce
                        ? this.destroy()
                        : void 0;
            }), (Waypoint.prototype.disable = function() {
                return (this.enabled = !1);
            }), (Waypoint.prototype.enable = function() {
                return this.context.refresh(), (this.enabled = !0);
            }), (Waypoint.prototype.destroy = function() {
                return delete allWaypoints[this.axis][this.id], delete this
                    .context.waypoints[this.axis][
                    this.id
                ], this.context.checkEmpty();
            }), (Waypoint.getWaypointsByElement = function(element) {
                var all, ids;
                return (ids = element[waypointKey])
                    ? (
                          (all = $.extend(
                              {},
                              allWaypoints.horizontal,
                              allWaypoints.vertical
                          )),
                          $.map(ids, function(id) {
                              return all[id];
                          })
                      )
                    : [];
            }), Waypoint;
        })()), (methods = {
            init: function(f, options) {
                var _ref;
                return (options = $.extend(
                    {},
                    $.fn[wp].defaults,
                    options
                )), null == (_ref = options.handler) &&
                    (options.handler = f), this.each(function() {
                    var $this, context, contextElement, _ref1;
                    return ($this = $(
                        this
                    )), (contextElement = null != (_ref1 = options.context) ? _ref1 : $.fn[wp].defaults.context), $.isWindow(contextElement) || (contextElement = $this.closest(contextElement)), (contextElement = $(contextElement)), (context = contexts[contextElement[0][contextKey]]), context || (context = new Context(contextElement)), new Waypoint($this, context, options);
                }), $[wps]("refresh"), this;
            },
            disable: function() {
                return methods._invoke.call(this, "disable");
            },
            enable: function() {
                return methods._invoke.call(this, "enable");
            },
            destroy: function() {
                return methods._invoke.call(this, "destroy");
            },
            prev: function(axis, selector) {
                return methods._traverse.call(this, axis, selector, function(
                    stack,
                    index,
                    waypoints
                ) {
                    if (index > 0) return stack.push(waypoints[index - 1]);
                });
            },
            next: function(axis, selector) {
                return methods._traverse.call(this, axis, selector, function(
                    stack,
                    index,
                    waypoints
                ) {
                    if (index < waypoints.length - 1)
                        return stack.push(waypoints[index + 1]);
                });
            },
            _traverse: function(axis, selector, push) {
                var stack, waypoints;
                return null == axis && (axis = "vertical"), null == selector &&
                    (selector = window), (waypoints = jQMethods.aggregate(
                    selector
                )), (stack = []), this.each(function() {
                    var index;
                    return (index = $.inArray(
                        this,
                        waypoints[axis]
                    )), push(stack, index, waypoints[axis]);
                }), this.pushStack(stack);
            },
            _invoke: function(method) {
                return this.each(function() {
                    var waypoints;
                    return (waypoints = Waypoint.getWaypointsByElement(
                        this
                    )), $.each(waypoints, function(i, waypoint) {
                        return waypoint[method](), !0;
                    });
                }), this;
            }
        }), ($.fn[wp] = function() {
            var args, method;
            return (method = arguments[0]), (args =
                2 <= arguments.length
                    ? __slice.call(arguments, 1)
                    : []), methods[method]
                ? methods[method].apply(this, args)
                : $.isFunction(method)
                  ? methods.init.apply(this, arguments)
                  : $.isPlainObject(method)
                    ? methods.init.apply(this, [null, method])
                    : method
                      ? $.error(
                            "The " +
                                method +
                                " method does not exist in jQuery Waypoints."
                        )
                      : $.error(
                            "jQuery Waypoints needs a callback function or handler option."
                        );
        }), ($.fn[wp].defaults = { context: window, continuous: !0, enabled: !0, horizontal: !1, offset: 0, triggerOnce: !1 }), (jQMethods = {
            refresh: function() {
                return $.each(contexts, function(i, context) {
                    return context.refresh();
                });
            },
            viewportHeight: function() {
                var _ref;
                return null != (_ref = window.innerHeight) ? _ref : $w.height();
            },
            aggregate: function(contextSelector) {
                var collection, waypoints, _ref;
                return (collection = allWaypoints), contextSelector &&
                    (collection =
                        null !=
                        (_ref = contexts[$(contextSelector)[0][contextKey]])
                            ? _ref.waypoints
                            : void 0), collection
                    ? (
                          (waypoints = { horizontal: [], vertical: [] }),
                          $.each(waypoints, function(axis, arr) {
                              return $.each(collection[axis], function(
                                  key,
                                  waypoint
                              ) {
                                  return arr.push(waypoint);
                              }), arr.sort(function(a, b) {
                                  return a.offset - b.offset;
                              }), (waypoints[axis] = $.map(arr, function(
                                  waypoint
                              ) {
                                  return waypoint.element;
                              })), (waypoints[axis] = $.unique(waypoints[axis]));
                          }),
                          waypoints
                      )
                    : [];
            },
            above: function(contextSelector) {
                return null == contextSelector &&
                    (contextSelector = window), jQMethods._filter(
                    contextSelector,
                    "vertical",
                    function(context, waypoint) {
                        return waypoint.offset <= context.oldScroll.y;
                    }
                );
            },
            below: function(contextSelector) {
                return null == contextSelector &&
                    (contextSelector = window), jQMethods._filter(
                    contextSelector,
                    "vertical",
                    function(context, waypoint) {
                        return waypoint.offset > context.oldScroll.y;
                    }
                );
            },
            left: function(contextSelector) {
                return null == contextSelector &&
                    (contextSelector = window), jQMethods._filter(
                    contextSelector,
                    "horizontal",
                    function(context, waypoint) {
                        return waypoint.offset <= context.oldScroll.x;
                    }
                );
            },
            right: function(contextSelector) {
                return null == contextSelector &&
                    (contextSelector = window), jQMethods._filter(
                    contextSelector,
                    "horizontal",
                    function(context, waypoint) {
                        return waypoint.offset > context.oldScroll.x;
                    }
                );
            },
            enable: function() {
                return jQMethods._invoke("enable");
            },
            disable: function() {
                return jQMethods._invoke("disable");
            },
            destroy: function() {
                return jQMethods._invoke("destroy");
            },
            extendFn: function(methodName, f) {
                return (methods[methodName] = f);
            },
            _invoke: function(method) {
                var waypoints;
                return (waypoints = $.extend(
                    {},
                    allWaypoints.vertical,
                    allWaypoints.horizontal
                )), $.each(waypoints, function(key, waypoint) {
                    return waypoint[method](), !0;
                });
            },
            _filter: function(selector, axis, test) {
                var context, waypoints;
                return (context = contexts[$(selector)[0][contextKey]])
                    ? (
                          (waypoints = []),
                          $.each(context.waypoints[axis], function(
                              i,
                              waypoint
                          ) {
                              if (test(context, waypoint))
                                  return waypoints.push(waypoint);
                          }),
                          waypoints.sort(function(a, b) {
                              return a.offset - b.offset;
                          }),
                          $.map(waypoints, function(waypoint) {
                              return waypoint.element;
                          })
                      )
                    : [];
            }
        }), ($[wps] = function() {
            var args, method;
            return (method = arguments[0]), (args =
                2 <= arguments.length
                    ? __slice.call(arguments, 1)
                    : []), jQMethods[method]
                ? jQMethods[method].apply(null, args)
                : jQMethods.aggregate.call(null, method);
        }), ($[wps].settings = { resizeThrottle: 100, scrollThrottle: 30 }), $w.on(
            "load.waypoints",
            function() {
                return $[wps]("refresh");
            }
        );
    });
}.call(this), (function($) {
    ($.flexslider = function(el, options) {
        var slider = $(el);
        slider.vars = $.extend({}, $.flexslider.defaults, options);
        var watchedEventClearTimer,
            namespace = slider.vars.namespace,
            msGesture =
                window.navigator &&
                window.navigator.msPointerEnabled &&
                window.MSGesture,
            touch =
                ("ontouchstart" in window ||
                    msGesture ||
                    (window.DocumentTouch &&
                        document instanceof DocumentTouch)) &&
                slider.vars.touch,
            eventType = "click touchend MSPointerUp keyup",
            watchedEvent = "",
            vertical = "vertical" === slider.vars.direction,
            reverse = slider.vars.reverse,
            carousel = slider.vars.itemWidth > 0,
            fade = "fade" === slider.vars.animation,
            asNav = "" !== slider.vars.asNavFor,
            methods = {},
            focused = !0;
        $.data(el, "flexslider", slider), (methods = {
            init: function() {
                (slider.animating = !1), (slider.currentSlide = parseInt(
                    slider.vars.startAt ? slider.vars.startAt : 0,
                    10
                )), isNaN(slider.currentSlide) &&
                    (slider.currentSlide = 0), (slider.animatingTo =
                    slider.currentSlide), (slider.atEnd =
                    0 === slider.currentSlide ||
                    slider.currentSlide ===
                        slider.last), (slider.containerSelector = slider.vars.selector.substr(
                    0,
                    slider.vars.selector.search(" ")
                )), (slider.slides = $(
                    slider.vars.selector,
                    slider
                )), (slider.container = $(
                    slider.containerSelector,
                    slider
                )), (slider.count = slider.slides.length), (slider.syncExists =
                    $(slider.vars.sync).length > 0), "slide" ===
                    slider.vars.animation &&
                    (slider.vars.animation = "swing"), (slider.prop = vertical
                    ? "top"
                    : "marginLeft"), (slider.args = {}), (slider.manualPause = !1), (slider.stopped = !1), (slider.started = !1), (slider.startTimeout = null), (slider.transitions =
                    !slider.vars.video &&
                    !fade &&
                    slider.vars.useCSS &&
                    (function() {
                        var obj = document.createElement("div"),
                            props = [
                                "perspectiveProperty",
                                "WebkitPerspective",
                                "MozPerspective",
                                "OPerspective",
                                "msPerspective"
                            ];
                        for (var i in props)
                            if (void 0 !== obj.style[props[i]])
                                return (slider.pfx = props[i]
                                    .replace("Perspective", "")
                                    .toLowerCase()), (slider.prop =
                                    "-" + slider.pfx + "-transform"), !0;
                        return !1;
                    })()), (slider.ensureAnimationEnd = ""), "" !==
                    slider.vars.controlsContainer &&
                    (slider.controlsContainer =
                        $(slider.vars.controlsContainer).length > 0 &&
                        $(slider.vars.controlsContainer)), "" !==
                    slider.vars.manualControls &&
                    (slider.manualControls =
                        $(slider.vars.manualControls).length > 0 &&
                        $(slider.vars.manualControls)), slider.vars.randomize &&
                    (
                        slider.slides.sort(function() {
                            return Math.round(Math.random()) - 0.5;
                        }),
                        slider.container.empty().append(slider.slides)
                    ), slider.doMath(), slider.setup("init"), slider.vars
                    .controlNav && methods.controlNav.setup(), slider.vars
                    .directionNav && methods.directionNav.setup(), slider.vars
                    .keyboard &&
                    (1 === $(slider.containerSelector).length ||
                        slider.vars.multipleKeyboard) &&
                    $(document).bind("keyup", function(event) {
                        var keycode = event.keyCode;
                        if (
                            !slider.animating &&
                            (39 === keycode || 37 === keycode)
                        ) {
                            var target =
                                39 === keycode
                                    ? slider.getTarget("next")
                                    : 37 === keycode &&
                                      slider.getTarget("prev");
                            slider.flexAnimate(
                                target,
                                slider.vars.pauseOnAction
                            );
                        }
                    }), slider.vars.mousewheel &&
                    slider.bind("mousewheel", function(
                        event,
                        delta,
                        deltaX,
                        deltaY
                    ) {
                        event.preventDefault();
                        var target =
                            delta < 0
                                ? slider.getTarget("next")
                                : slider.getTarget("prev");
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    }), slider.vars.pausePlay &&
                    methods.pausePlay.setup(), slider.vars.slideshow &&
                    slider.vars.pauseInvisible &&
                    methods.pauseInvisible.init(), slider.vars.slideshow &&
                    (
                        slider.vars.pauseOnHover &&
                            slider.hover(
                                function() {
                                    slider.manualPlay ||
                                        slider.manualPause ||
                                        slider.pause();
                                },
                                function() {
                                    slider.manualPause ||
                                        slider.manualPlay ||
                                        slider.stopped ||
                                        slider.play();
                                }
                            ),
                        (slider.vars.pauseInvisible &&
                            methods.pauseInvisible.isHidden()) ||
                            (slider.vars.initDelay > 0
                                ? (slider.startTimeout = setTimeout(
                                      slider.play,
                                      slider.vars.initDelay
                                  ))
                                : slider.play())
                    ), asNav && methods.asNav.setup(), touch &&
                    slider.vars.touch &&
                    methods.touch(), (!fade ||
                    (fade && slider.vars.smoothHeight)) &&
                    $(window).bind(
                        "resize orientationchange focus",
                        methods.resize
                    ), slider
                    .find("img")
                    .attr("draggable", "false"), setTimeout(function() {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    (slider.asNav = !0), (slider.animatingTo = Math.floor(
                        slider.currentSlide / slider.move
                    )), (slider.currentItem =
                        slider.currentSlide), slider.slides
                        .removeClass(namespace + "active-slide")
                        .eq(slider.currentItem)
                        .addClass(namespace + "active-slide"), msGesture
                        ? (
                              (el._slider = slider),
                              slider.slides.each(function() {
                                  var that = this;
                                  (that._gesture = new MSGesture()), (that._gesture.target = that), that.addEventListener(
                                      "MSPointerDown",
                                      function(e) {
                                          e.preventDefault(), e.currentTarget
                                              ._gesture &&
                                              e.currentTarget._gesture.addPointer(
                                                  e.pointerId
                                              );
                                      },
                                      !1
                                  ), that.addEventListener(
                                      "MSGestureTap",
                                      function(e) {
                                          e.preventDefault();
                                          var $slide = $(this),
                                              target = $slide.index();
                                          $(slider.vars.asNavFor).data(
                                              "flexslider"
                                          ).animating ||
                                              $slide.hasClass("active") ||
                                              (
                                                  (slider.direction =
                                                      slider.currentItem <
                                                      target
                                                          ? "next"
                                                          : "prev"),
                                                  slider.flexAnimate(
                                                      target,
                                                      slider.vars.pauseOnAction,
                                                      !1,
                                                      !0,
                                                      !0
                                                  )
                                              );
                                      }
                                  );
                              })
                          )
                        : slider.slides.on(eventType, function(e) {
                              e.preventDefault();
                              var $slide = $(this),
                                  target = $slide.index(),
                                  posFromLeft =
                                      $slide.offset().left -
                                      $(slider).scrollLeft();
                              posFromLeft <= 0 &&
                              $slide.hasClass(namespace + "active-slide")
                                  ? slider.flexAnimate(
                                        slider.getTarget("prev"),
                                        !0
                                    )
                                  : $(slider.vars.asNavFor).data("flexslider")
                                        .animating ||
                                    $slide.hasClass(
                                        namespace + "active-slide"
                                    ) ||
                                    (
                                        (slider.direction =
                                            slider.currentItem < target
                                                ? "next"
                                                : "prev"),
                                        slider.flexAnimate(
                                            target,
                                            slider.vars.pauseOnAction,
                                            !1,
                                            !0,
                                            !0
                                        )
                                    );
                          });
                }
            },
            controlNav: {
                setup: function() {
                    slider.manualControls
                        ? methods.controlNav.setupManual()
                        : methods.controlNav.setupPaging();
                },
                setupPaging: function() {
                    var item,
                        slide,
                        type =
                            "thumbnails" === slider.vars.controlNav
                                ? "control-thumbs"
                                : "control-paging",
                        j = 1;
                    if (
                        (
                            (slider.controlNavScaffold = $(
                                '<ol class="' +
                                    namespace +
                                    "control-nav " +
                                    namespace +
                                    type +
                                    '"></ol>'
                            )),
                            slider.pagingCount > 1
                        )
                    )
                        for (var i = 0; i < slider.pagingCount; i++) {
                            if (
                                (
                                    (slide = slider.slides.eq(i)),
                                    (item =
                                        "thumbnails" === slider.vars.controlNav
                                            ? '<img src="' +
                                              slide.attr("data-thumb") +
                                              '"/>'
                                            : "<a>" + j + "</a>"),
                                    "thumbnails" === slider.vars.controlNav &&
                                        !0 === slider.vars.thumbCaptions
                                )
                            ) {
                                var captn = slide.attr("data-thumbcaption");
                                "" != captn &&
                                    void 0 != captn &&
                                    (item +=
                                        '<span class="' +
                                        namespace +
                                        'caption">' +
                                        captn +
                                        "</span>");
                            }
                            slider.controlNavScaffold.append(
                                "<li>" + item + "</li>"
                            ), j++;
                        }
                    slider.controlsContainer
                        ? $(slider.controlsContainer).append(
                              slider.controlNavScaffold
                          )
                        : slider.append(
                              slider.controlNavScaffold
                          ), methods.controlNav.set(), methods.controlNav.active(), slider.controlNavScaffold.delegate(
                        "a, img",
                        eventType,
                        function(event) {
                            if (
                                (
                                    event.preventDefault(),
                                    "" === watchedEvent ||
                                        watchedEvent === event.type
                                )
                            ) {
                                var $this = $(this),
                                    target = slider.controlNav.index($this);
                                $this.hasClass(namespace + "active") ||
                                    (
                                        (slider.direction =
                                            target > slider.currentSlide
                                                ? "next"
                                                : "prev"),
                                        slider.flexAnimate(
                                            target,
                                            slider.vars.pauseOnAction
                                        )
                                    );
                            }
                            "" === watchedEvent &&
                                (watchedEvent =
                                    event.type), methods.setToClearWatchedEvent();
                        }
                    );
                },
                setupManual: function() {
                    (slider.controlNav =
                        slider.manualControls), methods.controlNav.active(), slider.controlNav.bind(
                        eventType,
                        function(event) {
                            if (
                                (
                                    event.preventDefault(),
                                    "" === watchedEvent ||
                                        watchedEvent === event.type
                                )
                            ) {
                                var $this = $(this),
                                    target = slider.controlNav.index($this);
                                $this.hasClass(namespace + "active") ||
                                    (
                                        target > slider.currentSlide
                                            ? (slider.direction = "next")
                                            : (slider.direction = "prev"),
                                        slider.flexAnimate(
                                            target,
                                            slider.vars.pauseOnAction
                                        )
                                    );
                            }
                            "" === watchedEvent &&
                                (watchedEvent =
                                    event.type), methods.setToClearWatchedEvent();
                        }
                    );
                },
                set: function() {
                    var selector =
                        "thumbnails" === slider.vars.controlNav ? "img" : "a";
                    slider.controlNav = $(
                        "." + namespace + "control-nav li " + selector,
                        slider.controlsContainer
                            ? slider.controlsContainer
                            : slider
                    );
                },
                active: function() {
                    slider.controlNav
                        .removeClass(namespace + "active")
                        .eq(slider.animatingTo)
                        .addClass(namespace + "active");
                },
                update: function(action, pos) {
                    slider.pagingCount > 1 && "add" === action
                        ? slider.controlNavScaffold.append(
                              $("<li><a>" + slider.count + "</a></li>")
                          )
                        : 1 === slider.pagingCount
                          ? slider.controlNavScaffold.find("li").remove()
                          : slider.controlNav
                                .eq(pos)
                                .closest("li")
                                .remove(), methods.controlNav.set(), slider.pagingCount >
                        1 && slider.pagingCount !== slider.controlNav.length
                        ? slider.update(pos, action)
                        : methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $(
                        '<ul class="' +
                            namespace +
                            'direction-nav"><li class="' +
                            namespace +
                            'nav-prev"><a class="' +
                            namespace +
                            'prev" href="#">' +
                            slider.vars.prevText +
                            '</a></li><li class="' +
                            namespace +
                            'nav-next"><a class="' +
                            namespace +
                            'next" href="#">' +
                            slider.vars.nextText +
                            "</a></li></ul>"
                    );
                    slider.controlsContainer
                        ? (
                              $(slider.controlsContainer).append(
                                  directionNavScaffold
                              ),
                              (slider.directionNav = $(
                                  "." + namespace + "direction-nav li a",
                                  slider.controlsContainer
                              ))
                          )
                        : (
                              slider.append(directionNavScaffold),
                              (slider.directionNav = $(
                                  "." + namespace + "direction-nav li a",
                                  slider
                              ))
                          ), methods.directionNav.update(), slider.directionNav.bind(
                        eventType,
                        function(event) {
                            event.preventDefault();
                            var target;
                            ("" !== watchedEvent &&
                                watchedEvent !== event.type) ||
                                (
                                    (target = $(this).hasClass(
                                        namespace + "next"
                                    )
                                        ? slider.getTarget("next")
                                        : slider.getTarget("prev")),
                                    slider.flexAnimate(
                                        target,
                                        slider.vars.pauseOnAction
                                    )
                                ), "" === watchedEvent &&
                                (watchedEvent =
                                    event.type), methods.setToClearWatchedEvent();
                        }
                    );
                },
                update: function() {
                    var disabledClass = namespace + "disabled";
                    1 === slider.pagingCount
                        ? slider.directionNav
                              .addClass(disabledClass)
                              .attr("tabindex", "-1")
                        : slider.vars.animationLoop
                          ? slider.directionNav
                                .removeClass(disabledClass)
                                .removeAttr("tabindex")
                          : 0 === slider.animatingTo
                            ? slider.directionNav
                                  .removeClass(disabledClass)
                                  .filter("." + namespace + "prev")
                                  .addClass(disabledClass)
                                  .attr("tabindex", "-1")
                            : slider.animatingTo === slider.last
                              ? slider.directionNav
                                    .removeClass(disabledClass)
                                    .filter("." + namespace + "next")
                                    .addClass(disabledClass)
                                    .attr("tabindex", "-1")
                              : slider.directionNav
                                    .removeClass(disabledClass)
                                    .removeAttr("tabindex");
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $(
                        '<div class="' + namespace + 'pauseplay"><a></a></div>'
                    );
                    slider.controlsContainer
                        ? (
                              slider.controlsContainer.append(
                                  pausePlayScaffold
                              ),
                              (slider.pausePlay = $(
                                  "." + namespace + "pauseplay a",
                                  slider.controlsContainer
                              ))
                          )
                        : (
                              slider.append(pausePlayScaffold),
                              (slider.pausePlay = $(
                                  "." + namespace + "pauseplay a",
                                  slider
                              ))
                          ), methods.pausePlay.update(
                        slider.vars.slideshow
                            ? namespace + "pause"
                            : namespace + "play"
                    ), slider.pausePlay.bind(eventType, function(event) {
                        event.preventDefault(), ("" !== watchedEvent && watchedEvent !== event.type) || ($(this).hasClass(namespace + "pause") ? ((slider.manualPause = !0), (slider.manualPlay = !1), slider.pause()) : ((slider.manualPause = !1), (slider.manualPlay = !0), slider.play())), "" === watchedEvent && (watchedEvent = event.type), methods.setToClearWatchedEvent();
                    });
                },
                update: function(state) {
                    "play" === state
                        ? slider.pausePlay
                              .removeClass(namespace + "pause")
                              .addClass(namespace + "play")
                              .html(slider.vars.playText)
                        : slider.pausePlay
                              .removeClass(namespace + "play")
                              .addClass(namespace + "pause")
                              .html(slider.vars.pauseText);
                }
            },
            touch: function() {
                function onTouchStart(e) {
                    slider.animating
                        ? e.preventDefault()
                        : (window.navigator.msPointerEnabled ||
                              1 === e.touches.length) &&
                          (
                              slider.pause(),
                              (cwidth = vertical ? slider.h : slider.w),
                              (startT = Number(new Date())),
                              (localX = e.touches[0].pageX),
                              (localY = e.touches[0].pageY),
                              (offset =
                                  carousel &&
                                  reverse &&
                                  slider.animatingTo === slider.last
                                      ? 0
                                      : carousel && reverse
                                        ? slider.limit -
                                          (slider.itemW +
                                              slider.vars.itemMargin) *
                                              slider.move *
                                              slider.animatingTo
                                        : carousel &&
                                          slider.currentSlide === slider.last
                                          ? slider.limit
                                          : carousel
                                            ? (slider.itemW +
                                                  slider.vars.itemMargin) *
                                              slider.move *
                                              slider.currentSlide
                                            : reverse
                                              ? (slider.last -
                                                    slider.currentSlide +
                                                    slider.cloneOffset) *
                                                cwidth
                                              : (slider.currentSlide +
                                                    slider.cloneOffset) *
                                                cwidth),
                              (startX = vertical ? localY : localX),
                              (startY = vertical ? localX : localY),
                              el.addEventListener("touchmove", onTouchMove, !1),
                              el.addEventListener("touchend", onTouchEnd, !1)
                          );
                }
                function onTouchMove(e) {
                    (localX = e.touches[0].pageX), (localY =
                        e.touches[0].pageY), (dx = vertical
                        ? startX - localY
                        : startX - localX), (scrolling = vertical
                        ? Math.abs(dx) < Math.abs(localX - startY)
                        : Math.abs(dx) < Math.abs(localY - startY));
                    var fxms = 500;
                    (!scrolling || Number(new Date()) - startT > fxms) &&
                        (
                            e.preventDefault(),
                            !fade &&
                                slider.transitions &&
                                (
                                    slider.vars.animationLoop ||
                                        (dx /=
                                            (0 === slider.currentSlide &&
                                                dx < 0) ||
                                            (slider.currentSlide ===
                                                slider.last &&
                                                dx > 0)
                                                ? Math.abs(dx) / cwidth + 2
                                                : 1),
                                    slider.setProps(offset + dx, "setTouch")
                                )
                        );
                }
                function onTouchEnd(e) {
                    if (
                        (
                            el.removeEventListener(
                                "touchmove",
                                onTouchMove,
                                !1
                            ),
                            slider.animatingTo === slider.currentSlide &&
                                !scrolling &&
                                null !== dx
                        )
                    ) {
                        var updateDx = reverse ? -dx : dx,
                            target =
                                updateDx > 0
                                    ? slider.getTarget("next")
                                    : slider.getTarget("prev");
                        slider.canAdvance(target) &&
                        ((Number(new Date()) - startT < 550 &&
                            Math.abs(updateDx) > 50) ||
                            Math.abs(updateDx) > cwidth / 2)
                            ? slider.flexAnimate(
                                  target,
                                  slider.vars.pauseOnAction
                              )
                            : fade ||
                              slider.flexAnimate(
                                  slider.currentSlide,
                                  slider.vars.pauseOnAction,
                                  !0
                              );
                    }
                    el.removeEventListener(
                        "touchend",
                        onTouchEnd,
                        !1
                    ), (startX = null), (startY = null), (dx = null), (offset = null);
                }
                function onMSPointerDown(e) {
                    e.stopPropagation(), slider.animating
                        ? e.preventDefault()
                        : (
                              slider.pause(),
                              el._gesture.addPointer(e.pointerId),
                              (accDx = 0),
                              (cwidth = vertical ? slider.h : slider.w),
                              (startT = Number(new Date())),
                              (offset =
                                  carousel &&
                                  reverse &&
                                  slider.animatingTo === slider.last
                                      ? 0
                                      : carousel && reverse
                                        ? slider.limit -
                                          (slider.itemW +
                                              slider.vars.itemMargin) *
                                              slider.move *
                                              slider.animatingTo
                                        : carousel &&
                                          slider.currentSlide === slider.last
                                          ? slider.limit
                                          : carousel
                                            ? (slider.itemW +
                                                  slider.vars.itemMargin) *
                                              slider.move *
                                              slider.currentSlide
                                            : reverse
                                              ? (slider.last -
                                                    slider.currentSlide +
                                                    slider.cloneOffset) *
                                                cwidth
                                              : (slider.currentSlide +
                                                    slider.cloneOffset) *
                                                cwidth)
                          );
                }
                function onMSGestureChange(e) {
                    e.stopPropagation();
                    var slider = e.target._slider;
                    if (slider) {
                        var transX = -e.translationX,
                            transY = -e.translationY;
                        return (accDx += vertical
                            ? transY
                            : transX), (dx = accDx), (scrolling = vertical
                            ? Math.abs(accDx) < Math.abs(-transX)
                            : Math.abs(accDx) < Math.abs(-transY)), e.detail ===
                        e.MSGESTURE_FLAG_INERTIA
                            ? void setImmediate(function() {
                                  el._gesture.stop();
                              })
                            : void (
                                  (!scrolling ||
                                      Number(new Date()) - startT > 500) &&
                                  (
                                      e.preventDefault(),
                                      !fade &&
                                          slider.transitions &&
                                          (
                                              slider.vars.animationLoop ||
                                                  (dx =
                                                      accDx /
                                                      ((0 ===
                                                          slider.currentSlide &&
                                                          accDx < 0) ||
                                                      (slider.currentSlide ===
                                                          slider.last &&
                                                          accDx > 0)
                                                          ? Math.abs(accDx) /
                                                                cwidth +
                                                            2
                                                          : 1)),
                                              slider.setProps(
                                                  offset + dx,
                                                  "setTouch"
                                              )
                                          )
                                  )
                              );
                    }
                }
                function onMSGestureEnd(e) {
                    e.stopPropagation();
                    var slider = e.target._slider;
                    if (slider) {
                        if (
                            slider.animatingTo === slider.currentSlide &&
                            !scrolling &&
                            null !== dx
                        ) {
                            var updateDx = reverse ? -dx : dx,
                                target =
                                    updateDx > 0
                                        ? slider.getTarget("next")
                                        : slider.getTarget("prev");
                            slider.canAdvance(target) &&
                            ((Number(new Date()) - startT < 550 &&
                                Math.abs(updateDx) > 50) ||
                                Math.abs(updateDx) > cwidth / 2)
                                ? slider.flexAnimate(
                                      target,
                                      slider.vars.pauseOnAction
                                  )
                                : fade ||
                                  slider.flexAnimate(
                                      slider.currentSlide,
                                      slider.vars.pauseOnAction,
                                      !0
                                  );
                        }
                        (startX = null), (startY = null), (dx = null), (offset = null), (accDx = 0);
                    }
                }
                var startX,
                    startY,
                    offset,
                    cwidth,
                    dx,
                    startT,
                    scrolling = !1,
                    localX = 0,
                    localY = 0,
                    accDx = 0;
                msGesture
                    ? (
                          (el.style.msTouchAction = "none"),
                          (el._gesture = new MSGesture()),
                          (el._gesture.target = el),
                          el.addEventListener(
                              "MSPointerDown",
                              onMSPointerDown,
                              !1
                          ),
                          (el._slider = slider),
                          el.addEventListener(
                              "MSGestureChange",
                              onMSGestureChange,
                              !1
                          ),
                          el.addEventListener(
                              "MSGestureEnd",
                              onMSGestureEnd,
                              !1
                          )
                      )
                    : el.addEventListener("touchstart", onTouchStart, !1);
            },
            resize: function() {
                !slider.animating &&
                    slider.is(":visible") &&
                    (
                        carousel || slider.doMath(),
                        fade
                            ? methods.smoothHeight()
                            : carousel
                              ? (
                                    slider.slides.width(slider.computedW),
                                    slider.update(slider.pagingCount),
                                    slider.setProps()
                                )
                              : vertical
                                ? (
                                      slider.viewport.height(slider.h),
                                      slider.setProps(slider.h, "setTotal")
                                  )
                                : (
                                      slider.vars.smoothHeight &&
                                          methods.smoothHeight(),
                                      slider.newSlides.width(slider.computedW),
                                      slider.setProps(
                                          slider.computedW,
                                          "setTotal"
                                      )
                                  )
                    );
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = fade ? slider : slider.viewport;
                    dur
                        ? $obj.animate(
                              {
                                  height: slider.slides
                                      .eq(slider.animatingTo)
                                      .height()
                              },
                              dur
                          )
                        : $obj.height(
                              slider.slides.eq(slider.animatingTo).height()
                          );
                }
            },
            sync: function(action) {
                var $obj = $(slider.vars.sync).data("flexslider"),
                    target = slider.animatingTo;
                switch (action) {
                    case "animate":
                        $obj.flexAnimate(
                            target,
                            slider.vars.pauseOnAction,
                            !1,
                            !0
                        );
                        break;
                    case "play":
                        $obj.playing || $obj.asNav || $obj.play();
                        break;
                    case "pause":
                        $obj.pause();
                }
            },
            uniqueID: function($clone) {
                return $clone
                    .filter("[id]")
                    .add($clone.find("[id]"))
                    .each(function() {
                        var $this = $(this);
                        $this.attr("id", $this.attr("id") + "_clone");
                    }), $clone;
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var visProp = methods.pauseInvisible.getHiddenProp();
                    if (visProp) {
                        var evtname =
                            visProp.replace(/[H|h]idden/, "") +
                            "visibilitychange";
                        document.addEventListener(evtname, function() {
                            methods.pauseInvisible.isHidden()
                                ? slider.startTimeout
                                  ? clearTimeout(slider.startTimeout)
                                  : slider.pause()
                                : slider.started
                                  ? slider.play()
                                  : slider.vars.initDelay > 0
                                    ? setTimeout(
                                          slider.play,
                                          slider.vars.initDelay
                                      )
                                    : slider.play();
                        });
                    }
                },
                isHidden: function() {
                    var prop = methods.pauseInvisible.getHiddenProp();
                    return !!prop && document[prop];
                },
                getHiddenProp: function() {
                    var prefixes = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var i = 0; i < prefixes.length; i++)
                        if (prefixes[i] + "Hidden" in document)
                            return prefixes[i] + "Hidden";
                    return null;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(
                    watchedEventClearTimer
                ), (watchedEventClearTimer = setTimeout(function() {
                    watchedEvent = "";
                }, 3e3));
            }
        }), (slider.flexAnimate = function(
            target,
            pause,
            override,
            withSync,
            fromNav
        ) {
            if (
                (
                    slider.vars.animationLoop ||
                        target === slider.currentSlide ||
                        (slider.direction =
                            target > slider.currentSlide ? "next" : "prev"),
                    asNav &&
                        1 === slider.pagingCount &&
                        (slider.direction =
                            slider.currentItem < target ? "next" : "prev"),
                    !slider.animating &&
                        (slider.canAdvance(target, fromNav) || override) &&
                        slider.is(":visible")
                )
            ) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data("flexslider");
                    if (
                        (
                            (slider.atEnd =
                                0 === target || target === slider.count - 1),
                            master.flexAnimate(target, !0, !1, !0, fromNav),
                            (slider.direction =
                                slider.currentItem < target ? "next" : "prev"),
                            (master.direction = slider.direction),
                            Math.ceil((target + 1) / slider.visible) - 1 ===
                                slider.currentSlide || 0 === target
                        )
                    )
                        return (slider.currentItem = target), slider.slides
                            .removeClass(namespace + "active-slide")
                            .eq(target)
                            .addClass(namespace + "active-slide"), !1;
                    (slider.currentItem = target), slider.slides
                        .removeClass(namespace + "active-slide")
                        .eq(target)
                        .addClass(
                            namespace + "active-slide"
                        ), (target = Math.floor(target / slider.visible));
                }
                if (
                    (
                        (slider.animating = !0),
                        (slider.animatingTo = target),
                        pause && slider.pause(),
                        slider.vars.before(slider),
                        slider.syncExists &&
                            !fromNav &&
                            methods.sync("animate"),
                        slider.vars.controlNav && methods.controlNav.active(),
                        carousel ||
                            slider.slides
                                .removeClass(namespace + "active-slide")
                                .eq(target)
                                .addClass(namespace + "active-slide"),
                        (slider.atEnd = 0 === target || target === slider.last),
                        slider.vars.directionNav &&
                            methods.directionNav.update(),
                        target === slider.last &&
                            (
                                slider.vars.end(slider),
                                slider.vars.animationLoop || slider.pause()
                            ),
                        fade
                    )
                )
                    touch
                        ? (
                              slider.slides
                                  .eq(slider.currentSlide)
                                  .css({ opacity: 0, zIndex: 1 }),
                              slider.slides
                                  .eq(target)
                                  .css({ opacity: 1, zIndex: 2 }),
                              slider.wrapup(dimension)
                          )
                        : (
                              slider.slides
                                  .eq(slider.currentSlide)
                                  .css({ zIndex: 1 })
                                  .animate(
                                      { opacity: 0 },
                                      slider.vars.animationSpeed,
                                      slider.vars.easing
                                  ),
                              slider.slides
                                  .eq(target)
                                  .css({ zIndex: 2 })
                                  .animate(
                                      { opacity: 1 },
                                      slider.vars.animationSpeed,
                                      slider.vars.easing,
                                      slider.wrapup
                                  )
                          );
                else {
                    var margin,
                        slideString,
                        calcNext,
                        dimension = vertical
                            ? slider.slides.filter(":first").height()
                            : slider.computedW;
                    carousel
                        ? (
                              (margin = slider.vars.itemMargin),
                              (calcNext =
                                  (slider.itemW + margin) *
                                  slider.move *
                                  slider.animatingTo),
                              (slideString =
                                  calcNext > slider.limit &&
                                  1 !== slider.visible
                                      ? slider.limit
                                      : calcNext)
                          )
                        : (slideString =
                              0 === slider.currentSlide &&
                              target === slider.count - 1 &&
                              slider.vars.animationLoop &&
                              "next" !== slider.direction
                                  ? reverse
                                    ? (slider.count + slider.cloneOffset) *
                                      dimension
                                    : 0
                                  : slider.currentSlide === slider.last &&
                                    0 === target &&
                                    slider.vars.animationLoop &&
                                    "prev" !== slider.direction
                                    ? reverse
                                      ? 0
                                      : (slider.count + 1) * dimension
                                    : reverse
                                      ? (slider.count -
                                            1 -
                                            target +
                                            slider.cloneOffset) *
                                        dimension
                                      : (target + slider.cloneOffset) *
                                        dimension), slider.setProps(
                        slideString,
                        "",
                        slider.vars.animationSpeed
                    ), slider.transitions
                        ? (
                              (slider.vars.animationLoop && slider.atEnd) ||
                                  (
                                      (slider.animating = !1),
                                      (slider.currentSlide = slider.animatingTo)
                                  ),
                              slider.container.unbind(
                                  "webkitTransitionEnd transitionend"
                              ),
                              slider.container.bind(
                                  "webkitTransitionEnd transitionend",
                                  function() {
                                      clearTimeout(
                                          slider.ensureAnimationEnd
                                      ), slider.wrapup(dimension);
                                  }
                              ),
                              clearTimeout(slider.ensureAnimationEnd),
                              (slider.ensureAnimationEnd = setTimeout(
                                  function() {
                                      slider.wrapup(dimension);
                                  },
                                  slider.vars.animationSpeed + 100
                              ))
                          )
                        : slider.container.animate(
                              slider.args,
                              slider.vars.animationSpeed,
                              slider.vars.easing,
                              function() {
                                  slider.wrapup(dimension);
                              }
                          );
                }
                slider.vars.smoothHeight &&
                    methods.smoothHeight(slider.vars.animationSpeed);
            }
        }), (slider.wrapup = function(dimension) {
            fade ||
                carousel ||
                (0 === slider.currentSlide &&
                slider.animatingTo === slider.last &&
                slider.vars.animationLoop
                    ? slider.setProps(dimension, "jumpEnd")
                    : slider.currentSlide === slider.last &&
                      0 === slider.animatingTo &&
                      slider.vars.animationLoop &&
                      slider.setProps(
                          dimension,
                          "jumpStart"
                      )), (slider.animating = !1), (slider.currentSlide =
                slider.animatingTo), slider.vars.after(slider);
        }), (slider.animateSlides = function() {
            !slider.animating &&
                focused &&
                slider.flexAnimate(slider.getTarget("next"));
        }), (slider.pause = function() {
            clearInterval(
                slider.animatedSlides
            ), (slider.animatedSlides = null), (slider.playing = !1), slider
                .vars.pausePlay &&
                methods.pausePlay.update("play"), slider.syncExists &&
                methods.sync("pause");
        }), (slider.play = function() {
            slider.playing &&
                clearInterval(slider.animatedSlides), (slider.animatedSlides =
                slider.animatedSlides ||
                setInterval(
                    slider.animateSlides,
                    slider.vars.slideshowSpeed
                )), (slider.started = slider.playing = !0), slider.vars
                .pausePlay &&
                methods.pausePlay.update("pause"), slider.syncExists &&
                methods.sync("play");
        }), (slider.stop = function() {
            slider.pause(), (slider.stopped = !0);
        }), (slider.canAdvance = function(target, fromNav) {
            var last = asNav ? slider.pagingCount - 1 : slider.last;
            return (
                !!fromNav ||
                (!(
                    !asNav ||
                    slider.currentItem !== slider.count - 1 ||
                    0 !== target ||
                    "prev" !== slider.direction
                ) ||
                    ((!asNav ||
                        0 !== slider.currentItem ||
                        target !== slider.pagingCount - 1 ||
                        "next" === slider.direction) &&
                        (!(target === slider.currentSlide && !asNav) &&
                            (!!slider.vars.animationLoop ||
                                ((!slider.atEnd ||
                                    0 !== slider.currentSlide ||
                                    target !== last ||
                                    "next" === slider.direction) &&
                                    (!slider.atEnd ||
                                        slider.currentSlide !== last ||
                                        0 !== target ||
                                        "next" !== slider.direction))))))
            );
        }), (slider.getTarget = function(dir) {
            return (slider.direction = dir), "next" === dir
                ? slider.currentSlide === slider.last
                  ? 0
                  : slider.currentSlide + 1
                : 0 === slider.currentSlide
                  ? slider.last
                  : slider.currentSlide - 1;
        }), (slider.setProps = function(pos, special, dur) {
            var target = (function() {
                var posCheck = pos
                        ? pos
                        : (slider.itemW + slider.vars.itemMargin) *
                          slider.move *
                          slider.animatingTo,
                    posCalc = (function() {
                        if (carousel)
                            return "setTouch" === special
                                ? pos
                                : reverse && slider.animatingTo === slider.last
                                  ? 0
                                  : reverse
                                    ? slider.limit -
                                      (slider.itemW + slider.vars.itemMargin) *
                                          slider.move *
                                          slider.animatingTo
                                    : slider.animatingTo === slider.last
                                      ? slider.limit
                                      : posCheck;
                        switch (special) {
                            case "setTotal":
                                return reverse
                                    ? (slider.count -
                                          1 -
                                          slider.currentSlide +
                                          slider.cloneOffset) *
                                      pos
                                    : (slider.currentSlide +
                                          slider.cloneOffset) *
                                      pos;
                            case "setTouch":
                                return reverse ? pos : pos;
                            case "jumpEnd":
                                return reverse ? pos : slider.count * pos;
                            case "jumpStart":
                                return reverse ? slider.count * pos : pos;
                            default:
                                return pos;
                        }
                    })();
                return posCalc * -1 + "px";
            })();
            slider.transitions &&
                (
                    (target = vertical
                        ? "translate3d(0," + target + ",0)"
                        : "translate3d(" + target + ",0,0)"),
                    (dur = void 0 !== dur ? dur / 1e3 + "s" : "0s"),
                    slider.container.css(
                        "-" + slider.pfx + "-transition-duration",
                        dur
                    ),
                    slider.container.css("transition-duration", dur)
                ), (slider.args[slider.prop] = target), (slider.transitions ||
                void 0 === dur) &&
                slider.container.css(slider.args), slider.container.css(
                "transform",
                target
            );
        }), (slider.setup = function(type) {
            if (fade)
                slider.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === type &&
                    (touch
                        ? slider.slides
                              .css({
                                  opacity: 0,
                                  display: "block",
                                  webkitTransition:
                                      "opacity " +
                                      slider.vars.animationSpeed / 1e3 +
                                      "s ease",
                                  zIndex: 1
                              })
                              .eq(slider.currentSlide)
                              .css({ opacity: 1, zIndex: 2 })
                        : 0 == slider.vars.fadeFirstSlide
                          ? slider.slides
                                .css({
                                    opacity: 0,
                                    display: "block",
                                    zIndex: 1
                                })
                                .eq(slider.currentSlide)
                                .css({ zIndex: 2 })
                                .css({ opacity: 1 })
                          : slider.slides
                                .css({
                                    opacity: 0,
                                    display: "block",
                                    zIndex: 1
                                })
                                .eq(slider.currentSlide)
                                .css({ zIndex: 2 })
                                .animate(
                                    { opacity: 1 },
                                    slider.vars.animationSpeed,
                                    slider.vars.easing
                                )), slider.vars.smoothHeight &&
                    methods.smoothHeight();
            else {
                var sliderOffset, arr;
                "init" === type &&
                    (
                        (slider.viewport = $(
                            '<div class="' + namespace + 'viewport"></div>'
                        )
                            .css({ overflow: "hidden", position: "relative" })
                            .appendTo(slider)
                            .append(slider.container)),
                        (slider.cloneCount = 0),
                        (slider.cloneOffset = 0),
                        reverse &&
                            (
                                (arr = $.makeArray(slider.slides).reverse()),
                                (slider.slides = $(arr)),
                                slider.container.empty().append(slider.slides)
                            )
                    ), slider.vars.animationLoop &&
                    !carousel &&
                    (
                        (slider.cloneCount = 2),
                        (slider.cloneOffset = 1),
                        "init" !== type &&
                            slider.container.find(".clone").remove(),
                        slider.container
                            .append(
                                methods
                                    .uniqueID(
                                        slider.slides
                                            .first()
                                            .clone()
                                            .addClass("clone")
                                    )
                                    .attr("aria-hidden", "true")
                            )
                            .prepend(
                                methods
                                    .uniqueID(
                                        slider.slides
                                            .last()
                                            .clone()
                                            .addClass("clone")
                                    )
                                    .attr("aria-hidden", "true")
                            )
                    ), (slider.newSlides = $(
                    slider.vars.selector,
                    slider
                )), (sliderOffset = reverse
                    ? slider.count -
                      1 -
                      slider.currentSlide +
                      slider.cloneOffset
                    : slider.currentSlide + slider.cloneOffset), vertical &&
                !carousel
                    ? (
                          slider.container
                              .height(
                                  200 * (slider.count + slider.cloneCount) + "%"
                              )
                              .css("position", "absolute")
                              .width("100%"),
                          setTimeout(function() {
                              slider.newSlides.css({
                                  display: "block"
                              }), slider.doMath(), slider.viewport.height(slider.h), slider.setProps(sliderOffset * slider.h, "init");
                          }, "init" === type ? 100 : 0)
                      )
                    : (
                          slider.container.width(
                              200 * (slider.count + slider.cloneCount) + "%"
                          ),
                          slider.setProps(
                              sliderOffset * slider.computedW,
                              "init"
                          ),
                          setTimeout(function() {
                              slider.doMath(), slider.newSlides.css({ width: slider.computedW, float: "left", display: "block" }), slider.vars.smoothHeight && methods.smoothHeight();
                          }, "init" === type ? 100 : 0)
                      );
            }
            carousel ||
                slider.slides
                    .removeClass(namespace + "active-slide")
                    .eq(slider.currentSlide)
                    .addClass(namespace + "active-slide"), slider.vars.init(
                slider
            );
        }), (slider.doMath = function() {
            var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;
            (slider.w =
                void 0 === slider.viewport
                    ? slider.width()
                    : slider.viewport.width()), (slider.h = slide.height()), (slider.boxPadding =
                slide.outerWidth() - slide.width()), carousel
                ? (
                      (slider.itemT = slider.vars.itemWidth + slideMargin),
                      (slider.minW = minItems
                          ? minItems * slider.itemT
                          : slider.w),
                      (slider.maxW = maxItems
                          ? maxItems * slider.itemT - slideMargin
                          : slider.w),
                      (slider.itemW =
                          slider.minW > slider.w
                              ? (slider.w - slideMargin * (minItems - 1)) /
                                minItems
                              : slider.maxW < slider.w
                                ? (slider.w - slideMargin * (maxItems - 1)) /
                                  maxItems
                                : slider.vars.itemWidth > slider.w
                                  ? slider.w
                                  : slider.vars.itemWidth),
                      (slider.visible = Math.floor(slider.w / slider.itemW)),
                      (slider.move =
                          slider.vars.move > 0 &&
                          slider.vars.move < slider.visible
                              ? slider.vars.move
                              : slider.visible),
                      (slider.pagingCount = Math.ceil(
                          (slider.count - slider.visible) / slider.move + 1
                      )),
                      (slider.last = slider.pagingCount - 1),
                      (slider.limit =
                          1 === slider.pagingCount
                              ? 0
                              : slider.vars.itemWidth > slider.w
                                ? slider.itemW * (slider.count - 1) +
                                  slideMargin * (slider.count - 1)
                                : (slider.itemW + slideMargin) * slider.count -
                                  slider.w -
                                  slideMargin)
                  )
                : (
                      (slider.itemW = slider.w),
                      (slider.pagingCount = slider.count),
                      (slider.last = slider.count - 1)
                  ), (slider.computedW = slider.itemW - slider.boxPadding);
        }), (slider.update = function(pos, action) {
            slider.doMath(), carousel ||
                (
                    pos < slider.currentSlide
                        ? (slider.currentSlide += 1)
                        : pos <= slider.currentSlide &&
                          0 !== pos &&
                          (slider.currentSlide -= 1),
                    (slider.animatingTo = slider.currentSlide)
                ), slider.vars.controlNav &&
                !slider.manualControls &&
                (("add" === action && !carousel) ||
                slider.pagingCount > slider.controlNav.length
                    ? methods.controlNav.update("add")
                    : (("remove" === action && !carousel) ||
                          slider.pagingCount < slider.controlNav.length) &&
                      (
                          carousel &&
                              slider.currentSlide > slider.last &&
                              (
                                  (slider.currentSlide -= 1),
                                  (slider.animatingTo -= 1)
                              ),
                          methods.controlNav.update("remove", slider.last)
                      )), slider.vars.directionNav &&
                methods.directionNav.update();
        }), (slider.addSlide = function(obj, pos) {
            var $obj = $(obj);
            (slider.count += 1), (slider.last = slider.count - 1), vertical &&
            reverse
                ? void 0 !== pos
                  ? slider.slides.eq(slider.count - pos).after($obj)
                  : slider.container.prepend($obj)
                : void 0 !== pos
                  ? slider.slides.eq(pos).before($obj)
                  : slider.container.append($obj), slider.update(
                pos,
                "add"
            ), (slider.slides = $(
                slider.vars.selector + ":not(.clone)",
                slider
            )), slider.setup(), slider.vars.added(slider);
        }), (slider.removeSlide = function(obj) {
            var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;
            (slider.count -= 1), (slider.last = slider.count - 1), isNaN(obj)
                ? $(obj, slider.slides).remove()
                : vertical && reverse
                  ? slider.slides.eq(slider.last).remove()
                  : slider.slides
                        .eq(obj)
                        .remove(), slider.doMath(), slider.update(
                pos,
                "remove"
            ), (slider.slides = $(
                slider.vars.selector + ":not(.clone)",
                slider
            )), slider.setup(), slider.vars.removed(slider);
        }), methods.init();
    }), $(window)
        .blur(function(e) {
            focused = !1;
        })
        .focus(function(e) {
            focused = !0;
        }), ($.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !0,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }), ($.fn.flexslider = function(options) {
        if ((void 0 === options && (options = {}), "object" == typeof options))
            return this.each(function() {
                var $this = $(this),
                    selector = options.selector
                        ? options.selector
                        : ".slides > li",
                    $slides = $this.find(selector);
                (1 === $slides.length && options.allowOneSlide === !0) ||
                0 === $slides.length
                    ? (
                          $slides.fadeIn(400),
                          options.start && options.start($this)
                      )
                    : void 0 === $this.data("flexslider") &&
                      new $.flexslider(this, options);
            });
        var $slider = $(this).data("flexslider");
        switch (options) {
            case "play":
                $slider.play();
                break;
            case "pause":
                $slider.pause();
                break;
            case "stop":
                $slider.stop();
                break;
            case "next":
                $slider.flexAnimate($slider.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                $slider.flexAnimate($slider.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof options && $slider.flexAnimate(options, !0);
        }
    });
})(jQuery), (function(window, document, $, undefined) {
    "use strict";
    var W = $(window),
        D = $(document),
        F = ($.fancybox = function() {
            F.open.apply(this, arguments);
        }),
        IE = navigator.userAgent.match(/msie/),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,
        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && "string" === $.type(str);
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf("%") > 0;
        },
        isScrollable = function(el) {
            return (
                el &&
                !(el.style.overflow && "hidden" === el.style.overflow) &&
                ((el.clientWidth && el.scrollWidth > el.clientWidth) ||
                    (el.clientHeight && el.scrollHeight > el.clientHeight))
            );
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;
            return dim &&
                isPercentage(orig) &&
                (value = F.getViewport()[dim] / 100 * value), Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + "px";
        };
    $.extend(F, {
        version: "2.1.4",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !isTouch,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: { 13: "left", 34: "up", 39: "left", 40: "up" },
                prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap:
                    '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe:
                    '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (IE ? ' allowtransparency="true"' : "") +
                    "></iframe>",
                error:
                    '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn:
                    '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next:
                    '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev:
                    '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(group, opts) {
            if (
                group &&
                ($.isPlainObject(opts) || (opts = {}), !1 !== F.close(!0))
            )
                return $.isArray(group) ||
                    (group = isQuery(group)
                        ? $(group).get()
                        : [group]), $.each(group, function(i, element) {
                    var href,
                        title,
                        content,
                        type,
                        rez,
                        hrefParts,
                        selector,
                        obj = {};
                    "object" === $.type(element) &&
                        (
                            element.nodeType && (element = $(element)),
                            isQuery(element)
                                ? (
                                      (obj = {
                                          href:
                                              element.data("fancybox-href") ||
                                              element.attr("href"),
                                          title:
                                              element.data("fancybox-title") ||
                                              element.attr("title"),
                                          isDom: !0,
                                          element: element
                                      }),
                                      $.metadata &&
                                          $.extend(!0, obj, element.metadata())
                                  )
                                : (obj = element)
                        ), (href = opts.href || obj.href || (isString(element) ? element : null)), (title = opts.title !== undefined ? opts.title : obj.title || ""), (content = opts.content || obj.content), (type = content ? "html" : opts.type || obj.type), !type && obj.isDom && ((type = element.data("fancybox-type")), type || ((rez = element.prop("class").match(/fancybox\.(\w+)/)), (type = rez ? rez[1] : null))), isString(href) && (type || (F.isImage(href) ? (type = "image") : F.isSWF(href) ? (type = "swf") : "#" === href.charAt(0) ? (type = "inline") : isString(element) && ((type = "html"), (content = element))), "ajax" === type && ((hrefParts = href.split(/\s+/, 2)), (href = hrefParts.shift()), (selector = hrefParts.shift()))), content || ("inline" === type ? (href ? (content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, "") : href)) : obj.isDom && (content = element)) : "html" === type ? (content = href) : type || href || !obj.isDom || ((type = "inline"), (content = element))), $.extend(obj, { href: href, type: type, content: content, title: title, selector: selector }), (group[i] = obj);
                }), (F.opts = $.extend(!0, {}, F.defaults, opts)), opts.keys !==
                    undefined &&
                    (F.opts.keys =
                        !!opts.keys &&
                        $.extend(
                            {},
                            F.defaults.keys,
                            opts.keys
                        )), (F.group = group), F._start(F.opts.index);
        },
        cancel: function() {
            var coming = F.coming;
            coming &&
                !1 !== F.trigger("onCancel") &&
                (
                    F.hideLoading(),
                    F.ajaxLoad && F.ajaxLoad.abort(),
                    (F.ajaxLoad = null),
                    F.imgPreload &&
                        (F.imgPreload.onload = F.imgPreload.onerror = null),
                    coming.wrap &&
                        coming.wrap.stop(!0, !0).trigger("onReset").remove(),
                    (F.coming = null),
                    F.current || F._afterZoomOut(coming)
                );
        },
        close: function(event) {
            F.cancel(), !1 !== F.trigger("beforeClose") &&
                (
                    F.unbindEvents(),
                    F.isActive &&
                        (F.isOpen && event !== !0
                            ? (
                                  (F.isOpen = F.isOpened = !1),
                                  (F.isClosing = !0),
                                  $(".fancybox-item, .fancybox-nav").remove(),
                                  F.wrap
                                      .stop(!0, !0)
                                      .removeClass("fancybox-opened"),
                                  F.transitions[F.current.closeMethod]()
                              )
                            : (
                                  $(".fancybox-wrap")
                                      .stop(!0)
                                      .trigger("onReset")
                                      .remove(),
                                  F._afterZoomOut()
                              ))
                );
        },
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear(), F.current &&
                        F.player.isActive &&
                        (F.player.timer = setTimeout(
                            F.next,
                            F.current.playSpeed
                        ));
                },
                stop = function() {
                    clear(), $("body").unbind(
                        ".player"
                    ), (F.player.isActive = !1), F.trigger("onPlayEnd");
                },
                start = function() {
                    F.current &&
                        (F.current.loop ||
                            F.current.index < F.group.length - 1) &&
                        (
                            (F.player.isActive = !0),
                            $("body").bind({
                                "afterShow.player onUpdate.player": set,
                                "onCancel.player beforeClose.player": stop,
                                "beforeLoad.player": clear
                            }),
                            set(),
                            F.trigger("onPlayStart")
                        );
                };
            action === !0 || (!F.player.isActive && action !== !1)
                ? start()
                : stop();
        },
        next: function(direction) {
            var current = F.current;
            current &&
                (
                    isString(direction) || (direction = current.direction.next),
                    F.jumpto(current.index + 1, direction, "next")
                );
        },
        prev: function(direction) {
            var current = F.current;
            current &&
                (
                    isString(direction) || (direction = current.direction.prev),
                    F.jumpto(current.index - 1, direction, "prev")
                );
        },
        jumpto: function(index, direction, router) {
            var current = F.current;
            current &&
                (
                    (index = getScalar(index)),
                    (F.direction =
                        direction ||
                        current.direction[
                            index >= current.index ? "next" : "prev"
                        ]),
                    (F.router = router || "jumpto"),
                    current.loop &&
                        (
                            index < 0 &&
                                (index =
                                    current.group.length +
                                    index % current.group.length),
                            (index %= current.group.length)
                        ),
                    current.group[index] !== undefined &&
                        (F.cancel(), F._start(index))
                );
        },
        reposition: function(e, onlyAbsolute) {
            var pos,
                current = F.current,
                wrap = current ? current.wrap : null;
            wrap &&
                (
                    (pos = F._getPosition(onlyAbsolute)),
                    e && "scroll" === e.type
                        ? (
                              delete pos.position,
                              wrap.stop(!0, !0).animate(pos, 200)
                          )
                        : (
                              wrap.css(pos),
                              (current.pos = $.extend({}, current.dim, pos))
                          )
                );
        },
        update: function(e) {
            var type = e && e.type,
                anyway = !type || "orientationchange" === type;
            anyway && (clearTimeout(didUpdate), (didUpdate = null)), F.isOpen &&
                !didUpdate &&
                (didUpdate = setTimeout(function() {
                    var current = F.current;
                    current &&
                        !F.isClosing &&
                        (
                            F.wrap.removeClass("fancybox-tmp"),
                            (anyway ||
                                "load" === type ||
                                ("resize" === type && current.autoResize)) &&
                                F._setDimension(),
                            ("scroll" === type && current.canShrink) ||
                                F.reposition(e),
                            F.trigger("onUpdate"),
                            (didUpdate = null)
                        );
                }, anyway && !isTouch ? 0 : 300));
        },
        toggle: function(action) {
            F.isOpen &&
                (
                    (F.current.fitToView =
                        "boolean" === $.type(action)
                            ? action
                            : !F.current.fitToView),
                    isTouch &&
                        (
                            F.wrap.removeAttr("style").addClass("fancybox-tmp"),
                            F.trigger("onUpdate")
                        ),
                    F.update()
                );
        },
        hideLoading: function() {
            D.unbind(".loading"), $("#fancybox-loading").remove();
        },
        showLoading: function() {
            var el, viewport;
            F.hideLoading(), (el = $(
                '<div id="fancybox-loading"><div></div></div>'
            )
                .click(F.cancel)
                .appendTo("body")), D.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) &&
                    (e.preventDefault(), F.cancel());
            }), F.defaults.fixed ||
                (
                    (viewport = F.getViewport()),
                    el.css({
                        position: "absolute",
                        top: 0.5 * viewport.h + viewport.y,
                        left: 0.5 * viewport.w + viewport.x
                    })
                );
        },
        getViewport: function() {
            var locked = (F.current && F.current.locked) || !1,
                rez = { x: W.scrollLeft(), y: W.scrollTop() };
            return locked
                ? (
                      (rez.w = locked[0].clientWidth),
                      (rez.h = locked[0].clientHeight)
                  )
                : (
                      (rez.w =
                          isTouch && window.innerWidth
                              ? window.innerWidth
                              : W.width()),
                      (rez.h =
                          isTouch && window.innerHeight
                              ? window.innerHeight
                              : W.height())
                  ), rez;
        },
        unbindEvents: function() {
            F.wrap && isQuery(F.wrap) && F.wrap.unbind(".fb"), D.unbind(
                ".fb"
            ), W.unbind(".fb");
        },
        bindEvents: function() {
            var keys,
                current = F.current;
            current &&
                (
                    W.bind(
                        "orientationchange.fb" +
                            (isTouch ? "" : " resize.fb") +
                            (current.autoCenter && !current.locked
                                ? " scroll.fb"
                                : ""),
                        F.update
                    ),
                    (keys = current.keys),
                    keys &&
                        D.bind("keydown.fb", function(e) {
                            var code = e.which || e.keyCode,
                                target = e.target || e.srcElement;
                            return (
                                (27 !== code || !F.coming) &&
                                void (
                                    e.ctrlKey ||
                                    e.altKey ||
                                    e.shiftKey ||
                                    e.metaKey ||
                                    (target &&
                                        (target.type ||
                                            $(target).is(
                                                "[contenteditable]"
                                            ))) ||
                                    $.each(keys, function(i, val) {
                                        return current.group.length > 1 &&
                                        val[code] !== undefined
                                            ? (
                                                  F[i](val[code]),
                                                  e.preventDefault(),
                                                  !1
                                              )
                                            : $.inArray(code, val) > -1
                                              ? (F[i](), e.preventDefault(), !1)
                                              : void 0;
                                    })
                                )
                            );
                        }),
                    $.fn.mousewheel &&
                        current.mouseWheel &&
                        F.wrap.bind("mousewheel.fb", function(
                            e,
                            delta,
                            deltaX,
                            deltaY
                        ) {
                            for (
                                var target = e.target || null,
                                    parent = $(target),
                                    canScroll = !1;
                                parent.length &&
                                !(
                                    canScroll ||
                                    parent.is(".fancybox-skin") ||
                                    parent.is(".fancybox-wrap")
                                );

                            )
                                (canScroll = isScrollable(
                                    parent[0]
                                )), (parent = $(parent).parent());
                            0 === delta ||
                                canScroll ||
                                (F.group.length > 1 &&
                                    !current.canShrink &&
                                    (
                                        deltaY > 0 || deltaX > 0
                                            ? F.prev(
                                                  deltaY > 0 ? "down" : "left"
                                              )
                                            : (deltaY < 0 || deltaX < 0) &&
                                              F.next(
                                                  deltaY < 0 ? "up" : "right"
                                              ),
                                        e.preventDefault()
                                    ));
                        })
                );
        },
        trigger: function(event, o) {
            var ret,
                obj = o || F.coming || F.current;
            if (obj) {
                if (
                    (
                        $.isFunction(obj[event]) &&
                            (ret = obj[event].apply(
                                obj,
                                Array.prototype.slice.call(arguments, 1)
                            )),
                        ret === !1
                    )
                )
                    return !1;
                obj.helpers &&
                    $.each(obj.helpers, function(helper, opts) {
                        opts &&
                            F.helpers[helper] &&
                            $.isFunction(F.helpers[helper][event]) &&
                            (
                                (opts = $.extend(
                                    !0,
                                    {},
                                    F.helpers[helper].defaults,
                                    opts
                                )),
                                F.helpers[helper][event](opts, obj)
                            );
                    }), $.event.trigger(event + ".fb");
            }
        },
        isImage: function(str) {
            return (
                isString(str) &&
                str.match(
                    /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i
                )
            );
        },
        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(index) {
            var obj,
                href,
                type,
                margin,
                padding,
                coming = {};
            if (
                (
                    (index = getScalar(index)),
                    (obj = F.group[index] || null),
                    !obj
                )
            )
                return !1;
            if (
                (
                    (coming = $.extend(!0, {}, F.opts, obj)),
                    (margin = coming.margin),
                    (padding = coming.padding),
                    "number" === $.type(margin) &&
                        (coming.margin = [margin, margin, margin, margin]),
                    "number" === $.type(padding) &&
                        (coming.padding = [padding, padding, padding, padding]),
                    coming.modal &&
                        $.extend(!0, coming, {
                            closeBtn: !1,
                            closeClick: !1,
                            nextClick: !1,
                            arrows: !1,
                            mouseWheel: !1,
                            keys: null,
                            helpers: { overlay: { closeClick: !1 } }
                        }),
                    coming.autoSize &&
                        (coming.autoWidth = coming.autoHeight = !0),
                    "auto" === coming.width && (coming.autoWidth = !0),
                    "auto" === coming.height && (coming.autoHeight = !0),
                    (coming.group = F.group),
                    (coming.index = index),
                    (F.coming = coming),
                    !1 === F.trigger("beforeLoad")
                )
            )
                return void (F.coming = null);
            if (((type = coming.type), (href = coming.href), !type))
                return (F.coming = null), !(
                    !F.current ||
                    !F.router ||
                    "jumpto" === F.router
                ) && ((F.current.index = index), F[F.router](F.direction));
            if (
                (
                    (F.isActive = !0),
                    ("image" !== type && "swf" !== type) ||
                        (
                            (coming.autoHeight = coming.autoWidth = !1),
                            (coming.scrolling = "visible")
                        ),
                    "image" === type && (coming.aspectRatio = !0),
                    "iframe" === type &&
                        isTouch &&
                        (coming.scrolling = "scroll"),
                    (coming.wrap = $(coming.tpl.wrap)
                        .addClass(
                            "fancybox-" +
                                (isTouch ? "mobile" : "desktop") +
                                " fancybox-type-" +
                                type +
                                " fancybox-tmp " +
                                coming.wrapCSS
                        )
                        .appendTo(coming.parent || "body")),
                    $.extend(coming, {
                        skin: $(".fancybox-skin", coming.wrap),
                        outer: $(".fancybox-outer", coming.wrap),
                        inner: $(".fancybox-inner", coming.wrap)
                    }),
                    $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                        coming.skin.css(
                            "padding" + v,
                            getValue(coming.padding[i])
                        );
                    }),
                    F.trigger("onReady"),
                    "inline" === type || "html" === type
                )
            ) {
                if (!coming.content || !coming.content.length)
                    return F._error("content");
            } else if (!href) return F._error("href");
            "image" === type
                ? F._loadImage()
                : "ajax" === type
                  ? F._loadAjax()
                  : "iframe" === type ? F._loadIframe() : F._afterLoad();
        },
        _error: function(type) {
            $.extend(F.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: type,
                content: F.coming.tpl.error
            }), F._afterLoad();
        },
        _loadImage: function() {
            var img = (F.imgPreload = new Image());
            (img.onload = function() {
                (this.onload = this.onerror = null), (F.coming.width = this.width), (F.coming.height = this.height), F._afterLoad();
            }), (img.onerror = function() {
                (this.onload = this.onerror = null), F._error("image");
            }), (img.src = F.coming.href), img.complete !== !0 &&
                F.showLoading();
        },
        _loadAjax: function() {
            var coming = F.coming;
            F.showLoading(), (F.ajaxLoad = $.ajax(
                $.extend({}, coming.ajax, {
                    url: coming.href,
                    error: function(jqXHR, textStatus) {
                        F.coming && "abort" !== textStatus
                            ? F._error("ajax", jqXHR)
                            : F.hideLoading();
                    },
                    success: function(data, textStatus) {
                        "success" === textStatus &&
                            ((coming.content = data), F._afterLoad());
                    }
                })
            ));
        },
        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(
                    coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())
                )
                    .attr(
                        "scrolling",
                        isTouch ? "auto" : coming.iframe.scrolling
                    )
                    .attr("src", coming.href);
            $(coming.wrap).bind("onReset", function() {
                try {
                    $(this)
                        .find("iframe")
                        .hide()
                        .attr("src", "//about:blank")
                        .end()
                        .empty();
                } catch (e) {}
            }), coming.iframe.preload &&
                (
                    F.showLoading(),
                    iframe.one("load", function() {
                        $(this).data(
                            "ready",
                            1
                        ), isTouch || $(this).bind("load.fb", F.update), $(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), F._afterLoad();
                    })
                ), (coming.content = iframe.appendTo(coming.inner)), coming
                .iframe.preload || F._afterLoad();
        },
        _preloadImages: function() {
            var item,
                i,
                group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0;
            for (i = 1; i <= cnt; i += 1)
                (item = group[(current.index + i) % len]), "image" ===
                    item.type &&
                    item.href &&
                    (new Image().src = item.href);
        },
        _afterLoad: function() {
            var current,
                content,
                type,
                scrolling,
                href,
                embed,
                coming = F.coming,
                previous = F.current,
                placeholder = "fancybox-placeholder";
            if ((F.hideLoading(), coming && F.isActive !== !1)) {
                if (!1 === F.trigger("afterLoad", coming, previous))
                    return coming.wrap
                        .stop(!0)
                        .trigger("onReset")
                        .remove(), void (F.coming = null);
                switch ((
                    previous &&
                        (
                            F.trigger("beforeChange", previous),
                            previous.wrap
                                .stop(!0)
                                .removeClass("fancybox-opened")
                                .find(".fancybox-item, .fancybox-nav")
                                .remove()
                        ),
                    F.unbindEvents(),
                    (current = coming),
                    (content = coming.content),
                    (type = coming.type),
                    (scrolling = coming.scrolling),
                    $.extend(F, {
                        wrap: current.wrap,
                        skin: current.skin,
                        outer: current.outer,
                        inner: current.inner,
                        current: current,
                        previous: previous
                    }),
                    (href = current.href),
                    type
                )) {
                    case "inline":
                    case "ajax":
                    case "html":
                        current.selector
                            ? (content = $("<div>")
                                  .html(content)
                                  .find(current.selector))
                            : isQuery(content) &&
                              (
                                  content.data(placeholder) ||
                                      content.data(
                                          placeholder,
                                          $(
                                              '<div class="' +
                                                  placeholder +
                                                  '"></div>'
                                          )
                                              .insertAfter(content)
                                              .hide()
                                      ),
                                  (content = content.show().detach()),
                                  current.wrap.bind("onReset", function() {
                                      $(this).find(content).length &&
                                          content
                                              .hide()
                                              .replaceAll(
                                                  content.data(placeholder)
                                              )
                                              .data(placeholder, !1);
                                  })
                              );
                        break;
                    case "image":
                        content = current.tpl.image.replace("{href}", href);
                        break;
                    case "swf":
                        (content =
                            '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                            href +
                            '"></param>'), (embed =
                            ""), $.each(current.swf, function(name, val) {
                            (content +=
                                '<param name="' +
                                name +
                                '" value="' +
                                val +
                                '"></param>'), (embed += " " + name + '="' + val + '"');
                        }), (content +=
                            '<embed src="' +
                            href +
                            '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                            embed +
                            "></embed></object>");
                }
                (isQuery(content) && content.parent().is(current.inner)) ||
                    current.inner.append(content), F.trigger(
                    "beforeShow"
                ), current.inner.css(
                    "overflow",
                    "yes" === scrolling
                        ? "scroll"
                        : "no" === scrolling ? "hidden" : scrolling
                ), F._setDimension(), F.reposition(), (F.isOpen = !1), (F.coming = null), F.bindEvents(), F.isOpened
                    ? previous.prevMethod &&
                      F.transitions[previous.prevMethod]()
                    : $(".fancybox-wrap")
                          .not(current.wrap)
                          .stop(!0)
                          .trigger("onReset")
                          .remove(), F.transitions[
                    F.isOpened ? current.nextMethod : current.openMethod
                ](), F._preloadImages();
            }
        },
        _setDimension: function() {
            var wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body,
                viewport = F.getViewport(),
                steps = 0,
                canShrink = !1,
                canExpand = !1,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]);
            if (
                (
                    wrap
                        .add(skin)
                        .add(inner)
                        .width("auto")
                        .height("auto")
                        .removeClass("fancybox-tmp"),
                    (wPadding = getScalar(skin.outerWidth(!0) - skin.width())),
                    (hPadding = getScalar(
                        skin.outerHeight(!0) - skin.height()
                    )),
                    (wSpace = wMargin + wPadding),
                    (hSpace = hMargin + hPadding),
                    (origWidth = isPercentage(width)
                        ? (viewport.w - wSpace) * getScalar(width) / 100
                        : width),
                    (origHeight = isPercentage(height)
                        ? (viewport.h - hSpace) * getScalar(height) / 100
                        : height),
                    "iframe" === current.type
                )
            ) {
                if (
                    (
                        (iframe = current.content),
                        current.autoHeight && 1 === iframe.data("ready")
                    )
                )
                    try {
                        iframe[0].contentWindow.document.location &&
                            (
                                inner.width(origWidth).height(9999),
                                (body = iframe.contents().find("body")),
                                scrollOut && body.css("overflow-x", "hidden"),
                                (origHeight = body.height())
                            );
                    } catch (e) {}
            } else
                (current.autoWidth || current.autoHeight) &&
                    (
                        inner.addClass("fancybox-tmp"),
                        current.autoWidth || inner.width(origWidth),
                        current.autoHeight || inner.height(origHeight),
                        current.autoWidth && (origWidth = inner.width()),
                        current.autoHeight && (origHeight = inner.height()),
                        inner.removeClass("fancybox-tmp")
                    );
            if (
                (
                    (width = getScalar(origWidth)),
                    (height = getScalar(origHeight)),
                    (ratio = origWidth / origHeight),
                    (minWidth = getScalar(
                        isPercentage(minWidth)
                            ? getScalar(minWidth, "w") - wSpace
                            : minWidth
                    )),
                    (maxWidth = getScalar(
                        isPercentage(maxWidth)
                            ? getScalar(maxWidth, "w") - wSpace
                            : maxWidth
                    )),
                    (minHeight = getScalar(
                        isPercentage(minHeight)
                            ? getScalar(minHeight, "h") - hSpace
                            : minHeight
                    )),
                    (maxHeight = getScalar(
                        isPercentage(maxHeight)
                            ? getScalar(maxHeight, "h") - hSpace
                            : maxHeight
                    )),
                    (origMaxWidth = maxWidth),
                    (origMaxHeight = maxHeight),
                    current.fitToView &&
                        (
                            (maxWidth = Math.min(
                                viewport.w - wSpace,
                                maxWidth
                            )),
                            (maxHeight = Math.min(
                                viewport.h - hSpace,
                                maxHeight
                            ))
                        ),
                    (maxWidth_ = viewport.w - wMargin),
                    (maxHeight_ = viewport.h - hMargin),
                    current.aspectRatio
                        ? (
                              width > maxWidth &&
                                  (
                                      (width = maxWidth),
                                      (height = getScalar(width / ratio))
                                  ),
                              height > maxHeight &&
                                  (
                                      (height = maxHeight),
                                      (width = getScalar(height * ratio))
                                  ),
                              width < minWidth &&
                                  (
                                      (width = minWidth),
                                      (height = getScalar(width / ratio))
                                  ),
                              height < minHeight &&
                                  (
                                      (height = minHeight),
                                      (width = getScalar(height * ratio))
                                  )
                          )
                        : (
                              (width = Math.max(
                                  minWidth,
                                  Math.min(width, maxWidth)
                              )),
                              current.autoHeight &&
                                  "iframe" !== current.type &&
                                  (
                                      inner.width(width),
                                      (height = inner.height())
                                  ),
                              (height = Math.max(
                                  minHeight,
                                  Math.min(height, maxHeight)
                              ))
                          ),
                    current.fitToView
                )
            )
                if (
                    (
                        inner.width(width).height(height),
                        wrap.width(width + wPadding),
                        (width_ = wrap.width()),
                        (height_ = wrap.height()),
                        current.aspectRatio
                    )
                )
                    for (
                        ;
                        (width_ > maxWidth_ || height_ > maxHeight_) &&
                        width > minWidth &&
                        height > minHeight &&
                        !(steps++ > 19);

                    )
                        (height = Math.max(
                            minHeight,
                            Math.min(maxHeight, height - 10)
                        )), (width = getScalar(height * ratio)), width <
                            minWidth &&
                            (
                                (width = minWidth),
                                (height = getScalar(width / ratio))
                            ), width > maxWidth &&
                            (
                                (width = maxWidth),
                                (height = getScalar(width / ratio))
                            ), inner.width(width).height(height), wrap.width(
                            width + wPadding
                        ), (width_ = wrap.width()), (height_ = wrap.height());
                else
                    (width = Math.max(
                        minWidth,
                        Math.min(width, width - (width_ - maxWidth_))
                    )), (height = Math.max(
                        minHeight,
                        Math.min(height, height - (height_ - maxHeight_))
                    ));
            scrollOut &&
                "auto" === scrolling &&
                height < origHeight &&
                width + wPadding + scrollOut < maxWidth_ &&
                (width += scrollOut), inner
                .width(width)
                .height(height), wrap.width(
                width + wPadding
            ), (width_ = wrap.width()), (height_ = wrap.height()), (canShrink =
                (width_ > maxWidth_ || height_ > maxHeight_) &&
                width > minWidth &&
                height > minHeight), (canExpand = current.aspectRatio
                ? width < origMaxWidth &&
                  height < origMaxHeight &&
                  width < origWidth &&
                  height < origHeight
                : (width < origMaxWidth || height < origMaxHeight) &&
                  (width < origWidth ||
                      height < origHeight)), $.extend(current, {
                dim: { width: getValue(width_), height: getValue(height_) },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(!0),
                skinSpace: skin.height() - height
            }), !iframe &&
                current.autoHeight &&
                height > minHeight &&
                height < maxHeight &&
                !canExpand &&
                inner.height("auto");
        },
        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = { position: "absolute", top: margin[0], left: margin[3] };
            return current.autoCenter &&
            current.fixed &&
            !onlyAbsolute &&
            height <= viewport.h &&
            width <= viewport.w
                ? (rez.position = "fixed")
                : current.locked ||
                  (
                      (rez.top += viewport.y),
                      (rez.left += viewport.x)
                  ), (rez.top = getValue(
                Math.max(
                    rez.top,
                    rez.top + (viewport.h - height) * current.topRatio
                )
            )), (rez.left = getValue(
                Math.max(
                    rez.left,
                    rez.left + (viewport.w - width) * current.leftRatio
                )
            )), rez;
        },
        _afterZoomIn: function() {
            var current = F.current;
            current &&
                (
                    (F.isOpen = F.isOpened = !0),
                    F.wrap
                        .css("overflow", "visible")
                        .addClass("fancybox-opened"),
                    F.update(),
                    (current.closeClick ||
                        (current.nextClick && F.group.length > 1)) &&
                        F.inner
                            .css("cursor", "pointer")
                            .bind("click.fb", function(e) {
                                $(e.target).is("a") ||
                                    $(e.target).parent().is("a") ||
                                    (
                                        e.preventDefault(),
                                        F[
                                            current.closeClick
                                                ? "close"
                                                : "next"
                                        ]()
                                    );
                            }),
                    current.closeBtn &&
                        $(current.tpl.closeBtn)
                            .appendTo(F.skin)
                            .bind("click.fb", function(e) {
                                e.preventDefault(), F.close();
                            }),
                    current.arrows &&
                        F.group.length > 1 &&
                        (
                            (current.loop || current.index > 0) &&
                                $(current.tpl.prev)
                                    .appendTo(F.outer)
                                    .bind("click.fb", F.prev),
                            (current.loop ||
                                current.index < F.group.length - 1) &&
                                $(current.tpl.next)
                                    .appendTo(F.outer)
                                    .bind("click.fb", F.next)
                        ),
                    F.trigger("afterShow"),
                    current.loop || current.index !== current.group.length - 1
                        ? F.opts.autoPlay &&
                          !F.player.isActive &&
                          ((F.opts.autoPlay = !1), F.play())
                        : F.play(!1)
                );
        },
        _afterZoomOut: function(obj) {
            (obj = obj || F.current), $(".fancybox-wrap")
                .trigger("onReset")
                .remove(), $.extend(F, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), F.trigger("afterClose", obj);
        }
    }), (F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();
            return !orig &&
                current.isDom &&
                element.is(":visible") &&
                (
                    (orig = element.find("img:first")),
                    orig.length || (orig = element)
                ), isQuery(orig)
                ? (
                      (pos = orig.offset()),
                      orig.is("img") &&
                          (
                              (width = orig.outerWidth()),
                              (height = orig.outerHeight())
                          )
                  )
                : (
                      (pos.top =
                          viewport.y +
                          (viewport.h - height) * current.topRatio),
                      (pos.left =
                          viewport.x + (viewport.w - width) * current.leftRatio)
                  ), ("fixed" === F.wrap.css("position") || current.locked) &&
                ((pos.top -= viewport.y), (pos.left -= viewport.x)), (pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            });
        },
        step: function(now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;
            ("width" !== prop && "height" !== prop) ||
                (
                    (ratio =
                        fx.end === fx.start
                            ? 1
                            : (now - fx.start) / (fx.end - fx.start)),
                    F.isClosing && (ratio = 1 - ratio),
                    (padding =
                        "width" === prop ? current.wPadding : current.hPadding),
                    (value = now - padding),
                    F.skin[prop](
                        getScalar(
                            "width" === prop ? value : value - wrapSpace * ratio
                        )
                    ),
                    F.inner[prop](
                        getScalar(
                            "width" === prop
                                ? value
                                : value - wrapSpace * ratio - skinSpace * ratio
                        )
                    )
                );
        },
        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = "elastic" === effect,
                endPos = $.extend({ opacity: 1 }, startPos);
            delete endPos.position, elastic
                ? (
                      (startPos = this.getOrigPosition()),
                      current.openOpacity && (startPos.opacity = 0.1)
                  )
                : "fade" === effect && (startPos.opacity = 0.1), F.wrap
                .css(startPos)
                .animate(endPos, {
                    duration: "none" === effect ? 0 : current.openSpeed,
                    easing: current.openEasing,
                    step: elastic ? this.step : null,
                    complete: F._afterZoomIn
                });
        },
        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = "elastic" === effect,
                endPos = { opacity: 0.1 };
            elastic &&
                (
                    (endPos = this.getOrigPosition()),
                    current.closeOpacity && (endPos.opacity = 0.1)
                ), F.wrap.animate(endPos, {
                duration: "none" === effect ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },
        changeIn: function() {
            var field,
                current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = { opacity: 1 },
                direction = F.direction,
                distance = 200;
            (startPos.opacity = 0.1), "elastic" === effect &&
                (
                    (field =
                        "down" === direction || "up" === direction
                            ? "top"
                            : "left"),
                    "down" === direction || "right" === direction
                        ? (
                              (startPos[field] = getValue(
                                  getScalar(startPos[field]) - distance
                              )),
                              (endPos[field] = "+=" + distance + "px")
                          )
                        : (
                              (startPos[field] = getValue(
                                  getScalar(startPos[field]) + distance
                              )),
                              (endPos[field] = "-=" + distance + "px")
                          )
                ), "none" === effect
                ? F._afterZoomIn()
                : F.wrap
                      .css(startPos)
                      .animate(endPos, {
                          duration: current.nextSpeed,
                          easing: current.nextEasing,
                          complete: F._afterZoomIn
                      });
        },
        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = { opacity: 0.1 },
                direction = F.direction,
                distance = 200;
            "elastic" === effect &&
                (endPos[
                    "down" === direction || "up" === direction ? "top" : "left"
                ] =
                    ("up" === direction || "left" === direction ? "-" : "+") +
                    "=" +
                    distance +
                    "px"), previous.wrap.animate(endPos, {
                duration: "none" === effect ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger("onReset").remove();
                }
            });
        }
    }), (F.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !isTouch,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        create: function(opts) {
            (opts = $.extend({}, this.defaults, opts)), this.overlay &&
                this.close(), (this.overlay = $(
                '<div class="fancybox-overlay"></div>'
            ).appendTo("body")), (this.fixed = !1), opts.fixed &&
                F.defaults.fixed &&
                (
                    this.overlay.addClass("fancybox-overlay-fixed"),
                    (this.fixed = !0)
                );
        },
        open: function(opts) {
            var that = this;
            (opts = $.extend({}, this.defaults, opts)), this.overlay
                ? this.overlay.unbind(".overlay").width("auto").height("auto")
                : this.create(opts), this.fixed ||
                (
                    W.bind("resize.overlay", $.proxy(this.update, this)),
                    this.update()
                ), opts.closeClick &&
                this.overlay.bind("click.overlay", function(e) {
                    $(e.target).hasClass("fancybox-overlay") &&
                        (F.isActive ? F.close() : that.close());
                }), this.overlay.css(opts.css).show();
        },
        close: function() {
            $(".fancybox-overlay").remove(), W.unbind(
                "resize.overlay"
            ), (this.overlay = null), this.margin !== !1 &&
                (
                    $("body").css("margin-right", this.margin),
                    (this.margin = !1)
                ), this.el && this.el.removeClass("fancybox-lock");
        },
        update: function() {
            var offsetWidth,
                width = "100%";
            this.overlay.width(width).height("100%"), IE
                ? (
                      (offsetWidth = Math.max(
                          document.documentElement.offsetWidth,
                          document.body.offsetWidth
                      )),
                      D.width() > offsetWidth && (width = D.width())
                  )
                : D.width() > W.width() &&
                  (width = D.width()), this.overlay
                .width(width)
                .height(D.height());
        },
        onReady: function(opts, obj) {
            $(".fancybox-overlay").stop(!0, !0), this.overlay ||
                (
                    (this.margin =
                        (D.height() > W.height() ||
                            "scroll" === $("body").css("overflow-y")) &&
                        $("body").css("margin-right")),
                    (this.el = $(
                        document.all && !document.querySelector
                            ? "html"
                            : "body"
                    )),
                    this.create(opts)
                ), opts.locked &&
                this.fixed &&
                (
                    (obj.locked = this.overlay.append(obj.wrap)),
                    (obj.fixed = !1)
                ), opts.showEarly === !0 &&
                this.beforeShow.apply(this, arguments);
        },
        beforeShow: function(opts, obj) {
            obj.locked &&
                (
                    this.el.addClass("fancybox-lock"),
                    this.margin !== !1 &&
                        $("body").css(
                            "margin-right",
                            getScalar(this.margin) + obj.scrollbarWidth
                        )
                ), this.open(opts);
        },
        onUpdate: function() {
            this.fixed || this.update();
        },
        afterClose: function(opts) {
            this.overlay &&
                !F.isActive &&
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
        }
    }), (F.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function(opts) {
            var title,
                target,
                current = F.current,
                text = current.title,
                type = opts.type;
            if (
                (
                    $.isFunction(text) &&
                        (text = text.call(current.element, current)),
                    isString(text) && "" !== $.trim(text)
                )
            ) {
                switch ((
                    (title = $(
                        '<div class="fancybox-title fancybox-title-' +
                            type +
                            '-wrap">' +
                            text +
                            "</div>"
                    )),
                    type
                )) {
                    case "inside":
                        target = F.skin;
                        break;
                    case "outside":
                        target = F.wrap;
                        break;
                    case "over":
                        target = F.inner;
                        break;
                    default:
                        (target = F.skin), title.appendTo("body"), IE &&
                            title.width(title.width()), title.wrapInner(
                            '<span class="child"></span>'
                        ), (F.current.margin[2] += Math.abs(
                            getScalar(title.css("margin-bottom"))
                        ));
                }
                title["top" === opts.position ? "prependTo" : "appendTo"](
                    target
                );
            }
        }
    }), ($.fn.fancybox = function(options) {
        var index,
            that = $(this),
            selector = this.selector || "",
            run = function(e) {
                var relType,
                    relVal,
                    what = $(this).blur(),
                    idx = index;
                e.ctrlKey ||
                    e.altKey ||
                    e.shiftKey ||
                    e.metaKey ||
                    what.is(".fancybox-wrap") ||
                    (
                        (relType = options.groupAttr || "data-fancybox-group"),
                        (relVal = what.attr(relType)),
                        relVal ||
                            (
                                (relType = "rel"),
                                (relVal = what.get(0)[relType])
                            ),
                        relVal &&
                            "" !== relVal &&
                            "nofollow" !== relVal &&
                            (
                                (what = selector.length ? $(selector) : that),
                                (what = what.filter(
                                    "[" + relType + '="' + relVal + '"]'
                                )),
                                (idx = what.index(this))
                            ),
                        (options.index = idx),
                        F.open(what, options) !== !1 && e.preventDefault()
                    );
            };
        return (options = options || {}), (index =
            options.index || 0), selector && options.live !== !1
            ? D.undelegate(selector, "click.fb-start").delegate(
                  selector + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  run
              )
            : that
                  .unbind("click.fb-start")
                  .bind("click.fb-start", run), this.filter(
            "[data-fancybox-start=1]"
        ).trigger("click"), this;
    }), D.ready(function() {
        $.scrollbarWidth === undefined &&
            ($.scrollbarWidth = function() {
                var parent = $(
                        '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
                    ).appendTo("body"),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();
                return parent.remove(), width;
            }), $.support.fixedPosition === undefined &&
            ($.support.fixedPosition = (function() {
                var elem = $(
                        '<div style="position:fixed;top:20px;"></div>'
                    ).appendTo("body"),
                    fixed =
                        20 === elem[0].offsetTop || 15 === elem[0].offsetTop;
                return elem.remove(), fixed;
            })()), $.extend(F.defaults, { scrollbarWidth: $.scrollbarWidth(), fixed: $.support.fixedPosition, parent: $("body") });
    });
})(window, document, jQuery), (function(window, document, undefined) {
    !(function(factory) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["jquery", "imagesLoaded"], factory)
            : jQuery && !jQuery.fn.qtip && factory(jQuery);
    })(function($) {
        function QTip(target, options, id, attr) {
            (this.id = id), (this.target = target), (this.tooltip = NULL), (this.elements = elements = { target: target }), (this._id = NAMESPACE + "-" + id), (this.timers = { img: {} }), (this.options = options), (this.plugins = {}), (this.cache = cache = { event: {}, target: $(), disabled: FALSE, attr: attr, onTooltip: FALSE, lastClass: "" }), (this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = FALSE);
        }
        function invalidOpt(a) {
            return a === NULL || "object" !== $.type(a);
        }
        function invalidContent(c) {
            return !(
                $.isFunction(c) ||
                (c && c.attr) ||
                c.length ||
                ("object" === $.type(c) && (c.jquery || c.then))
            );
        }
        function sanitizeOptions(opts) {
            var content, text, ajax, once;
            return invalidOpt(opts)
                ? FALSE
                : (
                      invalidOpt(opts.metadata) &&
                          (opts.metadata = { type: opts.metadata }),
                      "content" in opts &&
                          (
                              (content = opts.content),
                              invalidOpt(content) ||
                              content.jquery ||
                              content.done
                                  ? (content = opts.content = {
                                        text: (text = invalidContent(content)
                                            ? FALSE
                                            : content)
                                    })
                                  : (text = content.text),
                              "ajax" in content &&
                                  (
                                      (ajax = content.ajax),
                                      (once = ajax && ajax.once !== FALSE),
                                      delete content.ajax,
                                      (content.text = function(event, api) {
                                          var loading =
                                                  text ||
                                                  $(this).attr(
                                                      api.options.content.attr
                                                  ) ||
                                                  "Loading...",
                                              deferred = $.ajax(
                                                  $.extend({}, ajax, {
                                                      context: api
                                                  })
                                              )
                                                  .then(
                                                      ajax.success,
                                                      NULL,
                                                      ajax.error
                                                  )
                                                  .then(
                                                      function(content) {
                                                          return content &&
                                                              once &&
                                                              api.set(
                                                                  "content.text",
                                                                  content
                                                              ), content;
                                                      },
                                                      function(
                                                          xhr,
                                                          status,
                                                          error
                                                      ) {
                                                          api.destroyed ||
                                                              0 ===
                                                                  xhr.status ||
                                                              api.set(
                                                                  "content.text",
                                                                  status +
                                                                      ": " +
                                                                      error
                                                              );
                                                      }
                                                  );
                                          return once
                                              ? loading
                                              : (
                                                    api.set(
                                                        "content.text",
                                                        loading
                                                    ),
                                                    deferred
                                                );
                                      })
                                  ),
                              "title" in content &&
                                  (
                                      invalidOpt(content.title) ||
                                          (
                                              (content.button =
                                                  content.title.button),
                                              (content.title =
                                                  content.title.text)
                                          ),
                                      invalidContent(content.title || FALSE) &&
                                          (content.title = FALSE)
                                  )
                          ),
                      "position" in opts &&
                          invalidOpt(opts.position) &&
                          (opts.position = {
                              my: opts.position,
                              at: opts.position
                          }),
                      "show" in opts &&
                          invalidOpt(opts.show) &&
                          (opts.show = opts.show.jquery
                              ? { target: opts.show }
                              : opts.show === TRUE
                                ? { ready: TRUE }
                                : { event: opts.show }),
                      "hide" in opts &&
                          invalidOpt(opts.hide) &&
                          (opts.hide = opts.hide.jquery
                              ? { target: opts.hide }
                              : { event: opts.hide }),
                      "style" in opts &&
                          invalidOpt(opts.style) &&
                          (opts.style = { classes: opts.style }),
                      $.each(PLUGINS, function() {
                          this.sanitize && this.sanitize(opts);
                      }),
                      opts
                  );
        }
        function convertNotation(options, notation) {
            for (
                var obj, i = 0, option = options, levels = notation.split(".");
                (option = option[levels[i++]]);

            )
                i < levels.length && (obj = option);
            return [obj || options, levels.pop()];
        }
        function setCallback(notation, args) {
            var category, rule, match;
            for (category in this.checks)
                for (rule in this.checks[category])
                    (match = new RegExp(rule, "i").exec(notation)) &&
                        (
                            args.push(match),
                            ("builtin" === category ||
                                this.plugins[category]) &&
                                this.checks[category][rule].apply(
                                    this.plugins[category] || this,
                                    args
                                )
                        );
        }
        function createWidgetClass(cls) {
            return WIDGET.concat("").join(cls ? "-" + cls + " " : " ");
        }
        function showMethod(event) {
            if (this.tooltip.hasClass(CLASS_DISABLED)) return FALSE;
            clearTimeout(this.timers.show), clearTimeout(this.timers.hide);
            var callback = $.proxy(function() {
                this.toggle(TRUE, event);
            }, this);
            this.options.show.delay > 0
                ? (this.timers.show = setTimeout(
                      callback,
                      this.options.show.delay
                  ))
                : callback();
        }
        function hideMethod(event) {
            if (this.tooltip.hasClass(CLASS_DISABLED)) return FALSE;
            var relatedTarget = $(event.relatedTarget),
                ontoTooltip =
                    relatedTarget.closest(SELECTOR)[0] === this.tooltip[0],
                ontoTarget = relatedTarget[0] === this.options.show.target[0];
            if (
                (
                    clearTimeout(this.timers.show),
                    clearTimeout(this.timers.hide),
                    (this !== relatedTarget[0] &&
                        "mouse" === this.options.position.target &&
                        ontoTooltip) ||
                        (this.options.hide.fixed &&
                            /mouse(out|leave|move)/.test(event.type) &&
                            (ontoTooltip || ontoTarget))
                )
            )
                try {
                    event.preventDefault(), event.stopImmediatePropagation();
                } catch (e) {}
            else {
                var callback = $.proxy(function() {
                    this.toggle(FALSE, event);
                }, this);
                this.options.hide.delay > 0
                    ? (this.timers.hide = setTimeout(
                          callback,
                          this.options.hide.delay
                      ))
                    : callback();
            }
        }
        function inactiveMethod(event) {
            return this.tooltip.hasClass(CLASS_DISABLED) ||
            !this.options.hide.inactive
                ? FALSE
                : (
                      clearTimeout(this.timers.inactive),
                      void (this.timers.inactive = setTimeout(
                          $.proxy(function() {
                              this.hide(event);
                          }, this),
                          this.options.hide.inactive
                      ))
                  );
        }
        function repositionMethod(event) {
            this.rendered &&
                this.tooltip[0].offsetWidth > 0 &&
                this.reposition(event);
        }
        function delegate(selector, events, method) {
            $(document.body).delegate(
                selector,
                (events.split ? events : events.join(ns + " ")) + ns,
                function() {
                    var api = QTIP.api[$.attr(this, ATTR_ID)];
                    api && !api.disabled && method.apply(api, arguments);
                }
            );
        }
        function init(elem, id, opts) {
            var obj,
                posOptions,
                attr,
                config,
                title,
                docBody = $(document.body),
                newTarget = elem[0] === document ? docBody : elem,
                metadata = elem.metadata ? elem.metadata(opts.metadata) : NULL,
                metadata5 =
                    "html5" === opts.metadata.type && metadata
                        ? metadata[opts.metadata.name]
                        : NULL,
                html5 = elem.data(opts.metadata.name || "qtipopts");
            try {
                html5 = "string" == typeof html5 ? $.parseJSON(html5) : html5;
            } catch (e) {}
            if (
                (
                    (config = $.extend(
                        TRUE,
                        {},
                        QTIP.defaults,
                        opts,
                        "object" == typeof html5
                            ? sanitizeOptions(html5)
                            : NULL,
                        sanitizeOptions(metadata5 || metadata)
                    )),
                    (posOptions = config.position),
                    (config.id = id),
                    "boolean" == typeof config.content.text
                )
            ) {
                if (
                    (
                        (attr = elem.attr(config.content.attr)),
                        config.content.attr === FALSE || !attr
                    )
                )
                    return FALSE;
                config.content.text = attr;
            }
            if (
                (
                    posOptions.container.length ||
                        (posOptions.container = docBody),
                    posOptions.target === FALSE &&
                        (posOptions.target = newTarget),
                    config.show.target === FALSE &&
                        (config.show.target = newTarget),
                    config.show.solo === TRUE &&
                        (config.show.solo = posOptions.container.closest(
                            "body"
                        )),
                    config.hide.target === FALSE &&
                        (config.hide.target = newTarget),
                    config.position.viewport === TRUE &&
                        (config.position.viewport = posOptions.container),
                    (posOptions.container = posOptions.container.eq(0)),
                    (posOptions.at = new CORNER(posOptions.at, TRUE)),
                    (posOptions.my = new CORNER(posOptions.my)),
                    elem.data(NAMESPACE)
                )
            )
                if (config.overwrite) elem.qtip("destroy");
                else if (config.overwrite === FALSE) return FALSE;
            return elem.attr(
                ATTR_HAS,
                id
            ), config.suppress && (title = elem.attr("title")) && elem.removeAttr("title").attr(oldtitle, title).attr("title", ""), (obj = new QTip(elem, config, id, !!attr)), elem.data(NAMESPACE, obj), elem.one(
                "remove.qtip-" + id + " removeqtip.qtip-" + id,
                function() {
                    var api;
                    (api = $(this).data(NAMESPACE)) && api.destroy();
                }
            ), obj;
        }
        var QTIP,
            PROTOTYPE,
            CORNER,
            CHECKS,
            trackingBound,
            TRUE = !0,
            FALSE = !1,
            NULL = null,
            X = "x",
            Y = "y",
            WIDTH = "width",
            HEIGHT = "height",
            TOP = "top",
            LEFT = "left",
            BOTTOM = "bottom",
            RIGHT = "right",
            CENTER = "center",
            FLIPINVERT = "flipinvert",
            SHIFT = "shift",
            PLUGINS = {},
            NAMESPACE = "qtip",
            ATTR_HAS = "data-hasqtip",
            ATTR_ID = "data-qtip-id",
            WIDGET = ["ui-widget", "ui-tooltip"],
            SELECTOR = "." + NAMESPACE,
            INACTIVE_EVENTS = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(
                " "
            ),
            CLASS_FIXED = NAMESPACE + "-fixed",
            CLASS_DEFAULT = NAMESPACE + "-default",
            CLASS_FOCUS = NAMESPACE + "-focus",
            CLASS_HOVER = NAMESPACE + "-hover",
            CLASS_DISABLED = NAMESPACE + "-disabled",
            replaceSuffix = "_replacedByqTip",
            oldtitle = "oldtitle";
        (BROWSER = {
            ie: (function() {
                for (
                    var v = 3, div = document.createElement("div");
                    (div.innerHTML =
                        "<!--[if gt IE " + ++v + "]><i></i><![endif]-->") &&
                    div.getElementsByTagName("i")[0];

                );
                return v > 4 ? v : NaN;
            })(),
            iOS:
                parseFloat(
                    ("" +
                        (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
                            navigator.userAgent
                        ) || [0, ""])[1])
                        .replace("undefined", "3_2")
                        .replace("_", ".")
                        .replace("_", "")
                ) || FALSE
        }), (PROTOTYPE = QTip.prototype), (PROTOTYPE.render = function(show) {
            if (this.rendered || this.destroyed) return this;
            var self = this,
                options = this.options,
                cache = this.cache,
                elements = this.elements,
                text = options.content.text,
                title = options.content.title,
                button = options.content.button,
                posOptions = options.position,
                namespace = "." + this._id + " ",
                deferreds = [];
            return $.attr(
                this.target[0],
                "aria-describedby",
                this._id
            ), (this.tooltip = elements.tooltip = tooltip = $("<div/>", {
                id: this._id,
                class: [
                    NAMESPACE,
                    CLASS_DEFAULT,
                    options.style.classes,
                    NAMESPACE + "-pos-" + options.position.my.abbrev()
                ].join(" "),
                width: options.style.width || "",
                height: options.style.height || "",
                tracking:
                    "mouse" === posOptions.target && posOptions.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": FALSE,
                "aria-describedby": this._id + "-content",
                "aria-hidden": TRUE
            })
                .toggleClass(CLASS_DISABLED, this.disabled)
                .attr(ATTR_ID, this.id)
                .data(NAMESPACE, this)
                .appendTo(posOptions.container)
                .append(
                    (elements.content = $("<div />", {
                        class: NAMESPACE + "-content",
                        id: this._id + "-content",
                        "aria-atomic": TRUE
                    }))
                )), (this.rendered = -1), (this.positioning = TRUE), title &&
                (
                    this._createTitle(),
                    $.isFunction(title) ||
                        deferreds.push(this._updateTitle(title, FALSE))
                ), button && this._createButton(), $.isFunction(text) ||
                deferreds.push(
                    this._updateContent(text, FALSE)
                ), (this.rendered = TRUE), this._setWidget(), $.each(
                options.events,
                function(name, callback) {
                    $.isFunction(callback) &&
                        tooltip.bind(
                            ("toggle" === name
                                ? ["tooltipshow", "tooltiphide"]
                                : ["tooltip" + name]).join(namespace) +
                                namespace,
                            callback
                        );
                }
            ), $.each(PLUGINS, function(name) {
                var instance;
                "render" === this.initialize &&
                    (instance = this(self)) &&
                    (self.plugins[name] = instance);
            }), this._assignEvents(), $.when
                .apply($, deferreds)
                .then(function() {
                    self._trigger(
                        "render"
                    ), (self.positioning = FALSE), self.hiddenDuringWait || (!options.show.ready && !show) || self.toggle(TRUE, cache.event, FALSE), (self.hiddenDuringWait = FALSE);
                }), (QTIP.api[this.id] = this), this;
        }), (PROTOTYPE.destroy = function(immediate) {
            function process() {
                if (!this.destroyed) {
                    this.destroyed = TRUE;
                    var target = this.target,
                        title = target.attr(oldtitle);
                    this.rendered &&
                        this.tooltip
                            .stop(1, 0)
                            .find("*")
                            .remove()
                            .end()
                            .remove(), $.each(this.plugins, function(name) {
                        this.destroy && this.destroy();
                    }), clearTimeout(this.timers.show), clearTimeout(
                        this.timers.hide
                    ), this._unassignEvents(), target
                        .removeData(NAMESPACE)
                        .removeAttr(ATTR_ID)
                        .removeAttr("aria-describedby"), this.options
                        .suppress &&
                        title &&
                        target
                            .attr("title", title)
                            .removeAttr(oldtitle), this._unbind(
                        target
                    ), (this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = NULL), delete QTIP
                        .api[this.id];
                }
            }
            return this.destroyed
                ? this.target
                : (
                      immediate !== TRUE && this.rendered
                          ? (
                                tooltip.one(
                                    "tooltiphidden",
                                    $.proxy(process, this)
                                ),
                                !this.triggering && this.hide()
                            )
                          : process.call(this),
                      this.target
                  );
        }), (CHECKS = PROTOTYPE.checks = {
            builtin: {
                "^id$": function(obj, o, v, prev) {
                    var id = v === TRUE ? QTIP.nextid : v,
                        new_id = NAMESPACE + "-" + id;
                    id !== FALSE && id.length > 0 && !$("#" + new_id).length
                        ? (
                              (this._id = new_id),
                              this.rendered &&
                                  (
                                      (this.tooltip[0].id = this._id),
                                      (this.elements.content[0].id =
                                          this._id + "-content"),
                                      (this.elements.title[0].id =
                                          this._id + "-title")
                                  )
                          )
                        : (obj[o] = prev);
                },
                "^prerender": function(obj, o, v) {
                    v && !this.rendered && this.render(this.options.show.ready);
                },
                "^content.text$": function(obj, o, v) {
                    this._updateContent(v);
                },
                "^content.attr$": function(obj, o, v, prev) {
                    this.options.content.text === this.target.attr(prev) &&
                        this._updateContent(this.target.attr(v));
                },
                "^content.title$": function(obj, o, v) {
                    return v
                        ? (
                              v && !this.elements.title && this._createTitle(),
                              void this._updateTitle(v)
                          )
                        : this._removeTitle();
                },
                "^content.button$": function(obj, o, v) {
                    this._updateButton(v);
                },
                "^content.title.(text|button)$": function(obj, o, v) {
                    this.set("content." + o, v);
                },
                "^position.(my|at)$": function(obj, o, v) {
                    "string" == typeof v &&
                        (obj[o] = new CORNER(v, "at" === o));
                },
                "^position.container$": function(obj, o, v) {
                    this.tooltip.appendTo(v);
                },
                "^show.ready$": function(obj, o, v) {
                    v &&
                        ((!this.rendered && this.render(TRUE)) ||
                            this.toggle(TRUE));
                },
                "^style.classes$": function(obj, o, v, p) {
                    this.tooltip.removeClass(p).addClass(v);
                },
                "^style.width|height": function(obj, o, v) {
                    this.tooltip.css(o, v);
                },
                "^style.widget|content.title": function() {
                    this._setWidget();
                },
                "^style.def": function(obj, o, v) {
                    this.tooltip.toggleClass(CLASS_DEFAULT, !!v);
                },
                "^events.(render|show|move|hide|focus|blur)$": function(
                    obj,
                    o,
                    v
                ) {
                    tooltip[($.isFunction(v) ? "" : "un") + "bind"](
                        "tooltip" + o,
                        v
                    );
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    var posOptions = this.options.position;
                    tooltip.attr(
                        "tracking",
                        "mouse" === posOptions.target && posOptions.adjust.mouse
                    ), this._unassignEvents(), this._assignEvents();
                }
            }
        }), (PROTOTYPE.get = function(notation) {
            if (this.destroyed) return this;
            var o = convertNotation(this.options, notation.toLowerCase()),
                result = o[0][o[1]];
            return result.precedance ? result.string() : result;
        });
        var rmove = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
            rrender = /^prerender|show\.ready/i;
        (PROTOTYPE.set = function(option, value) {
            if (this.destroyed) return this;
            var name,
                rendered = this.rendered,
                reposition = FALSE,
                options = this.options;
            this.checks;
            return "string" == typeof option
                ? ((name = option), (option = {}), (option[name] = value))
                : (option = $.extend({}, option)), $.each(option, function(
                notation,
                value
            ) {
                if (!rendered && !rrender.test(notation))
                    return void delete option[notation];
                var previous,
                    obj = convertNotation(options, notation.toLowerCase());
                (previous = obj[0][obj[1]]), (obj[0][obj[1]] =
                    value && value.nodeType ? $(value) : value), (reposition =
                    rmove.test(notation) || reposition), (option[notation] = [
                    obj[0],
                    obj[1],
                    value,
                    previous
                ]);
            }), sanitizeOptions(options), (this.positioning = TRUE), $.each(
                option,
                $.proxy(setCallback, this)
            ), (this.positioning = FALSE), this.rendered &&
                this.tooltip[0].offsetWidth > 0 &&
                reposition &&
                this.reposition(
                    "mouse" === options.position.target
                        ? NULL
                        : this.cache.event
                ), this;
        }), (PROTOTYPE._update = function(content, element, reposition) {
            var self = this,
                cache = this.cache;
            return this.rendered && content
                ? (
                      $.isFunction(content) &&
                          (content =
                              content.call(
                                  this.elements.target,
                                  cache.event,
                                  this
                              ) || ""),
                      $.isFunction(content.then)
                          ? (
                                (cache.waiting = TRUE),
                                content.then(
                                    function(c) {
                                        return (cache.waiting = FALSE), self._update(
                                            c,
                                            element
                                        );
                                    },
                                    NULL,
                                    function(e) {
                                        return self._update(e, element);
                                    }
                                )
                            )
                          : content === FALSE || (!content && "" !== content)
                            ? FALSE
                            : (
                                  content.jquery && content.length > 0
                                      ? element
                                            .children()
                                            .detach()
                                            .end()
                                            .append(
                                                content.css({
                                                    display: "block"
                                                })
                                            )
                                      : element.html(content),
                                  (cache.waiting = TRUE),
                                  $.isFunction(element.done) &&
                                  $.isFunction($.Deferred().resolve($([])).done)
                                      ? ($.fn.imagesLoaded
                                            ? element.imagesLoaded()
                                            : $.Deferred().resolve($([])))
                                            .done(function(images) {
                                                (cache.waiting = FALSE), images.length && self.rendered && self.tooltip[0].offsetWidth > 0 && self.reposition(cache.event, !images.length);
                                            })
                                            .promise()
                                      : void 0
                              )
                  )
                : FALSE;
        }), (PROTOTYPE._updateContent = function(content, reposition) {
            this._update(content, this.elements.content, reposition);
        }), (PROTOTYPE._updateTitle = function(content, reposition) {
            this._update(content, this.elements.title, reposition) === FALSE &&
                this._removeTitle(FALSE);
        }), (PROTOTYPE._createTitle = function() {
            var elements = this.elements,
                id = this._id + "-title";
            elements.titlebar &&
                this._removeTitle(), (elements.titlebar = $("<div />", {
                class:
                    NAMESPACE +
                    "-titlebar " +
                    (this.options.style.widget
                        ? createWidgetClass("header")
                        : "")
            })
                .append(
                    (elements.title = $("<div />", {
                        id: id,
                        class: NAMESPACE + "-title",
                        "aria-atomic": TRUE
                    }))
                )
                .insertBefore(elements.content)
                .delegate(
                    ".qtip-close",
                    "mousedown keydown mouseup keyup mouseout",
                    function(event) {
                        $(this).toggleClass(
                            "ui-state-active ui-state-focus",
                            "down" === event.type.substr(-4)
                        );
                    }
                )
                .delegate(".qtip-close", "mouseover mouseout", function(event) {
                    $(this).toggleClass(
                        "ui-state-hover",
                        "mouseover" === event.type
                    );
                })), this.options.content.button && this._createButton();
        }), (PROTOTYPE._removeTitle = function(reposition) {
            var elements = this.elements;
            elements.title &&
                (
                    elements.titlebar.remove(),
                    (elements.titlebar = elements.title = elements.button = NULL),
                    reposition !== FALSE && this.reposition()
                );
        }), (PROTOTYPE.reposition = function(event, effect) {
            if (!this.rendered || this.positioning || this.destroyed)
                return this;
            this.positioning = TRUE;
            var pluginCalculations,
                offset,
                cache = this.cache,
                tooltip = this.tooltip,
                posOptions = this.options.position,
                target = posOptions.target,
                my = posOptions.my,
                at = posOptions.at,
                viewport = posOptions.viewport,
                container = posOptions.container,
                adjust = posOptions.adjust,
                method = adjust.method.split(" "),
                elemWidth = tooltip.outerWidth(FALSE),
                elemHeight = tooltip.outerHeight(FALSE),
                targetWidth = 0,
                targetHeight = 0,
                type = tooltip.css("position"),
                position = { left: 0, top: 0 },
                visible = tooltip[0].offsetWidth > 0,
                isScroll = event && "scroll" === event.type,
                win = $(window),
                doc = container[0].ownerDocument,
                mouse = this.mouse;
            if ($.isArray(target) && 2 === target.length)
                (at = { x: LEFT, y: TOP }), (position = {
                    left: target[0],
                    top: target[1]
                });
            else if (
                "mouse" === target &&
                ((event && event.pageX) || cache.event.pageX)
            )
                (at = { x: LEFT, y: TOP }), (event =
                    !mouse ||
                    !mouse.pageX ||
                    (!adjust.mouse && event && event.pageX)
                        ? (!event ||
                          ("resize" !== event.type && "scroll" !== event.type)
                              ? event &&
                                event.pageX &&
                                "mousemove" === event.type
                                ? event
                                : (!adjust.mouse ||
                                      this.options.show.distance) &&
                                  cache.origin &&
                                  cache.origin.pageX
                                  ? cache.origin
                                  : event
                              : cache.event) ||
                          event ||
                          cache.event ||
                          mouse ||
                          {}
                        : mouse), "static" !== type &&
                    (position = container.offset()), doc.body.offsetWidth !==
                    (window.innerWidth || doc.documentElement.clientWidth) &&
                    (offset = $(doc.body).offset()), (position = {
                    left:
                        event.pageX -
                        position.left +
                        ((offset && offset.left) || 0),
                    top:
                        event.pageY -
                        position.top +
                        ((offset && offset.top) || 0)
                }), adjust.mouse &&
                    isScroll &&
                    (
                        (position.left -= mouse.scrollX - win.scrollLeft()),
                        (position.top -= mouse.scrollY - win.scrollTop())
                    );
            else {
                if (
                    (
                        "event" === target &&
                        event &&
                        event.target &&
                        "scroll" !== event.type &&
                        "resize" !== event.type
                            ? (cache.target = $(event.target))
                            : "event" !== target &&
                              (cache.target = $(
                                  target.jquery ? target : elements.target
                              )),
                        (target = cache.target),
                        (target = $(target).eq(0)),
                        0 === target.length
                    )
                )
                    return this;
                target[0] === document || target[0] === window
                    ? (
                          (targetWidth = BROWSER.iOS
                              ? window.innerWidth
                              : target.width()),
                          (targetHeight = BROWSER.iOS
                              ? window.innerHeight
                              : target.height()),
                          target[0] === window &&
                              (position = {
                                  top: (viewport || target).scrollTop(),
                                  left: (viewport || target).scrollLeft()
                              })
                      )
                    : PLUGINS.imagemap && target.is("area")
                      ? (pluginCalculations = PLUGINS.imagemap(
                            this,
                            target,
                            at,
                            PLUGINS.viewport ? method : FALSE
                        ))
                      : PLUGINS.svg && target[0].ownerSVGElement
                        ? (pluginCalculations = PLUGINS.svg(
                              this,
                              target,
                              at,
                              PLUGINS.viewport ? method : FALSE
                          ))
                        : (
                              (targetWidth = target.outerWidth(FALSE)),
                              (targetHeight = target.outerHeight(FALSE)),
                              (position = target.offset())
                          ), pluginCalculations &&
                    (
                        (targetWidth = pluginCalculations.width),
                        (targetHeight = pluginCalculations.height),
                        (offset = pluginCalculations.offset),
                        (position = pluginCalculations.position)
                    ), (position = this.reposition.offset(
                    target,
                    position,
                    container
                )), ((BROWSER.iOS > 3.1 && BROWSER.iOS < 4.1) ||
                    (BROWSER.iOS >= 4.3 && BROWSER.iOS < 4.33) ||
                    (!BROWSER.iOS && "fixed" === type)) &&
                    (
                        (position.left -= win.scrollLeft()),
                        (position.top -= win.scrollTop())
                    ), (!pluginCalculations ||
                    (pluginCalculations &&
                        pluginCalculations.adjustable !== FALSE)) &&
                    (
                        (position.left +=
                            at.x === RIGHT
                                ? targetWidth
                                : at.x === CENTER ? targetWidth / 2 : 0),
                        (position.top +=
                            at.y === BOTTOM
                                ? targetHeight
                                : at.y === CENTER ? targetHeight / 2 : 0)
                    );
            }
            return (position.left +=
                adjust.x +
                (my.x === RIGHT
                    ? -elemWidth
                    : my.x === CENTER ? -elemWidth / 2 : 0)), (position.top +=
                adjust.y +
                (my.y === BOTTOM
                    ? -elemHeight
                    : my.y === CENTER ? -elemHeight / 2 : 0)), PLUGINS.viewport
                ? (
                      (position.adjusted = PLUGINS.viewport(
                          this,
                          position,
                          posOptions,
                          targetWidth,
                          targetHeight,
                          elemWidth,
                          elemHeight
                      )),
                      offset &&
                          position.adjusted.left &&
                          (position.left += offset.left),
                      offset &&
                          position.adjusted.top &&
                          (position.top += offset.top)
                  )
                : (position.adjusted = { left: 0, top: 0 }), this._trigger(
                "move",
                [position, viewport.elem || viewport],
                event
            )
                ? (
                      delete position.adjusted,
                      effect === FALSE ||
                      !visible ||
                      isNaN(position.left) ||
                      isNaN(position.top) ||
                      "mouse" === target ||
                      !$.isFunction(posOptions.effect)
                          ? tooltip.css(position)
                          : $.isFunction(posOptions.effect) &&
                            (
                                posOptions.effect.call(
                                    tooltip,
                                    this,
                                    $.extend({}, position)
                                ),
                                tooltip.queue(function(next) {
                                    $(this).css({
                                        opacity: "",
                                        height: ""
                                    }), BROWSER.ie && this.style.removeAttribute("filter"), next();
                                })
                            ),
                      (this.positioning = FALSE),
                      this
                  )
                : this;
        }), (PROTOTYPE.reposition.offset = function(elem, pos, container) {
            function scroll(e, i) {
                (pos.left += i * e.scrollLeft()), (pos.top +=
                    i * e.scrollTop());
            }
            if (!container[0]) return pos;
            var scrolled,
                position,
                parentOffset,
                overflow,
                ownerDocument = $(elem[0].ownerDocument),
                quirks = !!BROWSER.ie && "CSS1Compat" !== document.compatMode,
                parent = container[0];
            do
                "static" !== (position = $.css(parent, "position")) &&
                    (
                        "fixed" === position
                            ? (
                                  (parentOffset = parent.getBoundingClientRect()),
                                  scroll(ownerDocument, -1)
                              )
                            : (
                                  (parentOffset = $(parent).position()),
                                  (parentOffset.left +=
                                      parseFloat(
                                          $.css(parent, "borderLeftWidth")
                                      ) || 0),
                                  (parentOffset.top +=
                                      parseFloat(
                                          $.css(parent, "borderTopWidth")
                                      ) || 0)
                              ),
                        (pos.left -=
                            parentOffset.left +
                            (parseFloat($.css(parent, "marginLeft")) || 0)),
                        (pos.top -=
                            parentOffset.top +
                            (parseFloat($.css(parent, "marginTop")) || 0)),
                        scrolled ||
                            "hidden" ===
                                (overflow = $.css(parent, "overflow")) ||
                            "visible" === overflow ||
                            (scrolled = $(parent))
                    );
            while ((parent = parent.offsetParent));
            return scrolled &&
                (scrolled[0] !== ownerDocument[0] || quirks) &&
                scroll(scrolled, 1), pos;
        });
        var C = (CORNER = PROTOTYPE.reposition.Corner = function(
            corner,
            forceY
        ) {
            (corner = ("" + corner)
                .replace(/([A-Z])/, " $1")
                .replace(/middle/gi, CENTER)
                .toLowerCase()), (this.x = (corner.match(/left|right/i) ||
            corner.match(/center/) || ["inherit"])[0]
                .toLowerCase()), (this.y = (corner.match(
                /top|bottom|center/i
            ) || ["inherit"])[0]
                .toLowerCase()), (this.forceY = !!forceY);
            var f = corner.charAt(0);
            this.precedance = "t" === f || "b" === f ? Y : X;
        }).prototype;
        (C.invert = function(z, center) {
            this[z] =
                this[z] === LEFT
                    ? RIGHT
                    : this[z] === RIGHT ? LEFT : center || this[z];
        }), (C.string = function() {
            var x = this.x,
                y = this.y;
            return x === y
                ? x
                : this.precedance === Y || (this.forceY && "center" !== y)
                  ? y + " " + x
                  : x + " " + y;
        }), (C.abbrev = function() {
            var result = this.string().split(" ");
            return (
                result[0].charAt(0) + ((result[1] && result[1].charAt(0)) || "")
            );
        }), (C.clone = function() {
            return new CORNER(this.string(), this.forceY);
        }), (PROTOTYPE.toggle = function(state, event) {
            var cache = this.cache,
                options = this.options,
                tooltip = this.tooltip;
            if (event) {
                if (
                    /over|enter/.test(event.type) &&
                    /out|leave/.test(cache.event.type) &&
                    options.show.target.add(event.target).length ===
                        options.show.target.length &&
                    tooltip.has(event.relatedTarget).length
                )
                    return this;
                cache.event = $.extend({}, event);
            }
            if (
                (
                    this.waiting && !state && (this.hiddenDuringWait = TRUE),
                    !this.rendered
                )
            )
                return state ? this.render(1) : this;
            if (this.destroyed || this.disabled) return this;
            var identicalState,
                allow,
                type = state ? "show" : "hide",
                opts = this.options[type],
                posOptions = (
                    this.options[state ? "hide" : "show"],
                    this.options.position
                ),
                contentOptions = this.options.content,
                width = this.tooltip.css("width"),
                visible = this.tooltip[0].offsetWidth > 0,
                animate = state || 1 === opts.target.length,
                sameTarget =
                    !event ||
                    opts.target.length < 2 ||
                    cache.target[0] === event.target;
            return (typeof state).search("boolean|number") &&
                (state = !visible), (identicalState =
                !tooltip.is(":animated") &&
                visible === state &&
                sameTarget), (allow = identicalState
                ? NULL
                : !!this._trigger(type, [90])), allow !== FALSE &&
                state &&
                this.focus(event), !allow || identicalState
                ? this
                : (
                      $.attr(tooltip[0], "aria-hidden", !state),
                      state
                          ? (
                                (cache.origin = $.extend({}, this.mouse)),
                                $.isFunction(contentOptions.text) &&
                                    this._updateContent(
                                        contentOptions.text,
                                        FALSE
                                    ),
                                $.isFunction(contentOptions.title) &&
                                    this._updateTitle(
                                        contentOptions.title,
                                        FALSE
                                    ),
                                !trackingBound &&
                                    "mouse" === posOptions.target &&
                                    posOptions.adjust.mouse &&
                                    (
                                        $(document).bind(
                                            "mousemove." + NAMESPACE,
                                            this._storeMouse
                                        ),
                                        (trackingBound = TRUE)
                                    ),
                                width ||
                                    tooltip.css(
                                        "width",
                                        tooltip.outerWidth(FALSE)
                                    ),
                                this.reposition(event, arguments[2]),
                                width || tooltip.css("width", ""),
                                opts.solo &&
                                    ("string" == typeof opts.solo
                                        ? $(opts.solo)
                                        : $(SELECTOR, opts.solo))
                                        .not(tooltip)
                                        .not(opts.target)
                                        .qtip("hide", $.Event("tooltipsolo"))
                            )
                          : (
                                clearTimeout(this.timers.show),
                                delete cache.origin,
                                trackingBound &&
                                    !$(
                                        SELECTOR + '[tracking="true"]:visible',
                                        opts.solo
                                    ).not(tooltip).length &&
                                    (
                                        $(document).unbind(
                                            "mousemove." + NAMESPACE
                                        ),
                                        (trackingBound = FALSE)
                                    ),
                                this.blur(event)
                            ),
                      (after = $.proxy(function() {
                          state
                              ? (
                                    BROWSER.ie &&
                                        tooltip[0].style.removeAttribute(
                                            "filter"
                                        ),
                                    tooltip.css("overflow", ""),
                                    "string" == typeof opts.autofocus &&
                                        $(
                                            this.options.show.autofocus,
                                            tooltip
                                        ).focus(),
                                    this.options.show.target.trigger(
                                        "qtip-" + this.id + "-inactive"
                                    )
                                )
                              : tooltip.css({
                                    display: "",
                                    visibility: "",
                                    opacity: "",
                                    left: "",
                                    top: ""
                                }), this._trigger(state ? "visible" : "hidden");
                      }, this)),
                      opts.effect === FALSE || animate === FALSE
                          ? (tooltip[type](), after())
                          : $.isFunction(opts.effect)
                            ? (
                                  tooltip.stop(1, 1),
                                  opts.effect.call(tooltip, this),
                                  tooltip.queue("fx", function(n) {
                                      after(), n();
                                  })
                              )
                            : tooltip.fadeTo(90, state ? 1 : 0, after),
                      state &&
                          opts.target.trigger("qtip-" + this.id + "-inactive"),
                      this
                  );
        }), (PROTOTYPE.show = function(event) {
            return this.toggle(TRUE, event);
        }), (PROTOTYPE.hide = function(event) {
            return this.toggle(FALSE, event);
        }), (PROTOTYPE.focus = function(event) {
            if (!this.rendered || this.destroyed) return this;
            var qtips = $(SELECTOR),
                tooltip = this.tooltip,
                curIndex = parseInt(tooltip[0].style.zIndex, 10),
                newIndex = QTIP.zindex + qtips.length;
            return tooltip.hasClass(CLASS_FOCUS) ||
                (this._trigger("focus", [newIndex], event) &&
                    (
                        curIndex !== newIndex &&
                            (
                                qtips.each(function() {
                                    this.style.zIndex > curIndex &&
                                        (this.style.zIndex =
                                            this.style.zIndex - 1);
                                }),
                                qtips
                                    .filter("." + CLASS_FOCUS)
                                    .qtip("blur", event)
                            ),
                        (tooltip.addClass(
                            CLASS_FOCUS
                        )[0].style.zIndex = newIndex)
                    )), this;
        }), (PROTOTYPE.blur = function(event) {
            return !this.rendered || this.destroyed
                ? this
                : (
                      this.tooltip.removeClass(CLASS_FOCUS),
                      this._trigger(
                          "blur",
                          [this.tooltip.css("zIndex")],
                          event
                      ),
                      this
                  );
        }), (PROTOTYPE.disable = function(state) {
            return this.destroyed
                ? this
                : (
                      "boolean" != typeof state &&
                          (state = !(
                              this.tooltip.hasClass(CLASS_DISABLED) ||
                              this.disabled
                          )),
                      this.rendered &&
                          this.tooltip
                              .toggleClass(CLASS_DISABLED, state)
                              .attr("aria-disabled", state),
                      (this.disabled = !!state),
                      this
                  );
        }), (PROTOTYPE.enable = function() {
            return this.disable(FALSE);
        }), (PROTOTYPE._createButton = function() {
            var self = this,
                elements = this.elements,
                tooltip = elements.tooltip,
                button = this.options.content.button,
                isString = "string" == typeof button,
                close = isString ? button : "Close tooltip";
            elements.button && elements.button.remove(), button.jquery
                ? (elements.button = button)
                : (elements.button = $("<a />", {
                      class:
                          "qtip-close " +
                          (this.options.style.widget
                              ? ""
                              : NAMESPACE + "-icon"),
                      title: close,
                      "aria-label": close
                  }).prepend(
                      $("<span />", {
                          class: "ui-icon ui-icon-close",
                          html: "&times;"
                      })
                  )), elements.button
                .appendTo(elements.titlebar || tooltip)
                .attr("role", "button")
                .click(function(event) {
                    return tooltip.hasClass(CLASS_DISABLED) ||
                        self.hide(event), FALSE;
                });
        }), (PROTOTYPE._updateButton = function(button) {
            if (!this.rendered) return FALSE;
            var elem = this.elements.button;
            button ? this._createButton() : elem.remove();
        }), (PROTOTYPE._setWidget = function() {
            var on = this.options.style.widget,
                elements = this.elements,
                tooltip = elements.tooltip,
                disabled = tooltip.hasClass(CLASS_DISABLED);
            tooltip.removeClass(CLASS_DISABLED), (CLASS_DISABLED = on
                ? "ui-state-disabled"
                : "qtip-disabled"), tooltip.toggleClass(
                CLASS_DISABLED,
                disabled
            ), tooltip
                .toggleClass("ui-helper-reset " + createWidgetClass(), on)
                .toggleClass(
                    CLASS_DEFAULT,
                    this.options.style.def && !on
                ), elements.content &&
                elements.content.toggleClass(
                    createWidgetClass("content"),
                    on
                ), elements.titlebar &&
                elements.titlebar.toggleClass(
                    createWidgetClass("header"),
                    on
                ), elements.button &&
                elements.button.toggleClass(NAMESPACE + "-icon", !on);
        }), (PROTOTYPE._storeMouse = function(event) {
            this.mouse = {
                pageX: event.pageX,
                pageY: event.pageY,
                type: "mousemove",
                scrollX:
                    window.pageXOffset ||
                    document.body.scrollLeft ||
                    document.documentElement.scrollLeft,
                scrollY:
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop
            };
        }), (PROTOTYPE._bind = function(
            targets,
            events,
            method,
            suffix,
            context
        ) {
            var ns = "." + this._id + (suffix ? "-" + suffix : "");
            events.length &&
                $(targets).bind(
                    (events.split ? events : events.join(ns + " ")) + ns,
                    $.proxy(method, context || this)
                );
        }), (PROTOTYPE._unbind = function(targets, suffix) {
            $(targets).unbind("." + this._id + (suffix ? "-" + suffix : ""));
        });
        var ns = "." + NAMESPACE;
        $(function() {
            delegate(SELECTOR, ["mouseenter", "mouseleave"], function(event) {
                var state = "mouseenter" === event.type,
                    tooltip = $(event.currentTarget),
                    target = $(event.relatedTarget || event.target),
                    options = this.options;
                state
                    ? (
                          this.focus(event),
                          tooltip.hasClass(CLASS_FIXED) &&
                              !tooltip.hasClass(CLASS_DISABLED) &&
                              clearTimeout(this.timers.hide)
                      )
                    : "mouse" === options.position.target &&
                      options.hide.event &&
                      options.show.target &&
                      !target.closest(options.show.target[0]).length &&
                      this.hide(event), tooltip.toggleClass(CLASS_HOVER, state);
            }), delegate("[" + ATTR_ID + "]", INACTIVE_EVENTS, inactiveMethod);
        }), (PROTOTYPE._trigger = function(type, args, event) {
            var callback = $.Event("tooltip" + type);
            return (callback.originalEvent =
                (event && $.extend({}, event)) ||
                this.cache.event ||
                NULL), (this.triggering = TRUE), this.tooltip.trigger(
                callback,
                [this].concat(args || [])
            ), (this.triggering = FALSE), !callback.isDefaultPrevented();
        }), (PROTOTYPE._assignEvents = function() {
            var options = this.options,
                posOptions = options.position,
                tooltip = this.tooltip,
                showTarget = options.show.target,
                hideTarget = options.hide.target,
                containerTarget = posOptions.container,
                viewportTarget = posOptions.viewport,
                documentTarget = $(document),
                windowTarget = ($(document.body), $(window)),
                showEvents = options.show.event
                    ? $.trim("" + options.show.event).split(" ")
                    : [],
                hideEvents = options.hide.event
                    ? $.trim("" + options.hide.event).split(" ")
                    : [],
                toggleEvents = [];
            /mouse(out|leave)/i.test(options.hide.event) &&
                "window" === options.hide.leave &&
                this._bind(documentTarget, ["mouseout", "blur"], function(
                    event
                ) {
                    /select|option/.test(event.target.nodeName) ||
                        event.relatedTarget ||
                        this.hide(event);
                }), options.hide.fixed
                ? (hideTarget = hideTarget.add(tooltip.addClass(CLASS_FIXED)))
                : /mouse(over|enter)/i.test(options.show.event) &&
                  this._bind(hideTarget, "mouseleave", function() {
                      clearTimeout(this.timers.show);
                  }), ("" + options.hide.event).indexOf("unfocus") > -1 &&
                this._bind(
                    containerTarget.closest("html"),
                    ["mousedown", "touchstart"],
                    function(event) {
                        var elem = $(event.target),
                            enabled =
                                this.rendered &&
                                !this.tooltip.hasClass(CLASS_DISABLED) &&
                                this.tooltip[0].offsetWidth > 0,
                            isAncestor =
                                elem.parents(SELECTOR).filter(this.tooltip[0])
                                    .length > 0;
                        elem[0] === this.target[0] ||
                            elem[0] === this.tooltip[0] ||
                            isAncestor ||
                            this.target.has(elem[0]).length ||
                            !enabled ||
                            this.hide(event);
                    }
                ), "number" == typeof options.hide.inactive &&
                (
                    this._bind(
                        showTarget,
                        "qtip-" + this.id + "-inactive",
                        inactiveMethod
                    ),
                    this._bind(
                        hideTarget.add(tooltip),
                        QTIP.inactiveEvents,
                        inactiveMethod,
                        "-inactive"
                    )
                ), (hideEvents = $.map(hideEvents, function(type) {
                var showIndex = $.inArray(type, showEvents);
                return showIndex > -1 &&
                hideTarget.add(showTarget).length === hideTarget.length
                    ? void toggleEvents.push(showEvents.splice(showIndex, 1)[0])
                    : type;
            })), this._bind(showTarget, showEvents, showMethod), this._bind(
                hideTarget,
                hideEvents,
                hideMethod
            ), this._bind(showTarget, toggleEvents, function(event) {
                (this.tooltip[0].offsetWidth > 0
                    ? hideMethod
                    : showMethod).call(this, event);
            }), this._bind(showTarget.add(tooltip), "mousemove", function(
                event
            ) {
                if ("number" == typeof options.hide.distance) {
                    var origin = this.cache.origin || {},
                        limit = this.options.hide.distance,
                        abs = Math.abs;
                    (abs(event.pageX - origin.pageX) >= limit ||
                        abs(event.pageY - origin.pageY) >= limit) &&
                        this.hide(event);
                }
                this._storeMouse(event);
            }), "mouse" === posOptions.target &&
                posOptions.adjust.mouse &&
                (
                    options.hide.event &&
                        this._bind(
                            showTarget,
                            ["mouseenter", "mouseleave"],
                            function(event) {
                                this.cache.onTarget =
                                    "mouseenter" === event.type;
                            }
                        ),
                    this._bind(documentTarget, "mousemove", function(event) {
                        this.rendered &&
                            this.cache.onTarget &&
                            !this.tooltip.hasClass(CLASS_DISABLED) &&
                            this.tooltip[0].offsetWidth > 0 &&
                            this.reposition(event);
                    })
                ), (posOptions.adjust.resize || viewportTarget.length) &&
                this._bind(
                    $.event.special.resize ? viewportTarget : windowTarget,
                    "resize",
                    repositionMethod
                ), posOptions.adjust.scroll &&
                this._bind(
                    windowTarget.add(posOptions.container),
                    "scroll",
                    repositionMethod
                );
        }), (PROTOTYPE._unassignEvents = function() {
            var targets = [
                this.options.show.target[0],
                this.options.hide.target[0],
                this.rendered && this.tooltip[0],
                this.options.position.container[0],
                this.options.position.viewport[0],
                this.options.position.container.closest("html")[0],
                window,
                document
            ];
            this.rendered
                ? this._unbind(
                      $([]).pushStack(
                          $.grep(targets, function(i) {
                              return "object" == typeof i;
                          })
                      )
                  )
                : $(targets[0]).unbind("." + this._id + "-create");
        }), (QTIP = $.fn.qtip = function(options, notation, newValue) {
            var command = ("" + options).toLowerCase(),
                returned = NULL,
                args = $.makeArray(arguments).slice(1),
                event = args[args.length - 1],
                opts = this[0] ? $.data(this[0], NAMESPACE) : NULL;
            return (!arguments.length && opts) || "api" === command
                ? opts
                : "string" == typeof options
                  ? (
                        this.each(function() {
                            var api = $.data(this, NAMESPACE);
                            if (!api) return TRUE;
                            if (
                                (
                                    event &&
                                        event.timeStamp &&
                                        (api.cache.event = event),
                                    !notation ||
                                        ("option" !== command &&
                                            "options" !== command)
                                )
                            )
                                api[command] && api[command].apply(api, args);
                            else {
                                if (
                                    newValue === undefined &&
                                    !$.isPlainObject(notation)
                                )
                                    return (returned = api.get(
                                        notation
                                    )), FALSE;
                                api.set(notation, newValue);
                            }
                        }),
                        returned !== NULL ? returned : this
                    )
                  : "object" != typeof options && arguments.length
                    ? void 0
                    : (
                          (opts = sanitizeOptions($.extend(TRUE, {}, options))),
                          QTIP.bind.call(this, opts, event)
                      );
        }), (QTIP.bind = function(opts, event) {
            return this.each(function(i) {
                function hoverIntent(event) {
                    function render() {
                        api.render(
                            "object" == typeof event || options.show.ready
                        ), targets.show.add(targets.hide).unbind(namespace);
                    }
                    return api.disabled
                        ? FALSE
                        : (
                              (api.cache.event = $.extend({}, event)),
                              (api.cache.target = event
                                  ? $(event.target)
                                  : [undefined]),
                              void (options.show.delay > 0
                                  ? (
                                        clearTimeout(api.timers.show),
                                        (api.timers.show = setTimeout(
                                            render,
                                            options.show.delay
                                        )),
                                        events.show !== events.hide &&
                                            targets.hide.bind(
                                                events.hide,
                                                function() {
                                                    clearTimeout(
                                                        api.timers.show
                                                    );
                                                }
                                            )
                                    )
                                  : render())
                          );
                }
                var options, targets, events, namespace, api, id;
                return (id = $.isArray(opts.id)
                    ? opts.id[i]
                    : opts.id), (id = !id || id === FALSE || id.length < 1 || QTIP.api[id] ? QTIP.nextid++ : id), (namespace = ".qtip-" + id + "-create"), (api = init($(this), id, opts)), api ===
                FALSE
                    ? TRUE
                    : (
                          (QTIP.api[id] = api),
                          (options = api.options),
                          $.each(PLUGINS, function() {
                              "initialize" === this.initialize && this(api);
                          }),
                          (targets = {
                              show: options.show.target,
                              hide: options.hide.target
                          }),
                          (events = {
                              show:
                                  $.trim("" + options.show.event).replace(
                                      / /g,
                                      namespace + " "
                                  ) + namespace,
                              hide:
                                  $.trim("" + options.hide.event).replace(
                                      / /g,
                                      namespace + " "
                                  ) + namespace
                          }),
                          /mouse(over|enter)/i.test(events.show) &&
                              !/mouse(out|leave)/i.test(events.hide) &&
                              (events.hide += " mouseleave" + namespace),
                          targets.show.bind("mousemove" + namespace, function(
                              event
                          ) {
                              api._storeMouse(
                                  event
                              ), (api.cache.onTarget = TRUE);
                          }),
                          targets.show.bind(events.show, hoverIntent),
                          void (
                              (options.show.ready || options.prerender) &&
                              hoverIntent(event)
                          )
                      );
            });
        }), (QTIP.api = {}), $.each(
            {
                attr: function(attr, val) {
                    if (this.length) {
                        var self = this[0],
                            title = "title",
                            api = $.data(self, "qtip");
                        if (
                            attr === title &&
                            api &&
                            "object" == typeof api &&
                            api.options.suppress
                        )
                            return arguments.length < 2
                                ? $.attr(self, oldtitle)
                                : (
                                      api &&
                                          api.options.content.attr === title &&
                                          api.cache.attr &&
                                          api.set("content.text", val),
                                      this.attr(oldtitle, val)
                                  );
                    }
                    return $.fn["attr" + replaceSuffix].apply(this, arguments);
                },
                clone: function(keepData) {
                    var elems = (
                        $([]),
                        $.fn["clone" + replaceSuffix].apply(this, arguments)
                    );
                    return keepData ||
                        elems
                            .filter("[" + oldtitle + "]")
                            .attr("title", function() {
                                return $.attr(this, oldtitle);
                            })
                            .removeAttr(oldtitle), elems;
                }
            },
            function(name, func) {
                if (!func || $.fn[name + replaceSuffix]) return TRUE;
                var old = ($.fn[name + replaceSuffix] = $.fn[name]);
                $.fn[name] = function() {
                    return (
                        func.apply(this, arguments) ||
                        old.apply(this, arguments)
                    );
                };
            }
        ), $.ui ||
            (
                ($["cleanData" + replaceSuffix] = $.cleanData),
                ($.cleanData = function(elems) {
                    for (var elem, i = 0; (elem = $(elems[i])).length; i++)
                        if (elem.attr(ATTR_HAS))
                            try {
                                elem.triggerHandler("removeqtip");
                            } catch (e) {}
                    $["cleanData" + replaceSuffix].apply(this, arguments);
                })
            ), (QTIP.version = "2.1.1"), (QTIP.nextid = 0), (QTIP.inactiveEvents = INACTIVE_EVENTS), (QTIP.zindex = 15e3), (QTIP.defaults = {
            prerender: FALSE,
            id: FALSE,
            overwrite: TRUE,
            suppress: TRUE,
            content: { text: TRUE, attr: "title", title: FALSE, button: FALSE },
            position: {
                my: "top left",
                at: "bottom right",
                target: FALSE,
                container: FALSE,
                viewport: FALSE,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: TRUE,
                    scroll: TRUE,
                    resize: TRUE,
                    method: "flipinvert flipinvert"
                },
                effect: function(api, pos, viewport) {
                    $(this).animate(pos, { duration: 200, queue: FALSE });
                }
            },
            show: {
                target: FALSE,
                event: "mouseenter",
                effect: TRUE,
                delay: 90,
                solo: FALSE,
                ready: FALSE,
                autofocus: FALSE
            },
            hide: {
                target: FALSE,
                event: "mouseleave",
                effect: TRUE,
                delay: 0,
                fixed: FALSE,
                inactive: FALSE,
                leave: "window",
                distance: FALSE
            },
            style: {
                classes: "",
                widget: FALSE,
                width: FALSE,
                height: FALSE,
                def: TRUE
            },
            events: {
                render: NULL,
                move: NULL,
                show: NULL,
                hide: NULL,
                toggle: NULL,
                visible: NULL,
                hidden: NULL,
                focus: NULL,
                blur: NULL
            }
        }), (PLUGINS.viewport = function(
            api,
            position,
            posOptions,
            targetWidth,
            targetHeight,
            elemWidth,
            elemHeight
        ) {
            function calculate(
                side,
                otherSide,
                type,
                adjust,
                side1,
                side2,
                lengthName,
                targetLength,
                elemLength
            ) {
                var initialPos = position[side1],
                    mySide = my[side],
                    atSide = at[side],
                    isShift = type === SHIFT,
                    viewportScroll =
                        -container.offset[side1] +
                        viewport.offset[side1] +
                        viewport["scroll" + side1],
                    myLength =
                        mySide === side1
                            ? elemLength
                            : mySide === side2 ? -elemLength : -elemLength / 2,
                    atLength =
                        atSide === side1
                            ? targetLength
                            : atSide === side2
                              ? -targetLength
                              : -targetLength / 2,
                    tipLength = tip && tip.size ? tip.size[lengthName] || 0 : 0,
                    tipAdjust =
                        tip &&
                        tip.corner &&
                        tip.corner.precedance === side &&
                        !isShift
                            ? tipLength
                            : 0,
                    overflow1 = viewportScroll - initialPos + tipAdjust,
                    overflow2 =
                        initialPos +
                        elemLength -
                        viewport[lengthName] -
                        viewportScroll +
                        tipAdjust,
                    offset =
                        myLength -
                        (my.precedance === side || mySide === my[otherSide]
                            ? atLength
                            : 0) -
                        (atSide === CENTER ? targetLength / 2 : 0);
                return isShift
                    ? (
                          (tipAdjust =
                              tip &&
                              tip.corner &&
                              tip.corner.precedance === otherSide
                                  ? tipLength
                                  : 0),
                          (offset =
                              (mySide === side1 ? 1 : -1) * myLength -
                              tipAdjust),
                          (position[side1] +=
                              overflow1 > 0
                                  ? overflow1
                                  : overflow2 > 0 ? -overflow2 : 0),
                          (position[side1] = Math.max(
                              -container.offset[side1] +
                                  viewport.offset[side1] +
                                  (tipAdjust && tip.corner[side] === CENTER
                                      ? tip.offset
                                      : 0),
                              initialPos - offset,
                              Math.min(
                                  Math.max(
                                      -container.offset[side1] +
                                          viewport.offset[side1] +
                                          viewport[lengthName],
                                      initialPos + offset
                                  ),
                                  position[side1]
                              )
                          ))
                      )
                    : (
                          (adjust *= type === FLIPINVERT ? 2 : 0),
                          overflow1 > 0 && (mySide !== side1 || overflow2 > 0)
                              ? (
                                    (position[side1] -= offset + adjust),
                                    newMy.invert(side, side1)
                                )
                              : overflow2 > 0 &&
                                (mySide !== side2 || overflow1 > 0) &&
                                (
                                    (position[side1] -=
                                        (mySide === CENTER ? -offset : offset) +
                                        adjust),
                                    newMy.invert(side, side2)
                                ),
                          position[side1] < viewportScroll &&
                              -position[side1] > overflow2 &&
                              (
                                  (position[side1] = initialPos),
                                  (newMy = my.clone())
                              )
                      ), position[side1] - initialPos;
            }
            var fixed,
                newMy,
                newClass,
                target = posOptions.target,
                tooltip = api.elements.tooltip,
                my = posOptions.my,
                at = posOptions.at,
                adjust = posOptions.adjust,
                method = adjust.method.split(" "),
                methodX = method[0],
                methodY = method[1] || method[0],
                viewport = posOptions.viewport,
                container = posOptions.container,
                cache = api.cache,
                tip = api.plugins.tip,
                adjusted = { left: 0, top: 0 };
            return viewport.jquery &&
            target[0] !== window &&
            target[0] !== document.body &&
            "none" !== adjust.method
                ? (
                      (fixed = "fixed" === tooltip.css("position")),
                      (viewport = {
                          elem: viewport,
                          width:
                              viewport[0] === window
                                  ? viewport.width()
                                  : viewport.outerWidth(FALSE),
                          height:
                              viewport[0] === window
                                  ? viewport.height()
                                  : viewport.outerHeight(FALSE),
                          scrollleft: fixed ? 0 : viewport.scrollLeft(),
                          scrolltop: fixed ? 0 : viewport.scrollTop(),
                          offset: viewport.offset() || { left: 0, top: 0 }
                      }),
                      (container = {
                          elem: container,
                          scrollLeft: container.scrollLeft(),
                          scrollTop: container.scrollTop(),
                          offset: container.offset() || { left: 0, top: 0 }
                      }),
                      ("shift" === methodX && "shift" === methodY) ||
                          (newMy = my.clone()),
                      (adjusted = {
                          left:
                              "none" !== methodX
                                  ? calculate(
                                        X,
                                        Y,
                                        methodX,
                                        adjust.x,
                                        LEFT,
                                        RIGHT,
                                        WIDTH,
                                        targetWidth,
                                        elemWidth
                                    )
                                  : 0,
                          top:
                              "none" !== methodY
                                  ? calculate(
                                        Y,
                                        X,
                                        methodY,
                                        adjust.y,
                                        TOP,
                                        BOTTOM,
                                        HEIGHT,
                                        targetHeight,
                                        elemHeight
                                    )
                                  : 0
                      }),
                      newMy &&
                          cache.lastClass !==
                              (newClass =
                                  NAMESPACE + "-pos-" + newMy.abbrev()) &&
                          tooltip
                              .removeClass(api.cache.lastClass)
                              .addClass((api.cache.lastClass = newClass)),
                      adjusted
                  )
                : adjusted;
        });
    });
})(window, document), (function(root, name, factory) {
    var dep = root.jQuery || root.Zepto || root.ender || root.elo;
    "undefined" != typeof module && module.exports
        ? (module.exports = factory(dep))
        : (root[name] = factory(dep));
})(this, "Response", function($) {
    function doError(msg) {
        throw new TypeError(msg ? name + "." + msg : name);
    }
    function isNumber(item) {
        return "number" == typeof item && item === item;
    }
    function map(ob, fn, scope) {
        var i,
            l = ob.length,
            ret = [];
        for (i = 0; i < l; i++) ret[i] = fn.call(scope, ob[i], i, ob);
        return ret;
    }
    function ssvToArr(ukn) {
        return "string" == typeof ukn
            ? sift(ukn.split(" "))
            : isArray(ukn) ? sift(ukn) : [];
    }
    function each(ob, callback, scope) {
        if (null == ob) return ob;
        for (var i = 0, len = ob.length; i < len; )
            callback.call(scope || ob[i], ob[i], i++, ob);
        return ob;
    }
    function affix(arr, prefix, suffix) {
        var v,
            r = [],
            l = arr.length,
            i = 0;
        for (prefix = prefix || "", suffix = suffix || ""; i < l; )
            (v = arr[i++]), null == v || r.push(prefix + v + suffix);
        return r;
    }
    function sift(ob, fn, scope) {
        var l,
            v,
            invert,
            u = 0,
            i = 0,
            ret = [],
            isF = "function" == typeof fn;
        if (!ob) return ret;
        for (
            scope = (invert = !0 === scope) ? null : scope, l = ob.length;
            i < l;
            i++
        )
            (v = ob[i]), invert ===
                !(isF ? fn.call(scope, v, i, ob) : fn ? typeof v === fn : v) &&
                (ret[u++] = v);
        return ret;
    }
    function merge(base, adds) {
        var k, l;
        if (!base || !adds) return base;
        if ("function" != typeof adds && isNumber((l = adds.length))) {
            for (k = 0; k < l; k++) void 0 === adds[k] || (base[k] = adds[k]);
            base.length > k || (base.length = k);
        } else for (k in adds) owns.call(adds, k) && void 0 !== adds[k] && (base[k] = adds[k]);
        return base;
    }
    function route(item, fn, scope) {
        return null == item
            ? item
            : (
                  "object" == typeof item &&
                  !item.nodeType &&
                  isNumber(item.length)
                      ? each(item, fn, scope)
                      : fn.call(scope || item, item),
                  item
              );
    }
    function ranger(fn) {
        return function(min, max) {
            var n = fn();
            return (min = n >= (min || 0)), max ? min && n <= max : min;
        };
    }
    function dpr(decimal) {
        var dPR = win.devicePixelRatio;
        return null == decimal
            ? dPR || (dpr(2) ? 2 : dpr(1.5) ? 1.5 : dpr(1) ? 1 : 0)
            : !!isFinite(decimal) &&
              (dPR && dPR > 0
                  ? dPR >= decimal
                  : (
                        (decimal =
                            "only all and (min--moz-device-pixel-ratio:" +
                            decimal +
                            ")"),
                        !!media(decimal).matches ||
                            !!media(decimal.replace("-moz-", "")).matches
                    ));
    }
    function camelize(s) {
        return s
            .replace(regexDataPrefix, "$1")
            .replace(regexDashB4, function(m, m1) {
                return m1.toUpperCase();
            });
    }
    function datatize(s) {
        return (
            "data-" +
            (s
                ? s
                      .replace(regexDataPrefix, "$1")
                      .replace(regexCamels, "$1-$2")
                      .toLowerCase()
                : s)
        );
    }
    function render(s) {
        var n;
        return s && "string" == typeof s
            ? "true" === s ||
              ("false" !== s &&
                  ("undefined" === s
                      ? n
                      : "null" === s
                        ? null
                        : (n = parseFloat(s)) === +n ? n : s))
            : s;
    }
    function getNative(e) {
        return (
            !!e &&
            (1 === e.nodeType ? e : !(!e[0] || 1 !== e[0].nodeType) && e[0])
        );
    }
    function datasetChainable(key, value) {
        var n,
            numOfArgs = arguments.length,
            elem = getNative(this),
            ret = {},
            renderData = !1;
        if (numOfArgs) {
            if (
                (
                    isArray(key) && ((renderData = !0), (key = key[0])),
                    "string" == typeof key
                )
            ) {
                if (((key = datatize(key)), 1 === numOfArgs))
                    return (ret = elem.getAttribute(key)), renderData
                        ? render(ret)
                        : ret;
                if (this === elem || 2 > (n = this.length || 1))
                    elem.setAttribute(key, value);
                else
                    for (; n--; )
                        n in this && datasetChainable.apply(this[n], arguments);
            } else if (key instanceof Object)
                for (n in key)
                    key.hasOwnProperty(n) &&
                        datasetChainable.call(this, n, key[n]);
            return this;
        }
        return elem.dataset && DOMStringMap
            ? elem.dataset
            : (
                  each(elem.attributes, function(a) {
                      a &&
                          (n = String(a.name).match(regexDataPrefix)) &&
                          (ret[camelize(n[1])] = a.value);
                  }),
                  ret
              );
    }
    function deletesChainable(keys) {
        return this &&
            "string" == typeof keys &&
            (
                (keys = ssvToArr(keys)),
                route(this, function(el) {
                    each(keys, function(key) {
                        key && el.removeAttribute(datatize(key));
                    });
                })
            ), this;
    }
    function dataset(elem, key, value) {
        return datasetChainable.apply(elem, slice.call(arguments, 1));
    }
    function deletes(elem, keys) {
        return deletesChainable.call(elem, keys);
    }
    function selectify(keys) {
        for (var k, r = [], i = 0, l = keys.length; i < l; )
            (k = keys[i++]) &&
                r.push(
                    "[" +
                        datatize(
                            k.replace(regexTrimPunc, "").replace(".", "\\.")
                        ) +
                        "]"
                );
        return r.join();
    }
    function target(keys) {
        return $(selectify(ssvToArr(keys)));
    }
    function scrollX() {
        return window.pageXOffset || docElem.scrollLeft;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    function rectangle(el, verge) {
        var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {};
        return (verge =
            "number" == typeof verge
                ? verge || 0
                : 0), { top: (r.top || 0) - verge, left: (r.left || 0) - verge, bottom: (r.bottom || 0) + verge, right: (r.right || 0) + verge };
    }
    function inX(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.right >= 0 && r.left <= viewportW();
    }
    function inY(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.bottom >= 0 && r.top <= viewportH();
    }
    function inViewport(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return (
            !!r &&
            r.bottom >= 0 &&
            r.top <= viewportH() &&
            r.right >= 0 &&
            r.left <= viewportW()
        );
    }
    function detectMode(elem) {
        var srcElems = {
                img: 1,
                input: 1,
                source: 3,
                embed: 3,
                track: 3,
                iframe: 5,
                audio: 5,
                video: 5,
                script: 5
            },
            modeID = srcElems[elem.nodeName.toLowerCase()] || -1;
        return 4 > modeID ? modeID : null != elem.getAttribute("src") ? 5 : -5;
    }
    function store($elems, key, source) {
        var valToStore;
        return ($elems && null != key) ||
            doError(
                "store"
            ), (source = "string" == typeof source && source), route($elems, function(el) {
            (valToStore = source
                ? el.getAttribute(source)
                : 0 < detectMode(el)
                  ? el.getAttribute("src")
                  : el.innerHTML), null == valToStore ? deletes(el, key) : dataset(el, key, valToStore);
        }), Response;
    }
    function access(elem, keys) {
        var ret = [];
        return elem &&
            keys &&
            each(
                ssvToArr(keys),
                function(k, i) {
                    ret.push(dataset(elem, k));
                },
                elem
            ), ret;
    }
    function addTest(prop, fn) {
        return "string" == typeof prop &&
            "function" == typeof fn &&
            ((propTests[prop] = fn), (isCustom[prop] = 1)), Response;
    }
    function resize(fn) {
        return $win.on("resize", fn), Response;
    }
    function crossover(prop, fn) {
        var temp,
            eventToFire,
            eventCrossover = event.crossover;
        return "function" == typeof prop &&
            (
                (temp = fn),
                (fn = prop),
                (prop = temp)
            ), (eventToFire = prop ? "" + prop + eventCrossover : eventCrossover), $win.on(eventToFire, fn), Response;
    }
    function action(fnOrArr) {
        return route(fnOrArr, function(fn) {
            ready(fn), resize(fn);
        }), Response;
    }
    function create(args) {
        return route(args, function(options) {
            "object" == typeof options || doError("create @args");
            var lowestNonZeroBP,
                elemset = objectCreate(Elemset).configure(options),
                verge = elemset.verge,
                breakpoints = elemset.breakpoints,
                scrollName = namespaceIt("scroll"),
                resizeName = namespaceIt("resize");
            breakpoints.length &&
                (
                    (lowestNonZeroBP = breakpoints[0] || breakpoints[1] || !1),
                    ready(function() {
                        function resizeHandler() {
                            elemset.reset(), each(elemset.$e, function(el, i) {
                                elemset[i].decideValue().updateDOM();
                            }).trigger(allLoaded);
                        }
                        function scrollHandler() {
                            each(elemset.$e, function(el, i) {
                                inViewport(elemset[i].$e, verge) &&
                                    elemset[i].updateDOM();
                            });
                        }
                        var allLoaded = event.allLoaded,
                            lazy = !!elemset.lazy;
                        each(elemset.target().$e, function(el, i) {
                            (elemset[i] = objectCreate(elemset).prepareData(
                                el
                            )), (lazy && !inViewport(elemset[i].$e, verge)) || elemset[i].updateDOM();
                        }), elemset.dynamic &&
                            (elemset.custom || lowestNonZeroBP < screenMax) &&
                            resize(resizeHandler, resizeName), lazy &&
                            (
                                $win.on(scrollName, scrollHandler),
                                elemset.$e.one(allLoaded, function() {
                                    $win.off(scrollName, scrollHandler);
                                })
                            );
                    })
                );
        }), Response;
    }
    function noConflict(callback) {
        return root[name] === Response &&
            (root[
                name
            ] = old), "function" == typeof callback && callback.call(root, Response), Response;
    }
    function exposeAreaFilters(engine, proto, force) {
        each(["inX", "inY", "inViewport"], function(methodName) {
            (force || !proto[methodName]) &&
                (proto[methodName] = function(verge, invert) {
                    return engine(
                        sift(this, function(el) {
                            return (
                                !!el &&
                                !invert === Response[methodName](el, verge)
                            );
                        })
                    );
                });
        });
    }
    function bridge(host, force) {
        return "function" == typeof host &&
            host.fn &&
            (
                (force || void 0 === host.fn.dataset) &&
                    (host.fn.dataset = datasetChainable),
                (force || void 0 === host.fn.deletes) &&
                    (host.fn.deletes = deletesChainable),
                exposeAreaFilters(host, host.fn, force)
            ), Response;
    }
    function chain(host, force) {
        return (host = arguments.length ? host : $), bridge(host, force);
    }
    if ("function" != typeof $)
        try {
            console.log(
                "Response was unable to run due to missing dependency."
            );
        } catch (e) {}
    var Response,
        Elemset,
        band,
        wave,
        root = this,
        name = "Response",
        old = root[name],
        initContentKey = "init" + name,
        win = window,
        doc = document,
        docElem = doc.documentElement,
        ready = $.domReady || $,
        $win = $(win),
        screen = win.screen,
        AP = Array.prototype,
        OP = Object.prototype,
        slice = AP.slice,
        concat = AP.concat,
        toString = OP.toString,
        owns = OP.hasOwnProperty,
        isArray =
            Array.isArray ||
            function(item) {
                return "[object Array]" === toString.call(item);
            },
        defaultBreakpoints = {
            width: [0, 320, 481, 641, 961, 1025, 1281],
            height: [0, 481],
            ratio: [1, 1.5, 2]
        },
        device = {},
        propTests = {},
        isCustom = {},
        sets = { all: [] },
        suid = 1,
        screenW = screen.width,
        screenH = screen.height,
        screenMax = screenW > screenH ? screenW : screenH,
        screenMin = screenW + screenH - screenMax,
        deviceW = function() {
            return screenW;
        },
        deviceH = function() {
            return screenH;
        },
        regexFunkyPunc = /[^a-z0-9_\-\.]/gi,
        regexTrimPunc = /^[\W\s]+|[\W\s]+$|/g,
        regexCamels = /([a-z])([A-Z])/g,
        regexDashB4 = /-(.)/g,
        regexDataPrefix = /^data-(.+)$/,
        objectCreate =
            Object.create ||
            function(proto) {
                function Type() {}
                return (Type.prototype = proto), new Type();
            },
        namespaceIt = function(eventName, customNamespace) {
            return (customNamespace =
                customNamespace || name), eventName.replace(regexTrimPunc, "") +
                "." +
                customNamespace.replace(regexTrimPunc, "");
        },
        event = {
            allLoaded: namespaceIt("allLoaded"),
            crossover: namespaceIt("crossover")
        },
        matchMedia = win.matchMedia || win.msMatchMedia,
        media =
            matchMedia ||
            function() {
                return {};
            },
        viewportW = (function(win, docElem, mM) {
            var client = docElem.clientWidth,
                inner = win.innerWidth;
            return mM &&
            client < inner &&
            !0 === mM("(min-width:" + inner + "px)").matches
                ? function() {
                      return win.innerWidth;
                  }
                : function() {
                      return docElem.clientWidth;
                  };
        })(win, docElem, matchMedia),
        viewportH = (function(win, docElem, mM) {
            var client = docElem.clientHeight,
                inner = win.innerHeight;
            return mM &&
            client < inner &&
            !0 === mM("(min-height:" + inner + "px)").matches
                ? function() {
                      return win.innerHeight;
                  }
                : function() {
                      return docElem.clientHeight;
                  };
        })(win, docElem, matchMedia);
    return (band = ranger(
        viewportW
    )), (wave = ranger(viewportH)), (device.band = ranger(deviceW)), (device.wave = ranger(deviceH)), (Elemset = (function() {
        function sanitize(key) {
            return "string" == typeof key
                ? key.toLowerCase().replace(regexFunkyPunc, "")
                : "";
        }
        var crossover = event.crossover,
            min = Math.min;
        return {
            $e: 0,
            mode: 0,
            breakpoints: null,
            prefix: null,
            prop: "width",
            keys: [],
            dynamic: null,
            custom: 0,
            values: [],
            fn: 0,
            verge: null,
            newValue: 0,
            currValue: 1,
            aka: null,
            lazy: null,
            i: 0,
            uid: null,
            reset: function() {
                for (
                    var subjects = this.breakpoints,
                        i = subjects.length,
                        tempIndex = 0;
                    !tempIndex && i--;

                )
                    this.fn(subjects[i]) && (tempIndex = i);
                return tempIndex !== this.i &&
                    (
                        $win.trigger(crossover).trigger(this.prop + crossover),
                        (this.i = tempIndex || 0)
                    ), this;
            },
            configure: function(options) {
                merge(this, options);
                var i,
                    prefix,
                    aliases,
                    aliasKeys,
                    arr,
                    isNumeric = !0,
                    prop = this.prop;
                if (
                    (
                        (this.uid = suid++),
                        (this.verge = isFinite(this.verge)
                            ? this.verge
                            : min(screenMax, 500)),
                        (this.fn = propTests[prop] || doError("create @fn")),
                        "boolean" != typeof this.dynamic &&
                            (this.dynamic = !(
                                "device" === prop.substring(0, 6)
                            )),
                        (this.custom = isCustom[prop]),
                        (prefix = this.prefix
                            ? sift(map(ssvToArr(this.prefix), sanitize))
                            : ["min-" + prop + "-"]),
                        (aliases = 1 < prefix.length ? prefix.slice(1) : 0),
                        (this.prefix = prefix[0]),
                        (arr = this.breakpoints),
                        isArray(arr)
                            ? (
                                  each(arr, function(v) {
                                      if (!v && 0 !== v)
                                          throw "invalid breakpoint";
                                      isNumeric = isNumeric && isFinite(v);
                                  }),
                                  (arr = isNumeric
                                      ? arr.sort(function(a, b) {
                                            return a - b;
                                        })
                                      : arr),
                                  arr.length || doError("create @breakpoints")
                              )
                            : (arr =
                                  defaultBreakpoints[prop] ||
                                  defaultBreakpoints[prop.split("-").pop()] ||
                                  doError("create @prop")),
                        (this.breakpoints = isNumeric
                            ? sift(arr, function(n) {
                                  return n <= screenMax;
                              })
                            : arr),
                        (this.keys = affix(this.breakpoints, this.prefix)),
                        (this.aka = null),
                        aliases
                    )
                ) {
                    for (aliasKeys = [], i = aliases.length; i--; )
                        aliasKeys.push(affix(this.breakpoints, aliases[i]));
                    (this.aka = aliasKeys), (this.keys = concat.apply(
                        this.keys,
                        aliasKeys
                    ));
                }
                return (sets.all = sets.all.concat(
                    (sets[this.uid] = this.keys)
                )), this;
            },
            target: function() {
                return (this.$e = $(selectify(sets[this.uid]))), store(
                    this.$e,
                    initContentKey
                ), this.keys.push(initContentKey), this;
            },
            decideValue: function() {
                for (
                    var val = null,
                        subjects = this.breakpoints,
                        sL = subjects.length,
                        i = sL;
                    null == val && i--;

                )
                    this.fn(subjects[i]) && (val = this.values[i]);
                return (this.newValue =
                    "string" == typeof val ? val : this.values[sL]), this;
            },
            prepareData: function(elem) {
                if (
                    (
                        (this.$e = $(elem)),
                        (this.mode = detectMode(elem)),
                        (this.values = access(this.$e, this.keys)),
                        this.aka
                    )
                )
                    for (var i = this.aka.length; i--; )
                        this.values = merge(
                            this.values,
                            access(this.$e, this.aka[i])
                        );
                return this.decideValue();
            },
            updateDOM: function() {
                return this.currValue === this.newValue
                    ? this
                    : (
                          (this.currValue = this.newValue),
                          0 < this.mode
                              ? this.$e[0].setAttribute("src", this.newValue)
                              : null == this.newValue
                                ? this.$e.empty && this.$e.empty()
                                : this.$e.html
                                  ? this.$e.html(this.newValue)
                                  : (
                                        this.$e.empty && this.$e.empty(),
                                        (this.$e[0].innerHTML = this.newValue)
                                    ),
                          this
                      );
            }
        };
    })()), (propTests.width = band), (propTests.height = wave), (propTests["device-width"] = device.band), (propTests["device-height"] = device.wave), (propTests["device-pixel-ratio"] = dpr), (Response = {
        deviceMin: function() {
            return screenMin;
        },
        deviceMax: function() {
            return screenMax;
        },
        noConflict: noConflict,
        chain: chain,
        bridge: bridge,
        create: create,
        addTest: addTest,
        datatize: datatize,
        camelize: camelize,
        render: render,
        store: store,
        access: access,
        target: target,
        object: objectCreate,
        crossover: crossover,
        action: action,
        resize: resize,
        ready: ready,
        affix: affix,
        sift: sift,
        dpr: dpr,
        deletes: deletes,
        scrollX: scrollX,
        scrollY: scrollY,
        deviceW: deviceW,
        deviceH: deviceH,
        device: device,
        inX: inX,
        inY: inY,
        route: route,
        merge: merge,
        media: media,
        wave: wave,
        band: band,
        map: map,
        each: each,
        inViewport: inViewport,
        dataset: dataset,
        viewportH: viewportH,
        viewportW: viewportW
    }), ready(function() {
        var nativeJSONParse,
            customData = dataset(doc.body, "responsejs");
        customData &&
            (
                (nativeJSONParse = !!win.JSON && JSON.parse),
                nativeJSONParse
                    ? (customData = nativeJSONParse(customData))
                    : $.parseJSON && (customData = $.parseJSON(customData)),
                customData && customData.create && create(customData.create)
            ), (docElem.className = docElem.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs ");
    }), Response;
}), (function(factory) {
    "function" == typeof define && define.amd
        ? define(["jquery"], factory)
        : factory("undefined" != typeof jQuery ? jQuery : window.Zepto);
})(function($) {
    "use strict";
    function doAjaxSubmit(e) {
        var options = e.data;
        e.isDefaultPrevented() ||
            (e.preventDefault(), $(e.target).ajaxSubmit(options));
    }
    function captureSubmittingElement(e) {
        var target = e.target,
            $el = $(target);
        if (!$el.is("[type=submit],[type=image]")) {
            var t = $el.closest("[type=submit]");
            if (0 === t.length) return;
            target = t[0];
        }
        var form = this;
        if (((form.clk = target), "image" == target.type))
            if (void 0 !== e.offsetX)
                (form.clk_x = e.offsetX), (form.clk_y = e.offsetY);
            else if ("function" == typeof $.fn.offset) {
                var offset = $el.offset();
                (form.clk_x = e.pageX - offset.left), (form.clk_y =
                    e.pageY - offset.top);
            } else
                (form.clk_x = e.pageX - target.offsetLeft), (form.clk_y =
                    e.pageY - target.offsetTop);
        setTimeout(function() {
            form.clk = form.clk_x = form.clk_y = null;
        }, 100);
    }
    function log() {
        if ($.fn.ajaxSubmit.debug) {
            var msg =
                "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log
                ? window.console.log(msg)
                : window.opera &&
                  window.opera.postError &&
                  window.opera.postError(msg);
        }
    }
    var feature = {};
    (feature.fileapi =
        void 0 !==
        $("<input type='file'/>").get(0)
            .files), (feature.formdata = void 0 !== window.FormData);
    var hasProp = !!$.fn.prop;
    ($.fn.attr2 = function() {
        if (!hasProp) return this.attr.apply(this, arguments);
        var val = this.prop.apply(this, arguments);
        return (val && val.jquery) || "string" == typeof val
            ? val
            : this.attr.apply(this, arguments);
    }), ($.fn.ajaxSubmit = function(options) {
        function deepSerialize(extraData) {
            var i,
                part,
                serialized = $.param(extraData, options.traditional).split("&"),
                len = serialized.length,
                result = [];
            for (i = 0; i < len; i++)
                (serialized[i] = serialized[i].replace(
                    /\+/g,
                    " "
                )), (part = serialized[i].split("=")), result.push([
                    decodeURIComponent(part[0]),
                    decodeURIComponent(part[1])
                ]);
            return result;
        }
        function fileUploadXhr(a) {
            for (var formdata = new FormData(), i = 0; i < a.length; i++)
                formdata.append(a[i].name, a[i].value);
            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i = 0; i < serializedData.length; i++)
                    serializedData[i] &&
                        formdata.append(
                            serializedData[i][0],
                            serializedData[i][1]
                        );
            }
            options.data = null;
            var s = $.extend(!0, {}, $.ajaxSettings, options, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: method || "POST"
            });
            options.uploadProgress &&
                (s.xhr = function() {
                    var xhr = $.ajaxSettings.xhr();
                    return xhr.upload &&
                        xhr.upload.addEventListener(
                            "progress",
                            function(event) {
                                var percent = 0,
                                    position = event.loaded || event.position,
                                    total = event.total;
                                event.lengthComputable &&
                                    (percent = Math.ceil(
                                        position / total * 100
                                    )), options.uploadProgress(
                                    event,
                                    position,
                                    total,
                                    percent
                                );
                            },
                            !1
                        ), xhr;
                }), (s.data = null);
            var beforeSend = s.beforeSend;
            return (s.beforeSend = function(xhr, o) {
                options.formData
                    ? (o.data = options.formData)
                    : (o.data = formdata), beforeSend &&
                    beforeSend.call(this, xhr, o);
            }), $.ajax(s);
        }
        function fileUploadIframe(a) {
            function getDoc(frame) {
                var doc = null;
                try {
                    frame.contentWindow && (doc = frame.contentWindow.document);
                } catch (err) {
                    log("cannot get iframe.contentWindow document: " + err);
                }
                if (doc) return doc;
                try {
                    doc = frame.contentDocument
                        ? frame.contentDocument
                        : frame.document;
                } catch (err) {
                    log("cannot get iframe.contentDocument: " + err), (doc =
                        frame.document);
                }
                return doc;
            }
            function doSubmit() {
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log("state = " + state), state &&
                            "uninitialized" == state.toLowerCase() &&
                            setTimeout(checkState, 50);
                    } catch (e) {
                        log("Server abort: ", e, " (", e.name, ")"), cb(
                            SERVER_ABORT
                        ), timeoutHandle &&
                            clearTimeout(
                                timeoutHandle
                            ), (timeoutHandle = void 0);
                    }
                }
                var t = $form.attr2("target"),
                    a = $form.attr2("action");
                form.setAttribute("target", id), (method &&
                    !/post/i.test(method)) ||
                    form.setAttribute("method", "POST"), a != s.url &&
                    form.setAttribute(
                        "action",
                        s.url
                    ), s.skipEncodingOverride ||
                    (method && !/post/i.test(method)) ||
                    $form.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), s.timeout &&
                    (timeoutHandle = setTimeout(function() {
                        (timedOut = !0), cb(CLIENT_TIMEOUT_ABORT);
                    }, s.timeout));
                var extraInputs = [];
                try {
                    if (s.extraData)
                        for (var n in s.extraData)
                            s.extraData.hasOwnProperty(n) &&
                                ($.isPlainObject(s.extraData[n]) &&
                                s.extraData[n].hasOwnProperty("name") &&
                                s.extraData[n].hasOwnProperty("value")
                                    ? extraInputs.push(
                                          $(
                                              '<input type="hidden" name="' +
                                                  s.extraData[n].name +
                                                  '">'
                                          )
                                              .val(s.extraData[n].value)
                                              .appendTo(form)[0]
                                      )
                                    : extraInputs.push(
                                          $(
                                              '<input type="hidden" name="' +
                                                  n +
                                                  '">'
                                          )
                                              .val(s.extraData[n])
                                              .appendTo(form)[0]
                                      ));
                    s.iframeTarget || $io.appendTo("body"), io.attachEvent
                        ? io.attachEvent("onload", cb)
                        : io.addEventListener("load", cb, !1), setTimeout(
                        checkState,
                        15
                    );
                    try {
                        form.submit();
                    } catch (err) {
                        var submitFn = document.createElement("form").submit;
                        submitFn.apply(form);
                    }
                } finally {
                    form.setAttribute("action", a), t
                        ? form.setAttribute("target", t)
                        : $form.removeAttr("target"), $(extraInputs).remove();
                }
            }
            function cb(e) {
                if (!xhr.aborted && !callbackProcessed) {
                    if (
                        (
                            (doc = getDoc(io)),
                            doc ||
                                (
                                    log("cannot access response document"),
                                    (e = SERVER_ABORT)
                                ),
                            e === CLIENT_TIMEOUT_ABORT && xhr
                        )
                    )
                        return xhr.abort("timeout"), void deferred.reject(
                            xhr,
                            "timeout"
                        );
                    if (e == SERVER_ABORT && xhr)
                        return xhr.abort("server abort"), void deferred.reject(
                            xhr,
                            "error",
                            "server abort"
                        );
                    if ((doc && doc.location.href != s.iframeSrc) || timedOut) {
                        io.detachEvent
                            ? io.detachEvent("onload", cb)
                            : io.removeEventListener("load", cb, !1);
                        var errMsg,
                            status = "success";
                        try {
                            if (timedOut) throw "timeout";
                            var isXml =
                                "xml" == s.dataType ||
                                doc.XMLDocument ||
                                $.isXMLDoc(doc);
                            if (
                                (
                                    log("isXml=" + isXml),
                                    !isXml &&
                                        window.opera &&
                                        (null === doc.body ||
                                            !doc.body.innerHTML) &&
                                        --domCheckCount
                                )
                            )
                                return log(
                                    "requeing onLoad callback, DOM not available"
                                ), void setTimeout(cb, 250);
                            var docRoot = doc.body
                                ? doc.body
                                : doc.documentElement;
                            (xhr.responseText = docRoot
                                ? docRoot.innerHTML
                                : null), (xhr.responseXML = doc.XMLDocument
                                ? doc.XMLDocument
                                : doc), isXml &&
                                (s.dataType =
                                    "xml"), (xhr.getResponseHeader = function(
                                header
                            ) {
                                var headers = { "content-type": s.dataType };
                                return headers[header.toLowerCase()];
                            }), docRoot &&
                                (
                                    (xhr.status =
                                        Number(
                                            docRoot.getAttribute("status")
                                        ) || xhr.status),
                                    (xhr.statusText =
                                        docRoot.getAttribute("statusText") ||
                                        xhr.statusText)
                                );
                            var dt = (s.dataType || "").toLowerCase(),
                                scr = /(json|script|text)/.test(dt);
                            if (scr || s.textarea) {
                                var ta = doc.getElementsByTagName(
                                    "textarea"
                                )[0];
                                if (ta)
                                    (xhr.responseText = ta.value), (xhr.status =
                                        Number(ta.getAttribute("status")) ||
                                        xhr.status), (xhr.statusText =
                                        ta.getAttribute("statusText") ||
                                        xhr.statusText);
                                else if (scr) {
                                    var pre = doc.getElementsByTagName(
                                            "pre"
                                        )[0],
                                        b = doc.getElementsByTagName("body")[0];
                                    pre
                                        ? (xhr.responseText = pre.textContent
                                              ? pre.textContent
                                              : pre.innerText)
                                        : b &&
                                          (xhr.responseText = b.textContent
                                              ? b.textContent
                                              : b.innerText);
                                }
                            } else
                                "xml" == dt &&
                                    !xhr.responseXML &&
                                    xhr.responseText &&
                                    (xhr.responseXML = toXml(xhr.responseText));
                            try {
                                data = httpData(xhr, dt, s);
                            } catch (err) {
                                (status = "parsererror"), (xhr.error = errMsg =
                                    err || status);
                            }
                        } catch (err) {
                            log("error caught: ", err), (status =
                                "error"), (xhr.error = errMsg = err || status);
                        }
                        xhr.aborted &&
                            (
                                log("upload aborted"),
                                (status = null)
                            ), xhr.status &&
                            (status =
                                (xhr.status >= 200 && xhr.status < 300) ||
                                304 === xhr.status
                                    ? "success"
                                    : "error"), "success" === status
                            ? (
                                  s.success &&
                                      s.success.call(
                                          s.context,
                                          data,
                                          "success",
                                          xhr
                                      ),
                                  deferred.resolve(
                                      xhr.responseText,
                                      "success",
                                      xhr
                                  ),
                                  g && $.event.trigger("ajaxSuccess", [xhr, s])
                              )
                            : status &&
                              (
                                  void 0 === errMsg &&
                                      (errMsg = xhr.statusText),
                                  s.error &&
                                      s.error.call(
                                          s.context,
                                          xhr,
                                          status,
                                          errMsg
                                      ),
                                  deferred.reject(xhr, "error", errMsg),
                                  g &&
                                      $.event.trigger("ajaxError", [
                                          xhr,
                                          s,
                                          errMsg
                                      ])
                              ), g &&
                            $.event.trigger("ajaxComplete", [xhr, s]), g &&
                            !--$.active &&
                            $.event.trigger("ajaxStop"), s.complete &&
                            s.complete.call(
                                s.context,
                                xhr,
                                status
                            ), (callbackProcessed = !0), s.timeout &&
                            clearTimeout(timeoutHandle), setTimeout(function() {
                            s.iframeTarget
                                ? $io.attr("src", s.iframeSrc)
                                : $io.remove(), (xhr.responseXML = null);
                        }, 100);
                    }
                }
            }
            var el,
                i,
                s,
                g,
                id,
                $io,
                io,
                xhr,
                sub,
                n,
                timedOut,
                timeoutHandle,
                form = $form[0],
                deferred = $.Deferred();
            if (
                (
                    (deferred.abort = function(status) {
                        xhr.abort(status);
                    }),
                    a
                )
            )
                for (i = 0; i < elements.length; i++)
                    (el = $(elements[i])), hasProp
                        ? el.prop("disabled", !1)
                        : el.removeAttr("disabled");
            if (
                (
                    (s = $.extend(!0, {}, $.ajaxSettings, options)),
                    (s.context = s.context || s),
                    (id = "jqFormIO" + new Date().getTime()),
                    s.iframeTarget
                        ? (
                              ($io = $(s.iframeTarget)),
                              (n = $io.attr2("name")),
                              n ? (id = n) : $io.attr2("name", id)
                          )
                        : (
                              ($io = $(
                                  '<iframe name="' +
                                      id +
                                      '" src="' +
                                      s.iframeSrc +
                                      '" />'
                              )),
                              $io.css({
                                  position: "absolute",
                                  top: "-1000px",
                                  left: "-1000px"
                              })
                          ),
                    (io = $io[0]),
                    (xhr = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(status) {
                            var e =
                                "timeout" === status ? "timeout" : "aborted";
                            log("aborting upload... " + e), (this.aborted = 1);
                            try {
                                io.contentWindow.document.execCommand &&
                                    io.contentWindow.document.execCommand(
                                        "Stop"
                                    );
                            } catch (ignore) {}
                            $io.attr(
                                "src",
                                s.iframeSrc
                            ), (xhr.error = e), s.error &&
                                s.error.call(s.context, xhr, e, status), g &&
                                $.event.trigger("ajaxError", [
                                    xhr,
                                    s,
                                    e
                                ]), s.complete &&
                                s.complete.call(s.context, xhr, e);
                        }
                    }),
                    (g = s.global),
                    g && 0 === $.active++ && $.event.trigger("ajaxStart"),
                    g && $.event.trigger("ajaxSend", [xhr, s]),
                    s.beforeSend && s.beforeSend.call(s.context, xhr, s) === !1
                )
            )
                return s.global && $.active--, deferred.reject(), deferred;
            if (xhr.aborted) return deferred.reject(), deferred;
            (sub = form.clk), sub &&
                (
                    (n = sub.name),
                    n &&
                        !sub.disabled &&
                        (
                            (s.extraData = s.extraData || {}),
                            (s.extraData[n] = sub.value),
                            "image" == sub.type &&
                                (
                                    (s.extraData[n + ".x"] = form.clk_x),
                                    (s.extraData[n + ".y"] = form.clk_y)
                                )
                        )
                );
            var CLIENT_TIMEOUT_ABORT = 1,
                SERVER_ABORT = 2,
                csrf_token = $("meta[name=csrf-token]").attr("content"),
                csrf_param = $("meta[name=csrf-param]").attr("content");
            csrf_param &&
                csrf_token &&
                (
                    (s.extraData = s.extraData || {}),
                    (s.extraData[csrf_param] = csrf_token)
                ), s.forceSync ? doSubmit() : setTimeout(doSubmit, 10);
            var data,
                doc,
                callbackProcessed,
                domCheckCount = 50,
                toXml =
                    $.parseXML ||
                    function(s, doc) {
                        return window.ActiveXObject
                            ? (
                                  (doc = new ActiveXObject("Microsoft.XMLDOM")),
                                  (doc.async = "false"),
                                  doc.loadXML(s)
                              )
                            : (doc = new DOMParser().parseFromString(
                                  s,
                                  "text/xml"
                              )), doc &&
                        doc.documentElement &&
                        "parsererror" != doc.documentElement.nodeName
                            ? doc
                            : null;
                    },
                parseJSON =
                    $.parseJSON ||
                    function(s) {
                        return window.eval("(" + s + ")");
                    },
                httpData = function(xhr, type, s) {
                    var ct = xhr.getResponseHeader("content-type") || "",
                        xml =
                            "xml" === type || (!type && ct.indexOf("xml") >= 0),
                        data = xml ? xhr.responseXML : xhr.responseText;
                    return xml &&
                        "parsererror" === data.documentElement.nodeName &&
                        $.error &&
                        $.error("parsererror"), s &&
                        s.dataFilter &&
                        (data = s.dataFilter(data, type)), "string" ==
                        typeof data &&
                        ("json" === type || (!type && ct.indexOf("json") >= 0)
                            ? (data = parseJSON(data))
                            : ("script" === type ||
                                  (!type && ct.indexOf("javascript") >= 0)) &&
                              $.globalEval(data)), data;
                };
            return deferred;
        }
        if (!this.length)
            return log(
                "ajaxSubmit: skipping submit process - no element selected"
            ), this;
        var method,
            action,
            url,
            $form = this;
        "function" == typeof options
            ? (options = { success: options })
            : void 0 === options && (options = {}), (method =
            options.type || this.attr2("method")), (action =
            options.url || this.attr2("action")), (url =
            "string" == typeof action ? $.trim(action) : ""), (url =
            url || window.location.href || ""), url &&
            (url = (url.match(/^([^#]+)/) || [])[1]), (options = $.extend(
            !0,
            {
                url: url,
                success: $.ajaxSettings.success,
                type: method || $.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "")
                    ? "javascript:false"
                    : "about:blank"
            },
            options
        ));
        var veto = {};
        if (
            (
                this.trigger("form-pre-serialize", [this, options, veto]),
                veto.veto
            )
        )
            return log(
                "ajaxSubmit: submit vetoed via form-pre-serialize trigger"
            ), this;
        if (
            options.beforeSerialize &&
            options.beforeSerialize(this, options) === !1
        )
            return log(
                "ajaxSubmit: submit aborted via beforeSerialize callback"
            ), this;
        var traditional = options.traditional;
        void 0 === traditional && (traditional = $.ajaxSettings.traditional);
        var qx,
            elements = [],
            a = this.formToArray(options.semantic, elements);
        if (
            (
                options.data &&
                    (
                        (options.extraData = options.data),
                        (qx = $.param(options.data, traditional))
                    ),
                options.beforeSubmit &&
                    options.beforeSubmit(a, this, options) === !1
            )
        )
            return log(
                "ajaxSubmit: submit aborted via beforeSubmit callback"
            ), this;
        if (
            (
                this.trigger("form-submit-validate", [a, this, options, veto]),
                veto.veto
            )
        )
            return log(
                "ajaxSubmit: submit vetoed via form-submit-validate trigger"
            ), this;
        var q = $.param(a, traditional);
        qx && (q = q ? q + "&" + qx : qx), "GET" == options.type.toUpperCase()
            ? (
                  (options.url +=
                      (options.url.indexOf("?") >= 0 ? "&" : "?") + q),
                  (options.data = null)
              )
            : (options.data = q);
        var callbacks = [];
        if (
            (
                options.resetForm &&
                    callbacks.push(function() {
                        $form.resetForm();
                    }),
                options.clearForm &&
                    callbacks.push(function() {
                        $form.clearForm(options.includeHidden);
                    }),
                !options.dataType && options.target
            )
        ) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? "replaceWith" : "html";
                $(options.target)[fn](data).each(oldSuccess, arguments);
            });
        } else options.success && callbacks.push(options.success);
        if (
            (
                (options.success = function(data, status, xhr) {
                    for (
                        var context = options.context || this,
                            i = 0,
                            max = callbacks.length;
                        i < max;
                        i++
                    )
                        callbacks[i].apply(context, [
                            data,
                            status,
                            xhr || $form,
                            $form
                        ]);
                }),
                options.error
            )
        ) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form]);
            };
        }
        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form]);
            };
        }
        var fileInputs = $("input[type=file]:enabled", this).filter(function() {
                return "" !== $(this).val();
            }),
            hasFileInputs = fileInputs.length > 0,
            mp = "multipart/form-data",
            multipart =
                $form.attr("enctype") == mp || $form.attr("encoding") == mp,
            fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var jqxhr,
            shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
        options.iframe !== !1 && (options.iframe || shouldUseFrame)
            ? options.closeKeepAlive
              ? $.get(options.closeKeepAlive, function() {
                    jqxhr = fileUploadIframe(a);
                })
              : (jqxhr = fileUploadIframe(a))
            : (jqxhr =
                  (hasFileInputs || multipart) && fileAPI
                      ? fileUploadXhr(a)
                      : $.ajax(options)), $form
            .removeData("jqxhr")
            .data("jqxhr", jqxhr);
        for (var k = 0; k < elements.length; k++) elements[k] = null;
        return this.trigger("form-submit-notify", [this, options]), this;
    }), ($.fn.ajaxForm = function(options) {
        if (
            (
                (options = options || {}),
                (options.delegation =
                    options.delegation && $.isFunction($.fn.on)),
                !options.delegation && 0 === this.length
            )
        ) {
            var o = { s: this.selector, c: this.context };
            return !$.isReady && o.s
                ? (
                      log("DOM not ready, queuing ajaxForm"),
                      $(function() {
                          $(o.s, o.c).ajaxForm(options);
                      }),
                      this
                  )
                : (
                      log(
                          "terminating; zero elements found by selector" +
                              ($.isReady ? "" : " (DOM not ready)")
                      ),
                      this
                  );
        }
        return options.delegation
            ? (
                  $(document)
                      .off("submit.form-plugin", this.selector, doAjaxSubmit)
                      .off(
                          "click.form-plugin",
                          this.selector,
                          captureSubmittingElement
                      )
                      .on(
                          "submit.form-plugin",
                          this.selector,
                          options,
                          doAjaxSubmit
                      )
                      .on(
                          "click.form-plugin",
                          this.selector,
                          options,
                          captureSubmittingElement
                      ),
                  this
              )
            : this.ajaxFormUnbind()
                  .bind("submit.form-plugin", options, doAjaxSubmit)
                  .bind("click.form-plugin", options, captureSubmittingElement);
    }), ($.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin");
    }), ($.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (0 === this.length) return a;
        var form = this[0],
            els = semantic ? form.getElementsByTagName("*") : form.elements;
        if (!els) return a;
        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; i < max; i++)
            if (((el = els[i]), (n = el.name), n && !el.disabled))
                if (semantic && form.clk && "image" == el.type)
                    form.clk == el &&
                        (
                            a.push({
                                name: n,
                                value: $(el).val(),
                                type: el.type
                            }),
                            a.push(
                                { name: n + ".x", value: form.clk_x },
                                { name: n + ".y", value: form.clk_y }
                            )
                        );
                else if (
                    ((v = $.fieldValue(el, !0)), v && v.constructor == Array)
                )
                    for (
                        elements && elements.push(el), j = 0, jmax = v.length;
                        j < jmax;
                        j++
                    )
                        a.push({ name: n, value: v[j] });
                else if (feature.fileapi && "file" == el.type) {
                    elements && elements.push(el);
                    var files = el.files;
                    if (files.length)
                        for (j = 0; j < files.length; j++)
                            a.push({ name: n, value: files[j], type: el.type });
                    else a.push({ name: n, value: "", type: el.type });
                } else
                    null !== v &&
                        "undefined" != typeof v &&
                        (
                            elements && elements.push(el),
                            a.push({
                                name: n,
                                value: v,
                                type: el.type,
                                required: el.required
                            })
                        );
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0];
            (n = input.name), n &&
                !input.disabled &&
                "image" == input.type &&
                (
                    a.push({ name: n, value: $input.val() }),
                    a.push(
                        { name: n + ".x", value: form.clk_x },
                        { name: n + ".y", value: form.clk_y }
                    )
                );
        }
        return a;
    }), ($.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic));
    }), ($.fn.fieldSerialize = function(successful) {
        var a = [];
        return this.each(function() {
            var n = this.name;
            if (n) {
                var v = $.fieldValue(this, successful);
                if (v && v.constructor == Array)
                    for (var i = 0, max = v.length; i < max; i++)
                        a.push({ name: n, value: v[i] });
                else
                    null !== v &&
                        "undefined" != typeof v &&
                        a.push({ name: this.name, value: v });
            }
        }), $.param(a);
    }), ($.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i],
                v = $.fieldValue(el, successful);
            null === v ||
                "undefined" == typeof v ||
                (v.constructor == Array && !v.length) ||
                (v.constructor == Array ? $.merge(val, v) : val.push(v));
        }
        return val;
    }), ($.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (
            (
                void 0 === successful && (successful = !0),
                successful &&
                    (!n ||
                        el.disabled ||
                        "reset" == t ||
                        "button" == t ||
                        (("checkbox" == t || "radio" == t) && !el.checked) ||
                        (("submit" == t || "image" == t) &&
                            el.form &&
                            el.form.clk != el) ||
                        ("select" == tag && el.selectedIndex == -1))
            )
        )
            return null;
        if ("select" == tag) {
            var index = el.selectedIndex;
            if (index < 0) return null;
            for (
                var a = [],
                    ops = el.options,
                    one = "select-one" == t,
                    max = one ? index + 1 : ops.length,
                    i = one ? index : 0;
                i < max;
                i++
            ) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (
                        (
                            v ||
                                (v =
                                    op.attributes &&
                                    op.attributes.value &&
                                    !op.attributes.value.specified
                                        ? op.text
                                        : op.value),
                            one
                        )
                    )
                        return v;
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val();
    }), ($.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $("input,select,textarea", this).clearFields(includeHidden);
        });
    }), ($.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            re.test(t) || "textarea" == tag
                ? (this.value = "")
                : "checkbox" == t || "radio" == t
                  ? (this.checked = !1)
                  : "select" == tag
                    ? (this.selectedIndex = -1)
                    : "file" == t
                      ? /MSIE/.test(navigator.userAgent)
                        ? $(this).replaceWith($(this).clone(!0))
                        : $(this).val("")
                      : includeHidden &&
                        ((includeHidden === !0 && /hidden/.test(t)) ||
                            ("string" == typeof includeHidden &&
                                $(this).is(includeHidden))) &&
                        (this.value = "");
        });
    }), ($.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset ||
                ("object" == typeof this.reset && !this.reset.nodeType)) &&
                this.reset();
        });
    }), ($.fn.enable = function(b) {
        return void 0 === b && (b = !0), this.each(function() {
            this.disabled = !b;
        });
    }), ($.fn.selected = function(select) {
        return void 0 === select && (select = !0), this.each(function() {
            var t = this.type;
            if ("checkbox" == t || "radio" == t) this.checked = select;
            else if ("option" == this.tagName.toLowerCase()) {
                var $sel = $(this).parent("select");
                select &&
                    $sel[0] &&
                    "select-one" == $sel[0].type &&
                    $sel.find("option").selected(!1), (this.selected = select);
            }
        });
    }), ($.fn.ajaxSubmit.debug = !1);
}), (function($, undefined) {
    "use strict";
    function debug(s) {
        $.fn.cycle.debug && log(s);
    }
    function log() {
        window.console &&
            console.log &&
            console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
    }
    function triggerPause(cont, byHover, onPager) {
        var opts = $(cont).data("cycle.opts");
        if (opts) {
            var paused = !!cont.cyclePause;
            paused && opts.paused
                ? opts.paused(cont, opts, byHover, onPager)
                : !paused &&
                  opts.resumed &&
                  opts.resumed(cont, opts, byHover, onPager);
        }
    }
    function handleArguments(cont, options, arg2) {
        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === !0) {
                var options = $(cont).data("cycle.opts");
                if (!options)
                    return log("options not found, can not resume"), !1;
                cont.cycleTimeout &&
                    (
                        clearTimeout(cont.cycleTimeout),
                        (cont.cycleTimeout = 0)
                    ), go(options.elements, options, 1, !options.backwards);
            }
        }
        if (
            (
                cont.cycleStop === undefined && (cont.cycleStop = 0),
                (options !== undefined && null !== options) || (options = {}),
                options.constructor == String
            )
        ) {
            switch (options) {
                case "destroy":
                case "stop":
                    var opts = $(cont).data("cycle.opts");
                    return (
                        !!opts &&
                        (
                            cont.cycleStop++,
                            cont.cycleTimeout &&
                                clearTimeout(cont.cycleTimeout),
                            (cont.cycleTimeout = 0),
                            opts.elements && $(opts.elements).stop(),
                            $(cont).removeData("cycle.opts"),
                            "destroy" == options && destroy(cont, opts),
                            !1
                        )
                    );
                case "toggle":
                    return (cont.cyclePause =
                        1 === cont.cyclePause ? 0 : 1), checkInstantResume(
                        cont.cyclePause,
                        arg2,
                        cont
                    ), triggerPause(cont), !1;
                case "pause":
                    return (cont.cyclePause = 1), triggerPause(cont), !1;
                case "resume":
                    return (cont.cyclePause = 0), checkInstantResume(
                        !1,
                        arg2,
                        cont
                    ), triggerPause(cont), !1;
                case "prev":
                case "next":
                    return (opts = $(cont).data("cycle.opts"))
                        ? (
                              "string" == typeof arg2 &&
                                  (opts.oneTimeFx = arg2),
                              $.fn.cycle[options](opts),
                              !1
                          )
                        : (log('options not found, "prev/next" ignored'), !1);
                default:
                    options = { fx: options };
            }
            return options;
        }
        if (options.constructor == Number) {
            var num = options;
            return (options = $(cont).data("cycle.opts"))
                ? num < 0 || num >= options.elements.length
                  ? (log("invalid slide index: " + num), !1)
                  : (
                        (options.nextSlide = num),
                        cont.cycleTimeout &&
                            (
                                clearTimeout(cont.cycleTimeout),
                                (cont.cycleTimeout = 0)
                            ),
                        "string" == typeof arg2 && (options.oneTimeFx = arg2),
                        go(
                            options.elements,
                            options,
                            1,
                            num >= options.currSlide
                        ),
                        !1
                    )
                : (log("options not found, can not advance slide"), !1);
        }
        return options;
    }
    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter)
            try {
                el.style.removeAttribute("filter");
            } catch (smother) {}
    }
    function destroy(cont, opts) {
        opts.next && $(opts.next).unbind(opts.prevNextEvent), opts.prev &&
            $(opts.prev).unbind(opts.prevNextEvent), (opts.pager ||
            opts.pagerAnchorBuilder) &&
            $.each(opts.pagerAnchors || [], function() {
                this.unbind().remove();
            }), (opts.pagerAnchors = null), $(cont).unbind(
            "mouseenter.cycle mouseleave.cycle"
        ), opts.destroy && opts.destroy(opts);
    }
    function buildOptions($cont, $slides, els, options, o) {
        var startingSlideSpecified,
            opts = $.extend(
                {},
                $.fn.cycle.defaults,
                options || {},
                $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {}
            ),
            meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        meta && (opts = $.extend(opts, meta)), opts.autostop &&
            (opts.countdown = opts.autostopCount || els.length);
        var cont = $cont[0];
        if (
            (
                $cont.data("cycle.opts", opts),
                (opts.$cont = $cont),
                (opts.stopCount = cont.cycleStop),
                (opts.elements = els),
                (opts.before = opts.before ? [opts.before] : []),
                (opts.after = opts.after ? [opts.after] : []),
                !$.support.opacity &&
                    opts.cleartype &&
                    opts.after.push(function() {
                        removeFilter(this, opts);
                    }),
                opts.continuous &&
                    opts.after.push(function() {
                        go(els, opts, 0, !opts.backwards);
                    }),
                saveOriginalOpts(opts),
                $.support.opacity ||
                    !opts.cleartype ||
                    opts.cleartypeNoBg ||
                    clearTypeFix($slides),
                "static" == $cont.css("position") &&
                    $cont.css("position", "relative"),
                opts.width && $cont.width(opts.width),
                opts.height &&
                    "auto" != opts.height &&
                    $cont.height(opts.height),
                opts.startingSlide !== undefined
                    ? (
                          (opts.startingSlide = parseInt(
                              opts.startingSlide,
                              10
                          )),
                          opts.startingSlide >= els.length ||
                          opts.startSlide < 0
                              ? (opts.startingSlide = 0)
                              : (startingSlideSpecified = !0)
                      )
                    : opts.backwards
                      ? (opts.startingSlide = els.length - 1)
                      : (opts.startingSlide = 0),
                opts.random
            )
        ) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++) opts.randomMap.push(i);
            if (
                (
                    opts.randomMap.sort(function(a, b) {
                        return Math.random() - 0.5;
                    }),
                    startingSlideSpecified
                )
            )
                for (var cnt = 0; cnt < els.length; cnt++)
                    opts.startingSlide == opts.randomMap[cnt] &&
                        (opts.randomIndex = cnt);
            else
                (opts.randomIndex = 1), (opts.startingSlide =
                    opts.randomMap[1]);
        } else opts.startingSlide >= els.length && (opts.startingSlide = 0);
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;
        $slides
            .css({ position: "absolute", top: 0, left: 0 })
            .hide()
            .each(function(i) {
                var z;
                (z = opts.backwards
                    ? first
                      ? i <= first ? els.length + (i - first) : first - i
                      : els.length - i
                    : first
                      ? i >= first ? els.length - (i - first) : first - i
                      : els.length - i), $(this).css("z-index", z);
            }), $(els[first]).css("opacity", 1).show(), removeFilter(
            els[first],
            opts
        ), opts.fit &&
            (opts.aspect
                ? $slides.each(function() {
                      var $slide = $(this),
                          ratio =
                              opts.aspect === !0
                                  ? $slide.width() / $slide.height()
                                  : opts.aspect;
                      opts.width &&
                          $slide.width() != opts.width &&
                          (
                              $slide.width(opts.width),
                              $slide.height(opts.width / ratio)
                          ), opts.height && $slide.height() < opts.height && ($slide.height(opts.height), $slide.width(opts.height * ratio));
                  })
                : (
                      opts.width && $slides.width(opts.width),
                      opts.height &&
                          "auto" != opts.height &&
                          $slides.height(opts.height)
                  )), !opts.center ||
            (opts.fit && !opts.aspect) ||
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width
                        ? (opts.width - $slide.width()) / 2 + "px"
                        : 0,
                    "margin-top": opts.height
                        ? (opts.height - $slide.height()) / 2 + "px"
                        : 0
                });
            }), !opts.center ||
            opts.fit ||
            opts.slideResize ||
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width
                        ? (opts.width - $slide.width()) / 2 + "px"
                        : 0,
                    "margin-top": opts.height
                        ? (opts.height - $slide.height()) / 2 + "px"
                        : 0
                });
            });
        var reshape =
            (opts.containerResize || opts.containerResizeHeight) &&
            $cont.innerHeight() < 1;
        if (reshape) {
            for (var maxw = 0, maxh = 0, j = 0; j < els.length; j++) {
                var $e = $(els[j]),
                    e = $e[0],
                    w = $e.outerWidth(),
                    h = $e.outerHeight();
                w || (w = e.offsetWidth || e.width || $e.attr("width")), h ||
                    (h =
                        e.offsetHeight ||
                        e.height ||
                        $e.attr("height")), (maxw =
                    w > maxw ? w : maxw), (maxh = h > maxh ? h : maxh);
            }
            opts.containerResize &&
                maxw > 0 &&
                maxh > 0 &&
                $cont.css({
                    width: maxw + "px",
                    height: maxh + "px"
                }), opts.containerResizeHeight &&
                maxh > 0 &&
                $cont.css({ height: maxh + "px" });
        }
        var pauseFlag = !1;
        if (
            (
                opts.pause &&
                    $cont
                        .bind("mouseenter.cycle", function() {
                            (pauseFlag = !0), this.cyclePause++, triggerPause(cont, !0);
                        })
                        .bind("mouseleave.cycle", function() {
                            pauseFlag &&
                                this.cyclePause--, triggerPause(cont, !0);
                        }),
                supportMultiTransitions(opts) === !1
            )
        )
            return !1;
        var requeue = !1;
        if (
            (
                (options.requeueAttempts = options.requeueAttempts || 0),
                $slides.each(function() {
                    var $el = $(this);
                    if (
                        (
                            (this.cycleH =
                                opts.fit && opts.height
                                    ? opts.height
                                    : $el.height() ||
                                      this.offsetHeight ||
                                      this.height ||
                                      $el.attr("height") ||
                                      0),
                            (this.cycleW =
                                opts.fit && opts.width
                                    ? opts.width
                                    : $el.width() ||
                                      this.offsetWidth ||
                                      this.width ||
                                      $el.attr("width") ||
                                      0),
                            $el.is("img")
                        )
                    ) {
                        var loading =
                            0 === this.cycleH &&
                            0 === this.cycleW &&
                            !this.complete;
                        if (loading) {
                            if (
                                o.s &&
                                opts.requeueOnImageNotLoaded &&
                                ++options.requeueAttempts < 100
                            )
                                return log(
                                    options.requeueAttempts,
                                    " - img slide not loaded, requeuing slideshow: ",
                                    this.src,
                                    this.cycleW,
                                    this.cycleH
                                ), setTimeout(function() {
                                    $(o.s, o.c).cycle(options);
                                }, opts.requeueTimeout), (requeue = !0), !1;
                            log(
                                "could not determine size of image: " +
                                    this.src,
                                this.cycleW,
                                this.cycleH
                            );
                        }
                    }
                    return !0;
                }),
                requeue
            )
        )
            return !1;
        if (
            (
                (opts.cssBefore = opts.cssBefore || {}),
                (opts.cssAfter = opts.cssAfter || {}),
                (opts.cssFirst = opts.cssFirst || {}),
                (opts.animIn = opts.animIn || {}),
                (opts.animOut = opts.animOut || {}),
                $slides.not(":eq(" + first + ")").css(opts.cssBefore),
                $($slides[first]).css(opts.cssFirst),
                opts.timeout
            )
        ) {
            (opts.timeout = parseInt(opts.timeout, 10)), opts.speed
                .constructor == String &&
                (opts.speed =
                    $.fx.speeds[opts.speed] ||
                    parseInt(opts.speed, 10)), opts.sync ||
                (opts.speed = opts.speed / 2);
            for (
                var buffer =
                    "none" == opts.fx ? 0 : "shuffle" == opts.fx ? 500 : 250;
                opts.timeout - opts.speed < buffer;

            )
                opts.timeout += opts.speed;
        }
        if (
            (
                opts.easing && (opts.easeIn = opts.easeOut = opts.easing),
                opts.speedIn || (opts.speedIn = opts.speed),
                opts.speedOut || (opts.speedOut = opts.speed),
                (opts.slideCount = els.length),
                (opts.currSlide = opts.lastSlide = first),
                opts.random
                    ? (
                          ++opts.randomIndex == els.length &&
                              (opts.randomIndex = 0),
                          (opts.nextSlide = opts.randomMap[opts.randomIndex])
                      )
                    : opts.backwards
                      ? (opts.nextSlide =
                            0 === opts.startingSlide
                                ? els.length - 1
                                : opts.startingSlide - 1)
                      : (opts.nextSlide =
                            opts.startingSlide >= els.length - 1
                                ? 0
                                : opts.startingSlide + 1),
                !opts.multiFx
            )
        ) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init)) init($cont, $slides, opts);
            else if ("custom" != opts.fx && !opts.multiFx)
                return log(
                    "unknown transition: " + opts.fx,
                    "; slideshow terminating"
                ), !1;
        }
        var e0 = $slides[first];
        return opts.skipInitializationCallbacks ||
            (
                opts.before.length &&
                    opts.before[0].apply(e0, [e0, e0, opts, !0]),
                opts.after.length && opts.after[0].apply(e0, [e0, e0, opts, !0])
            ), opts.next &&
            $(opts.next).bind(opts.prevNextEvent, function() {
                return advance(opts, 1);
            }), opts.prev &&
            $(opts.prev).bind(opts.prevNextEvent, function() {
                return advance(opts, 0);
            }), (opts.pager || opts.pagerAnchorBuilder) &&
            buildPager(els, opts), exposeAddSlide(opts, els), opts;
    }
    function saveOriginalOpts(opts) {
        (opts.original = {
            before: [],
            after: []
        }), (opts.original.cssBefore = $.extend(
            {},
            opts.cssBefore
        )), (opts.original.cssAfter = $.extend(
            {},
            opts.cssAfter
        )), (opts.original.animIn = $.extend(
            {},
            opts.animIn
        )), (opts.original.animOut = $.extend(
            {},
            opts.animOut
        )), $.each(opts.before, function() {
            opts.original.before.push(this);
        }), $.each(opts.after, function() {
            opts.original.after.push(this);
        });
    }
    function supportMultiTransitions(opts) {
        var i,
            tx,
            txs = $.fn.cycle.transitions;
        if (opts.fx.indexOf(",") > 0) {
            for (
                opts.multiFx = !0, opts.fxs = opts.fx
                    .replace(/\s*/g, "")
                    .split(","), i = 0;
                i < opts.fxs.length;
                i++
            ) {
                var fx = opts.fxs[i];
                (tx = txs[fx]), (tx &&
                    txs.hasOwnProperty(fx) &&
                    $.isFunction(tx)) ||
                    (
                        log("discarding unknown transition: ", fx),
                        opts.fxs.splice(i, 1),
                        i--
                    );
            }
            if (!opts.fxs.length)
                return log(
                    "No valid transitions named; slideshow terminating."
                ), !1;
        } else if ("all" == opts.fx) {
            (opts.multiFx = !0), (opts.fxs = []);
            for (var p in txs)
                txs.hasOwnProperty(p) &&
                    (
                        (tx = txs[p]),
                        txs.hasOwnProperty(p) &&
                            $.isFunction(tx) &&
                            opts.fxs.push(p)
                    );
        }
        if (opts.multiFx && opts.randomizeEffects) {
            var r1 = Math.floor(20 * Math.random()) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug("randomized fx sequence: ", opts.fxs);
        }
        return !0;
    }
    function exposeAddSlide(opts, els) {
        opts.addSlide = function(newSlide, prepend) {
            var $s = $(newSlide),
                s = $s[0];
            opts.autostopCount || opts.countdown++, els[
                prepend ? "unshift" : "push"
            ](s), opts.els &&
                opts.els[prepend ? "unshift" : "push"](s), (opts.slideCount =
                els.length), opts.random &&
                (
                    opts.randomMap.push(opts.slideCount - 1),
                    opts.randomMap.sort(function(a, b) {
                        return Math.random() - 0.5;
                    })
                ), $s.css("position", "absolute"), $s[
                prepend ? "prependTo" : "appendTo"
            ](opts.$cont), prepend && (opts.currSlide++, opts.nextSlide++), $
                .support.opacity ||
                !opts.cleartype ||
                opts.cleartypeNoBg ||
                clearTypeFix($s), opts.fit &&
                opts.width &&
                $s.width(opts.width), opts.fit &&
                opts.height &&
                "auto" != opts.height &&
                $s.height(opts.height), (s.cycleH =
                opts.fit && opts.height
                    ? opts.height
                    : $s.height()), (s.cycleW =
                opts.fit && opts.width ? opts.width : $s.width()), $s.css(
                opts.cssBefore
            ), (opts.pager || opts.pagerAnchorBuilder) &&
                $.fn.cycle.createPagerAnchor(
                    els.length - 1,
                    s,
                    $(opts.pager),
                    els,
                    opts
                ), $.isFunction(opts.onAddSlide)
                ? opts.onAddSlide($s)
                : $s.hide();
        };
    }
    function go(els, opts, manual, fwd) {
        function queueNext() {
            var ms = 0;
            opts.timeout;
            opts.timeout && !opts.continuous
                ? (
                      (ms = getTimeout(
                          els[opts.currSlide],
                          els[opts.nextSlide],
                          opts,
                          fwd
                      )),
                      "shuffle" == opts.fx && (ms -= opts.speedOut)
                  )
                : opts.continuous && p.cyclePause && (ms = 10), ms > 0 &&
                (p.cycleTimeout = setTimeout(function() {
                    go(els, opts, 0, !opts.backwards);
                }, ms));
        }
        var p = opts.$cont[0],
            curr = els[opts.currSlide],
            next = els[opts.nextSlide];
        if (
            (
                manual &&
                    opts.busy &&
                    opts.manualTrump &&
                    (
                        debug(
                            "manualTrump in go(), stopping active transition"
                        ),
                        $(els).stop(!0, !0),
                        (opts.busy = 0),
                        clearTimeout(p.cycleTimeout)
                    ),
                opts.busy
            )
        )
            return void debug("transition active, ignoring new tx request");
        if (p.cycleStop == opts.stopCount && (0 !== p.cycleTimeout || manual)) {
            if (
                !manual &&
                !p.cyclePause &&
                !opts.bounce &&
                ((opts.autostop && --opts.countdown <= 0) ||
                    (opts.nowrap &&
                        !opts.random &&
                        opts.nextSlide < opts.currSlide))
            )
                return void (opts.end && opts.end(opts));
            var changed = !1;
            if ((!manual && p.cyclePause) || opts.nextSlide == opts.currSlide)
                queueNext();
            else {
                changed = !0;
                var fx = opts.fx;
                (curr.cycleH = curr.cycleH || $(curr).height()), (curr.cycleW =
                    curr.cycleW || $(curr).width()), (next.cycleH =
                    next.cycleH || $(next).height()), (next.cycleW =
                    next.cycleW || $(next).width()), opts.multiFx &&
                    (
                        fwd &&
                        (opts.lastFx === undefined ||
                            ++opts.lastFx >= opts.fxs.length)
                            ? (opts.lastFx = 0)
                            : !fwd &&
                              (opts.lastFx === undefined ||
                                  --opts.lastFx < 0) &&
                              (opts.lastFx = opts.fxs.length - 1),
                        (fx = opts.fxs[opts.lastFx])
                    ), opts.oneTimeFx &&
                    (
                        (fx = opts.oneTimeFx),
                        (opts.oneTimeFx = null)
                    ), $.fn.cycle.resetState(opts, fx), opts.before.length &&
                    $.each(opts.before, function(i, o) {
                        p.cycleStop == opts.stopCount &&
                            o.apply(next, [curr, next, opts, fwd]);
                    });
                var after = function() {
                    (opts.busy = 0), $.each(opts.after, function(i, o) {
                        p.cycleStop == opts.stopCount &&
                            o.apply(next, [curr, next, opts, fwd]);
                    }), p.cycleStop || queueNext();
                };
                debug(
                    "tx firing(" +
                        fx +
                        "); currSlide: " +
                        opts.currSlide +
                        "; nextSlide: " +
                        opts.nextSlide
                ), (opts.busy = 1), opts.fxFn
                    ? opts.fxFn(
                          curr,
                          next,
                          opts,
                          after,
                          fwd,
                          manual && opts.fastOnEvent
                      )
                    : $.isFunction($.fn.cycle[opts.fx])
                      ? $.fn.cycle[opts.fx](
                            curr,
                            next,
                            opts,
                            after,
                            fwd,
                            manual && opts.fastOnEvent
                        )
                      : $.fn.cycle.custom(
                            curr,
                            next,
                            opts,
                            after,
                            fwd,
                            manual && opts.fastOnEvent
                        );
            }
            if (changed || opts.nextSlide == opts.currSlide) {
                var roll;
                (opts.lastSlide = opts.currSlide), opts.random
                    ? (
                          (opts.currSlide = opts.nextSlide),
                          ++opts.randomIndex == els.length &&
                              (
                                  (opts.randomIndex = 0),
                                  opts.randomMap.sort(function(a, b) {
                                      return Math.random() - 0.5;
                                  })
                              ),
                          (opts.nextSlide = opts.randomMap[opts.randomIndex]),
                          opts.nextSlide == opts.currSlide &&
                              (opts.nextSlide =
                                  opts.currSlide == opts.slideCount - 1
                                      ? 0
                                      : opts.currSlide + 1)
                      )
                    : opts.backwards
                      ? (
                            (roll = opts.nextSlide - 1 < 0),
                            roll && opts.bounce
                                ? (
                                      (opts.backwards = !opts.backwards),
                                      (opts.nextSlide = 1),
                                      (opts.currSlide = 0)
                                  )
                                : (
                                      (opts.nextSlide = roll
                                          ? els.length - 1
                                          : opts.nextSlide - 1),
                                      (opts.currSlide = roll
                                          ? 0
                                          : opts.nextSlide + 1)
                                  )
                        )
                      : (
                            (roll = opts.nextSlide + 1 == els.length),
                            roll && opts.bounce
                                ? (
                                      (opts.backwards = !opts.backwards),
                                      (opts.nextSlide = els.length - 2),
                                      (opts.currSlide = els.length - 1)
                                  )
                                : (
                                      (opts.nextSlide = roll
                                          ? 0
                                          : opts.nextSlide + 1),
                                      (opts.currSlide = roll
                                          ? els.length - 1
                                          : opts.nextSlide - 1)
                                  )
                        );
            }
            changed &&
                opts.pager &&
                opts.updateActivePagerLink(
                    opts.pager,
                    opts.currSlide,
                    opts.activePagerClass
                );
        }
    }
    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            for (
                var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
                "none" != opts.fx && t - opts.speed < 250;

            )
                t += opts.speed;
            if (
                (
                    debug(
                        "calculated timeout: " + t + "; speed: " + opts.speed
                    ),
                    t !== !1
                )
            )
                return t;
        }
        return opts.timeout;
    }
    function advance(opts, moveForward) {
        var val = moveForward ? 1 : -1,
            els = opts.elements,
            p = opts.$cont[0],
            timeout = p.cycleTimeout;
        if (
            (
                timeout && (clearTimeout(timeout), (p.cycleTimeout = 0)),
                opts.random && val < 0
            )
        )
            opts.randomIndex--, --opts.randomIndex == -2
                ? (opts.randomIndex = els.length - 2)
                : opts.randomIndex == -1 &&
                  (opts.randomIndex = els.length - 1), (opts.nextSlide =
                opts.randomMap[opts.randomIndex]);
        else if (opts.random) opts.nextSlide = opts.randomMap[opts.randomIndex];
        else if (
            ((opts.nextSlide = opts.currSlide + val), opts.nextSlide < 0)
        ) {
            if (opts.nowrap) return !1;
            opts.nextSlide = els.length - 1;
        } else if (opts.nextSlide >= els.length) {
            if (opts.nowrap) return !1;
            opts.nextSlide = 0;
        }
        var cb = opts.onPrevNextEvent || opts.prevNextClick;
        return $.isFunction(cb) &&
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]), go(
            els,
            opts,
            1,
            moveForward
        ), !1;
    }
    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function(i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        }), opts.updateActivePagerLink(
            opts.pager,
            opts.startingSlide,
            opts.activePagerClass
        );
    }
    function clearTypeFix($slides) {
        function hex(s) {
            return (s = parseInt(s, 10).toString(16)), s.length < 2
                ? "0" + s
                : s;
        }
        function getBg(e) {
            for (; e && "html" != e.nodeName.toLowerCase(); e = e.parentNode) {
                var v = $.css(e, "background-color");
                if (v && v.indexOf("rgb") >= 0) {
                    var rgb = v.match(/\d+/g);
                    return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && "transparent" != v) return v;
            }
            return "#ffffff";
        }
        debug(
            "applying clearType background-color hack"
        ), $slides.each(function() {
            $(this).css("background-color", getBg(this));
        });
    }
    var ver = "3.0.3";
    ($.expr[":"].paused = function(el) {
        return el.cyclePause;
    }), ($.fn.cycle = function(options, arg2) {
        var o = { s: this.selector, c: this.context };
        return 0 === this.length && "stop" != options
            ? !$.isReady && o.s
              ? (
                    log("DOM not ready, queuing slideshow"),
                    $(function() {
                        $(o.s, o.c).cycle(options, arg2);
                    }),
                    this
                )
              : (
                    log(
                        "terminating; zero elements found by selector" +
                            ($.isReady ? "" : " (DOM not ready)")
                    ),
                    this
                )
            : this.each(function() {
                  var opts = handleArguments(this, options, arg2);
                  if (opts !== !1) {
                      (opts.updateActivePagerLink =
                          opts.updateActivePagerLink ||
                          $.fn.cycle.updateActivePagerLink), this
                          .cycleTimeout &&
                          clearTimeout(
                              this.cycleTimeout
                          ), (this.cycleTimeout = this.cyclePause = 0), (this.cycleStop = 0);
                      var $cont = $(this),
                          $slides = opts.slideExpr
                              ? $(opts.slideExpr, this)
                              : $cont.children(),
                          els = $slides.get();
                      if (els.length < 2)
                          return void log(
                              "terminating; too few slides: " + els.length
                          );
                      var opts2 = buildOptions($cont, $slides, els, opts, o);
                      if (opts2 !== !1) {
                          var startTime = opts2.continuous
                              ? 10
                              : getTimeout(
                                    els[opts2.currSlide],
                                    els[opts2.nextSlide],
                                    opts2,
                                    !opts2.backwards
                                );
                          startTime &&
                              (
                                  (startTime += opts2.delay || 0),
                                  startTime < 10 && (startTime = 10),
                                  debug("first timeout: " + startTime),
                                  (this.cycleTimeout = setTimeout(function() {
                                      go(els, opts2, 0, !opts.backwards);
                                  }, startTime))
                              );
                      }
                  }
              });
    }), ($.fn.cycle.resetState = function(opts, fx) {
        (fx =
            fx ||
            opts.fx), (opts.before = []), (opts.after = []), (opts.cssBefore = $.extend(
            {},
            opts.original.cssBefore
        )), (opts.cssAfter = $.extend(
            {},
            opts.original.cssAfter
        )), (opts.animIn = $.extend(
            {},
            opts.original.animIn
        )), (opts.animOut = $.extend(
            {},
            opts.original.animOut
        )), (opts.fxFn = null), $.each(opts.original.before, function() {
            opts.before.push(this);
        }), $.each(opts.original.after, function() {
            opts.after.push(this);
        });
        var init = $.fn.cycle.transitions[fx];
        $.isFunction(init) && init(opts.$cont, $(opts.elements), opts);
    }), ($.fn.cycle.updateActivePagerLink = function(
        pager,
        currSlide,
        clsName
    ) {
        $(pager).each(function() {
            $(this)
                .children()
                .removeClass(clsName)
                .eq(currSlide)
                .addClass(clsName);
        });
    }), ($.fn.cycle.next = function(opts) {
        advance(opts, 1);
    }), ($.fn.cycle.prev = function(opts) {
        advance(opts, 0);
    }), ($.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
        var a;
        if (
            (
                $.isFunction(opts.pagerAnchorBuilder)
                    ? (
                          (a = opts.pagerAnchorBuilder(i, el)),
                          debug(
                              "pagerAnchorBuilder(" + i + ", el) returned: " + a
                          )
                      )
                    : (a = '<a href="#">' + (i + 1) + "</a>"),
                a
            )
        ) {
            var $a = $(a);
            if (0 === $a.parents("body").length) {
                var arr = [];
                $p.length > 1
                    ? (
                          $p.each(function() {
                              var $clone = $a.clone(!0);
                              $(this).append($clone), arr.push($clone[0]);
                          }),
                          ($a = $(arr))
                      )
                    : $a.appendTo($p);
            }
            (opts.pagerAnchors =
                opts.pagerAnchors || []), opts.pagerAnchors.push($a);
            var pagerFn = function(e) {
                e.preventDefault(), (opts.nextSlide = i);
                var p = opts.$cont[0],
                    timeout = p.cycleTimeout;
                timeout && (clearTimeout(timeout), (p.cycleTimeout = 0));
                var cb = opts.onPagerEvent || opts.pagerClick;
                $.isFunction(cb) && cb(opts.nextSlide, els[opts.nextSlide]), go(
                    els,
                    opts,
                    1,
                    opts.currSlide < i
                );
            };
            /mouseenter|mouseover/i.test(opts.pagerEvent)
                ? $a.hover(pagerFn, function() {})
                : $a.bind(opts.pagerEvent, pagerFn), /^click/.test(
                opts.pagerEvent
            ) ||
                opts.allowPagerClickBubble ||
                $a.bind("click.cycle", function() {
                    return !1;
                });
            var cont = opts.$cont[0],
                pauseFlag = !1;
            opts.pauseOnPagerHover &&
                $a.hover(
                    function() {
                        (pauseFlag = !0), cont.cyclePause++, triggerPause(
                            cont,
                            !0,
                            !0
                        );
                    },
                    function() {
                        pauseFlag && cont.cyclePause--, triggerPause(
                            cont,
                            !0,
                            !0
                        );
                    }
                );
        }
    }), ($.fn.cycle.hopsFromLast = function(opts, fwd) {
        var hops,
            l = opts.lastSlide,
            c = opts.currSlide;
        return (hops = fwd
            ? c > l ? c - l : opts.slideCount - l
            : c < l ? l - c : l + opts.slideCount - c);
    }), ($.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide(), "undefined" ==
            typeof opts.cssBefore.opacity &&
            (opts.cssBefore.opacity = 1), (opts.cssBefore.display =
            "block"), opts.slideResize &&
            w !== !1 &&
            next.cycleW > 0 &&
            (opts.cssBefore.width = next.cycleW), opts.slideResize &&
            h !== !1 &&
            next.cycleH > 0 &&
            (opts.cssBefore.height = next.cycleH), (opts.cssAfter =
            opts.cssAfter || {}), (opts.cssAfter.display = "none"), $(curr).css(
            "zIndex",
            opts.slideCount + (rev === !0 ? 1 : 0)
        ), $(next).css("zIndex", opts.slideCount + (rev === !0 ? 0 : 1));
    }), ($.fn.cycle.custom = function(
        curr,
        next,
        opts,
        cb,
        fwd,
        speedOverride
    ) {
        var $l = $(curr),
            $n = $(next),
            speedIn = opts.speedIn,
            speedOut = opts.speedOut,
            easeIn = opts.easeIn,
            easeOut = opts.easeOut,
            animInDelay = opts.animInDelay,
            animOutDelay = opts.animOutDelay;
        $n.css(opts.cssBefore), speedOverride &&
            (
                (speedIn = speedOut =
                    "number" == typeof speedOverride ? speedOverride : 1),
                (easeIn = easeOut = null)
            );
        var fn = function() {
            $n
                .delay(animInDelay)
                .animate(opts.animIn, speedIn, easeIn, function() {
                    cb();
                });
        };
        $l
            .delay(animOutDelay)
            .animate(opts.animOut, speedOut, easeOut, function() {
                $l.css(opts.cssAfter), opts.sync || fn();
            }), opts.sync && fn();
    }), ($.fn.cycle.transitions = {
        fade: function($cont, $slides, opts) {
            $slides
                .not(":eq(" + opts.currSlide + ")")
                .css("opacity", 0), opts.before.push(function(
                curr,
                next,
                opts
            ) {
                $.fn.cycle.commonReset(
                    curr,
                    next,
                    opts
                ), (opts.cssBefore.opacity = 0);
            }), (opts.animIn = { opacity: 1 }), (opts.animOut = {
                opacity: 0
            }), (opts.cssBefore = { top: 0, left: 0 });
        }
    }), ($.fn.cycle.ver = function() {
        return ver;
    }), ($.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: !1,
        animIn: null,
        animInDelay: 0,
        animOut: null,
        animOutDelay: 0,
        aspect: !1,
        autostop: 0,
        autostopCount: 0,
        backwards: !1,
        before: null,
        center: null,
        cleartype: !$.support.opacity,
        cleartypeNoBg: !1,
        containerResize: 1,
        containerResizeHeight: 0,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: !0,
        metaAttr: "cycle",
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: !0,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        skipInitializationCallbacks: !1,
        slideExpr: null,
        slideResize: 1,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        startingSlide: undefined,
        sync: 1,
        timeout: 4e3,
        timeoutFn: null,
        updateActivePagerLink: null,
        width: null
    });
})(jQuery), (function($) {
    "use strict";
    ($.fn.cycle.transitions.none = function($cont, $slides, opts) {
        opts.fxFn = function(curr, next, opts, after) {
            $(next).show(), $(curr).hide(), after();
        };
    }), ($.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
        $slides
            .not(":eq(" + opts.currSlide + ")")
            .css({ display: "block", opacity: 1 }), opts.before.push(function(
            curr,
            next,
            opts,
            w,
            h,
            rev
        ) {
            $(curr).css("zIndex", opts.slideCount + (rev !== !0 ? 1 : 0)), $(
                next
            ).css("zIndex", opts.slideCount + (rev !== !0 ? 0 : 1));
        }), (opts.animIn.opacity = 1), (opts.animOut.opacity = 0), (opts.cssBefore.opacity = 1), (opts.cssBefore.display =
            "block"), (opts.cssAfter.zIndex = 0);
    }), ($.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden"), opts.before.push(
            $.fn.cycle.commonReset
        );
        var h = $cont.height();
        (opts.cssBefore.top = h), (opts.cssBefore.left = 0), (opts.cssFirst.top = 0), (opts.animIn.top = 0), (opts.animOut.top = -h);
    }), ($.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden"), opts.before.push(
            $.fn.cycle.commonReset
        );
        var h = $cont.height();
        (opts.cssFirst.top = 0), (opts.cssBefore.top = -h), (opts.cssBefore.left = 0), (opts.animIn.top = 0), (opts.animOut.top = h);
    }), ($.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden"), opts.before.push(
            $.fn.cycle.commonReset
        );
        var w = $cont.width();
        (opts.cssFirst.left = 0), (opts.cssBefore.left = w), (opts.cssBefore.top = 0), (opts.animIn.left = 0), (opts.animOut.left =
            0 - w);
    }), ($.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden"), opts.before.push(
            $.fn.cycle.commonReset
        );
        var w = $cont.width();
        (opts.cssFirst.left = 0), (opts.cssBefore.left = -w), (opts.cssBefore.top = 0), (opts.animIn.left = 0), (opts.animOut.left = w);
    }), ($.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden").width(), opts.before.push(function(
            curr,
            next,
            opts,
            fwd
        ) {
            opts.rev && (fwd = !fwd), $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.cssBefore.left = fwd
                ? next.cycleW - 1
                : 1 - next.cycleW), (opts.animOut.left = fwd
                ? -curr.cycleW
                : curr.cycleW);
        }), (opts.cssFirst.left = 0), (opts.cssBefore.top = 0), (opts.animIn.left = 0), (opts.animOut.top = 0);
    }), ($.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
        $cont.css("overflow", "hidden"), opts.before.push(function(
            curr,
            next,
            opts,
            fwd
        ) {
            opts.rev && (fwd = !fwd), $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.cssBefore.top = fwd
                ? 1 - next.cycleH
                : next.cycleH - 1), (opts.animOut.top = fwd
                ? curr.cycleH
                : -curr.cycleH);
        }), (opts.cssFirst.top = 0), (opts.cssBefore.left = 0), (opts.animIn.top = 0), (opts.animOut.left = 0);
    }), ($.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements)
                .not(curr)
                .hide(), $.fn.cycle.commonReset(curr, next, opts, !1, !0), (opts.animIn.width = next.cycleW);
        }), (opts.cssBefore.left = 0), (opts.cssBefore.top = 0), (opts.cssBefore.width = 0), (opts.animIn.width =
            "show"), (opts.animOut.width = 0);
    }), ($.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements)
                .not(curr)
                .hide(), $.fn.cycle.commonReset(curr, next, opts, !0, !1), (opts.animIn.height = next.cycleH);
        }), (opts.cssBefore.left = 0), (opts.cssBefore.top = 0), (opts.cssBefore.height = 0), (opts.animIn.height =
            "show"), (opts.animOut.height = 0);
    }), ($.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
        var i,
            w = $cont.css("overflow", "visible").width();
        for (
            $slides.css({ left: 0, top: 0 }), opts.before.push(function(
                curr,
                next,
                opts
            ) {
                $.fn.cycle.commonReset(curr, next, opts, !0, !0, !0);
            }), opts.speedAdjusted ||
                (
                    (opts.speed = opts.speed / 2),
                    (opts.speedAdjusted = !0)
                ), opts.random = 0, opts.shuffle = opts.shuffle || {
                left: -w,
                top: 15
            }, opts.els = [], i = 0;
            i < $slides.length;
            i++
        )
            opts.els.push($slides[i]);
        for (i = 0; i < opts.currSlide; i++) opts.els.push(opts.els.shift());
        (opts.fxFn = function(curr, next, opts, cb, fwd) {
            opts.rev && (fwd = !fwd);
            var $el = $(fwd ? curr : next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
                for (
                    var hops = $.fn.cycle.hopsFromLast(opts, fwd), k = 0;
                    k < hops;
                    k++
                )
                    fwd
                        ? opts.els.push(opts.els.shift())
                        : opts.els.unshift(opts.els.pop());
                if (fwd)
                    for (var i = 0, len = opts.els.length; i < len; i++)
                        $(opts.els[i]).css("z-index", len - i + count);
                else {
                    var z = $(curr).css("z-index");
                    $el.css("z-index", parseInt(z, 10) + 1 + count);
                }
                $el.animate(
                    { left: 0, top: 0 },
                    opts.speedOut,
                    opts.easeOut,
                    function() {
                        $(fwd ? this : curr).hide(), cb && cb();
                    }
                );
            });
        }), $.extend(opts.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        });
    }), ($.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !1
            ), (opts.cssBefore.top = next.cycleH), (opts.animIn.height = next.cycleH), (opts.animOut.width = next.cycleW);
        }), (opts.cssFirst.top = 0), (opts.cssBefore.left = 0), (opts.cssBefore.height = 0), (opts.animIn.top = 0), (opts.animOut.height = 0);
    }), ($.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !1
            ), (opts.animIn.height = next.cycleH), (opts.animOut.top = curr.cycleH);
        }), (opts.cssFirst.top = 0), (opts.cssBefore.left = 0), (opts.cssBefore.top = 0), (opts.cssBefore.height = 0), (opts.animOut.height = 0);
    }), ($.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !0
            ), (opts.cssBefore.left = next.cycleW), (opts.animIn.width = next.cycleW);
        }), (opts.cssBefore.top = 0), (opts.cssBefore.width = 0), (opts.animIn.left = 0), (opts.animOut.width = 0);
    }), ($.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !0
            ), (opts.animIn.width = next.cycleW), (opts.animOut.left = curr.cycleW);
        }), $.extend(opts.cssBefore, {
            top: 0,
            left: 0,
            width: 0
        }), (opts.animIn.left = 0), (opts.animOut.width = 0);
    }), ($.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !1,
                !0
            ), (opts.cssBefore.top = next.cycleH / 2), (opts.cssBefore.left = next.cycleW / 2), $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH }), $.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH / 2, left: curr.cycleW / 2 });
        }), (opts.cssFirst.top = 0), (opts.cssFirst.left = 0), (opts.cssBefore.width = 0), (opts.cssBefore.height = 0);
    }), ($.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !1
            ), (opts.cssBefore.left = next.cycleW / 2), (opts.cssBefore.top = next.cycleH / 2), $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
        }), (opts.cssBefore.width = 0), (opts.cssBefore.height = 0), (opts.animOut.opacity = 0);
    }), ($.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.animIn.width = next.cycleW), (opts.animOut.left = curr.cycleW);
        }), (opts.cssBefore.left = w), (opts.cssBefore.top = 0), (opts.animIn.left = 0), (opts.animOut.left = w);
    }), ($.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.animIn.height = next.cycleH), (opts.animOut.top = curr.cycleH);
        }), (opts.cssBefore.top = h), (opts.cssBefore.left = 0), (opts.animIn.top = 0), (opts.animOut.top = h);
    }), ($.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height(),
            w = $cont.width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.animIn.height = next.cycleH), (opts.animOut.top = curr.cycleH);
        }), (opts.cssBefore.top = h), (opts.cssBefore.left = w), (opts.animIn.top = 0), (opts.animIn.left = 0), (opts.animOut.top = h), (opts.animOut.left = w);
    }), ($.fn.cycle.transitions.growX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !0
            ), (opts.cssBefore.left = this.cycleW / 2), (opts.animIn.left = 0), (opts.animIn.width = this.cycleW), (opts.animOut.left = 0);
        }), (opts.cssBefore.top = 0), (opts.cssBefore.width = 0);
    }), ($.fn.cycle.transitions.growY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !1
            ), (opts.cssBefore.top = this.cycleH / 2), (opts.animIn.top = 0), (opts.animIn.height = this.cycleH), (opts.animOut.top = 0);
        }), (opts.cssBefore.height = 0), (opts.cssBefore.left = 0);
    }), ($.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !1,
                !0,
                !0
            ), (opts.cssBefore.left = next.cycleW / 2), (opts.animIn.left = 0), (opts.animIn.width = this.cycleW), (opts.animOut.left = curr.cycleW / 2), (opts.animOut.width = 0);
        }), (opts.cssBefore.top = 0), (opts.cssBefore.width = 0);
    }), ($.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !1,
                !0
            ), (opts.cssBefore.top = next.cycleH / 2), (opts.animIn.top = 0), (opts.animIn.height = next.cycleH), (opts.animOut.top = curr.cycleH / 2), (opts.animOut.height = 0);
        }), (opts.cssBefore.height = 0), (opts.cssBefore.left = 0);
    }), ($.fn.cycle.transitions.cover = function($cont, $slides, opts) {
        var d = opts.direction || "left",
            w = $cont.css("overflow", "hidden").width(),
            h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts
            ), (opts.cssAfter.display = ""), "right" == d ? (opts.cssBefore.left = -w) : "up" == d ? (opts.cssBefore.top = h) : "down" == d ? (opts.cssBefore.top = -h) : (opts.cssBefore.left = w);
        }), (opts.animIn.left = 0), (opts.animIn.top = 0), (opts.cssBefore.top = 0), (opts.cssBefore.left = 0);
    }), ($.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
        var d = opts.direction || "left",
            w = $cont.css("overflow", "hidden").width(),
            h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !0,
                !0
            ), "right" == d ? (opts.animOut.left = w) : "up" == d ? (opts.animOut.top = -h) : "down" == d ? (opts.animOut.top = h) : (opts.animOut.left = -w);
        }), (opts.animIn.left = 0), (opts.animIn.top = 0), (opts.cssBefore.top = 0), (opts.cssBefore.left = 0);
    }), ($.fn.cycle.transitions.toss = function($cont, $slides, opts) {
        var w = $cont.css("overflow", "visible").width(),
            h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(
                curr,
                next,
                opts,
                !0,
                !0,
                !0
            ), opts.animOut.left || opts.animOut.top ? (opts.animOut.opacity = 0) : $.extend(opts.animOut, { left: 2 * w, top: -h / 2, opacity: 0 });
        }), (opts.cssBefore.left = 0), (opts.cssBefore.top = 0), (opts.animIn.left = 0);
    }), ($.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width(),
            h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip)
            if (/l2r/.test(opts.clip)) clip = "rect(0px 0px " + h + "px 0px)";
            else if (/r2l/.test(opts.clip))
                clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
            else if (/t2b/.test(opts.clip))
                clip = "rect(0px " + w + "px 0px 0px)";
            else if (/b2t/.test(opts.clip))
                clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
            else if (/zoom/.test(opts.clip)) {
                var top = parseInt(h / 2, 10),
                    left = parseInt(w / 2, 10);
                clip =
                    "rect(" +
                    top +
                    "px " +
                    left +
                    "px " +
                    top +
                    "px " +
                    left +
                    "px)";
            }
        opts.cssBefore.clip =
            opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";
        var d = opts.cssBefore.clip.match(/(\d+)/g),
            t = parseInt(d[0], 10),
            r = parseInt(d[1], 10),
            b = parseInt(d[2], 10),
            l = parseInt(d[3], 10);
        opts.before.push(function(curr, next, opts) {
            if (curr != next) {
                var $curr = $(curr),
                    $next = $(next);
                $.fn.cycle.commonReset(
                    curr,
                    next,
                    opts,
                    !0,
                    !0,
                    !1
                ), (opts.cssAfter.display = "block");
                var step = 1,
                    count = parseInt(opts.speedIn / 13, 10) - 1;
                !(function f() {
                    var tt = t ? t - parseInt(step * (t / count), 10) : 0,
                        ll = l ? l - parseInt(step * (l / count), 10) : 0,
                        bb =
                            b < h
                                ? b +
                                  parseInt(step * ((h - b) / count || 1), 10)
                                : h,
                        rr =
                            r < w
                                ? r +
                                  parseInt(step * ((w - r) / count || 1), 10)
                                : w;
                    $next.css({
                        clip:
                            "rect(" +
                            tt +
                            "px " +
                            rr +
                            "px " +
                            bb +
                            "px " +
                            ll +
                            "px)"
                    }), step++ <= count
                        ? setTimeout(f, 13)
                        : $curr.css("display", "none");
                })();
            }
        }), $.extend(opts.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        }), (opts.animIn = { left: 0 }), (opts.animOut = { left: 0 });
    });
})(jQuery), !function() {
    var a,
        AbstractChosen,
        Chosen,
        SelectParser,
        b,
        c = {}.hasOwnProperty,
        d = function(a, b) {
            function d() {
                this.constructor = a;
            }
            for (var e in b) c.call(b, e) && (a[e] = b[e]);
            return (d.prototype =
                b.prototype), (a.prototype = new d()), (a.__super__ =
                b.prototype), a;
        };
    (SelectParser = (function() {
        function SelectParser() {
            (this.options_index = 0), (this.parsed = []);
        }
        return (SelectParser.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase()
                ? this.add_group(a)
                : this.add_option(a);
        }), (SelectParser.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            for (
                b = this.parsed.length, this.parsed.push({
                    array_index: b,
                    group: !0,
                    label: this.escapeExpression(a.label),
                    children: 0,
                    disabled: a.disabled,
                    classes: a.className
                }), f = a.childNodes, g = [], d = 0, e = f.length;
                e > d;
                d++
            )
                (c = f[d]), g.push(this.add_option(c, b, a.disabled));
            return g;
        }), (SelectParser.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase()
                ? (
                      "" !== a.text
                          ? (
                                null != b && (this.parsed[b].children += 1),
                                this.parsed.push({
                                    array_index: this.parsed.length,
                                    options_index: this.options_index,
                                    value: a.value,
                                    text: a.text,
                                    html: a.innerHTML,
                                    selected: a.selected,
                                    disabled: c === !0 ? c : a.disabled,
                                    group_array_index: b,
                                    classes: a.className,
                                    style: a.style.cssText
                                })
                            )
                          : this.parsed.push({
                                array_index: this.parsed.length,
                                options_index: this.options_index,
                                empty: !0
                            }),
                      (this.options_index += 1)
                  )
                : void 0;
        }), (SelectParser.prototype.escapeExpression = function(a) {
            var b, c;
            return null == a || a === !1
                ? ""
                : /[\&\<\>\"\'\`]/.test(a)
                  ? (
                        (b = {
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        }),
                        (c = /&(?!\w+;)|[\<\>\"\'\`]/g),
                        a.replace(c, function(a) {
                            return b[a] || "&amp;";
                        })
                    )
                  : a;
        }), SelectParser;
    })()), (SelectParser.select_to_array = function(a) {
        var b, c, d, e, f;
        for (
            c = new SelectParser(), f = a.childNodes, d = 0, e = f.length;
            e > d;
            d++
        )
            (b = f[d]), c.add_node(b);
        return c.parsed;
    }), (AbstractChosen = (function() {
        function AbstractChosen(a, b) {
            (this.form_field = a), (this.options =
                null != b ? b : {}), AbstractChosen.browser_is_supported() &&
                (
                    (this.is_multiple = this.form_field.multiple),
                    this.set_default_text(),
                    this.set_default_values(),
                    this.setup(),
                    this.set_up_html(),
                    this.register_observers(),
                    this.on_ready()
                );
        }
        return (AbstractChosen.prototype.set_default_values = function() {
            var a = this;
            return (this.click_test_action = function(b) {
                return a.test_active_click(b);
            }), (this.activate_action = function(b) {
                return a.activate_field(b);
            }), (this.active_field = !1), (this.mouse_on_container = !1), (this.results_showing = !1), (this.result_highlighted = null), (this.allow_single_deselect =
                null != this.options.allow_single_deselect &&
                null != this.form_field.options[0] &&
                "" === this.form_field.options[0].text &&
                this.options
                    .allow_single_deselect), (this.disable_search_threshold =
                this.options.disable_search_threshold ||
                0), (this.disable_search =
                this.options.disable_search ||
                !1), (this.enable_split_word_search =
                null == this.options.enable_split_word_search ||
                this.options.enable_split_word_search), (this.group_search =
                null == this.options.group_search ||
                this.options.group_search), (this.search_contains =
                this.options.search_contains ||
                !1), (this.single_backstroke_delete =
                null == this.options.single_backstroke_delete ||
                this.options
                    .single_backstroke_delete), (this.max_selected_options =
                this.options.max_selected_options ||
                1 / 0), (this.inherit_select_classes =
                this.options.inherit_select_classes ||
                !1), (this.display_selected_options =
                null == this.options.display_selected_options ||
                this.options
                    .display_selected_options), (this.display_disabled_options =
                null == this.options.display_disabled_options ||
                this.options.display_disabled_options);
        }), (AbstractChosen.prototype.set_default_text = function() {
            return (this.default_text = this.form_field.getAttribute(
                "data-placeholder"
            )
                ? this.form_field.getAttribute("data-placeholder")
                : this.is_multiple
                  ? this.options.placeholder_text_multiple ||
                    this.options.placeholder_text ||
                    AbstractChosen.default_multiple_text
                  : this.options.placeholder_text_single ||
                    this.options.placeholder_text ||
                    AbstractChosen.default_single_text), (this.results_none_found =
                this.form_field.getAttribute("data-no_results_text") ||
                this.options.no_results_text ||
                AbstractChosen.default_no_result_text);
        }), (AbstractChosen.prototype.mouse_enter = function() {
            return (this.mouse_on_container = !0);
        }), (AbstractChosen.prototype.mouse_leave = function() {
            return (this.mouse_on_container = !1);
        }), (AbstractChosen.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field)
                    return setTimeout(function() {
                        return a.container_mousedown();
                    }, 50);
            } else if (!this.active_field) return this.activate_field();
        }), (AbstractChosen.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container
                ? void 0
                : (
                      (this.active_field = !1),
                      setTimeout(function() {
                          return a.blur_test();
                      }, 100)
                  );
        }), (AbstractChosen.prototype.results_option_build = function(a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)
                (c = f[d]), (b += c.group
                    ? this.result_add_group(c)
                    : this.result_add_option(c)), (null != a
                    ? a.first
                    : void 0) &&
                    (c.selected && this.is_multiple
                        ? this.choice_build(c)
                        : c.selected &&
                          !this.is_multiple &&
                          this.single_set_selected_text(c.text));
            return b;
        }), (AbstractChosen.prototype.result_add_option = function(a) {
            var b, c;
            return a.search_match && this.include_option_in_results(a)
                ? (
                      (b = []),
                      a.disabled ||
                          (a.selected && this.is_multiple) ||
                          b.push("active-result"),
                      !a.disabled ||
                          (a.selected && this.is_multiple) ||
                          b.push("disabled-result"),
                      a.selected && b.push("result-selected"),
                      null != a.group_array_index && b.push("group-option"),
                      "" !== a.classes && b.push(a.classes),
                      (c = document.createElement("li")),
                      (c.className = b.join(" ")),
                      (c.style.cssText = a.style),
                      c.setAttribute("data-option-array-index", a.array_index),
                      (c.innerHTML = a.search_text),
                      this.outerHTML(c)
                  )
                : "";
        }), (AbstractChosen.prototype.result_add_group = function(a) {
            var b, c;
            return (a.search_match || a.group_match) && a.active_options > 0
                ? (
                      (b = []),
                      b.push("group-result"),
                      a.classes && b.push(a.classes),
                      (c = document.createElement("li")),
                      (c.className = b.join(" ")),
                      (c.innerHTML = a.search_text),
                      this.outerHTML(c)
                  )
                : "";
        }), (AbstractChosen.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple ||
                this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this
                .results_showing
                ? this.winnow_results()
                : void 0;
        }), (AbstractChosen.prototype.reset_single_select_options = function() {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a.selected
                    ? e.push((a.selected = !1))
                    : e.push(void 0);
            return e;
        }), (AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing
                ? this.results_hide()
                : this.results_show();
        }), (AbstractChosen.prototype.results_search = function() {
            return this.results_showing
                ? this.winnow_results()
                : this.results_show();
        }), (AbstractChosen.prototype.winnow_results = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (
                this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(
                    /[-[\]{}()*+?.,\\^$|#\s]/g,
                    "\\$&"
                ), i = new RegExp(a, "i"), c = this.get_search_regex(
                    a
                ), l = this.results_data, j = 0, k = l.length;
                k > j;
                j++
            )
                (b =
                    l[
                        j
                    ]), (b.search_match = !1), (e = null), this.include_option_in_results(
                    b
                ) &&
                    (
                        b.group &&
                            ((b.group_match = !1), (b.active_options = 0)),
                        null != b.group_array_index &&
                            this.results_data[b.group_array_index] &&
                            (
                                (e = this.results_data[b.group_array_index]),
                                0 === e.active_options &&
                                    e.search_match &&
                                    (d += 1),
                                (e.active_options += 1)
                            ),
                        (!b.group || this.group_search) &&
                            (
                                (b.search_text = b.group ? b.label : b.text),
                                (b.search_match = this.search_string_match(
                                    b.search_text,
                                    c
                                )),
                                b.search_match && !b.group && (d += 1),
                                b.search_match
                                    ? (
                                          f.length &&
                                              (
                                                  (g = b.search_text.search(i)),
                                                  (h =
                                                      b.search_text.substr(
                                                          0,
                                                          g + f.length
                                                      ) +
                                                      "</em>" +
                                                      b.search_text.substr(
                                                          g + f.length
                                                      )),
                                                  (b.search_text =
                                                      h.substr(0, g) +
                                                      "<em>" +
                                                      h.substr(g))
                                              ),
                                          null != e && (e.group_match = !0)
                                      )
                                    : null != b.group_array_index &&
                                      this.results_data[b.group_array_index]
                                          .search_match &&
                                      (b.search_match = !0)
                            )
                    );
            return this.result_clear_highlight(), 1 > d && f.length
                ? (this.update_results_content(""), this.no_results(f))
                : (
                      this.update_results_content(this.results_option_build()),
                      this.winnow_results_set_highlight()
                  );
        }), (AbstractChosen.prototype.get_search_regex = function(a) {
            var b;
            return (b = this.search_contains ? "" : "^"), new RegExp(
                b + a,
                "i"
            );
        }), (AbstractChosen.prototype.search_string_match = function(a, b) {
            var c, d, e, f;
            if (b.test(a)) return !0;
            if (
                this.enable_split_word_search &&
                (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) &&
                ((d = a.replace(/\[|\]/g, "").split(" ")), d.length)
            )
                for (e = 0, f = d.length; f > e; e++)
                    if (((c = d[e]), b.test(c))) return !0;
        }), (AbstractChosen.prototype.choices_count = function() {
            var a, b, c, d;
            if (null != this.selected_option_count)
                return this.selected_option_count;
            for (
                this.selected_option_count = 0, d = this.form_field
                    .options, b = 0, c = d.length;
                c > b;
                b++
            )
                (a = d[b]), a.selected && (this.selected_option_count += 1);
            return this.selected_option_count;
        }), (AbstractChosen.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled
                ? void 0
                : this.results_show();
        }), (AbstractChosen.prototype.keyup_checker = function(a) {
            var b, c;
            switch ((
                (b = null != (c = a.which) ? c : a.keyCode),
                this.search_field_scale(),
                b
            )) {
                case 8:
                    if (
                        this.is_multiple &&
                        this.backstroke_length < 1 &&
                        this.choices_count() > 0
                    )
                        return this.keydown_backstroke();
                    if (!this.pending_backstroke)
                        return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if ((a.preventDefault(), this.results_showing))
                        return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        }), (AbstractChosen.prototype.clipboard_event_checker = function() {
            var a = this;
            return setTimeout(function() {
                return a.results_search();
            }, 50);
        }), (AbstractChosen.prototype.container_width = function() {
            return null != this.options.width
                ? this.options.width
                : "" + this.form_field.offsetWidth + "px";
        }), (AbstractChosen.prototype.include_option_in_results = function(a) {
            return (
                !(
                    this.is_multiple &&
                    !this.display_selected_options &&
                    a.selected
                ) &&
                (!(!this.display_disabled_options && a.disabled) && !a.empty)
            );
        }), (AbstractChosen.prototype.search_results_touchstart = function(a) {
            return (this.touch_started = !0), this.search_results_mouseover(a);
        }), (AbstractChosen.prototype.search_results_touchmove = function(a) {
            return (this.touch_started = !1), this.search_results_mouseout(a);
        }), (AbstractChosen.prototype.search_results_touchend = function(a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0;
        }), (AbstractChosen.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML
                ? a.outerHTML
                : (
                      (b = document.createElement("div")),
                      b.appendChild(a),
                      b.innerHTML
                  );
        }), (AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName
                ? document.documentMode >= 8
                : !/iP(od|hone)/i.test(window.navigator.userAgent) &&
                  (!/Android/i.test(window.navigator.userAgent) ||
                      !/Mobile/i.test(window.navigator.userAgent));
        }), (AbstractChosen.default_multiple_text =
            "Select Some Options"), (AbstractChosen.default_single_text =
            "Select an Option"), (AbstractChosen.default_no_result_text =
            "No results match"), AbstractChosen;
    })()), (a = jQuery), a.fn.extend({
        chosen: function(b) {
            return AbstractChosen.browser_is_supported()
                ? this.each(function() {
                      var c, d;
                      (c = a(
                          this
                      )), (d = c.data("chosen")), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b));
                  })
                : this;
        }
    }), (Chosen = (function(c) {
        function Chosen() {
            return (b = Chosen.__super__.constructor.apply(this, arguments));
        }
        return d(Chosen, c), (Chosen.prototype.setup = function() {
            return (this.form_field_jq = a(
                this.form_field
            )), (this.current_selectedIndex = this.form_field.selectedIndex), (this.is_rtl = this.form_field_jq.hasClass(
                "chosen-rtl"
            ));
        }), (Chosen.prototype.set_up_html = function() {
            var b, c;
            return (b = ["chosen-container"]), b.push(
                "chosen-container-" + (this.is_multiple ? "multi" : "single")
            ), this.inherit_select_classes &&
                this.form_field.className &&
                b.push(this.form_field.className), this.is_rtl &&
                b.push("chosen-rtl"), (c = {
                class: b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }), this.form_field.id.length &&
                (c.id =
                    this.form_field.id.replace(/[^\w]/g, "_") +
                    "_chosen"), (this.container = a("<div />", c)), this
                .is_multiple
                ? this.container.html(
                      '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' +
                          this.default_text +
                          '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'
                  )
                : this.container.html(
                      '<a class="chosen-single chosen-default" tabindex="-1"><span>' +
                          this.default_text +
                          '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'
                  ), this.form_field_jq
                .hide()
                .after(this.container), (this.dropdown = this.container
                .find("div.chosen-drop")
                .first()), (this.search_field = this.container
                .find("input")
                .first()), (this.search_results = this.container
                .find("ul.chosen-results")
                .first()), this.search_field_scale(), (this.search_no_results = this.container
                .find("li.no-results")
                .first()), this.is_multiple
                ? (
                      (this.search_choices = this.container
                          .find("ul.chosen-choices")
                          .first()),
                      (this.search_container = this.container
                          .find("li.search-field")
                          .first())
                  )
                : (
                      (this.search_container = this.container
                          .find("div.chosen-search")
                          .first()),
                      (this.selected_item = this.container
                          .find(".chosen-single")
                          .first())
                  ), this.results_build(), this.set_tab_index(), this.set_label_behavior();
        }), (Chosen.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", { chosen: this });
        }), (Chosen.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("touchstart.chosen", function(b) {
                a.container_mousedown(b);
            }), this.container.bind("touchend.chosen", function(b) {
                a.container_mouseup(b);
            }), this.container.bind("mousedown.chosen", function(b) {
                a.container_mousedown(b);
            }), this.container.bind("mouseup.chosen", function(b) {
                a.container_mouseup(b);
            }), this.container.bind("mouseenter.chosen", function(b) {
                a.mouse_enter(b);
            }), this.container.bind("mouseleave.chosen", function(b) {
                a.mouse_leave(b);
            }), this.search_results.bind("mouseup.chosen", function(b) {
                a.search_results_mouseup(b);
            }), this.search_results.bind("mouseover.chosen", function(b) {
                a.search_results_mouseover(b);
            }), this.search_results.bind("mouseout.chosen", function(b) {
                a.search_results_mouseout(b);
            }), this.search_results.bind(
                "mousewheel.chosen DOMMouseScroll.chosen",
                function(b) {
                    a.search_results_mousewheel(b);
                }
            ), this.search_results.bind("touchstart.chosen", function(b) {
                a.search_results_touchstart(b);
            }), this.search_results.bind("touchmove.chosen", function(b) {
                a.search_results_touchmove(b);
            }), this.search_results.bind("touchend.chosen", function(b) {
                a.search_results_touchend(b);
            }), this.form_field_jq.bind("chosen:updated.chosen", function(b) {
                a.results_update_field(b);
            }), this.form_field_jq.bind("chosen:activate.chosen", function(b) {
                a.activate_field(b);
            }), this.form_field_jq.bind("chosen:open.chosen", function(b) {
                a.container_mousedown(b);
            }), this.form_field_jq.bind("chosen:close.chosen", function(b) {
                a.input_blur(b);
            }), this.search_field.bind("blur.chosen", function(b) {
                a.input_blur(b);
            }), this.search_field.bind("keyup.chosen", function(b) {
                a.keyup_checker(b);
            }), this.search_field.bind("keydown.chosen", function(b) {
                a.keydown_checker(b);
            }), this.search_field.bind("focus.chosen", function(b) {
                a.input_focus(b);
            }), this.search_field.bind("cut.chosen", function(b) {
                a.clipboard_event_checker(b);
            }), this.search_field.bind("paste.chosen", function(b) {
                a.clipboard_event_checker(b);
            }), this.is_multiple
                ? this.search_choices.bind("click.chosen", function(b) {
                      a.choices_click(b);
                  })
                : this.container.bind("click.chosen", function(a) {
                      a.preventDefault();
                  });
        }), (Chosen.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind(
                "click.chosen",
                this.click_test_action
            ), this.search_field[0].tabIndex &&
                (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData(
                "chosen"
            ), this.form_field_jq.show();
        }), (Chosen.prototype.search_field_disabled = function() {
            return (this.is_disabled = this.form_field_jq[0].disabled), this
                .is_disabled
                ? (
                      this.container.addClass("chosen-disabled"),
                      (this.search_field[0].disabled = !0),
                      this.is_multiple ||
                          this.selected_item.unbind(
                              "focus.chosen",
                              this.activate_action
                          ),
                      this.close_field()
                  )
                : (
                      this.container.removeClass("chosen-disabled"),
                      (this.search_field[0].disabled = !1),
                      this.is_multiple
                          ? void 0
                          : this.selected_item.bind(
                                "focus.chosen",
                                this.activate_action
                            )
                  );
        }), (Chosen.prototype.container_mousedown = function(b) {
            return this.is_disabled ||
            (
                b &&
                    "mousedown" === b.type &&
                    !this.results_showing &&
                    b.preventDefault(),
                null != b && a(b.target).hasClass("search-choice-close")
            )
                ? void 0
                : (
                      this.active_field
                          ? this.is_multiple ||
                            !b ||
                            (a(b.target)[0] !== this.selected_item[0] &&
                                !a(b.target).parents("a.chosen-single")
                                    .length) ||
                            (b.preventDefault(), this.results_toggle())
                          : (
                                this.is_multiple && this.search_field.val(""),
                                a(this.container[0].ownerDocument).bind(
                                    "click.chosen",
                                    this.click_test_action
                                ),
                                this.results_show()
                            ),
                      this.activate_field()
                  );
        }), (Chosen.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled
                ? void 0
                : this.results_reset(a);
        }), (Chosen.prototype.search_results_mousewheel = function(a) {
            var b;
            return a.originalEvent &&
                (b =
                    a.originalEvent.deltaY ||
                    -a.originalEvent.wheelDelta ||
                    a.originalEvent.detail), null != b
                ? (
                      a.preventDefault(),
                      "DOMMouseScroll" === a.type && (b *= 40),
                      this.search_results.scrollTop(
                          b + this.search_results.scrollTop()
                      )
                  )
                : void 0;
        }), (Chosen.prototype.blur_test = function() {
            return !this.active_field &&
            this.container.hasClass("chosen-container-active")
                ? this.close_field()
                : void 0;
        }), (Chosen.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind(
                "click.chosen",
                this.click_test_action
            ), (this.active_field = !1), this.results_hide(), this.container.removeClass(
                "chosen-container-active"
            ), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale();
        }), (Chosen.prototype.activate_field = function() {
            return this.container.addClass(
                "chosen-container-active"
            ), (this.active_field = !0), this.search_field.val(
                this.search_field.val()
            ), this.search_field.focus();
        }), (Chosen.prototype.test_active_click = function(b) {
            var c;
            return (c = a(b.target).closest(".chosen-container")), c.length &&
            this.container[0] === c[0]
                ? (this.active_field = !0)
                : this.close_field();
        }), (Chosen.prototype.results_build = function() {
            return (this.parsing = !0), (this.selected_option_count = null), (this.results_data = SelectParser.select_to_array(
                this.form_field
            )), this.is_multiple
                ? this.search_choices.find("li.search-choice").remove()
                : this.is_multiple ||
                  (
                      this.single_set_selected_text(),
                      this.disable_search ||
                      this.form_field.options.length <=
                          this.disable_search_threshold
                          ? (
                                (this.search_field[0].readOnly = !0),
                                this.container.addClass(
                                    "chosen-container-single-nosearch"
                                )
                            )
                          : (
                                (this.search_field[0].readOnly = !1),
                                this.container.removeClass(
                                    "chosen-container-single-nosearch"
                                )
                            )
                  ), this.update_results_content(
                this.results_option_build({ first: !0 })
            ), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), (this.parsing = !1);
        }), (Chosen.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                if (
                    (
                        this.result_clear_highlight(),
                        (this.result_highlight = a),
                        this.result_highlight.addClass("highlighted"),
                        (d = parseInt(
                            this.search_results.css("maxHeight"),
                            10
                        )),
                        (f = this.search_results.scrollTop()),
                        (e = d + f),
                        (c =
                            this.result_highlight.position().top +
                            this.search_results.scrollTop()),
                        (b = c + this.result_highlight.outerHeight()),
                        b >= e
                    )
                )
                    return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c) return this.search_results.scrollTop(c);
            }
        }), (Chosen.prototype.result_clear_highlight = function() {
            return this.result_highlight &&
                this.result_highlight.removeClass(
                    "highlighted"
                ), (this.result_highlight = null);
        }), (Chosen.prototype.results_show = function() {
            return this.is_multiple &&
            this.max_selected_options <= this.choices_count()
                ? (
                      this.form_field_jq.trigger("chosen:maxselected", {
                          chosen: this
                      }),
                      !1
                  )
                : (
                      this.container.addClass("chosen-with-drop"),
                      (this.results_showing = !0),
                      this.search_field.focus(),
                      this.search_field.val(this.search_field.val()),
                      this.winnow_results(),
                      this.form_field_jq.trigger("chosen:showing_dropdown", {
                          chosen: this
                      })
                  );
        }), (Chosen.prototype.update_results_content = function(a) {
            return this.search_results.html(a);
        }), (Chosen.prototype.results_hide = function() {
            return this.results_showing &&
                (
                    this.result_clear_highlight(),
                    this.container.removeClass("chosen-with-drop"),
                    this.form_field_jq.trigger("chosen:hiding_dropdown", {
                        chosen: this
                    })
                ), (this.results_showing = !1);
        }), (Chosen.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex
                ? (
                      (a = this.form_field.tabIndex),
                      (this.form_field.tabIndex = -1),
                      (this.search_field[0].tabIndex = a)
                  )
                : void 0;
        }), (Chosen.prototype.set_label_behavior = function() {
            var b = this;
            return (this.form_field_label = this.form_field_jq.parents(
                "label"
            )), !this.form_field_label.length &&
                this.form_field.id.length &&
                (this.form_field_label = a(
                    "label[for='" + this.form_field.id + "']"
                )), this.form_field_label.length > 0
                ? this.form_field_label.bind("click.chosen", function(a) {
                      return b.is_multiple
                          ? b.container_mousedown(a)
                          : b.activate_field();
                  })
                : void 0;
        }), (Chosen.prototype.show_search_field_default = function() {
            return this.is_multiple &&
            this.choices_count() < 1 &&
            !this.active_field
                ? (
                      this.search_field.val(this.default_text),
                      this.search_field.addClass("default")
                  )
                : (
                      this.search_field.val(""),
                      this.search_field.removeClass("default")
                  );
        }), (Chosen.prototype.search_results_mouseup = function(b) {
            var c;
            return (c = a(b.target).hasClass("active-result")
                ? a(b.target)
                : a(b.target).parents(".active-result").first()), c.length
                ? (
                      (this.result_highlight = c),
                      this.result_select(b),
                      this.search_field.focus()
                  )
                : void 0;
        }), (Chosen.prototype.search_results_mouseover = function(b) {
            var c;
            return (c = a(b.target).hasClass("active-result")
                ? a(b.target)
                : a(b.target).parents(".active-result").first()), c
                ? this.result_do_highlight(c)
                : void 0;
        }), (Chosen.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result")
                ? this.result_clear_highlight()
                : void 0;
        }), (Chosen.prototype.choice_build = function(b) {
            var c,
                d,
                e = this;
            return (c = a("<li />", { class: "search-choice" }).html(
                "<span>" + b.html + "</span>"
            )), b.disabled
                ? c.addClass("search-choice-disabled")
                : (
                      (d = a("<a />", {
                          class: "search-choice-close",
                          "data-option-array-index": b.array_index
                      })),
                      d.bind("click.chosen", function(a) {
                          return e.choice_destroy_link_click(a);
                      }),
                      c.append(d)
                  ), this.search_container.before(c);
        }), (Chosen.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled
                ? void 0
                : this.choice_destroy(a(b.target));
        }), (Chosen.prototype.choice_destroy = function(a) {
            return this.result_deselect(
                a[0].getAttribute("data-option-array-index")
            )
                ? (
                      this.show_search_field_default(),
                      this.is_multiple &&
                          this.choices_count() > 0 &&
                          this.search_field.val().length < 1 &&
                          this.results_hide(),
                      a.parents("li").first().remove(),
                      this.search_field_scale()
                  )
                : void 0;
        }), (Chosen.prototype.results_reset = function() {
            return this.reset_single_select_options(), (this.form_field.options[0].selected = !0), this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger(
                "change"
            ), this.active_field ? this.results_hide() : void 0;
        }), (Chosen.prototype.results_reset_cleanup = function() {
            return (this.current_selectedIndex = this.form_field.selectedIndex), this.selected_item
                .find("abbr")
                .remove();
        }), (Chosen.prototype.result_select = function(a) {
            var b, c;
            return this.result_highlight
                ? (
                      (b = this.result_highlight),
                      this.result_clear_highlight(),
                      this.is_multiple &&
                      this.max_selected_options <= this.choices_count()
                          ? (
                                this.form_field_jq.trigger(
                                    "chosen:maxselected",
                                    { chosen: this }
                                ),
                                !1
                            )
                          : (
                                this.is_multiple
                                    ? b.removeClass("active-result")
                                    : this.reset_single_select_options(),
                                (c = this.results_data[
                                    b[0].getAttribute("data-option-array-index")
                                ]),
                                (c.selected = !0),
                                (this.form_field.options[
                                    c.options_index
                                ].selected = !0),
                                (this.selected_option_count = null),
                                this.is_multiple
                                    ? this.choice_build(c)
                                    : this.single_set_selected_text(c.text),
                                ((a.metaKey || a.ctrlKey) &&
                                    this.is_multiple) ||
                                    this.results_hide(),
                                this.search_field.val(""),
                                (this.is_multiple ||
                                    this.form_field.selectedIndex !==
                                        this.current_selectedIndex) &&
                                    this.form_field_jq.trigger("change", {
                                        selected: this.form_field.options[
                                            c.options_index
                                        ].value
                                    }),
                                (this.current_selectedIndex = this.form_field.selectedIndex),
                                this.search_field_scale()
                            )
                  )
                : void 0;
        }), (Chosen.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text
                ? this.selected_item.addClass("chosen-default")
                : (
                      this.single_deselect_control_build(),
                      this.selected_item.removeClass("chosen-default")
                  ), this.selected_item.find("span").text(a);
        }), (Chosen.prototype.result_deselect = function(a) {
            var b;
            return (b = this.results_data[a]), !this.form_field.options[
                b.options_index
            ].disabled &&
                (
                    (b.selected = !1),
                    (this.form_field.options[b.options_index].selected = !1),
                    (this.selected_option_count = null),
                    this.result_clear_highlight(),
                    this.results_showing && this.winnow_results(),
                    this.form_field_jq.trigger("change", {
                        deselected: this.form_field.options[b.options_index]
                            .value
                    }),
                    this.search_field_scale(),
                    !0
                );
        }), (Chosen.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect
                ? (
                      this.selected_item.find("abbr").length ||
                          this.selected_item
                              .find("span")
                              .first()
                              .after(
                                  '<abbr class="search-choice-close"></abbr>'
                              ),
                      this.selected_item.addClass("chosen-single-with-deselect")
                  )
                : void 0;
        }), (Chosen.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text
                ? ""
                : a("<div/>").text(a.trim(this.search_field.val())).html();
        }), (Chosen.prototype.winnow_results_set_highlight = function() {
            var a, b;
            return (b = this.is_multiple
                ? []
                : this.search_results.find(
                      ".result-selected.active-result"
                  )), (a = b.length
                ? b.first()
                : this.search_results.find(".active-result").first()), null != a
                ? this.result_do_highlight(a)
                : void 0;
        }), (Chosen.prototype.no_results = function(b) {
            var c;
            return (c = a(
                '<li class="no-results">' +
                    this.results_none_found +
                    ' "<span></span>"</li>'
            )), c.find("span").first().html(b), this.search_results.append(
                c
            ), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            });
        }), (Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        }), (Chosen.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight
                ? (a = this.result_highlight
                      .nextAll("li.active-result")
                      .first())
                  ? this.result_do_highlight(a)
                  : void 0
                : this.results_show();
        }), (Chosen.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple
                ? this.result_highlight
                  ? (
                        (a = this.result_highlight.prevAll("li.active-result")),
                        a.length
                            ? this.result_do_highlight(a.first())
                            : (
                                  this.choices_count() > 0 &&
                                      this.results_hide(),
                                  this.result_clear_highlight()
                              )
                    )
                  : void 0
                : this.results_show();
        }), (Chosen.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke
                ? (
                      this.choice_destroy(
                          this.pending_backstroke.find("a").first()
                      ),
                      this.clear_backstroke()
                  )
                : (
                      (a = this.search_container
                          .siblings("li.search-choice")
                          .last()),
                      a.length && !a.hasClass("search-choice-disabled")
                          ? (
                                (this.pending_backstroke = a),
                                this.single_backstroke_delete
                                    ? this.keydown_backstroke()
                                    : this.pending_backstroke.addClass(
                                          "search-choice-focus"
                                      )
                            )
                          : void 0
                  );
        }), (Chosen.prototype.clear_backstroke = function() {
            return this.pending_backstroke &&
                this.pending_backstroke.removeClass(
                    "search-choice-focus"
                ), (this.pending_backstroke = null);
        }), (Chosen.prototype.keydown_checker = function(a) {
            var b, c;
            switch ((
                (b = null != (c = a.which) ? c : a.keyCode),
                this.search_field_scale(),
                8 !== b && this.pending_backstroke && this.clear_backstroke(),
                b
            )) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing &&
                        !this.is_multiple &&
                        this.result_select(a), (this.mouse_on_container = !1);
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow();
            }
        }), (Chosen.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (
                    d = 0, h = 0, f =
                        "position:absolute; left: -1000px; top: -1000px; display:none;", g = [
                        "font-size",
                        "font-style",
                        "font-weight",
                        "font-family",
                        "line-height",
                        "text-transform",
                        "letter-spacing"
                    ], i = 0, j = g.length;
                    j > i;
                    i++
                )
                    (e = g[i]), (f += e + ":" + this.search_field.css(e) + ";");
                return (b = a("<div />", { style: f })), b.text(
                    this.search_field.val()
                ), a("body").append(b), (h =
                    b.width() +
                    25), b.remove(), (c = this.container.outerWidth()), h >
                    c - 10 && (h = c - 10), this.search_field.css({
                    width: h + "px"
                });
            }
        }), Chosen;
    })(AbstractChosen));
}.call(this), (function($) {
    $(document).ready(function() {
        var doc = document.documentElement;
        doc.setAttribute("data-useragent", navigator.userAgent), $.ajax({
            type: "POST",
            data: { current_url: window.location.href },
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            url: "https://login.opendns.com/ajax/userinfo.php",
            success: function(userinfo) {
                userinfo.loggedin
                    ? $("li.logout").removeClass("hidden")
                    : $("li.login").removeClass("hidden");
            }
        }), $(".back-to-top").on("click", function(e) {
            $("html, body").animate({ scrollTop: 0 }, 200), e.preventDefault();
        });
        var s_search_form_html =
            '<form id="header-search">\
                <input type="text" name="cludo" id="header-search__input" class="text" placeholder="Search" aria-label="search" >\
                <button type="submit" class="submit screen-reader-text" tabindex="-1">\
                    <i class="fa fa-search" aria-hidden="true"></i><span class="screen-reader-text">Search</span>\
                </button>\
            </form>\
            <button id="header-search-close" class="header-search-close" aria-label="close search box"></button>'
        if (
            (
                $("header .search-link a")
                    .qtip({
                        id: "search-box",
                        prerender: !0,
                        content: { text: s_search_form_html },
                        show: { event: "click", effect: !1, solo: !0 },
                        hide: { event: "click unfocus", effect: !1 },
                        style: { classes: "search-box" },
                        position: {
                            container: $("li#search-link"),
                            adjust: { x: -250, y: 10 }
                        },
                        events: {
                        	visible: function() {
                    			$( '#header-search__input' ).focus();
                    			$( '#header-search-close' ).on( 'click', function() {
                    				$( '#qtip-search-box' ).hide();
                    				$( '#search-link > a' ).focus();
                    			})
                        	}
                        }
                    })
                    .on("click", function() {
                        $('#header-search').submit(function(e) {
                            window.location = '/search/#?cludoquery=' + $('#header-search__input').val();
                            e.preventDefault();
                        });
                        return !1;
                    }),
                $(".watch-video").on("click", function() {
                    if (!Response.band(0, 950)) {
                        var video_url = $(this).attr("href");
                        return $.fancybox({
                            maxwidth: 800,
                            maxheight: 600,
                            href: video_url.replace("watch?v=", "v/"),
                            type: "swf",
                            swf: { wmode: "transparent", allfullscreen: !0 }
                        }), !1;
                    }
                }),
                (function() {
                    var $anchors = $("li.in-page a, a.in-page");
                    if ($anchors.length) {
                        var wpOffset = $("#wpadminbar").length ? 32 : 0,
                            move = function($el) {
                                $el.data("target")
                                    ? $("html, body").animate({
                                          scrollTop:
                                              $($el.data("target")).offset()
                                                  .top -
                                              wpOffset -
                                              130
                                      })
                                    : $el.attr("href").match(/^#.+/) &&
                                      $("html, body").animate({
                                          scrollTop:
                                              $($el.attr("href")).offset().top -
                                              wpOffset -
                                              130
                                      });
                            };
                        $anchors.on("click", function(e) {
                            e.preventDefault(), move($(this));
                        });
                    }
                })(),
                (function() {
                    if ($("body").hasClass("about")) {
                        var hash = window.location.hash.replace("#", "");
                        var wpOffset = $("#wpadminbar").length ? 32 : 0;
                    }
                })(),
                (function() {
                    if ($("body").hasClass("threat-enforcement")) {
                        var hash = window.location.hash.replace("#", ""),
                            wpOffset = $("#wpadminbar").length ? 32 : 0,
                            offset = Response.band(0, 950)
                                ? $(".video-section-wrapper").offset().top + 100
                                : $(".video-section-wrapper").offset().top -
                                  wpOffset -
                                  125;
                        "umbrellavideo" === hash &&
                            $("html, body").animate({ scrollTop: offset });
                    }
                })(),
                (function() {
                    if ($("body").hasClass("packages-and-pricing")) {
                        var hash = window.location.hash.replace("#", ""),
                            wpOffset = $("#wpadminbar").length ? 32 : 0,
                            offset = Response.band(0, 950)
                                ? $(".options").offset().top + 85
                                : $(".options").offset().top - wpOffset - 400;
                        "prosumer" === hash &&
                            $("html, body").animate({ scrollTop: offset });
                    }
                })(),
                (function() {
                    if ($("body").hasClass("home-internet-security")) {
                        var hash = window.location.hash.replace("#", ""),
                            wpOffset = $("#wpadminbar").length ? 32 : 0;
                        "enhanced-dns" === hash &&
                            $("html, body").animate({
                                scrollTop:
                                    $(
                                        ".personal-security-enhanced-dns"
                                    ).offset().top -
                                    wpOffset -
                                    100
                            }), "parental-controls" === hash &&
                            $("html, body").animate({
                                scrollTop:
                                    $(".parental-controls").offset().top -
                                    wpOffset -
                                    150
                            }), "benefit-matrix" === hash &&
                            $("html, body").animate({
                                scrollTop:
                                    $(".personal-options").offset().top -
                                    wpOffset -
                                    100
                            });
                    }
                })(),
                $(".testimonials-slider, .endorsements-slider").length
            )
        ) {
            $(
                ".testimonials-slider .grid, .endorsements-container .grid"
            ).append(
                $(".testimonials-slider, .endorsements-slider")
                    .clone()
                    .attr({ id: "mobile-endorsements" })
            );
            var randomEndorsement = Math.floor(
                    Math.random() *
                        $("#mobile-endorsements .endorsement").length
                ),
                showEndorsement = function() {
                    $(
                        "#mobile-endorsements .endorsement:eq(" +
                            randomEndorsement +
                            ")"
                    )
                        .css({ opacity: 1 })
                        .show();
                };
            Response.band(0, 950) &&
                showEndorsement(), Response.crossover(function() {
                $(
                    "#mobile-endorsements .endorsement"
                ).hide(), showEndorsement();
            }), $(".logo-links .logo").on("click", function() {
                return $(this).hasClass("active") ||
                    (
                        $(".logo-links .logo").removeClass("active"),
                        $(this).addClass("active"),
                        (that = this),
                        $(
                            ".testimonials .active, .endorsements .active"
                        ).fadeTo(100, 0, function() {
                            $(this).removeClass(
                                "active"
                            ), $($(that).data("id")).addClass("active").fadeTo(100, 1);
                        })
                    ), $(".testimonials .active #youtube-iframe").attr("src") &&
                    (
                        $(".testimonials .active #youtube-iframe").attr(
                            "src",
                            ""
                        ),
                        $(".testimonials .active .video-section-overlay").show()
                    ), !1;
            });
        }
        $(".video-link").length &&
            $(".video-link").on("click", function() {
                var src =
                    $("#youtube-iframe").attr("src") +
                    (~$("#youtube-iframe").attr("src").indexOf("?")
                        ? "&autoplay=1"
                        : "?autoplay=1") +
                    "&rel=0";
                Response.band(0, 950)
                    ? (window.location.href = src)
                    : $.fancybox({
                          maxwidth: 800,
                          maxheight: 600,
                          type: "iframe",
                          href: src
                      });
            }), $(".video-section-overlay").length &&
            $(".video-section #youtube-iframe").attr("src", ""), $(
            ".video-section"
        ).length &&
            (
                $(".video-section").each(function() {
                    var $trigger = $(this).find(".video-section-overlay"),
                        $iframe = $trigger.siblings("iframe"),
                        $video = $(this).find("#hosted-video video"),
                        $container = $trigger.parents(".video-section");
                    $trigger.on("click", function() {
                        if ($container.hasClass("youtube")) {
                            var src = $iframe.data("src")
                                    ? $iframe.data("src")
                                    : $iframe.attr("src"),
                                srcAuto =
                                    src +
                                    (~src.indexOf("?") ? "&" : "?") +
                                    "autoplay=1";
                            if (Response.band(0, 950))
                                return (window.location.href = srcAuto), !0;
                            !$container.hasClass("cover") ||
                            $trigger.hasClass("lightbox") ||
                            $container.hasClass("sidebar")
                                ? $trigger.hasClass("lightbox") ||
                                  $container.hasClass("sidebar")
                                  ? $.fancybox({
                                        maxwidth: 800,
                                        maxheight: 600,
                                        type: "iframe",
                                        href: srcAuto
                                    })
                                  : $iframe.attr({ src: srcAuto })
                                : (
                                      $iframe.attr({ src: srcAuto }),
                                      setTimeout(function() {
                                          $trigger.hide();
                                      }, 300)
                                  );
                        } else
                            $container.hasClass("hosted") &&
                                (
                                    $video.attr("controls", !0),
                                    $video.get(0).play(),
                                    $trigger.hide()
                                );
                    });
                }),
                Response.crossover(function() {
                    $(".video-section").each(function() {
                        var $trigger = $(this).find(".video-section-overlay"),
                            $iframe = $trigger.siblings("iframe"),
                            $container = (
                                $(this).find("#hosted-video video"),
                                $trigger.parents(".video-section")
                            );
                        Response.band(0, 950) &&
                            !$container.hasClass("homepage") &&
                            $trigger.not(":visible") &&
                            ($iframe.attr("src", ""), $trigger.show());
                    });
                })
            ), $(".video-trigger").length &&
            $(".video-trigger").on("click", function() {
                var $trigger = $(this),
                    $iframe = $trigger.siblings("iframe");
                if ($iframe.attr("src")) {
                    var src = $iframe.attr("src") + "&autoplay=1";
                    if (!Response.band(0, 950))
                        return $iframe.attr("src", src), $trigger.remove(), !1;
                    window.location.href = src;
                }
            }), (function() {
            if (
                $("body").hasClass("about-section") ||
                $("body").hasClass("msp-section") ||
                $("body").hasClass("business-section") ||
                $("body").hasClass("personal-section")
            ) {
                var links = {
                        login: {
                            el: $(".header-persona-top .login"),
                            text: "Login"
                        },
                        dashboard: {
                            el: $(".header-persona-top .logout"),
                            text: "Dashboard"
                        },
                        support: {
                            el: $(".header-persona-top .support-link"),
                            text: "Support"
                        }
                    },
                    changeZIndex = function() {
                        $(this).css({ zIndex: "1000003" });
                    };
                for (var key in links) {
                    var link = links[key];
                    link.el.qtip({
                        content: {
                            text:
                                '<div class="arrow"><i class="fa fa-caret-up"></i></div><p>' +
                                link.text +
                                "</p>"
                        },
                        style: { classes: "dark-qtip secondary-nav", def: !1 },
                        position: {
                            my: "top center",
                            at: "bottom center",
                            adjust: { x: -2, y: 10 }
                        },
                        events: { visible: changeZIndex },
                        hide: { delay: 200 }
                    });
                }
            }
        })();
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        if ($("#scrollingDiv").length) {
            var stickySidebar = function() {
                var adminOffset = $("#wpadminbar").length ? 32 : 0,
                    stickyTop =
                        $(".right-column").offset().top - adminOffset - 150,
                    windowTop = $(window).scrollTop(),
                    stopperTop = $(".suggested-links").offset().top,
                    stopPoint =
                        stopperTop - $("#scrollingDiv").outerHeight() - 300;
                if (stickyTop < windowTop) {
                    if (
                        (
                            $("#scrollingDiv").css({
                                position: "fixed",
                                top: 150,
                                width: $("#scrollingDiv").outerWidth() + "px"
                            }),
                            stopPoint < windowTop
                        )
                    ) {
                        var diff = stopPoint - windowTop + 100;
                        $("#scrollingDiv").css({
                            position: "fixed",
                            top: diff
                        });
                    }
                } else $("#scrollingDiv").css("position", "static");
            };
            Response.band(0, 950) ||
                $(window).bind(
                    "scroll",
                    stickySidebar
                ), Response.crossover(function() {
                Response.band(0, 950)
                    ? $(window).unbind("scroll", stickySidebar)
                    : $(window).bind("scroll", stickySidebar);
            });
        }
        if ($(".about").length) {
            var customMapType = new google.maps.StyledMapType(
                [
                    {
                        featureType: "road",
                        elementType: "geometry.fill",
                        stylers: [{ visibility: "off" }]
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [{ visibility: "off" }]
                    }
                ],
                { name: "OpenDNS" }
            );
            $.each($(".location"), function(i) {
                var lat = $(this).find(".latitude .value-title").attr("title"),
                    long = $(this)
                        .find(".longitude .value-title")
                        .attr("title"),
                    latLong = new google.maps.LatLng(lat, long),
                    map = new google.maps.Map(
                        document.getElementById(
                            $(this).find(".map").attr("id")
                        ),
                        {
                            center: latLong,
                            zoom: 16,
                            panControl: !1,
                            zoomControl: !1,
                            mapTypeControl: !1,
                            scaleControl: !1,
                            streetViewControl: !1,
                            scrollwheel: !1,
                            draggable: !1,
                            backgroundColor: "#ffffff",
                            mapTypeControlOptions: {
                                mapTypeIds: [
                                    google.maps.MapTypeId.ROADMAP,
                                    "OpenDNS"
                                ]
                            },
                            mapTypeId: "OpenDNS"
                        }
                    );
                map.mapTypes.set("OpenDNS", customMapType);
                new google
                    .maps.Marker({ position: latLong, map: map, icon: "https://d3j20uveo70stj.cloudfront.net/opendns-www/img/opendns_map_icon.png" });
            });
        }
        $(".home-endorsements-slide-container").flexslider({
            direction: "horizontal",
            animation: "slide",
            animationLoop: !0,
            directionalNav: !1,
            controlNav: !0
        }), window.location.hash.indexOf("=") === -1 && $(window.location.hash).length && ($(window.location.hash).trigger("click"), $(window.location.hash).find(".title").parent().toggleClass("expanded").find("p").not("title").slideDown().addClass("visible")), $(
            "ol.expand-list li button.title"
        ).on("click", function() {
        	if ( $(this).attr( 'aria-expanded') === 'true' ) {
            	$(this).attr( 'aria-expanded', 'false' );
        	} else {
            	$(this).attr( 'aria-expanded', 'true' );
        	}
            $(this)
                .parent()
                .toggleClass("expanded")
                .find("p")
                .not(".title")
                .slideToggle()
                .toggleClass("visible");
        }), $(".expandable-box .title").on("click", function() {
            $(this).parent().find("div.expandable").slideToggle();
        }), $(".collapsible-list .hidden-content").slideUp(), $(
            ".collapsible-list .read-more-button"
        ).on("click", function() {
            return $(".collapsible-list .read-more-button .text").html(
                "Show More"
            ), $(this).parent().hasClass("visible")
                ? (
                      $(this).parent().removeClass("visible"),
                      $(this)
                          .siblings(".hidden-content")
                          .slideToggle(100, function() {
                              $(".collapsible-list").hasClass("no-anim") ||
                                  $("html, body").animate({
                                      scrollTop: $(this).parent("li").position()
                                          .top
                                  });
                          })
                  )
                : (
                      $(this).parent().siblings("li").removeClass("visible"),
                      $(this).parent().addClass("visible"),
                      $(this).siblings(".hidden-content").slideToggle(),
                      $(this).find(".text").html("Show Less")
                  ), !1;
        }), $(".tab-links li").on("click", function() {
            return $(".tab-links li").removeClass(
                "active"
            ), $(this).addClass("active"), $(".tab-content > div").hide(), $($(this).find("a").attr("href")).show(), !1;
        }), $(".infographic .info").each(function() {
            $(this).qtip({
                content: {
                    text: $(this)
                        .parents(".infographic")
                        .find(".tooltip")
                        .html()
                },
                style: { classes: "infographic-qtip", def: !1, tip: !1 },
                hide: { event: "click mouseleave", delay: 150, fixed: !0 },
                position: {
                    my: "bottom right",
                    at: "top right",
                    adjust: { x: 15, y: -13 }
                }
            });
        }), $(
            ".single-infographics .featured-image a, .single-articles .main-column a.featured-image, .phish a.info, .stickers .image-list a"
        ).fancybox({ maxWidth: 900, fitToView: !1 }), $(".single-infographics")
            .length &&
            (
                $("footer").waypoint(
                    function(s_direction) {
                        "down" == s_direction
                            ? $(".fixed-nav").addClass("anchored")
                            : $(".fixed-nav").removeClass("anchored");
                    },
                    { offset: 635 }
                ),
                $(".fixed-nav .prev, .fixed-nav .next").on({
                    mouseenter: function() {
                        $(this).animate({ width: "295" }, 50);
                    },
                    mouseleave: function() {
                        $(this).animate({ width: "45" }, 50);
                    }
                })
            ), $(".enterprise-slideshow .slides").cycle({
            fx: "fade",
            speed: "fast",
            timeout: 0,
            pager: "#enterprise-slideshow-nav",
            pagerAnchorBuilder: function(i, slide) {
                return "#enterprise-slideshow-nav li:eq(" + i + ")";
            }
        }), (function($) {
            if ($("body.stickers").length) {
                var errorTest = function(form) {
                    var requiredFields = form.find(".req"),
                        errors = !1;
                    return requiredFields.each(function() {
                        "" === $(this).val() &&
                            (
                                (errors = !0),
                                $(this).parents(".question").addClass("error")
                            );
                    }), errors;
                };
                $("#the-form").on("submit", function() {
                    return $(".question").removeClass(
                        ".error"
                    ), errorTest($(this)) ? (errors = !1) : (window.location.href = "/stickers/success/"), !1;
                });
            }
        })($), $(".qtip-map") &&
            $(".qtip-map .map-point").each(function() {
                $(this).qtip({
                    content: {
                        text: $(this).find(".map-point-content").html()
                    },
                    style: {
                        classes: "infographic-qtip auto-height",
                        def: !1,
                        tip: !1
                    },
                    show: { event: "click mouseenter" },
                    hide: { event: "click mouseleave", delay: 150, fixed: !0 },
                    position: {
                        viewport: $(window),
                        my: "bottom center",
                        at: "top center",
                        adjust: { y: -13 }
                    }
                });
            });
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        var toggleItem = function() {
                if ($(this).siblings("table")) {
                    var $parent = $(this).parents("li");
                    $parent.toggleClass("active"), $(this)
                        .siblings(".extra-info")
                        .slideToggle();
                }
            },
            openItem = function() {
                $("#tam-info").parents("li").hasClass("active") ||
                    $("#tam-info").trigger("click");
            };
        $(".support-details p").on(
            "click",
            toggleItem
        ), $(".tam-link").on("click", openItem);
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        var clickLogoNav = function() {
            var el = $(this);
            el.unbind("click").bind("click", function() {
                return !1;
            });
            var elId = $(this).parent().attr("id"),
                distance = 800;
            return "nav-right" == elId
                ? (
                      $("#customer-logos ul").css({
                          marginLeft: "-" + distance + "px"
                      }),
                      $("#customer-logos ul li:gt(4)")
                          .detach()
                          .prependTo("#customer-logos ul"),
                      $("#customer-logos ul").animate(
                          { marginLeft: "0px" },
                          500,
                          function() {
                              el.unbind("click").bind("click", clickLogoNav);
                          }
                      )
                  )
                : "nav-left" == elId &&
                  $("#customer-logos ul").animate(
                      { marginLeft: "-=" + distance + "px" },
                      500,
                      function() {
                          $("#customer-logos ul").css({ marginLeft: "0px" }), $(
                              "#customer-logos ul li:lt(5)"
                          )
                              .detach()
                              .appendTo("#customer-logos ul"), el
                              .unbind("click")
                              .bind("click", clickLogoNav);
                      }
                  ), !1;
        };
        if (
            (
                $(".logos-container .nav a").click(clickLogoNav),
                (function($) {
                    var $users = $(
                        ".page-template-page-home-test-php .user-container"
                    );
                    $users
                        .find(".cta-block-mobile .business-user")
                        .on("click", function() {
                            $(".user-groups").slideToggle();
                        });
                })($),
                $(".video-spot").length
            )
        ) {
            var $trigger = $(".video-spot-overlay"),
                $iframe = $(".video-spot iframe");
            $trigger.on("click", function() {
                Response.band(0, 950)
                    ? (window.location.href = $iframe.data("src"))
                    : (
                          $iframe.attr({ src: $iframe.data("src") }),
                          setTimeout(function() {
                              $trigger.hide();
                          }, 300)
                      );
            }), Response.crossover(function() {
                Response.band(0, 950) &&
                    $trigger.not(":visible") &&
                    ($iframe.attr("src", ""), $trigger.show());
            });
        }
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        $(".packages-and-pricing").length &&
            $(".feature-matrix .i-circle").each(function() {
                $(this).qtip({
                    content: { text: $(this).siblings(".description").html() },
                    position: {
                        my: "left top",
                        at: "right top",
                        adjust: { x: 15, y: -15 }
                    },
                    style: { classes: "dark-qtip", def: !1 },
                    show: { event: "click mouseenter" },
                    hide: { event: "click mouseleave", delay: 150, fixed: !0 }
                });
            }), $(".feature-matrix").waypoint(
            function(direction) {
                "down" === direction
                    ? $("body").addClass("sticky-boxes")
                    : "up" === direction &&
                      $("body").removeClass("sticky-boxes");
            },
            { offset: 238 + $("#wpadminbar:visible").outerHeight() }
        ), $(".last-row").waypoint(
            function(direction) {
                "down" === direction
                    ? (
                          $("body").addClass("stopped-boxes"),
                          $(".boxes-container").css({
                              top: $(".last-row").offset().top - 140
                          })
                      )
                    : "up" === direction &&
                      (
                          $("body").removeClass("stopped-boxes"),
                          $(".boxes-container").attr("style", "")
                      );
            },
            {
                offset:
                    $("header").outerHeight() +
                    $(".subnav-container").outerHeight() +
                    $("#wpadminbar:visible").outerHeight() +
                    141
            }
        );
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        $(".fancybox").fancybox();
        var linkClasses = [
                "a.free-trial",
                "li.button.free-trial",
                "a.business-overview-tiles-cta-free-trial"
            ],
            clickFreeTrial = function() {
                var linkUrl = "https://signup.umbrella.com/modal/";
                return Response.band(0, 712)
                    ? void ("li" === $(this).prop("tagName").toLowerCase()
                          ? $(this).find("a").attr("href", linkUrl)
                          : $(this).attr("href", linkUrl))
                    : (
                          $.fancybox({
                              type: "iframe",
                              href: linkUrl,
                              padding: 0,
                              width: 975,
                              height: 800,
                              closeBtn: !1,
                              iframe: { preload: !1 },
                              wrapCSS: "variation-box freetrial-box",
                              helpers: {
                                  overlay: {
                                      css: {
                                          background: "rgba(67, 67, 86, 0.8)"
                                      }
                                  }
                              }
                          }),
                          !1
                      );
            };
        $(linkClasses.join(",")).click(clickFreeTrial);
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        window.location.href.indexOf("report") > -1
            ? $("#contact-text").html("Download Report")
            : window.location.href.indexOf("events") > -1
              ? $("#contact-text").html("Register")
              : window.location.href.indexOf("demand") > -1
                ? $("#contact-text").html("Watch Webcast")
                : window.location.href.indexOf("speakeasy") > -1
                  ? $("#contact-text").html("Get Password")
                  : window.location.href.indexOf("speakeasy") > -1
                    ? $("#contact-text").html("Get Password")
                    : window.location.href.indexOf("webcast") > -1
                      ? $("#contact-text").html("Register Now")
                      : window.location.href.indexOf("whitepaper") > -1 &&
                        $("#contact-text").html("Download Whitepaper");
    });
})(jQuery), (function($) {
    $(document).ready(function() {
        if (
            $("body").hasClass("enterprise-security") &&
            ~window.location.hash.indexOf("anim") &&
            !Response.band(0, 950)
        ) {
            var startAnimation = function() {
                    $(".play-button").remove(), animation.play();
                },
                animation = document.getElementById("animation"),
                $playButton = $("<div>")
                    .addClass("play-button")
                    .html('<i class="fa fa-play"></i>')
                    .on("click", startAnimation);
            $(".banner").hide(), $(animation)
                .css({ width: 950, height: 364 })
                .after($playButton)
                .show()
                .on("click", startAnimation), (animation.onended = function() {
                $playButton.hasClass("replay") ||
                    $playButton
                        .html('<p><i class="fa fa-refresh"></i> Play Again</p>')
                        .addClass("replay"), $(animation).after(
                    $playButton
                ), $playButton.on("click", startAnimation);
            });
        }
        $("body").hasClass("threat-intelligence") &&
            $(".investigate-video-link").on("click", function() {
                var $target = $($(this).data("target")),
                    src =
                        $target.attr("data-src") +
                        (~$target.attr("data-src").indexOf("?")
                            ? "&autoplay=1"
                            : "?autoplay=1");
                Response.band(0, 950)
                    ? (window.location.href = $target.attr("data-src"))
                    : $.fancybox({
                          maxwidth: 800,
                          maxheight: 600,
                          type: "iframe",
                          href: src
                      });
            });
        var toggleUseCase = function() {
                if ($(this).siblings("li")) {
                    var $parent = $(this).parents("ul");
                    $parent.toggleClass("active"), $(this)
                        .siblings("li")
                        .slideToggle();
                }
            },
            openItem = function() {
                $(".category-title.speed-up-investigations")
                    .parents("ul")
                    .hasClass("active") ||
                    $(".category-title.speed-up-investigations").trigger(
                        "click"
                    );
            };
        $(".use-case-category h3, .features__category h3").on(
            "click",
            toggleUseCase
        ), $(document).ready(openItem);
    });
})(jQuery), !(function(a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(k(a, c), b);
    }
    function f(a, b, c) {
        return !!Array.isArray(a) && (g(a, c[b], c), !0);
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
            else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
        return a;
    }
    function i(a, b) {
        return h(a, b, !0);
    }
    function j(a, b, c) {
        var d,
            e = b.prototype;
        (d = a.prototype = Object.create(
            e
        )), (d.constructor = a), (d._super = e), c && h(d, c);
    }
    function k(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function l(a, b) {
        return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function m(a, b) {
        return a === d ? b : a;
    }
    function n(a, b, c) {
        g(r(b), function(b) {
            a.addEventListener(b, c, !1);
        });
    }
    function o(a, b, c) {
        g(r(b), function(b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function p(a, b) {
        for (; a; ) {
            if (a == b) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function q(a, b) {
        return a.indexOf(b) > -1;
    }
    function r(a) {
        return a.trim().split(/\s+/g);
    }
    function s(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
            d++;
        }
        return -1;
    }
    function t(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            s(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
        }
        return c &&
            (d = b
                ? d.sort(function(a, c) {
                      return a[b] > c[b];
                  })
                : d.sort()), d;
    }
    function v(a, b) {
        for (
            var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
            g < ib.length;

        ) {
            if (((c = ib[g]), (e = c ? c + f : b), e in a)) return e;
            g++;
        }
        return d;
    }
    function w() {
        return ob++;
    }
    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow;
    }
    function y(a, b) {
        var c = this;
        (this.manager = a), (this.callback = b), (this.element =
            a.element), (this.target =
            a.options.inputTarget), (this.domHandler = function(b) {
            l(a.options.enable, [a]) && c.handler(b);
        }), this.init();
    }
    function z(a) {
        var b,
            c = a.options.inputClass;
        return new (b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A);
    }
    function A(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & yb && d - e === 0,
            g = b & (Ab | Bb) && d - e === 0;
        (c.isFirst = !!f), (c.isFinal = !!g), f &&
            (a.session = {}), (c.eventType = b), B(a, c), a.emit(
            "hammer.input",
            c
        ), a.recognize(c), (a.session.prevInput = c);
    }
    function B(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple
            ? (c.firstMultiple = E(b))
            : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = (b.center = F(d));
        (b.timeStamp = nb()), (b.deltaTime =
            b.timeStamp - f.timeStamp), (b.angle = J(h, i)), (b.distance = I(
            h,
            i
        )), C(c, b), (b.offsetDirection = H(b.deltaX, b.deltaY)), (b.scale = g
            ? L(g.pointers, d)
            : 1), (b.rotation = g ? K(g.pointers, d) : 0), D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), (b.target = j);
    }
    function C(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        (b.eventType === yb || f.eventType === Ab) &&
            (
                (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
                (d = a.offsetDelta = { x: c.x, y: c.y })
            ), (b.deltaX = e.x + (c.x - d.x)), (b.deltaY = e.y + (c.y - d.y));
    }
    function D(a, b) {
        var c,
            e,
            f,
            g,
            h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Bb && (i > xb || h.velocity === d)) {
            var j = h.deltaX - b.deltaX,
                k = h.deltaY - b.deltaY,
                l = G(i, j, k);
            (e = l.x), (f = l.y), (c = mb(l.x) > mb(l.y) ? l.x : l.y), (g = H(
                j,
                k
            )), (a.lastInterval = b);
        } else
            (c = h.velocity), (e = h.velocityX), (f = h.velocityY), (g =
                h.direction);
        (b.velocity = c), (b.velocityX = e), (b.velocityY = f), (b.direction = g);
    }
    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length; )
            (b[c] = {
                clientX: lb(a.pointers[c].clientX),
                clientY: lb(a.pointers[c].clientY)
            }), c++;
        return {
            timeStamp: nb(),
            pointers: b,
            center: F(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function F(a) {
        var b = a.length;
        if (1 === b) return { x: lb(a[0].clientX), y: lb(a[0].clientY) };
        for (var c = 0, d = 0, e = 0; b > e; )
            (c += a[e].clientX), (d += a[e].clientY), e++;
        return { x: lb(c / b), y: lb(d / b) };
    }
    function G(a, b, c) {
        return { x: b / a || 0, y: c / a || 0 };
    }
    function H(a, b) {
        return a === b
            ? Cb
            : mb(a) >= mb(b) ? (a > 0 ? Db : Eb) : b > 0 ? Fb : Gb;
    }
    function I(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function J(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function K(a, b) {
        return J(b[1], b[0], Lb) - J(a[1], a[0], Lb);
    }
    function L(a, b) {
        return I(b[0], b[1], Lb) / I(a[0], a[1], Lb);
    }
    function M() {
        (this.evEl = Nb), (this.evWin = Ob), (this.allow = !0), (this.pressed = !1), y.apply(
            this,
            arguments
        );
    }
    function N() {
        (this.evEl = Rb), (this.evWin = Sb), y.apply(
            this,
            arguments
        ), (this.store = this.manager.session.pointerEvents = []);
    }
    function O() {
        (this.evTarget = Ub), (this.evWin = Vb), (this.started = !1), y.apply(
            this,
            arguments
        );
    }
    function P(a, b) {
        var c = t(a.touches),
            d = t(a.changedTouches);
        return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d];
    }
    function Q() {
        (this.evTarget = Xb), (this.targetIds = {}), y.apply(this, arguments);
    }
    function R(a, b) {
        var c = t(a.touches),
            d = this.targetIds;
        if (b & (yb | zb) && 1 === c.length)
            return (d[c[0].identifier] = !0), [c, c];
        var e,
            f,
            g = t(a.changedTouches),
            h = [],
            i = this.target;
        if (
            (
                (f = c.filter(function(a) {
                    return p(a.target, i);
                })),
                b === yb
            )
        )
            for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
        for (e = 0; e < g.length; )
            d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) &&
                delete d[g[e].identifier], e++;
        return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0;
    }
    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        (this.touch = new Q(this.manager, a)), (this.mouse = new M(
            this.manager,
            a
        ));
    }
    function T(a, b) {
        (this.manager = a), this.set(b);
    }
    function U(a) {
        if (q(a, bc)) return bc;
        var b = q(a, cc),
            c = q(a, dc);
        return b && c
            ? cc + " " + dc
            : b || c ? (b ? cc : dc) : q(a, ac) ? ac : _b;
    }
    function V(a) {
        (this.id = w()), (this.manager = null), (this.options = i(
            a || {},
            this.defaults
        )), (this.options.enable = m(
            this.options.enable,
            !0
        )), (this.state = ec), (this.simultaneous = {}), (this.requireFail = []);
    }
    function W(a) {
        return a & jc
            ? "cancel"
            : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : "";
    }
    function X(a) {
        return a == Gb
            ? "down"
            : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : "";
    }
    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function Z() {
        V.apply(this, arguments);
    }
    function $() {
        Z.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function _() {
        Z.apply(this, arguments);
    }
    function ab() {
        V.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function bb() {
        Z.apply(this, arguments);
    }
    function cb() {
        Z.apply(this, arguments);
    }
    function db() {
        V.apply(
            this,
            arguments
        ), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
    }
    function eb(a, b) {
        return (b = b || {}), (b.recognizers = m(
            b.recognizers,
            eb.defaults.preset
        )), new fb(a, b);
    }
    function fb(a, b) {
        (b = b || {}), (this.options = i(
            b,
            eb.defaults
        )), (this.options.inputTarget =
            this.options.inputTarget ||
            a), (this.handlers = {}), (this.session = {}), (this.recognizers = []), (this.element = a), (this.input = z(
            this
        )), (this.touchAction = new T(this, this.options.touchAction)), gb(
            this,
            !0
        ), g(
            b.recognizers,
            function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
            },
            this
        );
    }
    function gb(a, b) {
        var c = a.element;
        g(a.options.cssProps, function(a, d) {
            c.style[v(c.style, d)] = b ? a : "";
        });
    }
    function hb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
    }
    var ib = ["", "webkit", "moz", "MS", "ms", "o"],
        jb = b.createElement("div"),
        kb = "function",
        lb = Math.round,
        mb = Math.abs,
        nb = Date.now,
        ob = 1,
        pb = /mobile|tablet|ip(ad|hone|od)|android/i,
        qb = "ontouchstart" in a,
        rb = v(a, "PointerEvent") !== d,
        sb = qb && pb.test(navigator.userAgent),
        tb = "touch",
        ub = "pen",
        vb = "mouse",
        wb = "kinect",
        xb = 25,
        yb = 1,
        zb = 2,
        Ab = 4,
        Bb = 8,
        Cb = 1,
        Db = 2,
        Eb = 4,
        Fb = 8,
        Gb = 16,
        Hb = Db | Eb,
        Ib = Fb | Gb,
        Jb = Hb | Ib,
        Kb = ["x", "y"],
        Lb = ["clientX", "clientY"];
    y.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this
                .evTarget &&
                n(this.target, this.evTarget, this.domHandler), this.evWin &&
                n(x(this.element), this.evWin, this.domHandler);
        },
        destroy: function() {
            this.evEl && o(this.element, this.evEl, this.domHandler), this
                .evTarget &&
                o(this.target, this.evTarget, this.domHandler), this.evWin &&
                o(x(this.element), this.evWin, this.domHandler);
        }
    };
    var Mb = { mousedown: yb, mousemove: zb, mouseup: Ab },
        Nb = "mousedown",
        Ob = "mousemove mouseup";
    j(M, y, {
        handler: function(a) {
            var b = Mb[a.type];
            b & yb && 0 === a.button && (this.pressed = !0), b & zb &&
                1 !== a.which &&
                (b = Ab), this.pressed &&
                this.allow &&
                (
                    b & Ab && (this.pressed = !1),
                    this.callback(this.manager, b, {
                        pointers: [a],
                        changedPointers: [a],
                        pointerType: vb,
                        srcEvent: a
                    })
                );
        }
    });
    var Pb = {
            pointerdown: yb,
            pointermove: zb,
            pointerup: Ab,
            pointercancel: Bb,
            pointerout: Bb
        },
        Qb = { 2: tb, 3: ub, 4: vb, 5: wb },
        Rb = "pointerdown",
        Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent &&
        (
            (Rb = "MSPointerDown"),
            (Sb = "MSPointerMove MSPointerUp MSPointerCancel")
        ), j(N, y, {
        handler: function(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Pb[d],
                f = Qb[a.pointerType] || a.pointerType,
                g = f == tb,
                h = s(b, a.pointerId, "pointerId");
            e & yb && (0 === a.button || g)
                ? 0 > h && (b.push(a), (h = b.length - 1))
                : e & (Ab | Bb) && (c = !0), 0 > h ||
                (
                    (b[h] = a),
                    this.callback(this.manager, e, {
                        pointers: b,
                        changedPointers: [a],
                        pointerType: f,
                        srcEvent: a
                    }),
                    c && b.splice(h, 1)
                );
        }
    });
    var Tb = { touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb },
        Ub = "touchstart",
        Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function(a) {
            var b = Tb[a.type];
            if ((b === yb && (this.started = !0), this.started)) {
                var c = P.call(this, a, b);
                b & (Ab | Bb) &&
                    c[0].length - c[1].length === 0 &&
                    (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                });
            }
        }
    });
    var Wb = { touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb },
        Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function(a) {
            var b = Wb[a.type],
                c = R.call(this, a, b);
            c &&
                this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                });
        }
    }), j(S, y, {
        handler: function(a, b, c) {
            var d = c.pointerType == tb,
                e = c.pointerType == vb;
            if (d) this.mouse.allow = !1;
            else if (e && !this.mouse.allow) return;
            b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c);
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var Yb = v(jb.style, "touchAction"),
        Zb = Yb !== d,
        $b = "compute",
        _b = "auto",
        ac = "manipulation",
        bc = "none",
        cc = "pan-x",
        dc = "pan-y";
    T.prototype = {
        set: function(a) {
            a == $b && (a = this.compute()), Zb &&
                (this.manager.element.style[
                    Yb
                ] = a), (this.actions = a.toLowerCase().trim());
        },
        update: function() {
            this.set(this.manager.options.touchAction);
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
            }), U(a.join(" "));
        },
        preventDefaults: function(a) {
            if (!Zb) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented)
                    return void b.preventDefault();
                var d = this.actions,
                    e = q(d, bc),
                    f = q(d, dc),
                    g = q(d, cc);
                return e || (f && c & Hb) || (g && c & Ib)
                    ? this.preventSrc(b)
                    : void 0;
            }
        },
        preventSrc: function(a) {
            (this.manager.session.prevented = !0), a.preventDefault();
        }
    };
    var ec = 1,
        fc = 2,
        gc = 4,
        hc = 8,
        ic = hc,
        jc = 16,
        kc = 32;
    (V.prototype = {
        defaults: {},
        set: function(a) {
            return h(this.options, a), this.manager &&
                this.manager.touchAction.update(), this;
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return (a = Y(a, this)), b[a.id] ||
                ((b[a.id] = a), a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this)
                ? this
                : ((a = Y(a, this)), delete this.simultaneous[a.id], this);
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return (a = Y(a, this)), -1 === s(b, a) &&
                (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id];
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a);
            }
            var c = this,
                d = this.state;
            hc > d && b(!0), b(), d >= hc && b(!0);
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = kc);
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (kc | ec))) return !1;
                a++;
            }
            return !0;
        },
        recognize: function(a) {
            var b = h({}, a);
            return l(this.options.enable, [this, b])
                ? (
                      this.state & (ic | jc | kc) && (this.state = ec),
                      (this.state = this.process(b)),
                      void (this.state & (fc | gc | hc | jc) && this.tryEmit(b))
                  )
                : (this.reset(), void (this.state = kc));
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }), j(Z, V, {
        defaults: { pointers: 1 },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (fc | gc),
                e = this.attrTest(a);
            return d && (c & Bb || !e)
                ? b | jc
                : d || e ? (c & Ab ? b | hc : b & fc ? b | gc : fc) : kc;
        }
    }), j($, Z, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Jb },
        getTouchAction: function() {
            var a = this.options.direction,
                b = [];
            return a & Hb && b.push(dc), a & Ib && b.push(cc), b;
        },
        directionTest: function(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction ||
                (b.direction & Hb
                    ? (
                          (e = 0 === f ? Cb : 0 > f ? Db : Eb),
                          (c = f != this.pX),
                          (d = Math.abs(a.deltaX))
                      )
                    : (
                          (e = 0 === g ? Cb : 0 > g ? Fb : Gb),
                          (c = g != this.pY),
                          (d = Math.abs(a.deltaY))
                      )), (a.direction = e), c &&
                d > b.threshold &&
                e & b.direction;
        },
        attrTest: function(a) {
            return (
                Z.prototype.attrTest.call(this, a) &&
                (this.state & fc ||
                    (!(this.state & fc) && this.directionTest(a)))
            );
        },
        emit: function(a) {
            (this.pX = a.deltaX), (this.pY = a.deltaY);
            var b = X(a.direction);
            b &&
                this.manager.emit(
                    this.options.event + b,
                    a
                ), this._super.emit.call(this, a);
        }
    }), j(_, Z, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function() {
            return [bc];
        },
        attrTest: function(a) {
            return (
                this._super.attrTest.call(this, a) &&
                (Math.abs(a.scale - 1) > this.options.threshold ||
                    this.state & fc)
            );
        },
        emit: function(a) {
            if ((this._super.emit.call(this, a), 1 !== a.scale)) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a);
            }
        }
    }), j(ab, V, {
        defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
        getTouchAction: function() {
            return [_b];
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (
                ((this._input = a), !d || !c || (a.eventType & (Ab | Bb) && !f))
            )
                this.reset();
            else if (a.eventType & yb)
                this.reset(), (this._timer = e(
                    function() {
                        (this.state = ic), this.tryEmit();
                    },
                    b.time,
                    this
                ));
            else if (a.eventType & Ab) return ic;
            return kc;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(a) {
            this.state === ic &&
                (a && a.eventType & Ab
                    ? this.manager.emit(this.options.event + "up", a)
                    : (
                          (this._input.timeStamp = nb()),
                          this.manager.emit(this.options.event, this._input)
                      ));
        }
    }), j(bb, Z, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function() {
            return [bc];
        },
        attrTest: function(a) {
            return (
                this._super.attrTest.call(this, a) &&
                (Math.abs(a.rotation) > this.options.threshold ||
                    this.state & fc)
            );
        }
    }), j(cb, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.65,
            direction: Hb | Ib,
            pointers: 1
        },
        getTouchAction: function() {
            return $.prototype.getTouchAction.call(this);
        },
        attrTest: function(a) {
            var b,
                c = this.options.direction;
            return c & (Hb | Ib)
                ? (b = a.velocity)
                : c & Hb
                  ? (b = a.velocityX)
                  : c & Ib && (b = a.velocityY), this._super.attrTest.call(
                this,
                a
            ) &&
                c & a.direction &&
                a.distance > this.options.threshold &&
                mb(b) > this.options.velocity &&
                a.eventType & Ab;
        },
        emit: function(a) {
            var b = X(a.direction);
            b &&
                this.manager.emit(this.options.event + b, a), this.manager.emit(
                this.options.event,
                a
            );
        }
    }), j(db, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ac];
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if ((this.reset(), a.eventType & yb && 0 === this.count))
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ab) return this.failTimeout();
                var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
                    h =
                        !this.pCenter ||
                        I(this.pCenter, a.center) < b.posThreshold;
                (this.pTime = a.timeStamp), (this.pCenter = a.center), h && g
                    ? (this.count += 1)
                    : (this.count = 1), (this._input = a);
                var i = this.count % b.taps;
                if (0 === i)
                    return this.hasRequireFailures()
                        ? (
                              (this._timer = e(
                                  function() {
                                      (this.state = ic), this.tryEmit();
                                  },
                                  b.interval,
                                  this
                              )),
                              fc
                          )
                        : ic;
            }
            return kc;
        },
        failTimeout: function() {
            return (this._timer = e(
                function() {
                    this.state = kc;
                },
                this.options.interval,
                this
            )), kc;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            this.state == ic &&
                (
                    (this._input.tapCount = this.count),
                    this.manager.emit(this.options.event, this._input)
                );
        }
    }), (eb.VERSION = "2.0.4"), (eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [bb, { enable: !1 }],
            [_, { enable: !1 }, ["rotate"]],
            [cb, { direction: Hb }],
            [$, { direction: Hb }, ["swipe"]],
            [db],
            [db, { event: "doubletap", taps: 2 }, ["tap"]],
            [ab]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    });
    var lc = 1,
        mc = 2;
    (fb.prototype = {
        set: function(a) {
            return h(this.options, a), a.touchAction &&
                this.touchAction.update(), a.inputTarget &&
                (
                    this.input.destroy(),
                    (this.input.target = a.inputTarget),
                    this.input.init()
                ), this;
        },
        stop: function(a) {
            this.session.stopped = a ? mc : lc;
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c,
                    d = this.recognizers,
                    e = b.curRecognizer;
                (!e || (e && e.state & ic)) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; )
                    (c = d[f]), b.stopped === mc ||
                    (e && c != e && !c.canRecognizeWith(e))
                        ? c.reset()
                        : c.recognize(a), !e &&
                        c.state & (fc | gc | hc) &&
                        (e = b.curRecognizer = c), f++;
            }
        },
        get: function(a) {
            if (a instanceof V) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null;
        },
        add: function(a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(
                a
            ), (a.manager = this), this.touchAction.update(), a;
        },
        remove: function(a) {
            if (f(a, "remove", this)) return this;
            var b = this.recognizers;
            return (a = this.get(a)), b.splice(
                s(b, a),
                1
            ), this.touchAction.update(), this;
        },
        on: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                (c[a] = c[a] || []), c[a].push(b);
            }), this;
        },
        off: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a];
            }), this;
        },
        emit: function(a, b) {
            this.options.domEvents && hb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                (b.type = a), (b.preventDefault = function() {
                    b.srcEvent.preventDefault();
                });
                for (var d = 0; d < c.length; ) c[d](b), d++;
            }
        },
        destroy: function() {
            this.element &&
                gb(
                    this,
                    !1
                ), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
        }
    }), h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == kb && define.amd
        ? define(function() {
              return eb;
          })
        : "undefined" != typeof module && module.exports
          ? (module.exports = eb)
          : (a[c] = eb);
})(window, document, "Hammer"), (function($) {
    $(document).ready(function() {
        delete Hammer.defaults.cssProps.userSelect;
        var OffscreenNav = function() {
            (this.$trigger = $(
                ".header-offscreen-nav-trigger"
            )), (this.$nav = $(
                ".offscreen-nav"
            )), (this.$nav.isVisible = !1), (this.$scrim =
                ""), (this.windowWidth = $(
                window
            ).width()), (this.menus = []), (this.hammer = new Hammer(
                $("body").get(0)
            )), this.formatMenus(), this.$trigger.on(
                "click",
                $.proxy(this.handleTriggerClick, this)
            ), $(window).on(
                "resize",
                $.proxy(this.handleWindowResize, this)
            ), this.hammer.on(
                "swiperight",
                $.proxy(function() {
                    this.$nav.isVisible || this.handleTriggerClick();
                }, this)
            ), this.hammer.on(
                "swipeleft",
                $.proxy(function() {
                    this.$nav.isVisible && this.handleCloseClick();
                }, this)
            ), ($close = $("<button>").attr("aria-label", "close main navigation").addClass(
                "offscreen-nav-close"
            )), $close.appendTo(this.$nav), $close.on(
                "click",
                $.proxy(this.handleCloseClick, this)
            ), ($productsLink = this.$nav.find(
                ".product-link > a"
            )), $productsLink.on("click", function() {
                return $(this).siblings(".subnav").slideToggle(100), !1;
            });
        };
        (OffscreenNav.prototype.formatMenus = function() {
            this.menus.push($("#menu-header-nav-business")), this.menus.push(
                $("#menu-header-nav-msp")
            );
            this.menus.forEach(function($menu) {
                ($subnav = $("<ul>").addClass(
                    "subnav"
                )), $menu.find("> li").each(function(i) {
                    i && $(this).appendTo($subnav);
                }), $menu.find("li:first-child").append($subnav);
            }), this.menus.push(
                $("#menu-header-nav-personal")
            ), this.menus.push(
                $("#menu-header-nav-about")
            ), ($secondaryNav = $(
                ".offscreen-nav .menu"
            ))
        }), (OffscreenNav.prototype.handleNavClick = function(e) {
            var $current = $(e.currentTarget);
            return this.menus.forEach(function($menu) {
                $menu.find("> li > .subnav").stop(!0).slideUp(250, function() {
                    $current
                        .siblings(".subnav")
                        .stop(!0)
                        .slideDown(250, function() {
                            $current
                                .siblings(".subnav")
                                .css({ height: "auto" });
                        });
                });
            }), !1;
        }), (OffscreenNav.prototype.changeRight = function() {
            var $grid = $(".header > .grid"),
                gridStyles = window.getComputedStyle($grid.get(0), null),
                gridLeftSpacing =
                    parseInt(
                        gridStyles
                            .getPropertyValue("margin-left")
                            .replace("px", "")
                    ) +
                    parseInt(
                        gridStyles
                            .getPropertyValue("padding-left")
                            .replace("px", "")
                    ) +
                    6,
                navWidth = parseInt(
                    window
                        .getComputedStyle(this.$nav.get(0), null)
                        .getPropertyValue("width")
                        .replace("px", "")
                );
            this.$nav.css({
                right:
                    100 -
                    (gridLeftSpacing + navWidth) / window.innerWidth * 100 +
                    "%"
            });
        }), (OffscreenNav.prototype.openNav = function() {
            var $grid = $(".header > .grid"),
                gridOffset = $($grid.get(0)).offset().left,
                navWidth = $(this.$nav.get(0)).width() + 6;
            this.$nav
                .stop()
                .fadeIn()
                .animate({
                    right:
                        100 -
                        (gridOffset + navWidth) / window.innerWidth * 100 +
                        "%"
                });
            document.getElementById( 'offscreen-nav-logo-link' ).focus();
        }), (OffscreenNav.prototype.toggleAriaExpanded = function() {
        	$navButton = $( '#header-offscreen-nav-trigger' );
            if ( $navButton.attr( 'aria-expanded') === 'true' ) {
            	$navButton.attr( 'aria-expanded', 'false' );
        	} else {
            	$navButton.attr( 'aria-expanded', 'true' );
        	}
        }), (OffscreenNav.prototype.closeNav = function() {
            this.$nav.isVisible &&
                (
                    (this.$nav.isVisible = !1),
                    this.$nav.animate({ right: "100%" }).fadeOut()
                );
                document.getElementById( 'header-offscreen-nav-trigger' ).focus();
        }), (OffscreenNav.prototype.handleTriggerClick = function() {
            (this.$nav.isVisible = !0), this.createScrim(), this.openNav(), $(
                "body"
            ).addClass("modal-open"), this.toggleAriaExpanded();
        }), (OffscreenNav.prototype.removeScrim = function() {
            this.$scrim.remove();
        }), (OffscreenNav.prototype.createScrim = function() {
            (this.$scrim = $("<div/>")
                .addClass("offscreen-nav-scrim")
                .on(
                    "click",
                    $.proxy(this.handleCloseClick, this)
                )), this.$scrim.appendTo("body");
        }), (OffscreenNav.prototype.handleWindowResize = function() {
            $(window).width() !== this.windowWidth &&
                (
                    (this.windowWidth = $(window).width()),
                    this.$nav.isVisible && this.changeRight()
                );
        }), (OffscreenNav.prototype.handleCloseClick = function() {
            this.closeNav(), this.removeScrim(), $("body").removeClass(
                "modal-open"
            ), this.toggleAriaExpanded();
        });
        new OffscreenNav();
    });
})(jQuery);


