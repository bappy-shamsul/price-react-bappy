import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Audio } from 'react-loader-spinner';
;


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
            .then(data => {
                const phoneData = data.data.data;
                const phoneFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneFakeData)
                setPhones(phoneFakeData)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {/* <marque><h2 className="bg-green-950 text-white my-7 mx-8 font-bold text-center text-3xl">Total Phones: {phones.length}</h2></marque> */}
            <h2 className="bg-green-950 text-white my-7 mx-8 font-bold text-center text-3xl">Total Phones: {phones.length}</h2>

           {
            loading && <div className="text-center">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />

        </div>
           }

            <BarChart
                width={1500}
                height={300}
                data={phones}


                barSize={60}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>

        </div>
    );
};

export default Phones;