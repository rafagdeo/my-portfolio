import React from 'react';

const StarBlock = ({ text }) => {
  return (
    <div className="justify-center">
      <div className="stars text-yellow-500 text-2xl">★★★★★</div>
      <div className="text">{text}</div>
    </div>
  );
};

const Stars = () => {
  return (
    <div className="px-4 mt-20">
      <div className="flex container mx-auto justify-center gap-8 text-center ">
        <StarBlock text=' "Superou nossas expectativas" '/>
        <StarBlock text=' "Excelente profissional, muito qualificado e prestativo!" ' />
        <StarBlock text=' "Extremamente ágil, profissional e capaz." '/>
      </div>
    </div>
  );
};

export default Stars;


