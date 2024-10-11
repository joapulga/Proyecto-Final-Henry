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
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => console.error(error));
  }, []);

  const mapeo = () => {
    return users.map((u) => (
      <tr key={u.id} className="hover:bg-gray-200">
        <td className="px-4 py-2">{u.id}</td>
        <td className="px-4 py-2">{u.name}</td>
        <td className="px-4 py-2">{u.dni}</td>
        <td className="px-4 py-2">{u.phone}</td>
        <td className="px-4 py-2">
          <Button
            as={Link}
            to={`/admin/user/${u.id}`}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Ver Más
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg table-responsive">
      <h2 className="mb-4 text-2xl font-bold text-center">Clientes</h2>
      <table className="min-w-full bg-white border-collapse table-auto table">
        <thead>
          <tr>
            <th className="py-2 border-b">ID</th>
            <th className="py-2 border-b">Nombre</th>
            <th className="py-2 border-b">DNI</th>
            <th className="py-2 border-b">Teléfono</th>
            <th className="py-2 border-b">Funciones</th>
          </tr>
        </thead>
        <tbody>{mapeo()}</tbody>
      </table>
    </div>
  );
};

export default AllUsers;
