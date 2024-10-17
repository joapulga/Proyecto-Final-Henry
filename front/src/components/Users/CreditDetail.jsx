import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findCreditsById, paidMp } from "../service/querisCredits";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Loading from "../views/common/Loading";

const CreditDetail = () => {
  const { id } = useParams();
  const [creditInfo, setCreditInfo] = useState([]);
  const [mostrarLoading, setMostrarLoading] = useState(null);

  const handlePayment = async (c) => {
    setMostrarLoading(c.id);
    await createPreference({
      title: `Paid Credit ${c.number_share}`,
      quantity: 1,
      price: Number(c.amount),
    });
    setMostrarLoading(null);
  };


  const createPreference = async (date) => {
    try {
      const response = await paidMp(date);
      const { init_point } = response;
      window.location.href = init_point;
    } catch (error) {
      console.log("Error al crear la preferencia:##", error);
    }
  };

  useEffect(() => {
    findCreditsById(id).then((r) => {
      setCreditInfo(r.shares);
    });
    initMercadoPago("APP_USR-74b760ad-679c-4f71-af05-89351b8afb4c", {
      locale: "es-AR",
    });
  }, [id]);

  const mapeo = () => {
    return creditInfo.map((c) => {
      return (
        <tr key={c.id}>
          <td
            type="text"
            className="px-5 py-5 text-sm border-b border-gray-200"
            name="data"
          >
            {c.expirate_date}
          </td>
          <td className="px-5 py-5 text-sm border-b border-gray-200">
            ${c.amount}
          </td>
          <td className="px-5 py-5 text-sm border-b border-gray-200">
            {c.number_share}
          </td>
          <td className="px-5 py-5 text-sm text-center border-b border-gray-200">
            {c.state.name === "Active" ? (
              mostrarLoading === c.id ? (
                <div className="flex items-center justify-center ">
                  <Loading></Loading>
                </div>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  onClick={() => handlePayment(c)}
                >
                  Pagar
                </button>
              )
            ) : (
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                disabled
              >
                Pagada
              </button>
            )}
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
