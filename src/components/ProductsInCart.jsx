import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../context/ProductContext";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const ProductsInCart = () => {
    const { basket, setBasket, count, setCount } = useContext(ProductContext);

    const deleteCartItem = (el, i) => {
        console.log(basket);
        console.log("i", i);
        const newCartList = basket.filter((x, index) => index !== i);
        // console.log("new", newCartList);asdsd
        setBasket([...newCartList]);
        setCount(count - 1);
    };

    // console.log(basket.map((x) => {}));

    return (
        <MDBContainer className="mb-5" style={{ backgroundColor: "", height: "100vh" }}>
            <MDBRow>
                <MDBCol>
                    {basket.length === 0 ? (
                        <div>
                            <h4> You haven't added anything to the cart. </h4>
                        </div>
                    ) : (
                        basket.map((x, i) => (
                            <div key={i} style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                                <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={x?.imageURL} alt="product" />
                                <p style={{ margin: "0px 20px", padding: "0px", display: "flex", alignItems: "center" }}>{x?.name}</p>
                                <MDBBtn
                                    className="mx-2"
                                    style={{ margin: "0px", padding: "10px", display: "flex", alignItems: "center" }}
                                    tag="a"
                                    color="none"
                                    size="lg"
                                    outline
                                    onClick={() => deleteCartItem(x, i)}
                                >
                                    <MDBIcon far icon="trash-alt" />
                                </MDBBtn>

                                <hr />
                            </div>
                        ))
                    )}
                </MDBCol>
            </MDBRow>

            <Link to={"/"}>Home</Link>
        </MDBContainer>
    );
};

export default ProductsInCart;
