import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Radio } from 'antd';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Remember me:', rememberMe);
    console.log('User Type:', userType);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400, padding: 20, border: '1px solid #ddd', borderRadius: 5 }}>
        <h2 style={{ textAlign: 'center' }}>Sign up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Radio.Group onChange={handleUserTypeChange} value={userType}>
              <Radio value="teacher">Teacher</Radio>
              <Radio value="student">Student</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
