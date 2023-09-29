import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";



const DonationDetails= () => {

    const {id} = useParams()

    const data =  useLoaderData()

    const findedData = data.find(donation => donation.id == id)


    return (
        <div>
            <ShowDetails findedData={findedData}></ShowDetails>
        </div>
    );
};

export default DonationDetails;