import { BarChart as BChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

const BarChart = () => {
    const sales_data = [
        { "id": 1, "year": 2014, "samsung_sale": 500, "apple_sale": 300, "xiaomi_sale": 200 },
        { "id": 2, "year": 2015, "samsung_sale": 550, "apple_sale": 320, "xiaomi_sale": 250 },
        { "id": 3, "year": 2016, "samsung_sale": 620, "apple_sale": 400, "xiaomi_sale": 300 },
        { "id": 4, "year": 2017, "samsung_sale": 700, "apple_sale": 450, "xiaomi_sale": 350 },
        { "id": 5, "year": 2018, "samsung_sale": 750, "apple_sale": 500, "xiaomi_sale": 400 },
        { "id": 6, "year": 2019, "samsung_sale": 820, "apple_sale": 550, "xiaomi_sale": 500 },
        { "id": 7, "year": 2020, "samsung_sale": 780, "apple_sale": 1600, "xiaomi_sale": 550 },
        { "id": 8, "year": 2021, "samsung_sale": 900, "apple_sale": 700, "xiaomi_sale": 650 },
        { "id": 9, "year": 2022, "samsung_sale": 950, "apple_sale": 750, "xiaomi_sale": 700 },
        { "id": 10, "year": 2023, "samsung_sale": 1000, "apple_sale": 800, "xiaomi_sale": 250 }
    ]

    return (
        <div className='m-2'>
            <BChart width={600} height={300} data={sales_data}>
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="samsung_sale" barSize={30} fill="#8884d8"/>
                <Bar dataKey="apple_sale" barSize={30} fill="green"/>
                <Bar dataKey="xiaomi_sale" barSize={30} fill="red"/>
                
            </BChart>
        </div>
    );
};

export default BarChart;