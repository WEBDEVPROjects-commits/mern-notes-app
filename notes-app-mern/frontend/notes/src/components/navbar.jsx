function Navbar(){
    return (
            <>
            <nav className="w-full bg-white border-b border-slate-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
        N
      </div>
      <h1 className="text-2xl font-bold text-slate-900">
        Notes
      </h1>
    </div>

    {/* Search Bar */}
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        />
      </div>
    </div>

    {/* User Section */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
            />
          </svg>
        </div>

        <div>
          <p className="text-sm text-slate-500">Welcome</p>
          <p className="font-semibold text-slate-900">
            John Doe
          </p>
        </div>
      </div>

      <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition">
        Logout
      </button>
    </div>
  </div>
</nav>
            </>
    )


}
export default Navbar