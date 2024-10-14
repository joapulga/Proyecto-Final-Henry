import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { createCredit } from "../service/querisCredits";
import { useAuth } from "../Context/AuthContext";
import { findAllUsers } from "../service/querisUsers";
import { Dropdown } from "react-bootstrap";
//import "../css/selectCredit.css"

const Credits = () => {
  const { token } = useAuth();

  const [selectedOption, setSelectedOption] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    findAllUsers(token).then((r) => {
      const us = r.filter((user) => !user.is_admin);
      setUsers(us);
    });
  }, []);
  const carga = () => {
    return users.map((r) => (  
      <option key={r.id} value={r.id}>
        {r.name}
      </option>
    ));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await createCredit(selectedOption, {
        amount: Number(e.target.amount.value),
        months: Number(e.target.months.value),
        interest: e.target.interest.value,
      }).then((r) => {
        if (r) {
          Swal.fire({
            icon: "success",
            title: "¡Credito cargado!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Error en la carga de credito",
          text: error,
        });
      }
      console.error("Error al crear el crédito:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Cargar Crédito</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Usuario</label>
            {/* <input
              type="string"
              className="w-full p-2 border border-gray-300 rounded"
              name="id"
              
            /> */}
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              className="w-100 select-container"
            >
              <option value="" disabled>
                Opciones
              </option>
              {carga()}
            </select>
           
          </div>
          <div className="mb-4">
            <label className="block mb-2">Monto</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              name="amount"
              placeholder="Ingrese el monto del crédito"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Meses</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              name="months"
              placeholder="Ingrese la cantidad de meses"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Interés</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded"
              name="interest"
              placeholder="Ingrese el interés"
            />
          </div>
          <button
            type="click"
            className="w-full p-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Crear Crédito
          </button>
        </form>
      </div>
    </div>
  );
};

export default Credits;
