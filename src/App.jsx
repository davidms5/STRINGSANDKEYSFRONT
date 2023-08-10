import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";



const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/products",
    element: <Products />,
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
