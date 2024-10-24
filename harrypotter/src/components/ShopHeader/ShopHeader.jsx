import { NavLink } from "react-router-dom"
import { Filter } from "../Filter/Filter"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect,useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import './ShopHeader.scss'
import { ShopSearch } from "../ShopSearch/ShopSearch";
export const ShopHeader=()=>{
    const[countInCart, setCountInCart]=useState(0)
    const[countFavorite, setCountFavorite]=useState(0)
    const{
        products, setProducts,selectedCategory, setSelectedCategory ,selectedSort, setSelectedSort, categories,sortOptions,
    }=useContext(ShopContext)
 useEffect(()=>{
    const currentCountCart=products.reduce((sum, product)=>sum+=product.cart,0)
    setCountInCart(currentCountCart)
    const currentCountFavorite=products.reduce((sum, product) => product.favorite ? sum + 1 : sum, 0)
    setCountFavorite(currentCountFavorite)
    console.log(currentCountFavorite);
 },[products,setProducts])   
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
<ShopSearch></ShopSearch>
      </div>
    <div className="link-to-other-page">
    <NavLink to={'/shop/wischlist'} ><FaHeart /><span style={{ left:countFavorite>=10?'0.5rem':'0.8rem'}} className="count-in-favorite" >{countFavorite} </span></NavLink>
    <NavLink to={'/shop/cart'} ><FaShoppingCart /><span className="count-in-cart">{countInCart}</span></NavLink>
    </div></div>
)
}