import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CharactersContext } from "../../../contexts/CharactersContext";
export const Character=()=>{
    const{character}=useParams();
    const{charactersData}=useContext(CharactersContext)
    // const characterKlein=character.toLowerCase()
    
 
     const [characterData, setCharacterData]=useState(null);
    // async function fetchCharacter() {
    //     try{
    //         const response = await fetch(`https://potterhead-api.vercel.app/api/characters/${characterKlein}`);
    //         const data= await response.json();
    //         console.log(data);
    //         setCharacterData(data)
    //     }catch(error){
    //         console.log(error);
    //     }
        
    // }
     useEffect(()=>{
        
        const currentCharecter= charactersData.find((char)=>char.name==character) 
        
        setCharacterData(currentCharecter)
     },[character])
   

    return(<><h2>Name: {character}</h2> 
    {characterData?
    ( <img src={characterData.image} alt={characterData.name}/> ):(<p>Loading...</p>)
    
    }
    </>)
}