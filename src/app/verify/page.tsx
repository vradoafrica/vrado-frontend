export default function VerifyCodePage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Enter Verification Code</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Enter the code sent to your email" className="w-full border px-4 py-2 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Verify Code
            </button>
          </form>
        </div>
      </div>
    );
  }
