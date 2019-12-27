const api = process.env.NODE_ENV === 'development' ? '/api' : ''

// ===================发现页面
export const bannerSwiper = api + '/banner?type=1' // 请求发现页面轮播图
