export default function BotPage(){
    return(
        
        
        <div className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bot Name</label>
          <input type="text" placeholder="Enter bot name" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bot Token</label>
          <input type="text" placeholder="Bot access token" className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
          <input type="url" placeholder="Webhook endpoint" className="w-full px-4 py-2 border rounded" />
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Bot Settings</button>
      </div>
        
    )
}