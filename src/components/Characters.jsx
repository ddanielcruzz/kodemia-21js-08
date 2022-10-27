import React, { useEffect, useState } from "react";
import { DefaultRickymoryLayout } from "../layouts/DefaultRickymoryLayout";
import { CharacterCard } from "./CharacterCard";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((fetchedCharacters) => setCharacters(fetchedCharacters.results));
  }, []);
  return (
    <DefaultRickymoryLayout>
      {characters.map((el) => (
        <CharacterCard
          key={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          image={el.image}
        />
      ))}
    </DefaultRickymoryLayout>
  );
};
