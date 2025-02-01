import React from "react";

type FormActionButtonProps = {
  text: string;
  onclick: () => void;
};

const FormActionButton: React.FC<FormActionButtonProps> = ({
  text,
  onclick,
}) => {
  return (
    <button onClick={onclick} className="bg-white border border-black text-black hover:bg-zinc-800 hover:text-white transition duration-300 px-6 py-2 rounded">
      {text}
    </button>
  );
};
export default FormActionButton;
