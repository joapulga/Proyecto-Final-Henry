import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import SidebarAdmin from "./components/Context/SidebarAdmin";
import SidebarUsers from "./components/Context/SidebarUsers";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import AllUsers from "./components/Users/AllUsers";
import PerfilAdmin from "./components/admin/PerfilAdmin";
import UserDetail from "./components/Users/UserDetail";
import AllCredits from "./components/Credits/AllCredits";
import CreditDetail from "./components/Credits/CreditDetail";
import Login from "./components/views/Login";
import { AuthProvider } from "./components/Context/AuthContext";
import DashboardUser from "./components/Users/DashboardUser";
import Credits from "./components/admin/Credits";
import ViewCredits from "./components/Users/ViewCredits";
import PerfilUsuario from "./components/Users/PerfilUsuario";
import CreditDetails from "./components/Users/CreditDetail";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<SidebarAdmin />}>
            <Route path="dashboardadmin" element={<DashboardAdmin />} />
            <Route path="AllUsers" element={<AllUsers />} />
            <Route path="user" element={<UserDetail />} />
            <Route path="asingCredit" element={<Credits />} />
            <Route path="credit" element={<CreditDetail />} />
            <Route path={`user/:id`} element={<UserDetail />} />
            <Route path="credit/:id" element={<CreditDetail />} />
            <Route path="perfil" element={<PerfilAdmin />} />
            <Route path="AllCredits" element={<AllCredits />} />
          </Route>

          <Route path="/user" element={<SidebarUsers />}>
            <Route path="dashboarduser" element={<DashboardUser />} />
            <Route path="allcredits" element={<ViewCredits />} />
            <Route path="perfiluser" element={<PerfilUsuario />} />
            <Route path="credit/:id" element={<CreditDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
