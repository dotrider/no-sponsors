import React from "react";
import Categories from "../Categories/Categories";
import Sidebar from "../Sidebar/Sidebar";
import { MDBRow, MDBCol } from "mdbreact";

const Home = () => {
  return (
    <MDBRow>
      <MDBCol md="8">
        <Categories />
      </MDBCol>
      <MDBCol md="4">
        <Sidebar />
      </MDBCol>
    </MDBRow>
  );
};

export default Home;
