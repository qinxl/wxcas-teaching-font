import React from 'react';
import { createHashHistory } from 'history';
import { Button } from 'antd';

function WorkBench() {
    const history = createHashHistory();
    const quitHandler = () => {
        localStorage.clear();
        history.push("/login");
    };
    const intoAdmin = () => {
        history.push("/admin");
    };
    return (
        <div>
            <h1>主页</h1>
            <Button type="primary" onClick={() => intoAdmin()}>进入后台</Button>
            <Button type="danger" onClick={() => quitHandler()}>退出登录</Button>
        </div>
    );
}

export default WorkBench;
