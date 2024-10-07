import { FaSearch } from 'react-icons/fa';

interface searchBarProps{
    onSearch:(query:string) =>
void;}

const SearchBar: React.FC<searchBarProps>  = ({onSearch}) => {
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

  return (
    <div className="flex  ">
      <div className="relative w-[711px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-gray-700 border shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FF742CBD]"
          style={{ width: '670px',height:32 }}
          onChange={handleInputChange}
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-12">
          <FaSearch className="text-gray-300 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
