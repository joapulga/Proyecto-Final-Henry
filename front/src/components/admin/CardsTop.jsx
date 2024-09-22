import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const CardsTop = () => {
  return (
    <Row className="mt-5 mb-5">
      <Col>
        <Card style={{ width: "9rem" , height:"6rem" }} className="bg-dark text-white">
          <Card.Title className="text-center">Total Prestado</Card.Title>
          <Card.Text className="text-center">$$$$$$</Card.Text>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "9rem", height:"6rem" }}className="bg-dark text-white">
          <Card.Title className="text-center">Intereses Ganados</Card.Title>
          <Card.Text className="text-center">10%</Card.Text>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "9rem" , height:"6rem" }}className="bg-dark text-white">
          <Card.Title className="text-center">Cap. Recuperado</Card.Title>
          <Card.Text className="text-center">20%</Card.Text>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "9rem" , height:"6rem" }}className="bg-dark text-white">
          <Card.Title className="text-center">Creditos otorgados</Card.Title>
          <Card.Text className="text-center">100</Card.Text>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "9rem", height:"6rem"  }}className="bg-dark text-white">
          <Card.Title className="text-center">Num. Clientes</Card.Title>
          <Card.Text className="text-center">200</Card.Text>
        </Card>
      </Col>
    
      
    </Row>
  );
};

export default CardsTop;
