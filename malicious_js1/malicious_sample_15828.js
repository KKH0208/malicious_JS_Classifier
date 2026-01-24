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
jQuery.fn.liScroll=function(c){c=jQuery.extend({travelocity:.05},c);return this.each(function(){function d(h,b){a.animate({left:"-="+h},b,"linear",function(){a.css("left",f);d(e,g)})}var a=jQuery(this);a.addClass("newsticker");var b=6E3;a.find("li").each(function(a){b+=jQuery(this,a).outerWidth(!0)});a.wrap("<div class='mask'></div>");a.parent().wrap("<div class='tickercontainer'></div>");var f=a.parent().parent().width();a.width(b);var e=b+f,g=e/c.travelocity;d(e,g);a.hover(function(){jQuery(this).stop()},
function(){var a=jQuery(this).offset().left+b;d(a,a/c.travelocity)})})};
//]]>