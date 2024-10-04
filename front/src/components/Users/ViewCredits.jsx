import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { findAllCreditsUsers, findCreditsById } from "../service/querisCredits";
import { useAuth } from '../Context/AuthContext'; 

const VerCreditos = () => {
  const { user } = useAuth(); 
  const [credits, setCredits] = useState([]);


  
  useEffect(() => {
    findAllCreditsUsers(user.id).then((res) => {
      try {
        setCredits(res);
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const mapeo = () => {
    return credits.map((u) => {
      return (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.amount}</td>
          <td>{u.months}</td>
          <td>{u.interest}</td>
          <td>
            <Button as={Link} to={`/admin/credit/${u.id}`} >
              Ver Más
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <Container>
      <h1 className="m-4 text-center">Creditos</h1>
     

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Monto</th>
            <th>Meses</th>
            <th>Intereses</th>
            <th>Funciones</th>
          </tr>
        </thead>
        <tbody>
          {mapeo()}
        </tbody>
      </Table>
    </Container>
  );
};

export default VerCreditos;
