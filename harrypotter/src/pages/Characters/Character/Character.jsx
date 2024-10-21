import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom"
import  Gryffindor  from "../../../assets/gryffindor.jpg";
import  Hufflepuff  from "../../../assets/hufflepuff.jpg";
import  Ravenclaw  from "../../../assets/ravenclaw.jpg";
import  Slytherin  from "../../../assets/slytherin.jpg";
import { CharactersContext } from "../../../contexts/CharactersContext";
import noPfoto from '../../../assets/noimage.jpg'
import './Character.scss'
export const Character=()=>{
    const [characterData, setCharacterData]=useState(null);
    const{character}=useParams();
    const{charactersData}=useContext(CharactersContext)
    const[houseBild, setHouseBild]=useState('')
    const houses = [
        { name: "Gryffindor", img: Gryffindor },
        { name: "Hufflepuff", img: Hufflepuff },
        { name: "Ravenclaw", img: Ravenclaw },
        { name: "Slytherin", img: Slytherin },
      ];
    
    
    

     useEffect(()=>{
        
        const currentCharecter= charactersData.find((char)=>char.name.toLowerCase()==character.toLowerCase()) 
        setHouseBild(()=>{
            const currentHouse=houses.find((house) => house.name === currentCharecter.house)
            return currentHouse ? currentHouse.img : '';
       }
    )
        setCharacterData(currentCharecter)
     },[character])
   

    return(<div className="character-container">
        {characterData?(
            
        <div className="einzel-character">
        <div className="name"> <h2> {characterData.name}</h2> </div>
    <div className="bild">
    <img src={ characterData.image|| houseBild || noPfoto
          } alt={characterData.name}/></div>
          <div className="info">
            {
            characterData.alternate_names.length>0&&<p><span>Alternative names:</span> {characterData.alternate_names.map((name)=><div>{name}</div>)}</p>
          }
          <p><span>Date of Dirth:</span> {characterData.dateOfBirth|| 'unknown'}</p>
          <p><span>Alive:</span> {characterData.alive?'yes': 'no'}</p>
          <p><span>Character:</span> {characterData.wizard?'wizard': 'muggle'}</p>
          {
            characterData.house&&<p><span>House:</span> {characterData.house}</p>
          }
          <p><span>Species:</span> {characterData.species}</p>
          <p><span>Gender:</span> {characterData.gender}</p>
          <p><span>Wand:</span> {characterData.wand.length?(<ul><li>wood: {characterData.wand.wood}</li>
          <li>core: {characterData.wand.core}</li>
          <li>length: {characterData.wand.length}</li>
          </ul>): 'unknown'}</p></div>
          <div className="zurück">
        <NavLink to={'/characters'}>Go back</NavLink>  </div>
          </div> ):(<p>Not found</p>)}
    
          </div>
    )
}