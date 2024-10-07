
import { Select, } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const SelectType = () => {
  
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
      defaultValue="Type"
      style={{ width: 200,height:32 }}
      onChange={handleChange}
      options={[
        { value: 'Coach Bus', label: 'Coach Bus' },
        { value: 'Mini Bus', label: 'Mini Bus' },
        { value: 'Executive', label: 'Executive' },
        
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectType
