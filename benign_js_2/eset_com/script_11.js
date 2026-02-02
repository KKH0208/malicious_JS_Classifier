/* 元のURL: https://eset.com */

    Number.prototype.countDecimals = function () {
        if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

        var str = this.toString();
        if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
            return str.split("-")[1] || 0;
        } else if (str.indexOf(".") !== -1) {
            return str.split(".")[1].length || 0;
        }
        return str.split("-")[1] || 0;
    };

    jQuery(document).ready(function () {
        premium_visuality_scroll_effects();
    });

    function premium_visuality_scroll_effects() {
        let e = [];
        let i;
        let s = 0;

        if (jQuery('[id*="content-premium-visuality"]:not([id*="content-premium-visuality-cta"])').length) {
            jQuery('[id*="content-premium-visuality"]:not([id*="content-premium-visuality-cta"])').each(function () {
                e.push(jQuery(this));
            });
        }

        i = e.length;

        if (!i) {
            return;
        }

        jQuery(window).on("scroll.premium_visuality_scroll_effects", a).trigger("scroll.premium_visuality_scroll_effects");

        function a() {
            if (jQuery(window).scrollTop() >= e[s].offset().top - jQuery(window).innerHeight()) {
                e[s].addClass("animate");

                if (e[s].attr("id").includes("counters")) {
                    e[s].find("p.h1 strong").each(function () {
                        let decimals = Number(jQuery(this).find("u").text()).countDecimals();
                        jQuery(this)
                            .prop("Counter", 0)
                            .animate(
                                {
                                    Counter: jQuery(this).find("u").text(),
                                },
                                {
                                    duration: 4000,
                                    easing: "swing",
                                    step: function (now) {
                                        now = Number(now.toFixed(decimals)).toLocaleString("en");
                                        jQuery(this).text(now);
                                    },
                                }
                            );
                    });
                }

                s++;

                if (s >= i) {
                    jQuery(window).off("scroll.premium_visuality_scroll_effects");
                } else {
                    a();
                }
            }
        }
    }


