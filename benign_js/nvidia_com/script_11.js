/* 元のURL: https://nvidia.com */


var NVIDIAGDC = NVIDIAGDC || {};

;(function ( nvidiaGDC ){
  

    nvidiaGDC.addProperty = function(obj, name, val){
        if (!obj && !name){
            return;
        }
        
        nvidiaGDC[obj] = nvidiaGDC[obj] || {};
        
        if(typeof val != "undefined" && val != null){
            if(!nvidiaGDC[obj].hasOwnProperty(name) || !nvidiaGDC[obj][name]){
                nvidiaGDC[obj][name] = val;
            }    
        }
    };


   nvidiaGDC.addProperty('Accounts', 'LoginPage', 'https://www.nvidia.com/ja-jp/account/');
   nvidiaGDC.addProperty('Accounts', 'LoginGatePage', 'https://www.nvidia.com/en-us/account/login-gate/');
	nvidiaGDC.addProperty('Accounts', 'accountsJarvisSrvcBase', 'https://accounts.nvgs.nvidia.com');
	nvidiaGDC.addProperty('Accounts', 'accountsJarvisHeaderMagicValue', '');
	nvidiaGDC.addProperty('Accounts', 'accountsJarvisHeaderCFGRefereID', 'Account Mini-Site');
	nvidiaGDC.addProperty('apps', 'endpoint', 'https://api-prod.nvidia.com');
	nvidiaGDC.addProperty('web', 'env', 'p-prod');
    nvidiaGDC.addProperty('web', 'q1', '');
    nvidiaGDC.addProperty('web', 'q2', '');
    nvidiaGDC.addProperty('web', 'q3', '');
    var genai="true";
    if(genai===""){
    	genai="true";
    }
    nvidiaGDC.addProperty('ai', 'gen', genai);

})(NVIDIAGDC);


