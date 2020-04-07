import React from 'react';
import { createHashHistory } from 'history';
import { Button, Modal, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
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
    return (
        <div className="home-bg">
            <Row style={{ width: '1200px', margin: "auto",paddingTop:"100px" }} gutter={[16, 16]}>
                <Col span={18} style={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}>主要内容</Col>
                <Col span={6} style={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}>新增公告</Col>
            </Row>
            <h1>主页</h1>
            <Button type="primary" onClick={() => intoAdmin()}>进入后台</Button>
            <Button type="danger" onClick={() => quitHandler()}>退出登录</Button>
        </div>
    );
}

export default WorkBench;
