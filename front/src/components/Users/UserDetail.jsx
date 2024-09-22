import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserDetail = () => {
  return (
    <Container>
      <div className="mb-5">
        <h1 className="text-center">Pagina detalle cliente</h1>
        <Row className="mt-4">
          <Col>
            <h2>ID Client</h2>
          </Col>
          <Col>
            <h4>123</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Name Client</h2>
          </Col>
          <Col>
            <h4>pedro</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>LastName Client</h2>
          </Col>
          <Col>
            <h4>perez</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>D.N.I</h2>
          </Col>
          <Col>
            <h4>42499732</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Phone</h2>
          </Col>
          <Col>
            <h4>+54 9 381-352-8658</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Email</h2>
          </Col>
          <Col>
            <h4>pedro.perez@gmail.com</h4>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <Row className="pt-5">
        <h3 className="text-center">Credits</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Client</th>
              <th>Date</th>
              <th>Funtions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>123</td>
              <td>12/10/24</td>
              <td>
                <Button as={Link} to="/admin/credit">
                  Ver Más
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Button as={Link} to="/admin/credit">
                  Ver Más
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>12/10/24</td>
              <td>
                <Button as={Link} to="/admin/credit">
                  Ver Más
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UserDetail;
