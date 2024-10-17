import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { findUserByID } from "../service/querisUsers";
import { getCreditsByUserId } from "../service/querisCredits";
import { useAuth } from "../Context/AuthContext";
import { Button } from "react-bootstrap";

const UserDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [user, setUser] = useState({});
  const [usersCredits, setCredits] = useState([]);

  useEffect(() => {
    findUserByID(id).then((r) => setUser(r));
    getCreditsByUserId(id, token).then((r) => setCredits(r));
  }, [id, token]);

  const renderCredits = () => {
    return usersCredits.map((credit) => (
      <tr key={credit.id}>
        <td className="px-5 py-5 text-sm border-b border-gray-200">{credit.id}</td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">
          {user.name + " " + user.lastname}
        </td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">
          {new Date(credit.createdAt).toISOString().split("T")[0]}
        </td>
        <td className="px-5 py-5 text-sm border-b border-gray-200">
          <Button 
            as={Link} 
            to={`/admin/credit/${credit.id}`} 
            className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600"
          >
            Ver Más
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-blue-600">
          <h2 className="text-2xl font-semibold text-white">Detalles del Cliente</h2>
        </div>
        <div className="p-6">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">ID Cliente: {user.id || "No disponible"}</h3>
            <h3 className="text-xl font-semibold">Nombre: {user.name || "No disponible"}</h3>
            <h3 className="text-xl font-semibold">Apellido: {user.lastname || "No disponible"}</h3>
            <h3 className="text-xl font-semibold">D.N.I: {user.dni || "No disponible"}</h3>
            <h3 className="text-xl font-semibold">Teléfono: {user.phone || "No disponible"}</h3>
            <h3 className="text-xl font-semibold">
              Correo Electrónico: {user.email || "No disponible"}
            </h3>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-center">Créditos del Cliente</h3>
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  ID Crédito
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Nombre Cliente
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Fecha
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>{renderCredits()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
