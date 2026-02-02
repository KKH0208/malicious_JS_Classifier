/* 元のURL: https://ibm.com */
// 外部JS: https://ibm.com/etc.clientlibs/adobe-cms/components/content/organisms/tile-group/tile-group-container/clientlibs.lc-92a38a0479519d42cd16961ae5a4bd09-lc.min.js
document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".tile-group-container").forEach((tileGroup, tgIndex) => {

      // Assign unique ID to the tile-group-container
      tileGroup.id = `mbox-tg${tgIndex + 1}-tg`;

      // Find and assign a unique ID to the <h2> element inside the tile-group-container
      const heading = tileGroup.querySelector("h2.expressive-heading-05");
      if (heading) { heading.id = `mbox-tg${tgIndex + 1}-heading`; }

      // Find all <caem-tile> elements and assign unique IDs
      tileGroup.querySelectorAll("caem-tile").forEach((tile, tileIndex) => {
          tile.id = `mbox-tg${tgIndex + 1}-tile${tileIndex + 1}`;

          // Add "mbox-tile-heading" class to the <div> with class "caem-tile__text"
          const textDiv = tile.querySelector("div.caem-tile__text");
          if (textDiv) textDiv.classList.add("mbox-tile-heading");

        const linkDiv = tile.querySelector("p.caem-tile__link");
       if (linkDiv) textDiv.classList.add("mbox-tile-link");

          // Add "mbox-tile-cta" class to ALL <cds-tag> elements inside each tile
          tile.querySelectorAll("cds-tag").forEach((tag) => {
              tag.classList.add("mbox-tile-cta");
          });

          // Add "mbox-tile-visual" class to the <c4d-image>
          const visualImage = tile.querySelector("c4d-image");
          if (visualImage) visualImage.classList.add("mbox-tile-visual");

          // Add "mbox-tile-visual" class to the <svg> with slot="pictogram"
          const svg = tile.querySelector('svg[slot="pictogram"]');
          if (svg) svg.classList.add("mbox-tile-visual");

      });
  });
});

