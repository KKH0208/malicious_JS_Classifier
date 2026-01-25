/* 元のURL: https://globo.com */

    class GetGlbId {
      static parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(payload);
      }

      static getCookie(name) {
        const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return match ? match[1] : null;
      }

      static handle() {
        try {
          const TOKEN_KEY = 'GLOBO_ID';
          const token = GetGlbId.getCookie(TOKEN_KEY);
          const payload = GetGlbId.parseJwt(token);
          return payload.globoId;
        } catch(e) {
          return null;
        }
      }
    }
    window.getGlbId = GetGlbId.handle
  

