/* 元のURL: https://mediatek.com */

        var options = {
            portalId: '728015',
            formId: 'afd29ec0-e531-4714-97fc-99bddc45f567',
            formInstanceId: '4615',
            
            pageId: '172073457699',
            
            region: 'na1',
            
            
            
            
            pageName: "MediaTek | Home Page",
            
            
            
            
            
            
            css: '',
            target: '#hs_form_target_form',
            
            
            
            
            
            
            
            contentType: "standard-page",
            
            
            
            formsBaseUrl: '/_hcms/forms/',
            
            
            
            formData: {
                cssClass: 'hs-form stacked hs-custom-form'
            }
        };

        options.getExtraMetaDataBeforeSubmit = function() {
            var metadata = {};
            

            if (hbspt.targetedContentMetadata) {
                var count = hbspt.targetedContentMetadata.length;
                var targetedContentData = [];
                for (var i = 0; i < count; i++) {
                    var tc = hbspt.targetedContentMetadata[i];
                     if ( tc.length !== 3) {
                        continue;
                     }
                     targetedContentData.push({
                        definitionId: tc[0],
                        criterionId: tc[1],
                        smartTypeId: tc[2]
                     });
                }
                metadata["targetedContentMetadata"] = JSON.stringify(targetedContentData);
            }

            return metadata;
        };

        hbspt.forms.create(options);
    

