"use client"
import { useState } from 'react'
// import SiginWithGoogle from "@/components/signinWithGoogle";

// const handleSubmit = async (email,password) => {
   
//     const res = await fetch('/api/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ password, email }),
//     });

    
//   };


  export default function SignupPage() {

  // const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [response, setResponse] = useState<string | null>(null);

 
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
          <form className="space-y-4" >
            {/* <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" value={email}/> */}
            <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {/* <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} /> */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Sign Up
            </button >
           {/* <SiginWithGoogle /> */}
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </div>
      </div>
    );
  }