/* 元のURL: https://alibaba.com */

  try {
    //  NOTE: 隐藏功能，展现当前用户性能 id : Agadoid 
    var $AgadoIdEl = document.createElement('div');
    var $footer = document.querySelector("#ui-footer");
    var $trigger = document.querySelector("#ui-footer > div.ui-footer-seo > p.ui-footer-seo-policy");
    $AgadoIdEl.innerText = 'Double click to report performance issue.';
    $AgadoIdEl.style.cssText = `
      color: rgb(140 139 139);
      bottom:0;
      left: 50%;
      text-align: center;
    `
    $trigger.ondblclick =function() {
      $footer.appendChild($AgadoIdEl);
    };

    $AgadoIdEl.ondblclick =function (){
      alert(window.__BB_PARAMS__.performance.agado_id);
      $footer.removeChild($AgadoIdEl);
    }
  } catch(e) {
    console.error(e)
  }


