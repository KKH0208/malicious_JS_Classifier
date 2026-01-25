/* 元のURL: https://doubleverify.com */

        var options = {
            portalId: '46126064',
            formId: '18be25f3-f682-4965-b600-007d029b2b63',
            formInstanceId: '3581',
            
            pageId: '190418893385',
            
            region: 'na1',
            
            
            
            
            pageName: "DoubleVerify: Driving Superior Outcomes For Global Brands",
            
            
            
            inlineMessage: "Thanks for submitting the form.",
            
            
            rawInlineMessage: "Thanks for submitting the form.",
            
            
            hsFormKey: "4a2c6623b5fa7d8f5ead294d507cb80a",
            
            
            css: '',
            target: '#hs_form_target_module_site_footer_',
            
            
            
            
            
            
            
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
    

