import { NavLink } from "react-router"
export const BlogCart = () => {
    return (
        <>
            <div className="bg-white border rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://source.unsplash.com/600x400/?code"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Async Await in JavaScript
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Simplify asynchronous code and learn how async/await makes your
                code cleaner.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>🗓️ Jul 31, 2025</span>
                <NavLink to="/detail" className="text-indigo-600 hover:underline">
                  Read more →
                </NavLink>
              </div>
            </div>
          </div>
        </>
    )
}