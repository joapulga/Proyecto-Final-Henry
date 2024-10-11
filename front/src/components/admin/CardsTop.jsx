import { useEffect, useState } from "react";
import { findAllCredits } from "../service/querisCredits";
import { findAllUsers } from "../service/querisUsers";
import { useAuth } from "../Context/AuthContext";

const CardsTop = () => {
  const [info, setInfo] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    findAllCredits()
      .then((res) => {
        findAllUsers(token).then((r) => {
          const Datos = res.reduce((total, credits) => {
            return {
              tt: total + credits.amount,
              interest: Number(total + credits.interest),
              credOtorgados: res.length,
              TClientes: r.length,
            };
          }, 0);
          setInfo(Datos);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-5">
      <div className="p-4 text-white bg-blue-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Total Prestado</h3>
        <p className="mt-2 text-2xl text-center">{info.tt}</p>
      </div>
      <div className="p-4 text-white bg-green-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Intereses Ganados</h3>
        <p className="mt-2 text-2xl text-center">{info.interest}%</p>
      </div>
      <div className="p-4 text-white bg-yellow-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Cap. Recuperado</h3>
        <p className="mt-2 text-2xl text-center">20%</p>
      </div>
      <div className="p-4 text-white bg-red-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Créditos otorgados</h3>
        <p className="mt-2 text-2xl text-center">{info.credOtorgados}</p>
      </div>
      <div className="p-4 text-white bg-purple-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Num. Clientes</h3>
        <p className="mt-2 text-2xl text-center">{info.TClientes}</p>
      </div>
    </div>
  );
};

export default CardsTop;
