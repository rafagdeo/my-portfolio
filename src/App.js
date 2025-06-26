import { useState, useEffect } from 'react';
import projetosData from './projetos.json';
import Header from './components/header';
import Vector from './assets/Vector-logo.svg';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact, FaNodeJs, FaPhp, FaWordpress, FaElementor, FaWhatsapp } from 'react-icons/fa';
import TestimonialsCarousel from './components/testimonialscarousel';
import Footer from './components/footer';
import './App.css'

function App() {
  const [projetos, setProjetos] = useState([]);
  
    useEffect(() => {
      setProjetos(projetosData);
    }, []);
  return (
    <>
      <Header />
      <section id='home' class="px-10 flex md:mt-10 md:px-10 md:pb-0 md:flex h-full max-w-[1440px] mx-auto gap-11 ">
        <div class="grid p-5 bg-secundary md:flex rounded-3xl md:w-5/6">
          <div class="grid order-last md:content-center md:order-1 md:grid p-5 gap-6">
            <h1 class="text-3xl md:text-black font-bold md:text-5xl uppercase">
              Transforme suas ideias em soluções digitais de alto impacto
            </h1>
            <h2 class="text-2xl md:text-2xl">
              Oferecemos o suporte que você precisa para levar o seu negócio ao
              próximo nível.
            </h2>
            <a href="#services" class="underline text-xl hover:font-bold">
              Saiba mais sobre nossos serviços
            </a>
          </div>
          <div class="grid order-1 md:order-2 md:w-4/6 p-3 content-center">
            <img src={Vector} class="w-[100px] md:w-[250px] animate-[spin_5s_linear_infinite]" />
          </div>
        </div>
        <div class="hidden md:block bg-primary w-1/6 content-center text-center rounded-3xl">
          <h2 class="font-extrabold text-6xl -rotate-90">Veja Mais</h2>
        </div>
      </section>

      <div id='line' class="w-1 py-5 bg-secundary rotate-180 mx-auto z-1"></div>

      <section
        id="skills"
        class="px-10 md:mb-8 mb:py-0 md:px-10 max-w-[1440px] scroll-mt-24 mx-auto items-center flex justify-center "
      >
        <div class="bg-secundary flex rounded-3xl p-10 w-1/5 justify-center h-full content-start">
          <h2 class="text-xl md:text-4xl font-bold">Skills</h2>
        </div>
        <div class="h-1 w-20 bg-secundary"></div>
        <div class="bg-secundary flex rounded-3xl gap-11 w-4/5 items-center content-center justify-center min-h-48">
          <div class="grid-cols-2 md:grid-cols-8 grid md:flex items-center gap-6 p-5">
            <RiTailwindCssFill className="size-10 md:size-20" />
            <IoLogoJavascript className="size-10 md:size-24" />
            <SiTypescript className="size-10 md:size-20" />
            <FaPhp className="size-10 md:size-20" />
            <FaNodeJs className="size-10 md:size-20" />
            <FaReact className="size-10 md:size-20" />
            <FaWordpress className="size-10 md:size-20" />
            <FaElementor className="size-10 md:size-20" />
          </div>
        </div>
      </section>

      <section
        id="services"
        class="p-10 md:py-14 max-w-[1440px] scroll-mt-14 mx-auto grid gap-4 text-white"
      >
        <div class="grid gap-4">
          <h2 class="text-4xl font-black">Nossos serviços</h2>
          <p class="text-white/70 dark:black">
            Combinamos expertise técnica e criatividade para desenvolver
            soluções que atendam aos seus objetivos específicos.
            <br />o planejamento até a execução, estamos ao seu lado para
            garantir resultados sólidos e consistentes.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-10 sm:mt-10 mb-4  md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 py-10">
          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <h3 class="text-2xl font-extralight">Estratégia e Pesquisa</h3>
            <p class="text-white/70 text-sm">
              Elaboração de estratégias baseadas em dados, adaptadas para elevar
              sua presença digital e impulsionar o crescimento do negócio por
              meio de pesquisas meticulosas e análises criteriosas.
            </p>
          </div>

          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <h3 class="text-2xl font-extralight">UX/UI Design</h3>
            <p class="text-white/70 text-sm">
              Criando designs visualmente impressionantes e centrados no usuário
              que cativam o público e proporcionam experiências online perfeitas
              em todos os dispositivos.
            </p>
          </div>

          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            <h3 class="text-2xl font-extralight">Desenvolvimento Web</h3>
            <p class="text-white/70 text-sm">
              Criação de sites robustos e de alto desempenho usando tecnologias
              de ponta para garantir soluções on-line rápidas, seguras e
              dimensionáveis.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-10 md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3">
          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <h3 class="text-2xl font-extralight">Lojas Virtuais</h3>
            <p class="text-white/70 text-sm">
              Desenvolvo lojas virtuais personalizados, focados em converter
              visitantes em clientes.
            </p>
          </div>

          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <h3 class="text-2xl font-extralight">Alta Perfomance</h3>
            <p class="text-white/70 text-sm">
              Melhore a performance e a velocidade do seu site para oferecer uma
              experiência superior aos seus usuários.
            </p>
          </div>

          <div class="grid gap-2 border-b-2 border-white/20 hover:border-primary pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <h3 class="text-2xl font-extralight">Suporte Confíavel</h3>
            <p class="text-white/70 text-sm">
              Ofereço suporte técnico contínuo para garantir que seu site esteja
              sempre operacional e eficiente.
            </p>
          </div>
        </div>
      </section>
      <section className="container p-4 md:w-[1440px] mx-auto py-14 text-white" id='projects'>
        <div className="gap-4 justify-center text-center">
          <h2 className="text-4xl font-black text-white">Conheça nosso portfólio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 md:py-32">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="grid gap-2 rounded-xl">
              <img src={projeto.imagem} alt={projeto.titulo} className='rounded-t-md mb-3' />
              <h3 className='text-2xl font-bold'>{projeto.titulo}</h3>
              <p class="text-white/70 text-lg">{projeto.modelo}</p>
              <a href={projeto.link} className='bg-primary py-2 rounded-md text-center hover:bg-primary/90 cursor-pointer font-bold uppercase mt-3' target='_blank' rel='noreferrer'>Ver projeto</a>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button><a href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!" className="bg-green-500 text-center hover:bg-green-600 rounded-full text-white font-bold py-2 px-4 flex gap-2">
            Solicite orçamento agora! <FaWhatsapp size={24} />
          </a></button>
        </div>
      </section>
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

export default App;
