import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import RootLayout from "./layout/Layout";
import Home from "./pages/Home";
import Form from "./components/Form";
import Menu from "./pages/Menu";





function App() {

 

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/navbar",
          element: <Navbar />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
