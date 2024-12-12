import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>

        }
      ]
    },
  ]);