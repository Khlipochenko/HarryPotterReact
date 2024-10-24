import { useContext, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import './ShopSearch.scss'
import { useNavigate } from "react-router-dom";
export const ShopSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate=useNavigate()
  const { currentProducts, setCurrentProducts, products, setProducts } =
    useContext(ShopContext);

   function  handleSubmit(e){
    e.preventDefault()
    const searchElementOhneRegister=new RegExp(searchInput, 'i')
     const appropriateProducts=products.filter((product)=>product.name.match(searchElementOhneRegister)
    )
 

    navigate(`/shop/search`,{ state:{ search: searchInput
       , searchProducts:appropriateProducts 
    }})
    setSearchInput('')
   }
  return (
    <div className="search-shop">
      <form className="search-shop-form" onSubmit={(e)=>handleSubmit(e)}>
      
        <input type="text" placeholder="serach..." value={searchInput}  onChange={(e)=>setSearchInput(e.target.value)}/>
        <button className="search-shop-form-button" >search</button>
      </form>
    </div>
  );
};
