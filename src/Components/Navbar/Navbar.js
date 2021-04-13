import React from "react";
import Login from '../Login/Login';
import Register from '../Register/Register';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

const NavBar = () => {
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">#NoSponsors</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler 
    //   onClick={} 
      />
      <MDBCollapse id="navbarCollapse3" 
    //   isOpen={} 
      navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="#!">Merch</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Cart</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <Login/>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <Register/>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};
export default NavBar;
