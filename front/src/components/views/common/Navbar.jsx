import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userLogin, setUserLogin] = useState(() => {
    // Obtiene el usuario de localStorage solo una vez cuando el componente se monta
    return JSON.parse(localStorage.getItem("user")) || [];
  });

  const logout = () => {
    localStorage.removeItem("user");
    setUserLogin([]);
  };

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
            {!userLogin.token ? (
              <>
                <Button>
                  <Link
                    to="/login"
                    className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                  >
                    Login
                  </Link>
                </Button>
              </>
            ) : (
              <>
                {userLogin.is_admin ? (
                  <>
                    {/* Botón de Admin */}
                    <Button>
                      <Link
                        to="/admin"
                        className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                      >
                        Administrador
                      </Link>
                    </Button>
                    <Button
                      className="text-xl text-white no-underline transition duration-300 hover:text-gray-300 fs-5"
                      onClick={logout}
                    >
                      Salir
                    </Button>
                  </>
                ) : (
                  <>
                    {/* Botón de User (solo para usuarios no admin) */}
                    <Button>
                      <Link
                        to="/user"
                        className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                      >
                        Usuario
                      </Link>
                    </Button>
                    <Button
                      className="text-xl text-white no-underline transition duration-300 hover:text-gray-300 fs-5"
                      onClick={logout}
                    >
                      Salir
                    </Button>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
