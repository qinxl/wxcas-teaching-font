import React from 'react';
import { createHashHistory } from 'history';
import { Form, Input, Button, Card } from 'antd';
import './style.css';

const userNameRules = [
    { required: true, message: '请输入用户名' },
    { whitespace: true, message: '请输入用户名' },
];
const pwdRules = [
    { required: true, message: '请输入密码' },
    { whitespace: true, message: '请输入用户名' },
];

function Login() {
    const history = createHashHistory();
    const onFinish = values => {
        console.log('Success:', values);
        localStorage.setItem('token', new Date().getMilliseconds);
        history.push("/home");
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="宁波工程学院教学辅助系统" className="main-container">
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
                <Form.Item label="用户名" name="username" rules={userNameRules} >
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={pwdRules} >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 5, span: 19 }} >
                    <Button type="primary" htmlType="submit" block>登录</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
export default Login;
