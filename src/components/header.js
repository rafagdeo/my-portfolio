import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex justify-between py-4 px-8 bg-white top-0 sticky z-20 drop-shadow-md dark:text-black">
      <div className="logo-page">
        <a className="header-logo text-2xl font-bold" href="/">
          Rafael.dev
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span className="block w-6 h-0.5 bg-black mb-1 transition-transform transform duration-300 ease-in-out"></span>
            <span className="block w-6 h-0.5 bg-black mb-1 transition-transform transform duration-300 ease-in-out"></span>
            <span className="block w-6 h-0.5 bg-black transition-transform transform duration-300 ease-in-out"></span>
          </div>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white backdrop-blur-md shadow-lg z-30 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black text-xl"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className="flex bg-white flex-col mt-12 space-y-8 p-8">
          <li>
            <a href="/" className="font-medium hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="font-medium hover:underline">
              Minhas Skills
            </a>
          </li>
          <li>
            <a href="#projetos" className="font-medium hover:underline">
              Projetos
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!" className="bg-blue-700 text-white py-2 px-6 rounded-lg font-medium hover:underline" target="_blank">
              Contato
            </a>
          </li>
        </ul>
      </div>
      <nav className="hidden md:flex space-x-5 items-center">
        <ul>
          <a href="/" className="font-medium hover:underline">
            Home
          </a>
        </ul>
        <ul>
          <a href="#skills" className="font-medium hover:underline">
            Minhas Skills
          </a>
        </ul>
        <ul>
          <a href="#projetos" className="font-medium hover:underline">
            Projetos
          </a>
        </ul>
        <ul>
          <a href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!" className="bg-blue-700 text-white py-2 px-6 rounded-lg font-medium hover:underline" target="_blank">
            Contato
          </a>
        </ul>
      </nav>
    </nav>
  );
}
