window.addEventListener('sfsi_functions_loaded', function() {
            if (typeof sfsi_plugin_version == 'function') {
                sfsi_plugin_version(2.58);
            }
        });

        function sfsi_processfurther(ref) {
            var feed_id = '';
            var feedtype = 8;
            var email = jQuery(ref).find('input[name="email"]').val();
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if ((email != "Enter your email") && (filter.test(email))) {
                if (feedtype == "8") {
                    var url = "https://api.follow.it/subscription-form/" + feed_id + "/" + feedtype;
                    window.open(url, "popupwindow", "scrollbars=yes,width=1080,height=760");
                    return true;
                }
            } else {
                alert("Please enter email address");
                jQuery(ref).find('input[name="email"]').focus();
                return false;
            }
        }