import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { createHashHistory } from 'history';
import { SessionUtil } from '../../utils';
import { MenuOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './style.css';

const { SubMenu } = Menu;
const { Content, Sider, Header } = Layout;
const history = createHashHistory();

function AdminLayout({ children, authList }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
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
        <div className='container_header'>{SessionUtil.getUserInfo().realName}</div>
        <Content style={{ margin: '0', backgroundColor: '#ffffff' }}>
          <div className='site-layout-content'>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
