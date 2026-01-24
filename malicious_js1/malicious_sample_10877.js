window.vkAsyncInit = function() {
                    VK.Observer.subscribe('widgets.comments.new_comment', function(num, last_comment, date, sign) {
                        var data = {
                            action: 'darx.comments',
                            provider: 'vk',
                            job: 'add',
                            id: document.getElementById("comments_post_id").value,
                            num: num,
                            last_comment: last_comment,
                            date: date,
                            sign: sign
                        };
                        darx.post('https://v-bezopasnosti.ru/wp-admin/admin-ajax.php', data);
                    });

                    VK.Observer.subscribe('widgets.comments.delete_comment', function(num, last_comment, date, sign) {
                        var data = {
                            action: 'darx.comments',
                            provider: 'vk',
                            job: 'remove',
                            id: document.getElementById("comments_post_id").value,
                            num: num,
                            last_comment: last_comment,
                            date: date,
                            sign: sign
                        };
                        darx.post('https://v-bezopasnosti.ru/wp-admin/admin-ajax.php', data);
                    });
                };