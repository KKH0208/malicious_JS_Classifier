/* 元のURL: https://sourceforge.net */

        /*global ga, gtag */
        SF.devicePixelRatio = Math.round(window.getDevicePixelRatio()*10)/10;

        

        
            bizx.cmp.ifConsent({ purposes: ['storage', 'measurement'], vendors: 'google-analytics'}, function () {
                gtag('config', 'G-1H226E4E4L', {
                    
                    send_page_view: false,
                    'SF_Page_Type': 'pg_index', 
                    user_properties: {
                        'SF_Logged_in': 'Logged Out', 
                    },
                    'SF_Ads_Disabled': 'No',   
                    'SF_Prebid_Load_Method': 'sync', 
                    'devicePixelRatio': SF.devicePixelRatio, 
                });
                gtag('event', 'page_view', { send_to: 'G-1H226E4E4L' });
            });
        
            
            
        
        
    

