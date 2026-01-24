//<![CDATA[
/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2.1 (22-APRIL-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */
jQuery.fn.liScroll=function(e){e=jQuery.extend({travelocity:.05},e);return this.each(function(){function a(e,n){t.animate({left:"-="+e},n,"linear",function(){t.css("left",s);a(o,u)})}var t=jQuery(this);t.addClass("newsticker");var n=6e3;t.find("li").each(function(e){n+=jQuery(this,e).outerWidth(true)});var r=t.wrap("<div class='mask'></div>");var i=t.parent().wrap("<div class='tickercontainer'></div>");var s=t.parent().parent().width();t.width(n);var o=n+s;var u=o/e.travelocity;a(o,u);t.hover(function(){jQuery(this).stop()},function(){var t=jQuery(this).offset();var r=t.left+n;var i=r/e.travelocity;a(r,i)})})}
//]]>