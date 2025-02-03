import React from 'react';
import { FileText, HandCoins, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';

export default function Dashboard() {
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
              <h2 className="text-xl font-medium">Bosh sahifa</h2>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
                Nazariy
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <StatCard
                icon={FileText}
                title="Buyum"
                value="13 388 414"
              />
              <StatCard
                icon={FileText}
                title="Bir haftalik"
                value="17 067 414"
              />
              <StatCard
                icon={FileText}
                title="Bir oylik"
                value="0"
              />
              <StatCard
                icon={HandCoins}
                title="Bizga qarz"
                value="-9 105 200 088.5691"
              />
              <StatCard
                icon={DollarSign}
                title="Bizning qarzmiz"
                value="39 989 684 011.35"
              />
            </div>
          </div>
          
          <Chart />
        </main>
      </div>
    </div>
  );
}