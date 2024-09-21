import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllCredits = () => {
  return (
    <Container>
      <h1 className="text-center">Credits</h1>

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
              <Button as={Link} to="/admin/credit">Ver Más</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Button as={Link} to="/admin/credit">Ver Más</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>12/10/24</td>
            <td>
              <Button as={Link} to="/admin/credit">Ver Más</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default AllCredits;
