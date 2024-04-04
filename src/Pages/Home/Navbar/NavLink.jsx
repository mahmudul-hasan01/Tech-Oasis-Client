import { NavLink } from "react-router-dom";

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
        </>
