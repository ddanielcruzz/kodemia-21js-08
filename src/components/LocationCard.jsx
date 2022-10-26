import React from "react";

export const LocationCard = ({ id, name, type }) => {
  return (
    <article className="bg-zinc-900 text-white p-20 w-[500px] rounded-md flex flex-col space-y-4">
      <h1 className="text-xl font-bold">{name}</h1>
      <p>{type}</p>
      <button className="bg-purple-400 text-purple-900 rounded-md py-4 cursor-pointer">
        Go to location page
      </button>
    </article>
  );
};
