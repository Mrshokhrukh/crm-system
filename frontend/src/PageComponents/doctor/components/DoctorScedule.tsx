import { MoveLeft, MoveRight, X } from "lucide-react";
import React, { useState } from "react";
import DoctorSelect from "./DoctorSelect";
import TimeFieldsGrid from "./TimeFieldsGrid";
import { getCurrentWeek } from "../../../utils/date";

type DoctorSceduleProps = {
  onClose: () => void;
};

const DoctorScedule: React.FC<DoctorSceduleProps> = ({ onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<any>({
    id: "1",
    name: "Xoshimov Nematulloh",
  });

  const [currentWeek, setCurrentWeek] = useState("30-dekabr / 7-yanvar");

  getCurrentWeek()

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Shifokor qabul vaqtlari</h2>
        <button
          onClick={onClose}
          className="text-white bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700"
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <DoctorSelect
          selectedDoctor={selectedDoctor}
          onChange={setSelectedDoctor}
        />
        <div className="flex items-center gap-4">
          <button className="px-2 py-1 bg-black rounded text-white">
            <MoveLeft size={16} />
          </button>
          <span className="text-gray-700">{currentWeek}</span>
          <button className="px-2 py-1 bg-black rounded text-white">
            <MoveRight size={16} />
          </button>
        </div>
      </div>

      <TimeFieldsGrid doctor={selectedDoctor} />
    </div>
  );
};
export default DoctorScedule;
