/* 元のURL: https://bugsnag.com */

    const modal = document.querySelector(".js-tw-login-modal");
    const body = document.body;
    let firstFocus = true;

    const handleModalToggle = (isActive) => {
        modal.classList.toggle("active", isActive);
        body.classList.toggle("overflow-hidden", isActive);
        firstFocus = isActive;
        if (isActive) {
            modal.focus();
        }
    };

    if (modal) {
        [...document.querySelectorAll(".js-login-modal-trigger")].forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                handleModalToggle(true);
            });
        });

        [...document.querySelectorAll(".js-modal-close")].forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                handleModalToggle(false);
            });
        });

        modal.addEventListener("click", (e) => {
            if (!e.target.closest(".js-modal-content")) {
                handleModalToggle(false);
            }
        });
        const focusableElements = modal.querySelectorAll("button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])");
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                handleModalToggle(false);
            }

            if (e.key === "Tab" && modal.classList.contains("active") ) {
                if(firstFocus == true) {
                    modal.focus();
                    firstFocus = false;
                }else {
                    if(!e.shiftKey && e.target == focusableElements[focusableElements.length - 1]) {
                        focusableElements[0].focus();
                    }

                    if(e.shiftKey && e.target == focusableElements[0]) {
                        focusableElements[focusableElements.length - 1].focus();
                    }
                }
            }
        });
    }


