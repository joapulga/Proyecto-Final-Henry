import { useState } from 'react';
import ChatBot from "react-simple-chatbot";
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
        { value: 'creditos', label: 'Ver mis créditos', trigger: 'creditos-info' },
        { value: 'cuenta', label: 'Ayuda con mi cuenta', trigger: 'cuenta-help' },
        { value: 'solicitudes', label: 'Información sobre solicitudes', trigger: 'solicitudes-info' },
        { value: 'admin', label: 'Soy administrador y quiero gestionar usuarios', trigger: 'admin-help' },
      ],
    },
    {
      id: 'creditos-info',
      message: 'Puedes ver los detalles de tus créditos en la sección "Mis Créditos". ¿Quieres más información sobre un crédito específico?',
      trigger: 'creditos-options',
    },
    {
      id: 'creditos-options',
      options: [
        { value: 'ver-mas', label: 'Ver más detalles', trigger: 'ver-mas-credito' },
        { value: 'exit', label: 'Gracias, eso es todo', trigger: 'goodbye' },
      ],
    },
    {
      id: 'ver-mas-credito',
      message: 'Haz clic en el botón "Ver Más" en tu tabla de créditos para ver detalles completos sobre el crédito seleccionado.',
      trigger: 'more-options',
    },
    {
      id: 'cuenta-help',
      message: '¿Cuál es tu problema con la cuenta?',
      trigger: 'cuenta-options',
    },
    {
      id: 'cuenta-options',
      options: [
        { value: 'actualizar-perfil', label: 'Actualizar mis datos de perfil', trigger: 'update-help' },
        { value: 'solicitud-aprobacion', label: 'Solicitar acceso a la cuenta', trigger: 'solicitud-help' },
        { value: 'exit', label: 'Gracias, no necesito más ayuda.', trigger: 'goodbye' },
      ],
    },
    {
      id: 'update-help',
      message: 'Puedes actualizar tus datos desde la sección "Perfil" en tu cuenta.',
      trigger: 'more-options',
    },
    {
      id: 'solicitud-help',
      message: 'Los administradores aprobarán o rechazarán tu solicitud de acceso. Recibirás un correo para configurar tu contraseña si tu solicitud es aprobada.',
      trigger: 'more-options',
    },
    {
      id: 'solicitudes-info',
      message: '¿Qué información necesitas sobre las solicitudes?',
      trigger: 'solicitudes-options',
    },
    {
      id: 'solicitudes-options',
      options: [
        { value: 'estado-solicitud', label: 'Ver estado de mi solicitud', trigger: 'estado-solicitud' },
        { value: 'crear-solicitud', label: 'Enviar una nueva solicitud', trigger: 'crear-solicitud' },
        { value: 'exit', label: 'Gracias, eso es todo', trigger: 'goodbye' },
      ],
    },
    {
      id: 'estado-solicitud',
      message: 'Puedes revisar el estado de tus solicitudes desde la sección "Solicitudes".',
      trigger: 'more-options',
    },
    {
      id: 'crear-solicitud',
      message: 'Para enviar una nueva solicitud, llena el formulario correspondiente y espera la aprobación del administrador.',
      trigger: 'more-options',
    },
    {
      id: 'admin-help',
      message: '¿Qué deseas hacer como administrador?',
      trigger: 'admin-options',
    },
    {
      id: 'admin-options',
      options: [
        { value: 'aprobar-usuarios', label: 'Aprobar o rechazar solicitudes de usuarios', trigger: 'aprobar-usuarios-info' },
        { value: 'gestionar-perfiles', label: 'Gestionar perfiles de usuarios', trigger: 'gestionar-perfiles-info' },
        { value: 'exit', label: 'Eso es todo, gracias', trigger: 'goodbye' },
      ],
    },
    {
      id: 'aprobar-usuarios-info',
      message: 'Puedes aprobar o rechazar solicitudes desde el panel de administración en la sección "Solicitudes".',
      trigger: 'more-options',
    },
    {
      id: 'gestionar-perfiles-info',
      message: 'Los perfiles de usuarios pueden ser gestionados y actualizados desde la sección "Usuarios" del panel de administración.',
      trigger: 'more-options',
    },
    {
      id: 'goodbye',
      message: 'Gracias por usar nuestro asistente virtual. ¡Hasta luego!',
      end: true,
    },
    {
      id: 'more-options',
      options: [
        { value: 'creditos', label: 'Ver mis créditos', trigger: 'creditos-info' },
        { value: 'cuenta', label: 'Ayuda con mi cuenta', trigger: 'cuenta-help' },
        { value: 'solicitudes', label: 'Información sobre solicitudes', trigger: 'solicitudes-info' },
        { value: 'admin', label: 'Soy administrador y quiero gestionar usuarios', trigger: 'admin-help' },
        { value: 'exit', label: 'Gracias, eso es todo', trigger: 'goodbye' },
      ],
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
