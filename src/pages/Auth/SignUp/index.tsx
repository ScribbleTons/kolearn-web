import { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';

import '../index.scss';
import { Link } from '@tanstack/react-location';

const SignupPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onFinish = (values: any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Received values of form: ', values);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className='container'>
      <Form
        className='auth-form'
        size='large'
        onFinish={onFinish}
        layout='vertical'
      >
        <h1>Signup to Create Account</h1>

        <Form.Item
          name='username'
          label='Username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            {
              max: 20,
              message: 'Username must be less than 20 characters',
            },
          ]}
        >
          <Input placeholder='Enter preferred username' />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email Address'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input type='email' placeholder='Enter email address' />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 8,
              message: 'Password must be at least 8 characters',
            },
          ]}
        >
          <Input.Password placeholder='*****' />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Confirm Password'
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder='*****' />
        </Form.Item>
        <Button htmlType='submit' type='primary' loading={isSubmitting}>
          Create Account
        </Button>

        <Typography.Text type='secondary' className='secondary-prompt'>
          Already have an account? <Link to='/auth/signin'>Sign In</Link>
        </Typography.Text>
      </Form>
    </div>
  );
};

export default SignupPage;
