import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/ShowDetails/DonationDetails";
import Chart from "../Pages/Statistics/PieChart";




const CreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=>fetch("/data.json")
            },
            {
                path:"/donation",
                element: <Donations></Donations>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/:id",
                element:<DonationDetails></DonationDetails>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/Chart",
                element: <Chart></Chart>
            }
        ]
    }
]);


export default CreatedRoute;