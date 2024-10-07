import { useAuth } from "../../Context/AuthContext"; // Importa el contexto de autenticación
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth(); // Obtén el usuario y la función de logout del contexto

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo del sistema */}
          <Link className="text-3xl font-bold text-white no-underline" to="/">
            MiSistema
          </Link>

          {/* Menú de navegación */}
          <ul className="flex items-center justify-center space-x-6">
            {!user?.id ? ( // Si no hay usuario logueado
              <Button>
                <Link to="/login" className="text-xl text-white no-underline transition duration-300 hover:text-gray-300">
                  Login
                </Link>
              </Button>
            ) : (
              <>
                {user.is_admin === true ? ( // Si el usuario es administrador
                  <>
                    <Button>
                      <Link to="/admin/dashboardadmin" className="text-xl text-white no-underline transition duration-300 hover:text-gray-300">
                        Administrador
                      </Link>
                    </Button>
                  </>
                ) : (
                  // Si el usuario no es administrador
                  <>
                    <Button>
                      <Link to="/user/dashboarduser" className="text-xl text-white no-underline transition duration-300 hover:text-gray-300">
                        Usuario
                      </Link>
                    </Button>
                  </>
                )}
                {/* Botón para cerrar sesión */}
                <Button className="text-xl text-white no-underline transition duration-300 hover:text-gray-300 fs-5" onClick={logout}>
                  Salir
                </Button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
