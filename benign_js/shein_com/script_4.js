/* 元のURL: https://shein.com */

  // 获取阈值下限 
  function getThresholdLower() {
    // 页面有 sw
    if (
      window?.SaPageInfo?.page_name === 'page_checkout' ||
      window?.SaPageInfo?.page_name === 'page_cart'
    ) {
      return 0
    }
    return 100
  }
  window.__FSP_OPTIONS__ = {
    mode: 'manual',
    // 在容器中要忽略的元素的 class 列表, 比如弹窗我们并不关心, 需要 ignore 掉
    ignoreClasses: [
      'branch-first', // app 引流弹窗
      'c-vue-coupon', // 首页优惠券弹窗
      'c-quick-register', // 注册弹窗
    ],
    // 超时时间 (单位毫秒), 如果用户无操作, 最长多久结算 fsp
    timeout: 10 * 1000,
    // 记录 fsp 时间的阈值下限 (单位毫秒), 低于这个阈值的 fsp 不会上报 (比如fsp 发生在浏览器前进/后退时有缓存的场景, 这种情况下, fsp 一般为一个很小的值, 大概率在 30ms 左右)
    thresholdLower: getThresholdLower,
    // 记录 fsp 时间的阈值上限 (单位毫秒), 超过这个阈值的 fsp 不会上报
    thresholdUpper: 15 * 1000,
    // 相同场景跳转的采样数量
    sceneSampleCount: 5,
    // 如果触发 fsp 结算时, 页面滚动超过一定距离, 这样可能曝光非首屏元素, 而非首屏元素可能没有经过专门优化 (比如 SSR),
    // 所以不适合上报 fsp 的值; 此配置项用来设置: 当页面滚动超过多少距离时, 就不上报 fsp
    ignoreScrollY: {
      // 可以设置像素值, 也可以设置相对于一页的高度的值: 比如 1/2 页高度的距离
      unit: 'page',
      value: 0.3
    }
  }


