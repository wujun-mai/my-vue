import { get, post } from './config'

export const article = p => get('Index/article', p); // 首页文章

export const hotHotel = p => get('Index/index_x', p);  // 首页酒店

export const city = p => post('Index/city', p)// 头部酒店城市选择

export const hotHotelInfo = p => post('WeChat/housing_det', p)//hotal申请接口params传值一直报错