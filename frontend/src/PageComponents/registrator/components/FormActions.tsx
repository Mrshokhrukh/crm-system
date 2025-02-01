import React, { useState } from "react";
import DoctorScedule from "../../doctor/components/DoctorScedule";
import FormActionButton from "./FormActionButton";

type FormActionsProps = {};
const buttonLabels = ["navbat olish", "tekshiruvlar", "to'lov", "shiforkorlar"];
const FormActions: React.FC<FormActionsProps> = () => {
  const [showShcedule, setShowShcedule] = useState(false);

  const handleClick = (i: number) => {
    switch (i) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        setShowShcedule(true);
        break;
    }
  };

  return (
    <>
      <div className="flex gap-2 mt-6">
        {buttonLabels.map((label: string, i) => {
          return (
            <FormActionButton
              onclick={() => handleClick(i)}
              text={label}
              key={i}
            />
          );
        })}
      </div>
      {showShcedule && (
        <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-100">
          <DoctorScedule onClose={() => setShowShcedule(false)} />
        </div>
      )}
    </>
  );
};
export default FormActions;
