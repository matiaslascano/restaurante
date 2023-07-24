import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 overflow-scroll lg:flex-row lg:px-20 xl:px-40">
      <div className="flex flex-col justify-center flex-1 p-4 lg:h-full lg:w-2/3 ">
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">Siciliana</h1>
            <span className="text-sm">Grande</span>
          </div>
          <h2 className="font-bold">$24.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">Bacon Deluxe</h1>
            <span className="text-sm">Salsa BBQ extra</span>
          </div>
          <h2 className="font-bold">$29.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p4.png" alt="" width={100} height={100} />
          <div className="my-2">
            <h1 className="uppercase font-bold">P. Arrabiatta</h1>
            <span className="text-sm">Mediana</span>
          </div>
          <h2 className="font-bold">$26.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center flex-1 p-4 bg-red-100 lg:h-full lg:w-1/3 lg:text-xl lg:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Cargos por servicio</span>
          <span className="">$0</span>
        </div>
        <div className="flex justify-between">
          <span className="">Envío</span>
          <span className="text-green-500">GRATIS</span>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <span className="">Total</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-2 rounded-md w-1/2 self-end">
          PAGAR
        </button>
      </div>
    </div>
  );
};

export default CartPage;
