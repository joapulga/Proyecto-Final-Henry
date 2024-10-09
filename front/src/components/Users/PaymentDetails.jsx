import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditDetails } from '../service/querisCredits';
import { Button, Table, Container } from 'react-bootstrap';

const PaymentDetails = () => {
  const { id } = useParams();
  const [creditDetails, setCreditDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreditDetails = async () => {
      try {
        const data = await getCreditDetails(id);
        setCreditDetails(data);
      } catch (error) {
        console.error("Error obteniendo los detalles del crédito:", error);
        setError("Hubo un problema al cargar los detalles del crédito.");
      }
    };

    fetchCreditDetails();
  }, [id]);

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!creditDetails) {
    return <p className="text-center">Cargando detalles del crédito...</p>;
  }

  return (
    <Container>
      <h2 className="my-4 text-center">Detalles del Crédito {id}</h2>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Mes</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {creditDetails.monthlyPayments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.month}</td>
              <td>${payment.amount}</td>
              <td>{payment.paid ? 'Pagado' : 'Pendiente'}</td>
              <td>
                {!payment.paid && (
                  <Button
                    variant="success"
                    onClick={() => handlePayment(payment.id)}
                  >
                    Pagar
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const handlePayment = (paymentId) => {
  alert(`Realizar pago para el pago con ID ${paymentId}`);
};

export default PaymentDetails;
