import React from "react";

type FormTabsProps = {};

const FormTabs: React.FC<FormTabsProps> = () => {
  return (
    <div className="flex gap-2 mb-6">
      <button className="bg-zinc-800 text-white px-4 py-2 rounded">
        registratsiya
      </button>
      <button className="bg-zinc-600 text-white px-4 py-2 rounded">
        bemor tarixi
      </button>
    </div>
  );
};
export default FormTabs;
