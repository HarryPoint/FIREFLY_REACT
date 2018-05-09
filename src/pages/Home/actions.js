import {HOME_GET_BANNER} from './actionTypes.js';
import {getBanner} from '@/api';

// 获取banner
export const actionHomeGetBanner = () => ({
    type: HOME_GET_BANNER,
    payload: getBanner()
});
