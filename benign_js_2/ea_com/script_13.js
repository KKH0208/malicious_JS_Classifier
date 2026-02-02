/* 元のURL: https://ea.com */

        (() => {
    function createElement(id, hidden) {
        const element = document.createElement("div");

        element.id = id;
        element.hidden = hidden;

        return element;
    }

    function createScriptTag() {
        const domain = document.querySelector('#ea-trustarc-script').dataset.domain;
        const script = document.createElement("script");
        let src = `//consent.trustarc.com/notice?domain=${domain}&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1&pn=1`;

        if (shouldAutoShowCookiePreferences()) {
            src = src + "&behavior=expressed";
        }

        script.src = src;
        script.setAttribute("crossorigin", "");

        return script;
    }

    function shouldAutoShowCookiePreferences() {
        const showCookiePreferencesParam = "show=cookiePreferences";
        const urlSearchParams = window.location.search.slice(1).split("&");

        return urlSearchParams.includes(showCookiePreferencesParam);
    }

    function isLocalNDS(componentUrlPrefix) {
        return componentUrlPrefix && componentUrlPrefix.includes('local');
    }

    function isNDSBranch(componentUrlPrefix) {
        return componentUrlPrefix && componentUrlPrefix.includes('branch');
    }

    function isNDSVersionGreaterOrEqual(componentUrlPrefix) {
        let ndsVersion = componentUrlPrefix && componentUrlPrefix.match('/release\/([^\/]*)/')[1];
        let isGreaterOrEqual = ndsVersion && ndsVersion.localeCompare("4.40.5", undefined, { numeric: true, sensitivity: 'base' });

        return isGreaterOrEqual >= 0;
    }

    const componentUrlPrefix = window.nds.componentUrlPrefix;

    /**
     * Check for backwards compatibility with NDS version greater or equal to when TrustArc was integrated
     */
    if (
        isLocalNDS(componentUrlPrefix) ||
        isNDSBranch(componentUrlPrefix) ||
        isNDSVersionGreaterOrEqual(componentUrlPrefix)
    )
    {
        const trustArcScript = createScriptTag();
        const elements = document.createDocumentFragment();

        elements.appendChild(createElement("consent_blackbar", false));
        elements.appendChild(createElement("teconsent", true));
        elements.appendChild(trustArcScript);

        document.body.appendChild(elements);
    }
})();

    

