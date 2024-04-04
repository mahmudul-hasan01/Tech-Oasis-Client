import { NavLink, Outlet } from "react-router-dom";
import { FaBookBookmark, FaCartShopping, FaEnvelope, FaUsers, FaUtensils } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";

const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="flex">
        <div className="w-64 drawer-overlay min-h-screen border-2">
            <ul className="menu space-y-5 mt-6">
                {
                    isAdmin ?
                        <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaList /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageBooking'><FaBookBookmark /> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/cart'><FaCartShopping /> My Cart </NavLink></li>
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
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;