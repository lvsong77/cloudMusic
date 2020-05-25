import { cloudMusicRequest } from './request'

export default{
  // 登录
  cloudMusicLogin(params) {
    return cloudMusicRequest({
      url: '/login/cellphone',
      params
    })
  },
  // 获取登录状态
  getLoginStatus() {
    return cloudMusicRequest({
      url: '/login/status'
    })
  },
  // 获取发现页banner
  getBanner(params) {
    return cloudMusicRequest({
      url: '/banner',
      params
    })
  },
  // 获取每日推荐歌曲
  getDailyRecommendSongs() {
    return cloudMusicRequest({
      url: '/recommend/songs',
    })
  },
  // 获取音乐url
  getSongUrl(params) {
    return cloudMusicRequest({
      url: '/song/url',
      params
    })
  },
// 获取播放列表
  getPlayList(params) {
    return cloudMusicRequest({
      url: '/user/playlist',
      params
    })
  },
  // 获取用户歌单
  getuserSongSheet(params) {
    return cloudMusicRequest({
      url: '/user/playlist',
      params
    })
  }









}