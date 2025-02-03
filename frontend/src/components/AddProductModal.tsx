import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    measureUnit: 'dona',
    packageName: '',
    packageCount: '',
    barcode: '1664645648072',
    quantity: '',
    sku: '',
    description: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Yangi mahsulot qo'shish</h2>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
                Saqlash
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mahsulot nomi *
                </label>
                <input
                  type="text"
                  value={productData.name}
                  onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Turkum
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Turkumni tanlang"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="p-2 border border-gray-300 rounded-lg">
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  O'lchov birligi *
                </label>
                <input
                  type="text"
                  value={productData.measureUnit}
                  onChange={(e) => setProductData({ ...productData, measureUnit: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  O'ramlar nomi
                </label>
                <input
                  type="text"
                  value={productData.packageName}
                  onChange={(e) => setProductData({ ...productData, packageName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  O'ramlar soni
                </label>
                <input
                  type="text"
                  value={productData.packageCount}
                  onChange={(e) => setProductData({ ...productData, packageCount: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Inventar</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Barkod *
                    </label>
                    <input
                      type="text"
                      value={productData.barcode}
                      onChange={(e) => setProductData({ ...productData, barcode: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Qoldiq
                    </label>
                    <input
                      type="text"
                      placeholder="Mahsulot qoldig'i"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SKU(Artikul)
                    </label>
                    <input
                      type="text"
                      placeholder="Kod kiriting"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Narxi</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sotish narxi *
                    </label>
                    <div className="flex items-center gap-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg bg-green-700 text-white">
                        <option>So'm</option>
                      </select>
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ulgurji narxi
                    </label>
                    <div className="flex items-center gap-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg bg-green-700 text-white">
                        <option>So'm</option>
                      </select>
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sotib olingan narxi
                    </label>
                    <div className="flex items-center gap-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg bg-green-700 text-white">
                        <option>$111555</option>
                      </select>
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Mahsulot rasmi</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-500">Mahsulotga rasm yuklash</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Mahsulot yoki xomashyo</h3>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Mahsulotlar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}