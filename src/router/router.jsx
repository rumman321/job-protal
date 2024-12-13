import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";




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
            element:<JobDetails></JobDetails>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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