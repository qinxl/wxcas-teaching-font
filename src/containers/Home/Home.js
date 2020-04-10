import React, { useEffect, useState } from 'react';
import { createHashHistory } from 'history';
import { Button, Modal, Row, Col, Space } from 'antd';
import { observer, inject } from 'mobx-react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { POBrowser, SessionUtil } from '../../utils/index';
import './style.css';

const { confirm } = Modal;
const history = createHashHistory();
/**
 * 退出系统
 */
const quitHandler = () => {
  confirm({
    title: '确认退出系统？',
    icon: <ExclamationCircleOutlined />,
    content: '点击确认将退出系统，返回到登录页面。是否确认退出系统？',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      localStorage.clear();
      history.push('/login');
    },
  });
};
/**
 * 进入后台
 */
const intoAdmin = () => {
  history.push('/admin');
};

/**
 * 打开PageOffice
 */
const openWindowModeless = () => {
  POBrowser.openWindowModeless(
    'http://172.16.30.3/showWord',
    'fullscreen=yes;'
  );
};

/**
 * 渲染函数
 */
function Home({ appStore }) {
  const [realName, setRealName] = useState('');
  useEffect(() => {
    appStore.setAppList([
      { id: 1, label: '数据中心', type: 0, href: '' },
      { id: 2, label: '训练系统', type: 0, href: '' },
      { id: 3, label: '任务管理系统', type: 0, href: '' },
      { id: 4, label: '资源库', type: 0, href: '' },
      { id: 5, label: '数字化校园', type: 0, href: '' },
      { id: 6, label: '目标解构工具', type: 1, href: '' },
      { id: 7, label: 'SWOT分析', type: 1, href: '' },
      { id: 8, label: '问卷调研', type: 1, href: '' },
      { id: 9, label: '文档编制', type: 1, href: '' },
      { id: 10, label: '专家访谈', type: 1, href: '' },
      { id: 11, label: '建模工具', type: 1, href: '' },
    ]);
    setRealName(SessionUtil.getRealName);
    console.log(SessionUtil.getRealName);
  }, []);

  return (
    <div className='home-bg'>
      <div className='home-content'>
        <Row gutter={18}>
          <Col span={18} style={{ padding: '20px' }}>
            <p>当前用户：{realName}</p>
            <p>业务系统</p>
            <ul>
              {appStore.systemAppList.map(app => {
                return <li key={app.id}>{app.label}</li>;
              })}
            </ul>
            <p>工具系统</p>
            <ul>
              {appStore.toolAppList.map(app => {
                return <li key={app.id}>{app.label}</li>;
              })}
            </ul>
          </Col>
          <Col span={6} style={{ padding: '20px' }}></Col>
        </Row>
      </div>
    </div>
  );
}

export default inject('appStore')(observer(Home));
