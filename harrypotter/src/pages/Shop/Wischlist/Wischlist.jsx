import { useContext, useEffect } from "react";
import { ShopContext } from "../../../contexts/ShopContext";
import { ShopCard } from "../../../components/ShopCard/ShopCard";
import { NavLink } from "react-router-dom";
import "./Wischlist.scss";
export const Wischlist = () => {
  const {
    products,
    currentProducts,
    setCurrentProducts,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
    sortOptions,
  } = useContext(ShopContext);

  // Фильтрация избранных продуктов
  useEffect(() => { 
  
    const filterProducts = products.filter((product) => product.favorite === true);
    
    setCurrentProducts(filterProducts);
  }, [products, selectedSort,selectedCategory,selectedSort, setCurrentProducts]);
  useEffect(() => {
    setSelectedSort('')
    if (selectedCategory != "") {
      const filterProducts = products.filter(
        (product) => product.category == selectedCategory&&product.favorite === true
      );
      setCurrentProducts(filterProducts);
    } else {
      setCurrentProducts(products.filter((product) => product.favorite === true));
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    if (selectedSort == sortOptions[0]) {
      const sortProducts = [...currentProducts].filter((product) => product.favorite === true).sort((a, b) => a.price - b.price);
      setCurrentProducts(sortProducts);
    } else if (selectedSort == sortOptions[1]) {
      const sortProducts = [...currentProducts].filter((product) => product.favorite === true).sort((a, b) => b.price - a.price);
      setCurrentProducts(sortProducts);
    } 
  }, [selectedSort, products, setCurrentProducts]);
  
  return (
    <div className="wishlist">
     <h1>WischList</h1>
     <NavLink to="/shop">Go back</NavLink>
    <div className="wishlist-grid">
   
      {products.length > 0 && currentProducts.length > 0 ? (
        currentProducts.map((favoriteProduct) => (
          <ShopCard product={favoriteProduct} key={favoriteProduct.id} />
        ))
      ) : (
        <div className="empty-wishlist">
          <h1>Wishlist is empty</h1>
        </div>
      )}
      
    </div>
    
    </div>
  );
};
