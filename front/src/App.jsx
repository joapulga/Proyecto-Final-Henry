import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home'; 
import SidebarAdmin from './components/Context/SidebarAdmin'; 
import DashboardAdmin from './components/admin/DashboardAdmin';
import AllUsers from './components/Users/AllUsers';
import PerfilAdmin from './components/admin/PerfilAdmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rutas dentro del Dashboard del Admin */}
        <Route path="/admin" element={<SidebarAdmin />}>
          <Route path="dashboardadmin" element={<DashboardAdmin />} />
          <Route path="solicitudes" element={<AllUsers />} />
          <Route path="perfil" element={<PerfilAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


