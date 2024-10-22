import { FaCartShopping,FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopCard.scss"
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";


export const ShopCard=({product})=>{
    const navigate = useNavigate();
   const[count, setCount]=useState(0)
   const[isAdd,setIsAdd]=useState(false)
    const { toggleFavorite,addCart } = useContext(ShopContext);
    function handleClick(){
        toggleFavorite(product.id);
        
    }
    function handleCardClick(){
        navigate(`/shop/${product.id}`); 
    }
    function changeCart(){
        addCart(product.id, count)
                setCount(0)
                setIsAdd(true)
                setTimeout(() => {
                   setIsAdd(false) 
                },2000);
    }
  

   
    return(<div className="shop-card" >
    <div className="bild">
        <img src={product.imageUrl} alt={product.name}/>
        <button className="heart" onClick={handleClick} style={{color:product.favorite ?'#aa1f0c':'#706767' }}><FaHeart /></button>
    </div>
        <h2>{product.name}</h2>
        <div className="price-menge">
            <span>{product.price} €</span>
            <div >

            <button onClick={() => setCount(prev => Math.min(prev + 1, product.stock))}>+</button>

                <input type="text" name="menge"  readOnly value={count}  />
                <button onClick={()=>{
                count>0&&setCount(prev=>prev-1)}}>-</button>
                <button onClick={changeCart}><FaCartShopping /></button>
                {isAdd&&(<div>Product added to card</div>)}
            </div>
        </div>
        <button className="mehr-button" onClick={handleCardClick}>mehr..</button>
        
    </div>)
}