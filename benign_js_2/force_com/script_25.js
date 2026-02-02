/* 元のURL: https://force.com */

    window.document.dispatchEvent(
        new CustomEvent('www_track', {
            detail: {
                event: 'custEv_pageDataAvailable',
                templateName: 'Open Template',
                templateId: 'open-template',
                taxonomy: JSON.parse('{"pageTagsManual":[{"tagName":"Products:Agentforce|Salesforce Platform","tagUuid":"d4e97755-9465-4769-9171-7e836b64e542|a4973f7d-37fb-4570-b8a7-a2c55cf49b46","uuid":"db1727a8-2c68-11b2-80f8-000d3a4fec0d"},{"tagName":"Topics:Application Development|Artificial Intelligence (Topics)|Platform|Security","tagUuid":"009b1ffc-8544-415a-a71d-da7c1c2f660d|ca230df1-4c48-43f3-80d5-d3cbe6168761|f813d21d-05c9-4d35-92d3-5cbeed8debb2|b9fb10e6-612c-40f5-a4d3-83c3d3cfdc83","uuid":"db1727ae-2c68-11b2-80f8-000d3a4fec0d"},{"tagName":"Content Audiences:IT (Department)","tagUuid":"73a900b8-c0b5-4214-935a-46c449a3a7f7","uuid":"db17278a-2c68-11b2-80f8-000d3a4fec0d"}],"pageTagsAuto":[]}'),
                experiment:  {
                    'optimizelyExp': '',
                    'optimizelyVar': '',
                },
            },
        })
    );


