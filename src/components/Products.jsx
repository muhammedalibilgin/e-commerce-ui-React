import React from "react";

import productsApi from "../api/productsApi";
import { MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Products = () => {
    return (
        <>
            <SearchBar />
            <MDBRow id="products" className="mb-5">
                {productsApi.map((x, i) => (
                    <MDBCol size="6" md="4" lg="3" key={i} className="card  shadow-3 g-4  ">
                        <MDBRipple
                            rippleColor="dark"
                            style={{ maxWidth: "22rem" }}
                            rippleTag="div"
                            className="bg-image hover-zoom shadow-1-strong rounded"
                        >
                            <img style={{ maxWidth: "250px" }} src={x.imageURL} className="card-img-top  " alt="a product" />
                            <Link to={"product/" + (parseInt(i) + 1)}>
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </Link>
                        </MDBRipple>

                        <hr />
                        <div className="card-body">
                            <Link to={"product/" + (parseInt(i) + 1)}>
                                <p id="cardTitle" className="card-title ">
                                    {x.name}
                                </p>
                            </Link>
                            <Link to={"product/" + (parseInt(i) + 1)}>
                                <p
                                    id="cardText"
                                    // style={{
                                    //     maxHeight: "10rem",
                                    //     overflow: "hidden",
                                    //     textOverflow: "ellipsis",
                                    // }}
                                    className="card-text text-center  "
                                >
                                    {x.overview}
                                </p>
                            </Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{x.category} </small>
                        </div>
                    </MDBCol>
                ))}
            </MDBRow>
        </>
    );
};

export default Products;
