/* 元のURL: https://sharethrough.com */

      /* Text for each locale */
      const copy = {
        en: {
          title: "United as One: Sharethrough is now Equativ",
          body: "We're officially one team as Sharethrough and Equativ come together under the Equativ name!",
          cta: "Learn More â",
          url: "https://www.equativ.com/press/equativ-and-sharethrough-will-now-operate-under-equativ-brand-solidifying-global-position-as-leading-end-to-end-media-platform"
        },
        fr: {
          title: "DÃ©sormais unis ! Sharethrough devient Equativ",
          body: "Lâunification est dÃ©sormais officielle : Sharethrough et Equativ ne font plus quâun sous la banniÃ¨re Equativ !",
          cta: "En savoir plus â",
          url: "https://www.equativ.com/fr/press/equativ-and-sharethrough-will-now-operate-under-equativ-brand-solidifying-global-position-as-leading-end-to-end-media-platform"
        }
      };

      document.addEventListener("DOMContentLoaded", () => {
        const lang = (document.documentElement.lang || "en").slice(0, 2);
        const txt = copy[lang] || copy.en;

        const card = document.getElementById("notification-card");
        card.querySelector("h3").textContent = txt.title;
        card.querySelector("p").textContent = txt.body;

        const cta = card.querySelector("a.cta-btn");
        cta.textContent = txt.cta;
        cta.href = txt.url;

        if (!sessionStorage.getItem("notificationClosed")) {
          setTimeout(() => card.classList.add("show"), 1000);
        }
      });

      function closeNotification() {
        document.getElementById("notification-card").classList.remove("show");
        sessionStorage.setItem("notificationClosed", "true");
      }
    

