import React, { useState } from "react";
import { auth } from "../../api/fire";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducer';

import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector( state => state.user);
  console.log('currentUser', currentUser)


  const handleToggle = () => setIsOpen(!isOpen);

  const registerUser = (email, confirmPassword) => {
    console.log('register', email, confirmPassword)
   const user = auth.createUserWithEmailAndPassword(email, confirmPassword);
   console.log('user', user,  'usercredential', user.user)
   auth.onAuthStateChanged( u => dispatch(setUser(u)))
  }

  const handleSubmit = (e) => {
    console.log('handleSubmit hit!', password, confirmPassword)
    e.preventDefault();
    if(password === confirmPassword){
      registerUser(email,confirmPassword)
      alert('success!')
    }else{
     alert('Password did not Match')
    }
  }

  return (
    <>
      <MDBBtn onClick={handleToggle}>Register</MDBBtn>
      <MDBContainer>
        <MDBModal isOpen={isOpen} toggle={handleToggle}>
          <MDBModalHeader toggle={handleToggle} className="text-dark">
            Register
          </MDBModalHeader>
          <MDBModalBody>
            <form onSubmit={handleSubmit}>
              <p className="h4 text-center mb-4">Register</p>
              <label htmlFor="defaultFormLoginTextEx" className="grey-text">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
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
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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
