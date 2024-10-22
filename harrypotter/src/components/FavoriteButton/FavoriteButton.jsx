import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ShopContext } from "../../contexts/ShopContext";

export const FavoriteButton=({onClick})=>{
 
    const [color, setColor]=useState(false)
    function handleClick(){
        setColor(!color)
        onClick()
    }
 
    return (<button className="heart" onClick={handleClick} style={{color:color?'red':'black' }}><FaHeart /></button>)
}