// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-red-700 to-indigo-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">🏎️ Drift Cars Project 🏁</h1>
        <nav className="flex">
          <a href="#home" className="text-white hover:text-gray-300 px-4 transition duration-300 transform hover:scale-110">Home</a>
          <a href="#about" className="text-white hover:text-gray-300 px-4 transition duration-300 transform hover:scale-110">About</a>
          <a href="#projects" className="text-white hover:text-gray-300 px-4 transition duration-300 transform hover:scale-110">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300 px-4 transition duration-300 transform hover:scale-110">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;



