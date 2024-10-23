import { FaCartShopping,FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./ProductCard.scss"
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";


export const ProductCard=({product})=>{
   const[count, setCount]=useState(0)
   const[isAdd,setIsAdd]=useState(false)
    const { toggleFavorite,addCart, products } = useContext(ShopContext);
    function handleClick(){
        toggleFavorite(product.id);
        
    }

    function changeCart(){
        addCart(product.id, count)
                
                setIsAdd(true)
                setTimeout(() => {
                   setIsAdd(false) 
                   setCount(0)
                },2000);
                
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

            <button className="button-add" onClick={() => setCount(prev => Math.min(prev + 1, product.stock))}>+</button>

                <input type="text" name="menge"  readOnly value={count}  />
                <button className="button-minus" onClick={()=>{
                count>0&&setCount(prev=>prev-1)}}>-</button>
                <button className="add-cart" onClick={changeCart}><FaCartShopping /></button>
                {isAdd&&(count>0?(<div>Product added to card</div>):(<p style={{color:'red'}}>Select quantity</p>))}
                
            </div>
        </div>
      
       <Link to='/shop'>Go back</Link>
    </div>)
}