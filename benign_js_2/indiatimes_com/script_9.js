/* 元のURL: https://indiatimes.com */

    window.gtminfo = window.gtminfo || [];
    window.gtminfo.lang = 'en';
    window.gtminfo.BASE_URL = 'https://www.indiatimes.com';
    window.gtminfo.AUD_API_URL = 'https://ade.clmbtech.com/cde/aef/var=colaud';
    window.gtminfo.DMP_CID_DESKTOP = '2360:68';
    window.gtminfo.DMP_CID_MOBILE = '2360:42';
    window.gtminfo.GTM_ID = 'GTM-TDGJZS';
    window.gtminfo.FACEBOOK_APP_ID = '317770116910576';
    window.gtminfo.FACEBOOK_PIXEL_ID = '345736496016245';
    window.gtminfo.FACEBOOK_PIXEL_ID_1 = '853339751421540';
    window.gtminfo.FACEBOOK_PIXEL_ID_HINDI = '413978002515022';
    window.gtminfo.GOOGLE_ANALYTICS_ID = 'UA-198011-6';
    window.gtminfo.COMSCORE_ID = '6036484';

    let detail_url = window.location.href;
    let detail_patterns = ["/articleshow/","/photoshow/","/videoshow/","/podcast/","/immersivestories/","/quizshow/"];
    let detail_contentid = "NA";
    if (detail_patterns.some(pattern => detail_url.includes(pattern))) {
        let detail_regex = /(?:articleshow|photoshow|videoshow|podcast|immersivestories|quizshow)\/(\d+)\.html/;
        let detail_match = detail_url.match(detail_regex);
        if (detail_match) {
            detail_contentid = detail_match[1];
        }
    }

    window.gtminfo.articleUpdateDate = window.gtmInfo && window.gtmInfo.content_update_date ? window.gtmInfo.content_update_date : 'NA';
    window.gtminfo.articlePublishDate = window.gtmInfo && window.gtmInfo.content_publish_date ? window.gtmInfo.content_publish_date : 'NA';
    window.gtminfo.articleContentType = window.gtmInfo && window.gtmInfo.content_type ? window.gtmInfo.content_type : 'NA';
    window.gtminfo.articleAuthor = window.gtmInfo && window.gtmInfo.content_author ? window.gtmInfo.content_author : 'NA';
    window.gtminfo.articleId = detail_contentid;
    window.gtminfo.isShopArticle = 0;
    window.gtminfo.isMobile = 0;
    window.gtminfo.now = '1746784118100';


