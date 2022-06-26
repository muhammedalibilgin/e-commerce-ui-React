import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import productsApi from "../api/productsApi";
import ProductContext from "../context/ProductContext";

const ProductDetails = () => {
    // const { product, setProduct } = useContext(ProductContext);
    const { product, setProduct } = useContext(ProductContext);

    const { id } = useParams();

    const productId = parseInt(id) + 1;

    useEffect(() => {
        // console.log(
        //     "thiss",
        //     productsApi.find((el) => el.id === productId)
        // );

        setProduct(productsApi.find((el) => el.id === productId));
    }, [productId]);

    // console.log("product", product);

    return (
        <div className="mb-5" style={{ backgroundColor: "gray", height: "100vh" }}>
            ProductDetails
            <h3>ID: {` ${parseInt(id) + 1}`} </h3>
            <hr />
            <h3>{product.name}</h3>
            <img style={{ maxWidth: "250px", maxHeight: "250px" }} src={product.imageURL} alt="product" />
            <hr />
            <Link to={"/"}>back</Link>
        </div>
    );
};

export default ProductDetails;
