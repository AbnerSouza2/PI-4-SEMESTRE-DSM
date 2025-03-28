// src/components/DishesCard.jsx
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import WhatsappButton from "../layouts/WhatsappButton"; // Importando o novo botão específico
import Button from "../layouts/Button"; // Mantendo o Button genérico para outros casos

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-brightColor">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          {/* Usando o WhatsappButton para o botão WhatsApp */}
          <WhatsappButton>WhatsApp</WhatsappButton>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
