import React from "react";
import Header from "./components/header";
import Stars from "./components/starts";
import Astronaut from "./assets/Astronaut.jpg";
import {
  FaLinkedinIn,
  FaFileDownload,
  FaGithub,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";
import Skills from "./components/skills";
import Movies from "./assets/movies.png";
import Peugeot from "./assets/peugeot.png";
import Unseen from "./assets/unseen.png";

function App() {
  return (
    <>
      <Header />
      <Stars />
      <div className="py-10 flex flex-col md:flex-row items-center justify-center min-h-3 my-14 px-4">
        <div className="order-2 max-w-3xl w-full flex md:flex-row order-1">
          <div className="p-3">
            <h2 className="font-bold text-black md:text-6xl pb-4 text-3xl font-sans">
              Tenha seu site com a cara da sua empresa
            </h2>
            <p className="text-lg">
              Desenvolvimento de Sites Institucionais, Lojas Virtuais, Landing
              pages!
            </p>
            <div className="flex justify-start gap-4 pt-4">
              <a
                href="https://www.linkedin.com/rafagdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <FaFileDownload />
              </a>
              <a
                href="https://www.github.com/rafagdeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.behance.net/rafaelgoliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
        <div className="flex order-1 md:order-2">
          <img
            src={Astronaut}
            alt="astronaut"
            className="w-64 h-auto rounded-full shadow-lg"
          ></img>
        </div>
      </div>
      <Skills />
      <div id="projetos" className='text-center pt-24'>
            <h2 className="font-bold text-4xl">Alguns Projetos</h2>
            <a href="https://www.behance.net/rafaelgoliveira" target="_blank" className="justify-center font-medium text-xl px-5 py-2.5 flex items-center gap-2"><FaBehance />Portfólio</a>

        </div>
      <div
        className="flex flex-col md:flex-row min-h-fit py-10 "
      >
        <div className="order-2 max-w-3xl w-full md:order-1 justify-center content-center">
          <div className="flex flex-col order-2 p-10 space-y-4 md:flex order-1">
            <h2 className="font-bold text-black text-3xl">API Filmes</h2>
            <p className="text-base">
              Foi feito um projeto de filmes onde tem uma api de filmes, feito em nextJS, com tailwind.
            </p>
            <div className="flex justify-normal space-x-4">
              <a
                href="https://api-filmes-amber.vercel.app/"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Visitar
              </a>
              <a
                href="https://github.com/rafagdeo/Api-filmes"
                target="_blank"
                className="text-white bg-black hover:bg-zinc-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center"
              >
                <FaGithub className="mr-2" /> Github
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 flex md:order-2">
          <img
            src={Movies}
            alt="api-filmes"
            className="sm:rounded-none md:rounded-l-xl w-auto h-auto  shadow-md border-4 border-solid border-gray-950"
          ></img>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row min-h-fit py-10"
        id="projetos"
      >
        <div className="order-2 max-w-3xl w-full md:order-1 justify-center content-center">
          <div className="flex flex-col order-2 p-10 space-y-4 md:flex order-1 ">
            <h2 className="font-bold text-black text-3xl">Site Peugeot Amazonas</h2>
            <p className="text-base">
              Site desenvolvido com WordPress.
            </p>
            <div className="flex justify-normal space-x-4">
              <a
                href="https://peugeot.grupoamazonas.com.br/"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Visitar
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 flex md:order-2">
          <img
            src={Peugeot}
            alt="api-filmes"
            className="sm:rounded-none md:rounded-l-xl w-auto h-auto shadow-md border-4 border-solid"
          ></img>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row min-h-fit py-10"
        id="projetos"
      >
        <div className="order-2 max-w-3xl w-full md:order-1 justify-center content-center">
          <div className="flex flex-col order-2 p-10 space-y-4 md:flex order-1">
            <h2 className="font-bold text-black text-3xl">Loja Unseen</h2>
            <p className="text-base">
              Loja desenvolvida na plataforma NuvemShop.
            </p>
            <div className="flex justify-normal space-x-4">
              <a
                href="https://www.lojaunseen.com.br/"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Visitar
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 flex md:order-2">
          <img
            src={Unseen}
            alt="loja unseen"
            className="sm:rounded-none md:rounded-l-xl w-auto h-auto shadow-md border-4 border-solid"
          ></img>
        </div>
      </div>
    </>
  );
}

export default App;
