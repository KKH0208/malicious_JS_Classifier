/* 元のURL: https://cisco.com */

    function makeTargetedComponentVisible(componentID) {
        var targetedComponent = undefined;
        if( document.readyState !== 'loading' ) {
            targetedComponent = document.getElementById(componentID);
            if (targetedComponent)
                targetedComponent.style.visibility = 'visible';
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                targetedComponent = document.getElementById(componentID);
                if (targetedComponent)
                    targetedComponent.style.visibility = 'visible';
            });
        }
    }


