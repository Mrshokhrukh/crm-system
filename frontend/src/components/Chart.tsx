import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartProps = {};

const data: any = [
  {
    sana: "30 dekabr",
    tashriflar: 2,
  },
  {
    sana: "29 dekabr",
    tashriflar: 23,
  },
  {
    sana: "28 dekabr",
    tashriflar: 65,
  },
  {
    sana: "27 dekabr",
    tashriflar: 43,
  },
  {
    sana: "26 dekabr",
    tashriflar: 76,
  },
  {
    sana: "25 dekabr",
    tashriflar: 90,
  },
  {
    sana: "24 dekabr",
    tashriflar: 34,
  },
  {
    sana: "23 dekabr",
    tashriflar: 43,
  },
  {
    sana: "22 dekabr",
    tashriflar: 50,
  },
  {
    sana: "21 dekabr",
    tashriflar: 10,
  },
];

const Chart: React.FC<ChartProps> = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Oxirgi 10 kunlik bemorlar tashrifi
        </h1>
        <div className="text-xl">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <span>bemorlar soni {2}</span>
          </div>
        </div>
      </div>
      <div className="h-96 w-full mt-10">
        <ResponsiveContainer width={"100%"} height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 15, bottom: 5, left: -20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="sana"
              angle={0}
              tick={{ fontSize: 12, fill: "#000" }}
              tickLine={false}
              axisLine={{ stroke: "black" }}
            />
            <YAxis
              tickCount={11}
              domain={[0, 1]}
              tick={{ fontSize: 12, fill: "#000" }}
              tickLine={false}
              axisLine={{ stroke: "black" }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, .05)" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid rgba(0, 0, 0, .4)",
                padding: "10px",
                borderRadius: "4px",
              }}
            />
            <Bar
              dataKey="tashriflar"
              fill="white"
              stroke="black"
              radius={2}
              maxBarSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Chart;
