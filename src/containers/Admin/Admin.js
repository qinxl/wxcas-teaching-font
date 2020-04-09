import React, { useState } from 'react';
import { createHashHistory } from 'history';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../utils/ribbon';
import './style.css';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const history = createHashHistory();

function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    const [menus] = useState([
        {
            key: 1, titile: '用户管理', children: [
                { key: 4, titile: '教师用户' },
                { key: 5, titile: '学生用户' },
            ]
        },
        {
            key: 2, titile: '基础信息', children: [
                { key: 6, titile: '学期管理' },
                { key: 7, titile: '学院管理' },
                { key: 8, titile: '专业管理' },
                { key: 9, titile: '班级管理' },
            ]
        },
        {
            key: 3, titile: '权限管理', children: [
                { key: 8, titile: '角色管理' }
            ]
        }
    ]);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo"  >教学辅助系统</div>
                <Menu theme="dark" mode="inline">
                    <Menu.Item onClick={() => history.push("/home")}>
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    {
                        menus.map((menu) => {
                            return <SubMenu
                                key={menu.key} title={
                                    <span>
                                        <MenuOutlined />
                                        <span>{menu.titile}</span>
                                    </span>
                                }>
                                {menu.children.map((sub) => {
                                    return <Menu.Item key={sub.key}>{sub.titile}</Menu.Item>;
                                })}
                            </SubMenu>;
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
              </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Admin;
