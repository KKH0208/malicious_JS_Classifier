/* 元のURL: https://slack.com */
			(function (){
				const lazyImages = document.querySelectorAll('img.lazyload');
				const lazyBgImages = document.querySelectorAll('[data-bg]');
				if ('loading' in HTMLImageElement.prototype && !lazyBgImages.length) {
					lazyImages.forEach(img => {
						img.src = img.dataset.src;
						img.srcset = img.dataset.srcset;
						//add support for img tags wrapped by picture elements
						if (img.parentNode.tagName === 'PICTURE') {
							const picture = img.parentNode;
							for (source of picture.getElementsByTagName('SOURCE')) {
								source.srcset = source.dataset.srcset;
							}
						}
					});

				} else if ((lazyImages != null && lazyImages.length) || lazyBgImages.length){
					// Dynamically load the lazyload library if we have deferred images
					let script = document.createElement('script');
					script.src = "https:\/\/a.slack-edge.com\/bv1-13\/marketing-lazyload.6c044278094568b7f142.marketing.min.js";
					script.async = true;
					document.body.appendChild(script);

					//add simple support for background images:
					document.addEventListener('lazybeforeunveil', function(e){
						const bg = e.target.getAttribute('data-bg');
						if(bg){
							e.target.style.backgroundImage = 'url(' + bg + ')';
						}
					});
				}
			})();

