
import { Select, } from 'antd';

interface SelectLoadingBarProps{
    handleAddressFilter:(value:string)=> void;
}

const SelectLoadingBar: React.FC<SelectLoadingBarProps> = ({handleAddressFilter}) =>{
const handleChange = (value:string) => {
    handleAddressFilter(value);
}

  
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
      defaultValue="State"
      style={{ width: 200,height:32 }}
      onChange={handleChange}
      options={[
        { value: 'Abuja', label: 'Abuja' },
        { value: 'Imo', label: 'Imo' },
        { value: 'Benin', label: 'Benin' },
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectLoadingBar
