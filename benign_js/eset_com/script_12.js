/* 元のURL: https://eset.com */

    $(function () {
        $("body").on("mouseenter", '[id^="content-premium-visuality-plans-selector"] .eset-toggle-container.inline-tooltip .icon.ficon-info', function () {
            $(".tooltip-element").addClass("force-hidden");
        });
        $("body").on("mouseleave", '[id^="content-premium-visuality-plans-selector"] .eset-toggle-container.inline-tooltip .icon.ficon-info', function () {
            $(".tooltip-element").removeClass("force-hidden");
        });
    });


