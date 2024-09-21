import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardsTop from "./CardsTop";
import AllUsers from "../Users/AllUsers";
import AllCredits from "../Credits/AllCredits";
const TablesUser = () => {
  return (
    <Container>
      <CardsTop></CardsTop>
      <Row className="pt-5">
      <Col>
      <h2 className="text-center">Clientes</h2>
      <AllUsers></AllUsers>
      </Col>
      <Col>
      <h2 className="text-center">Creditos</h2>
      <AllCredits></AllCredits>
      </Col>
      </Row>
    </Container>
  );
};

export default TablesUser;
