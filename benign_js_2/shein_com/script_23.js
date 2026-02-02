/* 元のURL: https://shein.com */

  var lang = 'jp';
  var webClient = 'shein';
  var appLanguage = 'ja';

  window.GB_ANALYSIS_GA = ''
  window.GB_ANALYSIS_GA_SET = ''
  window.GB_ANALYSIS_GA_SEND = ''
  window.GB_ga_currentRate = 1
  window.PageGroup = window.PageGroup || 'other'
  window.PageGroupOverview = window.PageGroupOverview || 'other'
  window.PageGroupEmarsys = window.PageGroupEmarsys || 'other'

  window.__noop__ = function() {}
  window.GB_ga_transformPrice = __noop__
  window.GBGaSend = __noop__
  window.GB_GA_pageview = __noop__
  window.ga = __noop__

  !function () {
    if (!(window.gbCommonInfo && window.gbCommonInfo.GA_REMOVE_TIP_SWITCH)) return
    window.GA_REMOVE_TIP = function (name, source) {
      source = source || ''
      console.error(['[GA REMOVE] Please remove the', JSON.stringify(name), 'in your code.', 'Initialization page name:', window.SaPageInfo && window.SaPageInfo.page_name || 'unknown'].join(' '), source)
    }
    var props = [
      'ga',
      'GBGaSend',
      'GB_ga_transformPrice',
      'GB_GA_pageview',
      'GB_ANALYSIS_GA',
      'GB_ANALYSIS_GA_SET',
      'GB_ANALYSIS_GA_SEND',
      'GB_ga_currentRate',
    ]
    props.forEach(prop => {
      Object.defineProperty(window, prop, {
        get: function () {
          const isFn = ['ga', 'GBGaSend', 'GB_GA_pageview', 'GB_ga_transformPrice'].indexOf(prop) > -1
          window.GA_REMOVE_TIP(prop)
          return isFn ? function() {} : ''
        },
        set: function () {}
      })
    })
  }();

  window.ScarabQueue = window.ScarabQueue || [];
  (function (subdomain, id) {
    var ENTRY_PAGE_NAME = 'page_home'
    // 首页没有 emarsys 推荐，可以不加载
    if (ENTRY_PAGE_NAME === 'page_home') return

    var site = {
      en: '14AEFABFF6C30DEA',
      fr: '19DB2374A86E66CB',
      de: '1BBEDD499A9531EB',
      es: '1D243573F433C16B',
      uk: '168D45E4CC9D9A30',
      ar: '12772D590FB8B485',
      'ar-en': '12772D590FB8B485',
      au: '10ECBA3DB5F814A5',
      in: '17BB651AD5A11623',
      us: '15306811EE8118BB',
      ca:	'1A69C9CE8026BBCF',
      cafr: '1A69C9CE8026BBCF',
      il:	'1D572EBCE2FD916D',
      ilen: '1D572EBCE2FD916D',
      it:	'17581E4E3BE0039E',
      mx:	'185B89E4CD55F346',
      nl:	'15222E04E24ADCDA',
      tw:	'13459D4EDBB8F6E7',
      ru: '1417FB44A25ABAFD',
      se: '19EEECFE3D868F07',
      sesv: '19EEECFE3D868F07',
      eur: '1C3C6FDBF34C5A79',
      eurfr: '1C3C6FDBF34C5A79',
      eurnl: '1C3C6FDBF34C5A79',
      'eurpt-pt': '1C3C6FDBF34C5A79',
      br: '1290FBB9BA4228EE',
    }[lang] || '14AEFABFF6C30DEA'
    if (document.getElementById(id)) return;
    var js = document.createElement('script');
    js.id = id;
    js.async = 1;
    js.src = subdomain + '.scarabresearch.com/js/'+ site +'/scarab-v2.js';
    var fs = document.getElementsByTagName('script')[0];
    fs.parentNode.insertBefore(js, fs);
  })('https:' == document.location.protocol ? 'https://recommender' : 'http://cdn', 'scarab-js-api');


