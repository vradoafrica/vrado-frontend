export default function Automation(){
    return(
        <div className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enable Automation</label>
          <select className="w-full px-4 py-2 border rounded">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Automation Frequency</label>
          <input type="number" placeholder="In minutes" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Action to Perform</label>
          <textarea placeholder="Describe the automation task..." className="w-full px-4 py-2 border rounded"></textarea>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Automation Settings</button>
      </div>
    )
}