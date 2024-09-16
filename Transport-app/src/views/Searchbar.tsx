
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex ">
      <div className="relative w-[670px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-gray-700 border rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FF742CBD]"
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FaSearch className="text-gray-300 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
