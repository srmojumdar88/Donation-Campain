import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div className="nav ">
            <nav className=" flex flex-col md:flex-row justify-between items-center px-10 py-4 ">
                <Logo></Logo>
                <ul className="flex flex-col md:flex-row gap-4 ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : " "
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : " "
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : " "
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;