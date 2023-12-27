import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contentHeader from "./contentHeader";

function Education() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Education")}
      <Row>
        <Col>
          <div className="float-start mx-5 mt-5 text-start">
            <p>2019 - 2023</p>
            <h5>Indiana University of Pennsylvania</h5>
            <h5 className="mt-3">Bachelor of Science in Computer Science</h5>
            <li className="m-3">Major - Software Engineering</li>
            <li className="m-3">Major - Cyber Security</li>
            <li className="m-3">Minor - Mathematics</li>
            <li className="m-3">Minor - Criminology</li>

            <h5 className="mt-5">Notable Computer Science Courses</h5>
            <li className="m-3">105 Fundimentals of Computer Science</li>
            <li className="m-3">110 Problem Solving & Struct Prog</li>
            <li className="m-3">143 Cyber Wellness</li>
            <li className="m-3">210 Object Orient & GUI Program</li>
            <li className="m-3">300 Assembly Language Programming</li>
            <li className="m-3">220 Enterprise Computing</li>
            <li className="m-3">310 Data Structures and Algorithms</li>
            <li className="m-3">319 Software Engineering Concepts</li>
            <li className="m-3">341 Intro to Database Management Systems</li>
            <li className="m-3">345 Computer Networks</li>
            <li className="m-3">380 Seminar on Computer Science Profession & Ethics	</li>
            <li className="m-3">365 Web Architecture & Application Dev</li>
            <li className="m-3">405 Artificial Intelligence</li>
            <li className="m-3">473 Software Engineer Practice</li>
            <li className="m-3">480 Seminar: Technical Topics</li>
            <li className="m-3">362 Unix Systems</li>
            <li className="m-3">460 Theory of Computation</li>
            <li className="m-3">356 Network Security</li>
            <li className="m-3">410 Computer Architecture</li>
            <li className="m-3">424 Compiler Construction</li>
            <li className="m-3">432 Intro to Operating Systems</li>
            <li className="m-3">216 Intro to Cyber Security</li>
            <li className="m-3">427 Intro to Cryptography</li>
            <li className="m-3">429 Digital Forensics</li>

            <h5 className="mt-5">Notable Math Courses</h5>
            <li className="m-3">125 Calculus I/Physics, Chem, Math</li>
            <li className="m-3">111/121 Physics Lecture and Lab</li>
            <li className="m-3">216 Probability & Stats</li>
            <li className="m-3">309 Discrete Mathematics</li>
            <li className="m-3">126 Calculus II--Phys, Chem, Math</li>
            <li className="m-3">171 Introduction to Linear Algebra</li>
            <li className="m-3">343 Intro to Numerical Methods</li>

            <h5 className="mt-5">Notable Criminology Courses</h5>
            <li className="m-3">101 Crime & Justice Systems</li>
            <li className="m-3">343 Terrorism</li>
            <li className="m-3">216 Probability & Stats</li>
            <li className="m-3">102 Survey of Criminology</li>
            <li className="m-3">401 Contemporary Issues in Crim</li>
            <li className="m-3">403 Dilemmas in Crim & Crim Justice</li>
            <li className="m-3">410 Race, Ethnic, Soc Stru & Crime</li>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;