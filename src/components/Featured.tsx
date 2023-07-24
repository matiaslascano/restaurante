import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-between p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]"
          >
            {item.img && (
              <div className="relative flex-1 w-full mb-8 hover:scale-110 transition-all duration-500">
                <Image
                  src={item.img}
                  alt="Imagen del producto"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-4 items-center justify-center text-center">
              <h1 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                COMPRAR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
