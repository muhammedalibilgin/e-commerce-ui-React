import Products from "./components/Products";
import SocialNetworks from "./components/SocialNetworks";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../src/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    console.log("app.js");

    return (
        <MDBContainer style={{ paddingTop: "10px" }}>
            <MDBRow>
                <MDBCol>
                    <NavBar />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Products />} />ı
                        <Route path="/product/:id" element={<ProductDetails />} />
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
