import React, { useState } from 'react'; 
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ITC from '../../assets/Bus2.png';  
import Bus from '../../assets/bgBus.svg';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Set the state to true to display the success message 
    setIsResetSuccessful(true);
  };

  // When form submission fails
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // Password validation rule
  const passwordRules = [
    {
      required: true,
      message: 'Please input your new password!',
    },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{12,}$/,
      message:
        'Password must be at least 12 characters long, and contain at least one uppercase letter, one lowercase letter, and one symbol.',
    },
  ];

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex">
      
      {/* Left Side - Reset Password or Success Message */}
      <div className="h-full w-[45%] text-black">
        <div className="flex space-x-2 m-10">
          <img src={ITC} alt="ITC" className="w-12 h-12" />
          <h1 className="text-base font-semibold mt-3">IMO TRANSPORT COMPANY LIMITED</h1>
        </div>

        <div className="flex mt-20 justify-center">
          <div className="bg-white p-8 rounded-lg text-black w-[65%]">
            {/* Conditionally render based on whether reset is successful */}
            {!isResetSuccessful ? (
              <>
                <h1 className="text-xl font-bold text-gray-900 flex justify-center mb-2">Reset Password</h1>

                <Form
                  name="resetPassword"
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={passwordRules}
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
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
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
                </Form>
              </>
            ) : (
              // Success message after password reset
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-black mb-2 text-center">Successful password reset!</h1>
                <p className="text-gray-500 mb-8 text-center">You can now use your new password to log into your account</p>
               <Link to='/LoginPage'>
                <Button
                  type="primary"
                  size="large"
                  className="bg-orange-500 w-[400px] h-[33px] text-white rounded-md"
                >
                  Login
                </Button>
                </Link>
              </div>
            )}
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

export default ResetPassword;
