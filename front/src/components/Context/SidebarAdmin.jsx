import { Link, Outlet } from "react-router-dom";

import { Button } from "react-bootstrap";

const SidebarAdmin = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-64 text-white bg-blue-600">
        <div className="p-4 text-xl font-bold">Admin Panel</div>
        <nav>
          <ul className="p-4 space-y-4 ">
            <li>
              <Button as={Link} to="dashboardadmin" className="block p-2 transition rounded hover:bg-blue-700 w-100">
                Dashboard
              </Button>
            </li>
            <li>
              <Button as={Link} to="AllUsers" className="block p-2 transition rounded w-100 hover:bg-blue-700">
                Ver Usuarios
              </Button>
            </li>
            <li>
              <Button as={Link} to="cargarCreditos" className="block p-2 transition rounded w-100 hover:bg-blue-700">
                Cargar Creditos
              </Button>
            </li>
            <li>
              <Button as={Link} to="AllCredits" className="block p-2 transition rounded w-100 hover:bg-blue-700">
                Ver Creditos
              </Button>
            </li>
            <li>
              <Button as={Link} to="perfil" className="block p-2 transition rounded w-100 hover:bg-blue-700">
                Perfil de Administrador
              </Button>
            </li>
            <li>
              <Button as={Link} to="/" className="block p-2 transition rounded w-100 hover:bg-red-700 ">
                Volver al Inicio
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarAdmin;
