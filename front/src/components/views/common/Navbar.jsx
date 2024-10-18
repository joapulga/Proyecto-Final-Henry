import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext"; // Importa el contexto de autenticación
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { findUserByID, getUserData } from "../../service/querisUsers";

const Navbar = () => {
  const { logout, token } = useAuth(); 
  const [userNav, setUserNav] = useState([]);
  useEffect(() => {
    try {
      const id = JSON.parse(localStorage.getItem("user"));
      findUserByID(id.id,token).then((r) => {
        setUserNav(r.is_admin);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
    
          <Link className="text-3xl font-bold text-white no-underline" to="/">
            MiSistema
          </Link>

          <ul className="flex items-center justify-center space-x-6">
            {userNav.length == 0 ? ( 
              <Button>
                <Link
                  to="/login"
                  className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                >
                  Login
                </Link>
              </Button>
            ) : (
              <>
                {userNav === true ? ( 
                  <>
                    <Button>
                      <Link
                        to="/admin/dashboardadmin"
                        className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                      >
                        Administrador
                      </Link>
                    </Button>
                  </>
                ) : (
                 
                  <>
                    <Button>
                      <Link
                        to="/user/dashboarduser"
                        className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
                      >
                        Usuario
                      </Link>
                    </Button>
                  </>
                )}
                {/* Botón para cerrar sesión */}
                <Button
                  className="text-xl text-white no-underline transition duration-300 hover:text-gray-300 fs-5"
                  onClick={logout}
                >
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
