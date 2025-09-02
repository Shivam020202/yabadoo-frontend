import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isOpen,
  setIsOpen,
  setIsLoginModalOpen,
  isAuthenticated,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
      <button
        className="absolute top-5 right-5 text-white"
        onClick={() => setIsOpen(false)}
      >
        <i className="fas fa-times text-2xl"></i>
      </button>

      <div className="flex flex-col space-y-8 items-center">
        <a
          href="#services"
          className="text-white text-xl hover:text-aussie-gold transition font-bold"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#gallery"
          className="text-white text-xl hover:text-aussie-gold transition font-bold"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </a>
        <a
          href="#about"
          className="text-white text-xl hover:text-aussie-gold transition font-bold"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </a>
        <a
          href="#contact"
          className="text-white text-xl hover:text-aussie-gold transition font-bold"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="text-white text-xl hover:text-aussie-gold transition font-bold"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        ) : (
          <button
            className="text-white text-xl hover:text-aussie-gold transition font-bold"
            onClick={() => {
              setIsOpen(false);
              setIsLoginModalOpen(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
