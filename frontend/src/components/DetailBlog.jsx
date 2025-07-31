import { useNavigate } from "react-router"
export const DetailBlog = () => {
    const navigate = useNavigate()
    const backPreviousPage = () => {
        navigate(-1)
    }
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button onClick={backPreviousPage} className="text-indigo-600 hover:underline">
          &larr; Back to all blogs
        </button>
      </div>

      {/* <!-- Blog Hero --> */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h1 className="text-4xl font-bold mb-4">
          Mastering Async/Await in JavaScript
        </h1>
        <div className="text-gray-500 text-sm mb-6">
          🗓️ July 31, 2025 · ✍️ By Rudraksh · 🏷️{" "}
          <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
            JavaScript
          </span>
        </div>
        <img
          src="https://source.unsplash.com/1200x500/?javascript,code"
          alt="Blog banner"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </section>

      {/* <!-- Blog Content --> */}
      <section className="max-w-4xl mx-auto px-4 pb-20 leading-relaxed text-lg text-gray-800 space-y-6">
        <p>
          In modern web development, asynchronous programming is a must. With
          the introduction of `async` and `await`, JavaScript made it
          significantly easier to handle asynchronous logic in a more readable,
          linear style.
        </p>

        <p>Here's a basic example of how it works:</p>

        <p>
          This is far cleaner than using `.then()` and `.catch()` chaining.
          Additionally, it allows for easier debugging and better integration
          with `try/catch` blocks for error handling.
        </p>

        <p>
          Async/await is especially powerful when used inside `for` loops or
          when you need to wait sequentially on asynchronous actions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Benefits of Async/Await</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Improved readability</li>
          <li>Cleaner error handling with try/catch</li>
          <li>Works well with APIs and data fetching</li>
        </ul>

        <p>
          Async/await isn't a replacement for Promises — it's built on top of
          them. But it changes how we write asynchronous code and helps avoid
          "callback hell".
        </p>

        <p>Happy coding! 🚀</p>
      </section>

      {/* <!-- Author Box --> */}
      <section className="max-w-4xl mx-auto px-4 pb-10 border-t pt-6 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <img
            src="https://source.unsplash.com/50x50/?portrait"
            className="w-12 h-12 rounded-full"
            alt="Author"
          />
          <div>
            <p className="font-semibold">Rudraksh</p>
            <p>Frontend Developer • Blogger • Tech Enthusiast</p>
          </div>
        </div>
      </section>
    </>
  );
};
