import React, { useState } from "react";
import { Search, Filter, Download, Plus, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Customer {
  id: number;
  name: string;
  debt: string;
  date: string;
  phone: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Sarvar Yoldoshev",
    debt: "-113,186,264 / 365,700 $ / 0 ¥",
    date: "04.01.2022",
    phone: "998974200996",
  },
  {
    id: 2,
    name: "Doniyor Mamutov",
    debt: "-429,508,193.5354 / 82,298.7229 $ / 0 ¥",
    date: "24.05.2022",
    phone: "998974200997",
  },
  // Add more customers as needed
];

function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(true);
  const navigate = useNavigate();

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  const handleCustomerClick = (id: number) => {
    navigate(`/customer/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-medium">Mijozlar ro'yxati</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">
              <Plus size={18} />
              Yangi mijoz qo'shish
            </button>
            <button className="px-4 py-2 bg-amber-500 text-white rounded-md flex items-center gap-2">
              <Download size={18} />
              Mijozlarni yuklab olish
            </button>
            <button className="px-4 py-2 bg-amber-500 text-white rounded-md flex items-center gap-2">
              <Download size={18} />
              Excel-da yuklab olish
            </button>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                showAll ? "bg-olive-600 text-white" : "bg-gray-100"
              }`}
              onClick={() => setShowAll(true)}
            >
              Qarz
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                !showAll ? "bg-olive-600 text-white" : "bg-gray-100"
              }`}
              onClick={() => setShowAll(false)}
            >
              Qarz moddalarini ko'riting
            </button>
          </div>
          <div className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="DID"
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Bo'ylanish"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Oxiri"
              className="flex-1 px-4 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Mijoz
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Qarz
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  O'zgargi sotuv
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Ma'lumot
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Bonus faizi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleCustomerClick(customer.id)}
                >
                  <td className="px-6 py-4 text-sm">{customer.id}</td>
                  <td className="px-6 py-4 text-sm text-blue-500">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-sm">{customer.debt}</td>
                  <td className="px-6 py-4 text-sm">{customer.date}</td>
                  <td className="px-6 py-4 text-sm">{customer.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronDown size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Clients;
