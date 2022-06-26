import { useContext } from "react";

import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBadge } from "mdb-react-ui-kit";

import ProductContext from "../context/ProductContext";

const NavBar = () => {
    const { count } = useContext(ProductContext);

    return (
        <div>
            <MDBNavbar expand="lg" light bgColor="light" className="mb-3">
                <MDBContainer fluid>
                    <MDBNavbarNav right fullWidth={false} className="d-flex flex-row ">
                        <MDBNavbarItem className="me-3 me-lg-0">
                            <MDBNavbarLink href="#">
                                <span>
                                    <MDBIcon size="lg" fas icon="shopping-cart" />
                                </span>
                                <MDBBadge pill color="danger">
                                    {count}
                                </MDBBadge>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem className="me-3 me-lg-0">
                            <MDBNavbarLink href="#">
                                <MDBIcon fab icon="twitter" />
                            </MDBNavbarLink>
                        </MDBNavbarItem> */}
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default NavBar;
