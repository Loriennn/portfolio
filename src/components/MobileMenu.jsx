import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      role="dialog"
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      <nav className="flex flex-col space-y-6 text-xl font-mono">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#competition"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Competition
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
