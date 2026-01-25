/* 元のURL: https://avast.com */

        window.FEATURE_FLAGS = 'WEBAVAST-7241,WEBEXP-70616,WEBEXP-70617';
        window.nortonAnalytics = {
          'account': decodeURIComponent('symanteccom'),
          'site_country': 'jp',
          'site_language': 'ja',
          'content_title': decodeURIComponent('index'),
          'content_format': 'html',
          'content_type': 'page',
          'site_section': decodeURIComponent('avast.com'),
          'site_sub_section': decodeURIComponent('na'),
          'site_sub_sub_section': decodeURIComponent('homepage'),
          'page_name': decodeURIComponent('homepage'),
          'lang_ctry_code': '', // this MUST not be used anywhere else beside the limited languages configured in osgi, it will be empty for most of the sites
          'environment': 'prod',
        };
        window.sdlObj = {
          'pageType': 'homepage',
          'lineOfBusiness': 'consumer',
          'screenId': '87cdcf74-9bce-4545-949a-dfb1710acf9c',
        };
        const inid = localStorage.getItem('inid');
        if (inid) {
          nortonAnalytics.inid = inid;
          localStorage.removeItem('inid');
        }
      

