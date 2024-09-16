import React from 'react';
import { Upload } from 'antd';
import { PlusOutlined, PictureOutlined } from '@ant-design/icons';

const UploadButton: React.FC = () => {
  const uploadButton = (
    <div className="relative w-36 h-32 border-2 border-dashed rounded-md flex justify-center  bg-white">
      
      <PictureOutlined className="text-3xl text-gray-400 " />

      
      <div >
        <PlusOutlined className="absolute bottom-9 right-10 bg-orange-500 text-white rounded-full p-1" />
      </div>
    </div>
  );

  return (
    <Upload className="flex justify-center" showUploadList={false}>
      {uploadButton}
    </Upload>
  );
};

export default UploadButton;
