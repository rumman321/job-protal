import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";




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
            path:"/jobs/:id",
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/jobapply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:"/myapplications",
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
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