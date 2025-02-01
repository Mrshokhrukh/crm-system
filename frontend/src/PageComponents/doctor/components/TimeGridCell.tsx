import { Check } from "lucide-react";
import React from "react";

type TimeGridCellProps = {
  appointment: any;
  onClick: () => void;
};

const TimeGridCell: React.FC<TimeGridCellProps> = ({
  appointment,
  onClick,
}) => {
  if (appointment) {
    console.log(appointment.time.start);
    
    return (
      <div className="p-3 border-r border-b bg-white flex items-center justify-center">
        <Check size={20} className="text-black" />
        <div>{appointment.time}</div>
      </div>
    );
  }
  return (
    <div
      className="border-b p-3 border-r bg-gray-100 cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    ></div>
  );
};
export default TimeGridCell;
