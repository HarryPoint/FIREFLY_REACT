import {HOME_GET_BANNER, HOME_GET_NAV, HOME_GET_RECOMMEND} from './actionTypes.js';
import {
  getBanner,
  getNav,
  getRecommend
} from '@/api';

// const makeActionCreator => (type, ...argNames) {
//   return (...args) => {
//     let action = { type }
//     argNames.forEach((arg, index) => {
//       action[argNames[index]] = args[index]
//     })
//     return action
//   }
// }
// 获取banner
export const actionHomeGetBanner = () => ({
  type: HOME_GET_BANNER,
  payload: getBanner()
})
// 获取导航栏目
export const actionHomeGetNav = () => ({
  type: HOME_GET_NAV,
  payload: getNav()
})
// 获取推荐陪玩
export const actionHomeGetRecommend = () => ({
  type: HOME_GET_RECOMMEND,
  payload: getRecommend()
})
