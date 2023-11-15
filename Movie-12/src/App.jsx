import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Kino from "./pages/Kino";
import Kino2 from "./pages/Kino2";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "kino",
          element: <Kino />,
        },

        {
          path: "kino2",
          element: <Kino2 />,
        },
        {
          path: "signUp",
          element: <Signup/>,
        },
        {
          path:"login",
          element:<Login/>
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
