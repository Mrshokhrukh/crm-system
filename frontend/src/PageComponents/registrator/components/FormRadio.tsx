import React from "react";

type FormRadioProps = {
  label: string;
  options: any;
  isRequired: boolean;
};

const FormRadio: React.FC<FormRadioProps> = ({
  label,
  options,
  isRequired,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <label
        htmlFor={`${label.replace(" ", "")}`}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-4">
        {options.map((option: any, index: number) => {
          return (
            <label
              htmlFor={option.label}
              key={index}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                name={label}
                className="text-blue-500 focus:ring-black"
                value={option.value}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default FormRadio;
