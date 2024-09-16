
import { Select, } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const SelectBar = () => {
  
    return (
    <div>
       <Select
      defaultValue="STATUS"
      style={{ width: 200,height:40 }}
      onChange={handleChange}
      options={[
        { value: 'ACTIVE', label: 'ACTIVE' },
        { value: 'INACTIVE', label: 'INACTTIVE' },
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectBar
