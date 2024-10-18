import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { Card } from "../../components/Card/Card";
import { Outlet } from "react-router-dom";
import { Paginate } from "../../components/Paginate/Paginate";
import "./Characters.scss";
export const Characters = () => {
  const {
    charactersData,
    setCharactersData,
    currentCharacters,
    setCurrentCharacters,
  } = useContext(CharactersContext);

  async function fetchCharactersData() {
    try {
      const response = await fetch(
        "https://potterhead-api.vercel.app/api/characters"
      );
      const data = await response.json();
      setCharactersData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCharactersData();
  }, []);

  return (
    <>
      {currentCharacters ? (
        <>
          <div className="character-list">
            {currentCharacters.map((character) => (
              <Card character={character} key={character.id}></Card>
            ))}
          </div>
          <Paginate
            itemsPerPage={10}
            itemsData={charactersData}
            setCurrentItems={setCurrentCharacters}
          ></Paginate>
        </>
      ) : (
        <p> Loading ...</p>
      )}
    </>
  );
};
