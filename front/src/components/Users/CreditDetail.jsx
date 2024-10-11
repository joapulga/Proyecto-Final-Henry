import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCreditDetailsById } from '../service/querisCredits';

const CreditDetail = () => {
  const { id } = useParams();
  const [installments, setInstallments] = useState([]);
  const [creditInfo, setCreditInfo] = useState(null);
  const navigate = useNavigate()

  const handlePayment = () => {
    navigate("/paymentCredit")
  }

  useEffect(() => {
    const fetchCreditDetails = async () => {
      const creditData = await getCreditDetailsById(id);
      console.log('Datos del crédito:', creditData);

      if (!creditData) {
        console.error('No se encontraron datos del crédito.');
        return;
      }

      setCreditInfo(creditData);

      const { createdAt, amount, months, interest } = creditData;

      if (!createdAt) {
        console.error('createdAt no es válido:', createdAt);
        return;
      }

      const calculatedInstallments = [];
      const monthlyInterestRate = parseFloat(interest);
      const totalAmount = amount * (1 + monthlyInterestRate);
      const monthlyPayment = totalAmount / months;

      for (let month = 1; month <= months; month++) {
        const installmentDate = new Date(createdAt);
        if (isNaN(installmentDate)) {
          console.error('Fecha de instalación no válida:', createdAt);
          return;
        }

        installmentDate.setMonth(installmentDate.getMonth() + month);
        calculatedInstallments.push({
          date: installmentDate.toISOString().split('T')[0],
          amount: monthlyPayment.toFixed(2),
          month: month,
        });
      }
      setInstallments(calculatedInstallments);
    };

    fetchCreditDetails();
  }, [id]);

  if (!creditInfo)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Cargando...</p>
      </div>
    );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-blue-600">
          <h2 className="text-2xl font-semibold text-white">Detalles del Crédito</h2>
        </div>
        <div className="p-6">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Fecha de Cuota
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Monto de Cuota
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase border-b-2 border-gray-200">
                  Número de Mes
                </th>
                <th className="px-5 py-3 text-sm font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2 border-gray-200">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {installments.map((installment, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 text-sm border-b border-gray-200">
                    {installment.date}
                  </td>
                  <td className="px-5 py-5 text-sm border-b border-gray-200">
                    ${installment.amount}
                  </td>
                  <td className="px-5 py-5 text-sm border-b border-gray-200">
                    {installment.month}
                  </td>
                  <td className="px-5 py-5 text-sm text-center border-b border-gray-200">
                    <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => handlePayment()}
                    >
                      Pagar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditDetail;
