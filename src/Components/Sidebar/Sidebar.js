import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

const Sidebar = () => {
  return (
    <MDBCard personal className="my-5">
      <MDBCardBody>
        <MDBCardTitle>
          <a href="#!" className="title-one">
            Title
          </a>
        </MDBCardTitle>
        <p className="card-meta">Joined in 2013</p>
        <MDBCardText>Text</MDBCardText>
        <hr />
        <a href="#!" className="card-meta">
          <span>
            <MDBIcon icon="blog" />
            Post
          </span>
        </a>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Sidebar;
