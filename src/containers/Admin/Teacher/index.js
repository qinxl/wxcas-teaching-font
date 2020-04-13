import React, { useState, useEffect } from 'react';
import { Table, Space, Select } from 'antd';

const { Option } = Select;

function Teacher() {
  const [teacherList, setTeacherList] = useState([]);
  const columns = [
    { title: '教师姓名', dataIndex: 'realName', align: 'center' },
    { title: '教师工号', dataIndex: 'jobNumber', align: 'center' },
    { title: '性别', dataIndex: 'sex', align: 'center' },
    { title: '状态', dataIndex: 'statu', align: 'center' },
  ];
  useEffect(() => {
    setTeacherList([
      { id: '1', realName: '秦兴龙1', jobNumber: '000000', sex: '男', statu: '正常' },
      { id: '2', realName: '秦兴龙2', jobNumber: '000000', sex: '男', statu: '正常' },
      { id: '3', realName: '秦兴龙3', jobNumber: '000000', sex: '男', statu: '正常' },
      { id: '4', realName: '秦兴龙4', jobNumber: '000000', sex: '男', statu: '正常' },
      { id: '5', realName: '秦兴龙5', jobNumber: '000000', sex: '男', statu: '正常' },
    ]);
  }, []);
  return (
    <div>
      <Select style={{ width: 200 }} placeholder='选择专业'>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='tom'>Tom</Option>
      </Select>
      <Table columns={columns} dataSource={teacherList} rowSelection={{ fixed: true }} bordered size='small' rowKey='id' style={{ width: '100%' }} />
    </div>
  );
}

export default Teacher;
