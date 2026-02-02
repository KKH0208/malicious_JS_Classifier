//<![CDATA[

/** CÀI ĐẶT CHÍNH VÀ CHỮ */

/**1. Cài đặt chính. Nếu bạn muốn thay đổi loại tiền thì thay thế chữ VNĐ bằng loại tiền khác. VÍ dụ tiền đôla: $ */
currency='VNĐ'; // Cài đặt loại tiền mà bạn đang sử dụng

/** Không thay đổi nội dung dòng đưới đây */
isHomepage=0; postLinkLength=32; postPosition=0, buttonHoverClass='button-hover', postSnippet='';

/**2. Chữ Sản phẩm ở trang chủ */
breadcrumbsHomeText='Danh sách sản phẩm'; // Chữ Danh sách sản phẩm ở trang chủ. Bạn có thể thay chữ này bằng chữ khác nếu muốn.
 
/**3. Chữ tiêu đề của các tiện ích */
relatedPostsH2Text='Sản phẩm liên quan'; // Tiêu đề của tiện ích Sản phẩm liên quan ở dưới mỗi bài đăng. Bạn có thể thay chữ này bằng chữ khác nếu muốn.

/**4. Chữ ở Tiện ích Phân trang(Pagination) */
currentPageText='Trang: '; // Chữ này biểu thị trang hiện tại.
previousText='« Trước'; // Chữ biểu thị đường dẫn tới trang trước
nextText='Sau »'; // Chữ biểu thị đường dẫn tới trang sau
pagerStatusOnePage=0; // Đặt giá trị là 1 để hiện chữ 'Trang: 1/1' khi các sản phẩm chỉ nằm trên một trang. Đặt giá trị là 0 để ẩn chữ này(mặc định)


/** CÁC CÀI ĐẶT VỀ CHỨC NĂNG */

/**1. Các cài đặt cho tiện ích Bài viết phổ biến ở Sidebar */
slidePopularPostsSidebar=1; // Đặt giá trị là 0 để tắt Slide. Đặt giá trị là 1 để bật Slide (mặc định)
popularPostsSidebarSlideVisible=2; // Số sản phẩm hiện ra( nếu bật Slide)
popularPostsSidebarSlideCircular=true; // Đặt giá trị là true để bật chế độ Quay vòng (Crircular). Đặt giá trị là false để tắt chế độ Quay vòng(mặc định)
popularPostsSidebarSlideScroll=2; // Số sản phẩm trượt trong mỗi lần trượt của Slide.
popularPostsSidebarSlideSpeed=1600; // Tốc độ của Slide
popularPostsSidebarSlideAuto=1; // Đặt giá trị là 1 để bật chế độ tự động trượt. Đặt giá trị là 0 để tắt chế độ tự động trượt(mặc định)

/**2. Các cài đặt cho tiện ích Bài viết phổ biến ở trang chủ */
mainSlideMode='fade'; // Cài đặt giá trị là 'slide' để bật hiệu ứng Trượt(Slide). Cài đặt giá trị là 'fade' để bật hiệu ứng làm Mờ(Fade) (mặc định).
mainSlideHomepageSpeed=600; // Tốc độ của hiệu ứng làm Mờ
popularPostMainTabsSlideVisible=3; // Số Tab sản phẩm
popularPostMainTabsSlideCircular=false; // Đặt giá trị là true để bật chế độ Quay vòng (Crircular). Đặt giá trị là false để tắt chế độ Quay vòng(mặc định)
popularPostMainTabsSlideScroll=1; // Số sản phẩm trượt trong mỗi lần trượt của Slide.
popularPostMainTabsSlideSpeed=900; // Tốc độ của Slide
popularPostMainTabsSlideAuto=1; // Đặt giá trị là 1 để bật chế độ tự động trượt. Đặt giá trị là 0 để tắt chế độ tự động trượt(mặc định)
tabTitleMainChars=23; // Tổng số các kí tự của tiêu đề sản phẩm trong Tab sản phẩm.
mainSlideHomepageEasing='swing'; // Bạn phải tự thêm vào Mẫu plugin JQuery Easing nếu muốn sử dụng các hiệu ứng trượt khác. Xem tại đây: http://gsgd.co.uk/sandbox/jquery/easing.


/**3. Các cài đặt cho tiện ích Bài viết liên quan  */
relatedPostsAmount=10; // Số sản phẩm
slideRelatedPost=1; // Đặt giá trị là 0 để tắt Slide. Đặt giá trị là 1 để bật Slide (mặc định)
relatedPostsSlideCircular=true; // Đặt giá trị là true để bật chế độ Quay vòng (Crircular). Đặt giá trị là false để tắt chế độ Quay vòng(mặc định)
relatedPostsSlideScroll=5; // Số sản phẩm trượt trong mỗi lần trượt của Slide.
relatedPostsSlideSpeed=1600; // Tốc độ của Slide
relatedPostsSlideAuto=1; // Đặt giá trị là 1 để bật chế độ tự động trượt. Đặt giá trị là 0 để tắt chế độ tự động trượt(mặc định)

/**4. Cài đặt cho tiện ích Phân trang (Pagination). Bạn phải chỉnh sửa cả nội dụng khác trong Mẫu của bạn. Hãy lưu trữ Mẫu hiện tại trước khi thay đổi Mẫu. */
pagerMaxMain = 20;  // Số lượng bài viết trên trang chính. Để thay đổi con số này bạn phải chỉnh sửa cả con số tại đây: 'Cài đặt > Bài đăng và nhận xét > Hiển thị tối đa'.
pagerMaxResults = 20; // Số lượng bài viết trên trang Nhãn(Label). Bạn cần phải thay đổi phần khác trong mẫu nếu muốn thay đổi con số này.
pagerNums=10; // Số lượng các đường dẫn trong tiện ích Phân trang(Pagination).


/** TÙY BIẾN GIAO DIỆN */

/** Các cài đặt ở phần này là để thay đổi giao diện Website. Đối với những người mới làm quen thì việc này là khá khó. Bởi vì bạn phải thay đổi cả mã CSS và một số phần khác nữa. Vì vậy hãy lưu trữ Mẫu đang làm việc trước khi tạo bất cứ sự thay đổi nào. */
postPerLine=5; // Số sản phẩm trên một dòng ở trang chủ, Nhãn, Lưu trữ
imgWidth=114; // Chiều rộng ảnh sản phẩm ở trang chủ, Nhãn, Lưu trữ
imgHeight=114; // Chiều cao ảnh sản phẩm ở trang chủ, Nhãn, Lưu trữ
imgHeightS='s' + imgHeight; // chữ 's' có nghĩa là ảnh sẽ không bị cắt. Nếu bạn muốn ảnh bị cắt thành hình vuông, thay thế đoạn mã trên bằng đoạn mã này: imgHeightS='s' + imgHeight + '-c';
// Lưu ý: các ảnh sản phẩm phải được lưu trữ tại picasaweb.google.com hoặc được tải lên qua công cụ tải ảnh khi viết bài của Blogger.
postOuterWidth=imgWidth+11; //Dành cho việc cắt ngắn tiêu đề sản phẩm. Nếu bạn không thay đổi chiều rộng của .post-outer thì bạn không cần quan tâm đến cài đặt này. Nếu bạn đã thay đổi thì, bạn cần thay đổi giá trị của postOuterWidth thành con số đó. Ví dụ postOuterWidth=125;
postLinkLength=postOuterWidth/3.5; // Tổng số kí tự của tiêu đề sản phẩm
postLinkLength=parseInt(postLinkLength,10); // Chỉ là một phép tính.
popularPostSidebarImgHeight='s'+imgHeight; // Chiều rộng của ảnh sản phẩm ở tiện ích Bài viết phổ biến ở Sidebar
popularPostMainImgHeight='s'+160; // Chiều rộng của ảnh sản phẩm ở tiện ích Bài viết phổ biến ở Trang chủ
relatedPostImgHeight='s' + imgHeight; // Chiều rộng của ảnh sản phẩm ở tiện ích Bài viết liên quan
imgItemPageWidth='s' + 250; // Chiều rộng của ảnh sản phẩm(ảnh đầu tiên) ở trang sản phẩm(Item page)

/** HẾT CÀI ĐẶT */



/**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);

function resizeText(i,j){
var j1=j-3, isub=i;
if(i.length > j){isub = i.substring(0,j1); isub+='...';};
return isub;
}

function getUrl(src,i){
var B='', C=src, D='', E=i;
B=C.split("/");D=B[2];if(-1!=D.indexOf("blogspot")||-1!=D.indexOf("googleusercontent")||-1!=D.indexOf("ggpht"))F=B[7],C=-1==F.indexOf(".")?C.replace(F,E):B[0]+"//"+B[2]+"/"+B[3]+"/"+B[4]+"/"+B[5]+"/"+B[6]+"/"+E+"/"+B[7];return C;}

function borderColor(t){
$(t).addClass('productBorder');
t.onmouseout=function(){
$(t).removeClass('productBorder');
};
}

function goLink(t){
var url;
url=$(t).parents().eq(1).find('div.post-link a')[0].href;
window.location = url;
}
function goLinkPopularPost(u){
var url;
url=$(u).parents().eq(2).find('div.item-title a')[0].href;
window.location = url;
}


var _0xa2bf=["\x39\x20\x31\x42\x28\x62\x29\x7B\x70\x20\x61\x2C\x64\x2C\x63\x3D\x22\x22\x3B\x62\x3D\x24\x2E\x4B\x28\x62\x29\x3B\x32\x28\x30\x3C\x62\x2E\x36\x29\x32\x28\x64\x3D\x62\x2E\x31\x6A\x28\x4A\x29\x2C\x2D\x31\x21\x3D\x64\x29\x32\x28\x61\x3D\x62\x2E\x31\x73\x28\x30\x2C\x64\x29\x2C\x22\x31\x77\x22\x3D\x3D\x61\x7C\x7C\x22\x22\x3D\x3D\x61\x29\x7B\x32\x28\x62\x3D\x62\x2E\x75\x28\x64\x2B\x31\x2C\x32\x35\x29\x2C\x64\x3D\x62\x2E\x77\x28\x30\x29\x2C\x21\x30\x3D\x3D\x24\x2E\x37\x28\x64\x29\x7C\x7C\x22\x20\x22\x3D\x3D\x3D\x64\x29\x7B\x62\x3D\x24\x2E\x4B\x28\x62\x2E\x75\x28\x31\x29\x29\x3B\x31\x66\x28\x70\x20\x65\x3D\x30\x3B\x65\x3C\x62\x2E\x36\x3B\x65\x2B\x2B\x29\x32\x28\x61\x3D\x62\x2E\x77\x28\x65\x29\x2C\x21\x30\x3D\x3D\x24\x2E\x37\x28\x61\x29\x29\x63\x2B\x3D\x61\x3B\x35\x20\x32\x28\x22\x2E\x22\x3D\x3D\x61\x29\x63\x2B\x3D\x61\x3B\x35\x20\x32\x28\x22\x2C\x22\x3D\x3D\x61\x29\x63\x2B\x3D\x61\x3B\x35\x20\x31\x65\x3B\x32\x28\x22\x22\x21\x3D\x3D\x63\x7C\x7C\x22\x22\x3D\x3D\x3D\x63\x26\x26\x21\x30\x3D\x3D\x24\x2E\x37\x28\x64\x29\x29\x63\x3D\x4A\x2B\x64\x2B\x63\x7D\x7D\x35\x7B\x32\x28\x32\x35\x3C\x61\x2E\x36\x26\x26\x61\x2E\x75\x28\x2D\x32\x35\x2C\x32\x35\x29\x2C\x62\x3D\x61\x2C\x64\x3D\x62\x2E\x77\x28\x61\x2E\x36\x2D\x31\x29\x2C\x21\x30\x3D\x3D\x24\x2E\x37\x28\x64\x29\x7C\x7C\x22\x20\x22\x3D\x3D\x3D\x64\x29\x7B\x61\x3D\x62\x2E\x36\x3B\x62\x3D\x24\x2E\x4B\x28\x62\x2E\x75\x28\x2D\x61\x2C\x61\x2D\x31\x29\x29\x3B\x61\x3D\x62\x2E\x36\x3B\x31\x66\x28\x65\x3D\x61\x2D\x31\x3B\x30\x3C\x3D\x65\x3B\x65\x2D\x2D\x29\x32\x28\x61\x3D\x62\x2E\x77\x28\x65\x29\x2C\x21\x30\x3D\x3D\x24\x2E\x37\x28\x61\x29\x29\x63\x3D\x61\x2B\x63\x3B\x35\x20\x32\x28\x22\x2E\x22\x3D\x3D\x61\x29\x63\x3D\x61\x2B\x63\x3B\x35\x20\x32\x28\x22\x2C\x22\x3D\x3D\x61\x29\x63\x3D\x61\x2B\x63\x3B\x35\x20\x31\x65\x3B\x32\x28\x22\x22\x21\x3D\x3D\x63\x7C\x7C\x22\x22\x3D\x3D\x3D\x63\x26\x26\x21\x30\x3D\x3D\x24\x2E\x37\x28\x64\x29\x29\x63\x3D\x63\x2B\x64\x2B\x4A\x7D\x7D\x35\x20\x63\x3D\x22\x22\x3B\x31\x46\x20\x63\x7D\x39\x20\x31\x64\x28\x29\x7B\x70\x20\x62\x3D\x30\x3B\x22\x66\x2D\x38\x22\x21\x3D\x47\x2E\x31\x63\x28\x22\x69\x22\x29\x3F\x62\x3D\x31\x3A\x28\x47\x2E\x32\x67\x28\x22\x6B\x22\x2C\x22\x31\x62\x22\x29\x2E\x31\x63\x28\x22\x69\x22\x2C\x22\x66\x2D\x38\x2D\x31\x34\x22\x29\x2C\x24\x28\x22\x23\x66\x2D\x38\x2D\x31\x34\x22\x29\x2E\x31\x79\x28\x6E\x29\x2E\x6F\x28\x29\x29\x3B\x31\x3D\x3D\x62\x26\x26\x28\x24\x28\x22\x33\x2E\x31\x30\x22\x29\x2E\x31\x70\x28\x57\x29\x2C\x24\x28\x22\x2E\x31\x74\x22\x29\x2E\x6F\x28\x29\x2C\x24\x28\x22\x2E\x31\x30\x20\x61\x22\x29\x2E\x6F\x28\x29\x2C\x24\x28\x22\x31\x76\x22\x29\x2E\x6F\x28\x29\x2C\x24\x28\x22\x23\x54\x22\x29\x2E\x52\x28\x6E\x29\x29\x7D\x31\x7A\x28\x31\x41\x29\x2E\x31\x43\x28\x39\x28\x29\x7B\x70\x20\x62\x3D\x24\x28\x22\x23\x31\x45\x2D\x49\x2D\x49\x22\x29\x2C\x61\x3D\x62\x2E\x31\x47\x28\x22\x2E\x31\x49\x22\x29\x3B\x31\x4F\x28\x61\x2C\x31\x50\x29\x3B\x24\x28\x39\x28\x29\x7B\x24\x28\x31\x51\x29\x2E\x31\x52\x28\x39\x28\x29\x7B\x30\x21\x3D\x24\x28\x31\x55\x29\x2E\x31\x68\x28\x29\x3F\x62\x2E\x31\x5A\x28\x29\x3A\x62\x2E\x32\x31\x28\x29\x7D\x29\x3B\x62\x2E\x32\x38\x28\x39\x28\x29\x7B\x24\x28\x22\x32\x39\x2C\x32\x62\x22\x29\x2E\x32\x65\x28\x7B\x31\x68\x3A\x30\x7D\x2C\x32\x66\x29\x7D\x29\x7D\x29\x3B\x6A\x3D\x22\x32\x6B\x3A\x32\x70\x3B\x32\x73\x3A\x32\x74\x3B\x32\x77\x3A\x31\x62\x3B\x49\x3A\x30\x3B\x32\x78\x3A\x30\x3B\x7A\x2D\x32\x59\x3A\x31\x69\x3B\x22\x3B\x51\x3D\x27\x3C\x33\x20\x31\x6B\x3D\x22\x31\x6C\x22\x3E\x31\x6D\x5C\x31\x6E\x20\x62\x5C\x31\x6F\x20\x50\x5C\x31\x71\x20\x31\x72\x20\x50\x5C\x31\x33\x20\x4C\x5C\x31\x75\x20\x72\x5C\x31\x33\x20\x74\x5C\x31\x78\x20\x53\x5C\x71\x5C\x55\x20\x33\x31\x5C\x56\x20\x4C\x5C\x31\x44\x20\x46\x20\x58\x3A\x3C\x2F\x33\x3E\x3C\x59\x2F\x20\x3E\x31\x48\x20\x68\x5C\x31\x4A\x20\x31\x4B\x5C\x31\x4C\x20\x31\x4D\x5C\x31\x4E\x20\x63\x5C\x5A\x20\x5C\x34\x5C\x71\x5C\x31\x31\x20\x64\x5C\x31\x32\x20\x62\x5C\x56\x20\x31\x53\x5C\x31\x54\x20\x5C\x4F\x20\x31\x56\x5C\x31\x57\x20\x46\x21\x2E\x20\x4E\x5C\x31\x58\x20\x62\x5C\x41\x20\x5C\x34\x5C\x31\x35\x20\x78\x5C\x32\x30\x20\x31\x36\x5C\x32\x32\x20\x32\x33\x20\x5C\x34\x5C\x32\x34\x20\x63\x5C\x5A\x20\x5C\x34\x5C\x71\x5C\x31\x31\x20\x64\x5C\x31\x32\x20\x5C\x34\x5C\x32\x36\x2C\x20\x5C\x34\x5C\x32\x37\x20\x6C\x5C\x31\x37\x20\x5C\x32\x61\x5C\x41\x20\x6D\x5C\x31\x35\x20\x67\x5C\x32\x63\x20\x5C\x34\x5C\x32\x64\x20\x31\x38\x5C\x31\x39\x20\x72\x5C\x31\x61\x2E\x20\x32\x68\x20\x32\x69\x20\x31\x38\x5C\x31\x39\x20\x72\x5C\x31\x61\x2C\x20\x46\x20\x58\x20\x63\x5C\x32\x6A\x20\x62\x5C\x41\x20\x73\x5C\x32\x6C\x20\x31\x36\x5C\x32\x6D\x20\x5C\x34\x5C\x32\x6E\x20\x4C\x5C\x4F\x20\x6C\x5C\x32\x6F\x3A\x3C\x59\x20\x2F\x3E\x27\x3B\x6E\x3D\x27\x3C\x33\x20\x69\x3D\x22\x66\x2D\x38\x22\x20\x79\x3D\x22\x52\x2D\x32\x71\x3A\x32\x72\x3B\x6B\x3A\x48\x3B\x43\x3A\x30\x3B\x32\x75\x3A\x30\x20\x30\x20\x32\x76\x20\x30\x3B\x42\x2D\x45\x3A\x31\x67\x3B\x27\x2B\x6A\x2B\x27\x22\x3E\x20\x32\x79\x20\x32\x7A\x20\x3C\x61\x20\x79\x3D\x22\x6B\x3A\x32\x41\x3B\x42\x2D\x45\x3A\x31\x67\x3B\x43\x3A\x30\x3B\x27\x2B\x6A\x2B\x27\x22\x20\x32\x42\x3D\x22\x32\x43\x3A\x2F\x2F\x32\x44\x2E\x32\x45\x2E\x32\x46\x22\x20\x32\x47\x3D\x22\x4D\x5C\x32\x48\x20\x63\x5C\x32\x49\x20\x68\x5C\x32\x4A\x20\x32\x4B\x20\x32\x4C\x5C\x32\x4D\x20\x72\x5C\x32\x4E\x20\x76\x5C\x31\x37\x20\x64\x5C\x32\x4F\x20\x73\x5C\x32\x50\x20\x64\x5C\x32\x51\x20\x32\x52\x20\x74\x5C\x32\x53\x20\x63\x5C\x32\x54\x20\x6D\x5C\x32\x55\x20\x53\x5C\x71\x5C\x55\x2E\x22\x3E\x32\x56\x20\x32\x57\x20\x32\x58\x3C\x2F\x61\x3E\x3C\x2F\x33\x3E\x27\x3B\x57\x3D\x27\x3C\x33\x20\x69\x3D\x22\x38\x2D\x48\x22\x20\x79\x3D\x22\x6B\x3A\x48\x3B\x43\x3A\x44\x20\x30\x20\x44\x3B\x42\x2D\x45\x3A\x44\x3B\x32\x5A\x3A\x33\x30\x3B\x27\x2B\x6A\x2B\x27\x22\x3E\x3C\x33\x3E\x27\x2B\x51\x2B\x27\x3C\x33\x20\x69\x3D\x22\x54\x22\x2F\x3E\x3C\x31\x59\x20\x2F\x3E\x3C\x33\x3E\x27\x2B\x6E\x2B\x22\x3C\x2F\x33\x3E\x3C\x2F\x33\x3E\x3C\x2F\x33\x3E\x22\x3B\x47\x3D\x24\x28\x22\x23\x66\x2D\x38\x22\x29\x3B\x31\x64\x28\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x69\x66\x7C\x64\x69\x76\x7C\x75\x30\x31\x31\x31\x7C\x65\x6C\x73\x65\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x69\x73\x4E\x75\x6D\x65\x72\x69\x63\x7C\x63\x6F\x70\x79\x72\x69\x67\x68\x74\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x7C\x7C\x7C\x7C\x7C\x74\x65\x6D\x70\x6C\x61\x74\x65\x7C\x7C\x7C\x69\x64\x7C\x63\x73\x73\x54\x65\x6D\x70\x6C\x61\x74\x65\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x7C\x64\x69\x73\x70\x6C\x61\x79\x7C\x7C\x7C\x74\x65\x6D\x70\x6C\x61\x74\x65\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x4C\x69\x6E\x6B\x73\x43\x6F\x64\x65\x7C\x72\x65\x6D\x6F\x76\x65\x7C\x76\x61\x72\x7C\x75\x30\x31\x62\x30\x7C\x70\x68\x7C\x7C\x7C\x73\x75\x62\x73\x74\x72\x7C\x7C\x63\x68\x61\x72\x41\x74\x7C\x7C\x73\x74\x79\x6C\x65\x7C\x7C\x75\x31\x65\x61\x31\x6E\x7C\x66\x6F\x6E\x74\x7C\x6D\x61\x72\x67\x69\x6E\x7C\x31\x35\x70\x78\x7C\x73\x69\x7A\x65\x7C\x74\x72\x61\x6E\x67\x7C\x74\x65\x6D\x70\x6C\x61\x74\x65\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x7C\x62\x6C\x6F\x63\x6B\x7C\x74\x6F\x70\x7C\x63\x75\x72\x72\x65\x6E\x63\x79\x7C\x74\x72\x69\x6D\x7C\x74\x72\x7C\x7C\x7C\x75\x31\x65\x64\x66\x7C\x63\x68\x7C\x74\x65\x6D\x70\x6C\x61\x74\x65\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x41\x6C\x65\x72\x74\x7C\x74\x65\x78\x74\x7C\x6E\x67\x7C\x6F\x74\x63\x63\x7C\x75\x31\x65\x64\x64\x69\x7C\x75\x31\x65\x61\x33\x6E\x7C\x63\x6F\x70\x79\x72\x69\x67\x68\x74\x43\x6F\x64\x65\x7C\x77\x65\x62\x7C\x62\x72\x7C\x75\x30\x30\x65\x31\x63\x7C\x42\x6C\x6F\x67\x7C\x75\x31\x65\x64\x64\x6E\x67\x7C\x75\x31\x65\x61\x62\x6E\x7C\x75\x30\x30\x65\x39\x70\x7C\x68\x69\x64\x64\x65\x6E\x7C\x75\x30\x30\x65\x33\x7C\x68\x6F\x7C\x75\x30\x30\x65\x30\x7C\x6B\x68\x7C\x75\x30\x30\x66\x34\x69\x7C\x75\x31\x65\x65\x35\x63\x7C\x6E\x6F\x6E\x65\x7C\x61\x74\x74\x72\x7C\x63\x68\x65\x63\x6B\x54\x65\x6D\x70\x6C\x61\x74\x65\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x7C\x62\x72\x65\x61\x6B\x7C\x66\x6F\x72\x7C\x31\x33\x70\x78\x7C\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70\x7C\x31\x36\x37\x37\x37\x32\x37\x31\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x63\x6C\x61\x73\x73\x7C\x61\x6C\x65\x72\x74\x7C\x54\x68\x7C\x75\x30\x30\x66\x34\x6E\x67\x7C\x75\x30\x30\x65\x31\x6F\x7C\x62\x65\x66\x6F\x72\x65\x7C\x75\x31\x65\x64\x31\x6E\x67\x7C\x73\x61\x6F\x7C\x73\x75\x62\x73\x74\x72\x69\x6E\x67\x7C\x70\x72\x69\x63\x65\x7C\x75\x30\x30\x65\x31\x69\x7C\x69\x6D\x67\x7C\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x7C\x75\x31\x65\x64\x62\x69\x7C\x61\x66\x74\x65\x72\x7C\x6A\x51\x75\x65\x72\x79\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x67\x65\x74\x50\x72\x69\x63\x65\x53\x6E\x69\x70\x70\x65\x74\x7C\x72\x65\x61\x64\x79\x7C\x75\x31\x65\x63\x62\x7C\x62\x61\x63\x6B\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x69\x6E\x64\x7C\x58\x69\x6E\x7C\x62\x75\x74\x74\x6F\x6E\x7C\x75\x30\x30\x65\x33\x79\x7C\x67\x69\x7C\x75\x31\x65\x65\x66\x7C\x6E\x67\x75\x79\x7C\x75\x30\x30\x65\x61\x6E\x7C\x61\x64\x64\x43\x6C\x61\x73\x73\x48\x6F\x76\x65\x72\x7C\x62\x75\x74\x74\x6F\x6E\x48\x6F\x76\x65\x72\x43\x6C\x61\x73\x73\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x73\x63\x72\x6F\x6C\x6C\x7C\x71\x75\x79\x7C\x75\x31\x65\x63\x31\x6E\x7C\x74\x68\x69\x73\x7C\x63\x75\x7C\x75\x31\x65\x64\x31\x69\x7C\x75\x31\x65\x62\x66\x75\x7C\x68\x72\x7C\x66\x61\x64\x65\x49\x6E\x7C\x75\x30\x30\x66\x33\x61\x7C\x66\x61\x64\x65\x4F\x75\x74\x7C\x75\x31\x65\x62\x37\x63\x7C\x74\x68\x61\x79\x7C\x75\x31\x65\x64\x35\x69\x7C\x7C\x75\x30\x30\x66\x33\x7C\x75\x30\x30\x65\x32\x79\x7C\x63\x6C\x69\x63\x6B\x7C\x62\x6F\x64\x79\x7C\x75\x30\x31\x31\x31\x6F\x7C\x68\x74\x6D\x6C\x7C\x75\x31\x65\x64\x31\x63\x7C\x75\x31\x65\x63\x33\x7C\x61\x6E\x69\x6D\x61\x74\x65\x7C\x38\x30\x30\x7C\x63\x73\x73\x7C\x53\x61\x75\x7C\x6B\x68\x69\x7C\x75\x31\x65\x65\x37\x61\x7C\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x7C\x75\x31\x65\x62\x64\x7C\x75\x31\x65\x61\x31\x74\x7C\x75\x31\x65\x64\x39\x6E\x67\x7C\x75\x31\x65\x61\x31\x69\x7C\x76\x69\x73\x69\x62\x6C\x65\x7C\x61\x6C\x69\x67\x6E\x7C\x63\x65\x6E\x74\x65\x72\x7C\x70\x6F\x73\x69\x74\x69\x6F\x6E\x7C\x72\x65\x6C\x61\x74\x69\x76\x65\x7C\x70\x61\x64\x64\x69\x6E\x67\x7C\x35\x70\x78\x7C\x66\x6C\x6F\x61\x74\x7C\x6C\x65\x66\x74\x7C\x54\x65\x6D\x70\x6C\x61\x74\x65\x7C\x62\x79\x7C\x69\x6E\x6C\x69\x6E\x65\x7C\x68\x72\x65\x66\x7C\x68\x74\x74\x70\x7C\x76\x6E\x7C\x62\x6C\x6F\x67\x67\x65\x72\x73\x68\x6F\x70\x7C\x69\x6E\x66\x6F\x7C\x74\x69\x74\x6C\x65\x7C\x75\x31\x65\x61\x62\x75\x7C\x75\x31\x65\x65\x64\x61\x7C\x75\x30\x30\x65\x30\x6E\x67\x7C\x4F\x6E\x6C\x69\x6E\x65\x7C\x6D\x69\x7C\x75\x31\x65\x63\x35\x6E\x7C\x75\x30\x30\x65\x64\x7C\x75\x31\x65\x63\x35\x7C\x75\x31\x65\x65\x64\x7C\x75\x31\x65\x65\x35\x6E\x67\x7C\x63\x68\x6F\x7C\x75\x31\x65\x61\x35\x74\x7C\x75\x31\x65\x61\x33\x7C\x75\x31\x65\x63\x64\x69\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x53\x68\x6F\x70\x7C\x56\x4E\x7C\x69\x6E\x64\x65\x78\x7C\x68\x65\x69\x67\x68\x74\x7C\x32\x37\x30\x70\x78\x7C\x71\x75","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0x1b05x1,_0x1b05x2,_0x1b05x3,_0x1b05x4,_0x1b05x5,_0x1b05x6){_0x1b05x5=function (_0x1b05x3){return (_0x1b05x3<_0x1b05x2?_0xa2bf[4]:_0x1b05x5(parseInt(_0x1b05x3/_0x1b05x2)))+((_0x1b05x3=_0x1b05x3%_0x1b05x2)>35?String[_0xa2bf[5]](_0x1b05x3+29):_0x1b05x3.toString(36));} ;if(!_0xa2bf[4][_0xa2bf[6]](/^/,String)){while(_0x1b05x3--){_0x1b05x6[_0x1b05x5(_0x1b05x3)]=_0x1b05x4[_0x1b05x3]||_0x1b05x5(_0x1b05x3);} ;_0x1b05x4=[function (_0x1b05x5){return _0x1b05x6[_0x1b05x5];} ];_0x1b05x5=function (){return _0xa2bf[7];} ;_0x1b05x3=1;} ;while(_0x1b05x3--){if(_0x1b05x4[_0x1b05x3]){_0x1b05x1=_0x1b05x1[_0xa2bf[6]]( new RegExp(_0xa2bf[8]+_0x1b05x5(_0x1b05x3)+_0xa2bf[8],_0xa2bf[9]),_0x1b05x4[_0x1b05x3]);} ;} ;return _0x1b05x1;} (_0xa2bf[0],62,188,_0xa2bf[3][_0xa2bf[2]](_0xa2bf[1]),0,{}));

function addClassHover(c,d){
var el=c, className=d;
el.on({
mouseenter: function(){
$(this).addClass(className);
},
mouseleave: function(){
$(this).removeClass(className);
}
});
}

function addSlideElement(a,b){
var listoadd, slideVisible=a, ul=b, LisLength=b.find('li').length;
listoadd=slideVisible*(Math.ceil(LisLength/slideVisible))-LisLength;
if(listoadd >=1){
for(var i=1;i<=listoadd;i++){
ul.append('<li class="empty-tab"></li>');
}
}
}

function stylePopularPost(l,m,n){
var sliderLis=l, rmSnippet=m, popularPostImgHeight=n, itemTitle, itemTitleA, itemTitleAText, itemTitleATitle, itemThumbnailImg, itemThumbnailImgSrc, itemThumbnailHtml, itemSnippet, itemSnippetClass, itemSnippetText;
if(sliderLis.length>0){
sliderLis.each(function(){
itemTitle=$(this).find('div.item-title').first();
itemTitleA=itemTitle.find('a').first();
itemTitleATitle=itemTitleA.text();
itemTitleAText=resizeText(itemTitleATitle,postLinkLength);
itemTitleA.text(itemTitleAText);
itemTitleA.attr('title',itemTitleATitle);
itemThumbnail=$(this).find('div.item-thumbnail').first();
itemThumbnailClass=itemThumbnail.attr('class');
if(itemThumbnailClass =='item-thumbnail'){
itemThumbnailImg=itemThumbnail.find('img').first();
itemThumbnailImgSrc=itemThumbnailImg.attr('src');
itemThumbnailImgSrc=getUrl(itemThumbnailImgSrc,popularPostImgHeight);
itemThumbnailHtml='<img onclick="goLinkPopularPost(this);" class="thumb" src="'+ itemThumbnailImgSrc + '" alt="'+ itemTitleATitle + '" />';
itemThumbnail.html(itemThumbnailHtml);
}else{
itemThumbnailImgSrc='https://lh5.googleusercontent.com/-KMVVBdGwZ5U/T_aIl_7Dd-I/AAAAAAAAAWE/bA9T4rda9aU/s72/no_image_yet.jpg';
itemThumbnailImgSrc=getUrl(itemThumbnailImgSrc,popularPostImgHeight);
itemTitleAUrl=itemTitleA.attr('href');
itemThumbnailHtml='<div class="item-thumbnail"><img onclick="goLinkPopularPost(this);" class="thumb" src="'+ itemThumbnailImgSrc + '"/></div>';
$(this).find('div.item-content').first().prepend(itemThumbnailHtml);
itemThumbnail=$(this).find('div.item-thumbnail').first();
}
if(rmSnippet==0){
itemThumbnail.attr('onmouseover','borderColor(this)');
}else{
itemThumbnail.prepend('<span></span>').attr('onmouseover','borderColor(this)');
itemThumbnail.after('<div class="item-thumbnail-wrapper"></div>');
itemThumbnail.appendTo(itemThumbnail.next());
}
itemSnippet=$(this).find('div.item-snippet').first();
itemSnippetClass=itemSnippet.attr('class');
if(itemSnippetClass =='item-snippet'){
itemSnippetText=itemSnippet.text();
price=getPriceSnippet(itemSnippetText);
itemSnippet.after('<div class="price">'+price+'</div>');
if(rmSnippet==1){
itemSnippet.html('');
}else{
if(price!=''){
itemSnippetText=itemSnippetText.replace(price,'');
}
itemSnippet.text(itemSnippetText);
}
}
});
// sliderLis.length>0
}
}

function stylePopularPostSidebar(a,b){
var popularPost=a, popularPostImgHeight=b, sliderPp, sliderPpLi, popularPostWidget, popularPostUl, rmSnippet=1, sliderPpLiLength, slideButtons;
if(typeof popularPost !='undefined'){
popularPostWidget=popularPost.find('div.popular-posts').first();
popularPostWidget.attr('id','slider-pp').attr('class','carousel vertical widget-content popular-posts');
sliderPp=$('#slider-pp');
sliderPp.prepend('<div id="slider-pp-viewport" class="jCarouselLite"/>');
popularPostUl=popularPostWidget.find('ul').first();
popularPostUl.appendTo($('#slider-pp-viewport'));
popularPostUl=$('#slider-pp-viewport').find('ul').first();
sliderPpLi=sliderPp.find('li');
stylePopularPost(sliderPpLi,rmSnippet,popularPostImgHeight);
sliderPpLiLength=sliderPpLi.length;
if((slidePopularPostsSidebar=1) && (sliderPpLiLength > popularPostsSidebarSlideVisible)){
addSlideElement(popularPostsSidebarSlideVisible,popularPostUl);
sliderPp.append('<div class="slide-button"><span class="button prev">«</span><span class="button next">»</span></div>');
sliderPp.find('.prev').addClass('disabled');
slideButtons=sliderPp.find('.button');
addClassHover(slideButtons,buttonHoverClass);
sliderPp.find('div.jCarouselLite').jCarouselLite({
    btnNext: "#slider-pp .next",
    btnPrev: "#slider-pp .prev",
    vertical: true, speed: popularPostsSidebarSlideSpeed, visible:popularPostsSidebarSlideVisible, circular: popularPostsSidebarSlideCircular, scroll: popularPostsSidebarSlideScroll, auto:popularPostsSidebarSlideAuto
});
}
}
}

function stylePopularPostMain(pm,c,d){
var popularPost=pm, popularPostImgHeight=c, amountchar=d, popularPostLi, popularPostLiLength, rmSnippet=0, tabPp, tabPpUl,tabPpUlHtml='', tabCount=1, itemThumbnail, itemTitle, itemPrice, liClass='tab-pp', popularPostWrapper=popularPost.find('div.popular-posts'), popularPostImgs, curUrl=window.location.hostname, tabppLis, listoadd, slideButtons;
if(typeof popularPost !='undefined'){
popularPost.find('h2').remove();
popularPostLi=popularPost.find('li');
stylePopularPost(popularPostLi,rmSnippet,popularPostImgHeight);
popularPost.css('display','block');
popularPost.append('<div id="tab-pp"><div class="jCarouselLite"><ul style="display:none;"></ul></div></div>');
tabPp=$('#tab-pp');
tabPpUl=tabPp.find('ul').first();
popularPostLi.each(function(){
liClass='tab-pp'+tabCount;
$(this).addClass(liClass);
itemThumbnail=$(this).find('div.item-thumbnail');
itemThumbnail.attr('onmouseover','');
itemThumbnail=itemThumbnail.find('img').attr('src');
itemThumbnail='<div class="item-thumbnail"><img src="'+itemThumbnail+'"/></div>';
itemTitle=$(this).find('div.item-title').text();
itemTitle=resizeText(itemTitle,amountchar);
itemTitle='<div class="item-title">'+itemTitle+'</div>';
itemPrice=$(this).find('div.price').text();
itemPrice='<div class="price">'+itemPrice+'</div>';
tabPpUlHtml+='<li class="'+liClass+'"><div class="designer-fix"><div class="item-content">'+itemThumbnail+itemTitle+itemPrice+'</div></div></li>';
tabCount+=1;
});
tabPpUl.html(tabPpUlHtml).show();
if(popularPostLi.length>popularPostMainTabsSlideVisible){
addSlideElement(popularPostMainTabsSlideVisible,tabPpUl);
popularPostWrapper=popularPost.find('div.popular-posts').first();
popularPostWrapper.append('<div class="slide-button"><span class="button prev">«</span><span class="button next">»</span></div>');
tabPp.find('.prev').addClass('disabled');
slideButtons=popularPostWrapper.find('.button');
addClassHover(slideButtons,buttonHoverClass);
tabPp.find('div.jCarouselLite').jCarouselLite({
    btnNext: ".pp-main .next",
    btnPrev: ".pp-main .prev",
    vertical: true, speed: popularPostMainTabsSlideSpeed, visible:popularPostMainTabsSlideVisible, circular: popularPostMainTabsSlideCircular, scroll: popularPostMainTabsSlideScroll, auto:popularPostMainTabsSlideAuto
});
}
popularPostWrapper=popularPost.find('div.popular-posts').first();
bShopSlider(popularPostWrapper,tabPp,mainSlideMode);
popularPostWrapper=popularPost.find('div.popular-posts');
}
}

function bShopSlider(a,b,c){
/** BShop Slider By Bang Nguyen Author URL: http://vn.bloggershop.info
Updated: October 10, 2012 GMT+7
 */
var tabContentWrapper=a, tabContents=tabContentWrapper.find('li'), menuWrapper=b, slideMode=c, menuLis=menuWrapper.find('li'), curTabContent=tabContentWrapper.find('li').first(), curTabTitle=menuWrapper.find('li').first(), tabContentWrapperWidth=tabContentWrapper.width();
menuWrapper.find('li').first().addClass('active');
if(slideMode!='slide'){
curTabContent.after('<li></li>');
}
menuLis.on({
mouseenter: function(){
    $(this).addClass('tab-hover');
  },
click: function(){
if ($(this).is(".active") || $(this).text()=='') {
return false;
}else{
$(this).addClass('active');
selectedClass=$(this).attr('class').split(' ');
selectedClass=selectedClass[0];
if(curTabTitle.hasClass(selectedClass)==false){
if(slideMode=='slide'){
curTabContent.removeClass('active').css('visibility','hidden');
}else{
curTabContent.removeClass('active').hide();
}
curTabTitle.removeClass('active');
}
curTabContent=tabContentWrapper.find('.'+selectedClass);
curTabTitle=$(this);
if(slideMode=='slide'){
curTabContent.addClass('active').css({'right':-tabContentWrapperWidth,'visibility':'visible'}).animate({right:'0'},mainSlideHomepageSpeed,mainSlideHomepageEasing);
}else{
curTabContent.addClass('active').css('display','none').fadeIn(mainSlideHomepageSpeed);
}
}
  },
mouseleave: function(){
$(this).removeClass('tab-hover');
  }
});
}


function styleProduct(a,b){
var id=a, snippet=b, postBody, pOuter, thumb, thumbUrl, link, linkText, price, priceText;
postPosition+=1;
postBody=$('#'+id);
pOuter=postBody.parents().eq(1);
thumb=postBody.find('img').first();
link=postBody.find('a.post-link').first();
link.after('<span class="price"/>');
price=link.next();
if(postPosition%postPerLine==0){pOuter.addClass('last-thumb');}
thumbUrl=thumb.attr('src');
thumbUrl=getUrl(thumbUrl,imgHeightS);
thumb.attr('src',thumbUrl);
linkText=link.text();
link.attr('title',linkText);
linkText=resizeText(linkText,postLinkLength);
link.text(linkText);
priceText=getPriceSnippet(snippet);
price.text(priceText);
// End styleProduct
}

function styleProductItemPage(prid){
var trCaptionContainer, img, imgSrc;
trCaptionContainer=$('.tr-caption-container').first();
img=trCaptionContainer.find('img').first();
imgSrc=img.attr('src');
imgSrc=getUrl(imgSrc,imgItemPageWidth);
img.attr('src',imgSrc);
img.css('display','block');

}


function relatedPostWithPrice(json){
if(relatedPostCount==relatedPostsAmount){return;}
 var entry, postTitle, postTitleResize, thumbUrl='', postContent, postLink, relatedPostJCarouselLiteHtml='', thumbBoxHtml='', postTitleHtml='', priceHtml='', sameUrl, totalPost=json.feed.openSearch$totalResults.$t;
if(totalPost<=1){return;}
 for(var i=0; i < json.feed.entry.length; i++){
  if(relatedPostCount==relatedPostsAmount || relatedPostCount >totalPost){break;}
  entry=json.feed.entry[i];
for(var k = 0; k < entry.link.length; k++){
   if (entry.link[k].rel == 'alternate') {
    postLink = entry.link[k].href;
   }
  }
for(var i=0;i<listUrl.length; i++){
if(postLink==listUrl[i]){
sameUrl=1;
break;
}else{sameUrl=0;}
}
if(sameUrl !=1){
  relatedPostCount+=1;
  listUrl[relatedPostCount]=postLink;
  postTitle=entry.title.$t;
  postTitleResize=resizeText(postTitle,postLinkLength);
  try{
  thumbUrl=entry.media$thumbnail.url;
  }
  catch(err){ 
  thumbUrl='https://lh5.googleusercontent.com/-KMVVBdGwZ5U/T_aIl_7Dd-I/AAAAAAAAAWE/bA9T4rda9aU/s72/no_image_yet.jpg';
  }
  thumbUrl=getUrl(thumbUrl,relatedPostImgHeight);
  postContent = entry.summary.$t;
  price=getPriceSnippet(postContent);
  thumbBoxHtml='<div class="thumb-box" onmouseover="borderColor(this)"><span></span><img onClick="goLink(this)" src="'+thumbUrl+'" alt="'+postTitle+'" /></div>';
  postTitleHtml='<div class="post-link"><a href="'+postLink+'" title="'+postTitle+'">'+postTitleResize+'</a></div>';
priceHtml='<div class="price"><span>'+price+'</span></div>';
if((relatedPostCount%postPerLine==0) && (slideRelatedPost==0)){
relatedPostJCarouselLiteHtml+='<li class="last-thumb"><div class="item-content">'+thumbBoxHtml+postTitleHtml+priceHtml+'</div></li>';
}else{
relatedPostJCarouselLiteHtml+='<li><div class="item-content">'+thumbBoxHtml+postTitleHtml+priceHtml+'</div></li>';
}
}
}
relatedPostJCarouselLite.append(relatedPostJCarouselLiteHtml);
}

var windowHeight=$(window).height(), css1='<style type="text/css">#container{min-height:'+windowHeight+'px;}.tr-caption-container img{display:none;}body .blog-posts, body #breadcrumbs-wrapper{width:auto;}</style>';

document.write(css1);
//]]>