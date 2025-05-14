import { useState, useEffect } from 'react';
import projetosData from '../projetos.json';
import Header from '../components/header';
import Footer from '../components/footer';

const Projects = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    setProjetos(projetosData);
  }, []);

  return (
    <>
    <Header />
    <section className="container p-4 md:w-[1440px] mx-auto py-14 text-white">
      <div className="gap-4 justify-center text-center">
        <h2 className="text-4xl font-black text-white">Conheça nosso portfólio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 md:py-32">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="grid gap-2 rounded-xl">
            <img src={projeto.imagem} alt={projeto.titulo} className='rounded-t-md mb-3'/>
            <h3 className='text-2xl font-bold'>{projeto.titulo}</h3>
            <p class="text-white/70 text-lg">{projeto.modelo}</p>
            <a href={projeto.link} className='bg-primary py-2 rounded-md text-center hover:bg-primary/90 cursor-pointer font-bold uppercase mt-3' target='_blank' rel='noreferrer'>Ver projeto</a>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Projects;