
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import CheckOut from "../Pages/checkOUt/checkOut";


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
        element:<CheckOut></CheckOut>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
 
]);


export default router;