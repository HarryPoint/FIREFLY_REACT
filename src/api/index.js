import { ajax } from '@/utils';
// 获取banner
export const getBanner = () => ajax({ url: '/banner.json', method: 'GET' });
// 获取首页导航栏目
export const getNav = () => ajax({ url: '/nav.json', method: 'GET' });
// 获取首页推荐陪玩
export const getRecommend = () => ajax({ url: '/skill/indexRecommend.json', method: 'GET' });
