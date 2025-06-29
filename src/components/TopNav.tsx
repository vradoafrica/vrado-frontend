"use client"
import { User } from "lucide-react"
import Cookies from "js-cookie"


export default function Topnav() {
  const token = Cookies.get("token");
  
 function logout(){
  Cookies.remove("token")
 }
 
 return (
    <header className="hidden bg-white shadow-md sticky top-0 p-4 md:flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Vrado Ai</h1>
      <div className="space-x-4 flex items-center">
      
      <div className="w-10 h-10 flex items-center justify-center">
      <User className="text-gray-600" />
      </div>


       {token?(<button onClick={logout} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Logout
        </button>):<></>}
      
        
      </div>
    </header>
 )
}