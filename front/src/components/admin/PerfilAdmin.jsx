import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { createPhoto, getUserData } from "../service/querisUsers";
import avatarImg from "../../assets/default-avatar.png";

import Loading from "../views/common/Loading";
import Swal from "sweetalert2";

const PerfilAdmin = () => {
  const { user, token } = useAuth();
  const [profileImage, setProfileImage] = useState(avatarImg);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userData, setUserData] = useState([]);

  const [mostrarLoading, setMostrarLoading] = useState(false);

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
      setMostrarLoading(true);
      getUserData(user.id, token)
        .then((data) => {
          setUserData(data);
          setProfileImage(data.img_url || avatarImg);
        })
        .catch((error) => {
          console.error("Error obteniendo los datos del usuario:", error);
        })
        .finally(() => {
          setMostrarLoading(false);
        });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setMostrarLoading(true);
      await createPhoto(userData.id, formData, token)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "¡Imagen Cargada!",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setMostrarLoading(false);
        });
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      setMostrarLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-100">
      <div
        className="w-full max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-2xl"
        style={{ borderRadius: "16px" }}
      >
        <div
          className="p-6 text-center bg-blue-600 border-b rounded-t-lg"
          style={{ borderRadius: "16px 16px 0 0" }}
        >
          <img
            className="w-32 h-32 mx-auto rounded-full shadow-lg"
            src={profileImage || avatarImg}
            alt="Imagen de perfil"
          />
          <p className="pt-2 text-xl font-bold text-white">{userData.name}</p>
          <p className="text-sm text-blue-200">{userData.id}</p>
        </div>

        <div className="p-6">
          <p className="mb-2 text-gray-700">
            <strong>DNI:</strong> {userData.dni}
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Teléfono:</strong> {userData.phone}
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Email:</strong> {userData.email}
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Subir nueva imagen de perfil:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-500">
                Archivo seleccionado: {selectedFile.name}
              </p>
            )}
            {mostrarLoading ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Guardar imagen
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerfilAdmin;
