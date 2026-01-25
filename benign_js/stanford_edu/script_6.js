/* 元のURL: https://stanford.edu */
// 外部JS: https://www.stanford.edu/wp-content/plugins/stanford-fb-pixel/pixel.js?ver=1.0.1
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1199096620574484'); // “stanford.edu Global Pixel - May 2021" (global pixel)
if ( typeof sufbpOptions === 'object' && 'sufbp_pixel_id' in sufbpOptions && sufbpOptions.sufbp_pixel_id !== "" ) {
  fbq('init', sufbpOptions.sufbp_pixel_id ); // site-specific pixel from Settings > Stanford FB Pixel
}
fbq('track', 'PageView'); // Add both init lines *before* this PageView track line so a PageView is recorded for *all* pixels.

