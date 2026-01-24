jQuery.noConflict();
/* base url */
var base_url = "https://www.tuek-klongthom.com";
var WPSC_URL = "https://www.tuek-klongthom.com/wp-content/plugins/wp-e-commerce";
var WPSC_IMAGE_URL = "https://www.tuek-klongthom.com/wp-content/uploads/wpsc/product_images/";
var WPSC_DIR_NAME = "wp-e-commerce";
/* LightBox Configuration start*/
var fileLoadingImage = "https://www.tuek-klongthom.com/wp-content/plugins/wp-e-commerce/images/loading.gif";
var fileBottomNavCloseImage = "https://www.tuek-klongthom.com/wp-content/plugins/wp-e-commerce/images/closelabel.gif";
var fileThickboxLoadingImage = "https://www.tuek-klongthom.com/wp-content/plugins/wp-e-commerce/images/loadingAnimation.gif";
var resizeSpeed = 9;  // controls the speed of the image resizing (1=slowest and 10=fastest)
var borderSize = 10;  //if you adjust the padding in the CSS, you will need to update this variable
jQuery(document).ready( function() {
  				jQuery("#sliding_cart").css({ display: "none"});  
				});