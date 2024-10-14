import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findCreditsById } from "../service/querisCredits";

const CreditDetail = () => {
  const { id } = useParams();
  const [creditInfo, setCreditInfo] = useState([]);
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/paymentCredit");
  };

  useEffect(() => {
    findCreditsById(id).then((r) => {
      setCreditInfo(r.shares);
    });
  }, []);

  const mapeo = () => {
    return creditInfo.map((c) => {
      return (
        <tr key={c.id}>
          <td className="px-5 py-5 text-sm border-b border-gray-200">
            {c.expirate_date}
          </td>
          <td className="px-5 py-5 text-sm border-b border-gray-200">
            ${c.amount}
          </td>
          <td className="px-5 py-5 text-sm border-b border-gray-200">
            {c.number_share}
          </td>
          <td className="px-5 py-5 text-sm text-center border-b border-gray-200">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => handlePayment()}
            >
              Pagar
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-blue-600">
          <h2 className="text-2xl font-semibold text-white">
            Detalles del Crédito
          </h2>
        </div>
        <div className="p-6">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Fecha de Cuota
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Monto de Cuota
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Número de Mes
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2 border-gray-200">
                  Acción
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
