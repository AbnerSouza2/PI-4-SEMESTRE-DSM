import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

// Componente para exibir cada item do menu
const MenuItem = ({ img, alt, title }) => {
  return (
    <div className="text-center group relative flex flex-col items-center">
      <img
        src={img}
        alt={alt}
        className="w-32 h-32 rounded-full object-cover mb-2 transition-transform duration-300 group-hover:scale-110"
      />
      <p className="text-black font-semibold text-xl mt-2 group-hover:text-brightColor transition-colors duration-300">
        {title}
      </p>
    </div>
  );
};

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      {/* Navbar fixa */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        {/* Conteúdo da navbar */}
      </div>

      {/* Conteúdo da página */}
      <div className="w-full text-white py-4 px-5 mt-32">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Explore nosso menu
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Escolha entre nossos pratos incríveis e descubra o sabor de uma
          experiência única.
        </p>

        {/* Menu de itens com imagens e descrição */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
          <MenuItem img={img1} alt="Ave" title="Ave" />
          <MenuItem img={img2} alt="Bovina" title="Bovina" />
          <MenuItem img={img3} alt="Peixe" title="Peixe" />
          <MenuItem
            img={img4}
            alt="Melhores Avaliados"
            title="Melhores Avaliados"
          />
        </div>
      </div>

      {/* Espaçamento entre o menu e os cards */}
      <div className="mb-16" />

      {/* Lista de pratos */}
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Frango ao Molho" price="$10.99" />
        <DishesCard img={img2} title="Frango com Legumes" price="$12.99" />
        <DishesCard img={img3} title="Macarrão" price="$10.99" />
        <DishesCard img={img4} title="Espetinho de Frango" price="$11.99" />
        <DishesCard img={img5} title="Arroz Temperado" price="$10.99" />
        <DishesCard img={img6} title="Peixe" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;
