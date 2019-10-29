import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './User.css';  
import {
  Form,
  Input,
  Button,
} from 'antd';
import UserList from './UserList';
import { registerAction } from '../../store/registerUsers/actions';

const useRegisterForm = (props) => {
const { data } = useSelector(state => ({
    ...state.registerReducer
  }));
  const dispatch = useDispatch();
  let d;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch(registerAction(values))
      }
    });
    
  };
    const { getFieldDecorator } = props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };
    return (
      <div className="userWrapper">
        <div className="register-user">
          <h1>User Registeration Form </h1>
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="Firstname">
              {getFieldDecorator('firstname', {
                rules: [
                  {
                    type: 'string',
                    message: 'The input is not valid firstname!',
                  },
                  {
                    required: true,
                    message: 'Please input your firstname!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Lastname">
              {getFieldDecorator('lastname', {
                rules: [
                  {
                    type: 'string',
                    message: 'The input is not valid lastname!',
                  },
                  {
                    required: true,
                    message: 'Please input your lastname!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    type: 'string',
                    message: 'The input is not valid birthday!',
                  },
                  {
                    required: true,
                    message: 'Please input your birthday!',
                  },
                ],
              })(<Input type="date" />)}
            </Form.Item>
            <Form.Item label="Age">
              {getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Age!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Hobby">
              {getFieldDecorator('hobby', {
                rules: [
                  {
                    type: 'string',
                    message: 'The input is not valid hobby!',
                  },
                  {
                    required: true,
                    message: 'Please input your hobby!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <div className="registerSubmit">
                <Button type="danger" htmlType="submit" >
                  Register Now
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>          
        <UserList data = { data } />
      </div>
    )
}

const UserForm = Form.create({ name: 'register' })(useRegisterForm);

export default UserForm;
