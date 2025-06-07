import { redirect } from "next/navigation";


export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Vrado</h1>
          <p className="text-lg mb-6 text-gray-300">Be the first to experience what’s coming. Join our waiting list.</p>
          
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg text-white-900 border-white border"
              required
            />
            <button
              type="submit"
              className="bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Join Waiting List
            </button>
          </form>
        </div>
      </div>
    );
  }
  