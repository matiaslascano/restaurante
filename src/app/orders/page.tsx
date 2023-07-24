import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 overflow-scroll">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th>Nº Orden</th>
            <th className="hidden md:block">Fecha</th>
            <th>Precio</th>
            <th className="hidden md:block">Productos</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs md:text-base bg-red-50 ">
            <td className="py-6 px-1">3</td>
            <td className="py-6 px-1 hidden md:block">24/07/2023</td>
            <td className="py-6 px-1">$81</td>
            <td className="hidden md:block">
              Menú Big Burger x2, Pizza Vegetariana x2, Coca Cola 1L x2
            </td>
            <td className="py-6 px-1 text-red-600 font-bold">
              En reparto (aprox. 10 minutos)
            </td>
          </tr>
          <tr className="text-xs md:text-base odd:bg-gray-100 ">
            <td className="py-6 px-1">2</td>
            <td className="py-6 px-1 hidden md:block">24/07/2023</td>
            <td className="py-6 px-1">$150</td>
            <td className="hidden md:block">
              Menú Big Burger x2, Pizza Vegetariana x2, Coca Cola 1L x2
            </td>
            <td className="py-6 px-1 text-green-600">Entregado</td>
          </tr>
          <tr className="text-xs md:text-base odd:bg-gray-100 ">
            <td className="py-6 px-1">1</td>
            <td className="py-6 px-1 hidden md:block">24/07/2023</td>
            <td className="py-6 px-1">$33</td>
            <td className="hidden md:block">
              Menú Big Burger x2, Pizza Vegetariana x2, Coca Cola 1L x2
            </td>
            <td className="py-6 px-1 text-green-600">Entregado</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
