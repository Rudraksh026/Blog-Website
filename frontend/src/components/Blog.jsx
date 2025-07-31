import { BlogCart } from "./BlogCart";
export const Blog = () => {
  return (
    <>
      {/* <!-- Search + Categories --> */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* <!-- Search --> */}
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* <!-- Category Filter --> */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              All
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
              JavaScript
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
              React
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
              Career
            </button>
          </div>
        </div>

        {/* <!-- Blog Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Blog Card --> */}
          <BlogCart />
          <BlogCart />
          <BlogCart />
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            « Prev
          </button>
          <button className="px-4 py-2 rounded bg-indigo-600 text-white">1</button>
          <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            3
          </button>
          <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            Next »
          </button>
        </div>
      </section>
    </>
  );
};
