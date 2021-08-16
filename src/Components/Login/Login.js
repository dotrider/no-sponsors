import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MDBBtn onClick={handleToggle}>Login</MDBBtn>
      <MDBContainer>
        <MDBModal isOpen={isOpen} toggle={handleToggle}>
          <MDBModalHeader toggle={handleToggle} className="text-dark">
            Login
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
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

export default Login;
