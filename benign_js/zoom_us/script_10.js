/* 元のURL: https://zoom.us */

    window.zoomCampaignSdkConfig = {
      getAuthCredentials: function () {
        const cookies = document.cookie;
        const cookieArray = cookies.split("; ");
        const cookieMap = {};
        cookieArray.forEach((cookie) => {
          const [key, value] = cookie.split("=");
          cookieMap[decodeURIComponent(key)] = decodeURIComponent(value);
        });
        const guid = cookieMap["_zm_cms_guid"] || "";
        return fetch("https://zoom.us/zendesk/chat_jwt_asym?cms_guid=" + guid, { credentials: "include" })
          .then((res) => {
            return res.json().then(data => {
              return { data: data, traceId: res.headers.get("x-zm-trackingid") }
            })
          })
          .then(({ data, traceId }) => {
            return {
              jwt: data?.loginUserIdJwt,
              traceId: traceId
            }
          });
      }
    }
  

