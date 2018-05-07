import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import history from '@/History.js';
import Loadable from 'react-loadable';
import Loading from '@cp/PageLoading';
import store from '@/store';
const Home = Loadable({loader: () => import('@/pages/Home/view'), loading: Loading}) ;
const UserCenter = Loadable({loader: () => import('@/pages/UserCenter/view'), loading: Loading}) ;
const NotFound = Loadable({loader: () => import('@/pages/NotFound/view'), loading: Loading});

const authRequired = (nextState, replace) => {
    // Now you can access the store object here.
    const state = store.getState();
    console.log(state);
    if (state.admin !== 1) {
        replace('/');
    }
};
const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home} onEnter={authRequired}/>
      <Route path="/userCenter" component={UserCenter} onEnter={authRequired}/>
      <Route component={NotFound}/>
    </Switch>
  </ConnectedRouter>
);

export default Routes;
