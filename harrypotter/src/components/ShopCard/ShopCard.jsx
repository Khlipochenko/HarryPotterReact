import { FaCartShopping,FaHeart } from "react-icons/fa6";
import { useState } from "react";
import "./ShopCard.scss"
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";


export const ShopCard=({product})=>{
    const { toggleFavorite } = useContext(ShopContext);
    function handleClick(){
        toggleFavorite(product.id);
        
    }
    return(<div className="shop-card">
    <div className="bild">
        <img src={product.imageUrl} alt={product.name}/>
        <button className="heart" onClick={handleClick} style={{color:product.favorite ?'red':'black' }}><FaHeart /></button>
    </div>
        <h2>{product.name}</h2>
        <div className="price-menge">
            <span>{product.price}</span>
            <form >
                <input type="number" name="menge" value={1}/>
                <button><FaCartShopping /></button>
            </form>
        </div>
        
    </div>)
}