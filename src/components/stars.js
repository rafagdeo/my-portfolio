import React from 'react';

const StarBlock = ({ text }) => {
  return (
    <div className="p-8 md:justify-center content-center items-center text-center grid gap-4">
      <div className="stars text-yellow-500 text-2xl">★★★★★</div>
      <div className="text">{text}</div>
    </div>
  );
};

const Stars = () => {
  return (
    <div className="py-14 max-w-[1440px] mx-auto content-center text-center text-white">
      <h2 class="text-4xl font-black">Avaliações</h2>
      <div className="grid-cols-1 md:flex grid-cols-3 gap-x-8 gap-y-4 justify-center ">

      <StarBlock text=' "Excelente profissional, muito qualificado" ' />
        <StarBlock text=' "Superou nossas expectativas" '/>
        <StarBlock text=' "Extremamente ágil, profissional e capaz." '/>
      </div>
    </div>
  );
};

export default Stars;


