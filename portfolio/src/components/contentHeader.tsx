import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styling/contentHeader.sass";
function contentHeader(section: string) {
  return (
    <Row className="contentHeader bg-dark m-0">
      <Col>
        <h1 className="float-start m-4 text-light">{section}</h1>
      </Col>
    </Row>
  );
}

export default contentHeader;