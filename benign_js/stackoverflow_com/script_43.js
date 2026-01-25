/* 元のURL: https://stackoverflow.com */

    var cam = cam || { opt: {} };
    var clcGamLoaderOptions = cam || { opt: {} };
    var opt = clcGamLoaderOptions.opt;

    opt.omni = 'BwoLCJyA0PSRncs-EAUgAigBOgBIANdZGTU4hH11nm4';
    opt.refresh = !1;
    opt.refreshInterval = 30;
    opt.sf = !0;
    opt.hb = !1;
    opt.ll = !0;
    opt.tlb_position = 0;

    opt.personalization_consent = false;
    opt.targeting_consent_set = false;
    opt.performance_consent_set = false;
    opt.targeting_consent = false;
    opt.performance_consent = false;

    opt.targeting = {Registered:['false'],Reputation:['new'],cf_bot_score:'1'};
    opt.adReportEnabled = !0;
    opt.adReportUrl = '/ads/report-ad';
    opt.adReportText = 'Report this ad';
	opt.adReportFileTypeErrorMessage = 'Please select a PNG or JPG file.';
    opt.adReportFileSizeErrorMessage = 'The file must be under 2 MiB.';
	opt.adReportErrorText = 'Error uploading ad report.';
	opt.adReportThanksText = 'Thanks for your feedback. We’ll review this against our code of conduct and take action if necessary.';
    opt.adReportLoginExpiredMessage = 'Your login session has expired, please login and try again.';
    opt.adReportLoginErrorMessage = 'An error occurred when loading the report form - please try again';
	opt.adReportModalClass = 'js-ad-report';
    opt.countryCode = 'JP';
    opt.qualtricsSurveyData = '{"isRegistered":"False","repBucket":"new","referrer":"https%3a%2f%2fstackoverflow.com%2fquestions","accountAge":"0"}';

    opt.perRequestGuid = 'd3610fd5-32ff-4e5f-8099-a22a7bd5e318';
    opt.responseHash = 'J2Q0UH4ELmwxwsfGs5pUxI92CthBiFuNw8tVXnSkZhk=';


    opt.targeting.TargetingConsent = ['False_Passive'];
    opt.allowAccountTargetingForThisRequest = !1;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('dfptestads')) {
        const dfptestads = urlParams.get('dfptestads');
        opt.targeting.DfpTestAds = dfptestads;
    }


