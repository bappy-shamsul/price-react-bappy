import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    // const sales_data = [
    //     {"id": 1, "year": 2014, "sale": 500},
    //     {"id": 2, "year": 2015, "sale": 550},
    //     {"id": 3, "year": 2016, "sale": 620},
    //     {"id": 4, "year": 2017, "sale": 700},
    //     {"id": 5, "year": 2018, "sale": 750},
    //     {"id": 6, "year": 2019, "sale": 820},
    //     {"id": 7, "year": 2020, "sale": 780},
    //     {"id": 8, "year": 2021, "sale": 600},
    //     {"id": 9, "year": 2022, "sale": 950},
    //     {"id": 10, "year": 2023, "sale": 1000},
    //     {"id": 11, "year": 2024, "sale": 400},
    //     {"id": 12, "year": 2025, "sale": 950},
    //     {"id": 13, "year": 2026, "sale": 1000}
    // ]
    
    const sales_data = [
        {"id": 1, "year": 2014, "samsung_sale": 500, "apple_sale": 300, "xiaomi_sale": 200},
        {"id": 2, "year": 2015, "samsung_sale": 550, "apple_sale": 320, "xiaomi_sale": 250},
        {"id": 3, "year": 2016, "samsung_sale": 620, "apple_sale": 400, "xiaomi_sale": 300},
        {"id": 4, "year": 2017, "samsung_sale": 700, "apple_sale": 450, "xiaomi_sale": 350},
        {"id": 5, "year": 2018, "samsung_sale": 750, "apple_sale": 500, "xiaomi_sale": 400},
        {"id": 6, "year": 2019, "samsung_sale": 820, "apple_sale": 550, "xiaomi_sale": 500},
        {"id": 7, "year": 2020, "samsung_sale": 780, "apple_sale": 600, "xiaomi_sale": 550},
        {"id": 8, "year": 2021, "samsung_sale": 900, "apple_sale": 700, "xiaomi_sale": 650},
        {"id": 9, "year": 2022, "samsung_sale": 950, "apple_sale": 750, "xiaomi_sale": 700},
        {"id": 10, "year": 2023, "samsung_sale": 1000, "apple_sale": 800, "xiaomi_sale": 750}
    ]
    
    return (
        // <div className='m-36'>
        //     <LChart width={600} height={300} data={sales_data}>
        //     <Line type="monotone" dataKey="sale" stroke="#8884d8" />
        //     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        //     <XAxis dataKey="year" />
        //     <YAxis dataKey="sale" />
        //     </LChart>
        // </div>
        <div className='m-36'>
            <LChart width={600} height={400} data={sales_data}>
            <Line type="monotone" dataKey="samsung_sale" stroke="blue" />
            <Line type="monotone" dataKey="apple_sale" stroke="red" />
            <Line type="monotone" dataKey="xiaomi_sale" stroke="green" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis dataKey="sale" />
            </LChart>
        </div>
    );
};

export default LineChart;