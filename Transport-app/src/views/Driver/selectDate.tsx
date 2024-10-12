import { Select, } from 'antd';

interface selectBarProps{
  onStatuschange: (status:string | null)=> void;
}

const SelectDate: React.FC<selectBarProps>=({onStatuschange}) => {
   const handleChange = (value:string)=> {
    onStatuschange(value);
   }
    return (
    <div className='w-[200px] h-[32px] '>
       <Select
       
      defaultValue="Date"
      style={{ width: 200,height:32 }}
      onChange={handleChange}
      options={[
        { value: 'DELAYED', label: 'DELAYED' },
        { value: 'CLOSED', label: 'CLOSED' },
        
        // { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  )
}

export default SelectDate
