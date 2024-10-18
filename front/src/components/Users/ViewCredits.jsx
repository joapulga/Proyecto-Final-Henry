import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { getCreditsByUserId } from "../service/querisCredits";
import { useNavigate } from "react-router-dom";

const MisCreditos = () => {
  const { user,token } = useAuth();
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
        const data = await getCreditsByUserId(user.id, token);
        //user.token
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

    const params = new URLSearchParams(window.location.search);
    const externalReference = params.get("external_reference");

    if (externalReference) {
      navigate(`/user/credit/${externalReference}`);
      
    }
  }, [user,navigate]);

  if (loading) {
    return (
      <p className="text-xl font-semibold text-center text-blue-700">
        Cargando créditos...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-gray-100 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">
        Mis Créditos
      </h1>

      <div className="w-full max-w-6xl overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr className="text-lg text-white bg-blue-600 lg:text-xl">
              <th className="px-6 py-4">Código</th>
              <th className="px-6 py-4">Monto</th>
              <th className="px-6 py-4">Meses</th>
              <th className="px-6 py-4">Intereses</th>
              <th className="px-6 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr
                key={credit.id}
                className="text-lg text-gray-700 border-b lg:text-xl"
              >
                <td className="px-6 py-4 text-center">{credit.id}</td>
                <td className="px-6 py-4 text-center">{credit.amount}</td>
                <td className="px-6 py-4 text-center">{credit.months}</td>
                <td className="px-6 py-4 text-center">{credit.interest}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="px-4 py-2 text-lg text-white transition duration-200 bg-green-500 rounded lg:text-xl hover:bg-green-600"
                    onClick={() => handleCredit(credit.id)}
                  >
                    Ver más
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MisCreditos;
