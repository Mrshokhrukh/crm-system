import React from "react";

type FormSelectProps = {
  label: string;
  options: string[];
  isRequired?: boolean;
  value?: string;
};

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  isRequired,
  options,
  value,
}) => {
  return (
    <div className="text-sm font-medium text-gray-700 mb-1">
      <label htmlFor={`${label.replace(" ", "")}`}>
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        name={`${label.replace(" ", "")}`}
        id={`${label.replace(" ", "")}`}
        value={value}
        onChange={(e) => console.log(e.target.value)}
      >
        {options.map((option: any) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
