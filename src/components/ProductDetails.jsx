import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import productsApi from "../api/productsApi";
import ProductContext from "../context/ProductContext";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const ProductDetails = () => {
    const { product, setProduct, count, setCount, basket, setBasket } = useContext(ProductContext);

    const { id } = useParams();

    const handleSubmit = () => {
        setCount(count + 1);
        setBasket([...basket, product]);
    };

    console.log("basket1", basket);

    useEffect(() => {
        setProduct(productsApi.find((el) => el.id === parseInt(id)));
    }, [id, setProduct]);

    // console.log("product", product);

    return (
        <MDBContainer id="productDetails" className="mb-5">
            <MDBRow className="">
                <MDBCol size="12" lg="4" id="firstCol">
                    <p>Product Details:</p>
                    <p>ID: {id} </p>
                    <p style={{ color: "red" }}> #{product?.category}</p>
                    <hr />
                    <img style={{ maxWidth: "300px", maxHeight: "300px" }} src={product?.imageURL} alt="product" />
                    <hr />
                </MDBCol>
                <MDBCol size="12" lg="4" id="secondCol">
                    <h3>{product?.name}</h3>
                </MDBCol>
                <MDBCol size="12" lg="4" id="thirdCol">
                    <p id="overview">{product?.overview} </p>
                    <MDBBtn className="mx-2" tag="a" onClick={() => handleSubmit()} color="success" size="lg" outline>
                        <MDBIcon fas icon="shopping-cart" /> Add to Cart
                    </MDBBtn>
                    <MDBBtn className="mx-2" tag="a" color="success" size="lg" outline>
                        Start Order Now
                    </MDBBtn>
                </MDBCol>
                <Link to={"/"}>back</Link>
            </MDBRow>
        </MDBContainer>
    );
};

export default ProductDetails;
