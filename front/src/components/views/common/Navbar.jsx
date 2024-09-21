import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-white">MiSistema</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/admin" className="text-white transition duration-300 hover:text-gray-300">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
