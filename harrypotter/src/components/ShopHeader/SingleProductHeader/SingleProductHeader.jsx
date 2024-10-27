import { NavLink } from "react-router-dom"

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect,useState } from "react";
import { ShopContext } from "../../../contexts/ShopContext";

import { ShopSearch } from "../../ShopSearch/ShopSearch";
export const SingleProductHeader=()=>{
//    const[countInCart, setCountInCart]=useState(0)
//    const[countFavorite, setCountFavorite]=useState(0)
    const{currentProducts, setCurrentProducts,
        products, setProducts,selectedCategory, setSelectedCategory ,selectedSort, setSelectedSort, categories,sortOptions,countInCart, setCountInCart,countFavorite, setCountFavorite
    }=useContext(ShopContext)
 useEffect(()=>{
    const currentCount=products.reduce((sum, product)=>sum+=product.cart,0)
    setCountInCart(currentCount)
    const currentCountFavorite=products.reduce((sum, product) => product.favorite ? sum + 1 : sum, 0)
    setCountFavorite(currentCountFavorite)
 },[products,setProducts])   
return(

    <div className="shop-header">
          
      <div className="shop-search-panel">
      
<ShopSearch></ShopSearch>
      </div>
    <div className="link-to-other-page">
    <NavLink to={'/shop/wischlist'} ><FaHeart /><span style={{ left:countFavorite>=10?'0.5rem':'0.8rem'}} className="count-in-favorite" >{countFavorite} </span></NavLink>
    <NavLink to={'/shop/cart'} ><FaShoppingCart /><span className="count-in-cart">{countInCart}</span></NavLink>
    </div></div>
)
}