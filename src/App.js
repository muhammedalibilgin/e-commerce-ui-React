import SearchBar from "./components/SearchBar";
import Activities from "./components/Activities";
import SocialNetworks from "./components/SocialNetworks";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../src/App.css";

function App() {
    return (
        <MDBContainer style={{ paddingTop: "10px" }}>
            <MDBRow>
                <SearchBar />
            </MDBRow>
            <MDBRow>
                {/* <MDBCol> */}
                <div>
                    <Activities />
                </div>
                {/* </MDBCol> */}
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
