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
                
                setIsAdd(true)
                setTimeout(() => {
                   setIsAdd(false) 
                   setCount(0)
                },2000);
                
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

            <button className="button-add" onClick={() => setCount(prev => Math.min(prev + 1, product.stock))}>+</button>

                <input type="text" name="menge"  readOnly value={count}  />
                <button className="button-minus" onClick={()=>{
                count>0&&setCount(prev=>prev-1)}}>-</button>
                <button className="add-cart" onClick={changeCart}><FaCartShopping /></button>
                {isAdd&&(count>0?(<div>Product added to card</div>):(<p style={{color:'red'}}>Select quantity</p>))}
                
            </div>
        </div>
        <button className="mehr-button" onClick={handleCardClick}>mehr..</button>
        </div></div>
    )
}