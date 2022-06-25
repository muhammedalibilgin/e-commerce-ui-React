import * as React from "react";
import { MDBBtn, MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";

// style={{ display: "flex", justifyContent: "center", marginTop: "1%", marginBottom: "1%" }}
// i must download react use form

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submıt", e.target[0].value);
};

export default function SearchBar() {
    return (
        <form onSubmit={handleSubmit}>
            <MDBRow className="mb-3">
                <MDBCol size="8" md="10">
                    <MDBInput label="what you are looking for" id="form1" type="text" />
                </MDBCol>
                <MDBCol size="4" md="2">
                    <MDBBtn type="submit" outline color="danger">
                        search
                    </MDBBtn>
                </MDBCol>
                {/* <MDBCol size="10" style={{ backgroundColor: "red" }}>
                    searcsk field
                </MDBCol>
                <MDBCol size="2" style={{ backgroundColor: "yellow" }}>
                    {" "}
                    buttton{" "}
                </MDBCol> */}
            </MDBRow>
        </form>
    );
}
