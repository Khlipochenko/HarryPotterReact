import { useState } from "react"
import './SpellsCard.scss'
import bild from '../../assets/stock.webp'
export const SpellsCard=({spell})=>{
   const[obenSeite, setObenSeite]=useState(true)
  function clickHandle() {
    setObenSeite(!obenSeite)
    setTimeout(() => {
        setObenSeite(true)
    }, 7000);
} 


return(
    <>
    
    <div className="spell" onClick={clickHandle}>
    {obenSeite?( <>  <h2>{spell.name}</h2>
    <img src={bild} alt="stock"></img></> ):(<div className="spell-text"><p>{spell.description}</p></div>)
    
}</div>

</>)

}