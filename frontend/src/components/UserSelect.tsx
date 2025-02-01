import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { stuff } from "../db/roles";

type UserSelectProps = {
  value: any;
  onchange: (id: any) => void;
};

const UserSelect: React.FC<UserSelectProps> = ({ value, onchange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectUser = stuff.find((user) => user.id == value?.id);

  const handleSelect = (user: any) => {
    onchange(user);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 rounded flex items-center border justify-between bg-white"
      >
        <span className="text-gray-800">
          {selectUser ? selectUser.name : "xodimni tanlang"}
        </span>
        <ChevronDown className="text-gray-500" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
          {stuff.map((user: any, i) => {
            return (
              <button
                type="button"
                key={i}
                onClick={() => handleSelect(user)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex flex-col"
              >
                <span>{user.name}</span>
                <span className="text-[13px] text-gray-500">{user.role}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default UserSelect;
