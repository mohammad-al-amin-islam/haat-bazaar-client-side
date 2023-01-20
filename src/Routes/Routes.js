import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import DisplayError from "../Pages/Shared/DisplayError";
import Login from "../Pages/Home/Login";
import AllCategories from "../Pages/ProductCategory/AllCategories/AllCategories";
import Eggs from "../Pages/ProductCategory/Eggs/Eggs";
import FreshFruits from "../Pages/ProductCategory/FreshFruits/FreshFruits";
import Fish from "../Pages/ProductCategory/Fish/Fish";
import CookingItem from "../Pages/ProductCategory/CookingItem/CookingItem";

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
        path: "/allCategories",
        element: <AllCategories />,
      },
      {
        path: "/eggs",
        element: <Eggs />,
      },
      {
        path: "/freshFruits",
        element: <FreshFruits />,
      },
      {
        path: "/fish",
        element: <Fish />,
      },
      {
        path: "/cookingItems",
        element: <CookingItem />,
      },
    ],
  },
]);

export default router;
