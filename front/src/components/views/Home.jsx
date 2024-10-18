import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import { FaUserPlus } from "react-icons/fa";
import heroImage from "../../assets/heroImage.jpg";
import Register from "./Register";
import ChatBotComponent from "../ChatBot/ChatBotComponent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div
        className="flex items-center justify-center text-white bg-center bg-cover h-96"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="p-6 text-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="mb-4 text-5xl font-bold animate-fadeInDown">
            Bienvenido al Sistema de Gestión
          </h1>
          <p className="mb-6 text-lg animate-fadeInUp">
            Completa el formulario para crear una cuenta
          </p>
          <a
            href="#cuenta"
            className="px-6 py-2 text-blue-600 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 animate-fadeIn"
          >
            Crear cuenta <FaUserPlus className="inline ml-2" />
          </a>
        </div>
      </div>
      <Register></Register>

      <ChatBotComponent />

      <Footer />
    </div>
  );
};

export default Home;
