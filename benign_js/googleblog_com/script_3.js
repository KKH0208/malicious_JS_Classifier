/* 元のURL: https://googleblog.com */

  let trustedTypePolicy = {
      createHTML: (str) => str,
      createScript: (str) => str,
      createScriptURL: (url) => url
  };
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
      const safeScriptDomains = [
          'blob:',
          '/static/blogv2/',
          '/static/keyword/',
          '/static/youtube/',
          '/static/blog_youtube/',
          '//cdn.ampproject.org/',
          '//googleads.g.doubleclick.net',
          '//survey.g.doubleclick.net',
          '//www.google-analytics.com/',
          '//www.google.com',
          '//www.googletagmanager.com',
          '//www.gstatic.com',
          '//www.youtube.com',
          '//youtube.googleapis.com',
          '//ssl.gstatic.com/trends_nrtr/'
      ];
      const safeScripts = [
          'google_tag_manager[""]',
          '(function anonymous('
      ];
      trustedTypePolicy = window.trustedTypes.createPolicy('default', {
          /* Enable create HTML */
          createHTML: (str) => {
              return str
          },
          /* Enable script creation */
          createScript: (str) => {
              const safeScriptString = safeScripts.find(
                  (safeScript) => str.includes(safeScript)
              );
              if (!safeScriptString) {
                  console.warn(
                      `unsafe createScript: "${str}"`
                  );
              }

              return str;
          },
          /* Allow for safe domains only */
          createScriptURL: (url) => {
              const safeDomainsUrl = safeScriptDomains.find(
                  (safeDomain) => url.includes(safeDomain)
              );
              if (!safeDomainsUrl && !url.startsWith(window.location.origin)) {
                  console.warn(
                      `Unsafe createScriptURL: "${url}"`
                  );
              }

              return url;
          },
      });
  }

  window.trustedTypePolicy = trustedTypePolicy;


