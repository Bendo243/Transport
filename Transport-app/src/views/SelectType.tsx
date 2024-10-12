
import { Select, } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const SelectType = () => {
  
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
      defaultValue="Type"
      style={{ width: '200px',height:32 }}
      onChange={handleChange}
      options={[
        { value: 'AVAILABLE', label: 'AVAILABLE' },
        { value: 'ASSIGNED', label: 'ASSIGNED' },
        { value: 'FAULTY', label: 'FAULTY' },
        
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectType
