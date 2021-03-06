import Products from "./components/Products.jsx";
import SocialNetworks from "./components/SocialNetworks.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductsInCart from "./components/ProductsInCart.jsx";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../src/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    console.log("app.js");

    return (
        <MDBContainer style={{ paddingTop: "10px" }}>
            <MDBRow style={{ marginTop: "60px" }}>
                <Router>
                    <MDBCol>
                        <NavBar />
                    </MDBCol>
                    <Routes>
                        <Route exact path="/" element={<Products />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/productsincart" element={<ProductsInCart />} />
                    </Routes>
                </Router>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <SocialNetworks />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default App;
