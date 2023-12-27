import React from "react";
import { Container } from "react-bootstrap";
import contentHeader from "./contentHeader";

function Skills() {
  return (
    <Container className="pb-5 m-0 p-0">
      {contentHeader("Skills")}
      <div className="float-start mx-5 mt-5 text-start">
        <h5>Most comfortible (300+ hours)</h5>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Linux</li>
          <li>Windows</li>
          <li>MacOS</li>
          <li>Docker</li>
          <li>Node.js</li>
          <li>Typescript</li>
          <li>JSON</li>
        </ul>
        <h5 className="mt-3">Semi comfortible (100+ hours)</h5>
        <ul>
          <li>Scss</li>
          <li>PHP</li>
          <li>REST API</li>
          <li>Stripe</li>
          <li>Express.js</li>
          <li>Google Voice Recognition API</li>
          <li>Shopify</li>
          <li>SwiftUI</li>
          <li>Swift</li>
        </ul>
        <h5 className="mt-3">Most comfortible IDEs</h5>
        <ul className="mb-5">
          <li>Visual Studio Code</li>
          <li>Jupyter Notebook</li>
          <li>Eclipse</li>
          <li>Xcode</li>
        </ul>
      </div>
    </Container>
  );
}

export default Skills;