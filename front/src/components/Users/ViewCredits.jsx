import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { findCreditsById } from "../service/querisCredits";
import { useAuth } from '../Context/AuthContext'; 

const VerCreditos = () => {
  const { user } = useAuth(); 
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchCredits = async () => {
      if (user && user.id) {
        try {
          const data = await findCreditsById(user.id); 
          setCredits(data);
        } catch (error) {
          setError("Error al cargar los créditos."); 
          console.error("Error fetching credits:", error);
        }
      } else {
        setError("Usuario no autenticado."); 
      }
    };

    fetchCredits();
  }, [user]);

  return (
    <Container>
      <h1 className="m-4 text-center">Creditos</h1>
      {error && <p className="text-center text-danger">{error}</p>}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Client</th>
            <th>Date</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          {credits && credits.length > 0 ? (
            credits.map((credit) => (
              <tr key={credit.id}>
                <td>{credit.id}</td>
                <td>{credit.clientId}</td>
                <td>{new Date(credit.date).toLocaleDateString()}</td>
                <td>
                  <Button variant="primary">View Details</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No credits found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default VerCreditos;
