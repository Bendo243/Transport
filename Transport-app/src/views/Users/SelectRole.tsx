import { Select, } from 'antd';

interface SelectRoleProps{
    onRoleChange:(role:string|null) => void;
};

const SelectRole: React.FC<SelectRoleProps> = ({ onRoleChange }) => {
    const handleChange = (value: string) => {
      onRoleChange(value);  // Trigger the callback to filter table
    };
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
       
      defaultValue="Role"
      style={{ width: 200,height:32 }}
      onChange={handleChange}
      options={[
        { value: 'Admin', label: 'Admin' },
        { value: 'Driver', label: 'Driver' },
        { value: 'Customer Rep.', label: 'Customer Rep.' },
      ]}
    />
    </div>
  )
}

export default SelectRole
