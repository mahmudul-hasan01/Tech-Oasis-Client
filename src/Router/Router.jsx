import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import AddPhone from "../Dashboard/AddPhone/AddPhone";
import FeaturedAllCart from "../Pages/Home/FeaturedCategories/FeaturedAllCart";
import UpdateItem from "../Dashboard/Admin/UpdateItem";
import Dashboard from "../Dashboard/Dashboard";
import ManageItem from "../Dashboard/Admin/ManageItem";
import AllUsers from "../Dashboard/Admin/AllUsers";


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
            path: '/featured/:name',
            element: <FeaturedAllCart></FeaturedAllCart>
        },
        {
            path: '/addPhone',
            element: <AddPhone></AddPhone>
        },
        {
            path: '/update/:id',
            element: <UpdateItem></UpdateItem>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // Admin
            {
                path: 'manageItems',
                element: <ManageItem></ManageItem>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
        ]
    },

    { path : '/login' , element : <Login></Login>},
    { path : '/signUp' , element : <SignUp></SignUp>},

  ]);