import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../context/ProductContext";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const ProductsInCart = () => {
    const { basket } = useContext(ProductContext);

    return (
        <MDBContainer className="mb-5" style={{ backgroundColor: "", height: "100vh" }}>
            <MDBRow>
                <MDBCol>
                    {basket.map((x, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                            <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={x?.imageURL} alt="product" />
                            <p style={{ margin: "20px 0px 0px 40px" }}>{x?.name}</p>
                            <hr />
                        </div>
                    ))}
                </MDBCol>
            </MDBRow>

            <Link to={"/"}>Home</Link>
        </MDBContainer>
    );
};

export default ProductsInCart;
