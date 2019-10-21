import React from 'react';
import './User.css';  
import {
  Form,
  Input,
  Button,
  DatePicker, 
} from 'antd';
import UserList from './UserList';


class User extends React.Component {
  state = {
    userData: []
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = [];
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values.birthday)
        if(this.state.userData.length !== 0 ){
          values.key = parseInt(this.state.userData.length) + 1;
          data = [ ...this.state.userData, values ]
        }else {
          values.key = 1;
          data = [ ...this.state.userData, values ]
        }
        this.setState({
          userData: data
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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
    
    const config = {
      rules: [{ type: 'date', required: true, message: 'Please select time!' }],
    };
    return (
      <div className="userWrapper">
        <div className="register-user">
          <h1>User Registeration Form </h1>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
        <UserList data = {this.state.userData} />
      </div>
    );
  }
}

const UserForm = Form.create({ name: 'register' })(User);
export default UserForm;