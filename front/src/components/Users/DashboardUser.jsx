import { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { useAuth } from '../Context/AuthContext';
import { getUserData } from '../service/querisUsers'; 
import { getCreditsByUserId } from '../service/querisCredits'; 
import { FaUser, FaCreditCard } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';  // Importa Bar de react-chartjs-2
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas necesarias para Chart.js
//hola
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardUser = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
  });
  const [credits, setCredits] = useState([]); // Inicializado como array vacío
  const [error, setError] = useState(null);

  // Obtener datos del usuario
  useEffect(() => {
    if (user && user.id) {
      getUserData(user.id)
        .then((data) => {
          setUserData({
            name: data.name,
            email: data.email,
            dni: data.dni,
            telefono: data.telefono,
            direccion: data.direccion,
          });
        })
        .catch((error) => {
          setError("Error al obtener los datos del usuario.");
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  // Obtener créditos del usuario
  useEffect(() => {
    if (user && user.id) {
      findCreditsById(user.id)
        .then((data) => {
          // Asegurarse de que los datos sean un array antes de asignarlos
          setCredits(Array.isArray(data) ? data : []); 
        })
        .catch((error) => {
          setError("Error al cargar los créditos.");
          console.error("Error fetching credits:", error);
        });
    }
  }, [user]);

  return (
    <Container>
      
      {error && <p className="text-center text-danger">{error}</p>}
      
      <Row>
        {/* Tabla de datos del usuario */}
        <Col md={6}>
          <h2>Datos del Usuario</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Campo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre</td>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>DNI</td>
                <td>{userData.dni}</td>
              </tr>
              <tr>
                <td>Teléfono</td>
                <td>{userData.telefono}</td>
              </tr>
              <tr>
                <td>Dirección</td>
                <td>{userData.direccion}</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        {/* Tabla de créditos */}
        <Col md={6}>
          <h2>Créditos</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>ID Cliente</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {credits && credits.length > 0 ? (
                credits.map((credit) => (
                  <tr key={credit.id}>
                    <td>{credit.id}</td>
                    <td>{credit.clientId}</td>
                    <td>{new Date(credit.date).toLocaleDateString()}</td>
                    <td>{credit.amount}</td>
                    <td>{credit.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No se encontraron créditos
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardUser;
