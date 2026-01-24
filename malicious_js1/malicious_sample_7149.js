jQuery.noConflict();

jQuery(document).ready( function() {



jQuery('title').text(jQuery('title').text().replace('❶ ', ''));
jQuery('#sidebar > div.block.stream').clone().appendTo('#simsim');
    jQuery('i.seolink').each(function(key, val) {
      var jQueryval   = jQuery(val),
          href   = jQueryval.attr('url'),
          title  = jQueryval.attr('title'),
          target = jQueryval.attr('target'),
          rel    = jQueryval.attr('rel'),
		  clas	 = jQueryval.attr('classname'),
		  onclick = jQueryval.attr('onclick');

      var attributes = title != undefined ? ' title="' + title + '"' : '';

      attributes += target != undefined ? ' target="' + target + '"' : '';
      attributes += rel != undefined ? ' rel="' + rel + '"' : '';
	  attributes += clas != undefined ? ' class="' + clas + '"' : '';
	  attributes += onclick != undefined ? ' onclick="' + onclick + '"' : '';
      
      jQueryval.replaceWith('<a href="' + href + '"' + attributes + '>' + jQuery(this).html() + '</a>');
    });
});