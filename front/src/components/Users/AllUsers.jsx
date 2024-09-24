import { useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUsers } from "../service/queris";
const AllUsers = () => {
  useEffect(() => {
    getUsers().then((r) => {
      console.log(r.data);
    });
  }, []);
  return (
    <Container>
      <h1 className="text-center">Clientes</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DNI</th>
            <th>ID Cred.</th>
            <th>Funtions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123</td>
            <td>42499732</td>
            <td>1,2,3</td>
            <td>
              <Button as={Link} to="/admin/user">
                Ver Más
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>1,2,3</td>
            <td>
              <Button as={Link} to="/admin/user">
                Ver Más
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>12/10/24</td>
            <td>1,2,3</td>
            <td>
              <Button as={Link} to="/admin/user">
                Ver Más
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AllUsers;
