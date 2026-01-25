/* 元のURL: https://zoom.us */

    document.querySelectorAll(".hpBanner_RightSection img").forEach((img) => {
      img.addEventListener("click", function (event) {
        event.stopPropagation();
        document.querySelectorAll(".customWrapper_zoomTopiaBanner").forEach((el) => el.remove());
      });
    });

    document.querySelectorAll(
      ".customWrapper_zoomTopiaBanner"
    )
      .forEach(function (el) {
        el.addEventListener("click", function () {
          window.open(
            "https://click.zoom.com/gartner-magic-quadrant-for-ucaas?itm_source=imm&itm_medium=hpbanner&itm_campaign=FY26-Q3-Global-Gartner-UCaaS-MQ-2025-IM68074",
            "_blank"
          );
        });
      });
  

