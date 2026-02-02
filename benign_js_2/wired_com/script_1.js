/* 元のURL: https://wired.com */
(()=>{var r=class{constructor(){this.registry={}}register(t,e){if(this.registry[t])throw new Error("Event with key "+t+" already exists.");this.registry[t]=e,Object.defineProperty(this,t,{get(){return this.registry[t]},enumerable:!0,configurable:!1})}delete(t){delete this.registry[t],delete this[t]}get(t){let e=this.registry[t];if(!e)throw new Error("Event with key "+t+" is not registered.");return e}};(function(){let n=new r;window.Kendra=n})();})();

