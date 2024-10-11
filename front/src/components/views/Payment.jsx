import { useState, useEffect } from 'react';
import '../css/Payment.css';
import axios from 'axios';
import {  initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const PaymentCredit = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [initPoint, setInitPoint] = useState(null);

  // Inicializar MercadoPago solo una vez cuando el componente se monta
  useEffect(() => {
    initMercadoPago('APP_USR-74b760ad-679c-4f71-af05-89351b8afb4c', { //cambiar la public key
      locale: "es-AR",
    });
  }, []);

  // Crear una preferencia de pago
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/payment/create", {
        title: "Credit share",
        quantity: 1,
        price: 100,
      });
      
      const { preferenceId, init_point } = response.data;
      
      // Guardar el preferenceId y la URL del init_point
      setPreferenceId(preferenceId);
      setInitPoint(init_point);
    
    } catch (error) {
      console.log("Error al crear la preferencia:##", error);
    }
  };

  // Manejar la compra y redirigir a MercadoPago
  const handleBuy = async () => {
    try {
      await createPreference();
    } catch (error) {
      console.log("Error al crear la preferencia:", error);
    }
  };

  return (
    <div className="card-product-container">
      <div className="card-product">
        <div className="card">
          <img
            src="https://imgv2-2-f.scribdassets.com/img/document/436097729/original/f95547631c/1724931333?v=1"
            alt="Product Image"
          />
          <h3>Crédito</h3>
          <p className="price">100 $</p>
          
          {/* Botón para generar preferencia y redirigir a MercadoPago */}
          <button onClick={handleBuy}>Pagar</button>

          

          {/* Mostrar el botón Wallet si hay un preferenceId */}
          {preferenceId && (
  <div>
        <Wallet
          initialization={{ preferenceId }}
          customization={{ texts: { valueProp: 'smart_option' } }}
        />
      </div>
)}
          
        </div>
      </div>
    </div>
  );
};

export default PaymentCredit;
