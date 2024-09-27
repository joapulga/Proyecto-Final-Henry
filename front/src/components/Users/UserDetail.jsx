import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { findUserByID } from "../service/querisUsers";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [usersCredits, setCredits] = useState([]);
  console.log(user);
  useEffect(() => {
    findUserByID(id).then((r) => {
      try {
        setUser(r);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const mapeo = () => {
    return usersCredits.map((u) => {
      return (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.dni}</td>
          <td>{u.phone}</td>
          <td>
            <Button as={Link} to={`/admin/credit/${u.id}`}>
              Ver Más
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <Container>
      <div className="mb-5">
        <h1 className="text-center">Pagina detalle cliente</h1>
        <Row className="mt-4">
          <Col>
            <h2>ID Client</h2>
          </Col>
          <Col>
            <h4>{user.id}</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Name Client</h2>
          </Col>
          <Col>
            <h4>{user.name}</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>LastName Client</h2>
          </Col>
          <Col>
            <h4>{user.lastname}</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>D.N.I</h2>
          </Col>
          <Col>
            <h4>{user.dni}</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Phone</h2>
          </Col>
          <Col>
            <h4>{user.phone}</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Email</h2>
          </Col>
          <Col>
            <h4>{user.email}</h4>
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
          <tbody>{mapeo()}</tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UserDetail;
