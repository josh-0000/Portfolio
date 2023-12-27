import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contentHeader from "./contentHeader";

function Contact() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Contact")}
      <div className="float-start mx-5 mt-5 text-start">
        <h5>Phone</h5>
        <p>412-328-1079</p>
        <h5>Email</h5>
        <p>joshuagmys17@icloud.com</p>
        <h5>LinkedIn</h5>
        <p>www.linkedin.com/in/joshua-gmys-00b75922a</p>
        <h5>GitHub</h5>
        <p>https://github.com/josh-0000</p>  
        <h5>Instagram</h5>
        <p>josh_gmys</p>
      </div>
    </Container>
  );
}

export default Contact;