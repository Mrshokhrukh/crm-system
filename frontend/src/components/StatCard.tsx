import React from "react";

type StatCardProps = {
  number: number;
  bgColor: string;
  text: string;
};

const StatCard: React.FC<StatCardProps> = ({ bgColor, number, text }) => {
  return (
    <div
      className={`${bgColor} border rounded-xl p-6 text-black shadow-sm cursor-pointer hover:scale-[102%] transition-all duration-150`}
    >
      <h1 className="text-4xl font-bold mb-2">{number}</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
};
export default StatCard;
