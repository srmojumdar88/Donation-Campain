import { useEffect, useState } from "react";
import ShowDonation from "./ShowDonation";

const Donations = () => {

    const [getdonations, setGetDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");
    const [seeAll, setSeeAll] = useState(false)

    console.log(getdonations.length)

    useEffect(()=>{
        const dataOfLocalStorage = JSON.parse(localStorage.getItem("donation"))

        if (!dataOfLocalStorage) {
             setNoDataFound("No data found")
        }
        else {
            setGetDonation(dataOfLocalStorage)
        }
    },[])


    return (
        <div>
            {
                noDataFound? <div className="h-[80vh] flex justify-center items-center text-xl">{noDataFound}</div>
                :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
                        {
                            seeAll ? getdonations.map((donation, idx) => <ShowDonation
                                key={idx}
                                donation={donation}
                            ></ShowDonation>) 
                            :
                            getdonations.slice(0, 4).map((donation, idx) => <ShowDonation
                                key={idx}
                                donation={donation}
                            ></ShowDonation>) 
                        }
                    </div>

                    <div className="flex justify-center">
                        {
                            getdonations.length > 4 && <button 
                                onClick={() => setSeeAll(!seeAll)} 
                                className="rounded-sm py-2 px-4 my-4 text-center text-sm font-bold bg-purple-600 text-white active:bg-purple-400"
                            >
                                {seeAll? "Show less" : "See all"}
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donations;