/* 元のURL: https://tp-link.com */

                    $(function () {
                      var followTitle = $('.tp-follow-title');
                      var followIcon = followTitle.find('.tp-follow-icon');
                      var followTip = followTitle.find('tp-follow-tip');
                      followIcon.on('click', function () {
                        if (followTitle.hasClass('active')) {
                          followTitle.removeClass('active');
                          $(this).attr('aria-expanded',false);
                        } else {
                          followTitle.addClass('active');
                          followTip.focus()
                          $(this).attr('aria-expanded',true);
                        }
                      })
                    });
                    if(typeof tp !== 'undefined'){
                      tp.subscription($("form.tp-follow-subscribe-form"), $(".tp-follow-subscribe-tpl").html())
                    };
                  

