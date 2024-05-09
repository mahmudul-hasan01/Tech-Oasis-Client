import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaUsers, } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import useRole from "../Hooks/useRole";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";

const Dashboard = () => {

    const { isAdmin, isLoading } = useRole()

    const [open, setOpen] = useState(false)
    // const handleOpen = () => {
    //     setOpen(true)
    // }

    return (
        <div className="flex items-start relative">

            {
                open &&
                <div className="w-64 absolute drawer-overlay bg-white z-50 min-h-screen border-2">
                    <ul className="menu space-y-5 mt-6">
                        {
                            isAdmin === 'admin' ?
                                <>
                                    <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/addPhone'><MdOutlinePhoneAndroid /> Add Item</NavLink></li>
                                    <li><NavLink to='/dashboard/managePhone'><FaList /> Manage Item</NavLink></li>
                                    <li><NavLink to='/dashboard/upComing'><MdOutlinePendingActions /> Up Coming Item</NavLink></li>
                                    <li><NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/paymentHistory'><FaCalendar /> Payment History</NavLink></li>
                                    <li><NavLink to='/dashboard/review'><FaAddressCard /> Review</NavLink></li>
                                    <li><NavLink to='/dashboard/booking'><FaList /> My Booking</NavLink></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/shop'><FaSearch /> Shop Now</NavLink></li>
                        <li><NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
                    </ul>
                </div>
            }
            {
                open ||   <div className="w-64 hidden lg:block drawer-overlay bg-white z-50 min-h-screen border-2">
                <ul className="menu space-y-5 mt-6">
                    {
                        isAdmin === 'admin' ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addPhone'><MdOutlinePhoneAndroid /> Add Item</NavLink></li>
                                <li><NavLink to='/dashboard/managePhone'><FaList /> Manage Item</NavLink></li>
                                <li><NavLink to='/dashboard/upComing'><MdOutlinePendingActions /> Up Coming Item</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaCalendar /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaAddressCard /> Review</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaList /> My Booking</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/shop'><FaSearch /> Shop Now</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            }
            <div className="lg:flex-1 p-8">
                <Outlet></Outlet>
            </div>
            <button className="mr-10 lg:hidden mt-10 btn" onClick={() => setOpen(!open)}><FaAlignRight /></button>
        </div>
    );
};

export default Dashboard;