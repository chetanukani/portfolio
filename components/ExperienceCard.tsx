import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Button } from "reactstrap";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets, link }: ExperienceType) => {
  return (
    <Col lg="6" className="my-3">
      <Card className="shadow-lg--hover shadow border-0 rounded h-100">
        <CardBody className="d-flex flex-column text-left p-4">
          <div className="text-center mb-3">
            <img
              src={companyLogo}
              style={{
                objectFit: "cover",
                width: "6.5rem",
                height: "6.5rem",
                borderRadius: "50%",
              }}
              className="shadow p-1 bg-white mb-2"
              alt={company}
            />
            <CardTitle tag="h4" className="mt-2 mb-1 font-weight-bold">
              {company}
            </CardTitle>
            <CardSubtitle tag="h5" className="text-info mb-1 font-weight-600">
              {role}
            </CardSubtitle>
            <CardSubtitle className="text-muted small font-weight-bold">{date}</CardSubtitle>
          </div>
          <CardText tag="div" className="description mt-2 flex-grow-1">
            <p className="mb-3 text-dark">{desc}</p>
            {descBullets && descBullets.length > 0 && (
              <ul className="pl-3 mb-3">
                {descBullets.map((bullet, idx) => {
                  return (
                    <li key={idx} className="mb-2 text-muted" style={{ lineHeight: "1.6" }}>
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            )}
          </CardText>
          {link && (
            <div className="mt-auto text-center pt-2">
              <Button
                className="btn-icon btn-sm px-3"
                color="info"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label={`Visit ${company}`}
              >
                <span className="btn-inner--icon mr-1">
                  <i className="fa fa-external-link" />
                </span>
                <span className="nav-link-inner--text">Company Website</span>
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
