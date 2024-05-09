import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../mainLayout/MainlayOut";
import Home from "../pages/Home";
import NeedVolunter from "../pages/NeedVolunter";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/need",
        element: <NeedVolunter />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
