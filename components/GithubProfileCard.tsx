import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card id="contact" className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="align-items-center">
            <Col className="order-lg-2 text-center" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                alt="Chetan Ukani"
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4 bg-white p-1"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white font-weight-bold">Let&apos;s Build Something Incredible Together!</h2>
              <p className="lead text-white mt-3" style={{ lineHeight: "1.7" }}>
                Whether you need custom EVM smart contracts, an end-to-end Web3 dApp, or a scalable backend microservice architecture for your Web3 project, my inbox is always open.
              </p>
              {bio && <p className="text-white mt-2 font-italic opacity-8">{bio}</p>}
              {location && (
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info d-inline-flex align-items-center px-3 py-2">
                  <i className="ni ni-pin-3 text-info mr-2" />
                  <span className="font-weight-600">{location}</span>
                </div>
              )}
              <div className="mt-3">
                <SocialLinks />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
