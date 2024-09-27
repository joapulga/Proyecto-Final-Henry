import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home'; 
import SidebarAdmin from './components/Context/SidebarAdmin'; 
import SidebarUsers from './components/Context/SidebarUsers'; // Sidebar de Usuarios
import DashboardAdmin from './components/admin/DashboardAdmin';
import AllUsers from './components/Users/AllUsers';
import PerfilAdmin from './components/admin/PerfilAdmin';
import UserDetail from './components/Users/UserDetail';
import AllCredits from './components/Credits/AllCredits';
import CreditDetail from './components/Credits/CreditDetail';
import Login from './components/views/Login';
import { AuthProvider } from './components/Context/AuthContext';
import DashboardUser from "./components/Users/DashboardUser"
import Credits from "./components/Users/Credits"
import ViewCredits from './components/Users/ViewCredits';
import PerfilUsuario from './components/Users/PerfilUsuario';


const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
              {/* Página de inicio */}
              <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login />}/>

              {/* Rutas del Dashboard del Admin */}
              <Route path="/admin" element={<SidebarAdmin />}>
                <Route path="dashboardadmin" element={<DashboardAdmin />} />
                <Route path="AllUsers" element={<AllUsers />} />
                <Route path={`user/:id`} element={<UserDetail/>} />
                <Route path="credit/:id" element={<CreditDetail />} />
                <Route path="perfil" element={<PerfilAdmin />} />
                <Route path="AllCredits" element={<AllCredits />} />
              </Route>

              {/* Rutas del Dashboard del Usuario */}
              <Route path="/user" element={<SidebarUsers />}>
                <Route path="dashboarduser" element={<DashboardUser />} />
                <Route path="cargarCreditos" element={<Credits />} />
                <Route path="allcredits" element={<ViewCredits />} />
                <Route path="perfiluser" element={<PerfilUsuario />} />
              </Route>
            </Routes>
        </AuthProvider>
      </Router>
  );
};

export default App;
