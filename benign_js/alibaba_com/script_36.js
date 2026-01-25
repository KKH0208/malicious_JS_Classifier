/* 元のURL: https://alibaba.com */

try {    
    fetch("https://login.alibaba.com/getEnvironment.do?experimentKey="+(window.icbuOneTapLoginBizKey), {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    }).then(response => response?.json()).then(function (result) {
        if(result && result.data && result.data.bucket && result.data.bucket === 'google_one_tap') {
            var icbu_script = document.createElement("script");
            icbu_script.type = "text/javascript";
            icbu_script.onload = function () {
                if(window.icbu_oneTapLogin && window.icbuOneTapLoginBizKey) {
                    window.icbu_oneTapLogin_Config = {
                        bxLocation: result.data.bxLocation || "cn"
                    }
                    window.icbu_oneTapLogin.open({
                      bizKey: window.icbuOneTapLoginBizKey,
                      loginRedirectUrl: window.loginRedirectUrl,
                      icbuOneTapLoginReturnUrl: window.icbuOneTapLoginReturnUrl,
                      delay: window.icbuOneTapLoginBizKey === 'msite_one_tap_pla'? 3000: 0
                    });
                }
            };
            icbu_script.src = "https://s.alicdn.com/@g/code/npm/@ali/icbu-member-one-tap-login/0.0.11/index.umd.es5.production.js";
            
            // 创建 link 标签来加载 CSS
            var icbu_style = document.createElement("link");
            icbu_style.rel = "stylesheet";
            icbu_style.href = "https://s.alicdn.com/@g/code/npm/@ali/icbu-member-one-tap-login/0.0.11/index.umd.es5.production.css";
            
            // 将 script 和 link 标签添加到 head
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(icbu_style);
            head.appendChild(icbu_script);
        }
    });
} catch(e) {
    console.error("Error in one-tap login script:", e);
}


