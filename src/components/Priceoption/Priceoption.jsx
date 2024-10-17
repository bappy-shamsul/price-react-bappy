import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const Priceoption = ({ option }) => {
    const { name, id, price, features } = option
    return (
        <div className="flex flex-col bg-orange-200 rounded-xl text-violet-950 p-4">
            <h1 className="text-2xl">Name: {name}</h1>
            <h3>Id: {id}</h3>
            <h2>
                <span className="text-2xl">{price}</span>
                <span className="text-xl">/month</span>
            </h2>
            {/* <h4>Features: <li>{features}</li></h4> */}
            <div className="p-8 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                <button className="hover:bg-lime-950 w-full py-2 font-bold bg-green-700 text-white rounded-lg my-8">Buy Now</button>
            </div>
        </div>
    );
};

Priceoption.propTypes = {
    option: PropTypes.object
}

export default Priceoption;