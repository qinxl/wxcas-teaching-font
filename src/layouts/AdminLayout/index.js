import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { createHashHistory } from 'history';
import { MenuOutlined } from '@ant-design/icons';
import './style.css';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const history = createHashHistory();

function AdminLayout({ children, authList }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className='logo'>教学辅助系统</div>
        <Menu theme='dark' mode='inline'>
          <Menu.Item onClick={() => history.push('/admin/welcome')}>
            <MenuOutlined />
            欢迎页
          </Menu.Item>
          {authList &&
            authList.length > 0 &&
            authList.map(auth => {
              if (!auth.children || auth.children.length === 0) {
                return (
                  <Menu.Item key={auth.id}>
                    <MenuOutlined />
                    {auth.authName}
                  </Menu.Item>
                );
              } else {
                return (
                  <SubMenu
                    key={auth.id}
                    title={
                      <span>
                        <MenuOutlined /> <span>{auth.authName}</span>
                      </span>
                    }
                  >
                    {auth.children.map(sub => {
                      return (
                        <Menu.Item
                          key={sub.id}
                          onClick={() => {
                            history.push(sub.authUrl);
                          }}
                        >
                          {sub.authName}
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
            })}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <div className='container_header'>超级管理员</div>
        <Content style={{ margin: '0' }}>
          <div className='site-layout-content'>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
