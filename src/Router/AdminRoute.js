import React from 'react';
import AuthRoute from './AuthRoute';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Welcome, Teacher, Student } from '../containers/Admin';

function AdminRoute() {
  return (
    <Router>
      <Switch>
        <AuthRoute path='/welcome' component={Welcome}></AuthRoute>
        <AuthRoute path='/teacher' component={Teacher}></AuthRoute>
        <AuthRoute path='/student' component={Student}></AuthRoute>
      </Switch>
    </Router>
  );
}

export default AdminRoute;
