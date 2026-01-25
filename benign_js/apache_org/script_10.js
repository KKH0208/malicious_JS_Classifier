/* 元のURL: https://apache.org */

    // Randomizes an array of sponsors and injects them in the sponsor logos div
    const sponsors = [
        {
            name: "Apple",
            logo: "foundation/images/apple-platinum.png",
            url: "https://www.apple.com/"
        },
        {
            name: "Amazon Web Services",
            logo: "foundation/images/aws-platinum.png",
            url: "https://aws.amazon.com/"
        },
        {
            name: "Meta",
            logo: "foundation/images/meta-logo.png",
            url: "https://www.meta.com/about/"
        },
        {
            name: "GEICO",
            logo: "foundation/images/geico-platinum2.png",
            url: "https://www.geico.com/tech/"
        },
        {
            name: "Google",
            logo: "foundation/images/google.png",
            url: "http://google.com/"
        },
        {
            name: "Huawei",
            logo: "foundation/images/huawei-platinum.png",
            url: "http://huawei.com/"
        },
        {
            name: "Microsoft",
            logo: "foundation/images/microsoft.png",
            url: "https://microsoft.com/"
        },
        {
            name: "Pineapple Fund",
            logo: "foundation/images/pineapple_fund.png",
            url: "https://news.apache.org/foundation/entry/the-apache-software-foundation-receives"
        },
        {
            name: "Snowflake",
            logo: "foundation/images/snowflake-platinum.png",
            url: "https://www.snowflake.com/"
        },
        {
            name: "VISA",
            logo: "foundation/images/visa-platinum.png",
            url: "https://www.visa.com/"
        },
        {
            name: "Yahoo!",
            logo: "foundation/images/yahoo-platinum.png",
            url: "https://yahooinc.com/"
        }
    ];
    // randomize the sponsors array
    var randomSponsors = sponsors.sort(() => Math.random() - 0.5);
    // select first 8 sponsors
    var selectedSponsors = randomSponsors.slice(0, 8);
    // create HTML for each sponsor
    var sponsorHTML = '';
    selectedSponsors.forEach(function(sponsor) {
        sponsorHTML += '<div class="logo-card logo-card--sponsor">';
        sponsorHTML += '<img class="objec-fit-cover" loading="lazy" src="' + sponsor.logo + '" alt="' + sponsor.name + '">';
        sponsorHTML += '</div>';
    });
    const sponsorLogos = document.getElementById('sponsor-logos');
    sponsorLogos.innerHTML = sponsorHTML;


