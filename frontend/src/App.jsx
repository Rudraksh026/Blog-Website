import "./App.css"
import { Home } from "./components/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from "./UI/Layout"
import { Blog } from "./components/Blog"
import { DetailBlog } from "./components/DetailBlog"
function App () {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blog />,
        },
        {
          path: "/detail",
          element: <DetailBlog />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App