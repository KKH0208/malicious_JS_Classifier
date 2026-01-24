window.addEventListener('sfsi_functions_loaded', function() {
            if (typeof sfsi_plugin_version == 'function') {
                sfsi_plugin_version(2.63);
            }
        });

        function sfsi_processfurther(ref) {
            var feed_id = 'NC9LRlhRbG5iUHQrWnUyMHQxUUtQeVhubU4xdFVyeXk1WXVNRTFOODFKbHdCek9DZGdnSmdLMTJma3FyMW9UbWo4dllMRWQxZUI5YWdoYTZWbElodGREODJ3NFpyZHgyU08yVlJWREdLcEFZUDFoN3VYWjB2Z1FGRXJQRVhzWjJ8ajhrUWRJc1lpYXJ2SHozTi9za1hwdnVHNTY2eWVtR3dQTDVJZ3EzOFNmQT0=';
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