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
                to="/"
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
                to="/"
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
        </>
