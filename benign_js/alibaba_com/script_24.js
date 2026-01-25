/* 元のURL: https://alibaba.com */

window.addEventListener('DOMContentLoaded', () => {
  try {
        const vnBannerSrc =
      (window.__PageInitData.localData && window.__PageInitData.localData.topResourcePic) ||
      (window.__PageInitData.welcomeNavData&&window.__PageInitData.welcomeNavData.topResourcePic);
    if (vnBannerSrc) {
      const vnBanner = document.createElement('img');
      vnBanner.src = vnBannerSrc;
      vnBanner.style = 'width:100%;display:block;';
      document.body.insertBefore(vnBanner, document.getElementById('beacon-aplus'));
    }
  } catch (error) {
    /** ignore*/
  }
});



