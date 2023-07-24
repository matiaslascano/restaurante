import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] lg:px-20 xl:px-40 md:h-[calc(100vh-9rem) flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-[33vh] bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="text-3xl font-bold uppercase">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
