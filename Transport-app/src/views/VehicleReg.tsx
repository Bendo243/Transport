import React from "react";
import { Form, Input, Button } from "antd";
import UploadButton from "./UploadButton";

interface VehicleRegProps {
  onCancel: () => void;   
  onSubmit: (values: any) => void;   
}

const VehicleReg: React.FC<VehicleRegProps> = ({ onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  
  const onFinish = (values: any) => {
    console.log("Success:", values);
    onSubmit(values);  
  };

  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  
  const handleCancel = () => {
    form.resetFields();  
    onCancel();  
  };

  return (
    <div className="flex items-center justify-center pt-3">
      <div className="">
        <div className="flex space-x-6">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg w-36 h-36">
            <UploadButton />
          </div>

          <Form
            form={form}
            layout="vertical"
            name="vehicleForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
            
          >
            <Form.Item
              label="Vehicle Name"
              name="vehicleName"
              rules={[
                { required: true, message: "Please input vehicle name!" },
              ]}
              style={{ marginBottom: '8px' }}
            >
              <Input placeholder="Enter vehicle name" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Reg. Number"
              name="registrationNumber"
              rules={[
                { required: true, message: "Please input registration number!" },
              ]}
              style={{ marginBottom: '8px' }}
            >
              <Input placeholder="Enter registration number" />
            </Form.Item>
            <Form.Item
                label="Number of seat"
                name="seatNumber"
                rules={[
                  { required: true, message: "Please input number of seat!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Number of seat" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label=" Type"
                name="vehicleType"
                rules={[
                  { required: true, message: "Please input vehicle type!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter vehicle type" />
              </Form.Item>

              <Form.Item
                label="Make"
                name="vehicleMake"
                rules={[
                  { required: true, message: "Please input vehicle make!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter vehicle make" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Fleet Number"
                name="fleetNo"
                rules={[
                  { required: true, message: "Please input fleet number!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter fleet number" />
              </Form.Item>

              <Form.Item
                label="Engine Number"
                name="engineNo"
                rules={[
                  { required: true, message: "Please input engine number!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter engine number" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Color"
                name="color"
                rules={[
                  { required: true, message: "Please input color!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter color" />
              </Form.Item>

              <Form.Item
                label="Chassis Number"
                name="chassisNo"
                rules={[
                  { required: true, message: "Please input chassis number!" },
                ]}
                style={{ marginBottom: '8px' }}
              >
                <Input placeholder="Enter chassis number" />
              </Form.Item>
            </div>

            <Form.Item
              label={<span>Note <span className="text-gray-400">(Optional)</span></span>}
              name="note"
              rules={[{ required: false }]}
            >
              <Input.TextArea placeholder="" rows={3} />
            </Form.Item>
            <div className="flex justify-end space-x-8 "  style={{ marginBottom: '8px' }}>
              <Button onClick={handleCancel} className="w-[144px]">
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" className="w-[144px]">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VehicleReg;
