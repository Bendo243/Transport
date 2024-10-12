import React, { useEffect, useState } from 'react';
import { Upload, Button, Input, Select, DatePicker, Form, message, UploadFile } from 'antd'; 
import { UploadOutlined } from '@ant-design/icons';


const { Option } = Select;

interface ReportIncidentProps {
  onOk: () => void;
  onCancel: () => void;
}

const ReportIncidentClaim: React.FC<ReportIncidentProps> = ({ onOk, onCancel }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        console.log('Form Values:', values);
        console.log('Uploaded Files:', fileList);
        form.resetFields();
        setFileList([]);
        onOk();
        message.success('Incident reported successfully');
      })
      .catch(info => {
        console.log('Validation Failed:', info);
      });
  };

  const handleFileChange = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList);
  };

  useEffect(() => {
    form.resetFields();
    setFileList([]);
  }, []);

  return (
    <div>
   <div className="bg-[#FFF5EF] flex items-center py-4 px-2 rounded-t-lg space-x-2 border-b border-[#F5C6CB]">
          <h2 className="text-g font-bold">REPORT INCIDENT</h2>
        </div>
        <div className='p-4'>
          <Form form={form} layout="vertical">
            {/* Media Upload */}
            <Form.Item>
              <Upload
                listType="picture-card"
                fileList={fileList}
                multiple
                beforeUpload={() => false}  // Disable auto upload
                onChange={handleFileChange}
              >
                <div>
                  <UploadOutlined />
                  <div className="mt-2">Select <p className='text-[#FF742C] ml-1'>media</p></div>
                </div>
              </Upload>
            </Form.Item>

            {/* Incident Type */}
            <Form.Item
              name="incidentType"
              label="Incident Type"
              rules={[{ required: true, message: 'Please select an incident type!' }]}
              style={{ marginBottom: '12px' }}
            >
              <Select placeholder="Select an incident type">
                <Option value="Accident">Accident</Option>
                <Option value="Mechanical Issue">Mechanical Issue</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>

            {/* Incident Location */}
            <Form.Item
              name="incidentLocation"
              label="Incident Location"
              rules={[{ required: true, message: 'Please enter the incident location!' }]}
              style={{ marginBottom: '12px' }}
            >
              <Input placeholder="Enter incident location" />
            </Form.Item>

            {/* Date/Time */}
            <Form.Item
              name="incidentDate"
              label="Date/Time"
              rules={[{ required: true, message: 'Please select the date and time of the incident!' }]}
              style={{ marginBottom: '12px' }}
            >
              <DatePicker showTime className="w-full" />
            </Form.Item>

            {/* Eye Witness Information */}
            <Form.Item label={<span className='text-gray-500'>Eye Witness</span>}>
              <Form.Item
                name="eyewitnessName"
                label="Name"
                rules={[{ required: true, message: 'Please enter the witness name!' }]}
                style={{ marginBottom: '12px' }}
              >
                <Input placeholder="Enter name of witness" />
              </Form.Item>
              <Form.Item
                name="eyewitnessPhone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter the witness phone number!' }]}
                style={{ marginBottom: '12px' }}
              >
                <Input placeholder="Enter witness phone number" />
              </Form.Item>
              <Form.Item
                name="eyewitnessEmail"
                label={<span>Email <span className='text-gray-500'>(Optional)</span></span>}
              >
                <Input placeholder="Enter witness email (optional)" />
              </Form.Item>
            </Form.Item>

            <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} className="bottom-8 w-[144px] h-[32px] ">Cancel</Button>
        <Button type="primary" onClick={handleOk} className='bottom-8 w-[144px] h-[32px]'>Submit</Button>
      </div> 

          </Form>
        </div>
    </div>
  );
};

export default ReportIncidentClaim;
 