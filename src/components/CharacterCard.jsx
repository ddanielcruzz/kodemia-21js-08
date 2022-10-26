import React from "react";

export const CharacterCard = ({ id, name, status, species, image }) => {
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
      <button className="bg-purple-400 text-purple-900 rounded-md py-4 cursor-pointer">
        Go to character page
      </button>
    </article>
  );
};
