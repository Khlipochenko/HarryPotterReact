import { createContext, useState } from "react";
export const CharactersContext=createContext();

export const Provider =({children})=>{
    const [charactersData, setCharactersData]=useState([])
    const[currentCharacters,setCurrentCharacters]=useState([])
    const houses=[[
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw",
        "Slytherin"
        ]]
    return(
    <CharactersContext.Provider value={{charactersData ,setCharactersData, currentCharacters,setCurrentCharacters, houses }}>{children}</CharactersContext.Provider>)
}