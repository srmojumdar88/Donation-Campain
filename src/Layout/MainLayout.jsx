import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;