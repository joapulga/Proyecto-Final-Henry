import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findCreditsById } from "../service/querisCredits";

const CreditDetail = () => {
  const { id } = useParams();
  const [shares, setShares] = useState([]);
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    findCreditsById(id).then((r) => {
      setShares(r.shares);
      setCredit(r);
    });
  }, [id]);

  const mapeo = () => {
    return shares.map((c) => (
      <tr key={c.id}>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{c.id}</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{c.expirate_date}</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{c.number_share}</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">${c.amount}</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{c.interes}%</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{c.state}</td>
      </tr>
    ));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-blue-600">
          <h2 className="text-2xl font-semibold text-white">Detalles del Crédito</h2>
        </div>
        <div className="p-6">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">ID Crédito: {credit.id}</h3>
            <h3 className="text-xl font-semibold">Monto Total: ${credit.amount}</h3>
            <h3 className="text-xl font-semibold">Interés: {credit.interest}%</h3>
            <h3 className="text-xl font-semibold">Meses: {credit.months}</h3>
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  ID
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Fecha
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Mes
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Monto
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Interés
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>{mapeo()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditDetail;
