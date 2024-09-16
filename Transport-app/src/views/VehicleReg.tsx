import React from "react";
import { Form, Input, } from "antd";
import UploadButton from "./UploadButton";

const VehicleReg: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" flex items-center justify-center pt-5">
      <div className="">
        <div className="bg-orange-500 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-lg font-semibold">NEW VEHICLE</h2>
          <p>Fill in the information to proceed</p>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center justify-center p-4  rounded-lg w-36 h-36">
           
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
            >
              <Input placeholder="Enter vehicle name" />
            </Form.Item>

            <Form.Item
              label="Registration Number"
              name="registrationNumber"
              rules={[
                {
                  required: true,
                  message: "Please input registration number!",
                },
              ]}
            >
              <Input placeholder="Enter registration number" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Vehicle Type"
                name="vehicleType"
                rules={[
                  { required: true, message: "Please input vehicle type!" },
                ]}
              >
                <Input placeholder="Enter vehicle type" />
              </Form.Item>

              <Form.Item
                label="Vehicle Make"
                name="vehicleMake"
                rules={[
                  { required: true, message: "Please input vehicle make!" },
                ]}
              >
                <Input placeholder="Enter vehicle make" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Fleet No"
                name="fleetNo"
                rules={[
                  { required: true, message: "Please input fleet number!" },
                ]}
              >
                <Input placeholder="Enter fleet number" />
              </Form.Item>

              <Form.Item
                label="Engine No"
                name="engineNo"
                rules={[
                  { required: true, message: "Please input engine number!" },
                ]}
              >
                <Input placeholder="Enter engine number" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Color"
                name="color"
                rules={[{ required: true, message: "Please input color!" }]}
              >
                <Input placeholder="Enter color" />
              </Form.Item>

              <Form.Item
                label="Chassis No"
                name="chassisNo"
                rules={[
                  { required: true, message: "Please input chassis number!" },
                ]}
              >
                <Input placeholder="Enter chassis number" />
              </Form.Item>
            </div>

            <Form.Item
  label={<span>Note <span className="text-gray-400">(Optional)</span></span>}
  name="note"
  rules={[{ required: false }]}
>
  <Input.TextArea placeholder="Enter note" rows={4} />
</Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VehicleReg;
