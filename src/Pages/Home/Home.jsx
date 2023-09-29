import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Header/Banner/Banner";
import DonationCard from "../../Component/DonationCard/DonationCard";


const Home = () => {

    const donationsData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-3xl font-bold text-center mt-2">All Donations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5">
                {
                    donationsData.map((donation, idx) => <DonationCard
                        key={idx}
                        donation={donation}
                    ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;