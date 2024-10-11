import React, { useState } from 'react';
import axios from 'axios';

function AssignCredit() {
  const [usuarioId, setUsuarioId] = useState('');
  const [monto, setMonto] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [meses, setMeses] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mostrar mensajes de error

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de datos
    if (monto <= 0 || tasaInteres <= 0 || meses <= 0) {
      setErrorMessage('Los valores de monto, tasa de interés y meses deben ser positivos.');
      return;
    }

    const data = {
        creditDate: new Date(),
        amount: monto,
        interest: tasaInteres,
        months: meses,
        idState: "" 
      };

     
    try {
      const response = await axios.post(`http://localhost:3000/credit/${usuarioId}`, data); 
      console.log('Crédito asignado correctamente:', response.data);
      // Limpiar los campos del formulario y mostrar un mensaje de éxito
      setUsuarioId('');
      setMonto(0);
      setTasaInteres(0);
      setMeses(0);
      setErrorMessage('');

    } catch (error) {
      console.error('Error al asignar el crédito:', error);
      setErrorMessage('Ocurrió un error al asignar el crédito. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 py-6 flex flex-col space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">CREA UN CRÉDITO PARA UN USUARIO</h1>
      <label className="text-gray-700 font-bold flex items-center space-x-2">
        <span>ID del usuario:</span>
        <input
          type="text"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
      <label className="text-gray-700 font-bold flex items-center space-x-2">
        <span>Monto del crédito:</span>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
      <label className="text-gray-700 font-bold flex items-center space-x-2">
        <span>Tasa de interés (%):</span>
        <input
          type="number"
          value={tasaInteres}
          onChange={(e) => setTasaInteres(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
      <label className="text-gray-700 font-bold flex items-center space-x-2">
        <span>Lapso de tiempo a pagar (meses):</span>
        <input
          type="number"
          value={meses}
          onChange={(e) => setMeses(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        Asignar Crédito
      </button>
    </form>
  );
}

export default AssignCredit;