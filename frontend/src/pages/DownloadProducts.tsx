import React, { useState, useMemo } from "react";
import { Search, Plus, FileDown } from "lucide-react";
import AddDownloadModal from "../components/AddDownloadModal";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface Download {
  id: number;
  supplier: string;
  status: "to'lov tasdiqlandi" | "to'lov kutish";
  cashPayment: number;
  cardPayment: number;
  bankPayment: number;
  humoPayment: number;
  otherPayment: number;
  totalAmount: number;
  debt: number;
  receiver: string;
  downloadDate: string;
}

const sampleDownloads: Download[] = [
  {
    id: 1,
    supplier: "СЫРОК",
    status: "to'lov tasdiqlandi",
    cashPayment: 0,
    cardPayment: 0,
    bankPayment: 0,
    humoPayment: 0,
    otherPayment: 0,
    totalAmount: 412500,
    debt: 412500,
    receiver: "998974200996",
    downloadDate: "27.09.2022 17:57:06",
  },
  {
    id: 2,
    supplier: "Akmal",
    status: "to'lov tasdiqlandi",
    cashPayment: 0,
    cardPayment: 0,
    bankPayment: 0,
    humoPayment: 0,
    otherPayment: 0,
    totalAmount: 0,
    debt: 0,
    receiver: "998974200996",
    downloadDate: "21.09.2022 14:16:24",
  },
];

export default function DownloadedProducts() {
  const [selectedDownloads, setSelectedDownloads] = useState<number[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ start: "01 Oct 2022", end: "01 Oct 2022" });
  const [supplierFilter, setSupplierFilter] = useState("");

  const filteredDownloads = useMemo(() => {
    return sampleDownloads.filter((download) => {
      const matchesSearch = searchQuery.trim() === "" || download.supplier.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSupplier = supplierFilter.trim() === "" || download.supplier.toLowerCase().includes(supplierFilter.toLowerCase());

      return matchesSearch && matchesSupplier;
    });
  }, [searchQuery, supplierFilter]);

  const getStatusBadgeClass = (status: Download["status"]) => {
    return status === "to'lov tasdiqlandi" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-medium">Tushirilgan mahsulotlar ro'yxati</h1>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                  <span className="flex items-center gap-2">
                    <FileDown size={18} />
                    Mahsulotlarni EXCEL orqali tushirish
                  </span>
                </button>
                <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                  <span className="flex items-center gap-2">
                    <Plus size={18} />
                    Yangi mahsulot tushirish
                  </span>
                </button>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                  <span className="flex items-center gap-2">
                    <FileDown size={18} />
                    Excel'da yuklab olish
                  </span>
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Qidiruv"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div className="flex gap-2">
                <input type="text" value={dateRange.start} className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                <input type="text" value={dateRange.end} className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Yetkazib beruvchini tanlang"
                  value={supplierFilter}
                  onChange={(e) => setSupplierFilter(e.target.value)}
                  className="w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">+</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Ko'rsatish:</span>
                <select className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>100</option>
                  <option>50</option>
                  <option>25</option>
                </select>
              </div>
            </div>

            {/* Downloads Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-3">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yetkazib beruvchi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To'lov holati</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naqd to'lov</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank kartasi orqali to'lov</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank o'tkazmasi orqali to'lov</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humo kartasi orqali to'lov</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boshqa usullar bilan to'lov</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Umumiy qiymati</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qarzga</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qabul qiluvchi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ma'lumot</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tushirilgan vaqti</th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredDownloads.map((download) => (
                    <tr key={download.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedDownloads.includes(download.id)}
                          onChange={() => {
                            setSelectedDownloads((prev) => (prev.includes(download.id) ? prev.filter((id) => id !== download.id) : [...prev, download.id]));
                          }}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-blue-500 hover:text-blue-700">{download.supplier}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(download.status)}`}>{download.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.cashPayment.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.cardPayment.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.bankPayment.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.humoPayment.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.otherPayment.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.totalAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.debt.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.receiver}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-500 hover:text-blue-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.downloadDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-500">•••</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <AddDownloadModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
}
