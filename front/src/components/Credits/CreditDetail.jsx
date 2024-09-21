import React from "react";
import { useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";

const CreditDetail = () => {
  return (
    <Container>
      <div className="mb-5">
        <h1 className="text-dark text-center">Credit Detail</h1>
        <Row className="mt-4">
          <Col>
            <h2>ID Credit</h2>
          </Col>
          <Col>
            <h4>123</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Client</h2>
          </Col>
          <Col>
            <h4>pedro perez</h4>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <Row className="pt-5">
        <h3 className="text-center">Detalle Cuotas</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>Amount</th>
              <th>Months</th>
              <th>Interest</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/01/20</td>
              <td>1000</td>
              <td>1</td>
              <td>10</td>
              <td>Activo</td>
            </tr>
           
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CreditDetail;
