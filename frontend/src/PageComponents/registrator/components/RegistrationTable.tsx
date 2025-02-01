import { Edit, Trash } from "lucide-react";
import React from "react";

type RegistrationTableProps = {};

const RegistrationTable: React.FC<RegistrationTableProps> = () => {
  const tableData = [
    {
      id: 1,
      date: "2024-12-10",
      name: "Aliyev vali",
      branch: "asosiy",
      staff: "admin",
      petientId: "1",
    },
    {
      id: 2,
      date: "2024-12-10",
      name: "Aliyev vali",
      branch: "asosiy",
      staff: "admin",
      petientId: "2",
    },
  ];

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-zinc-800 text-white">
            <th className="px-4 py-3 text-left">N</th>
            <th className="px-4 py-3 text-left">vaqt</th>
            <th className="px-4 py-3 text-left">bemor id</th>
            <th className="px-4 py-3 text-left">bemor FISH</th>
            <th className="px-4 py-3 text-left">xodim</th>
            <th className="px-4 py-3 text-left">felial</th>
            <th className="px-4 py-3 text-left">amallar</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item: any) => {
            return (
              <tr key={item.id} className="bg-slate-100 border-b">
                <td className="px-4 py-3 text-left">{item.id}</td>
                <td className="px-4 py-3 text-left">{item.date}</td>
                <td className="px-4 py-3 text-left">{item.petientId}</td>
                <td className="px-4 py-3 text-left">{item.name}</td>
                <td className="px-4 py-3 text-left">{item.staff}</td>
                <td className="px-4 py-3 text-left">{item.branch}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-1 bg-orange-500 text-white rounded">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 bg-red-500 text-white rounded">
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default RegistrationTable;
