import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Modal, Row, Col, Space, Card } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { withRouter, Link } from 'react-router-dom';

import { SessionUtil } from '../../utils/index';
import axios from '../../utils/Axios';
import UserDefaultIcon from '../../assets/images/user-default.png';

const { confirm } = Modal;
const appIconUrl = 'http://112.35.48.176:8180/uccenter/app/';

/**
 * 渲染函数
 */
function Home({ history }) {
  const [appList, setAppList] = useState([]);
  const [userInfoModalVisible, setUserInfoModalVisible] = useState(false);
  const [modifyPwdModalVisible, setModifyPwdModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  //   加载应用信息
  useEffect(() => {
    axios.post('app/selectAppListOfAll', {}, data => {
      setAppList(data.data);
    });
  }, []);

  // 退出系统
  const quitHandler = () => {
    confirm({
      title: '确认退出系统？',
      icon: <ExclamationCircleOutlined />,
      content: '点击确认将退出系统，返回到登录页面。是否确认退出系统？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        SessionUtil.clearSession();
        history.push('/login');
      },
    });
  };

  // 展示当前用户个人信息
  const showUserInfo = () => {
    setUserInfoModalVisible(true);
  };

  // 修改密码
  const modifyPwd = () => {
    setModifyPwdModalVisible(true);
  };

  // 应用列表头部样式
  const appCardHeadStyle = {
    backgroundColor: '#f6f6f6',
    color: '#000',
    borderBottom: 'solid 1px #DADADA',
    borderRadius: '4px 4px 0 0',
  };
  return (
    <div className='home-bg'>
      <div className='home-content'>
        <Row gutter={18}>
          <Col span={18} style={{ padding: '30px 0 30px 20px' }}>
            <Row gutter={16}>
              {/* 用户头像 */}
              <Col span={6}>
                <div className='avatar'>
                  <img src={UserDefaultIcon} alt='' width='120px' height='120px' />
                </div>
              </Col>
              {/* 用户个人信息板块 */}
              <Col span={18} style={{ color: '#777' }}>
                <Space direction='vertical' size={10}>
                  <p style={{ fontSize: '20px' }}>欢迎您：{SessionUtil.getUserInfo.realName}</p>
                  <p style={{ fontSize: '14px' }}>才能看到那边的风光。or驾驭命运的舵是奋斗.不抱有一丝幻想</p>
                  <Space>
                    <Button type='primary' onClick={showUserInfo}>
                      个人信息
                    </Button>
                    <Button type='primary' onClick={modifyPwd}>
                      修改密码
                    </Button>
                    <Button type='danger' onClick={quitHandler}>
                      退出系统
                    </Button>
                  </Space>
                </Space>
              </Col>
            </Row>
            {/* 数据管理板块 */}
            <Row style={{ marginTop: '30px' }}>
              <Col span={24}>
                <Card title='数据管理' bordered={false} headStyle={appCardHeadStyle}>
                  <Row>
                    {appList
                      .filter(app => app.type === 0)
                      .map(app => {
                        return (
                          <Col span={3} key={app.id}>
                            <Link to={app.appUrl} target='_blank'>
                              <div className='sysitem'>
                                <div className='sysicon'>
                                  <div className='sysimgwrap'>
                                    <img src={appIconUrl + app.icon} alt={app.appName} className='sysimg' />
                                  </div>
                                </div>
                                <div className='systitle'>{app.appName}</div>
                              </div>
                            </Link>
                          </Col>
                        );
                      })}
                  </Row>
                </Card>
              </Col>
            </Row>
            {/* 教学辅助应用列表 */}
            <Row>
              <Col span={24}>
                <Card title='教学辅助' bordered={false} headStyle={appCardHeadStyle}>
                  <Row>
                    {appList
                      .filter(app => app.type === 1)
                      .map(app => {
                        return (
                          <Col span={3} key={app.id}>
                            <Link to={app.appUrl} target='_blank'>
                              <div className='sysitem'>
                                <div className='sysicon'>
                                  <div className='sysimgwrap'>
                                    <img src={appIconUrl + app.icon} alt={app.appName} className='sysimg' />
                                  </div>
                                </div>
                                <div className='systitle'>{app.appName}</div>
                              </div>
                            </Link>
                          </Col>
                        );
                      })}
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            {/* 天气预报 */}
            <Row>
              <Col span={24} style={{ padding: '30px 0' }}>
                <iframe name='weather_inc' title='天气预报' src='http://i.tianqi.com/index.php?c=code&amp;id=55' width='100%' height='294' frameBorder={0} scrolling='no'></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {/* 展示当前用户个人信息 */}
      <Modal
        title='当前用户详情'
        visible={userInfoModalVisible}
        footer={[
          <Button
            type='default'
            onClick={() => {
              setUserInfoModalVisible(false);
            }}
          >
            关闭
          </Button>,
        ]}
      >
        <p></p>
      </Modal>
      {/* 修改密码 */}
      <Modal
        title='修改密码'
        visible={modifyPwdModalVisible}
        okText='确认'
        cancelText='取消'
        confirmLoading={confirmLoading}
        onCancel={() => {
          setModifyPwdModalVisible(false);
        }}
        onOk={() => {
          setConfirmLoading(true);
        }}
      >
        <p></p>
      </Modal>
    </div>
  );
}
export default withRouter(Home);
