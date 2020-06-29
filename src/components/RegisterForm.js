import React from "react";
import { Form, Input, Button } from "antd"; 

const RegisterForm = (props) => {
    if (props.editable) {
      return null;
    }
  
    return (
      <Form layout="inline">
        <Form.Item
          label="Username"
          name={['user', 'name']}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={props.showModal}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  export default RegisterForm;