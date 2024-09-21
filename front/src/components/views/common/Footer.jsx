const Footer = () => {
  return (
    <footer className="py-8 text-white bg-blue-600">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Preguntas Frecuentes */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-lg font-semibold">Preguntas Frecuentes</h3>
          <ul className="space-y-2">
            <li>
              <details>
                <summary className="cursor-pointer">¿Cómo puedo crear una cuenta?</summary>
                <p className="mt-2">
                  Para crear una cuenta, simplemente rellena el formulario y podrás navegar por la página.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">¿Cómo inicio sesión?</summary>
                <p className="mt-2">
                  Tendrás que completar el formulario de registro, y una vez registrado, iniciarás sesión con tu email y contraseña.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">¿Qué puedo hacer si tengo problemas técnicos?</summary>
                <p className="mt-2">
                  Puedes ponerte en contacto con nuestro equipo de soporte técnico a través de la plataforma, y recibirás asistencia personalizada.
                </p>
              </details>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
          <ul className="space-y-2">
            <li>
              <p>
                <strong>Email:</strong> contacto@misistema.com
              </p>
            </li>
            <li>
              <p>
                <strong>Teléfono:</strong> +54 11 1234 5678
              </p>
            </li>
            <li>
              <p>
                <strong>Dirección:</strong> Calle Falsa 123, Ciudad, País
              </p>
            </li>
          </ul>
        </div>

        {/* Derechos Reservados */}
        <div className="flex flex-col items-center">
          <p className="text-sm">© 2024 MiSistema. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

