
import { Select, } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const SelectBar = () => {
  
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
      defaultValue="STATUS"
      style={{ width: 200,height:40 }}
      onChange={handleChange}
      options={[
        { value: 'ACTIVE', label: 'ACTIVE' },
        { value: 'INACTIVE', label: 'INACTIVE' },
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectBar
