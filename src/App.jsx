import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Detail from './views/Detail';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:'/detail/:id',
    element: <Detail/>,
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
