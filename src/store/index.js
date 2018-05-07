import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createPromiseMiddleware from 'redux-promise-middleware'
import {routerReducer, routerMiddleware} from 'react-router-redux';
import history from '@/History';
import homeReducer from '@/pages/Home/reducer.js';
import userCenterReducer from '@/pages/UserCenter/reducer.js';
// 全局变量赋值（便于代码缩小器缩小代码）
const win = window;
const reducer = combineReducers({
  router: routerReducer,
  home: homeReducer,
  userCenter: userCenterReducer
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
const store = createStore(reducer, {}, storeEnhancers);
export default store;
