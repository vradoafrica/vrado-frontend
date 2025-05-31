export default function Profile(){
    return(<div className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
          <input type="file" className="block w-full text-sm text-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Change Email</label>
          <input type="email" placeholder="Enter new email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
          <input type="password" placeholder="Current password" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input type="password" placeholder="New password" className="w-full px-4 py-2 border rounded" />
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Profile</button>
      </div>)
}