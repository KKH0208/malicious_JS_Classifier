/* <![CDATA[ */
				var sf_position = '0';
				var sf_templates = "<a href=\"{search_url_escaped}\"><span class=\"sf_text\">See more results<\/span><span class=\"sf_small\">Displaying top {total} results<\/span><\/a>";
				var sf_input = '.live-search';
				jQuery(document).ready(function(){
					jQuery(sf_input).ajaxyLiveSearch({"expand":false,"searchUrl":"http:\/\/engeclimabrasil.com.br\/?s=%s","text":"Search","delay":500,"iwidth":180,"width":315,"ajaxUrl":"http:\/\/engeclimabrasil.com.br\/wp-admin\/admin-ajax.php","rtl":0});
					jQuery(".sf_ajaxy-selective-input").keyup(function() {
						var width = jQuery(this).val().length * 8;
						if(width < 50) {
							width = 50;
						}
						jQuery(this).width(width);
					});
					jQuery(".sf_ajaxy-selective-search").click(function() {
						jQuery(this).find(".sf_ajaxy-selective-input").focus();
					});
					jQuery(".sf_ajaxy-selective-close").click(function() {
						jQuery(this).parent().remove();
					});
				});
			/* ]]> */