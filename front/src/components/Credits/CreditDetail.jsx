import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const CreditDetail = () => {
  return (
    <Container className="p-5 bg-white rounded shadow-lg">
      <div className="mb-5">
        <h1 className="mb-4 text-center text-dark display-4">Credit Detail</h1>

        {/* ID Credit Row */}
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary font-weight-bold">ID Credit</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">123</h4>
          </Col>
        </Row>

        {/* Client Row */}
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-primary font-weight-bold">Client</h2>
          </Col>
          <Col xs={12} md={6}>
            <h4 className="text-muted">Pedro Pérez</h4>
          </Col>
        </Row>
      </div>

      {/* Table Section */}
      <Row className="pt-5">
        <h3 className="mb-4 text-center text-secondary">Installment Details</h3>
        <Table responsive bordered hover className="table-modern">
          <thead className="text-white bg-primary">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Months</th>
              <th>Interest</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/01/20</td>
              <td>$1,000</td>
              <td>1</td>
              <td>10%</td>
              <td className="text-success font-weight-bold">Active</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CreditDetail;
