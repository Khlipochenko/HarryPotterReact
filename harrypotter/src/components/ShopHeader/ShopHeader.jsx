import { NavLink } from "react-router-dom"
import { Filter } from "../Filter/Filter"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect,useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import './ShopHeader.scss'
export const ShopHeader=()=>{
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
      <>
        <Filter 
          items={sortOptions}
          selectedItem={selectedSort}
          setSelectedItem={setSelectedSort}
          name={'price'}
        ></Filter>
        <Filter
        
          items={categories}
          selectedItem={selectedCategory}
          setSelectedItem={setSelectedCategory}
          name={"all categories"}
        ></Filter></>

      </div>
    <div className="link-to-other-page">
    <NavLink to={'/shop/wischlist'} ><FaHeart /></NavLink>
    <NavLink to={'/shop/cart'} ><FaShoppingCart /><span className="count-in-cart">{countInCart}</span></NavLink>
    </div></div>
)
}