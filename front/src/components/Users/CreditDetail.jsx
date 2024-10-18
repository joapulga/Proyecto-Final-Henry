import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findCreditsById, paidMp, paidShare } from "../service/querisCredits";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Loading from "../views/common/Loading";
import Swal from "sweetalert2";

const CreditDetail = () => {
  const { id } = useParams();
  const [creditInfo, setCreditInfo] = useState([]);
  const [mostrarLoading, setMostrarLoading] = useState(null);

  const handlePayment = async (c) => {
    localStorage.setItem("idCred", JSON.stringify(c.id));
    setMostrarLoading(c.id);
    await createPreference({
      id: id,
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
      sessionStorage.setItem("returnFromMercadoPago", "true");
      window.location.href = init_point;
    } catch (error) {
      console.log("Error al crear la preferencia:##", error);
    }
  };

  useEffect(() => {
    const idCred = JSON.parse(localStorage.getItem("idCred"));

    if (sessionStorage.getItem("returnFromMercadoPago") === "true") {
      sessionStorage.removeItem("returnFromMercadoPago");
      Swal.fire({
        icon: "success",
        title: "¡BIENVENIDO!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        fetchCreditInfo();
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "¡BIENVENIDO!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        fetchCreditInfo();
      });
    }
    initMercadoPago("APP_USR-cf1aec24-42b0-490b-92bd-63f3626784ad", {
      locale: "es-AR",
    });

    if (idCred) {
      paidShare(idCred);
    }
  }, [id]);

  const fetchCreditInfo = async () => {
    try {
      const r = await findCreditsById(id);
      setCreditInfo(r.shares);
    } catch (error) {
      console.log("Error al obtener información del crédito:", error);
    }
  };

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
