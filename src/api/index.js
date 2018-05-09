import { ajax } from '@/utils';
// 获取banner
export const getBanner = () => ajax({ url: '/banner.json', method: 'GET' });
