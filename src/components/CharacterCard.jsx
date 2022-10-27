import React from "react";
import { Link } from "react-router-dom";

export const CharacterCard = ({
  id,
  name,
  status,
  species,
  image,
  showButton,
}) => {
  const getStylesByStatus = (status) => {
    if (status === "Alive") {
      return "text-green-500";
    }
    if (status === "Dead") {
      return "text-red-500";
    }
    return "text-yellow-500";
  };

  return (
    <article className="bg-zinc-900 text-white p-20 w-[500px] rounded-md flex flex-col space-y-4">
      <img src={image} alt="" />
      <h1 className="text-xl font-bold">{name}</h1>
      <p className={getStylesByStatus(status)}>{status}</p>
      <p>{species}</p>
      {showButton && (
        <Link to={`/characters/${id}`}>
          <a className="bg-purple-400 text-purple-900 rounded-md p-4 cursor-pointer">
            Go to character page
          </a>
        </Link>
      )}
    </article>
  );
};
