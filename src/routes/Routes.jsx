import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../mainLayout/MainlayOut";
import Home from "../pages/Home";
import NeedVolunter from "../pages/NeedVolunter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVholenteerPost from "../pages/AddVholenteerPost";
import ManagementPost from "../pages/ManagementPost";
import RequestPost from "../pages/RequestPost";
import PriviteRoute from "../privete/PriviteRoute";
import NotFoundPage from "../pages/NotFoundPage";
import VeiwDetailsVolunteer from "../components/VeiwDetailsVolunteer";
import BeVolunteer from "../components/BeVolunteer";
import Update from "../pages/Update";
import Copyright from "../pages/Copyright";
import OwnReport from "../components/OwnReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/need",
        element: <NeedVolunter />,
        loader: () => fetch(`${import.meta.env.VITE_URL_SERVER}/allpost`),
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
        element: (
          <PriviteRoute>
            <AddVholenteerPost />
          </PriviteRoute>
        ),
      },
      {
        path: "/managePost",
        element: (
          <PriviteRoute>
            <ManagementPost />
          </PriviteRoute>
        ),
      },
      {
        path: "/requestPost",
        element: (
          <PriviteRoute>
            <RequestPost />
          </PriviteRoute>
        ),
      },
      {
        path: "/volunteerDetails/:id",
        element: (
          <PriviteRoute>
            <VeiwDetailsVolunteer />
          </PriviteRoute>
        ),
      },
      {
        path: "/bevolunteer/:id",
        element: (
          <PriviteRoute>
            <BeVolunteer />
          </PriviteRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PriviteRoute>
            <Update />
          </PriviteRoute>
        ),
      },
      {
        path: "/copyright",
        element: <Copyright />,
      },
      {
        path: "/ownreport",
        element: <OwnReport />,
      },
    ],
  },
]);

export default router;
