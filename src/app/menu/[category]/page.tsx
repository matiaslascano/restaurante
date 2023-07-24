import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-red-50"
          href={`/product/${pizza.id}`}
          key={pizza.id}
        >
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image src={pizza.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="uppercase text-xl p-4">{pizza.title}</h1>
            <span className=" text-xl group-hover:hidden">${pizza.price}</span>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white rounded-md p-2">
              Agregar
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
