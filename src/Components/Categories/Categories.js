import React from "react";
import data from "../../api/data";
import { 
    MDBRow, 
    MDBCol, 
    MDBCard, 
    MDBCardBody, 
    MDBIcon 
} from "mdbreact";

const Categories = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        {data.map(
          (
            { id, category, description, post, topics, color, icon },
            i,
            arr
          ) => (
            <>
              <MDBRow key={id}>
                <MDBCol lg="2" xl="2">
                  <MDBIcon icon={icon} size="5x" />
                </MDBCol>
                <MDBCol lg="6" xl="6">
                  <h3
                    className={`font-weight-bold text-${color} text-uppercase mb-3 p-0`}
                  >
                    <strong>{category}</strong>
                  </h3>
                  <p className="dark-grey-text">{description}</p>
                </MDBCol>
                <MDBCol
                  lg="2"
                  xl="2"
                  className={`d-flex align-items-center justify-content-center border-right border-${color}`}
                >
                  <MDBIcon icon={icon} size="2x" />
                  <span className="font-weight-bold pl-3">{post}</span>
                </MDBCol>
                <MDBCol
                  lg="2"
                  xl="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <MDBIcon icon={icon} size="2x" />
                  <span className="font-weight-bold pl-3">{topics}</span>
                </MDBCol>
              </MDBRow>
              {arr.length - 1 !== i && <hr className="my-5" />}
            </>
          )
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Categories;
