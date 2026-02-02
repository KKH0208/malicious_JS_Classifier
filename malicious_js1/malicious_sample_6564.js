jQuery(function($) {
			 $('.hasTip').each(function() {
				var title = $(this).attr('title');
				if (title) {
					var parts = title.split('::', 2);
					var mtelement = document.id(this);
					mtelement.store('tip:title', parts[0]);
					mtelement.store('tip:text', parts[1]);
				}
			});
			var JTooltips = new Tips($('.hasTip').get(), {"maxTitleChars": 50,"fixed": false});
		});
window["WIDGETKIT_URL"]="/media/widgetkit";
function wk_ajax_render_url(widgetid){ return "/index.php/component/widgetkit/?format=raw&id="+widgetid}
$widgetkit.load('/media/widgetkit/widgets/lightbox/js/lightbox.js').done(function(){ 
					jQuery(function($){
						setTimeout(function() { 
							$('a[data-lightbox]').lightbox({"titlePosition":"float","transitionIn":"fade","transitionOut":"fade","overlayShow":1,"overlayColor":"#777","overlayOpacity":0.7}); 
						}, 500);
					});
			});
$widgetkit.trans.addDic({"FROM_ADDRESS":"Indirizzo di partenza: ","GET_DIRECTIONS":"Ottieni indicazioni","FILL_IN_ADDRESS":"Inserisci il tuo indirizzo.","ADDRESS_NOT_FOUND":"Spiacente, indirizzo non trovato!","LOCATION_NOT_FOUND":", non trovato!"});
if (!window['mejs']) { $widgetkit.load('/media/widgetkit/widgets/mediaplayer/mediaelement/mediaelement-and-player.js').done(function() { jQuery(function($){
				mejs.MediaElementDefaults.pluginPath='/media/widgetkit/widgets/mediaplayer/mediaelement/';
				$('video,audio').each(function(){
					var ele = $(this);
					if (!ele.parent().hasClass('mejs-mediaelement')) {
						ele.data('mediaelement',new mejs.MediaElementPlayer(this, {"pluginPath":"\/media\/widgetkit\/widgets\/mediaplayer\/mediaelement\/"}));

						var w = ele.data('mediaelement').width, h = ele.data('mediaelement').height;

						$.onMediaQuery('(max-width: 767px)', {
							valid: function(){
								ele.data('mediaelement').setPlayerSize('100%', ele.is('video') ? '100%':h);
							},
							invalid: function(){
								var parent_width = ele.parent().width();

								if (w>parent_width) {
									ele.css({width:'',height:''}).data('mediaelement').setPlayerSize('100%', '100%');
								} else {
									ele.css({width:'',height:''}).data('mediaelement').setPlayerSize(w, h);
								}
							}
						});

						if ($(window).width() <= 767) {
							ele.data('mediaelement').setPlayerSize('100%', ele.is('video') ? '100%':h);
						}
					}
				});
			}); });} else { jQuery(function($){
				mejs.MediaElementDefaults.pluginPath='/media/widgetkit/widgets/mediaplayer/mediaelement/';
				$('video,audio').each(function(){
					var ele = $(this);
					if (!ele.parent().hasClass('mejs-mediaelement')) {
						ele.data('mediaelement',new mejs.MediaElementPlayer(this, {"pluginPath":"\/media\/widgetkit\/widgets\/mediaplayer\/mediaelement\/"}));

						var w = ele.data('mediaelement').width, h = ele.data('mediaelement').height;

						$.onMediaQuery('(max-width: 767px)', {
							valid: function(){
								ele.data('mediaelement').setPlayerSize('100%', ele.is('video') ? '100%':h);
							},
							invalid: function(){
								var parent_width = ele.parent().width();

								if (w>parent_width) {
									ele.css({width:'',height:''}).data('mediaelement').setPlayerSize('100%', '100%');
								} else {
									ele.css({width:'',height:''}).data('mediaelement').setPlayerSize(w, h);
								}
							}
						});

						if ($(window).width() <= 767) {
							ele.data('mediaelement').setPlayerSize('100%', ele.is('video') ? '100%':h);
						}
					}
				});
			});; }
$widgetkit.load('/media/widgetkit/widgets/spotlight/js/spotlight.js').done(function(){jQuery(function($){ $('[data-spotlight]').spotlight({"duration":300}); });});
$widgetkit.trans.addDic({"LESS_THAN_A_MINUTE_AGO":"less than a minute ago","ABOUT_A_MINUTE_AGO":"about a minute ago","X_MINUTES_AGO":"%s minutes ago","ABOUT_AN_HOUR_AGO":"about an hour ago","X_HOURS_AGO":"about %s hours ago","ONE_DAY_AGO":"1 day ago","X_DAYS_AGO":"%s days ago"});