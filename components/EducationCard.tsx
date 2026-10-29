import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4 border-0">
      <CardBody className="p-4">
        <div className="d-flex flex-column px-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
            <h4 className="text-info font-weight-bold mb-1">{schoolName}</h4>
            <div>
              <Badge color="info" className="mr-2 px-3 py-2 font-weight-bold">
                {duration}
              </Badge>
              {grade && (
                <Badge color="primary" className="px-3 py-2 font-weight-bold">
                  {grade}
                </Badge>
              )}
            </div>
          </div>
          <h5 className="text-dark font-weight-600 mb-2">{subHeader}</h5>
          <p className="description text-muted mt-2 mb-3">{desc}</p>
          {descBullets && descBullets.length > 0 && (
            <ul className="pl-3 mb-0 text-muted">
              {descBullets.map((bullet, idx) => {
                return (
                  <li key={idx} className="mb-1" style={{ lineHeight: "1.6" }}>
                    {bullet}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
