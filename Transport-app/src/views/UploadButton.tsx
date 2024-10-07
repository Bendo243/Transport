import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import {  CloudUploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload/interface';

const UploadButton: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  
  const handleUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    return false; 
    
  };

  
  const uploadButton = (
    <div className="relative w-36 h-32 border-2 border-dashed border-[#FF742C] rounded-md flex justify-center  bg-white">
      <CloudUploadOutlined  className="text-3xl text-gray-300 " />
      <div>
      <p className='absolute bottom-6 right-14 flex-row'>select</p>
      <p className='absolute bottom-1 right-14 text-[#FF742C]'>file(s)</p>
       
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
          className="flex justify-center "
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
