import { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import { getUserData } from '../service/querisUsers'; 
import avatarImg from "../../assets/default-avatar.png";
import { uploadProfileImage } from '../service/querisUsers';

const UserProfile = () => {
  const { user } = useAuth(); 
  const [profileImage, setProfileImage] = useState(avatarImg);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
  });

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
    if (user && user.id) { 
      getUserData(user.id)
        .then((data) => {
          setUserData({
            name: data.name,
            email: data.email,
            id: data.id,
            dni: data.dni,
            phone: data.phone,
            direccion: data.direccion,
          });
        })
        .catch((error) => {
          console.error('Error obteniendo los datos del usuario:', error);
        });
    }
  }, [user]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor selecciona una imagen antes de subirla.");
      return;
    }

    try {
      const data = await uploadProfileImage(user.id, selectedFile);
      console.log('Respuesta del servidor:', data);
      alert('Imagen subida correctamente');
    } catch (error) {
      alert('Hubo un error al subir la imagen:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 text-center bg-blue-600 border-b">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src={profileImage}
            alt="Imagen de perfil"
          />
          <p className="pt-2 text-xl font-bold">{userData.name}</p>
          <p className="text-sm text-white">{userData.id}</p>
        </div>

        <div className="p-6">
          <p><strong>DNI:</strong> {userData.dni}</p>
          <p><strong>Teléfono:</strong> {userData.phone}</p>
          <p><strong>Email:</strong> {userData.email}</p>

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
              <p className="mt-2 text-sm text-gray-500">
                Archivo seleccionado: {selectedFile.name}
              </p>
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
