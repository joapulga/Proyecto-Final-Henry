import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { findAllCredits } from "../service/querisCredits";

const AllCredits = () => {
  const [credits, setCredits] = useState([]);


  useEffect(() => {
    findAllCredits()
      .then((res) => {
        setCredits(res);
        
      })
      .catch((error) => console.error(error));
  }, []);

  const suma = credits.reduce((total, credits) => {
    return total + credits.amount;
  }, 0);

  const mapeo = () => {
  
    return credits.map((c) => (
      <tr key={c.id} className="hover:bg-gray-200">
        <td className="px-4 py-2">{c.id}</td>
        <td className="px-4 py-2">{c.createdAt}</td>
        <td className="px-4 py-2">{c.amount}</td>
        <td className="px-4 py-2">{c.months}</td>
        <td className="px-4 py-2">{c.interest}</td>
        <td className="px-4 py-2">
          <Button
            as={Link}
            to={`/admin/credit/${c.id}`}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Ver Más
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg table-responsive text-center">
      <h2 className="mb-4 text-2xl font-bold text-center">Créditos</h2>
      <table className="min-w-full bg-white border-collapse table-auto">
        <thead>
          <tr>
            <th className="py-2 border-b">ID</th>
            <th className="py-2 border-b">FECHA</th>
            <th className="py-2 border-b">MONTO</th>
            <th className="py-2 border-b">MESES</th>
            <th className="py-2 border-b">INTERESES %</th>
          </tr>
        </thead>
        <tbody>{mapeo()}</tbody>
      </table>
    </div>
  );
};

export default AllCredits;
