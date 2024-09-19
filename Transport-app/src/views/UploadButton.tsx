import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined, PictureOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload/interface';

const UploadButton: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  // Handle file upload
  const handleUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    return false; // Prevent antd Upload from doing auto upload
  };

  // Upload button JSX
  const uploadButton = (
    <div className="relative w-36 h-32 border-2 border-dashed rounded-md flex justify-center bg-white">
      <PictureOutlined className="text-3xl text-gray-400 " />
      <div>
        <PlusOutlined className="absolute bottom-9 right-10 bg-orange-500 text-white rounded-full p-1" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {fileUrl ? (
        <div className="relative w-36 h-32">
          <img
            src={fileUrl}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-md"
          />
          <Button
            onClick={() => setFileUrl(null)}
            className="mt-2 bg-gray-100 text-gray-500 font-semibold"
            type="default"
          >
            Replace Image
          </Button>
        </div>
      ) : (
        <Upload
          className="flex justify-center"
          showUploadList={false}
          beforeUpload={handleUpload}
        >
          {uploadButton}
        </Upload>
      )}
    </div>
  );
};

export default UploadButton;
