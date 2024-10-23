import { FaCartShopping,FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./ProductCard.scss"
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { MengeButton } from "../MengeButton/MengeButton";


export const ProductCard=({product})=>{
   
    const { toggleFavorite , setIsSinglePage} = useContext(ShopContext);
    function handleClick(){
        toggleFavorite(product.id);
        
    }

   
  

   
    return(<div className=" shop-card product" >
    <div className="bild">
    {product.stock==0&&(<p style={{color:'red', fontSize:'1.2rem'}}>Sold out</p>)}
       <div className="info-bild">
        <img src={product.imageUrl} alt={product.name}/>
        <div className="info">
        <h2>{product.name}</h2>
        <p><b>Category:</b> {product.category}</p>
       
        <p><b>Description: </b>{product.description}</p>
        <p><b>Stock: </b>{product.stock}</p>

        <button className="heart" onClick={handleClick} style={{color:product.favorite ?'#aa1f0c':'#706767' }}><FaHeart /></button>
    </div></div>
        
        </div>
        <div className="price-menge">
            <span>{product.price} €</span>
            <div >

            <MengeButton icon={<FaCartShopping />} product={product}></MengeButton>
                
            </div>
        </div>
      
       <Link to='/shop' >Go back</Link>
    </div>)
}