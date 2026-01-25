/* 元のURL: https://uber.com */
(function (){class PubSub{#s={};subscribe(s,b){return this.#s[s]||(this.#s[s]=[]),this.#s[s].push(b),()=>this.unsubscribe(s,b)}unsubscribe(s,b){this.#s[s]&&(this.#s[s]=this.#s[s].filter((s=>s!==b)))}publish(s,b){this.#s[s]&&(this.#s[s].forEach((s=>{s(b)})),this.clear(s))}clear(s){s?delete this.#s[s]:this.#s={}}}
window.__PUB_SUB__ = new PubSub();})();

