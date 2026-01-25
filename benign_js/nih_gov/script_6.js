/* 元のURL: https://nih.gov */

    // Verint Unified WebSDK Integration Snippet v2.4
    //
    // Instructions: please embed this snippet directly into every page of your website template.
    // For optimal performance, this should be embedded directly into the template, not referenced as
    // an external file.
    //
    // DO NOT MODIFY BELOW THIS LINE *****************************************
    (function () {
      var cookies = document.cookie.split("; ").reduce(function (o, i) { var p = i.split("="); o[p[0]] = p[1]; return o; }, {});
      var containerValue = cookies.uws_container_override && JSON.parse(decodeURIComponent(cookies.uws_container_override));
      var config = window._vrntSdkInit = {
        varName: "unifiedSDK",
        moduleHost: "ucm-us.verint-cdn.com",
        configHost: "ucm-us.verint-cdn.com",
        siteKey: "nih-gov",
        container: containerValue || "live",
        loadTime: Date.now()
      };
      var readyCallbacks = []; window.uwsReady = function (callback) { readyCallbacks.push(callback); };
      var sdkPath = "//" + [config.moduleHost, "files/sites", config.siteKey, config.container, "sdk.js"].join("/");
      var script = document.createElement("script"); script.src = sdkPath; script.async = true; script.type = "module";
      script.addEventListener("load", function () { window[config.varName].start(config, readyCallbacks); });
      document.head.appendChild(script);
    })();
    // DO NOT MODIFY ABOVE THIS LINE *****************************************

    // Un-comment out the function below when you are ready to input your variable
    /*fsReady(function() {
      FSR.CPPS.set('name','value'); // use single quotes when passing a static-value
      FSR.CPPS.set('name2',somevariable); // don't use quotes for a dynamic value
      FSR.CPPS.set('name3',othervariable); // add as many CPPs as you like in this way
    });*/
  

