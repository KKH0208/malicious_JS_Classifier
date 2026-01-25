/* 元のURL: https://aliyun.com */

      	var ncLanguage = location.search.match(/ncLanguage=([^&]+)/);
      	ncLanguage = ncLanguage && ncLanguage[1];
      	if (ncLanguage) {
      		window._config_.noCaptchaLanguage = ncLanguage;
      	}
      	var custom_config = {"templateName":"集团通用处置模板"};
      	var templateName = "";
      	if (typeof custom_config === "object") {
      		templateName = custom_config["templateName"] || "";
      		window._custom_config_ = window._custom_config_ || {};
      		for (var key in custom_config) {
      			window._custom_config_[key] = custom_config[key];
      		}
      	}
      	if (typeof window._custom_config_ === "object" && window._custom_config_.noCaptchaLanguage) {
      		window._config_.noCaptchaLanguage = window._custom_config_.noCaptchaLanguage;
    	}
    

