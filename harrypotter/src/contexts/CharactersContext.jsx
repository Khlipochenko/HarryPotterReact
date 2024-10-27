import { createContext, useState } from "react";
export const CharactersContext=createContext();

export const Provider =({children})=>{
    const[firstIndex, setFirstIndex]=useState(0);// erst index für paginate
    const [charactersData, setCharactersData]=useState([]) // data von API
    const[currentCharacters,setCurrentCharacters]=useState([]) // data die jetzt anzeigen
    const [selectedCharacters, setSelectedCharacters]=useState([])// data mit filter
    const[show, setShow]=useState(false)
    const houses=[
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw",
        "Slytherin"
        ]
    const[currentPage, setCurrentPage]=useState(0)// speichere aktive seite in der Paginierung, damit beim zurückkehren von  detailseite die korrekte seitennummer angezeigt wird. 
    return(
    <CharactersContext.Provider value={{charactersData ,setCharactersData, currentCharacters,setCurrentCharacters, houses, selectedCharacters, setSelectedCharacters ,firstIndex, setFirstIndex,currentPage, setCurrentPage, show, setShow}}>{children}</CharactersContext.Provider>)
}