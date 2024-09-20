import { Link, Outlet } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-64 text-white bg-blue-600">
        <div className="p-4 text-xl font-bold">
          Admin Panel
        </div>
        <nav>
          <ul className="p-4 space-y-4">
            <li>
              <Link to="/admin/dashboardadmin" className="block p-2 transition rounded hover:bg-blue-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/solicitudes" className="block p-2 transition rounded hover:bg-blue-700">
                Ver Usuarios
              </Link>
            </li>
            <li>
              <Link to="/admin/perfil" className="block p-2 transition rounded hover:bg-blue-700">
                Perfil de Administrador
              </Link>
            </li>
            <li>
              <Link to="/" className="block p-2 transition rounded hover:bg-red-700">
                Volver al Inicio
              </Link>
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
