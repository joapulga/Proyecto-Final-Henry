import { useState, useEffect } from 'react';
import { findAllUsers } from '../service/querisUsers';// Importa la función desde el archivo de servicio

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('/default-avatar.png');
  const [selectedFile, setSelectedFile] = useState(null); 
  const [user, setUser] = useState({
    name: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
  });

  // Función para manejar el cambio de archivo (nueva imagen)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await findAllUsers();
        console.log(users);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };
  
    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede enviar la imagen al servidor, en este caso solo se imprime en consola
    console.log('Imagen subida:', selectedFile);
  };

  return (
    <div className="container p-8 mx-auto">
      <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-6 text-center bg-gray-200 border-b">
          <img
            className="w-24 h-24 mx-auto rounded-full"
            src={profileImage}
            alt="Imagen de perfil"
          />
          <p className="pt-2 text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <div className="p-6">
          <p><strong>DNI:</strong> {user.dni}</p>
          <p><strong>Teléfono:</strong> {user.telefono}</p>
          <p><strong>Dirección:</strong> {user.direccion}</p>

          {/* Formulario para subir nueva imagen */}
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Subir nueva imagen de perfil:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-500">Archivo seleccionado: {selectedFile.name}</p>
            )}
            <button
              type="submit"
              className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Guardar imagen
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
