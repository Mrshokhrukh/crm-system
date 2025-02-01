import React from "react";

type FormInputProps = {
  label: string;
  type: any;
  isRequired: boolean;
};

const FormInput: React.FC<FormInputProps> = ({ label, type, isRequired }) => {
  return (
    <div>
      <label
        htmlFor={`${label.replace(" ", "")}`}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={`${label.replace(" ", "")}`}
        type={type}
        required={isRequired}
        className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};
export default FormInput;
