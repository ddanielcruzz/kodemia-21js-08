import React, { useEffect, useState } from "react";
import { DefaultRickymoryLayout } from "../layouts/DefaultRickymoryLayout";
import { CharacterCard } from "../components/CharacterCard";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((fetchedCharacters) => setCharacters(fetchedCharacters.results));
  }, []);
  return (
    <DefaultRickymoryLayout>
      {characters.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          image={el.image}
          showButton
        />
      ))}
    </DefaultRickymoryLayout>
  );
};
