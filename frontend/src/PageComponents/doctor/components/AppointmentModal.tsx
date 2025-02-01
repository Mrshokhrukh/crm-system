import { X } from "lucide-react";
import React from "react";

type AppointmentModalProps = {
  date: any;
  time: any;
  onClose: () => void;
  onSave: () => void;
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  date,
  time,
  onClose,
  onSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-100">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Shifokorga bemor qo'shish</h3>
          <button
            onClick={onClose}
            className="bg-gray-400 p-1 rounded-full hover:bg-gray-500"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="">Ko'rik sanasi</label>
            <input
              type="date"
              value={date}
              readOnly
              className="w-full border px-3 py-1 rounded-md font-medium text-gray-700 mb-1"
            />
          </div>
          <div>
            <label htmlFor="">Ko'rik vaqti</label>
            {/* <input
              type="time"
              value={time}
              readOnly
              className="w-full border py-1 px-3 rounded-md font-medium text-gray-700 mb-1"
            /> */}

            
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppointmentModal;
