import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, FileDown } from 'lucide-react';
import AddSaleModal from '../components/AddSaleModal';

interface Sale {
  id: number;
  saleId: string;
  client: string;
  status: 'tasdiqlangan' | 'tasdiqlanmagan' | 'bekor qilingan';
  returnStatus: 'to\'lov kutilmoqda' | 'to\'lov tasdiqlandi';
  productValue: number;
  totalPrice: number;
  paidAmount: number;
  cashPayment: number;
  cardPayment: number;
  debt: number;
  discount: number;
  seller: string;
  customer: string;
  saleDate: string;
}

const sampleSales: Sale[] = [
  {
    id: 1,
    saleId: '674',
    client: 'Неизвестный клиент',
    status: 'tasdiqlangan',
    returnStatus: 'to\'lov kutilmoqda',
    productValue: 207020,
    totalPrice: 186318,
    paidAmount: 186318,
    cashPayment: 0,
    cardPayment: 0,
    debt: 20702,
    discount: 0,
    seller: '998974200996',
    customer: '',
    saleDate: '01.10.2022 19:51:30'
  },
  {
    id: 2,
    saleId: '673',
    client: 'Неизвестный клиент',
    status: 'tasdiqlangan',
    returnStatus: 'to\'lov kutilmoqda',
    productValue: 2360000,
    totalPrice: 2124000,
    paidAmount: 2124000,
    cashPayment: 0,
    cardPayment: 0,
    debt: 236000,
    discount: 0,
    seller: '998974200996',
    customer: '',
    saleDate: '01.10.2022 19:50:11'
  },
  // Add more sample data as needed
];

export default function SalesList() {
  const [selectedSales, setSelectedSales] = useState<number[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ start: '01 Oct 2022', end: '01 Oct 2022' });

  const filteredSales = useMemo(() => {
    return sampleSales.filter(sale => {
      const matchesSearch = searchQuery.trim() === '' || 
        sale.saleId.includes(searchQuery) ||
        sale.client.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchQuery]);

  const getStatusBadgeClass = (status: Sale['status']) => {
    switch (status) {
      case 'tasdiqlangan':
        return 'bg-green-100 text-green-800';
      case 'tasdiqlanmagan':
        return 'bg-yellow-100 text-yellow-800';
      case 'bekor qilingan':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getReturnStatusBadgeClass = (status: Sale['returnStatus']) => {
    return status === 'to\'lov kutilmoqda' 
      ? 'bg-amber-100 text-amber-800'
      : 'bg-green-100 text-green-800';
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-medium">Sotuvlar ro'yxati</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              >
                <span className="flex items-center gap-2">
                  <Plus size={18} />
                  Yangi sotuv
                </span>
              </button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                <span className="flex items-center gap-2">
                  <Plus size={18} />
                  Chakana savdo
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
              <input
                type="text"
                value={dateRange.start}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={dateRange.end}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
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

          {/* Sales Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-6 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mijoz
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotuv
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotuv holati
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To'lov holati
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ma'sul xodim
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jami narxi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To'lov
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Naqd to'lov
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bank kartasi orqali to'lov
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qarzga
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chegirma
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotuvchi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ma'lumot
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotilgan vaqti
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedSales.includes(sale.id)}
                        onChange={() => {
                          setSelectedSales(prev => 
                            prev.includes(sale.id)
                              ? prev.filter(id => id !== sale.id)
                              : [...prev, sale.id]
                          );
                        }}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-500 hover:text-blue-700">
                        {sale.client}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.saleId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(sale.status)}`}>
                        {sale.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getReturnStatusBadgeClass(sale.returnStatus)}`}>
                        {sale.returnStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.productValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.totalPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.paidAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.cashPayment.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.cardPayment.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.debt.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.discount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.seller}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.saleDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">•••</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddSaleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}