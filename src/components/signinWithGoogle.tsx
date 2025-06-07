"use client"
import Image from "next/image"
import google from "../images/google-icon.svg"
import { signIn, signOut, useSession } from "next-auth/react";



export default function SiginWithGoogle(){
    const {data} = useSession()

    const signin = async function(event:any){
        event.preventDefault()
        console.log(data)
        if(data?.user?.email){
            console.log(data?.user?.email)      
        }else{
            await signIn("google", {
                callbackUrl: "/dashboard",
              });
        }


      }

    return (<div  onClick={(e)=>signin(e)} className="w-full flex items-center justify-center gap-2 border py-2 rounded ">
        <Image src={google} alt="Google" className="h-5 w-5" />
      Sign in with Google
    </div>)
    
}