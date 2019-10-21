import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Hobby',
    dataIndex: 'hobby',
    key: 'hobby',
  },
  
  
];

const UserList = (props) => {
  return (
    <div className="userList">
      <Table columns={columns} dataSource={props.data} />
    </div>
  )
}
export default UserList;