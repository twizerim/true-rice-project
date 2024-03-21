import {React,useState} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Header from "../component/header"
import Footer from "../component/footer"

function Login() {

  const [loginform,setlogin]=useState(true)
  const [signform,setsign]=useState(false)

  function login(){
    setlogin(true)
    setsign(false)

  }
  function signup(){
    setsign(true)
    setlogin(false)

  }
  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <>
    <Header/>
    <div className="login-contain">
       <div className="choose">
       <Button onClick={login}>Login</Button> <Button onClick={signup}>Sign-up</Button>
       </div>
            
      {loginform && (
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }}
        // onFinish={onFinish}
        >
        <p>Login form</p>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="/member">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item className='subone'>
          <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
          Or <a href="/signup">register now!</a>
        </Form.Item>
      </Form>
  
      )}


    {signform && (
      <Form name="normal_login" className="signup-form" initialValues={{ remember: true }}
      // onFinish={onFinish}
      >
      <p>Sign up form</p>
      <Form.Item name="firstname" rules={[{ required: true, message: 'Please input your firstname!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="write fist name" />
      </Form.Item>
      <Form.Item name="lastname" rules={[{ required: true, message: 'Please input your lastname' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="write last name"/>
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="email" placeholder="user email"/>
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="write  password"/>
      </Form.Item>
      <Form.Item name="confrimpassword" rules={[{ required: true, message: 'Please input your confrim password' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="write comfrim password"/>
      </Form.Item>
      <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="number" placeholder="write phone number"/>
      </Form.Item>
      <Form.Item name="district" rules={[{ required: true, message: 'Please input your district' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="write district"/>
      </Form.Item>
      <Form.Item name="sector" rules={[{ required: true, message: 'Please input your sector' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="write your sector"/>
      </Form.Item>
      <Form.Item name="sell" rules={[{ required: true, message: 'Please input your sell' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="write your sell"/>
      </Form.Item>
      <Form.Item name="village" rules={[{ required: true, message: 'Please input your village' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="write your village"/>
      </Form.Item>
      
      <Form.Item className='subone'>
        <Button type="primary" htmlType="submit" className="login-form-button">Sign up</Button>
        Or <a href="/signup">If you finish login now!</a>
      </Form.Item>
    </Form>
    )}


  </div>
  <Footer/>
        
    </>
  );
};

export default Login;