import React from "react";
import { Container } from "react-bootstrap";
import contentHeader from "./contentHeader";

function Portfolio() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Portfolio")}
    </Container>
  );
}

export default Portfolio;