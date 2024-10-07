
import { Select, } from 'antd';

interface selectBarProps{
    handleStatusChange:(status:string)=>void;
}

const SelectBar:React.FC<selectBarProps> = ({handleStatusChange}) => {
  
    return (
    <div className='w-[200px] h-[32px]'>
       <Select
      defaultValue="Status"
      style={{ width: 200,height:32 }}
      onChange={handleStatusChange}
      options={[
        { value: 'ACTIVE', label: 'ACTIVE' },
        { value: 'INACTIVE', label: 'INACTIVE' },
    
      ]}
    />
    </div>
  )
}

export default SelectBar
