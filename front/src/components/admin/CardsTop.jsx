
const CardsTop = () => {
  return (
    <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-5">
      <div className="p-4 text-white bg-blue-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Total Prestado</h3>
        <p className="mt-2 text-2xl text-center">$$$$$$</p>
      </div>
      <div className="p-4 text-white bg-green-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Intereses Ganados</h3>
        <p className="mt-2 text-2xl text-center">10%</p>
      </div>
      <div className="p-4 text-white bg-yellow-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Cap. Recuperado</h3>
        <p className="mt-2 text-2xl text-center">20%</p>
      </div>
      <div className="p-4 text-white bg-red-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Créditos otorgados</h3>
        <p className="mt-2 text-2xl text-center">100</p>
      </div>
      <div className="p-4 text-white bg-purple-600 rounded-lg shadow-lg">
        <h3 className="font-semibold text-center">Num. Clientes</h3>
        <p className="mt-2 text-2xl text-center">200</p>
      </div>
    </div>
  );
};

export default CardsTop;

