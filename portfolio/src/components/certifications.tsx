import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contentHeader from "./contentHeader";
function Certifications() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Certifications")}
      <Row>
        <Col>
          <h4 className="float-start m-5">Coming soon!</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Certifications;