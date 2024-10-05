import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FaCommentDots } from 'react-icons/fa';

const ChatBotComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const DiseñoChat = {
    background: '#f5f8fb',
    fontFamily: 'monospace',
    headerBgColor: 'green',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'green',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const steps = [
    {
      id: '1',
      message: '¡Hola! ¿En qué puedo ayudarte hoy?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'services', label: '¿Qué servicios ofrecen?', trigger: 'services' },
        { value: 'account', label: 'Necesito ayuda con mi cuenta', trigger: 'account-help' },
        { value: 'support', label: 'Requiero asistencia técnica', trigger: 'technical-support' },
        { value: 'payment', label: 'Información sobre pagos', trigger: 'payment-info' },
      ],
    },
    {
      id: 'services',
      message: 'Ofrecemos administración de servicios de Internet, gestión de usuarios, asistencias técnicas y más.',
      trigger: 'services-options',
    },
    {
      id: 'services-options',
      options: [
        { value: 'more-info', label: 'Quiero más información', trigger: 'service-details' },
        { value: 'exit', label: 'Eso es todo, gracias.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'service-details',
      message: 'Te ayudamos con relevamientos técnicos, gestión de equipos, etc. ¿Necesitas ayuda con algo más?',
      trigger: 'more-options',
    },
    {
      id: 'more-options',
      options: [
        { value: 'services', label: '¿Qué servicios ofrecen?', trigger: 'services' },
        { value: 'account', label: 'Necesito ayuda con mi cuenta', trigger: 'account-help' },
        { value: 'support', label: 'Requiero asistencia técnica', trigger: 'technical-support' },
        { value: 'payment', label: 'Información sobre pagos', trigger: 'payment-info' },
        { value: 'exit', label: 'Gracias, eso es todo.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'account-help',
      message: '¿Cuál es tu problema con la cuenta?',
      trigger: 'account-options',
    },
    {
      id: 'account-options',
      options: [
        { value: 'login', label: 'No puedo iniciar sesión', trigger: 'login-help' },
        { value: 'update', label: 'Quiero actualizar mis datos de perfil', trigger: 'update-help' },
        { value: 'exit', label: 'Gracias, no necesito más ayuda.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'login-help',
      message: 'Intenta restablecer tu contraseña o verifica si tu cuenta fue aprobada.',
      trigger: 'more-options',
    },
    {
      id: 'update-help',
      message: 'Puedes actualizar tus datos desde la sección "Perfil" en tu cuenta.',
      trigger: 'more-options',
    },
    {
      id: 'technical-support',
      message: '¿Qué tipo de asistencia técnica necesitas?',
      trigger: 'technical-options',
    },
    {
      id: 'technical-options',
      options: [
        { value: 'connection', label: 'Problemas con la conexión', trigger: 'connection-help' },
        { value: 'equipment', label: 'Problemas con el equipo', trigger: 'equipment-help' },
        { value: 'exit', label: 'Gracias, eso es todo.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'connection-help',
      message: 'Reinicia tu equipo y revisa las conexiones. Si persiste, contacta al soporte.',
      trigger: 'more-options',
    },
    {
      id: 'equipment-help',
      message: 'Verifica que el equipo esté correctamente configurado. Si el problema sigue, agenda una asistencia.',
      trigger: 'more-options', 
    },
    {
      id: 'payment-info',
      message: '¿Qué información sobre pagos necesitas?',
      trigger: 'payment-options',
    },
    {
      id: 'payment-options',
      options: [
        { value: 'due', label: '¿Cómo puedo ver mi factura?', trigger: 'due-help' },
        { value: 'methods', label: '¿Qué métodos de pago aceptan?', trigger: 'payment-methods' },
        { value: 'exit', label: 'Gracias, no necesito más ayuda.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'due-help',
      message: 'Puedes ver tu factura en la sección "Facturación" de tu perfil.',
      trigger: 'more-options',
    },
    {
      id: 'payment-methods',
      message: 'Aceptamos pagos por tarjeta, transferencia bancaria y PayPal.',
      trigger: 'more-options', 
    },
    {
      id: 'goodbye',
      message: 'Gracias por usar nuestro asistente virtual. ¡Hasta luego!',
      end: true,
    },
  ];

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed p-3 text-white transition duration-300 bg-green-600 rounded-full shadow-lg bottom-5 right-5 hover:bg-green-700"
      >
        <FaCommentDots size={24} />
      </button>

      {/* ChatBot */}
      {isChatOpen && (
        <div className="fixed z-50 bottom-20 right-5">
          <ThemeProvider theme={DiseñoChat}>
            <ChatBot
              headerTitle="Asistencia Virtual"
              steps={steps}
              recognitionEnable={true}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;
