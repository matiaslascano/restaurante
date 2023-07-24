"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Siempre fresco, crujiente y caliente",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Entregamos su pedido en cualquier lugar de NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "La mejor pizza para compartir con tu familia",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []); */

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex flex-1 items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 font-bold mdÑp-10 md:text-6xl lg:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 mb-4">
          Ordene ahora
        </button>
      </div>
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt="imagen-slider-1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
