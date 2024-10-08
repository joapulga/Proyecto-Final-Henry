import { useEffect, useState } from "react";
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useAuth } from '../Context/AuthContext';
import { getUserData } from '../service/querisUsers'; 
import { getCreditsByUserId } from '../service/querisCredits'; 
import { FaUser, FaCreditCard } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';  // Importa Bar de react-chartjs-2
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas necesarias para Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardUser = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
  });
  const [credits, setCredits] = useState([]); 
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

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getCreditsByUserId(user.id, user.token);
        setCredits(data); 
      } catch (error) {
        console.error("Error obteniendo los créditos:", error);
        setError("Hubo un problema al cargar los créditos.");
      } finally {
        setLoading(false); 
      }
    };

    if (user && user.id) {
      fetchCredits();
    }
  }, [user]);

  if (loading) {
    return <p className="text-center">Cargando créditos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // Configuración del gráfico de barras
  const chartData = {
    labels: credits.map((credit) => new Date(credit.date).toLocaleDateString()), // Fechas como etiquetas
    datasets: [
      {
        label: "Montos de Créditos",
        data: credits.map((credit) => credit.amount), // Montos de los créditos
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Créditos por Fecha',
      },
    },
  };

  return (
    <Container 
      fluid 
      className="p-4" 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #e0f7fa, #ffffff)', // Gradiente de fondo
        borderRadius: '12px'
      }}
    >
      {error && <p className="text-center text-danger">{error}</p>}

      <Row className="justify-content-center">
        <Col md={10}>
          <div className="mb-5 text-center">
            <h1 className="display-4" style={{ color: '#007BFF' }}>¡Bienvenido, {userData.name}!</h1>
            <p className="lead" style={{ color: '#555' }}>
              Aquí puedes ver tus datos personales y tus créditos disponibles.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="g-4 justify-content-between">
        {/* Datos del usuario */}
        <Col md={5}>
          <Card className="p-3 mb-3 shadow-lg" style={{ borderRadius: '16px', backgroundColor: '#f8f9fa' }}>
            <Card.Body>
              <div className="mb-3 d-flex align-items-center">
                <FaUser size={30} className="me-3 text-primary" />
                <h4 className="m-0" style={{ color: '#343a40' }}>Datos del Usuario</h4>
              </div>
              <Table responsive hover className="mt-3 mb-0">
                <tbody>
                  <tr>
                    <td><strong>Nombre</strong></td>
                    <td>{userData.name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <td><strong>DNI</strong></td>
                    <td>{userData.dni}</td>
                  </tr>
                  <tr>
                    <td><strong>Teléfono</strong></td>
                    <td>{userData.telefono}</td>
                  </tr>
                  <tr>
                    <td><strong>Dirección</strong></td>
                    <td>{userData.direccion}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Créditos del usuario */}
        <Col md={6}>
          <Card className="p-3 mb-3 shadow-lg" style={{ borderRadius: '16px', backgroundColor: '#f8f9fa' }}>
            <Card.Body>
              <div className="mb-3 d-flex align-items-center">
                <FaCreditCard size={30} className="me-3 text-success" />
                <h4 className="m-0" style={{ color: '#343a40' }}>Créditos</h4>
              </div>
              <Table responsive hover className="mt-3 mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {credits && credits.length > 0 ? (
  credits.map((credit) => {
    console.log(credit); // Verifica si credit.date tiene un valor adecuado
    return (
      <tr key={credit.id}>
        <td>{credit.id}</td>
        <td>{credit.date ? new Date(credit.date).toLocaleDateString() : 'Fecha no disponible'}</td>
        <td>${credit.amount}</td>
        <td>
          <Button
            variant="primary"
            size="sm"
            className="me-1"
            onClick={() => alert(`Pagar crédito ${credit.id}`)}
            as={Link} to={"./views/payment"}
          >
            Pagar
          </Button>
        </td>
      </tr>
    );
  })
) : (
  <tr>
    <td colSpan="5" className="text-center">
      No se encontraron créditos
    </td>
  </tr>
)}

                </tbody>
              </Table>

              {/* Gráfico de Créditos */}
              <div className="mt-5">
                <h5 className="mb-4 text-center" style={{ color: '#555' }}>Montos de tus créditos a lo largo del tiempo</h5>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardUser;
