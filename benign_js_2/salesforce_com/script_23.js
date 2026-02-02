/* 元のURL: https://salesforce.com */

    window.document.dispatchEvent(
        new CustomEvent('www_track', {
            detail: {
                event: 'custEv_pageDataAvailable',
                templateName: 'Homepage Template',
                templateId: 'homepage-template',
                taxonomy: JSON.parse('{"pageTagsManual":[{"tagName":"Topics:CRM","tagUuid":"0b083ccf-75ad-406c-af1a-6a7c9755444d","uuid":"db1727ae-2c68-11b2-80f8-000d3a4fec0d"}],"pageTagsAuto":[]}'),
                experiment:  {
                    'optimizelyExp': '',
                    'optimizelyVar': '',
                },
            },
        })
    );


