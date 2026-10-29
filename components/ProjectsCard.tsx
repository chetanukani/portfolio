import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";
import ProjectSkills from "./ProjectSkills";

const ProjectsCard = ({ name, desc, github, link, img, skills }: ProjectType) => {
  return (
    <Col lg="6" className="my-3">
      <Card className="shadow-lg--hover shadow border-0 rounded h-100 d-flex flex-column overflow-hidden">
        {img && (
          <div style={{ height: "230px", overflow: "hidden", backgroundColor: "#f8f9fe" }}>
            <img
              src={img}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        )}
        <CardBody className="d-flex flex-column p-4 flex-grow-1">
          <h3 className="font-weight-bold mb-2">{name}</h3>
          <p className="description text-muted mb-3 flex-grow-1" style={{ lineHeight: "1.6" }}>
            {desc}
          </p>
          <div className="mt-auto">
            <div className="mb-2">
              <ProjectSkills skills={skills} projectName={name} />
            </div>
            <div className="d-flex flex-wrap pt-2">
              {github ? (
                <Button
                  className="btn-icon btn-sm mr-2"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub Repository"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-github" />
                  </span>
                  <span>Code</span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon btn-sm"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Visit ${name}`}
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-external-link" />
                  </span>
                  <span>Live Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
