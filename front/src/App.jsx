
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home'; 
import SidebarAdmin from './components/Context/SidebarAdmin'; 
import DashboardAdmin from './components/admin/DashboardAdmin';
import AllUsers from './components/Users/AllUsers';
import PerfilAdmin from './components/admin/PerfilAdmin';
import UserDetail from './components/Users/UserDetail';
import AllCredits from './components/Credits/AllCredits';
import CreditDetail from './components/Credits/CreditDetail';
import Login from './components/views/Login';
import { AuthProvider } from './components/Context/AuthContext';

const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login />}/>
              {/* Rutas dentro del Dashboard del Admin */}
              <Route path="/admin" element={<SidebarAdmin />}>
                <Route path="user" element={<UserDetail />} />
                <Route path="credit" element={<CreditDetail />} />
                <Route path="dashboardadmin" element={<DashboardAdmin />} />
                <Route path="AllUsers" element={<AllUsers />} />
                <Route path="perfil" element={<PerfilAdmin />} />
                <Route path="AllCredits" element={<AllCredits />} />
              </Route>
            </Routes>
        </AuthProvider>
      </Router>
  );
};

export default App;
