import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext"; 
import { getCreditsByUserId } from "../service/querisCredits"; 
import { useNavigate } from "react-router-dom";

const MisCreditos = () => {
  const { user } = useAuth();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCredit = (id) => {
    navigate(`/user/credit/${id}`);
  };

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
    return <p className="text-xl font-semibold text-center text-blue-700">Cargando créditos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <Container
      className="min-h-screen py-8"
      style={{ background: "linear-gradient(135deg, #E0F7FA, #E1F5FE)" }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">Mis Créditos</h1>

      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="min-w-full overflow-hidden border-collapse rounded-lg table-auto"
        >
          <thead>
            <tr className="text-white bg-blue-600">
              <th className="px-6 py-3 text-left">Código</th>
              <th className="px-6 py-3 text-left">Monto</th>
              <th className="px-6 py-3 text-left">Meses</th>
              <th className="px-6 py-3 text-left">Intereses</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr key={credit.id} className="border-b odd:bg-gray-50 even:bg-white">
                <td className="px-6 py-4">{credit.id}</td>
                <td className="px-6 py-4">{credit.amount}</td>
                <td className="px-6 py-4">{credit.months}</td>
                <td className="px-6 py-4">{credit.interest}</td>
                <td className="px-6 py-4">
                  <Button
                    className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => handleCredit(credit.id)}
                  >
                    Ver más
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MisCreditos;
