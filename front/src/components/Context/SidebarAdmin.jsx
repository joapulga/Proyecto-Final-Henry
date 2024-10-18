import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SidebarAdmin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } flex-shrink-0 text-white bg-blue-600 transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 text-xl font-bold">
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Admin Panel
          </span>
          <Button
            onClick={toggleSidebar}
            className="text-white bg-transparent border-0 focus:outline-none focus:ring-0"
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </Button>
        </div>
        <nav>
          <ul className="p-4 space-y-4">
            <li>
              <Button
                as={Link}
                to="dashboardadmin"
                className="block p-2 transition rounded hover:bg-blue-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Dashboard
                </span>
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to="AllUsers"
                className="block p-2 transition rounded hover:bg-blue-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Ver Usuarios
                </span>
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to="asingCredit"
                className="block p-2 transition rounded hover:bg-blue-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Cargar Créditos
                </span>
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to="AllCredits"
                className="block p-2 transition rounded hover:bg-blue-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Ver Créditos
                </span>
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to="perfil"
                className="block p-2 transition rounded hover:bg-blue-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Perfil de Administrador
                </span>
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to="/"
                className="block p-2 transition rounded hover:bg-red-700 w-100"
              >
                <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                  Volver al Inicio
                </span>
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
