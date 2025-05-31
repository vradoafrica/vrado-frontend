export default function Business(){
    return (
        <div className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input type="text" placeholder="Business Name" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
            <input type="email" placeholder="example@business.com" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <textarea placeholder="Street, City, State, ZIP" className="w-full px-4 py-2 border rounded"></textarea>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Business Info</button>
        </div>
      )
}