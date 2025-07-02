export default function Input({inputRefs,name, placeholder, type = 'text', value, onChange, error }:any){
    return (
            <div className="relative">
              <input
                name={name}
                className={`peer w-full px-4 pt-6 pb-2 rounded-xl border text-sm bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                placeholder=" "
                type={type}
                value={value || ''}
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                {placeholder}
              </label>
              {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
            </div>
    )
}