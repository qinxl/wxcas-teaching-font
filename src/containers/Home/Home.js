import React from 'react';
import { createHashHistory } from 'history';
import { Button, Modal, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { POBrowser } from '../../utils/index';
import './style.css';

const { confirm } = Modal;

function WorkBench() {
    const history = createHashHistory();
    const quitHandler = () => {
        confirm({
            title: "确认退出系统？",
            icon: <ExclamationCircleOutlined />,
            content: "点击确认将退出系统，返回到登录页面。是否确认退出系统？",
            okText: "确认",
            cancelText: "取消",
            onOk: () => {
                localStorage.clear();
                history.push("/login");
            }
        });

    };
    const intoAdmin = () => {
        history.push("/admin");
    };

    const openWindowModeless = () => {
        POBrowser.openWindowModeless('http://172.16.30.3/showWord', 'fullscreen=yes;');
    };
    const openWindow = () => {
        POBrowser.openWindow('http://172.16.30.3/showWord', 'fullscreen=yes;');
    };
    return (
        <div className="home-bg">
            <Row style={{ width: '1200px', margin: "auto", paddingTop: "100px" }} gutter={[20, 20]}>
                <Col span={18} style={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}>
                    <Button type="primary" onClick={() => { openWindowModeless(); }}>openWindowModeless</Button>
                    <Button type="primary" onClick={() => { openWindow(); }}>openWindow</Button>
                    <Button type="primary" onClick={() => { intoAdmin(); }}>进入后台</Button>
                    <Button type="primary" onClick={() => { quitHandler(); }}>退出系统</Button>
                </Col>
                <Col span={6} style={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}>新增公告</Col>
            </Row>
        </div>
    );
}

export default WorkBench;
