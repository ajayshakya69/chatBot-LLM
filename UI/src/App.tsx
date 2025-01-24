

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ChatBotInter from './pages/ChatBotInter';

function App() {




  const router = createBrowserRouter([
    {
      path: "/auth/signup",
      element: <Signup />
    },
    {
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/",
      element: <ChatBotInter />
    }
  ])



  return (
    <RouterProvider router={router} />
  )
}

export default App
