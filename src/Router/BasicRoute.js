import React from 'react';
import AuthRoute from './AuthRoute';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Login, Home, Admin, Outline, Paper, Assist, Score } from '../containers';

function BasicRoute() {
  return (
    <Router>
      <Switch>
        {/* 登录页，不用经过权限认证 */}
        <Route path='/login' component={Login}></Route>
        {/* 主页路由 */}
        <AuthRoute path='/home' component={Home}></AuthRoute>
        {/* 业务路由 begin*/}
        <AuthRoute path='/admin/:appId' component={Admin}></AuthRoute>
        <AuthRoute path='/outline' component={Outline}></AuthRoute>
        <AuthRoute path='/paper' component={Paper}></AuthRoute>
        <AuthRoute path='/assist' component={Assist}></AuthRoute>
        <AuthRoute path='/score' component={Score}></AuthRoute>
        {/* 业务路由 end */}
        {/* 默认跳转 */}
        <Redirect to='/home'></Redirect>
      </Switch>
    </Router>
  );
}

export default BasicRoute;
