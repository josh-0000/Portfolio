import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Background() {
  return (
    <Container className="pb-5 m-0 p-0">
      <Row className="bg-dark m-0">
        <Col>
          <h1 className="float-start m-4 text-light">Background</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="float-start m-5">Athletic History</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="float-start mx-5 text-start">
            From my early years at age five to my late teens, my life was profoundly shaped by my dedication to sports, where I was an active participant in 4-6 teams each year, culminating in being a part of over 50 teams. This extensive journey in athletics not only honed my skills in teamwork and discipline but also carved out my path as a leader. My leadership abilities were forged in the crucible of competitive sports, where I learned to inspire and guide teams towards common goals. Among my notable achievements are being a 2015 Penguins Cup champion, a three-time city league baseball champion, and a homerun derby champion. These accolades, alongside my 5 appearances at PNC Park, a memorable appearance at Heinz Field during the 2011 Winter Classic, recognition as a Pittsburgh Post-Gazette All-Section baseball player, and appearances at both Consol Energy Center and Mellon Arena, stand as testaments to my dedication and skill. These experiences have not only shaped my leadership qualities but also instilled a relentless pursuit of excellence and adaptability - essential traits in the dynamic field of software engineering. As I transitioned from sports arenas to tech landscapes, the leadership, teamwork, and continuous improvement ethos from my athletic career have become integral to my approach in tackling complex software projects and driving innovation in collaborative environments.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="float-start m-5">Transition to tech</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="float-start mx-5 text-start">
            My journey into the tech world began with a childhood passion for video games, dating back to when I was just 5 years old. The allure of creating my own games took root during my time at a gifted center in middle school, where I designed my first game, bearing a resemblance to the classic 'Asteroids'. This project wasn’t just a fond memory; it was a pivotal moment that opened my eyes to the accessibility of software creation. It sparked my interest in programming and sowed the seeds for my future career in software engineering. My affinity for technology wasn’t limited to gaming; I was also deeply engaged in disassembling and reassembling computers, controllers, and various devices. Additionally, assisting my grandparents with their tech challenges further cemented my path. Acting as their personal IT support, I not only honed my technical skills but also developed the confidence and adaptability needed to excel in the ever-evolving field of software engineering.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="float-start m-5">Overcoming personal challenges</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="float-start mx-5 text-start">
            In my youth, I faced a significant challenge when diagnosed with Perthes disease, a condition leading to the deterioration of the hip joint. This diagnosis necessitated the use of a walker, and I received advice against engaging in sports. Despite this, I not only managed to return to the sports I cherished but also learned invaluable lessons about perseverance and the importance of hard work. These experiences have been a guiding force in my life, helping me navigate through other adversities such as the early loss of my grandparents, making a comeback in baseball following a shoulder injury that resulted in a 12-inch rod implant, and achieving the milestone of being the first in my family to graduate from college.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Background;