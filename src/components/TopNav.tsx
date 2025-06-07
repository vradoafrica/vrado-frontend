"use client"
import { User } from "lucide-react"
import { useSession,signOut} from "next-auth/react"
import Image from "next/image"


export default function Topnav() {
  const {data} = useSession()
 console.log(data?.user)
  
 function Profile(){
  
  switch(Boolean(data?.user?.image)){
    case true:return <Image  className='rounded-full' src={data?.user?.image} height={100} width={100} alt="profile-pics"/>;
    break;
    default:return <User className="text-gray-600" />;
   }
  
 }

 
 
 return (
    <header className="hidden bg-white shadow-md sticky top-0 p-4 md:flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Vrado Ai</h1>
      <div className="space-x-4 flex items-center">
      
      <div className="w-10 h-10 flex items-center justify-center">
        {Profile()}
      </div>


       {data?.accessToken?(<button onClick={signOut} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Logout
        </button>):<></>}
      
        
      </div>
    </header>
 )
}