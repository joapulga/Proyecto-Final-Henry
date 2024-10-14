import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { findAllCredits } from "../service/querisCredits";

const AllCredits = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    findAllCredits()
      .then((res) => setCredits(res))
      .catch((error) => console.error(error));
  }, []);

  const suma = credits.reduce((total, credit) => total + credit.amount, 0);

  const mapeo = () => {
    return credits.map((c) => (
      <tr key={c.id} className="hover:bg-gray-100">
        <td className="px-1 py-3 text-sm">{c.id}</td>
        <td className="px-1 py-3 text-sm">{c.createdAt.split('T')[0]}</td>
        <td className="px-1 py-3 text-sm">{c.amount}</td>
        <td className="px-1 py-3 text-sm">{c.months}</td>
        <td className="px-1 py-3 text-sm">{c.interest}</td>
        <td className="px-1 py-3 text-sm">
          <Button
            as={Link}
            to={`/admin/credit/${c.id}`}
            className="w-[100px] h-[35px] px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Ver Más
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-center">Créditos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-sm font-semibold text-left">ID</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Fecha</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Monto</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Meses</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Intereses</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Funciones</th>
            </tr>
          </thead>
          <tbody>{mapeo()}</tbody>
        </table>
      </div>
      <p className="mt-4 font-bold text-center">Suma total de créditos: {suma}</p>
    </div>
  );
};

export default AllCredits;
