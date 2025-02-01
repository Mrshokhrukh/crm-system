import React, { useState } from "react";
import { generateTime, generateWeekdays } from "../../../utils/calendar";
import {
  isTimeFieldAvailable,
  setAppointmentForTimeField,
} from "../../../utils/appointment";
import TimeGridCell from "./TimeGridCell";
import AppointmentModal from "./AppointmentModal";

type TimeFieldsGridProps = {
  doctor: any;
};

const TimeFieldsGrid: React.FC<TimeFieldsGridProps> = ({ doctor }) => {
  const [appointments, setAppointments] = useState<any>([
    {
      id: Math.random(),
      date: "dush",
      time: "09:00",
      doctorId: doctor.id,
      doctorName: doctor.name,
      note: "eshmat ts",
    },
  ]);
  const [selectedDay, setSelectedDay] = useState<any>();

  const handleAppointment = () => {
    const appointmentData = {
      id: Math.random(),
      date: selectedDay.date,
      time: selectedDay.time,
      doctorId: doctor.id,
      doctorName: doctor.name,
      note: "eshmat ts",
    };

    setAppointments([...appointments, appointmentData, appointmentData]);

    setSelectedDay(null);
  };

  const timeFields = generateTime();

  const weekDays = generateWeekdays();


  return (
    <>
      <div className="overflow-scroll border rounded-lg max-h-[600px]">
        <div className="grid grid-cols-8 border-b bg-gray-50">
          <h2 className="p-2 border-r font-medium text-gray-700"> VAQT </h2>
          {weekDays?.map((weekday: any, index: number) => {
            return (
              <div className="p-3 border-r text-center" key={index}>
                <div>{weekday.name}</div>
                <div>({weekday.date})</div>
              </div>
            );
          })}
        </div>
        <div className="">
          {timeFields?.map((time: any, index: number) => {
            return (
              <div className="grid grid-cols-8" key={index}>
                <div className="p-2.5 border-r border-b text-gray-700">{time}</div>
                {weekDays.map((day: any, index: number) => {
                  const isAvailable = isTimeFieldAvailable(
                    day.date,
                    time,
                    appointments
                  );

                  const appoinment = setAppointmentForTimeField(
                    day.date,
                    time,
                    appointments
                  );

                  return (
                    <TimeGridCell
                      key={index}
                      appointment={appoinment}
                      onClick={() =>
                        isAvailable &&
                        setSelectedDay({ date: day.date, time: day.time })
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {selectedDay && (
        <AppointmentModal
          date={selectedDay.date}
          time={selectedDay.time}
          onSave={() => handleAppointment}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  );
};
export default TimeFieldsGrid;
