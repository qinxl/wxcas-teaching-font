import React from 'react';
import AuthRoute from './AuthRoute';
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { Login, Home, Admin } from '../containers';

function BasicRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <AuthRoute path='/admin' component={Admin}></AuthRoute>
        <AuthRoute path='/home' component={Home} abc={1}></AuthRoute>
        <Redirect to='/login'></Redirect>
      </Switch>
    </Router>
  );
}

export default BasicRouter;
