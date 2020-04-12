import React from 'react';
import { AdminLayout } from '../../layouts';
import { Switch, Route } from 'react-router-dom';
import { Welcome, Teacher, Student } from '.';

function Admin() {
  return (
    <AdminLayout abc={123}>
      <Switch>
        <Route path='/admin/welcome' exact={true} component={Welcome}></Route>
        <Route path='/admin/teacher' exact={true} component={Teacher}></Route>
        <Route path='/admin/student' exact={true} component={Student}></Route>
      </Switch>
    </AdminLayout>
  );
}

export default Admin;
