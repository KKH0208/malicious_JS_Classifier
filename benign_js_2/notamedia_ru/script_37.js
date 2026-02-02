/* 元のURL: https://notamedia.ru */
// 外部JS: https://piper.amocrm.ru/pixel/js/identifier/pixel_identifier.js
window.AMOPIXEL_IDENTIFIER || (function () {
  'use strict';

  /**
   * Данный модуль предназначен для получения идентификатора посетителя из куки нашего домена.
   * Для этого данный скрипт вставляет на страницу скрытый iframe, загружаемый с нашего домена.
   * Внутри iframe загружается скрипт pixel_identifier_iframe.js, который может читать куки, установленные в наш домен.
   * Скрипт внутри iframe проверяет наличие куки с идентификатором пользователя.
   * Если куки нет, то скрипт запросит её с сервера.
   * После получения идентификатора пользователя, скрипт внутри iframe отправит postMessage с этим идентификатором
   * в родительское окно (в окно, в котором загружен ДАННЫЙ js-файл).
   * Данный js-файл ловит postMessage, достает из него идентификатор посетителя и сохраняет его в локальную переменную.
   * Если в параметрах скрипта была указана callback-функция на загрузку данных (window.AMOPIXEL_IDENTIFIER_PARAMS.onload),
   * то она будет вызвана и в нее будет передан текущий объект Identifier первым параметром.
   * С помощью публичного метода "getVisitorUid" этого объекта можно получить идентификатор посетителя, присланный из iframe.
   */

  // JSON polyfill
  window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(r){if(r instanceof Object){var t="";if(r.constructor===Array){for(var n=0;n<r.length;t+=this.stringify(r[n])+",",n++);return"["+t.substr(0,t.length-1)+"]"}if(r.toString!==Object.prototype.toString)return'"'+r.toString().replace(/"/g,"\\$&")+'"';for(var i in r)t+='"'+i.replace(/"/g,"\\$&")+'":'+this.stringify(r[i])+",";return"{"+t.substr(0,t.length-1)+"}"}return"string"==typeof r?'"'+r.replace(/"/g,"\\$&")+'"':String(r)}});

  /**
   * Константы модуля
   */
  var PIXEL_IDENTIFIER_JS_ID = 'amo_pixel_identifier_js';
  var IFRAME_PATH = '/pixel/html/identifier_iframe.html';
  var POST_MESSAGE_ID = 'pixel_identifier';

  /**
   * Приватные данные модуля
   */
  var Data = {
    base_host: '',
    visitor_uid: null,
    callbacks: {
      onload: function () {
      }
    }
  };

  /**
   * Приватные методы модуля
   */
  var Fn = {};

  /**
   * Метод вставляет iframe на страницу
   * @param {String} base_host
   */
  Fn.insertIframe = function (base_host) {
    var
      first = document.getElementsByTagName('script')[0],
      iframe = document.createElement('iframe'),
      data = {
        origin: location.origin
      };

    iframe.src = base_host + IFRAME_PATH + '?params=' + encodeURIComponent(JSON.stringify(data));
    iframe.setAttribute('style', 'display:none!important');
    first.parentNode.insertBefore(iframe, first);
  };

  /**
   * Обработчик событий postMessage, приходящих из iframe
   * @param {Object} event
   */
  Fn.handlePostMessage = function (event) {
    var data;
    if (event.origin !== Data.base_host || !event.data) {
      return;
    }
    data = JSON.parse(event.data);
    if ((typeof data !== 'object') || data.message_id !== POST_MESSAGE_ID || !data.visitor_uid) {
      return;
    }
    window.removeEventListener('message', Fn.handlePostMessage, false);
    Data.visitor_uid = data.visitor_uid;
    Data.callbacks.onload(window.AMOPIXEL_IDENTIFIER);
  };

  /**
   * Конструктор объекта AMOPIXEL_IDENTIFIER
   * @constructor
   */
  var Identifier = function () {
    var host,
      identifier_script = document.getElementById(PIXEL_IDENTIFIER_JS_ID);

    if (!identifier_script || !identifier_script.src) {
      return;
    }

    host = identifier_script.src.match(/(http.+\.\w+)\//);

    if (!host || !host[1]) {
      return;
    }

    Data.base_host = host[1];

    if (typeof window['postMessage'] === 'function') {
      window.addEventListener('message', Fn.handlePostMessage, false);
    }

    if (typeof window['AMOPIXEL_IDENTIFIER_PARAMS'] === 'object' && window['AMOPIXEL_IDENTIFIER_PARAMS'] !== null) {
      if (typeof window['AMOPIXEL_IDENTIFIER_PARAMS']['onload'] === 'function') {
        Data.callbacks.onload = window['AMOPIXEL_IDENTIFIER_PARAMS']['onload'];
      }
    }

    Fn.insertIframe(Data.base_host);
  };

  /**
   * Публичный метод получения идентификатора посетителя
   * @public
   * @return {String|null}
   */
  Identifier.prototype.getVisitorUid = function () {
    return Data.visitor_uid;
  };

  window.AMOPIXEL_IDENTIFIER = new Identifier();
}).call(window);


