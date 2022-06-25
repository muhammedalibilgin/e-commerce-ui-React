import React from "react";
// style={{ width: "10rem" }}
import products from "./products";
import { MDBBtn, MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Activities = () => {
    return (
        <MDBRow className="mb-5">
            {" "}
            {products.map((x, i) => (
                <MDBCol size="6" md="4" lg="3" key={i} className="card  shadow-3 g-4  ">
                    <img src={x.imageURL} className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title"> {x.name} </h5>
                        <p className="card-text">{x.overview}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </MDBCol>
            ))}{" "}
        </MDBRow>
    );
};

export default Activities;
