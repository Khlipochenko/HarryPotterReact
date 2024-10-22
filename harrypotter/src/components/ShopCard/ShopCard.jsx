import { FaCartShopping } from "react-icons/fa6";

import "./ShopCard.scss"
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
export const ShopCard=({product})=>{
    function onClick(){
        product.favorite= !product.favorite
        console.log(product);
        
    }
    return(<div className="shop-card">
    <div className="bild">
        <img src={product.imageUrl} alt={product.name}/>
        <FavoriteButton onClick={onClick}></FavoriteButton>
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