/* 元のURL: https://pinterest.com */

          let cspReportsCount = 0;
          document.addEventListener('securitypolicyviolation', async (event) => {
            if (event.originalPolicy.includes('report-uri') || cspReportsCount >= 500) {
              return;
            }
            cspReportsCount += 1;
            await fetch('/_/_/csp_report/', {
              method: 'POST',
              body: JSON.stringify({
                'csp-report': {
                  'blocked-uri': event.blockedURI,
                  'column-number': event.columnNumber,
                  disposition: event.disposition,
                  'document-uri': event.documentURI,
                  'effective-directive': event.effectiveDirective,
                  'line-number': event.lineNumber,
                  'original-policy': event.originalPolicy,
                  referrer: event.referrer,
                  sample: event.sample,
                  'source-file': event.sourceFile,
                  'status-code': event.statusCode,
                  'violated-directive': event.violatedDirective,
                  'is-metatag': true,
                },
              }),
            });
          });
      

