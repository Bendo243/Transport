import React from 'react';
import { Avatar } from 'antd';
import bus from '../../assets/BusD.svg'

const AvatarGroup: React.FC = () => {
  return (
    <div>
      <Avatar.Group
        maxCount={3}
        size="large"
        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      >
        <Avatar src='https://randomuser.me/api/portraits/men/1.jpg' />
        <Avatar src='https://randomuser.me/api/portraits/men/1.jpg' />
        <Avatar src='https://randomuser.me/api/portraits/men/1.jpg'/>
      </Avatar.Group>
    </div>
  );
};

export default AvatarGroup;
