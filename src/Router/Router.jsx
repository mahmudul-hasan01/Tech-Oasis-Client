import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import AddPhone from "../Dashboard/Admin/AddPhone";
import FeaturedAllCart from "../Pages/Home/FeaturedCategories/FeaturedAllCart";
import UpdateItem from "../Dashboard/Admin/UpdateItem";
import Dashboard from "../Dashboard/Dashboard";
import AllUsers from "../Dashboard/Admin/AllUsers";
import ManagePhone from "../Dashboard/Admin/ManagePhone";
import AdminHome from "../Dashboard/Admin/AdminHome";


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
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addPhone',
                element: <AddPhone></AddPhone>
            },
            {
                path: 'managePhone',
                element: <ManagePhone></ManagePhone>
            },
        ]
    },

    { path : '/login' , element : <Login></Login>},
    { path : '/signUp' , element : <SignUp></SignUp>},

  ]);