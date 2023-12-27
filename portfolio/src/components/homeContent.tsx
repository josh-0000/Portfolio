import React from "react";
import { Container } from "react-bootstrap";
import contentHeader from "./contentHeader";

function HomeContent() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Home")}
    </Container>
  );
}

export default HomeContent;