import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import history from '@/History.js';
import Loadable from 'react-loadable';
import Loading from '@cp/PageLoading';
import store from '@/store';
const Home = Loadable({loader: () => import('@/pages/Home/view'), loading: Loading});
const Activity = Loadable({loader: () => import('@/pages/Activity/view'), loading: Loading});
const Photo = Loadable({loader: () => import('@/pages/Photo/view'), loading: Loading});
const Prop = Loadable({loader: () => import('@/pages/Prop/view'), loading: Loading});
const About = Loadable({loader: () => import('@/pages/About/view'), loading: Loading});
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
      <Route path="/Home" component={Home} onEnter={authRequired}/>
      <Route path="/Activity" component={Activity} onEnter={authRequired}/>
      <Route path="/Photo" component={Photo} onEnter={authRequired}/>
      <Route path="/Prop" component={Prop} onEnter={authRequired}/>
      <Route path="/About" component={About} onEnter={authRequired}/>
      <Route component={NotFound}/>
    </Switch>
  </ConnectedRouter>
);

export default Routes;
