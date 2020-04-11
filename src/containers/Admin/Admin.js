import React from 'react';
import { AdminLayout } from '../../layouts';
import AdminRoute from '../../router/AdminRoute';

function Admin() {
  return (
    <AdminLayout>
      <AdminRoute />
    </AdminLayout>
  );
}

export default Admin;
