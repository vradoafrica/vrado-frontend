"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithEmail, verifyOtp } from "../services/api";
import Input from "@/components/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<any>(false);
  const token = Cookies.get('token')
  
  if(token){
    window.location.replace("/dashboard");
  }


  const isFormValid = otpSent ? email.includes("@") && otp.length === 6 : email.includes("@");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setBusy(true);
      if (otpSent) {
        const verify = await verifyOtp(email, otp);
        const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set("token", verify.data.token, { path: "/", expires: oneHourFromNow });
        window.location.replace("/dashboard");
      } else {
        const request = await signInWithEmail(email);
        setOtpSent(request.success);
      }
    } catch (err) {
      setError("Unale to Verify")
      console.log(err)
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Secure Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            
            <Input 
            name="Email Address" 
            placeholder="Email" 
            value={email} 
            onChange={(e:any) => 
            setEmail(e.target.value)} 
            error={error} />
            
           
          </div>

          <AnimatePresence>
            {otpSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e:any) => setOtp(e.target.value)}
                  error={error}
                  />
              </motion.div>
            )}
          </AnimatePresence>


          
          <button
            type="submit"
            disabled={busy || !isFormValid}
            className={`w-full py-3 text-white font-semibold rounded-xl transition-all shadow-lg ${
              busy || !isFormValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {busy ? "Processing..." : otpSent ? "Verify OTP" : "Send OTP"}
          </button>

          {/* <div className="text-center text-sm mt-4">
            <a href="/forgot-password" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div> */}
        </form>
      </motion.div>
    </div>
  );
}
