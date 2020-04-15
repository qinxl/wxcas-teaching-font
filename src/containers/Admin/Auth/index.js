import React, { useEffect, useState, useMemo } from 'react';
import { Button, Input, Modal, Select, Space, Table, Divider, Form } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { axios } from '../../../utils';

const { Option } = Select;
const { Column } = Table;
const { confirm } = Modal;
const { Item: FormItem } = Form;

function Auth() {
  //   定义组件内部State
  const defaultSearchParams = { appId: 0, authName: '' };
  const [appList, setAppList] = useState([]);
  const [authList, setAuthList] = useState([]);
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [authFormData, setAuthFormData] = useState();
  const [form] = Form.useForm();

  //  加载查询条件 - 应用列表
  useEffect(() => {
    axios.post('app/selectAppListOfAll', {}, data => {
      setAppList(data.data);
    });
  }, []);

  //   查询条件变化时，重新加载数据
  useEffect(() => {
    loadAuthList({});
  }, []);

  const parentAuthList = useMemo(() => authList.filter(auth => auth.parentId === 0), [authList]);

  const isRequiredOfAuthName = useMemo(() => authFormData && authFormData.isLeaf, [authFormData]);

  //   加载符合条件的权限数据
  const loadAuthList = params => {
    axios.post('auth/selectAuthListByParams', params, data => {
      setAuthList(data.data);
    });
  };

  //   查询条件-应用Id变化时触发
  const appIdChangeHandler = value => {
    setSearchParams({ ...searchParams, appId: value });
  };

  //   查询条件-权限名称变化时触发
  const authNameChangeHandler = ({ target }) => {
    setSearchParams({ ...searchParams, authName: target.value });
  };

  //   执行查询
  const searchHandler = () => {
    loadAuthList(searchParams);
  };

  //   重置查询条件
  const resetHandler = () => {
    setSearchParams(defaultSearchParams);
  };

  //   数据表格操作列渲染函数
  const tableActionRender = (text, record, index) => (
    <Space>
      <Button type='default' value={index} onClick={editHandler}>
        编辑
      </Button>
      <Button type='danger' value={index} onClick={removeHandler}>
        删除
      </Button>
    </Space>
  );

  const removeHandler = e => {
    let auth = authList[e.target.value];
    confirm({
      title: '确认删除权限？',
      icon: <ExclamationCircleOutlined />,
      content: '点击确认将删除名为“' + auth.authName + '”的权限，确认删除？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log(auth);
      },
    });
  };

  //   编辑权限
  const editHandler = e => {
    setAuthFormData(authList[e.target.value]);
    setEditModalVisible(true);
  };

  //   表单数据变化时触发
  const formDataChangeHandler = (changedValues, allValues) => {
    setAuthFormData({ ...allValues });
  };

  //   确认编辑
  const editModalOkHandler = () => {
    form
      .validateFields()
      .then(values => {
        console.log(authFormData);
      })
      .catch(err => console.log(err));
  };

  //   取消编辑
  const editMoalCancelHandler = () => {
    setEditModalVisible(false);
  };

  //   表单验证规则
  const formRules = {
    authName: [
      { required: true, message: '权限名称不能为空' },
      { max: 20, message: '权限名称不能超过20个字符' },
    ],
    appId: [{ required: true, message: '所属应用为必选项' }],
    isLeaf: [{ required: true, message: '是否叶子节点为必选项' }],
    authUrl: [{ required: true, message: '权限路径为必填项' }],
  };

  return (
    <div>
      <Space>
        <Select style={{ width: 200 }} placeholder='选择应用' value={searchParams.appId} onSelect={appIdChangeHandler}>
          <Option value={0}>全部</Option>
          {appList.map(app => (
            <Option key={app.id}>{app.appName}</Option>
          ))}
        </Select>
        <Input placeholder='权限名称' value={searchParams.authName} style={{ width: '200px' }} onChange={authNameChangeHandler} />
        <Button type='primary' onClick={searchHandler}>
          查询
        </Button>
        <Button type='default' onClick={resetHandler}>
          重置
        </Button>
      </Space>
      {/* 分割线 */}
      <Divider />
      {/* 数据表格 */}
      <Table dataSource={authList} bordered rowSelection={{ fixed: true }} size='small' rowKey='id' childrenColumnName='childList'>
        <Column title='权限名称' dataIndex='authName' align='center' />
        <Column title='权限路径' dataIndex='authUrl' align='center' />
        <Column title='所属应用' dataIndex='appName' align='center' />
        <Column title='是否叶子节点' dataIndex='isLeaf' align='center' width='150px' render={text => (text ? '是' : '否')} />
        <Column title='操作' align='center' width='200px' key='action' render={tableActionRender} />
      </Table>
      {/* 编辑弹窗 */}
      <Modal title='编辑权限' width='600px' okText='确认' cancelText='取消' destroyOnClose visible={editModalVisible} onOk={editModalOkHandler} onCancel={editMoalCancelHandler}>
        <Form labelCol={{ span: 5 }} form={form} initialValues={authFormData} onValuesChange={formDataChangeHandler}>
          <FormItem label='权限名称' name='authName' required rules={formRules.authName}>
            <Input placeholder='权限名称' autoComplete='off' />
          </FormItem>
          <FormItem label='所属应用' name='appId' required rules={formRules.appId}>
            <Select>
              {appList.map(app => (
                <Option key={app.id} value={app.id}>
                  {app.appName}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='父节点' name='parentId' required rules={formRules.isLeaf}>
            <Select>
              <Option value={0}>根节点</Option>
              {parentAuthList.map(auth => (
                <Option key={auth.id} value={auth.id}>
                  {auth.authName}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='是否叶子节点' name='isLeaf' required rules={formRules.isLeaf}>
            <Select placeholder='是否叶子节点'>
              <Option value={false}>否</Option>
              <Option value={true}>是</Option>
            </Select>
          </FormItem>
          <FormItem label='权限路径' name='authUrl' required={isRequiredOfAuthName} rules={isRequiredOfAuthName ? formRules.authUrl : []}>
            <Input placeholder='权限路径' disabled={!isRequiredOfAuthName} autoComplete='off' />
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
}

export default Auth;
