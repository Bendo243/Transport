import React from 'react'; 
import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ITC from '../../assets/Bus2.png';  
import Bus from '../../assets/bgBus.svg';  

const LoginPage: React.FC = () => {
    const onFinish=(values:any)=>{
        console.log('login success:', values);
    }
    const onFinishFailed=(errorInfo:any)=>{
        console.log('Login Failed:', errorInfo);
    }


  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex">
      
      <div className="h-full w-[45%] text-black">
        <div className="flex space-x-2 m-10">
          <img src={ITC} alt="ITC" className="w-12 h-12" />
          <h1 className="text-base font-semibold mt-3">IMO TRANSPORT COMPANY LIMITED</h1>
        </div>

        <div className="flex mt-20 justify-center">
          <div className="bg-white p-8 rounded-lg text-black w-[65%]">
        <h1 className='text-xl font-bold text-center mb-1'>Login</h1>
        <p className='text-center text-gray-500 mb-1'>Welcome back, Please enter your details</p>

          <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            initialValue=""
            style={{ marginBottom: '12px' }}
            labelCol={{ style: { marginBottom: '0px' } }} 
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <a href="#" className="text-orange-500">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-orange-500 hover:bg-orange-600"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
          </div>
        
        </div>
      </div>

      {/* Right Side - Bus Image with 55% Width */}
      <div className="w-[55%] h-full flex justify-center items-center">
        <img src={Bus} alt="Bus" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default LoginPage;



// onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

{/* <h1 className="text-xl font-bold text-gray-900 flex justify-center mb-2">Reset Password</h1> */}

            {/* <Form
              name="resetPassword"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[{ required: true, message: 'Please input your new password!' }]}
                style={{ marginBottom: '8px' }}
              >
                <Input.Password
                  placeholder="Enter new password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item
                label="Confirm New Password"
                name="confirmPassword"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm new password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="bg-orange-500">
                  Reset Password
                </Button>
              </Form.Item>
            </Form> */}