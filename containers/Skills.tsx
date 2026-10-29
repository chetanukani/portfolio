import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container id="skills" className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            const sectionSlug = section.title.replace(/[^a-zA-Z0-9]/g, "");
            return (
              <Row className="my-5 align-items-center" key={index}>
                <Col lg="6" className={index % 2 === 0 ? "order-2 order-lg-1" : "order-2 order-lg-2"}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className={index % 2 === 0 ? "order-1 order-lg-2" : "order-1 order-lg-1"}>
                  <h3 className="h3 mb-3">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-3">
                    {section.softwareSkills.map((skill, i) => {
                      const skillSlug = `${sectionSlug}-${skill.skillName.replace(/[^a-zA-Z0-9]/g, "")}`;
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 bg-white"
                            id={skillSlug}
                            style={{
                              width: "3.5rem",
                              height: "3.5rem",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" width="28" height="28" />
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skillSlug}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div className="text-left px-lg-4">
                    {section.skills.map((skill, i) => {
                      return (
                        <p key={i} className="mb-2">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
