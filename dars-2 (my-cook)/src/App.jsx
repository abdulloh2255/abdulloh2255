import {createBrowserRouter, RouterProvider} from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home  from "./pages/Home"
import Logout from './pages/Logout'



function App() {
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
       index: true,
        element: <Home/>
      },
      {
        path: 'logout',
        element: <Logout/>
      },
   
    ]
  },
 
])
return <RouterProvider router={routes} />
}

export default App
