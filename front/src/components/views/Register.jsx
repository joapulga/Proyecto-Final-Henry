import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Register = () => {

  const { register, error: authError } = useAuth();


  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
  
    switch (name) {
      case "name":
        if (!value) error = "El nombre es obligatorio";
        else if (value.length < 2 || value.length > 15)
          error = "El nombre debe tener entre 2 y 15 caracteres";
        break;
      case "lastname":
        if (!value) error = "El apellido es obligatorio";
        else if (value.length < 2 || value.length > 15)
          error = "El apellido debe tener entre 2 y 15 caracteres";
        break;
      case "dni":
        if (!value) error = "El DNI es obligatorio";
        else if (!/^\d{8}$/.test(value))
          error = "El DNI debe tener exactamente 8 dígitos";
        break;
      case "phone":
        if (!value) error = "El teléfono es obligatorio";
        else if (!/^\d{8,20}$/.test(value))
          error = "El teléfono debe tener entre 8 y 20 dígitos";
        break;
      case "email":
        if (!value) error = "El correo es obligatorio";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "El correo electrónico no es válido";
        break;
      case "password":
        if (!value) error = "La contraseña es obligatoria";
        else if (value.length < 8) {
          error = "La contraseña debe tener al menos 8 caracteres";
        } else if (
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/\d/.test(value) ||   
          !/[!@#$%^&*(),.?":{}|<>]/.test(value)
        ) {
          error =
            "La contraseña debe incluir minúsculas, mayúsculas, números y símbolos";
        }
        break;
      default:
        break;
    }
  
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      register(formData);
    }
  };

  return (
    <section id="cuenta" className="flex-grow py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          Solicita tu cuenta
        </h2>

        {authError && (
          <div className="max-w-lg p-4 mx-auto mb-4 text-center text-white bg-red-500 rounded-lg">
            <p>{authError}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className={`w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu nombre"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              value={formData.lastname}
              className={`w-full px-3 py-2 border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu apellido"
            />
            {errors.lastname && <p className="text-sm text-red-500">{errors.lastname}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              DNI
            </label>
            <input
              type="text"
              name="dni"
              onChange={handleChange}
              value={formData.dni}
              className={`w-full px-3 py-2 border ${
                errors.dni ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu DNI"
            />
            {errors.dni && <p className="text-sm text-red-500">{errors.dni}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Número de Teléfono
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className={`w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu número de teléfono"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingresa tu contraseña"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
