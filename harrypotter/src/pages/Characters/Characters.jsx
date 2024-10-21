import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { Card } from "../../components/Card/Card";
;
import { Paginate } from "../../components/Paginate/Paginate";
import "./Characters.scss";
import { Filter } from "../../components/Filter/Filter";
import { Search } from "../../components/Search/Search";
export const Characters = () => {
    const[selectedHouse, setSelectedHouse]=useState('')
    const[namenData, setNamenData]=useState([])
  const {
    charactersData,
    setCharactersData,
    currentCharacters,
    setCurrentCharacters, houses, selectedCharacters, setSelectedCharacters,
    setFirstIndex, setCurrentPage} = useContext(CharactersContext);

  async function fetchCharactersData() {
    try {
      const response = await fetch(
        "https://potterhead-api.vercel.app/api/characters"
      );
      const data = await response.json();
      setCharactersData(data);
      setNamenData(data.map((data)=>data.name))
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCharactersData();
  
  }, []);
  useEffect(()=>{

    if (selectedHouse!=''){
        setSelectedCharacters(charactersData.filter((el)=> el.house==selectedHouse))
        setFirstIndex(0)
    }else {
        setSelectedCharacters(charactersData)
    }

  }, [selectedHouse, charactersData])

  return (
    <>
      {currentCharacters ? (
        <> <div className="character-list">
        <div className="searche-panel">
        <Search searchItems={namenData}></Search>
        <Filter items={houses} selectedItem={selectedHouse}  name={'houses'} setSelectedItem={setSelectedHouse} className='filter'></Filter></div>
         
          <div className="character-grid">
            {currentCharacters.map((character) => (
              <Card character={character} key={character.id}></Card>
            ))}
          </div>
          <Paginate
         selectedItems= {selectedHouse}
            itemsPerPage={10}
            itemsData={selectedCharacters}
            setCurrentItems={setCurrentCharacters}
          
          ></Paginate></div>
        </>
      ) : (
        <p> Loading ...</p>
      )}
    </>
  );
};
