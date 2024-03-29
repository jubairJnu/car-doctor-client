
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import CheckOut from "../Pages/checkOUt/checkOut";
import Bookings from "../Pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:'checkout/:id',
        element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'book',
        element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
 
]);


export default router;