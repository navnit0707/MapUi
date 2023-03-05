import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const FormInput = function(){
  const [form] = Form.useForm();
  const onCountryChange = (value) => {
    switch (value) {
      case 'India':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
        
      case 'United States':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'United Kingdom':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
 
 
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 250,
      }}
    >
      
      <Form.Item
        name="Country"
        label="Country"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a Country "
          onChange={onCountryChange}
          allowClear
        >
          <Option value="India">India</Option>
          <Option value="United States">United States</Option>
          <Option value="United Kingdom">United Kingdom</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.Country !== currentValues.Country}
      >
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Load
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormInput;