import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import AddPhone from "../Dashboard/AddPhone/AddPhone";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        
        {
            path: '/addPhone',
            element: <AddPhone></AddPhone>
        },
      ]
    },
    { path : '/login' , element : <Login></Login>},
    { path : '/signUp' , element : <SignUp></SignUp>},
  ]);