import { useState } from 'react';
import { createCredit } from '../service/CreditApi';

const Credits = () => {
  const [creditData, setCreditData] = useState({
    clientId: '',
    creditDate: '',
    amount: '',
    months: '',
    interest: '',
    idState: ''
  });

  const handleChange = (e) => {
    setCreditData({ ...creditData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCredit(creditData);
      console.log('Crédito creado exitosamente:', response);
    } catch (error) {
      console.error('Error al crear el crédito:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Cargar Crédito</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Fecha del Crédito</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              name="creditDate"
              value={creditData.creditDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Monto</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              name="amount"
              value={creditData.amount}
              onChange={handleChange}
              placeholder="Ingrese el monto del crédito"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Meses</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              name="months"
              value={creditData.months}
              onChange={handleChange}
              placeholder="Ingrese la cantidad de meses"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Interés</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded"
              name="interest"
              value={creditData.interest}
              onChange={handleChange}
              placeholder="Ingrese el interés"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Crear Crédito
          </button>
        </form>
      </div>
    </div>
  );
};

export default Credits;
