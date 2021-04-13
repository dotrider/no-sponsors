import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

const siteName = "#NoSponsors";
const nav = ["merch", "cart"];

const NavBar = () => {
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavLink to="/">
        <MDBNavbarBrand>
          <strong className="white-text">{siteName}</strong>
        </MDBNavbarBrand>
      </MDBNavLink>
      <MDBNavbarToggler
      //   onClick={}
      />
      <MDBCollapse
        id="navbarCollapse3"
        //   isOpen={}
        navbar
      >
        <MDBNavbarNav left>
          {nav.map((page, i) => (
            <MDBNavItem key={i}>
              <MDBNavLink to={"/" + page}>{page.toUpperCase()}</MDBNavLink>
            </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <Login />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <Register />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};
export default NavBar;
