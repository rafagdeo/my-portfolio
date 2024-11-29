import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  { feedback: "Excelente profissional, muito qualificado" },
  { feedback: "Superou nossas expectativas" },
  { feedback: "Extremamente ágil, profissional e capaz." },
  { feedback: "Excelente profissional entrou o projeto rapidamente dentro do briefing esperado." },
  { feedback: "Muito atencioso e conhecimento no que precisava! Indicamos o serviço desse profissional!" },
  { feedback: "Correu tudo bem" },
  { feedback: "Ótimo profissional! Entregou exatamente o que eu pedi, indico o trabalho com certeza." },
  { feedback: "Muito atencioso, trabalho rápido e bem feito" },
];

const TestimonialsCarousel = () => {
  return (
    <div className="p-4 md:w-[1127px] md:mx-auto my-6 md:space-y-12 text-center">
      <h2 className="text-4xl font-bold text-white">Avaliações</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-10">
            <div className="text-center p-6 rounded-lg shadow-md">
              <div className="stars text-yellow-500 text-2xl mb-2">★★★★★</div>
              <p className="text-lg italic text-white">
                "{testimonial.feedback}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
