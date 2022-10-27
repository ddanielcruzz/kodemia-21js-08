import React from "react";
import { Link } from "react-router-dom";

export const LocationCard = ({ id, name, type, showButton }) => {
  return (
    <article className="bg-zinc-900 text-white p-20 w-[500px] rounded-md flex flex-col space-y-4">
      <h1 className="text-xl font-bold">{name}</h1>
      <p>{type}</p>
      {showButton && (
        <Link to={`/locations/${id}`}>
          <a className="bg-purple-400 text-purple-900 rounded-md p-4 cursor-pointer">
            Go to location page
          </a>
        </Link>
      )}
    </article>
  );
};
