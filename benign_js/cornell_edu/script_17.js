/* 元のURL: https://cornell.edu */
// 外部JS: https://www.cornell.edu/assets/js/cookie-monster.js?ver=20250309
// cookie monster
(function manageCookies() {
    const DELETE_THRESHOLD = 5000;  // Threshold to start deleting cookies
    const TARGET_THRESHOLD = 1000;  // Threshold to delete back to
    const TARGET_DOMAIN = "cornell.edu"; // Target domain for deletion (root domain)
    const API_ENDPOINT = "/_tasks/cookie_cleanup/"; // API endpoint to report deleted cookies

    function getAllCookies() {
        return document.cookie.split('; ').map(cookie => {
            const [name, value] = cookie.split('=');
            return { name, value, length: cookie.length };
        }).sort((a, b) => b.length - a.length); // Sort by length, longest first
    }

    function getTotalCookieLength() {
        return document.cookie.length;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${TARGET_DOMAIN}`;
       // console.log(`Deleted cookie: ${name} (Domain: ${TARGET_DOMAIN})`);
    }

    function sendCleanupReport(startLength, deletedCount, endLength) {
        fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                start_length: startLength,
                deleted_count: deletedCount,
                end_length: endLength
            })
        }).then(response => response.json())
          .then(data => console.log("Cleanup report sent:", data))
          .catch(error => console.error("Error sending cleanup report:", error));
    }

    function manageCookieSize() {
        let startLength = getTotalCookieLength();
        let totalLength = startLength;
        let deletedCount = 0;

        if (totalLength > DELETE_THRESHOLD) {
            //console.log(`Total cookie size (${totalLength}) exceeds ${DELETE_THRESHOLD}. Deleting cookies...`);
            let cookies = getAllCookies();

            while (totalLength > TARGET_THRESHOLD && cookies.length > 0) {
                let longestCookie = cookies.shift();
                deleteCookie(longestCookie.name);
                deletedCount++;
                totalLength = getTotalCookieLength();
            }

            //console.log(`Cookie size now under ${TARGET_THRESHOLD}: ${totalLength}`);

            // Send cleanup report
            sendCleanupReport(startLength, deletedCount, totalLength);
        } else {
           // console.log(`Total cookie size (${totalLength}) is within limits.`);
        }
    }

    manageCookieSize();
})();

