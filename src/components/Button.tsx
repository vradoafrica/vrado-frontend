export default function Button({ children,handleClick,...props}:{children:any,handleClick:any}){
    return( 
        <button
          {...props}
          onClick={handleClick}
          className="rounded-xl px-6 py-3 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 transition-all shadow-md"
        >
          {children}
        </button>
      )
}