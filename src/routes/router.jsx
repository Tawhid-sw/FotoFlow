import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Search from "../pages/Searched";
import Explore from "../pages/Explore";
import Favorits from "../pages/Favorits";
import Collections from "../pages/Collections";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/favorit",
        element: <Favorits />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
