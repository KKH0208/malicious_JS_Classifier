/* 元のURL: https://nginx.com */

                window.addEventListener('load', function() {
                    $('.u02a-nav__col').each(function(index, value) {
                        const $h4 = $(this).find('h4');
                        const $panel = $(this).find('ul');
                        if ($h4.length && $panel.length) {
                            const colName = $h4.text().toLowerCase().replace(/ /g,'_') + '_' + index;
                            const colHeader = colName + '_header';
                            const colPanel = colName + '_panel';
                            $h4.attr('id', colHeader);
                            $h4.attr('aria-controls', colPanel);
                            $panel.attr('id', colPanel);
                            $panel.attr('aria-labelledby', colHeader);
                        }
                    });
                });
            

