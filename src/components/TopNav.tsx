"use client"
import { User } from "lucide-react"


export default function Topnav() {
 
 return (
    <header className="bg-white shadow-md sticky top-0 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Vrado Ai</h1>
      <div className="space-x-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-lg"
        />
        <User className="text-gray-600" />
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Logout
        </button>
        
      </div>
    </header>
 )
}