import React from "react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full p-6 space-y-6">
      <div className="w-full grid grid-cols-4 gap-6">
        <StatCard bgColor="bg-white" text="bemorlar soni" number={234} />
        <StatCard bgColor="bg-white" text="hodimlar soni" number={34} />
        <StatCard bgColor="bg-white" text="xonalar soni" number={12} />
        <StatCard
          bgColor="bg-white"
          text="tekshiruvlar soni"
          number={34}
        />
      </div>

      <Chart />   
    </div>
  );
};
export default Home;
