import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import AddSupplierModal from './AddSupplierModal';

interface AddDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDownloadModal({ isOpen, onClose }: AddDownloadModalProps) {
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState(false);
  const [selectedDate] = useState('01 Oct 2022');
  const [supplier, setSupplier] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('0');
  const [note, setNote] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Yangi mahsulot tushirish</h2>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg">
                Yangi mahsulot qo'shish
              </button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
                To'loviz saqlash
              </button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
                To'loviz saqlash va Chek chiqarish
              </button>
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg">
                Yetkazib beruvchiga to'lov
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Date and Supplier Selection */}
            <div>
              <input
                type="text"
                value={selectedDate}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Yetkazib beruvchi"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={() => setIsAddSupplierModalOpen(true)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="text-center text-gray-500 mt-2">
                  Yetkazib beruvchi topilmadi
                </div>
              </div>

              <div className="w-48">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="bg-green-700 text-white px-3 py-2 rounded-lg">
                    So'm
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Mahsulot"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="w-48">
                <input
                  type="text"
                  placeholder="Soni"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Note */}
            <div>
              <textarea
                placeholder="Bu yerga qo'shimcha ma'lumot kiritishingiz mumkin..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
              />
            </div>

            {/* Total */}
            <div className="flex justify-end">
              <div className="text-lg">
                Jami: <span className="font-medium">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddSupplierModal
        isOpen={isAddSupplierModalOpen}
        onClose={() => setIsAddSupplierModalOpen(false)}
      />
    </div>
  );
}