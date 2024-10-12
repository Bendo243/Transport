import { Select, } from 'antd';

interface selectBarProps{
  onStatuschange: (status:string | null)=> void;
}

const SelectBar: React.FC<selectBarProps>=({onStatuschange}) => {
   const handleChange = (value:string)=> {
    onStatuschange(value);
   }
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
       
      defaultValue="STATUS"
      style={{ width: 200,height:32 }}
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
