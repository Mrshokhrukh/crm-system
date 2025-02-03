import React, { useState } from 'react';
import { X, Search, Plus } from 'lucide-react';

interface AddSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function AddSaleModal({ isOpen, onClose }: AddSaleModalProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
  });

  if (!isOpen) return null;

  const total = selectedProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Yangi sotuv</h2>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
                Saqlash
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Product Search */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Mahsulotlarni qidirish"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Selected Products Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mahsulot
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Narxi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Soni
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jami
                      </th>
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedProducts.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="number"
                            value={product.quantity}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value);
                              setSelectedProducts(prev =>
                                prev.map(p =>
                                  p.id === product.id
                                    ? { ...p, quantity: newQuantity }
                                    : p
                                )
                              );
                            }}
                            className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {(product.price * product.quantity).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => {
                              setSelectedProducts(prev =>
                                prev.filter(p => p.id !== product.id)
                              );
                            }}
                            className="text-red-600 hover:text-red-900"
                          >
                            <X size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - Payment Info */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="text-lg font-medium mb-4">To'lov ma'lumotlari</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mijoz
                    </label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Mijoz nomi"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon raqami
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="+998 __ ___ __ __"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To'lov turi
                    </label>
                    <div className="flex gap-2">
                      <button
                        className={`flex-1 px-4 py-2 rounded-lg ${
                          paymentMethod === 'cash'
                            ? 'bg-green-700 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                        onClick={() => setPaymentMethod('cash')}
                      >
                        Naqd
                      </button>
                      <button
                        className={`flex-1 px-4 py-2 rounded-lg ${
                          paymentMethod === 'card'
                            ? 'bg-green-700 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        Karta
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Jami:</span>
                      <span className="font-medium">{total.toLocaleString()} so'm</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Chegirma:</span>
                      <span className="font-medium">0 so'm</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                      <span>To'lanishi kerak:</span>
                      <span>{total.toLocaleString()} so'm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}