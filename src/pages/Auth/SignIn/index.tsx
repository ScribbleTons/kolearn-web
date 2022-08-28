import { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';

import '../index.scss';
import { Link, useNavigate } from '@tanstack/react-location';

const SignInPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Received values of form: ', values);
      setIsSubmitting(false);
      navigate({ to: '/d/', replace: true });
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
        <h1>Sign In to Your Account</h1>

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
              message: 'Please input a valid email address!',
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

        <Button htmlType='submit' type='primary' loading={isSubmitting}>
          Sign In
        </Button>

        <Typography.Text type='secondary' className='secondary-prompt'>
          Don't have an account? <Link to='/auth/signup'>Sign Up</Link>
        </Typography.Text>
      </Form>
    </div>
  );
};

export default SignInPage;
