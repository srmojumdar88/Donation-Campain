import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';



const Statistics = () => {

    const [total, setTotal] = useState(0);
    const [donation, setDonation] = useState(0);

    const data = useLoaderData()

    useEffect(() => {
        const dataOfLocalStorage = JSON.parse(localStorage.getItem("donation"))

        console.log(dataOfLocalStorage)

        if (dataOfLocalStorage == null) {
            setDonation(0)
        }
        else{
            let donation = 0;

            dataOfLocalStorage.map(data => {
                donation = donation + parseFloat(data.price)
            })
            setDonation(donation)
        }


        let total = 0;
        data.map(donation => {
            total = total + parseFloat(donation.price)
        })
        setTotal(total)

    }, [data])

   

    const CharData = [
        { name: "Total Donation", value: total , color: "red" },
        { name: "Your Donation", value: donation, color: "blue" }
    ];

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <PieChart width={600} height={500}>
                <Pie 
                dataKey="value" 
                data={CharData}
                label
                >
                    {CharData.map((entry, idx) => (
                        <Cell key={idx} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Statistics;