/* 元のURL: https://checkpoint.com */
// 外部JS: https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/tmp_files/js/cp_nav.js?ver=6.8.1
var cpMobileWidth = 1024;
var initialized = false;
var cpNav = {
    resetOnload: function () {
        if(document.querySelector('#cp__header')) {
            document.querySelector('#cp__header .cp_main_menu').classList.remove('menu_active');
            document.querySelector('#cp__header').classList.remove('mobile_active');
            if (document.querySelector('#cp__header .open') || document.querySelector('#cp__footer .open')) {
                document.querySelectorAll('#cp__header .open, #cp__footer .open').forEach(function (el) {
                    el.classList.remove('open');
                });
            }
        }
        if (document.querySelector('#footer-desk-cookie-settings-link')) {
            document.querySelector('#footer-desk-cookie-settings-link').addEventListener('click', function (e) {
                e.preventDefault();
                if (typeof Optanon !== 'undefined' && typeof Optanon.ToggleInfoDisplay === 'function') {
                    Optanon.ToggleInfoDisplay();
                }
            });
        }
    },
    navInit: function () {
        document.querySelector('#cp__header .cp_nav-icon').addEventListener('click', (e) => {
            if (window.innerWidth <= cpMobileWidth) {
                document.querySelector('#cp__header').classList.toggle('mobile_active');
                if (document.querySelector('#cp__header .open')) {
                    document.querySelectorAll('#cp__header .open').forEach(function (el) {
                        el.classList.remove('open');
                    });
                }
            }
        });
        if (window.innerWidth > cpMobileWidth) {
            document.querySelectorAll('#cp__header .cp_menu__ul_compact').forEach(function (el) {
                var parent = el.parentNode,
                    right = window.innerWidth - parent.offsetLeft,
                    menuWidth = el.offsetWidth;
                if (right < menuWidth) {
                    el.classList.add('cp_menu__ul_compact_right');
                }
            });
        }
        document.addEventListener('click', (e) => {
            if (window.innerWidth > cpMobileWidth) {
                if ((document.querySelector('#cp__header .open') && e.target.offsetParent == null) ||
                    (document.querySelector('#cp__header .open') && !document.querySelector('#cp__header .open').contains(e.target))) {
                    cpNav.toggleDropdown(document.querySelector('#cp__header .open .expandable'), '#cp__header .open');
                }
            }
        });
        /* Level 1 desktop and mobile expand menu */
        document.querySelectorAll('.cp_menu__dropdown__button, .cp_menu__l1').forEach(function (menuItem) {
            menuItem.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (menuItem.classList.contains('cp_menu__l1')) {
                    cpNav.toggleDropdown(e.currentTarget, '#cp__header .open', true);
                } else {
                    cpNav.toggleDropdown(e.currentTarget, '#cp__header .open', false);
                    document.querySelector('#cp__header').classList.remove('mobile_active');
                    if (e.currentTarget.classList.contains('cp_menu__icon__search') && document.querySelector('#cp__header .cp_site_search__input')) {
                        document.querySelector('#cp__header .cp_site_search__input').focus();
                    }
                }
            });
        });
        /* Level 2 mobile only expand menu */
        document.querySelectorAll('.cp_menu__heading').forEach(function (menuItem) {
            menuItem.addEventListener('click', function (e) {
                if (window.innerWidth <= cpMobileWidth) {
                    e.preventDefault();
                    e.stopPropagation();
                    var otherDropdown = '#cp__header .cp_menu__l2.open';
                    if (document.querySelector('#cp__footer').contains(e.target)) {
                        otherDropdown = '#cp__footer .cp__footer_menu__li.open';
                    }
                    cpNav.toggleDropdown(e.currentTarget, otherDropdown);
                }
            });
        });
    },
    searchInit: function () {
        if (document.querySelector('#cp__header #cp_site_search')) {
            document.querySelector('#cp__header #cp_site_search').addEventListener('submit', function (e) {
                e.preventDefault();
                const searchTerm = encodeURIComponent(document.querySelector('#cp__header .cp_site_search__input').value);
                const searchUrl = 'https://www.checkpoint.com/search-results/?Search=#stq=' + searchTerm;
                window.location.href = searchUrl;
            });
        }
    },
    toggleDropdown: function (button, triggerSelector, bg = false) {
        var parent = button.parentNode,
            isOpen = parent.classList.contains('open'),
            openMenu = parent.querySelector('.expandable');
        if (document.querySelectorAll(triggerSelector).length > 0 && !isOpen) {
            var otherDropdown = document.querySelector(triggerSelector);
            otherDropdown.querySelector('[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
            otherDropdown.classList.remove('open');
            otherDropdown.querySelectorAll('.open').forEach(function (el) {
                el.classList.remove('open');
            });
            button.setAttribute('aria-expanded', 'true');
        } else {
            button.setAttribute('aria-expanded', !isOpen);
        }
        parent.classList.toggle('open');
        setTimeout(function () {
            var openMenuHeight = openMenu.offsetHeight + document.getElementById('cp__header').offsetHeight;
            if (openMenuHeight > window.innerHeight) {
                openMenu.classList.add('cp_menu__l3__scrollable');
            } else {
                openMenu.classList.remove('cp_menu__l3__scrollable');
            }
        }, 1000);
        if (bg && document.querySelector('.cp_menu__li.open')) {
            document.querySelector('.cp_main_menu').classList.add('menu_active');
        } else {
            document.querySelector('.cp_main_menu').classList.remove('menu_active');
        }
    }
}
if ((document.readyState == 'interactive' || document.readyState == 'complete') && !initialized) {
    cpNav.resetOnload();
    cpNav.searchInit();
    cpNav.navInit();
    initialized = true;
} else {
    document.addEventListener('readystatechange', function () {
        if ((document.readyState == 'interactive' || document.readyState == 'complete') && !initialized) {
            cpNav.resetOnload();
            cpNav.searchInit();
            cpNav.navInit();
            initialized = true;
        }
    });
}

