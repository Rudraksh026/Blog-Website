import { NavLink } from "react-router"
export const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-600 to-blue-500 min-h-screen flex items-center justify-center">
        {/* <!-- Login Card --> */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form action="#" method="POST" className="space-y-5">
            {/* <!-- Email --> */}
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* <!-- Password --> */}
            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {/* <!-- Options --> */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                {/* <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span>Remember me</span> */}
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </form>

          {/* <!-- Divider --> */}
          <div className="text-center my-6 text-gray-500 text-sm">or</div>

          {/* <!-- Register CTA --> */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <NavLink
              to="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
