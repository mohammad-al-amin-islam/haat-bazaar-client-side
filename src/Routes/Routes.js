import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import DisplayError from "../Pages/Shared/DisplayError";
import Login from "../Pages/Home/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <DisplayError />,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
