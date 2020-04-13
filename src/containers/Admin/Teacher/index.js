import React, { useState, useEffect } from 'react';
import { Modal, Table, Space, Select, Input, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { confirm } = Modal;

function Teacher() {
  const [teacherList, setTeacherList] = useState([]);

  const removeHandler = data => {
    confirm({
      title: '确认删除 ' + data.realName + ' ？',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log(teacherList.indexOf(data));
        teacherList.splice(teacherList.indexOf(data), 1);
        console.log(teacherList.length);
        setTeacherList(teacherList);
      },
    });
  };

  const columns = [
    { title: '教师姓名', dataIndex: 'realName', align: 'center' },
    { title: '教师工号', dataIndex: 'jobNumber', align: 'center' },
    { title: '性别', dataIndex: 'sex', align: 'center' },
    { title: '状态', dataIndex: 'statu', align: 'center' },
    {
      title: '操作',
      align: 'center',
      width: '120px',
      render: (text, record) => {
        return (
          <Space>
            <Button type='primary' size='small'>
              重置密码
            </Button>
            <Button
              type='danger'
              size='small'
              onClick={() => {
                removeHandler(record);
              }}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  useEffect(() => {
    let list = [];
    for (let i = 1; i < 105; i++) {
      list.push({ id: i, realName: '秦兴龙' + i, jobNumber: i, sex: i % 2 === 0 ? '男' : '女', statu: '正常' });
    }
    setTeacherList(list);
  }, []);
  const tableOptions = {
    columns: columns,
    dataSource: teacherList,
    rowSelection: { fixed: true },
    bordered: true,
    size: 'small',
    rowKey: 'id',
    pagination: { showSizeChanger: false },
    style: { marginTop: '20px' },
  };
  return (
    <div>
      <Space>
        <Select style={{ width: 200 }} placeholder='选择专业'>
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='tom'>Tom</Option>
        </Select>
        <Input style={{ width: 200 }} />
        <Button type='primary'>查询</Button>
        <Button type='default'>重置</Button>
      </Space>
      <Table {...tableOptions} />
    </div>
  );
}

export default Teacher;
