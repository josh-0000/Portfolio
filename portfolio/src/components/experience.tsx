import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contentHeader from "./contentHeader";

function Experience() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Experience")}
      <Row>
        <Col>
          <div className="float-start mx-5 mt-5 text-start">
            <p>May 2022 - August 2022</p>
            <h5>Software Engineer Intern</h5>
            <h5 className="mt-3">General Dynamics Mission Systems | VIZ | 412-432-2476</h5>
            <li className="mt-3">Collaborated with a team of five interns and a project manager to build a Social Network Simulation.</li>
            <li className="mt-3">Conducted research on real-world networks and applied findings to algorithm development.</li>
            <li className="mt-3">Utilized tools such as Java, Python, Git, JSON, XML, GraphML, yEd, and Excel.</li>
            <li className="mt-3"> Largest contributions include simulating birth and marriage for a given demographic.</li>
            <li className="mt-3"> Employed Agile development with Scrum teams and weeklong sprints.</li>
            <li className="mt-3">Assumed the first Scrum Master position for the team.</li>
            <li className="mt-3">Implemented team standups during certain days of the week, which received good remarks from the team
during our sprint retrospectives.</li>
            <li className="mt-3">Recognized for exceptional leadership skills.</li>

            <p className="mt-5">May 2023 - August 2023</p>
            <h5>Software Engineering Intern</h5>
            <h5 className="mt-3">General Dynamics Mission Systems | VIZ | 412-432-2476</h5>
            <li className="mt-3">Collaborated with a team of six interns, two full-time employees, including a Scrum Master, and a project manager to create a landing page displaying relevant apps to users based on their role within a company.</li>
            <li className="mt-3">Responsible for setting up a PostgreSQL database within a Docker container, constructing the initial schema, writing initialization scripts to populate the schema on startup, creating React components, converting the main page to Bootstrap, and creating a print function for report generation.</li>
            <li className="mt-3">Used tools such as Git, TypeScript, JavaScript, Docker, JSON, PostgreSQL, React, Bootstrap, ESLint, Jira, Confluence, REST API, and SQL/Bash scripts.</li>
            <li className="mt-3">Gained experience in Merge Requests/Reviews, enhancing abilities in constructive criticism, and writing clean code.</li>
            <li className="mt-3">Learned about CI/CD and the use of GitLab pipeline jobs to automate testing and improve code quality.</li>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;