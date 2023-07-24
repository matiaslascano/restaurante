import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-xs h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        TRATTORIA
      </Link>
      <p>© DERECHOS RESERVADOS</p>
    </div>
  );
};

export default Footer;
