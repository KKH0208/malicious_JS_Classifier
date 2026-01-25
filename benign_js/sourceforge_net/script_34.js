/* 元のURL: https://sourceforge.net */

        function gam(id){
            bizx.cmp.ifConsent({ purposes: 'all' }, function () {
                bizx.cmp.embedScript(`https://pagead2.googlesyndication.com/pagead/js/pcd.js?${id}`,
                    true,  // async
                    'head', // location
                    null, // callback
                    false, // defer
                    {id: `google-pcd-tag-${id}`, 'data-audience-pixel': 'dc_iu=/41014381/DFPAudiencePixel;dc_seg=' + id});
            });
        }

        
            gam("8901705213");

