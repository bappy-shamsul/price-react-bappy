import Priceoption from "../Priceoption/Priceoption";


const Priceoptions = () => {
   const priceOptions = [
        {
          "id": 1,
          "price": 199.99,
          "name": "Samsung S29",
          "features": ["4K display", "Bluetooth connectivity", "HDMI port", "Remote control"]
        },
        {
          "id": 2,
          "price": 299.99,
          "name": "Samsung A29",
          "features": ["8K display", "Bluetooth 5.0", "3 HDMI ports", "Voice control", "Wi-Fi support"]
        },
        {
          "id": 3,
          "price": 149.99,
          "name": "Samsung SW29",
          "features": ["1080p display", "USB port", "Standard remote", "Wall mount included"]
        },
        {
          "id": 4,
          "price": 249.99,
          "name": "Samsung JS29",
          "features": ["QLED display", "Smart assistant", "HDR10+", "Dolby Atmos"]
        },
        {
          "id": 5,
          "price": 399.99,
          "name": "Samsung A33",
          "features": ["OLED display", "Dolby Vision", "Wi-Fi 6", "Gaming mode", "Slim design"]
        },
        {
          "id": 6,
          "price": 599.99,
          "name": "Samsung S24",
          "features": ["Bluetooth", "OLED display", "Dolby Vision", "Wi-Fi 6", "Gaming mode", "Slim design"]
        }
      ]
      
    return (
        <div className="text-center m-10">
            <h2 className="text-5xl">Best Prices in Dhaka</h2>
            <div className="grid grid-cols-3 gap-4">
            {
                priceOptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
            </div>
        </div>
    );
};

export default Priceoptions;