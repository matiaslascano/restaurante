import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black p-2 h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] text-white">
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-6">
        <h1 className="text-4xl uppercase font-bold xl:text-6xl">
          Deliciosa hamburguesa mas papas fritas
        </h1>
        <p className="xl:text-xl">Aprovecha la oferta por tiempo limitado.</p>
        <CountDown />
        <button className="bg-red-500 py-3 px-6 rounded-md uppercase">
          Comprar
        </button>
      </div>
      <div className="flex-1 w-full relative md:w-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
