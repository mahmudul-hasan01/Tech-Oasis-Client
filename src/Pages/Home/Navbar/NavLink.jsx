import { Link, NavLink } from "react-router-dom";

export const navLink = <>
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
        Phones
    </NavLink>

    <NavLink
        to="/upComingItem"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        UpComing Items
    </NavLink>
</>
