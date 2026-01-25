/* 元のURL: https://cloud.microsoft */

        var isSessionStorageAvailable = (function() {
            try {
                return !!window['sessionStorage'];
            } catch (e) {
                return false;
            }
        })();

        if (!true || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView' || 'Default' === 'M365LaunchApp') {
            document.body.style.display = "block";
        }
    

