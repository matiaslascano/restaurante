import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const user = false;

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HOME</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/">CONTACTO</Link>
      </div>
      <div className="uppercase text-xl md:font-bold flex-1 md:text-center md:text-3xl">
        <Link href="/">Trattoria</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center cursor-pointer bg-red-300 px-1 rounded-md md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="telefono" width={20} height={20} />
          <span className="text-white">+5493514084026</span>
        </div>
        {!user ? (
          <Link href="/login">LOGIN</Link>
        ) : (
          <Link href="/orders">PEDIDOS</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
