import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DefaultRickymoryLayout } from "../layouts/DefaultRickymoryLayout";
import { CharacterCard } from "../components/CharacterCard";

export const CharacterPage = () => {
  const params = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
      .then((res) => res.json())
      .then((fetchedLocations) => setCharacter(fetchedLocations));
  }, [params]);
  //   console.log(character);
  return (
    <DefaultRickymoryLayout>
      <CharacterCard
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        image={character.image}
      />
    </DefaultRickymoryLayout>
  );
};
