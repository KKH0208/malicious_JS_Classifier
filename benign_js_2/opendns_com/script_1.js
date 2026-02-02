/* 元のURL: https://opendns.com */
// 外部JS: https://www.cisco.com/c/dam/cdc/t/ctm-core.js
/** ctm-core.js
    This script loads the core modules/features as below that are handled by CTM team.
    - OneTrust Script initiation
    TO-DO:
    - Initiate data layer object - utag_data / ctm_data
    - Define trackEventQueue API
    - 
*/
if (typeof ctm === "undefined") ctm = {};
//Function encapsulates all GDPR releated features and attributes
ctm.gdpr = (function() {
    //Event Queue for call backs if not defined
    var eventqueue = [];
    //Optanon Wrapper Function Counter
    var owCount = 0;
    //Log Message Queue
    var gdprLogQueue =[];
    //Utility to display log messages, that could help in debugging
    var consoleLog = function(msg){
        var msg = msg || "";
        if(msg !==""){gdprLogQueue.push(msg)}
        var qParams = document.location.search;
        var regGdprLog = /(\?|\&)gdprLog\=true/ig;
        // if log enabled through local storage setting or query param
        if((typeof localStorage ==="object" && typeof localStorage["gdprLog"] !=="undefined") || (regGdprLog.test(qParams))){
            console.log(msg);
        }
    };
    const OTConfig = [{
        "%.cisco.com": {
            "prod": "23bf898e-0ec5-40f7-9f8e-1d55fadea7c9",
            "uat": "c1b166fc-3fc0-4735-8ae7-9ff92ed0d80e"
        }
    }, {
        "%.webex.com": {
            "prod": "89e97715-da60-412e-ad5d-7570af63b819",
            "uat": "83eb6e18-08fa-4b3c-a83d-f4af4397498b"
        }
    }, {
        "%.ciscolive.com": {
            "prod": "9dffb63b-800b-4398-bca9-ce7f184d0615",
            "uat": "47b35bcc-12c5-4ac1-bd18-653a5695e660"
        }
    }, {
        "%.appdynamics.com": {
            "prod": "848460b8-fbe5-4dba-af48-345ceb61657b",
            "uat": "7268f734-0ea9-41dc-a8e1-1238f4b57c8c"
        }
    }, {
        "%.meraki-go.com": {
            "prod": "2a638979-33b6-428f-a530-8b2d79e22fb9",
            "uat": "493c90d9-32b3-4574-b07f-34198d16cf2a"
        }
    }, {
        "%.meraki.com": {
            "prod": "102585ab-3197-4d5a-9e0a-bbf5dd8cbf2c",
            "uat": "a036ec80-9b6c-48fe-a2d5-b977becc0b31"
        }
    }, {
        "%.meraki.io": {
            "prod": "b34aa243-45b5-4a0a-a11f-4c5f594f3511",
            "uat": "14988c5c-5474-490d-80cf-a220796bb92b"
        }
    }, {
        "%.opendns.com": {
            "prod": "fa1b6cd2-412c-4edb-b7ae-b8f9d75fb004",
            "uat": "623f8d69-d0a0-4d0e-9b3d-350bb42f5bda"
        }
    }, {
        "%.umbrella.com": {
            "prod": "254ef740-241e-4f95-8bbf-4816efccdf94",
            "uat": "e149524c-9278-4472-be9f-7ff25dc156f0"
        }
    }, {
        "%.netacad.com": {
            "prod": "f6e5ab70-2586-4a93-bce2-bb4738094158",
            "uat": "40080155-b0eb-479a-8182-f9f504d4145d"
        }
    }, {
        "%duo.com": {
            "prod": "7756fc26-4c5f-4ea5-908f-6c050e54158b",
            "uat": "caf6c3b1-c545-44f5-ba62-f015d675d056"
        }

    }, {
        "%.veh.events": {
            "prod": "6246b468-e233-4edf-bbe7-b55100b11ae5",
            "uat": "68147324-85d8-4cc9-9978-a982d03d9aec"
        }
    
    }, {
        "%skillsforall.com": {
            "prod": "6b2229c3-5fa7-4990-ac9c-1686876e13a0",
            "uat": "8d5b0777-d3b3-42c8-9438-4038f4dff5f3"
        }
    }, {
        "%acacia-inc.com": {
            "prod": "a11b8d57-5582-4d76-9b88-d3219bd05c4a",
            "uat": "2c9173e3-1119-420d-a863-abf9f526c2ba"
        }
    }, {
        "%services-exchange.com": {
            "prod": "abbd7b80-aa7a-4e32-a7f7-1bf3504ee795",
            "uat": "f2bb4823-26f7-4a90-82fa-08c152a1f98e" 
        }
    }, {
        "%socio.events": {
            "prod": "3012b880-0644-44c3-b88a-40d399aa35c8",
            "uat": "be88cc61-7355-4f95-942a-b498502a16c4" 
        }
    }, {
        "%kennasecurity.com": {
            "prod": "35c2db04-ab37-445a-836d-76ce688b489f",
            "uat": "00d701f9-59ac-4a29-a79f-257ba80795e9" 
        }
    }, {
        "%netlify.app": {
            "prod": "2cca6600-fac2-4627-80f2-51415511cc39",
            "uat": "24001f7f-da35-4075-9128-e30d21381956" 
        }
    }, {
        "%portshift.io": {
            "prod": "b5fc339d-6776-417f-9a44-a3522ebda10d",
            "uat": "bbaa7c02-ba1a-4daa-8f03-69b2309f4594" 
        }
    }, {
        "%involvio.com": {
            "prod": "e73db2b5-a1f4-410f-a2da-f56b6b4dcaec",
            "uat": "eb4bafa4-3e35-49ef-b9b5-ab4fc0abd8d4" 
        }
    }, {
        "%eticloud.io": {
            "prod": "928234f7-9550-4748-9fb8-13a34b2c16c8",
            "uat": "dc97e650-0ef2-448b-805f-41bd04c708f9" 
        }
    }, {
        "%iroh.site": {
            "prod": "0ef87b88-1f5e-4523-af51-f572cafee411",
            "uat": "5293f575-90ec-4eff-91b6-f579e469685e" 
        }
    }, {
        "%netacad.cn": {
            "prod": "65686e99-dad2-4484-ae20-067052cad2b6",
            "uat": "4e557781-d26a-45a9-80ee-07f04aa1f1d2" 
        }
    }, {
        "%.webexone.com": {
            "prod": "ccc69e22-5128-4d8c-b4ed-2c029b089519",
            "uat": "9bfe2bbb-718f-4829-b90f-09075f9b28b0" 
        }
    }, {
        "%multiplydiversity.com": {
            "prod": "d47d810e-b6cd-4d4e-b2aa-991445e4b156",
            "uat": "fb1aa549-98f8-4534-8e82-035f22351bb2" 
        }
    }, {
        "%calisti.app": {
            "prod": "e8876534-f962-44c8-be37-9bbaabbf83ff",
            "uat": "fb1aa549-98f8-4534-8e82-035f22351bb2" 
        }
    }, {
        "%panoptica.app": {
            "prod": "c96ec21e-a883-4708-a027-d46ab195eb8b",
            "uat": "9c9a82c7-42bf-4e98-b9df-ecd5950d60a8" 
        }
    },{
        "%imimobile.com": {
            "prod": "bff43acc-d989-490e-aaf2-00d46f6e9d8c",
            "uat": "4daff8cc-ed0f-49e6-b3fb-cde252f2854d" 
        }
    },
    {
        "%vidcast.io": {
            "prod": "b0b93937-49cf-473c-8461-78c19f81c112",
            "uat": "d58fc830-d63e-4146-b3eb-4c3e96f47d5f" 
        }
    },{
        "textlocal.com": {
            "prod": "21f17d4f-b8de-41bb-901f-518e487dc39c",
            "uat": "eec90686-8562-4a42-8592-775fe9eb9665" 
        }
    },{
        "textlocal.es": {
            "prod": "3313a6a2-51d3-4e72-bc2c-d5433a5d8f85",
            "uat": "10c03e13-3a94-4824-8529-b5c235a5b069" 
        }
    },{
        "%.ciscodcloud.com": {
            "prod": "51ffb9aa-ddc8-4895-908c-5e127e738943",
            "uat": "2ffae4d1-5ec0-479a-94da-1bc2e53d335f" 
        }
    },{
        "%.ciscoevents.net": {
            "prod": "1ec79cc0-e22f-421c-98af-55e17d11a031",
            "uat": "e1df0baf-c1d3-4480-a42f-0d6ecb527f2c" 
        }
    },
    {
        "%webexinteract.com": {
            "prod": "84f01ca2-0fd6-4893-b592-b5efc4ad93ac",
            "uat": "3ca82f56-08b2-43b7-b58c-1d95b1d808ed" 
        }
    },
    {
        "ciscolearningservices--clnuat1.sandbox.my.site.com": {
            "prod": "8351d9cc-7ad1-4ec1-ae0b-a069d646eed9",
            "uat": "c5a740dc-69c9-4d01-8658-94a87eba71de" 
        }
    },
    {
        "%webex.ai": {
            "prod": "f8e26646-3b5c-4609-b199-f7a280722648",
            "uat": "60d35eba-2153-4a32-8093-636c59d4d069" 
        }
    },
    {
        "healthcare-communications.com": {
            "prod": "ffeed3f1-34c3-4c77-8f38-79e1f8d9cef1",
            "uat": "0bd34ee5-1b73-4523-882f-40cd2d62491a" 
        }
    },
    {
        "smartlook.com": {
            "prod": "8ea8e4b7-f335-4a26-b14d-ae14a1876742",
            "uat": "5fa7a7e4-fa70-4cfb-818b-e2260e183311" 
        }
    },
    {
        "valtix.com": {
            "prod": "e883ff29-cb57-4783-a5fb-ce66a6bb1efd",
            "uat": "94b7f814-af12-4ed8-8090-6ea7cb7c724f" 
        }
    },
    {
        "ciscolearningservices.my.site.com": {
            "prod": "0748df1f-9f2f-44bb-97ef-3695ac0b5169",
            "uat": "018e31ba-745f-78e0-bcff-1c7d51b8aaf8" 
        }
    },
    {
        "ciscopartnerjourneys.com": {
            "prod": "b12de72c-e181-45a6-8b50-26f3494de572",
            "uat": "018e8451-8045-76ca-a331-3ebceb3c189d" 
        }
    },
    {
        "accedian.com": {
            "prod": "a37b073d-bb4d-4d3a-aad0-5a99106594b0",
            "uat": "018f3883-065b-70a3-b570-9a5d4feccade" 
        }
    },
    {
        "accedian.io": {
            "prod": "23f06efc-a73b-4cf6-9953-9e9ec46c3f46",
            "uat": "018f76ee-1807-7321-ad1e-31c2bd02a1a1" 
        }
    },
    {
        "motific.ai": {
            "prod": "727aa666-98c9-4ec0-bf4e-06970b2eb96d",
            "uat": "018f74ee-90c3-7095-8a08-19745de6e781" 
        }
    },
    {
        "oort.io": {
            "prod": "8ca85a32-57a5-4fbc-aa14-e09084b5587b",
            "uat": "018fccf3-cc27-7573-9d9b-3bbceb9de0e7" 
        }
    },
    {
        "appspot.com": {
            "prod": "6fb28fe5-d078-443f-83c7-a3c22355346a",
            "uat": "018fe202-fbd4-7bce-a411-e65f201eb055" 
        }
    },
    {
        "recon.cloud": {
            "prod": "31c79e33-b0ac-4d72-bca1-0ad205fa8d6e",
            "uat": "019029e4-a2e7-7942-8886-f8087e627f71" 
        }
    },
    {
        "samknows.com": {
            "prod": "e66b19e5-81e6-4af2-8cc4-6679d163c948",
            "uat": "0190a533-ba2d-7f83-ac78-48b4b9813e55" 
        }
    },
    {
        "isovalent.com": {
            "prod": "01924254-f4db-7256-981a-5669da66ed7f",
            "uat": "019247eb-dba5-796b-81e7-af8380b0a4f2" 
        }
    },
    {
        "splunk.com": {
            "prod": "01928aef-09e2-7de2-8e88-dd4a2ea86367",
            "uat": "0192d2fd-a8b7-7b0f-8987-54b76a796de5" 
        }
    },
    {
        "splunk.my.site.com": {
            "prod": "01938d3e-107e-72ff-9723-0443ca6aef7e",
            "uat": "01938d3f-72c2-79bc-b2d5-b0d69212b2f0" 
        }
    },
    {
        "ikarem.io": {
            "prod": "0193b997-6f2d-770f-b4a0-1459c922a8e1",
            "uat": "0193b999-be15-79a1-acad-fa106183a56c" 
        }
    },
    {
        "meraki.ca": {
            "prod": "0193b99d-72eb-7528-bb4f-c1f13ec9e714",
            "uat": "0193b99e-149b-7abf-aca5-cd3d24a70811" 
        }
    },
    {
        "meraki.cn": {
            "prod": "0193b99b-86ed-7ff4-8186-ad04f9d33b79",
            "uat": "0193b99c-9ddb-7d4b-8c65-98c61fa0364f" 
        }
    },
    {
        "meraki.in": {
            "prod": "0193b99f-8f78-7146-b9e9-99acf85608e3",
            "uat": "0193b99e-eaf1-799b-abce-021ecdc7f886" 
        }
    },
    {
        "sandbox.my.site.com": {
            "prod": "0193b9a2-38d5-7be2-a57d-598fa003ea31",
            "uat": "0193b9a3-154a-7c6b-add9-81a7ba5b63c8" 
        }
    },
    {
        "ciscoaisummit.com": {
            "prod": "0194ee78-5fc6-7f89-a9d8-271448d4d15f",
            "uat": "0194ee7b-bcd5-7231-9fed-c5f7319ded1f" 
        }
    },
    {
        "heretto.com": {
            "prod": "0195217b-585b-757c-b51d-eed67e6dbb67",
            "uat": "0195217d-3095-711b-8278-efc56a4427bb" 
        }
    },
    {
        "realspeed.com": {
            "prod": "01952180-45c1-774b-9624-c14a43a59882",
            "uat": "01952181-1508-7bfe-9d71-f57dab077867" 
        }
    },
    {
        "realspeed.net": {
            "prod": "01953b5f-8a99-7e9a-9bf9-fb4eb144492d",
            "uat": "01953b61-3408-74d5-ad19-c5f2ffd33a63" 
        }
    },
    {
        "thousandeyes.com": {
            "prod": "0195f6f7-9ca9-709c-96af-2f04e6ac0fe5",
            "uat": "0195f6f7-4b41-75a6-a3b9-0ec6200c3c55" 
        }
    },
    {
        "agntcy.org": {
            "prod": "01963efe-4148-766e-afb0-ca3f79053e01",
            "uat": "01963f02-de34-744e-9f0d-8c8906db936a" 
        }
    },
    {
        "cisco-stg.phenompro.com": {
            "prod": "0196e8a3-fd13-7588-8ed8-1cc4970e6db5",
            "uat": "0196e8a6-ad98-7f3e-b2c5-5684fca95bc9" 
        }
    },
    {
        "cventevents.com": {
            "prod": "0199700b-80f8-7880-a0f3-2de64f8b7373",
            "uat": "0199700e-c7b4-75cc-a410-1bb3ffe86478" 
        }
    },
    {
        "cvent.com": {
            "prod": "0199700c-7fec-7f30-9155-df36defdd87e",
            "uat": "0199700d-933c-738a-ab5d-52828caee96e" 
        }
    }
];
    const OTExcludeList = [
        "security.umbrella.com/cmd",
        "security.umbrella.com/lp=492",
        "security.umbrella.com/lp=495",
        "security.umbrella.com/lp=500"
    ];
    const OTIncludeList = [
        "www.cisco.com/", 
        "fdk-devint.cisco.com/", 
        "fdk-stage.cisco.com/",
        "engage2demand.cisco.com/",        
        "umbrella.cisco.com/",
        "meraki.cisco.com/",
        "www.meraki-go.com/",
        "community-staging.meraki.com/",
        "community.meraki.com/",
        "video.cisco.com/",
        "video-dev.cisco.com/",
        "video-backup.cisco.com/",
        "blogs-np.cisco.com/",
        "bcsroi.cisco.com/go/cisco/cxbcs", 
        "origin-webex-%.cisco.com/", //WebEx Configurations        
        "www-qa3-webex.cisco.com",
        "webex-cn-lt.cisco.com",
        "www.webex.com/",
        "www3.webex.com/",
        "cart-int.webex.com/",
        "cart.webex.com/",
        "help.webex.com/",
        "essentials.webex.com/",
        "purchase-int.webex.com",
        "purchase.webex.com",
        "origin-webex-stg.webex.com/",
        "blog-origin.webex.com/",
        "blog.webex.com/", //End of WebEx Configurations     
        "www.appdynamics.com/",
        "docs.appdynamics.com/",
        "brandstore.appdynamics.com/",
        "marketplace.appdynamics.com/",
        "accounts.appdynamics.com/",
        "www.ciscolive.com/",
        "worldofsolutions.ciscolive.com/",
        "www.opendns.com/",
        "security.umbrella.com/",
        "blogs.cisco.com/",
        "supportforums-dev2.cisco.com/",
        "social-tools-uat.cisco.com/home",
        "newsroom.cisco.com/",
        "community%.cisco.com/",
        "tools-dev.cisco.com/",
        "tools.cisco.com/",
        //"hardware.webex.com/",
        "partnersuccess.cisco.com/",
        "merakiresources.cisco.com/",
        "cdcsearch-stage.cisco.com",
        "search.cisco.com",
        "bst-stage.cloudapps.cisco.com/bugsearch/",
        "bst.cloudapps.cisco.com/",
        "bst.cisco.com/",
        "bst-stg.cisco.com/",
        "software-stage.cisco.com/",
        "software-stage2.cisco.com/",
        "software.cisco.com",
        "mycase1-stage.cloudapps.cisco.com/",
        "mycase.cloudapps.cisco.com",
        "mycase-beta.cloudapps.cisco.com",
        "cway.cisco.com",
        "quickview.cloudapps.cisco.com",
        "www-dev-cloud.cisco.com",
        "www-stage-cloud.cisco.com",
        "www-cloud.cisco.com",
        "dcloud-docs.cisco.com",
        "cxappcenter.cisco.com",
        "bazaar-stage.cisco.com",
        "ccrc.cisco.com",
        "ccwr-stg1.cisco.com",
        "webinars.cisco.com",
        "tmgmatrix-stage.cisco.com",
        "tmgmatrix.cisco.com",
        "mce-stage.cisco.com",
        "gni-test.netacad.com",
        "gni-test-lms.netacad.com",
        "rni-test.netacad.com",
        "rni-test-portal.netacad.com",
        "www.netacad.com",
        "lms.netacad.com",
        "cn.netacad.com",
        ".veh.events",
        "duo.com",
        "skillsforall.com",
        "qa.skillsforall.com",
        "cloudsecurity.cisco.com",
        "learn-cloudsecurity.cisco.com",
        "cloudsecurity-staging.marketops.umbrella.com",
        "hardware.webex.com",
        "admin.sse.itd.cisco.com",
        "admin.eu.sse.itd.cisco.com",
        "admin.apj.sse.itd.cisco.com",
        "devcd-portal.sse.itd.cisco.com",
        "stage-portal.sse.itd.cisco.com",
        "cigateway.cisco.com",
        "analystconnect.cisco.com",
        "analystconnect-admin.cisco.com",
        "copi.cisco.com",
        "dpi-%.cisco.com",
        "partnersummit.cisco.com",
        "partnersummit-stage.cisco.com",
        "trustportal-nprd.cisco.com",
        "learningnetwork.cisco.com",
        "abm.cisco.com",
        "review.lca.cisco.com",
        "review-%.lca.cisco.com",
        "owb%.cloudapps.cisco.com",
        "offer.cloudapps.cisco.com",
        "theacademy.cisco.com",
        "hybridworkerportal.cisco.com",
        "hwbp-%.cisco.com",
        "trustportal.cisco.com",
        "commerce.cisco.com",
        "commerce-test.cisco.com",
        "acacia-inc.com",
        "onetrust.acacia-inc.com",
        "gcab%.cisco.com",
        "ccw-cstg.cisco.com",
        "ccw-wstg.cisco.com",
        "eaccw-cstg.cisco.com",
        "eaccw-wstg.cisco.com",
        "eaccw.cloudapps.cisco.com",
        "cortn-cstg.cloudapps.cisco.com",
        "cortn-wstg.cloudapps.cisco.com",
        "cortn.cloudapps.cisco.com",
        "lpc-cstg.cisco.com",
        "lpc-wstg.cisco.com",
        "ccwr-stg3.cisco.com",
        "ccwr-stg1.cisco.com",
        "owb-cstg.cloudapps.cisco.com",
        "owb-wstg.cloudapps.cisco.com",
        "ccwdir-cstg.cloudapps.cisco.com",
        "ccwdir.cloudapps.cisco.com",
        "pwbng-cstg.cisco.com",
        "prpub.cloudapps.cisco.com",
        "pwbenchng.cloudapps.cisco.com",
        "purchase.cisco.com",
        "education.appdynamics.com",
        "university.appdynamics.com",
        "spokesperson%.cisco.com",
        "analystconnect%.cisco.com",
        "cll-courses%.cisco.com",
        "apps.cisco.com",
        "id.cisco.com",
        "salesconnect.cisco.com",
        "salesconnect.cloudapps.cisco.com",
        ".services-exchange.com",
        "insideradvocates.cisco.com",
        "%socio.events",
        "digitalshowcase.ciscolive.com",
        "www.kennasecurity.com",
        "kenna-staging.netlify.app",
        "jobs.cisco.com",
        "portshift.io",
        "www.involvio.com",
        "smm-docs.eticloud.io",
        "smm-docs.eticloud.io/",
        "security.test.iroh.site",
        "security.int.iroh.site",
        "apphub.webex.com",
        "developer.webex.com",
        "security.cisco.com",
        "netacad.cn",
        "portal.netacad.cn",
        "lms.netacad.cn",
        "postlogin-perf.netacad.cn",
        "prelogin-perf.netacad.cn",
        "lms-perf.netacad.cn",
        "ondemandelearning.cisco.com",
        "sales-comp%.cisco.com",
        "www.webexone.com/",
        "www.multiplydiversity.com",
        "preprod.multiplydiversity.com",
        "estore-newhire.cisco.com",
        "gsa%.cloudapps.cisco.com",
        "%panoptica.app",
        "%calisti.app",
        "watercooler%.cisco.com",
        "stage.webex.com",
        "signup%.webex.com",
        "imimobile.com",
        "techblog.cisco.com",
        "apps.meraki.io",
        "pepews.cisco.com",
        "support.umbrella.com",
        "fdk-dev.cisco.com",
        "www-idev-cloud.cisco.com",
        "fdk-pstage.cisco.com",
        "xpert%.cisco.com",
        "dcloud%.cisco.com",
        "%vidcast.io",
        "%-lite%.cisco.com",
        "cpaas.webex.com",
        "textlocal.com",
        "textlocal.es",
        "%.ciscodcloud.com",
        "%.ciscoevents.net",
        "%webexinteract.com",
        "ciscolearningservices--clnuat1.sandbox.my.site.com",
        "ordersummary%.cisco.com",
        "%webex.ai",
        "healthcare-communications.com",
        "smartlook.com",
        "valtix.com",
        "outshift.cisco.com",
        "capitaldna.cisco.com",
        "lpc.cisco.com",
        "locatr%.cloudapps.cisco.com",
        "ciscolearningservices.my.site.com",
        "marketingvelocitycentral.cisco.com",
        "ciscopartnerjourneys.com",
        "u%.cisco.com",
        "accedian.com",
        "store%.cisco.com",
        "accedian.io",
        "motific.ai",
        "gsx.cisco.com",
        "oort.io",
        "%.netacad.com",
        "first-1-dot-duo-signup.appspot.com",
        "recon.cloud",
        "samknows.com",
        "learningnetworkstore.cisco.com",
        "learninglocator.cloudapps.cisco.com",
        "mkto.cisco.com",
        "developer.cisco.com",
        "dow%.cisco.com",
        "mvc-staging.cisco.com",
        "isovalent.com",
        "splunk.com",
        "qbr-%.cisco.com",
        "splunk.my.site.com",
        "meraki.com",
        "ikarem.io",
        "meraki.cn",
        "meraki.ca",
        "meraki.in",
        "splunk%.sandbox.my.site.com",
        "signup.umbrella.com",
        "ciscoaisummit.com",
        "engage.cisco.com",
        "splunk-dev.portal.heretto.com",
        "help.splunk.com",
        "marketplace.cisco.com",
        "realspeed.com",
        "realspeed.net",
        "ecommerce%.cisco.com",
        "%.thousandeyes.com",
        "agntcy.org",
        "cisco-stg.phenompro.com",
        "careers.cisco.com",
        "lpx.cisco.com",
        "bre-dp-dashboard%.cisco.com",
        "cisco.cventevents.com",
        "web.cvent.com",
        "cx.cisco.com",
        ".accounts.cisco.com"
        //"ciscosales.lightning.force.com/lightning/"
        //"dev-acacia-inccom.pantheonsite.io",
        //"acacia-inc.com"
        //"signup.duo.com",
        //"community.duo.com",
        //"help.duo.com",
        //"guide.duo.com",
        
    ];

    const OTCSSIncludeList = [
        "essentials.webex.com",
        "social-tools-uat.cisco.com",
        "newsroom.cisco.com",
        "tools-dev.cisco.com",
        "tools.cisco.com",
    //    "hardware.webex.com",
        "blog.webex.com",
        "sales-comp.cisco.com",
        "sales-comp-dev.cisco.com"
    ];
    var getOTDataDomainConfig = function(url) {
        let dataDomainConfig = "";
        let loc = (typeof url == "undefined") ? window.location.href : url; // "http://www.cisco.com";
        loc = loc.toLowerCase();
        for (let i = 0; i < OTConfig.length; i++) {
            let f = Object.keys(OTConfig[i])[0];
            // check for data domain config before checking url
            if (OTConfig[i][f] !== "") {
                let pattern = f;
                pattern = pattern.replace(new RegExp("\\.", "g"), "\\."); //convert all "."s in url to non-special using escape char
                pattern = pattern.replace(new RegExp("%", "g"), ".*?"); //Replace the wildcard "%" with ".*?" to match anything including blank("")
                let re = new RegExp(pattern, "i");
                //console.log(re+ "created with"+pattern);
                if (re.test(loc)) {
                    dataDomainConfig = OTConfig[i][f]['prod']; //default map to Prod;
                    if(typeof localStorage ==="object" && typeof localStorage["OneTrustEnv"] !=="undefined"){
                        switch(localStorage["OneTrustEnv"]){
                            case "test":
                            dataDomainConfig = OTConfig[i][f]['prod']+"-test";
                            break;
                            case "uat":
                            dataDomainConfig = OTConfig[i][f]['uat'];
                            break;
                            case "uat-test":
                            dataDomainConfig = OTConfig[i][f]['uat']+"-test";
                            break;
                        }

                    }
                    //dataDomainConfig = (typeof localStorage ==="object" && localStorage["OneTrustEnv"] ==="test")? (OTConfig[i][f]+"-test"):OTConfig[i][f];
                    break; // only one config can be used per-match.
                }
            }
        }
        return dataDomainConfig;
    };
    /**
        Utility for current URL match for the given array of URL patterns
        ## signature ##   isUrlPatternMatch(url,patternArr)
        @param args : 
        url --> current url
        patternArr --> list of patterns to which current url need to be matched
    **/
    var isUrlPatternMatch =function (url,patternArr){
        var url = url || document.URL;        
        for (var i = 0; i < patternArr.length; i++) {
            var pattern = patternArr[i];
            pattern = pattern.replace(new RegExp("\\.", "g"), "\\."); //convert all "."s in url to non-special using escape char
            pattern = pattern.replace(new RegExp("%", "g"), ".*?"); //Replace the wildcard "%" with ".*?" to match anything including blank("")
            var re = new RegExp(pattern, "i");
            //console.log(re+ "created with"+pattern);
            if (re.test(url)) {
                //console.log(url+" matched to: "+re);
                return true;
            }
        }
        return false

    };
    /**
        Cookie reading and writing utility copied implemenation from 'cdc.cookie.js'
        sets a cookie. days and msecs are days and milliceconds from now,
        respectively. if neither days or msecs are given, defaults to
        expire at end of browser session.
        @param args {
            cookieName: string
            cookieValue: string
            days: int (optional)
            msecs: int (optional, overrides days)
            path: string (optional) (default=/)
            domain: string (optional)
        }
        */
    var setCookie = function(args) {
        // LEGACY - support old signature (string, string[, int])
        if (!args.cookieName) {
            args = {
                cookieName: args,
                cookieValue: arguments[1]
            };
            if (arguments.length > 2) {
                args.days = arguments[2];
            }
        }

        var expireStr = '';
        var pathStr = '';
        var domainStr = '';
        var msecs = parseInt(args.msecs);
        if (isNaN(msecs) && args.days) {
            msecs = args.days * 24 * 60 * 60 * 1000;
        }

        if (!isNaN(msecs)) {
            var ex = new Date();
            ex.setTime(ex.getTime() + msecs);
            expireStr = "; expires=" + ex.toUTCString();
        }
        if (args.path) {
            pathStr = "; path=" + args.path + ";";
        } else {
            pathStr = "; path=/;";
        }
        if (args.domain) {
            domainStr = "; domain=" + args.domain;
        }
        try {
            document.cookie = args.cookieName + "=" + escape(args.cookieValue) + expireStr + pathStr + domainStr;
        } catch (e) {
            return false;
        }
        return true;
    };
    /**
    gets requested cookie.
    @param args { cookieName: string }
    */
    var getCookie = function(args) {
        // LEGACY - if args is a string and not an object
        if (!args.cookieName) {
            args = {
                cookieName: args
            };
        }

        var dict = unpackParamString(document.cookie, /\s*;\s*/);
        return dict[args.cookieName] || "";
    };
    /**
    deletes requested cookie.
    args are identical to setCookie, except that expiry is forced
    to a negative number, effectively deleting the cookie.
    */
    var deleteCookie = function(args) {
        // mutating args obj might mess things up
        // if caller reuses it for other things
        var dArgs = {},
            name;
        for (name in args) {
            if (args.hasOwnProperty(name)) {
                dArgs[name] = args[name];
            }
        }
        dArgs.msecs = dArgs.days = -1;
        dArgs.cookieValue = '';
        return setCookie(dArgs);
    };
    /**
    takes a dictionary, returns a string
    e.g. {"foo":"bar","foo 2":"bar 2"} => "foo=bar&foo%202=bar%202"
    @param sep optional separator, defaults to "&" 
    */
    var packParamString = function(dict, sep) {
        sep = sep || '&';
        var frags = [],
            name;
        for (name in dict) {
            if (!dict.hasOwnProperty(name)) {
                continue;
            }
            frags.push(escape(name) + '=' + escape(dict[name]));
        }
        return frags.join(sep);
    };
    /**
    takes a string, returns a dictionary
    e.g. "foo=bar&foo%202=bar%202" => {"foo":"bar","foo 2":"bar 2"}
    @param sep optional separator, defaults to "&" (can be string or regexp)
    */
    var unpackParamString = function(str, sep) {
        sep = sep || '&';
        var frags = str.split(sep),
            dict = {},
            frag,
            ioe,
            name,
            val,
            i;
        for (i = 0; i < frags.length && (frag = frags[i]); i++) {
            ioe = frag.indexOf('='); // expecting "foo=bar"
            if (ioe < 0) {
                continue;
            }
            name = unescape(frag.substring(0, ioe));
            val = unescape(frag.substring(ioe + 1));
            dict[name] = val;
        }
        return dict;
    };
    // Function returns Performance flag
    var getPerformanceFlag = function() {
        var optCk = getCookie("OptanonConsent");
        var patternPerf = /(\=|\,)[2]\:[0]/g;
        if (optCk != "" && patternPerf.test(optCk)) {
            return "false";
        }
        return "true";
    };
    // Function returns Targeting flag
    var getTargetingFlag = function() {
        var optCk = getCookie("OptanonConsent");
        var patternTgt = /(\=|\,)[4]\:[0]/g;
        if (optCk != "" && patternTgt.test(optCk)) {
            return "false";
        }
        return "true";
    };
    //Function to validate subsequent visit
    var isOneTrustLoadedPrior = function() {
        var patternGroups = /\&groups\=/g;
        var optCk = getCookie("OptanonConsent");
        if ((getCookie("OptanonAlertBoxClosed") !== "") || ( optCk!== "" && patternGroups.test(optCk))) {
            return "true";
        }
        return "false";
    };
    //Function to check if OT cookie available to read
    var isOTCookieAvailable = function() {
        if ((eventqueue.length > 0) || (isOneTrustLoadedPrior()==="true")) {
            return true;
        }
        return false;
    }
    // Flag to detect users first visit
    const isFirstVisit = (function() {
        consoleLog("isOneTrustLoadedPrior: "+isOneTrustLoadedPrior());
        var flag = (isOneTrustLoadedPrior() === "false") ? true : false;
        return flag;
    })();

    // Function to check, whether current URL is a Privacy page or not
    const isPrivacyPage = (function(url) {
        var url = url || document.URL;
        var privUrls = ["www.cisco.com/c/en/us/about/legal/privacy-full.html"];
        return isUrlPatternMatch(url,privUrls);        
    })();
    //Function to detect, whether Tealium Consent is shown earlier
    /*
    //US#462422: Decommission Tealium Consent Across all Profiles 
    var isTealiumConsentLoaded = function() {
        var value = "; " + document.cookie;
        var parts = value.split("; CONSENTMGR=");
        if (parts.length == 2) {
            return true;
        }
        return false;
    };*/
    var isEU = function(cCode) {
        var euCountryList = {            
            "AT":"Austria",
            "BE":"Belgium",
            "BG":"Bulgaria",
            "HR":"Croatia",
            "CY":"Cyprus",
            "CZ":"Czech Republic",
            "DK":"Denmark",
            "EE":"Estonia",
            "FI":"Finland",
            "FR":"France",
            "DE":"Germany",
            "GR":"Greece",
            "HU":"Hungary",
            "IE":"Ireland",
            "IS":"Iceland",
            "IT":"Italy",
            "LV":"Latvia",
            "LI":"Liechtenstein",
            "LT":"Lithuania",
            "LU":"Luxembourg",
            "MA":"Malta",
            "NL":"Netherlands",
            "NO":"Norway",
            "PL":"Poland",
            "PT":"Portugal",
            "RO":"Romania",
            "SK":"Slovakia",
            "SI":"Slovenia",
            "ES":"Spain",
            "SE":"Sweden",
            "CH":"Switzerland",
            "TR":"Turkey",
            "UK":"United Kingdom",
            "GB":"England",
            "CN":"China", // Added CN temporarily to stop targeter from loading in China
            "JP":"Japan",
            "VN":"Vietnam"
        };
        var geoLocObj= (typeof Optanon ==="object" && typeof Optanon.getGeolocationData ==="function")?Optanon.getGeolocationData():null;
        var cCode = cCode || (geoLocObj !==null)?geoLocObj["country"]:"" ;
        if(cCode in euCountryList){
            return true;
        }else{
            return false;
        }
    };
    // Function to check, whether OT is enabled for given URL
    var isOTEnabled = function(url) {
        var url = url || document.URL;
        //var otUrls = [".cisco.com/c/en/us/solutions/enterprise-networks/sd-wan/index.html", ".cisco.com/c/en/us/products/products-sanity-test/palkesh/index.html"];
        var otUrls = OTIncludeList;
        var otExclUrls = OTExcludeList;
        //if((!isUrlPatternMatch(url,otExclUrls)) && isUrlPatternMatch(url,otUrls) && (!isTealiumConsentLoaded())){
        if((!isUrlPatternMatch(url,otExclUrls)) && isUrlPatternMatch(url,otUrls)){
            return true;
        }        
        //console.log("OT not enabled...");
        return false
    };  

    //Checks to see if domain needs css stylesheet to override subdomain styling
    const isOTCSSOverride = (function() {
        var urls = OTCSSIncludeList;
        var currentDomain = document.location.host;
        for(var i = 0; i < urls.length; i++) {
            if (currentDomain == urls[i]) {
                consoleLog("isOT CSS Override: True");
                return true;
            }
        }
        return false;
    })();
    
    //adds css stylesheet to override styling from the subdomain
    function addOTCSSOverride(domain) {
        var csspath = "https://www.cisco.com/c/dam/cdc/t/ot/css/";
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        //modifies domain name to match naming convention in dam assets (eg: blog.webex.com --> blog-webex-com)
        const filename = domain.toString().replace(/\./g,"-");
        link.href = csspath + filename + ".css";
        link.media = 'all';
        head.appendChild(link);
        consoleLog("### OT CSS Override added ###" +link.href);
    }


    // function to initiate One Trust Service
    var loadOnetrust = function(url) {
        var headTag = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        let ddScriptConfig = getOTDataDomainConfig();
        consoleLog("data-domain-script: "+ddScriptConfig);
        script.setAttribute("data-domain-script", ddScriptConfig);
        script.type = "text/javascript";
        script.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";
        script.async = true;
        headTag.appendChild(script);
    };
    // initialize GDPR
    var init = function() {
        try {
            consoleLog("Initiating GDPR");
            //Load OneTrust Script
            if (isOTEnabled(document.URL)) {
                consoleLog("### Loading One Trust ####");
                if (isOTCSSOverride) {
                    addOTCSSOverride(document.location.host);
                }
                loadOnetrust();
            } else {
                consoleLog("OneTrust not enabled on this page!");
            }
        } catch (e) {
            console.log("ctm-core initiation error:", e);
        }
    };

    //initiate Tealium Call Back Function will be overridden in ctm.js
    var initiateTealium = function(obj) {
        eventqueue.push(obj);
    };
    // initiate Adobe Targeter Call Back Function will be overridden in pzn-init.js
    var initiatePznLib = function(obj) {
        eventqueue.push(obj);
    };
    return {
        isFirstVisit: isFirstVisit,
        isPrivacyPage:isPrivacyPage,
        isEU:isEU,
        owCount: owCount,
        init: init,
        isOTEnabled: isOTEnabled,
        //isTealiumConsentLoaded: isTealiumConsentLoaded,
        eventqueue: eventqueue,
        getPerformanceFlag: getPerformanceFlag,
        getTargetingFlag: getTargetingFlag,
        isOneTrustLoadedPrior: isOneTrustLoadedPrior,
        isOTCookieAvailable: isOTCookieAvailable,
        initiateTealium: initiateTealium,
        initiatePznLib:initiatePznLib,
        consoleLog:consoleLog,
        gdprLogQueue:gdprLogQueue
    }
})();
// End of gdpr function
//Call back function triggered by OT
function OptanonWrapper() {
    //window.dataLayer.push({ event: 'OneTrustGroupsUpdated' }) ;
    try {
        ctm.gdpr.consoleLog("OptanonWrapper called: "+ctm.gdpr.owCount);
        if (ctm.gdpr.owCount === 0) {
            var acceptBtn = document.querySelector("#onetrust-accept-btn-handler");
            var allowAllBtn = document.querySelector("#accept-recommended-btn-handler");
            //var saveBtn = document.querySelector("button[aria-label='Save Settings']");
            var saveBtn = document.querySelector("button.save-preference-btn-handler");
            var isEU = ctm.gdpr.isEU().toString();
            ctm.gdpr.consoleLog("EU: "+isEU);
            //Binding Consent Manger to 'Cookies' link in Footer and Footer Web Component
            //CWPC-19456 : Cookie Link integration to OT Consent Manager for new CDC Footer Template
            if (typeof cdc !== "undefined" && typeof cdc.elements !== "undefined" && typeof cdc.elements.footer !== "undefined" && typeof cdc.elements.footer.self !== "undefined") {
                var footer = cdc.elements.footer.self;
            }
            var ftCkLink = ((typeof footer !== "undefined") && footer.querySelector('#privacy-manager')) || document.querySelector("footer #privacy-manager") || (document.querySelector('cdc-footer') && document.querySelector('cdc-footer').renderRoot && document.querySelector('cdc-footer').renderRoot.querySelector('#privacy-manager'));
            if (typeof ftCkLink !== "undefined" && ftCkLink !== null && ftCkLink.tagName === "A") {
                if (ftCkLink.hasAttribute("data-config-metrics-group") && (ftCkLink.getAttribute("data-config-metrics-group").toLowerCase() === "footer")) {
                    ftCkLink.setAttribute("data-config-metrics-title", "Consent Preferences - Footer");
                    ftCkLink.addEventListener("click", function(evt) {
                        if ((typeof Optanon !== "undefined") && (typeof Optanon.ToggleInfoDisplay === "function")) {
                            Optanon.ToggleInfoDisplay();
                        }
                    });
                }

            }
            //End of Cookies link in Footer
            
            if(ctm.gdpr.isEU()) {//only for EU
                //Dispatching Custom Event, so that associate event handlers can be configured for tags loading outside Tealium
                 var evBtn = new CustomEvent("OTEuButton", {
                    detail: {
                        OTEuButton: true
                    }
                });
                window.dispatchEvent(evBtn);
                //Binding Event Handler to accept button EU
                if (typeof acceptBtn !== "undefined" && acceptBtn !==null) {
                    acceptBtn.addEventListener("click", function() {
                        ctm.gdpr.initiateTealium({
                            "event": "OTAcceptBtn"
                        });
                    });
                }
                // Binding event handler for Save Settings button (Consent Manager) only for EU
                if (typeof saveBtn !== "undefined" && saveBtn !== null) {
                    saveBtn.addEventListener("click", function() {
                        ctm.gdpr.initiateTealium({
                            "event": "OTSaveBtn"
                        });
                    });
                }
                //Binding event handler for Allow All button (Consent Manager) only for EU
                if (typeof allowAllBtn !== "undefined" && allowAllBtn !== null) {
                    allowAllBtn.addEventListener("click", function() {
                        ctm.gdpr.initiateTealium({
                            "event": "OTAllowAllBtn"
                        });
                    });
                }
            } else{ // Non-EU
                try{
                    //For 'X' Icon on the Consent Banner (US519162)
                    var cbCloseIcon=document.querySelector("#onetrust-close-btn-container .ot-close-icon");
                    var cbCloseIconDataAttr ={
                        "data-config-metrics-group":"non-eu consent banner", //lpos
                        "data-config-metrics-title":"consent banner close icon",//lid
                        "data-config-metrics-item":"close the consent banner" // linktext
                    };
                    if (typeof cbCloseIcon !== "undefined" && cbCloseIcon !== null) {
                        for (const key in cbCloseIconDataAttr) {
                            if (cbCloseIconDataAttr.hasOwnProperty(key)){
                               cbCloseIcon.setAttribute(key,cbCloseIconDataAttr[key]); 
                           }                            
                        }
                    }
                    //For 'X' Icon on the Consent Manager
                    var cmCloseIcon=document.querySelector("div[aria-label='Consent Manager'] button.ot-close-icon");
                    var cmCloseIconDataAttr ={
                        "data-config-metrics-group":"consent manager window", //lpos
                        "data-config-metrics-title":"consent manager close icon",//lid
                        "data-config-metrics-item":"close the consent manager" // linktext
                    };
                    if (typeof cmCloseIcon !== "undefined" && cmCloseIcon !== null) {
                        for (const key in cmCloseIconDataAttr) {
                            if (cmCloseIconDataAttr.hasOwnProperty(key)){
                               cmCloseIcon.setAttribute(key,cmCloseIconDataAttr[key]); 
                           }                            
                        }
                    }

                } catch(e){
                    console.log("exception in adding metrics attributes to close icon");
                }

            }
            /**
            * Scenario 1:This function is executed with overridden definition in util/utagLoader.js, if this OT callback happens post ctm.js
            * Scenario 2: This function is executed with definition to push event obj to array, if OT callback happens before ctm.js
            **/
            if (ctm.gdpr.isFirstVisit) {
                ctm.gdpr.consoleLog("### First Visit ####");
                //Code to dispatch OTFirstVist Custom Event
                var ev = new CustomEvent("OTFirstVisit", {
                    detail: {
                        OTFirstVisit: true
                    }
                });
                window.dispatchEvent(ev);
                ctm.gdpr.isFirstVisitEventTriggered = true;
                //end of code for custom event
                ctm.gdpr.initiatePznLib({
                    "event": "PznInitialLoad",
                    "isEU":isEU
                });
                ctm.gdpr.initiateTealium({
                    "event": "OTInitialLoad"
                });                
            }
            
        }
        // Counter to signify first OT load
        ctm.gdpr.owCount++;
    } catch (e) {
        console.log("exception in OptanonWrapper function", e);
    }
}

// Initialize GDPR
ctm.gdpr.init();


