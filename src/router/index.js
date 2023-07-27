import {
  createBrowserRouter,
} from "react-router-dom";

// layouts
import App from "../App";

// pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Calculator from "../pages/Calculator";
import Temperature from "../pages/Temperature";
import DynamicApi from "../pages/DynamicApi";
import Mahasiswa from "../pages/Mahasiswa";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/calculator',
        element: <Calculator />
      },
      {
        path: '/temperature',
        element: <Temperature />
      },
      {
        path: '/dynamic-api',
        element: <DynamicApi />
      },
      {
        path: '/mahasiswa',
        element: <Mahasiswa />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router
