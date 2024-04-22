import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaEnvelope, FaUsers, } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlinePendingActions } from "react-icons/md";
import useRole from "../Hooks/useRole";

const Dashboard = () => {

    const {isAdmin, isLoading} = useRole()

    return (
        <div className="flex">
        <div className="w-64 drawer-overlay min-h-screen border-2">
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
        <div className="lg:flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;