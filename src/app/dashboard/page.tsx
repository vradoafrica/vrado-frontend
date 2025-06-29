"use client"


export default function Dashboard() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-gray-600">Customers</h2>
      <p className="text-2xl font-bold">0</p>
    </div>

    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-gray-600">Sales</h2>
      <p className="text-2xl font-bold">$9,543</p>
    </div>

    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-gray-600">Visitors</h2>
      <p className="text-2xl font-bold">4,305</p>
    </div>

    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-gray-600">Revenue</h2>
      <p className="text-2xl font-bold">$21,390</p>
    </div>
  </div>
      
  );
}
