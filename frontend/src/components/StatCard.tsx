interface StatCardProps {
  icon: any;
  title: string;
  value: string;
}

export default function StatCard({ icon: Icon, title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border cursor-pointer hover:scale-105 transition-all duration-200">
      <div className="flex flex-col">
        <div className="text-gray-500 text-sm mb-2">{title}</div>
        <div className="flex items-center space-x-2">
          <Icon size={24} className="text-gray-400" />
          <span className="text-xl font-semibold">{value}</span>
        </div>
      </div>
    </div>
  );
}
