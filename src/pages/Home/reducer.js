import {combineReducers} from 'redux';
// import update from 'immutability-helper';
// import typeToReducer from 'type-to-reducer';
// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import {HOME_GET_BANNER, HOME_GET_RECOMMEND} from './actionTypes.js';
import {apiReducer} from '@/utils';

// banner数据
// const banner = typeToReducer({
//   [HOME_GET_BANNER]: {
//     [PENDING]: (state, action) => update(state, {loading: { $set: true }}),
//     [REJECTED]: (state, action) => update(state, {loading: { $set: false }, error: { $set: action.payload}}),
//     [FULFILLED]: (state, action) => update(state, {loading: { $set: false }, data: { $push: action.payload.data.data}}),
//   }
// }, {
//   data: [],
//   error: null,
//   loading: false
// })
// 推荐大神数据
// const recommend = typeToReducer({
//   [HOME_GET_RECOMMEND]: {
//     [PENDING]: (state, action) => update(state, {loading: { $set: true }}),
//     [REJECTED]: (state, action) => update(state, {loading: { $set: false }, error: { $set: action.payload}}),
//     [FULFILLED]: (state, action) => update(state, {loading: { $set: false }, data: { $push: action.payload.data.data}}),
//   }
// }, {
//   data: [],
//   error: null,
//   loading: false
// })

const banner = apiReducer(HOME_GET_BANNER, [])
const recommend = apiReducer(HOME_GET_RECOMMEND, [])

export default combineReducers({ banner, recommend })
