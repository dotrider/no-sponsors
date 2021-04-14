import React from "react";
import products from "../../api/store";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
} from "mdbreact";

const page = "Merch";
const pageDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
amet numquam iure provident voluptate esse quasi, veritatis totam
voluptas nostrum quisquam eum porro a pariatur veniam.`;

const Merch = () => {
  return (
    <section className="text-center m-5">
      <h2 className="h1-responsive font-weight-bold text-center text-uppercase my-5">
        {page}
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        {pageDescription}
      </p>
      <MDBRow>
        {products.map(
          ({ id, product, category, description, img, price }, i) => (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-4" key={id}>
              <MDBCard wide ecommerce>
                <MDBCardImage cascade src={img} top alt="sample photo" />
                <MDBCardBody cascade className="text-center">
                  <a href="#!" className="text-muted">
                    <h5>{category}</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">{product}</a>
                    </strong>
                  </MDBCardTitle>
                  <MDBCardText>{description}</MDBCardText>
                  <MDBCardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>${price}</strong>
                    </span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-eye mr-3" />
                        <span>Quick Look</span>
                      </MDBTooltip>{" "}
                    </span>
                  </MDBCardFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
        )}
      </MDBRow>
    </section>
  );
};

export default Merch;
