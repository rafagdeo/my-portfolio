import React from 'react';
import { LuEye } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Form from "./form"

function Footer() {
  return (
    <><section className="border-y border-gray-700 ">
      <div className="md:mx-auto w-[1440px] px-10 md:flex">
        <div className="py-8 content-center space-y-6 pr-0 border-0 border-black md:w-1/2 md:border-gray-700 border-r md:space-y-6">
          <LuEye className="size-12 text-white" />
          <h2 className="text-3xl font-bold text-primary">Gostou do que viu?</h2>
          <p className="text-lg text-white">
            Se você chegou até aqui, por que não nos envia uma mensagem? Estamos agendando novos projetos a partir de novembro, então não perca essa oportunidade!
          </p>
          <button><a href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!" className="bg-primary text-center hover:bg-primary/90 rounded-full text-white font-bold py-2 px-4">
            Entre em Contato
          </a></button>
        </div>

         <div className="py-0 pr-0 border-0 border-black md:w-1/2  grid gap-4 md:py-24 md:pl-24">
          <HiOutlineSpeakerphone className="size-12 text-white" />
          <h2 className="text-3xl font-bold text-primary">Prefere por e-mail?</h2>
          <Form />
        </div> */

      </div>
    </section>
    <div className="mx-auto text-center md:text-left max-w-[1440px] py-4 px-10">
        <p className="font-light text-white/70">©2024 RafaelGuilherme. All Rights Reserved.</p>
    </div>
  </>
  );
}

export default Footer;