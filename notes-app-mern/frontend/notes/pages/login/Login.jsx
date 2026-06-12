function Login() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
              N
            </div>

            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

            <p className="text-slate-500 mt-2">Sign in to access your notes</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
              />
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition">
              Login
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?
            <span className="text-indigo-600 font-medium cursor-pointer ml-1">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
