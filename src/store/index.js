import defaultStore from './defaultStore.js';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createPromiseMiddleware from 'redux-promise-middleware'
import {routerReducer, routerMiddleware} from 'react-router-redux';
import history from '@/History';
import homeReducer from '@/pages/Home/reducer.js';
import activityReducer from '@/pages/Activity/reducer.js';
import photoReducer from '@/pages/Photo/reducer.js';
import propReducer from '@/pages/Prop/reducer.js';
import aboutReducer from '@/pages/About/reducer.js';
// 全局变量赋值（便于代码缩小器缩小代码）
const win = window;
const reducer = combineReducers({
    router: routerReducer,
    home: homeReducer,
    activity: activityReducer,
    photo: photoReducer,
    prop: propReducer,
    about: aboutReducer,
});
const promiseMiddleware = createPromiseMiddleware();

const middlewares = [promiseMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
    // redux-immutable-state-invariant辅助包（reducer违反纯函数时给出警告）
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
const store = createStore(reducer, defaultStore, storeEnhancers);
export default store;
