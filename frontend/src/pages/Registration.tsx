import React, { useState } from "react";
import { Plus, RefreshCcw } from "lucide-react";
import RegisterForm from "../PageComponents/registrator/components/RegisterForm";
import Pagination from "../components/Pagination";
import RegistrationTable from "../PageComponents/registrator/components/RegistrationTable";
import SearchBar from "../PageComponents/registrator/components/SearchBar";

type RegistrationProps = {};

const Registration: React.FC<RegistrationProps> = () => {
  const [showForm, setShowForm] = useState(true);

  const onClose = () => {
    setShowForm(false);
  };

  return (
    <div className="px-5">
      <div className="flex justify-between items-center mb-6 p-4">
        <div className="flex gap-4">
          <button
            className="bg-zinc-800 text-white hover:bg-zinc-950 px-4 py-2 rounded-md flex items-center justify-center gap-2"
            onClick={() => setShowForm(!showForm)}
          >
            <span className="text-xl">
              <Plus size={18} />
            </span>
            Qo'shish
          </button>
          <button className="bg-zinc-800 text-white hover:bg-zinc-950 px-4 py-2 rounded-md flex items-center justify-center gap-2">
            <span className="text-xl">
              <RefreshCcw size={18} />
            </span>
            Yangilash
          </button>
        </div>
        <SearchBar />
      </div>

      <RegistrationTable />
      <div className="flex justify-end mt-4">
        <Pagination currentPage={1} />
      </div>
      {showForm && (
        <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-100">
          <div className="w-[90%] max-w-5xl max-h-[90vh] overflow-auto">
            <RegisterForm onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Registration;
