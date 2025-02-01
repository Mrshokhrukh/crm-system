import React from "react";

type DoctorSelectProps = {
  selectedDoctor: any;
  onChange: React.Dispatch<React.SetStateAction<any>>;
};

const doctors = [
  {
    id: "1",
    name: "Xoshimov Nematulloh",
  },
  {
    id: "2",
    name: "Karimov Nematulloh",
  },
];

const DoctorSelect: React.FC<DoctorSelectProps> = ({
  selectedDoctor,
  onChange,
}) => {
  const handleChange = (e: any) => {
    const doctor = doctors.find((data) => data.id == e.target.value);
    if (doctor) {
      onChange(doctor);
    }
  };

  return (
    <div className="w-72">
      <select
        name=""
        id=""
        value={selectedDoctor.id}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:outline-none focus:border-black"
      >
        {doctors.map((doctor: any) => {
          return (
            <option value={doctor.id} key={doctor.id}>
              {doctor.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DoctorSelect;
