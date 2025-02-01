import { SearchIcon } from "lucide-react";
import React from "react";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div>
      <form className="relative">
        <input
          type="text"
          className="border-2 border-gray-300 pl-2 pr-7 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <SearchIcon
          size={18}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </form>
    </div>
  );
};
export default SearchBar;
