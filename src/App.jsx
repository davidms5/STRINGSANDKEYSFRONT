import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Detail from './views/Detail';
import CreateProduct from "./views/CreateProduct";


const router = createBrowserRouter([
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
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
