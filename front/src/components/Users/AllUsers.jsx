import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const AllUsers = ({ users }) => {
  const mapeo = () => {
    return users.map((u) => {
      return (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.dni}</td>
          <td>{u.phone}</td>
          <td>
            <Button as={Link} to="/admin/user">
              Ver Más
            </Button>
          </td>
        </tr>
      );
    });
  };
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
        <tbody>{mapeo()}</tbody>
      </Table>
    </Container>
  );
};

export default AllUsers;
