import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex mx-auto items-center space-x-10 w-max py-10 text-purple-600 text-2xl font-bold underline">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Characters</li>
        <li className="cursor-pointer">Locations</li>
        <li className="cursor-pointer">Episodes</li>
      </ul>
    </nav>
  );
};
