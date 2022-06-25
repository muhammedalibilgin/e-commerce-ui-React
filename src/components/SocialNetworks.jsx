import React from "react";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

// const center = { display: "flex", justifyContent: "center" };

const SocialNetworks = () => {
    return (
        <div>
            <MDBRow className="mb-4">
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    {" "}
                    <MDBBtn className="mx-2" tag="a" color="success" size="lg" outline floating>
                        <MDBIcon fab icon="instagram" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    {" "}
                    <MDBBtn floating size="lg" tag="a">
                        <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    {" "}
                    <MDBBtn className="mx-2" size="lg" tag="a" color="success" outline floating>
                        <MDBIcon fas icon="twitter" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn color="danger" tag="a" outline size="lg" floating>
                        <MDBIcon fas icon="archway" />
                    </MDBBtn>
                </MDBCol>{" "}
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn className="ms-2" size="lg" tag="a" color="gray" floating>
                        <MDBIcon fab icon="apple" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    {" "}
                    <MDBBtn color="dark" floating size="lg" tag="a">
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default SocialNetworks;
