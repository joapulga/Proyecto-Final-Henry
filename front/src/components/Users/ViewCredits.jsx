import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext"; 
import { getCreditsByUserId } from "../service/querisCredits"; 

const MisCreditos = () => {
  const { user } = useAuth(); 
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getCreditsByUserId(user.id, user.token);
        setCredits(data); 
      } catch (error) {
        console.error("Error obteniendo los créditos:", error);
        setError("Hubo un problema al cargar los créditos.");
      } finally {
        setLoading(false); 
      }
    };

    if (user && user.id) {
      fetchCredits();
    }
  }, [user]);

  if (loading) {
    return <p className="text-center">Cargando créditos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <Container
      className="min-h-screen py-5"
      style={{ background: "linear-gradient(135deg, #E0F7FA, #E1F5FE)" }}
    >
      <h1 className="m-4 font-bold text-center text-blue-700">Mis Créditos</h1>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="w-full overflow-hidden border-collapse rounded-lg shadow-2xl table-auto"
        >
          <thead>
            <tr className="text-white bg-blue-600">
              <th className="px-4 py-2">Código</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Meses</th>
              <th className="px-4 py-2">Intereses</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr key={credit.id}>
                <td>{credit.id}</td>
                <td>{credit.amount}</td>
                <td>{credit.months}</td>
                <td>{credit.interest}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MisCreditos;