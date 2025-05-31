import Image from "next/image";
import google from "../../images/google-icon.svg"
export default function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Sign In
            </button>
            <div className="text-center text-sm mt-2">
              <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </form>
          <div className="mt-6 border-t pt-4">
            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded">
                <Image src={google} alt="Google" className="h-5 w-5" />
             
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
  
