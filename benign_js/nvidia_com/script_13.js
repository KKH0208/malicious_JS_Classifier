/* 元のURL: https://nvidia.com */


var nvidiaGDClogqueue = [];
var nvidiaGDClog = function() {
    nvidiaGDClogqueue.push(arguments)
};

;(function ( nvidiaGDC ){
    
    nvidiaGDC.SC = nvidiaGDC.SC || {};
    nvidiaGDC.SC.vars = nvidiaGDC.SC.vars || {};
    nvidiaGDC.SC.vars.pageTemplate = "/conf/nvidiaweb/settings/wcm/templates/enterprise-template".toLowerCase();
    

    var nvidiaGDCFunctionQueue = function(){
                this.queue = [];
            };
            nvidiaGDCFunctionQueue.prototype.addToQueue = function(funcItem){
                nvidiaGDClog("funcqueue/add");
                nvidiaGDClog(funcItem);
                this.queue.push(funcItem);
            };
            nvidiaGDCFunctionQueue.prototype.clearQueue = function(){
                this.queue.length = 0;
            };
            nvidiaGDCFunctionQueue.prototype.executeQueue = function(){

                var nQueueLength = this.queue.length;
                var sTargetID,
                    sMethodName,
                    aParams,
                    $targetElement,
                    fMethod;

                for (var i = 0; i < this.queue.length; i++) {
                    try {
                        var funcItem = this.queue[i];

                        if (typeof funcItem === 'object') {
                            nvidiaGDClog("funcqueue/object: " + funcItem['method']);
                                sTargetID = funcItem['id'];
                                sMethodName = funcItem['method'];
                                aParams = funcItem['params'];
                                $targetElement = $(document.getElementById(sTargetID));
                                fMethod = $targetElement[sMethodName];

                            fMethod.apply($targetElement, aParams);

                        } else if (typeof funcItem === 'string' && nvidiaGDC.Func) {
                            nvidiaGDClog("funcqueue/string: " + funcItem);
                            if (typeof nvidiaGDC.Func[funcItem] === 'function') {
                                nvidiaGDC.Func[funcItem].call();
                            }

                        }
                    } catch(err) {
                        if (typeof console == "object") {
                            nvidiaGDClog("Error running script - " + err + " (Has plugin been included?)");
                            nvidiaGDClog({
                                "sTargetID" : sTargetID,
                                "sMethodName" : sMethodName,
                                "aParams" : aParams,
                                "$targetElement" : $targetElement,
                                "fMethod" : fMethod
                            });
                        }
                    }
                }
                this.clearQueue();
            };

            nvidiaGDC.funcQueue = nvidiaGDC.funcQueue || new nvidiaGDCFunctionQueue();
     
})(NVIDIAGDC);




