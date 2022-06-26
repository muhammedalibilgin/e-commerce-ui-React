import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import productsApi from "../api/productsApi";
import ProductContext from "../context/ProductContext";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const ProductDetails = () => {
    // const { product, setProduct } = useContext(ProductContext);
    const { product, setProduct, count, setCount } = useContext(ProductContext);

    const { id } = useParams();

    const productId = parseInt(id) + 1;

    const handleSubmit = () => {
        setCount(count + 1);
    };
    // console.log("count", count);

    useEffect(() => {
        // console.log(
        //     "thiss",
        //     productsApi.find((el) => el.id === productId)
        // );

        setProduct(productsApi.find((el) => el.id === productId));
    }, [productId, setProduct]);

    // console.log("product", product);

    return (
        <MDBContainer className="mb-5 " style={{ backgroundColor: "gray", height: "100vh" }}>
            <MDBRow className="">
                <MDBCol>
                    <p>Product Details</p>
                    <h3>ID: {` ${parseInt(id) + 1}`} </h3>
                    <hr />
                    <img style={{ maxWidth: "300px", maxHeight: "300px" }} src={product.imageURL} alt="product" />
                    <hr />
                    <Link to={"/"}>back</Link>
                </MDBCol>
                <MDBCol>
                    {" "}
                    <h3>{product.name}</h3>
                </MDBCol>
                <MDBCol>
                    <MDBBtn className="mx-2" tag="a" onClick={() => handleSubmit()} color="success" size="lg" outline>
                        <MDBIcon fas icon="shopping-cart" /> Add to Cart
                    </MDBBtn>
                    <MDBBtn className="mx-2" tag="a" color="success" size="lg" outline>
                        {/* <MDBIcon fas icon="shopping-cart" /> */}
                        Start Order Now
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ProductDetails;
