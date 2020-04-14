import React, { useState, useEffect } from 'react';
import { Space, Select, Input, Button, Table } from 'antd';
import { axios } from '../../../utils';

const { Option } = Select;
const { Column } = Table;

function Auth() {
  // 定义组件内部State
  const [appList, setAppList] = useState([]);
  const [authList, setAuthList] = useState([]);
  const [searchParams, setSearchParams] = useState({ appId: 0, authName: '' });
  // 加载查询条件 - 应用列表
  useEffect(() => {
    axios.post('app/selectAppListOfAll', {}, data => {
      setAppList(data.data);
    });
  }, []);

  // 查询条件变化时，重新加载数据
  useEffect(() => {
    loadAuthList({});
  }, []);

  // 加载符合条件的权限数据
  const loadAuthList = params => {
    axios.post('auth/selectAuthListByParams', params, data => {
      setAuthList(data.data);
    });
  };

  return (
    <div>
      <Space>
        <Select
          style={{ width: 200 }}
          placeholder='选择应用'
          onSelect={value => {
            setSearchParams({ ...searchParams, appId: value });
          }}
        >
          <Option value=''>全部</Option>
          {appList.map(app => (
            <Option key={app.id}>{app.appName}</Option>
          ))}
        </Select>
        <Input
          placeholder='权限名称'
          style={{ width: '200px' }}
          onChange={({ target }) => {
            setSearchParams({ ...searchParams, authName: target.value.trim() });
          }}
        />
        <Button
          type='primary'
          onClick={() => {
            loadAuthList(searchParams);
          }}
        >
          查询
        </Button>
        <Button type='default'>重置</Button>
      </Space>
      {/* 数据表格 */}
      <Table dataSource={authList} bordered rowSelection={{ fixed: true }} size='small' style={{ marginTop: '30px' }} rowKey='id' childrenColumnName='childList'>
        <Column title='权限名称' dataIndex='authName' align='center' />
        <Column title='权限路径' dataIndex='authUrl' align='center' />
        <Column title='所属应用' dataIndex='appName' align='center' />
        <Column title='是否叶子节点' dataIndex='isLeaf' align='center' width='150px' render={text => (text ? '是' : '否')} />
        <Column
          title='操作'
          align='center'
          width='200px'
          key='action'
          render={(text, record) => (
            <Space>
              <Button type='danger'>删除</Button>
              <Button type='default'>编辑</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default Auth;
