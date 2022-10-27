import React from "react";
import { Home } from "./components/Home";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterPage } from "./pages/CharacterPage";
import { LocationsPage } from "./pages/LocationsPage";
import { LocationPage } from "./pages/LocationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:characterId" element={<CharacterPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:locationId" element={<LocationPage />} />
        <Route
          path="*"
          element={
            <h1 className="text-red-500 text-center">Página no encontrada</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
