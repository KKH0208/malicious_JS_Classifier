$(function() {
        var updateTab = function(target) {
            var day = target.attr('data-meteo-tab'),
                tabs = target.closest('[data-meteo-tabs]'),
                content = tabs.find('[data-meteo-content=' + day + ']'),
                current = tabs.find('[data-meteo-tab].active'),
                currentContent = tabs.find('[data-meteo-content=' + current.attr('data-meteo-tab') + ']');

            if (current[0] !== target[0]) {
                target.addClass('active');
                current.removeClass('active');

                currentContent.removeClass('in');
                content.addClass('in');
            }
        };

        $(document).on('mouseenter', '[data-meteo-tab]', function() {
            updateTab($(this));
        });
        $(document).on('mouseleave', '[data-meteo-tabs]', function() {
            updateTab($(this).find('[data-meteo-tab]:first-child'));
        });
    })