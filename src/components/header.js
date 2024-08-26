import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar flex justify-between py-4 px-8 backdrop-blur-md bg-white/5 top-0 sticky z[20] drop-shadow-md dark:text-black">
        <div className="logo-page ">
          <a className="header-logo text-lg font-bold" href="/">
            Rafael.dev
          </a>
        </div>
        <nav className="flex space-x-5 items-center">
          <li>
            <a href="/" className=" font-medium hover:underline">
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
            <a href="/" className="font-medium hover:underline">
              Contato
            </a>
          </li>
        </nav>
      </nav>
    </>
  );
}

export default Header;
