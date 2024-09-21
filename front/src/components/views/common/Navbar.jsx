import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo del sistema */}
          <div className="text-3xl font-bold text-white">MiSistema</div>

          {/* Menú de navegación */}
          <ul className="flex items-center justify-center space-x-6">
            <Button>
              <Link
                to="/login"
                className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
              >
                Login
              </Link>
            </Button>

            <Button>
              <Link
                to="/admin"
                className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
              >
                Admin
              </Link>
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
