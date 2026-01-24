(function ($) {
        $('[data-uk-dropdown]')
            .on('show.uk.dropdown', function () {
                $('.uk-dropdown').css({
                    position: 'fixed',
                    left: 'unset',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '60%'
                })
                $('.uk-dropdown-shadow').show()
                if (!$('.js-added-menuitem').length) {
                    $('#menu-main_menu').append(
                        `<li class="menu-item menu-item-type-custom menu-item-object-custom js-added-menuitem">
                                    <a title="开户" href="https://www.papayamobile.com/form/ads" target="_blank">开户</a>
                                </li>`
                    );
                }
            })
            .on('hide.uk.dropdown', function () {
                $('.uk-dropdown-shadow').hide()
            })
    })(jQuery);