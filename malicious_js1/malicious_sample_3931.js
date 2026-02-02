function handleTweets(tweets){
				var x = tweets.length;
				var n = 0;
				var element = document.getElementById('sns_twitter');
				var html = '<ul>';
				while(n < x) {
					html += '<li>' + tweets[n] + '</li>';
					n++;
				}
				html += '</ul>';
				element.innerHTML = html;
			}
			function dateFormater(date) {
				return date.toDateString();
			}
			jQuery(document).ready(function(){
				var widgetid = '715563173181579264';
				var limit = 5;
			//	twitterFetcher.fetch(widgetid, 'sns_twitter', limit, true, true, true, '', true);
				twitterFetcher.fetch(widgetid, 'sns_twitter', limit, true, true, true, '', false, handleTweets);
			});