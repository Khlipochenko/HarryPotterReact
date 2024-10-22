import { NavLink } from "react-router-dom"
import { Filter } from "../Filter/Filter"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import './ShopHeader.scss'
export const ShopHeader=()=>{
    const{currentProducts, setCurrentProducts,
        products, setProducts,selectedCategory, setSelectedCategory ,selectedSort, setSelectedSort, categories,sortOptions
    }=useContext(ShopContext)
return(

    <div className="shop-header">
          
      <div className="shop-search-panel">
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
        ></Filter>

      </div>
    <div className="link-to-other-page">
    <NavLink to={'/shop/wischlist'}><FaHeart /></NavLink>
    <NavLink to={'/shop/cart'}><FaShoppingCart /></NavLink>
    </div></div>
)
}