import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && SkillBars.length > 0 ? (
      <Container id="proficiency" className="section section-lg">
        <Fade bottom duration={2000}>
          <Row className="align-items-center">
            <Col lg="6">
              <h1 className="h1 mb-3">Technical Proficiency</h1>
              <p className="lead text-muted mb-4">
                Specialized core competencies spanning smart contract engineering, Web3 dApp integration, scalable backend microservices, and security.
              </p>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info mb-3" key={skill.Stack}>
                    <div className="progress-label d-flex justify-content-between mb-1">
                      <span className="font-weight-bold text-dark">{skill.Stack}</span>
                      <span className="text-info font-weight-bold">{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                      style={{ height: "8px", borderRadius: "4px" }}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    ) : null
  );
};

export default Proficiency;
