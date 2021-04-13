import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MDBBtn onClick={handleToggle}>Register</MDBBtn>
      <MDBContainer>
        <MDBModal isOpen={isOpen} toggle={handleToggle}>
          <MDBModalHeader toggle={handleToggle} className="text-dark">
            Register
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginTextEx" className="grey-text">
                Username
              </label>
              <input
                type="text"
                id="defaultFormLoginTextEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Confirm Password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Register
                </MDBBtn>
                <MDBBtn color="secondary" onClick={handleToggle}>
                  Close
                </MDBBtn>
              </div>
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    </>
  );
};

export default Register;
