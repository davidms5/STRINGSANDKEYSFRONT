import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./views/Home";
import Detail from './views/Detail';
import CreateProduct from "./views/CreateProductoFolder/CreateProduct";
import Products from "./views/Products";
import EditProduct from "./views/EditProducts";



const router = createHashRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:'/detail/:id',
    element: <Detail/>,
  },
  {
    path:"/admin/crear-producto",
    element: <CreateProduct/>,
  },
  {
    path:"/admin/edit",
    element: <EditProduct/>,
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
