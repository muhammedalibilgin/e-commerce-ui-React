import React from "react";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

// const center = { display: "flex", justifyContent: "center" };

const SocialNetworks = () => {
    return (
        <div>
            <MDBRow className="mb-4">
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn
                        className="mx-2"
                        tag="a"
                        color="success"
                        size="lg"
                        floating
                        href="http://instagram.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <MDBIcon fab icon="instagram" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn floating size="lg" tag="a" href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                        <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn
                        className="mx-2"
                        size="lg"
                        tag="a"
                        style={{ backgroundColor: "#55acee" }}
                        floating
                        href="https://twitter.com/maliblgn"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn color="danger" tag="a" size="lg" floating>
                        <MDBIcon fas icon="archway" />
                    </MDBBtn>
                </MDBCol>{" "}
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    <MDBBtn
                        className="ms-2"
                        size="lg"
                        tag="a"
                        color="light"
                        floating
                        href="http://apple.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <MDBIcon fab icon="apple" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size="4" md="2" className="mb-3 d-flex justify-content-center">
                    {" "}
                    <MDBBtn
                        color="dark"
                        size="lg"
                        tag="a"
                        floating
                        href="http://github.com/muhammedalibilgin"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default SocialNetworks;
