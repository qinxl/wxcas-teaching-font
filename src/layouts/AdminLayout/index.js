import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { createHashHistory } from 'history';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import './style.css';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const history = createHashHistory();

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [menus] = useState([
    {
      key: 1,
      title: '用户管理',
      children: [
        { key: 4, title: '教师用户', href: '/admin/teacher' },
        { key: 5, title: '学生用户', href: '/admin/student' },
      ],
    },
    {
      key: 2,
      title: '基础信息',
      children: [
        { key: 6, title: '学期管理' },
        { key: 7, title: '学院管理' },
        { key: 8, title: '专业管理' },
        { key: 9, title: '班级管理' },
      ],
    },
    {
      key: 3,
      title: '权限管理',
      children: [{ key: 8, title: '角色管理' }],
    },
  ]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className='logo'>教学辅助系统</div>
        <Menu theme='dark' mode='inline'>
          <Menu.Item onClick={() => history.push('/home')}>
            <HomeOutlined />
            返回主页
          </Menu.Item>
          <Menu.Item onClick={() => history.push('/admin/welcome')}>
            <HomeOutlined />
            欢迎页
          </Menu.Item>
          {menus.map(menu => {
            return (
              <SubMenu
                key={menu.key}
                title={
                  <span>
                    <MenuOutlined />
                    <span>{menu.title}</span>
                  </span>
                }
              >
                {menu.children.map(sub => {
                  return (
                    <Menu.Item
                      key={sub.key}
                      onClick={() => {
                        history.push(sub.href);
                      }}
                    >
                      {sub.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
