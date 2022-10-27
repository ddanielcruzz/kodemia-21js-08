import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DefaultRickymoryLayout } from "../layouts/DefaultRickymoryLayout";
import { LocationCard } from "../components/LocationCard";
export const LocationPage = () => {
  const params = useParams();
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${params.locationId}`)
      .then((res) => res.json())
      .then((fetchedLocation) => setLocation(fetchedLocation));
  }, []);

  return (
    <DefaultRickymoryLayout>
      <LocationCard name={location.name} type={location.type} />
    </DefaultRickymoryLayout>
  );
};
