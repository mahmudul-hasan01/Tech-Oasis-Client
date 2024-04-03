import { NavLink } from "react-router-dom";
import Phone from "../../../Components/Phone/Phone";

export const navLink =  <>
            <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "underline" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/shop"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "underline" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >
                Shop Now
            </NavLink>
            <NavLink
                to="/upcoming"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "underline" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >
                Upcoming
            </NavLink>
            <NavLink
                to="/phone"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "underline" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >
               Phone
            </NavLink>
            <NavLink
                to="/addPhone"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "underline" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >
                Add Phone
            </NavLink>
            {/* <Phone></Phone> */}
        </>
