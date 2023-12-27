import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styling/home.sass";
import gradImage from "../assets/gradImage.png";
import Background from "../components/background";
import Education from "../components/education";
import Certifications from "../components/certifications";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Experience from "../components/experience";
import HomeContent from "../components/homeContent";

function Home() {
  const [view, setView] = useState("Home");

  const normalButtonClassName = "btn-neutral w-100 text-start p-2 float-start mt-1";
  const activeButtonClassName = "btn-active w-100 text-start p-2 float-start rounded mt-1";

  let content = null;
  let homeButtonClassName = view === "Home" ? activeButtonClassName : normalButtonClassName;
  let backgroundButtonClassName = view === "Background" ? activeButtonClassName : normalButtonClassName;
  let educationButtonClassName = view === "Education" ? activeButtonClassName : normalButtonClassName;
  let experienceButtonClassName = view === "Experience" ? activeButtonClassName : normalButtonClassName;
  let certificationsButtonClassName = view === "Certifications" ? activeButtonClassName : normalButtonClassName;
  let skillsButtonClassName = view === "Skills" ? activeButtonClassName : normalButtonClassName;
  let portfolioButtonClassName = view === "Portfolio" ? activeButtonClassName : normalButtonClassName;
  let contactButtonClassName = view === "Contact" ? activeButtonClassName : normalButtonClassName;
  
  if (view === "Background") {
    content = <Background />;
  } else if (view === "Education") {
    content = <Education />;
  } else if (view === "Certifications") {
    content = <Certifications />;
  } else if (view === "Skills") {
    content = <Skills />;
  } else if (view === "Portfolio") {
    content = <Portfolio />;
  } else if (view === "Contact") {
    content = <Contact />;
  } else if (view === "Experience") {
    content = <Experience />;
  } else if (view === "Home") {
    content = <HomeContent />;
  }

  return (
    <Container fluid className="home-container">
      <Row className="home-row">
        <Col lg={2} md={3} sm={4} xs={4} className="home-col-1">
          <Row>
            <Col className="mx-3 mt-4">Joshua Gmys</Col>
          </Row>
          <Row>
            <Col className="mx-3 mt-2">
              <img src={gradImage} alt="gradImage" className="image"/>
            </Col>
          </Row>
          <Row>
            <Col className="mx-3 mt-2 introduction">
              Hi, my name is Joshua Gmys and I am an aspiring Full Stack Devoloper. Welcome to my website!
            </Col>
          </Row>
          <br />
          <hr />
          <Container>
            <Row className="m-0">
              <Col>
                <button className={homeButtonClassName} onClick={() => setView("Home")}>
                  Home
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={backgroundButtonClassName} onClick={() => setView("Background")}>
                  Background
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={educationButtonClassName} onClick={() => setView("Education")}>
                  Education
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={experienceButtonClassName} onClick={() => setView("Experience")}>
                  Experience
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={portfolioButtonClassName} onClick={() => setView("Portfolio")}>
                  Portfolio
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={skillsButtonClassName} onClick={() => setView("Skills")}>
                  Skills
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={certificationsButtonClassName} onClick={() => setView("Certifications")}>
                  Certifications
                </button>
              </Col>
            </Row>
            <Row className="m-0">
              <Col>
                <button className={contactButtonClassName} onClick={() => setView("Contact")}>
                  Contact
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={10} md={9} sm={8} xs={8} className="home-col-2 p-0">{content}</Col>
      </Row>
    </Container>
  );
}

export default Home;