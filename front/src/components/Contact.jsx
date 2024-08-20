import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importa los íconos de React Icons
import { IoMdMail } from "react-icons/io";

function Contact() {
  // const handleFormSubmit = () => {
  //   // Abrir el formulario de Google en una nueva pestaña
  //   window.open("https://forms.gle/AqPvRTC8xPY7WXvQ8", "_blank");
  // };

  const handleInstagramClick = () => {
    // Redirige al perfil de Instagram
    window.open("https://www.instagram.com/estudio_heartandsoul/", "_blank");
  };

  // const handleFacebookClick = () => {
  //   // Redirige a la página de Facebook
  //   window.open("https://www.facebook.com/Maxeeer", "_blank");
  // };

  // const handleMailClick = () => {
  //   // Redirige al correo de Gmail
  //   window.open("mailto:contacto@flerdev.com");
  // };

  return (
    <div className="mt-16"> {/* Agregar margen superior para evitar la superposición */}
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-700 md:text-5xl lg:text-6xl dark:text-white">
            Contacto
          </h1>
          {/* <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Deja tu email y, si quieres, también tu consulta, y me contactare lo antes posible.
          </p> */}
          {/* <button
            onClick={handleFormSubmit}
            className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition-colors duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Completar formulario
          </button>  */}
          <h1 className="mt-8 justify-center"></h1>
          <div className="mt-8 flex justify-center">
            {/* Utiliza componentes de React Icons para los íconos */}
            <FaInstagram
              className="w-8 h-8 mx-2 text-pink-700 dark:text-white cursor-pointer"
              onClick={handleInstagramClick}
            />
            <FaFacebook
              className="w-8 h-8 mx-2 text-blue-700 dark:text-white cursor-pointer"
              // onClick={handleFacebookClick}
            />
            <IoMdMail
              className="w-8 h-8 mx-2 text-red-700 dark:text-white cursor-pointer"
              // onClick={handleMailClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;