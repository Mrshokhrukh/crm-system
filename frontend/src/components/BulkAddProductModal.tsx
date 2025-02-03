import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BulkAddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductRow {
  id: number;
  name: string;
  barcode: string;
  measureUnit: string;
  sellingPrice: string;
  wholesalePrice: string;
  purchasePrice: string;
  packageName: string;
  packageCount: string;
  quantity: string;
}

export default function BulkAddProductModal({ isOpen, onClose }: BulkAddProductModalProps) {
  const [products, setProducts] = useState<ProductRow[]>([
    {
      id: 1,
      name: '',
      barcode: '1664646014373',
      measureUnit: 'dona,kg,m',
      sellingPrice: '',
      wholesalePrice: '',
      purchasePrice: '',
      packageName: 'quti,paket,o\'ram',
      packageCount: '',
      quantity: ''
    }
  ]);
  const [editMode, setEditMode] = useState(false);

  const addRow = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: '',
        barcode: '1664646014373',
        measureUnit: 'dona,kg,m',
        sellingPrice: '',
        wholesalePrice: '',
        purchasePrice: '',
        packageName: 'quti,paket,o\'ram',
        packageCount: '',
        quantity: ''
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg">
                Yangi paket qo'shish
              </button>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-sm">
                    1
                  </div>
                  <span className="text-sm text-gray-600">Yuklanayotgan mahsulotlar soni:</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-sm">
                    0
                  </div>
                  <span className="text-sm text-gray-600">Muvaffaqiyatli yuklangan mahsulotlar soni:</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-sm">
                    0
                  </div>
                  <span className="text-sm text-gray-600">Yuklanmagan mahsulotlar soni:</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Mahsulotlarni tahrirlash</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editMode}
                    onChange={(e) => setEditMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">#</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Mahsulot nomi *
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Barkod *
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    O'lchov birligi *
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Sotish narxi *
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Ulgurji narxi
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Sotib olingan narxi
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    O'ramlar nomi
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    O'ramlar soni
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                    Qoldiq
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="px-3 py-2 text-sm">{index + 1}</td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={product.barcode}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <select className="w-full px-2 py-1 border border-gray-300 rounded bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>$</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <select className="w-full px-2 py-1 border border-gray-300 rounded bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>$</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <select className="w-full px-2 py-1 border border-gray-300 rounded bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>$</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <select className="w-full px-2 py-1 border border-gray-300 rounded bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>$</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={product.packageName}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}