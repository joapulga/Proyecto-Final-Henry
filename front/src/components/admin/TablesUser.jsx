import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardsTop from "./CardsTop";
import AllUsers from "../Users/AllUsers";
import AllCredits from "../Credits/AllCredits";
import {  findAllUsers } from "../service/querisUsers";
import { findAllCredits } from "../service/querisCredits";

const TablesUser = () => {
  const [users, setUsers] = useState([]);

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    //const token= JSON.parse(localStorage.getItem("user"))||[]
    findAllUsers().then((res) => {
      try {
        console.log(res.data)
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    });
    findAllCredits().then((res) => {
      try {
        setCredits(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return (
    <Container>
      <CardsTop></CardsTop>
      <Row className="pt-5">
        <Col>
          <AllUsers users={users}></AllUsers>
        </Col>
        <Col>
          <AllCredits credits={credits}></AllCredits>
        </Col>
      </Row>
    </Container>
  );
};

export default TablesUser;
