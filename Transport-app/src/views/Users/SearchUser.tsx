import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface searchBarProps{
  onSearch:(query:string) => void;
}

const SearchUser:React.FC<searchBarProps> = ({onSearch}) => {
   const [searchQuery, setSearchQuery]= useState('');

   const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
   }

  return (
    <div className="flex  ">
      <div className="relative w-[670px] h-[15]">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-gray-700 border focus:outline-none focus:ring-1 focus:ring-[#FF742CBD]"
          style={{ width: '670px',height:32 }}
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FaSearch className="text-gray-300 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchUser;
