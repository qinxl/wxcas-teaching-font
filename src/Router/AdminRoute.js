import React from 'react';
import AuthRoute from './AuthRoute';
import { Switch, Redirect } from 'react-router-dom';
import { Welcome, Teacher, Student, Auth } from '../containers/Admin';

function AdminRoute(props) {
  console.log(props);
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
