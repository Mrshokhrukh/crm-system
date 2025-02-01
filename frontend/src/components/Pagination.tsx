import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

type PaginationProps = {
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
        <MoveLeft />
      </button>
      <span className="px-5 py-1 bg-blue-400 text-white rounded-md text-lg">
        {currentPage}
      </span>
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
        <MoveRight />
      </button>
      <select
        name=""
        id=""
        className="px-3 py-1.5 border rounded-md hover:bg-gray-100"
      >
        <option value="">1 / 10</option>
        <option value="">2 / 10</option>
        <option value="">3 / 10</option>
      </select>
    </div>
  );
};
export default Pagination;
