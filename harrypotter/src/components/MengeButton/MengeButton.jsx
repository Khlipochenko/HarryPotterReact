import { useState, useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import './MengeButton.scss'
export const MengeButton=({icon, product})=>{
    const[count, setCount]=useState(0)
   const[isAdd,setIsAdd]=useState(false)
   const {addCart } = useContext(ShopContext);
   function changeCart(){
    addCart(product.id, count)
            
            setIsAdd(true)
            setTimeout(() => {
               setIsAdd(false) 
               setCount(0)
            },2000);
            
}
    return(<div className="menge-button">
         <button className="button-add" onClick={() => setCount(prev => Math.min(prev + 1, product.stock))}>+</button>

<input type="text" name="menge"  readOnly value={count}  />
<button className="button-minus" onClick={()=>{
count>0&&setCount(prev=>prev-1)}}>-</button>
<button className="add-cart" onClick={changeCart}>{icon}</button>
{isAdd&&(count>0?(<div>Product added to card</div>):(<p style={{color:'red'}}>Select quantity</p>))}
    </div>)
}