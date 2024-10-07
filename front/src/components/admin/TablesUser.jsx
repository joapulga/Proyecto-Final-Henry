import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardsTop from "./CardsTop";
import AllUsers from "../Users/AllUsers";
import AllCredits from "../Credits/AllCredits";


const TablesUser = () => {

  return (
    <Container>
      <CardsTop></CardsTop>
      <Row className="pt-5">
        <Col>
          <AllUsers ></AllUsers>
        </Col>
        <Col>
          <AllCredits ></AllCredits>
        </Col>
      </Row>
    </Container>
  );
};

export default TablesUser;
