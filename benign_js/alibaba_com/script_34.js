/* 元のURL: https://alibaba.com */

    try{
        var loadScript = function (url, callback) {
          var script = document.createElement('script');
          script.src = url;
          script.async = true;
          if (script.addEventListener) {
            script.addEventListener('load', function () {
              callback();
            }, false);
          } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function () {
              var target = window.event.srcElement;
              if (target.readyState === 'loaded') {
                callback();
              }
            });
          }
          document.body.appendChild(script);
        };
        
        var loadCss = function (url) {
          var style = document.createElement('link');
          style.rel = 'stylesheet';
          style.href = url;
          document.head.appendChild(style);
        }

        window.BzEvaluate = {};
        window.BzEvaluate.loadSurvey = function (params) {
          loadScript('https://air.alibaba.com/app/sc-assets/bz-evaluate/pages_version.html', function () {
            // 加载css
            loadCss('https://s.alicdn.com/@g/sc-assets/bz-evaluate/' + window._BZ_VERSION_.version + '/pages/survey/index.web.css', 'css');
            // 加载js
            loadScript('https://s.alicdn.com/@g/sc-assets/bz-evaluate/'+ window._BZ_VERSION_.version + '/pages/survey/index.web.js', function () {
              // 执行页面渲染
              window.BzEvaluate.render(params);
            });
          });
        }
        
        var bz_survey_config_scene = "";
        
        if(location.href.indexOf('profile.alibaba.com/profile/buyer_selection.htm') > -1){
            // 买家选品
            bz_survey_config_scene = 'ma_buyer_selection_questionnaire_location';
        } else if (/^https:\/\/www.alibaba.com\/trueview\/.*(_\d+.html)$/.test(location.href)) {
            // true view 沉浸页
            bz_survey_config_scene = 'true_view_questionnaire_location';
        } else if (location.href.indexOf('www.alibaba.com/trade/search') > -1) {
            // 搜索页
            bz_survey_config_scene = 'search_list_questionnaire_location';
        } else if (location.hostname == 'www.alibaba.com' && location.pathname === '/') {
            // 首页
            bz_survey_config_scene = 'buyer_pc_home_questionnaire_location';
        } else if (location.href.indexOf('www.alibaba.com/live/') > -1 || location.href.indexOf('watch.alibaba.com/v/') > -1 ) {
            // 直播
            bz_survey_config_scene = 'live_room_questionnaire_location';
        } else if (/^https:\/\/i\.alibaba\.com\/globalBuyerIndex\.htm/.test(location.href)
            || location.href.indexOf('i.alibaba.com/buyer/home') > -1
        ) {
            bz_survey_config_scene = 'buyer_pc_ma_questionnaire_location';
        }
         
        
        if(bz_survey_config_scene){
                                    
            window.addEventListener('load', function(event) {
                window.BzEvaluate.loadSurvey({
                    type: 'dialog',
                    link: 'https://air.alibaba.com/app/sc-assets/bz-evaluate/pages_survey.html?bizCode=' + bz_survey_config_scene + '&status=none&targetType=BUYER',
                    style: {
                        bottom: '100px',
                        right: 0,  
                    },
                    callback: function () {}
                });
            });
        }
    }catch(e){
        
    }


