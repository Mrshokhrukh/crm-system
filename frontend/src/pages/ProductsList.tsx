import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, FileDown, Download, ShoppingCart } from 'lucide-react';
import AddProductModal from '../components/AddProductModal';
import BulkAddProductModal from '../components/BulkAddProductModal';

interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
  totalSold: number;
  lastUpdate?: string;
  image?: string;
  measureUnit?: string;
  packageName?: string;
  barcode?: string;
}

const sampleProducts: Product[] = [
  { id: 1, name: 'FANTA 1.5 L', sku: '0102', category: 'ICHIMLIKLAR', quantity: 47, measureUnit: 'DONA', packageName: 'KOROBKA', purchasePrice: 20000, sellingPrice: 19000, totalSold: 940000, barcode: '1664645648072', lastUpdate: '01.10.2022 22:40:10' },
  { id: 2, name: 'aaa33', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 36000, sellingPrice: 0, totalSold: 0 },
  { id: 3, name: 'ASIYA BRASLET D100', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 2489, sellingPrice: 0, totalSold: 0 },
  { id: 4, name: 'ASIYA BRASLET D50', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 777, sellingPrice: 0, totalSold: 0, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { id: 5, name: 'ASIYA BRASLET D76', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 1746, sellingPrice: 0, totalSold: 0 },
  { id: 6, name: 'ASIYA CHASHA SIFON', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 20142, sellingPrice: 0, totalSold: 0 },
  { id: 7, name: 'ASIYA KRESTOVINA KASSOY PPH D50/50/50', sku: '', category: 'tanlanmagan', quantity: -10, purchasePrice: 23000, sellingPrice: 0, totalSold: -230000, lastUpdate: '01.10.2022 18:17:56' },
  { id: 8, name: 'ASIYA KRESTOVINA PPH D100/100/100', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 24088, sellingPrice: 0, totalSold: 0 },
  { id: 9, name: 'ASIYA KRESTOVINA PPH D50/100/50', sku: '', category: 'tanlanmagan', quantity: -12, purchasePrice: 20702, sellingPrice: 0, totalSold: -248424, lastUpdate: '01.10.2022 19:51:30' },
  { id: 10, name: 'ASIYA KRESTOVINA PPH D50/50/50', sku: '', category: 'tanlanmagan', quantity: 0, purchasePrice: 15438, sellingPrice: 0, totalSold: 0 }
];

export default function ProductsList() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkAddModalOpen, setIsBulkAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [skuFilter, setSkuFilter] = useState('');


  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const matchesSearch = searchQuery.trim() === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.barcode && product.barcode.includes(searchQuery));
      
      const matchesSku = skuFilter.trim() === '' || 
        product.sku.toLowerCase().includes(skuFilter.toLowerCase());

      return matchesSearch && matchesSku;
    });
  }, [searchQuery, skuFilter]);


  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };


  return (
    <div className="w-full bg-gray-50">
      <div className="p-3 lg:p-6">
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-medium">Mahsulotlar ro'yxati</h1>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <button className=" w-full flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              <Plus size={18} />
              <span>Mahsulotlarni Exceldan qo'shish</span>
            </button>
            <button 
              onClick={() => setIsBulkAddModalOpen(true)}
              className=" w-full flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              <Plus size={18} />
              <span>Mahsulotlarni ko'p miqdorda qo'shish</span>
            </button>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className=" w-full flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              <ShoppingCart size={18} />
              <span>Yangi mahsulot qo'shish</span>
            </button>
            <button className=" w-full flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              <FileDown size={18} />
              <span>Excel'da yuklab olish</span>
            </button>
            <button className=" w-full flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
              <Download size={18} />
              <span>Mahsulotlarni birlashtirish</span>
            </button>
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
            <div className="relative min-w-[200px]">
              <input
                type="text"
                placeholder="Artikulni kiriting"
                value={skuFilter}
                onChange={(e) => setSkuFilter(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
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

          {/* Products Table */}
          {/* <div className=" rounded-lg shadow overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
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
                    Mahsulot nomi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SKU(Artikul)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Turkum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qoldiq
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotilish narxi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sotib olingan narxi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Umumiy qiymati
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    O'zgartirish vaqti
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className={`hover:bg-gray-50 ${product.quantity < 0 ? 'bg-red-50' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-full mr-3 object-cover"
                          />
                        )}
                        <div className="text-sm font-medium text-blue-500 hover:text-blue-700">
                          {product.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.sku || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.quantity} {product.measureUnit?.toLowerCase() || 'sht'}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.purchasePrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.sellingPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.totalSold.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.lastUpdate || 'Topilmadi'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900">
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

        </div>
      </div>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      
      <BulkAddProductModal
        isOpen={isBulkAddModalOpen}
        onClose={() => setIsBulkAddModalOpen(false)}
      />
    </div>
  );
}