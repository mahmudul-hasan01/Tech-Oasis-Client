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
import UpComingItems from "../Pages/UpComingItems/UpComingItems";
import UpComing from "../Dashboard/Admin/UpComing";
import UpComingItemUpdate from "../Dashboard/Admin/UpComingItemUpdate";
import Profile from "../Pages/Profile/Profile";
import ShopDetails from "../Pages/Shop/ShopDetails";
import UserHome from "../Dashboard/User/UserHome";
import MyBooking from "../Dashboard/User/MyBooking";
import PaymentHistory from "../Dashboard/User/PaymentHistory";
import UpcomingDetails from "../Pages/UpComingItems/UpcomingDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


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
            path: '/shopDetails/:id',
            element: <ShopDetails></ShopDetails>
        },
        {
            path: '/upComingDetails/:id',
            element: <UpcomingDetails></UpcomingDetails>
        },
        {
            path: '/featured/:name',
            element: <FeaturedAllCart></FeaturedAllCart>
        },
        {
            path: '/update/:id',
            element: <UpdateItem></UpdateItem>
        },
        {
            path: '/updateUpComingItems/:id',
            element: <UpComingItemUpdate></UpComingItemUpdate>
        },
        {
            path: '/upComingItem',
            element: <UpComingItems></UpComingItems>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>  <Dashboard></Dashboard> </PrivateRoute>,
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
            {
                path: 'upComing',
                element: <UpComing></UpComing>
            },
            // User
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'booking',
                element: <MyBooking></MyBooking>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    },

    { path : '/login' , element : <Login></Login>},
    { path : '/signUp' , element : <SignUp></SignUp>},

  ]);