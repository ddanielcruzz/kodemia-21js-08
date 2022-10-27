import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex mx-auto items-center space-x-10 w-max py-10 text-purple-600 text-2xl font-bold underline">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="cursor-pointer">Episodes</li>
      </ul>
    </nav>
  );
};
