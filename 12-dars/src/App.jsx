import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Card2 from './pages/Card2'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useEffect } from 'react'
import ProtectedRotues from './components/ProtectedRoutes'
import { useGlobalContext } from './hooks/useGlobalContext'
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth"
import Create from './pages/Create'

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext()
  const roots = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRotues user={user}>
          <MainLayout />
        </ProtectedRotues>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'card2',
          element: <Card2 />,
        },
        {
          path: 'create',
          element: <Create />,
        },
      
      ],
    },
    {
      path: 'login',
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: 'signup',
      element: <>{user ?  <Navigate to="/" /> : <Signup />}</>,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'LOGIN', payload: user })
      dispatch({type: 'IS_AUTH_CHANGE'})
    })
  }, [])
  return <>{isAuthChange && <RouterProvider router={roots} />}</>
}

export default App
