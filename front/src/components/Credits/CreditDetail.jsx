import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findCreditsById } from "../service/querisCredits";


const CreditDetail = () => {
  const { id } = useParams();
  const [shares, setShares] = useState([]);
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    findCreditsById(id).then((r) => {
      setShares(r.shares);
      setCredit(r);
    });
  }, []);

  const mapeo = () => {
    return shares.map((c) => (
      <tr key={c.id}>
      <td>{c.id}</td>
      <td>{c.expirate_date}</td>
      <td>{c.number_share}</td>
      <td>{c.amount}</td>
      <td>{c.interes}</td>
      <td>{c.state}</td>
    </tr>
    ));
  };
  return (
    <Container className="p-5 bg-white rounded shadow-lg">
      <div className="mb-5">
        <h1 className="mb-4 text-center text-dark display-4">Credit Detail</h1>

        {/* ID Credit Row */}
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary font-weight-bold">ID Credit</h2>
          </Col>
          <Col>
            <h4>{credit.id}</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Monto Total</h2>
          </Col>
          <Col>
            <h4>{credit.amount}</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Interes</h2>
          </Col>
          <Col>
            <h4>{credit.interest}%</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Meses</h2>
          </Col>
          <Col>
            <h4>{credit.months}</h4>
          </Col>
        </Row>
      </div>

      {/* Table Section */}
      <Row className="pt-5">
        <h3 className="mb-4 text-center text-secondary">Credits Details</h3>
        <Table responsive bordered hover className="table-modern">
          <thead className="text-white bg-primary">
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>Month</th>
              <th>Amount</th>
              <th>Interest</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {mapeo()}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CreditDetail;
