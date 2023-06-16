import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400, padding: 20, border: '1px solid #ddd', borderRadius: 5 }}>
        <h1 >SaGaSuy</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/">Forgot Password?</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
