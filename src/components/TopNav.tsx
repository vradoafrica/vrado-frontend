"use client"
import { User } from "lucide-react"
import Cookies from "js-cookie"
import Button from "./Button";
import copyToClipboard from "@/features/dashboard/utils/copyToClipboard";
// import { useRouter } from "next/router";


export default function Topnav({business}:any) {
  // const router = useRouter()
  const token = Cookies.get("token");

  
 function logout(){
  Cookies.remove("token")
  window.location.replace("/dashboard");
 }

 function copyLink(){
   const copied:any = copyToClipboard(business.name)
console.log(copied)
   if(copied?.success){
    alert("Copied")
   }else{
    alert("Unable TO copy")
   }
 }
 
 console.log(business)

 return (
    <header className="hidden bg-white shadow-md sticky top-0 p-4  md:flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Vrado Ai</h1>
      <div className="space-x-4 flex items-center">
        <p onClick={copyLink} className="text-blue-700 underline cursor-pointer">
          Copy Link

        </p>
      
        {business.name}
      <div className="w-10 h-10 flex items-center justify-center">
      <User className="text-gray-600" />
      </div>


       {token?(<Button handleClick={logout}>
          Logout
        </Button>):<></>}
      
        
      </div>
    </header>
 )
}