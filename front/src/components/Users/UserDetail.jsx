import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { findUserByID } from "../service/querisUsers";
import { getCreditsByUserId } from "../service/querisCredits";
import { useAuth } from "../Context/AuthContext";

const UserDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [user, setUser] = useState({});
  const [usersCredits, setCredits] = useState([]);

  useEffect(() => {
    findUserByID(id).then((r) => {
      try {
        setUser(r);
      } catch (error) {
        console.log(error);
      }
    });

    getCreditsByUserId(id, token).then((r) => {
      setCredits(r);
    });
  }, [id, token]);

  const renderCredits = () => {
    return usersCredits.map((credit) => (
      <tr key={credit.id}>
        <td>{credit.id}</td>
        <td>{user.name +  " " + user.lastname}</td>

        <td>{new Date(credit.createdAt).toISOString().split("T")[0]}</td>
        <td>
          <Button as={Link} to={`/admin/credit/${credit.id}`} className="btn-sm">
            Ver Más
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <Container className="p-4 mt-4 rounded shadow-lg bg-light">
      <div className="mb-5">
        <h1 className="text-center text-dark display-4">Detalles del Cliente</h1>

        {/* User Details */}
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">ID Cliente</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.id || "No disponible"}</h4>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">Nombre</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.name || "No disponible"}</h4>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">Apellido</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.lastname || "No disponible"}</h4>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">D.N.I</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.dni || "No disponible"}</h4>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">Teléfono</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.phone || "No disponible"}</h4>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary">Correo Electrónico</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">{user.email || "No disponible"}</h4>
          </Col>
        </Row>
      </div>

      {/* Credits Section */}
      <Row className="pt-5">
        <h3 className="mb-4 text-center text-secondary">Créditos del Cliente</h3>
        <Table responsive striped bordered hover className="table-modern">
          <thead className="text-white bg-dark">
            <tr>
              <th>ID Crédito</th>
              <th>Nombre Cliente</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{renderCredits()}</tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UserDetail;
