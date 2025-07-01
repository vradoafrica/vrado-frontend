"use client"
import { useState } from "react";
import Cookies from "js-cookie"
// import SiginWithGoogle from "@/components/signinWithGoogle";
import { signInWithEmail, verifyOtp } from "../services/api";


export default function LoginPage() {
  
  const [email, setEmail] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [busy, setBusy] = useState(false)

  const isFormValid = (otpSent) ? email.includes('@') && otp.length === 6 : email.includes('@');


  async function handleSubmit(e: any) {

    try {
      setBusy(true)
    e.preventDefault()

    switch (otpSent) {
      case true:
        
        const verify = await verifyOtp(email,otp)
        const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);

        Cookies.set("token", verify.data.token, {
          path: "/",
          expires: oneHourFromNow,
        });
        setBusy(false)
        window.location.replace("/dashboard")
        break;

      default:
        const request = await signInWithEmail(email)
         console.log(request)
         setOtpSent(request.success)
         setBusy(false)
        break;
    }
    } catch (error) {
      setBusy(false)
      console.log(error)
    }
    
    

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-2 rounded" />
          {otpSent && (<input type="text" placeholder="Otp" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full border px-4 py-2 rounded" />)}
          {/* <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" /> */}
          <button
            disabled={busy}
            onClick={handleSubmit}
            className={`w-full py-2 rounded text-white transition 
            ${busy || !isFormValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
            `}
          >
            {busy ? 'Signing In...' : 'Sign In'}
          </button>


          {/* <SiginWithGoogle /> */}

          {/* <div className="mt-6 text-center text-sm">
            Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
          </div> */}
          <div className="text-center text-sm mt-2">
            <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
        </form>

      </div>
    </div>
  );
}

