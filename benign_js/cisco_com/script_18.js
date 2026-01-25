/* 元のURL: https://cisco.com */

                if (window.ContextHub && ContextHub.SegmentEngine) {
                    ContextHubJQ(function() {
                        ContextHub.eventing.on(ContextHub.Constants.EVENT_TEASER_LOADED, function(event, data){
                            data.data.forEach(function(evData) {
                                if (evData.key === "_content_experience\u002Dfragments_cdc_site_us_en_homepage_homepage\u002Dquick\u002Dtasks\u002D\u002D\u002Dtargeting_master_jcr_content_root_experiencefragment51622b9a\u002D8d17\u002D4a53\u002Dbc06\u002D518a9c3edf63") {
                                    makeTargetedComponentVisible("_content_experience-fragments_cdc_site_us_en_homepage_homepage-quick-tasks---targeting_master_jcr_content_root_experiencefragment51622b9a-8d17-4a53-bc06-518a9c3edf63");
                                }
                            });
                        });
                        ContextHub.SegmentEngine.PageInteraction.Teaser({
                            locationId: '_content_experience\u002Dfragments_cdc_site_us_en_homepage_homepage\u002Dquick\u002Dtasks\u002D\u002D\u002Dtargeting_master_jcr_content_root_experiencefragment51622b9a\u002D8d17\u002D4a53\u002Dbc06\u002D518a9c3edf63',
                            variants: [{"path":"/content/campaigns/site/master/CDC-Homepage-US-EN-Quicktasks-2025/partneronly/master-experiencefragment","name":"master-experiencefragment","title":"partnerOnly","campaignName":"CDC-Homepage-US-EN-Quicktasks-2025","campaignPath":"/content/campaigns/site/master/CDC-Homepage-US-EN-Quicktasks-2025","thumbnail":"/content/campaigns/site/master/CDC-Homepage-US-EN-Quicktasks-2025/partneronly/master-experiencefragment.thumb.png","id":"CDC-Homepage-US-EN-Quicktasks-2025_master-experiencefragment","url":"/content/campaigns/site/master/CDC-Homepage-US-EN-Quicktasks-2025/partneronly/master-experiencefragment/jcr:content/par.html","campaignPriority":1,"segments":["/conf/ciscoreimagine/settings/wcm/segments/ciscorules/custom/partneronly"],"tags":[]},{"path":"/site/us/en/index/default","name":"default","title":"Default","campaignName":"","thumbnail":"/site/us/en/index.thumb.png","url":"/content/experience-fragments/cdc/site/us/en/homepage/homepage-quick-tasks---targeting/master/_jcr_content/root/experiencefragment.default.html","campaignPriority":0,"tags":[]}],
                            strategy: '',
                            trackingURL: null
                        });

                        // Make the targeted content visible if no teasers were loaded after 5s
                        setTimeout(function(){
                            makeTargetedComponentVisible("_content_experience-fragments_cdc_site_us_en_homepage_homepage-quick-tasks---targeting_master_jcr_content_root_experiencefragment51622b9a-8d17-4a53-bc06-518a9c3edf63");
                        }, 5000);
                    });
                } else {
                    makeTargetedComponentVisible("_content_experience-fragments_cdc_site_us_en_homepage_homepage-quick-tasks---targeting_master_jcr_content_root_experiencefragment51622b9a-8d17-4a53-bc06-518a9c3edf63");
                }
            

