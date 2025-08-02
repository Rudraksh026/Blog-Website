import { NavLink } from "react-router";

export const SignUp = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-600 to-blue-500 min-h-screen flex items-center justify-center">
        {/* Signup Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form action="#" method="POST" className="space-y-5">
            {/* Name */}
            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Terms Checkbox */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600"
                required
              />
              <label for="terms" className="ml-2 text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="text-center my-6 text-gray-500 text-sm">or</div>

          {/* Login CTA */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <NavLink
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
