import React from "react";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";

type FormFIeldsProps = {};

const FormFields: React.FC<FormFIeldsProps> = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-4">
        <FormSelect
          label="helllo wrld"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
        <FormSelect
          label="something"
          value=""
          isRequired={true}
          options={["hello", "eshmat"]}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="something2" type="date" isRequired={true} />
        <FormRadio
          label="jinsi"
          options={[
            { label: "erkak", value: "erkak" },
            { label: "ayol", value: "ayol" },
          ]}
          isRequired={true}
        />
      </div>
    </div>
  );
};
export default FormFields;
