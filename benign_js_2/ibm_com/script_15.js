/* 元のURL: https://ibm.com */
// 外部JS: https://ibm.com/etc.clientlibs/adobe-cms/components/structure/navigation/masthead/clientlibs/country-restoration.lc-e52d8a52a2bc79416ea399b5741ce575-lc.min.js
document.addEventListener("DOMContentLoaded", function () {

   var countryLanguageMap = {
       "ar-sa": {
           "country": "Saudi Arabia",
           "language": "العربية (Arabic)"
       },
       "de-de": {
           "country": "Germany",
           "language": "Deutsch (German)"
       },
       "en-au": {
           "country": "Australia",
           "language": "English (English)"
       },
       "en-ca": {
           "country": "Canada",
           "language": "English (English)"
       },
       "en-uk": {
           "country": "United Kingdom",
           "language": "English (English)"
       },
       "en-gb": {
           "country": "United Kingdom",
           "language": "English (English)"
       },
       "en-in": {
           "country": "India",
           "language": "English (English)"
       },
       "en-us": {
           "country": "United States",
           "language": "English (English)"
       },
       "es-es": {
           "country": "Spain",
           "language": "Español (Spanish)"
       },
       "es-mx": {
           "country": "Mexico",
           "language": "Español (Spanish)"
       },
       "fr-ca": {
           "country": "Canada",
           "language": "Français (French)"
       },
       "fr-fr": {
           "country": "France",
           "language": "Français (French)"
       },
       "id-id": {
           "country": "Indonesia",
           "language": "Bahasa (Indonesian)"
       },
       "it-it": {
           "country": "Italy",
           "language": "Italiano (Italian)"
       },
       "ja-jp": {
           "country": "Japan",
           "language": "日本語 (Japanese)"
       },
       "ko-kr": {
           "country": "South Korea",
           "language": "한국어 (Korean)"
       },
       "pt-br": {
           "country": "Brazil",
           "language": "Português (Portuguese)"
       },
       "zh-cn": {
           "country": "China",
           "language": "中文 (Simplified Chinese)"
       }
   };
   var i18nMessages = {
                             "en": {
                               "location_notice_full": "You appear to be visiting from <strong>{{country}}</strong>. Would you like to switch to your local site for regional products, pricing and content?",
                               "current_region_label": "Your Current Region is:",
                               "cancel_button": "Cancel",
                               "update_button": "Update"
                             },
                             "fr": {
                               "location_notice_full": "Vous semblez être situé en <strong>{{country}}</strong>. Souhaitez-vous accéder à notre site web local pour voir les produits, la tarification et le contenu de votre région ?",
                               "current_region_label": "Votre région actuelle est :",
                               "cancel_button": "Annuler",
                               "update_button": "Accéder"
                             },
                             "de": {
                               "location_notice_full": "Sie scheinen sich in <strong>{{country}}</strong> zu befinden. Möchten Sie zu Ihrer lokalen Website wechseln, um Produkte, Preise und Inhalte für Ihre Region zu sehen?",
                               "current_region_label": "Ihre aktuelle Region ist:",
                               "cancel_button": "Abbrechen",
                               "update_button": "Wechseln"
                             },
                             "ar": {
                               "location_notice_full": "يبدو أنك تزور الموقع من <strong>{{country}}</strong>. هل ترغب في الانتقال إلى موقعك المحلي للحصول على المنتجات الإقليمية والأسعار والمحتوى؟",
                               "current_region_label": "منطقتك الحالية هي",
                               "cancel_button": "إلغاء",
                               "update_button": "تحديث"
                             },
                             "es": {
                               "location_notice_full": "Parece que nos está visitando desde <strong>{{country}}</strong>. ¿Desea cambiar a su página local para obtener productos, precios y contenido de su región?",
                               "current_region_label": "Su región actual es:",
                               "cancel_button": "Cancelar",
                               "update_button": "Cambiar"
                             },
                             "id": {
                               "location_notice_full": "Anda tampaknya mengunjungi situs dari <strong>{{country}}</strong>. Ingin beralih ke situs lokal untuk produk, harga, dan konten regional?",
                               "current_region_label": "Wilayah Anda saat ini adalah:",
                               "cancel_button": "Batal",
                               "update_button": "Pembaruan"
                             },
                             "it": {
                               "location_notice_full": "Sembra che tu stia visitando il sito dall'<strong>{{country}}</strong>. Vuoi passare al sito locale per visualizzare prodotti, prezzi e contenuti specifici per la tua area?",
                               "current_region_label": "La tua regione attuale è:",
                               "cancel_button": "Annulla",
                               "update_button": "Passa al sito locale"
                             },
                             "ja": {
                               "location_notice_full": "<strong>{{country}}</strong> からアクセスされているようです。その地域のサイトに変更して、製品、料金体系、コンテンツをご覧になりますか。",
                               "current_region_label": "現在閲覧中のサイトの地域:",
                               "cancel_button": "キャンセル",
                               "update_button": "変更"
                             },
                             "ko": {
                               "location_notice_full": "<strong>{{country}}</strong>에서 방문하시는 것 같습니다. 지역 제품, 가격 및 콘텐츠를 볼 수 있도록 현지 사이트로 전환하시겠어요?",
                               "current_region_label": "현재 지역:",
                               "cancel_button": "취소",
                               "update_button": "업데이트"
                             },
                             "pt": {
                               "location_notice_full": "Parece que você está acessando do <strong>{{country}}</strong>. Deseja mudar para o site local para visualizar produtos, preços e conteúdos regionais?",
                               "current_region_label": "Sua região atual é:",
                               "cancel_button": "Cancelar",
                               "update_button": "Atualizar"
                             },
                             "zh": {
                               "location_notice_full": "检测到您正在从 <strong>{{country}}</strong> 访问。您是否切换到该地区的页面获取产品、定价和内容？",
                               "current_region_label": "您当前访问的页面所在地区:",
                               "cancel_button": "取消",
                               "update_button": "确认"
                             }
   };
   function waitForDigitalData(timeout = 5000) {
     return new Promise((resolve, reject) => {
       const start = Date.now();

       function check() {
         if (
           window.digitalData?.user?.location?.country &&
           window.digitalData?.page?.pageInfo?.ibm?.country
         ) {
           resolve();
         } else if (Date.now() - start >= timeout) {
           reject("digitalData not available");
         } else {
           setTimeout(check, 100);
         }
       }

       check();
     });
   }


   function onDocumentReady() {
     waitForDigitalData()
       .then(async () => {
         let pageCountry = window.digitalData.page.pageInfo.ibm.country;
         let geoUserCountry = window.digitalData.user.location.country;
         if (geoUserCountry === "GB") geoUserCountry = "UK";

         const geoUserLanguage = getUserLanguageFromHrefLang(geoUserCountry);
         const userLangCode = geoUserLanguage.split('-')[0];

         const regionFormatter = new Intl.DisplayNames([geoUserLanguage], {
           type: 'region'
         });
         const languageFormatter = new Intl.DisplayNames([geoUserLanguage], {
           type: 'language'
         });
         const countryDisplayName = regionFormatter.of(geoUserCountry);
         const languageDisplayName = languageFormatter.of(geoUserLanguage);

         countryModal({
           pageCountry,
           geoUserCountry,
           geoUserLanguage,
           userLangCode,
           countryDisplayName,
           languageDisplayName
         });
       })
       .catch(err => {
         console.warn("digitalData not available in time:", err);
       });
   }

   if (document.readyState !== "loading") {
       onDocumentReady();
   } else {
       document.addEventListener("DOMContentLoaded", onDocumentReady);
   }
   function getUserLanguageFromHrefLang(geoUserCountry) {
       const userCountry = geoUserCountry.toLowerCase();
       const linkElements = document.querySelectorAll('link[rel="alternate"][hreflang]');

       for (const link of linkElements) {
           const hreflang = link.getAttribute('hreflang').toLowerCase();

           const parts = hreflang.split('-');
           if (parts.length === 2 && parts[1] === userCountry) {
               return hreflang;
           }
       }

       return null;
   }

   function capitalize(text) {
       return text.charAt(0).toUpperCase() + text.slice(1);
   }

   function capitalizeWords(text) {
       return text.split(' ').map(word => capitalize(word)).join(' ');
   }

   function getCurrentRegion(geoUserLanguage) {
       const countryCodeMeta = document.querySelector("meta[name='countryCode']");
       const languageCodeMeta = document.querySelector("meta[name='languageCode']");
       const languageCode = geoUserLanguage.toLowerCase();
       const displayNames = new Intl.DisplayNames(languageCode, {
           type: 'region'
       });
       const languageDisplayNames = new Intl.DisplayNames(languageCode, {
           type: 'language'
       });
       const pageLanguageCode = languageCodeMeta.content.toLowerCase();

       if (!countryCodeMeta || !languageCodeMeta) {
           return {
               country: "Unknown",
               language: "Unknown"
           };
       }

       const countryCode = countryCodeMeta.content.toUpperCase();

       let regionName = displayNames.of(countryCode) || countryCode;
       let languageName = languageDisplayNames.of(pageLanguageCode) || pageLanguageCode;

       if (languageName.toLowerCase() === "chinese") {
           languageName = "Simplified Chinese";
       }

       return {
           country: capitalize(regionName),
           language: capitalize(languageName)
       };
   }

   function categorizeLinks(geoUserLanguage) {
       const links = document.querySelectorAll("link[rel='alternate']");
       const categorizedLinks = [];
       const currentRegion = getCurrentRegion(geoUserLanguage);

       const metaTag = document.querySelector("meta[name='languageCode']");
       const displayNames = new Intl.DisplayNames(geoUserLanguage.toLowerCase(), {
           type: 'region'
       });
       const languageDisplayNames = new Intl.DisplayNames(geoUserLanguage.toLowerCase(), {
           type: 'language'
       });

       links.forEach(link => {
           const hreflang = link.getAttribute("hreflang");
           const href = link.getAttribute("href");

           if (countryLanguageMap[hreflang]) {
               const regionCode = hreflang.split('-')[1].toUpperCase();
               let translatedCountryName = displayNames.of(regionCode) || countryLanguageMap[hreflang].country;
               const originalLanguage = countryLanguageMap[hreflang].language;
               let translatedLanguage = originalLanguage;

               const bracketMatch = originalLanguage.match(/\((.*?)\)/);
               if (bracketMatch) {
                   const bracketText = bracketMatch[1];
                   const languageCode = hreflang.split('-')[0];
                   let translatedBracketText = languageDisplayNames.of(languageCode) || bracketText;

                   if (translatedBracketText.toLowerCase() === "chinese") {
                       translatedBracketText = "Simplified Chinese";
                   }

                   translatedBracketText = capitalizeWords(translatedBracketText);

                   if (originalLanguage.trim().toLowerCase() === "english (english)") {
                       translatedLanguage = "English (".concat(translatedBracketText).concat(")");
                   } else {
                       translatedLanguage = originalLanguage.replace(bracketText, translatedBracketText);
                   }
               }

               translatedCountryName = capitalize(translatedCountryName);
               translatedLanguage = capitalize(translatedLanguage);

               categorizedLinks.push({
                   hreflang: hreflang,
                   href: href,
                   countryInfo: {
                       country: translatedCountryName,
                       language: translatedLanguage
                   }
               });

           }
       });

       return categorizedLinks;
   }

   function getDisplayCountryNameFromCode(code, languageTag) {
       const regionFormatter = new Intl.DisplayNames([languageTag], {
           type: 'region'
       });
       return capitalize(regionFormatter.of(code));
   }

   function isGeoCountryInAlternateLinks(geoCountryCode) {
       const alternates = document.querySelectorAll("link[rel='alternate']");
       for (const link of alternates) {
           const hreflang = link.getAttribute("hreflang");
           if (hreflang?.includes("-")) {
               const countryCode = hreflang.split("-")[1].toUpperCase();
               if (countryCode === geoCountryCode) {
                   return true;
               }
           }
       }
       return false;
   }

   function showDropdownCanada(geoUserCountry, links) {
       const isCanada = geoUserCountry === "CA";

       if (!isCanada) {
           return false;
       }

       const hasEnglish = links.some(link => link.hreflang?.toLowerCase() === "en-ca");
       const hasFrench = links.some(link => link.hreflang?.toLowerCase() === "fr-ca");

       return hasEnglish && hasFrench;
   }

   function createCheckIcon() {
       const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
       checkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
       checkIcon.setAttribute("width", "16");
       checkIcon.setAttribute("height", "16");
       checkIcon.setAttribute("viewBox", "0 0 32 32");
       checkIcon.setAttribute("class", "geo-check-icon");

       const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
       polygon.setAttribute("points", "13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24");

       checkIcon.appendChild(polygon);
       return checkIcon;
   }

   function createGeoPinIcon() {
       const svgNS = "http://www.w3.org/2000/svg";
       const svgIcon = document.createElementNS(svgNS, "svg");
       svgIcon.setAttribute("xmlns", svgNS);
       svgIcon.setAttribute("viewBox", "0 0 32 32");
       svgIcon.setAttribute("width", "16");
       svgIcon.setAttribute("height", "16");
       svgIcon.classList.add("geo-pin-icon");


       const defs = document.createElementNS(svgNS, "defs");
       const style = document.createElementNS(svgNS, "style");
       style.textContent = `.cls-1 { fill: none; }`;
       defs.appendChild(style);
       svgIcon.appendChild(defs);

       const path = document.createElementNS(svgNS, "path");
       path.setAttribute("d", "M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm0,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,17Z");
       svgIcon.appendChild(path);

       const circle = document.createElementNS(svgNS, "circle");
       circle.setAttribute("cx", "16");
       circle.setAttribute("cy", "13");
       circle.setAttribute("r", "4");
       circle.setAttribute("class", "cls-1");
       svgIcon.appendChild(circle);

       const rect = document.createElementNS(svgNS, "rect");
       rect.setAttribute("width", "32");
       rect.setAttribute("height", "32");
       rect.setAttribute("class", "cls-1");
       svgIcon.appendChild(rect);

       return svgIcon;
   }

   function setupGeoMessage({countryDisplayName,userLangCode}) {
       const userMessages = i18nMessages[userLangCode] || i18nMessages["en"];
       const geoTextTemplate = userMessages["location_notice_full"] || "";
       const finalGeoText = geoTextTemplate.replace("{{country}}", countryDisplayName);
       const message = document.createElement("p");
       message.className = "geo-message";
       message.innerHTML = finalGeoText;

       const geoModalBody = document.querySelector(".geo-modal-body");
       if (geoModalBody) {
           const oldMessage = geoModalBody.querySelector(".geo-message");
           if (oldMessage) oldMessage.remove();

           geoModalBody.prepend(message);
       }
   }

    function countryModal({pageCountry,geoUserCountry,geoUserLanguage,userLangCode,countryDisplayName,languageDisplayName}) {
      if (sessionStorage.getItem("geoModalDismissed") === "true") {
       return;
      }
       if (pageCountry !== geoUserCountry && isGeoCountryInAlternateLinks(geoUserCountry)) {
           var currentRegion = getCurrentRegion(geoUserLanguage);
           var userCountryDisplayName = getDisplayCountryNameFromCode(geoUserCountry,userLangCode);

           //alert( pageCountry.toLowerCase() +"-"+ userLangCode);
            adobeDataLayer.push({
    "event": "modalImpression",
    "_ibm": {
        "modal": {
            "impression": {
                "value": 1
            },
            "name": "locale modal:load",
            "locale": {
                "currentLocale":  pageCountry.toLowerCase() +"-"+ userLangCode
            }
        }
    },
    "web": {
        "webInteraction": {
            "name": "locale modal:load",
            "type": "other"
        }
    }
});
           if (!document.getElementById("geoMismatchModal")) {
               const modal = document.createElement("div");
               modal.id = "geoMismatchModal";
               modal.setAttribute("lang", userLangCode);
               if (userLangCode === "ar") {
                 modal.setAttribute("dir", "rtl");
               } else {
                  modal.setAttribute("dir", "ltr");
               }

               const dialog = document.createElement("div");
               dialog.className = "geo-modal-dialog";

               const closeBtn = document.createElement("button");
               closeBtn.className = "geo-modal-close-icon";
               closeBtn.setAttribute("aria-label", "Close modal");
               closeBtn.innerHTML = `&times;`;
               dialog.appendChild(closeBtn);

               const header = document.createElement("div");
               header.className = "geo-modal-header";
               const titleLabel = document.createElement("div");

               const userMessages = i18nMessages[userLangCode] || i18nMessages["en"];
               const currentRegionText = userMessages["current_region_label"] || "Your Current Region: ";

               titleLabel.textContent = currentRegionText;
               titleLabel.className = "geo-region-label";

               const regionValue = document.createElement("div");
               regionValue.className = "user-region";
               const regionContainer = document.createElement("div");
               regionContainer.className = "geo-region-value";

               const pinIcon = document.createElement("span");
               pinIcon.className = "geo-pin";
               pinIcon.appendChild(createGeoPinIcon());

               const regionText = document.createElement("span");
               regionText.className = "geo-region-text";
               regionText.textContent = `${currentRegion.country} (${currentRegion.language})`;

               regionContainer.appendChild(pinIcon);
               regionContainer.appendChild(regionText);
               regionValue.appendChild(regionContainer);

               header.appendChild(titleLabel);
               header.appendChild(regionValue);


               const body = document.createElement("div");
               body.className = "geo-modal-body";

               let matchedLabel = "Select your region";

               let links = categorizeLinks(geoUserLanguage);
               let selectedLink = null;
               links = links.filter(link => {
                   const label = `${link.countryInfo.country} – ${link.countryInfo.language}`;
                   if (userCountryDisplayName && link.countryInfo.country === userCountryDisplayName) {
                       matchedLabel = label;
                       selectedLink = link;
                   }

                   return (
                       link.countryInfo.country !== currentRegion.country ||
                       link.countryInfo.language !== currentRegion.language
                   );
               });
               if (geoUserCountry === "CA") {
                   const frenchLink = links.find(link => link.hreflang?.toLowerCase() === "fr-ca");
                   if (frenchLink) {
                       matchedLabel = `${frenchLink.countryInfo.country} – ${frenchLink.countryInfo.language}`;
                       selectedLink = frenchLink;
                   }
               }
               const selectWrapper = document.createElement("div");
               selectWrapper.className = "geo-select-wrapper";

               const showDropdown = showDropdownCanada(geoUserCountry, links);
               const canadaLinks = links.filter(link => {
                   const hreflang = link.hreflang?.toLowerCase();
                   return hreflang === "en-ca" || hreflang === "fr-ca";
               });

               if (showDropdown) {
                   const toggleButton = document.createElement("button");
                   toggleButton.id = "geo-dropdown-toggle";
                   toggleButton.textContent = matchedLabel;
                   selectWrapper.appendChild(toggleButton);

                   const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                   svgIcon.setAttribute("focusable", "false");
                   svgIcon.setAttribute("preserveAspectRatio", "xMidYMid meet");
                   svgIcon.setAttribute("fill", "currentColor");
                   svgIcon.setAttribute("name", "chevron--down");
                   svgIcon.setAttribute("aria-label", "Open menu");
                   svgIcon.setAttribute("width", "16");
                   svgIcon.setAttribute("height", "16");
                   svgIcon.setAttribute("viewBox", "0 0 16 16");
                   svgIcon.setAttribute("role", "img");
                   svgIcon.innerHTML = `
                <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                <title>Open menu</title>
                `;
                   svgIcon.classList.add("geo-select-icon");
                   toggleButton.appendChild(svgIcon);

                   const dropdownList = document.createElement("ul");
                   dropdownList.id = "geo-dropdown-options";
                   dropdownList.style.display = "none";
                   selectWrapper.appendChild(dropdownList);



                   toggleButton.onclick = () => {
                       const isOpen = dropdownList.style.display === "block";
                       dropdownList.style.display = isOpen ? "none" : "block";
                       svgIcon.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

                       const titleElement = svgIcon.querySelector("title");
                       if (titleElement) {
                           titleElement.textContent = isOpen ? "Open menu" : "Close menu";
                       }
                       svgIcon.classList.toggle("geo-chevron-rotate", !isOpen);
                   };

                   canadaLinks.sort((a, b) => a.countryInfo.country.localeCompare(b.countryInfo.country));
                   const regionListContainer = document.createElement("div");
                   regionListContainer.className = "geo-region-list-container";

                   canadaLinks.forEach(link => {
                       const listItem = document.createElement("li");
                       listItem.className = "geo-option-value";
                       listItem.style.display = "flex";
                       listItem.style.justifyContent = "space-between";
                       listItem.style.alignItems = "center";

                       const textSpan = document.createElement("span");
                       const labelText = `${link.countryInfo.country} – ${link.countryInfo.language}`;
                       textSpan.textContent = labelText;
                       listItem.appendChild(textSpan);

                       if (labelText === matchedLabel) {
                           listItem.appendChild(createCheckIcon());
                       }

                       listItem.onclick = () => {
                           toggleButton.textContent = labelText;
                           toggleButton.appendChild(svgIcon);
                           selectedLink = link;
                           dropdownList.style.display = "none";

                           svgIcon.setAttribute("aria-label", "Open menu");
                           svgIcon.querySelector("title").textContent = "Open menu";
                           svgIcon.classList.remove("geo-chevron-rotate");

                           document.querySelectorAll("#geo-dropdown-options li").forEach(li => {
                               const icon = li.querySelector(".geo-check-icon");
                               if (icon) icon.remove();
                           });
                           listItem.appendChild(createCheckIcon());
                       };

                       regionListContainer.appendChild(listItem);
                   });

                   dropdownList.appendChild(regionListContainer);
               }
               body.appendChild(selectWrapper);

               const footer = document.createElement("div");
               footer.className = "geo-modal-footer";

               const cancelBtn = document.createElement("button");
               cancelBtn.className = "geo-btn geo-btn-secondary-cancel";
               cancelBtn.textContent = userMessages["cancel_button"] || "Cancel";

               const updateBtn = document.createElement("button");
               updateBtn.className = "geo-btn geo-btn-primary-update";
               updateBtn.textContent = userMessages["update_button"] || "Update";

               footer.appendChild(cancelBtn);
               footer.appendChild(updateBtn);

               dialog.appendChild(header);
               dialog.appendChild(body);
               dialog.appendChild(footer);
               modal.appendChild(dialog);
               document.body.appendChild(modal);

               modal.style.display = "flex";
               setupGeoMessage({ countryDisplayName, userLangCode });

               cancelBtn.addEventListener("click", () => {
                   adobeDataLayer.push({
    "event": "interactionClick",
    "_ibm": {
        "interaction": {
            "click": {
                "value": 1
            },
            "name": "locale modal:cancel",
            "locale": {
                "localeModalClick": {
                    "value": 1
                },

                "currentLocale":  pageCountry.toLowerCase() +"-"+ userLangCode
            }
        }
    },
    "web": {
        "webInteraction": {
            "linkClicks": {
                "value": 1
            },
            "name": "locale modal:cancel",
            "type": "other"
        }
    }
});
                  modal.style.display = "none";
                  sessionStorage.setItem("geoModalDismissed", "true");
               });

               updateBtn.addEventListener("click", () => {
                   var parts = geoUserLanguage.split("-");
				var reversed = parts[1] + "-" + parts[0];
                   adobeDataLayer.push({
    "event": "interactionClick",
    "_ibm": {
        "interaction": {
            "click": {
                "value": 1
            },
            "name": "locale modal:update",
            "locale": {
                "localeModalClick": {
                    "value": 1
                },

                 "localeUpdate": pageCountry.toLowerCase() +"-"+ userLangCode+" | "+ reversed, // “current | new” ,
                "currentLocale":  pageCountry.toLowerCase() +"-"+ userLangCode
            }
        }
    },
    "web": {
        "webInteraction": {
            "linkClicks": {
                "value": 1
            },
            "name": "locale modal:update",
            "type": "other"
        }
    }
});

                  sessionStorage.setItem("geoModalDismissed", "true");
                   if (selectedLink && selectedLink.href) {
                       window.open(selectedLink.href, "_self");
                   } else {
                       console.log("No region selected.");
                   }
               });
               closeBtn.addEventListener("click", () => {
                   adobeDataLayer.push({
    "event": "interactionClick",
    "_ibm": {
        "interaction": {
            "click": {
                "value": 1
            },
            "name": "locale modal:x",
            "locale": {
                "localeModalClick": {
                    "value": 1
                },

                "currentLocale":  pageCountry.toLowerCase() +"-"+ userLangCode
            }
        }
    },
    "web": {
        "webInteraction": {
            "linkClicks": {
                "value": 1
            },
            "name": "locale modal:x",
            "type": "other"
        }
    }
});

                   modal.style.display = "none";
                   sessionStorage.setItem("geoModalDismissed", "true");
               });
           }
       }
   }
});

