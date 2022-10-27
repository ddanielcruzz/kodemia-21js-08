import React, { useEffect, useState } from "react";
import { LocationCard } from "../components/LocationCard";
import { DefaultRickymoryLayout } from "../layouts/DefaultRickymoryLayout";
/*
{
info: {}
"results": [
    {
      "id": 1,
      "name": "Earth",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    }
    // ...
  ]
}
*/
export const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((fetchedLocations) => setLocations(fetchedLocations.results));
  }, []);
  return (
    <DefaultRickymoryLayout>
      {locations.map((element) => (
        <LocationCard
          key={element.id}
          id={element.id}
          name={element.name}
          type={element.type}
          showButton
        />
      ))}
    </DefaultRickymoryLayout>
  );
};
