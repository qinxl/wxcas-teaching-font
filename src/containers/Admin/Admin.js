import React, { useEffect, useState } from 'react';
import axios from '../../utils/Axios';
import { AdminLayout } from '../../layouts';
import AdminRoute from '../../router/AdminRoute';

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
      <AdminRoute />
    </AdminLayout>
  );
}

export default Admin;
