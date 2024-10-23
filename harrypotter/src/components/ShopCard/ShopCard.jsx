import { FaCartShopping,FaHeart } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import "./ShopCard.scss"
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { MengeButton } from "../MengeButton/MengeButton";


export const ShopCard=({product})=>{
    const navigate = useNavigate();

    const { toggleFavorite} = useContext(ShopContext);
    function handleClick(){
        toggleFavorite(product.id);
        
    }
    function handleCardClick(){
        navigate(`/shop/${product.id}`); 
    }
    
  

   
    return(<div className="shop-card" >
    
    <div className="bild">
    {product.stock==0&&(<p style={{color:'red', fontSize:'1.2rem'}}>Sold out</p>)}
        <img src={product.imageUrl} alt={product.name}/>
        <button className="heart" onClick={handleClick} style={{color:product.favorite ?'#aa1f0c':'#706767' }}><FaHeart /></button>
  
        <h2>{product.name}</h2>
        <div className="price-menge">
            <span>{product.price} €</span>
            <div >

            <MengeButton icon={<FaCartShopping />} product={product}></MengeButton>
                
            </div>
        </div>
        <button className="mehr-button" onClick={handleCardClick}>mehr..</button>
        </div></div>
    )
}