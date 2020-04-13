import React, { useEffect, useState } from 'react';
import axios from '../../utils/Axios';
import { AdminLayout } from '../../layouts';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Welcome, Teacher, Student } from '.';

function Admin() {
  const [authList, setAuthList] = useState([]);
  // 修改浏览器标题
  useEffect(() => {
    document.title = '基础数据中心';
  }, []);
  // 加载菜单
  useEffect(() => {
    axios.post('auth/selectAuthListOfAll/1', {}, data => {
      setAuthList(data.data);
    });
  }, []);
  return (
    <AdminLayout authList={authList}>
      <Switch>
        <Route path='/admin/welcome' exact={true} component={Welcome}></Route>
        <Route path='/admin/teacher' exact={true} component={Teacher}></Route>
        <Route path='/admin/student' exact={true} component={Student}></Route>
        <Redirect to='/admin/welcome'></Redirect>
      </Switch>
    </AdminLayout>
  );
}

export default Admin;
