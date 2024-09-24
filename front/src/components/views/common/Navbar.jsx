
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {

  console.log(localStorage.token)

  const user = JSON.parse(localStorage.getItem("user")) || []
  const [userLogin, setUserLogin] = useState(user)
  
  useEffect(() => {
    if(localStorage.length) {
      setUserLogin(user)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    setUserLogin([])
  }
  console.log(userLogin)
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo del sistema */}
          <Link className="text-3xl font-bold text-white no-underline" to="/">MiSistema</Link>

          {/* Menú de navegación */}
          <ul className="flex items-center justify-center space-x-6">
            
            {!userLogin.token ? (<>
              <Button>
              <Link
                to="/login"
                className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
              >
                Login
              </Link>
            </Button>
            
            </>) : (<> {userLogin.is_admin == true ? (<><Button>
              <Link
                to="/admin"
                className="text-xl text-white no-underline transition duration-300 hover:text-gray-300"
              >
                Admin
              </Link>
            </Button>
            </>) 
            : 
            (<><Button className="text-xl text-white no-underline transition duration-300 hover:text-gray-300 fs-5" onClick={logout}>Salir</Button></>)} 
            </>)}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
