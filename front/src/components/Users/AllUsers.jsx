import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { findAllUsers } from "../service/querisUsers";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const AllUsers = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    findAllUsers(token)
      .then((res) => setUsers(res))
      .catch((error) => console.error(error));
  }, [token]);

  const mapeo = () => {
    return users.map((u) => (
      <tr key={u.id} className="hover:bg-gray-100">
        <td className="px-2 py-3 text-sm">{u.id}</td>
        <td className="px-2 py-3 text-sm">{u.name}</td>
        <td className="px-2 py-3 text-sm">{u.dni}</td>
        <td className="px-2 py-3 text-sm">{u.phone}</td>
        <td className="px-2 py-3 text-sm">
          <Button
            as={Link}
            to={`/admin/user/${u.id}`}
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
      <h2 className="mb-4 text-2xl font-bold text-center">Clientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-sm font-semibold text-left">ID</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Nombre</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">DNI</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Teléfono</th>
              <th className="px-4 py-2 text-sm font-semibold text-left">Funciones</th>
            </tr>
          </thead>
          <tbody>{mapeo()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
