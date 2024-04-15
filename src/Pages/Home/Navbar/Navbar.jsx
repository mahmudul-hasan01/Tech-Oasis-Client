import { navLink } from "./NavLink";
import image from '../../../assets/image/Phone/EoY-2022-Best-Phones-on-leather.jpg'
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {

    const { user, logOut } = useAuth()
    return (
        <div>
            <div className="navbar bg-white fixed z-50 max-w-screen-xl">
                <div className="navbar-start">
                    <p className="text-2xl font-semibold"><span className="text-4xl  font-bold">T</span>ech Oasis</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-5 items-center menu-horizontal font-semibold px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu gap-5 -right-10 font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    {/* dropdown */}
                    <div className="dropdown dropdown-bottom dropdown-end ">
                       {
                        user?.photoURL ? <img className=" w-12 h-12 rounded-full cursor-pointer" tabIndex={0} role="button" src={user?.photoURL} alt="" /> : <CgProfile tabIndex={0} role="button" className="text-5xl cursor-pointer" /> 
                       }
                        {/* <div  className="btn m-1">Click</div> */}
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ?
                                    <>
                                        <Link
                                            to='/dashboard'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Dashoard
                                        </Link>
                                        <p onClick={() => logOut()} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Logout
                                        </p>
                                    </>
                                    :
                                    <>
                                        <Link
                                            to='/login'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/signup'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;