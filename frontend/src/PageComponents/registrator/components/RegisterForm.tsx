import { X } from "lucide-react";
import React from "react";
import FormFields from "./FormFields";
import FormTabs from "./FormTabs";
import FormActions from "./FormActions";

type RegisterFormProps = {
  onClose: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-medium">Saqlash va berkirish</h2>
        <button
          onClick={onClose}
          className="bg-zinc-800 text-white p-2 rounded hover:bg-zinc-700 transition-colors"
        >
          <X size={22} />
        </button>
      </div>
      <FormTabs />
      <FormFields />
      <FormActions />
    </div>
  );
};
export default RegisterForm;
