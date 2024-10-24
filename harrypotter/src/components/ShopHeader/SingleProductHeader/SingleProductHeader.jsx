import { NavLink } from "react-router-dom"

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect,useState } from "react";
import { ShopContext } from "../../../contexts/ShopContext";

import { ShopSearch } from "../../ShopSearch/ShopSearch";
export const SingleProductHeader=()=>{
    const[countInCart, setCountInCart]=useState(0)
    const{currentProducts, setCurrentProducts,
        products, setProducts,selectedCategory, setSelectedCategory ,selectedSort, setSelectedSort, categories,sortOptions,
    }=useContext(ShopContext)
 useEffect(()=>{
    const currentCount=products.reduce((sum, product)=>sum+=product.cart,0)
    setCountInCart(currentCount)
 },[products])   
return(

    <div className="shop-header">
          
      <div className="shop-search-panel">
      
<ShopSearch></ShopSearch>
      </div>
    <div className="link-to-other-page">
    <NavLink to={'/shop/wischlist'} ><FaHeart /></NavLink>
    <NavLink to={'/shop/cart'} ><FaShoppingCart /><span className="count-in-cart">{countInCart}</span></NavLink>
    </div></div>
)
}