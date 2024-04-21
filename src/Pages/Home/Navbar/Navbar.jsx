import { navLink } from "./NavLink";
import image from '../../../assets/image/Phone/EoY-2022-Best-Phones-on-leather.jpg'
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import useShopCart from "../../../Hooks/useShopCart";
import useRole from "../../../Hooks/useRole";



const Navbar = () => {

    const { user, logOut } = useAuth()
    const { shopingData } = useShopCart()
    const {isAdmin} = useRole()

    return (
        <div>
            <div className="navbar justify-between bg-white w-[425px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] max-w-screen-xl fixed z-50 ">
                <Link to={'/'} className="navbar-start">
                    <p className="text-2xl font-semibold"><span className="text-4xl  font-bold">T</span>ech Oasis</p>
                </Link>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-5 items-center menu-horizontal font-semibold px-1">
                        {navLink}
                        <Link to={'/dashboard/booking'} className="relative mx-auto hidden lg:block bg-white hover:bg-gray-200 p-2 rounded-md w-fit h-fit">
                            <svg width="40px" viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0284C7"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" /><g id="SVGRepo_iconCarrier"> <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#38BDF8" /> <path d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z" fill="#38BDF8" /> </g></svg>
                            <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-600 text-center text-[12px] text-white ">{shopingData?.length}</span>
                        </Link>
                    </ul>
                </div>
                <div className="">
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
                                            to='/profile'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Profile
                                        </Link>
                                        {   isAdmin ?
                                            <Link
                                                to='/dashboard/adminHome'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Dashoard
                                            </Link>
                                            :
                                            <Link
                                                to='/dashboard/userHome'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Dashoard
                                            </Link>
                                        }
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