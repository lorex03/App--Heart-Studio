import React, { useState } from 'react';
import logo from "../assets/LogoHeart.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // Close the menu when changing pages
  };

  return (
    <nav id='nav' className=" border-gray-200 dark:bg-gray-900 navbar-fixed">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#about" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="self-center text-4xl font-bold whitespace-nowrap text-white drop-shadow-[3px_2px_2px_rgba(0,0,0,0.7)]">Heart & Soul</h1>
          <img
            src={logo}
            className="h-20 logo-animation"
            alt="Fler Dev Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open Menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`ml-4 w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#about" className={`block py-2 px-3 rounded-md ${currentPage === 'about' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'}`} onClick={() => handlePageChange('about')}>
              Publica Tu Negocio
                {currentPage === 'about' && (
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 rounded-b-lg"></span>
                )}
              </a>
            </li>
            <li>
              <a href="#services" className={`block py-2 px-3 rounded-md ${currentPage === 'services' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'}`} onClick={() => handlePageChange('services')}>
               Registrate
                {currentPage === 'services' && (
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 rounded-b-lg"></span>
                )}
              </a>
            </li>
            <li>
              <a href="#contact" className={`block py-2 px-3 rounded-md ${currentPage === 'contact' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'}`} onClick={() => handlePageChange('contact')}>
                Ingresar
                {currentPage === 'contact' && (
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 rounded-b-lg"></span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
