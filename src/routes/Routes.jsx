import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../mainLayout/MainlayOut";
import Home from "../pages/Home";
import NeedVolunter from "../pages/NeedVolunter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVholenteerPost from "../pages/AddVholenteerPost";
import ManagementPost from "../pages/ManagementPost";
import RequestPost from "../pages/RequestPost";

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
        path: "/addPost",
        element: <AddVholenteerPost />,
      },
      {
        path: "/managePost",
        element: <ManagementPost />,
      },
      {
        path: "/requestPost",
        element: <RequestPost />,
      },
    ],
  },
]);

export default router;
