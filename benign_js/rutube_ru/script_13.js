/* 元のURL: https://rutube.ru */

      if (typeof window === 'object') {
        if (/(^\/pl)(\/|$)/.test(window.location.pathname)) {
          let redirectUrl = window.location.origin;
          const search = window.location.search;
          const params = search.substring(1).split('&').reduce((acc, param) => {
            const [name, value] = param.split('=');
            acc[name] = value;
            return acc;
          }, { pl_id: '', pl_video: '' });
          if (params.pl_video) {
            redirectUrl += '/play/embed/' + params.pl_video;
            window.location.replace(redirectUrl);
          }
        }
      }
    

