import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../context/ProductContext";

const ProductsInCart = () => {
    const { basket } = useContext(ProductContext);

    return (
        <div className="mb-5" style={{ backgroundColor: "gray", height: "80vh" }}>
            <div>
                {basket.map((x, i) => (
                    <div key={i}>
                        <h4>{x.name}</h4>
                        <hr />
                    </div>
                ))}
            </div>

            <Link to={"/"}>back</Link>
        </div>
    );
};

export default ProductsInCart;
