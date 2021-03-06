import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { Auth, Student, Teacher, Welcome } from '../containers/Admin';

import AuthRoute from './AuthRoute';

function AdminRoute(props) {
  const parentUrl = '/admin';
  return (
    <Switch>
      <AuthRoute path={`${parentUrl}/welcome`} exact={true} component={Welcome}></AuthRoute>
      <AuthRoute path={`${parentUrl}/teacher`} exact={true} component={Teacher}></AuthRoute>
      <AuthRoute path={`${parentUrl}/student`} exact={true} component={Student}></AuthRoute>
      <AuthRoute path={`${parentUrl}/auth`} exact={true} component={Auth}></AuthRoute>
      <Redirect to={`${parentUrl}/welcome`}></Redirect>
    </Switch>
  );
}

export default AdminRoute;
