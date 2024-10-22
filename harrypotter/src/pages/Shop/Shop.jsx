import { useContext, useEffect, useState } from "react";
import { ShopCard } from "../../components/ShopCard/ShopCard";
import data from "./ShopDatei.json";
import "./Shop.scss";
import { Filter } from "../../components/Filter/Filter";
import { ShopContext } from "../../contexts/ShopContext";

export const Shop = () => {
    const{currentProducts, setCurrentProducts,
        products, setProducts,selectedCategory, setSelectedCategory ,selectedSort, setSelectedSort, categories,sortOptions
    }=useContext(ShopContext)
  

    useEffect(()=>{
   setCurrentProducts(products)
      setSelectedCategory('')
    },[])

  useEffect(() => {
    setSelectedSort('')
    if (selectedCategory != "") {
      const filterProducts = products.filter(
        (product) => product.category == selectedCategory
      );
      setCurrentProducts(filterProducts);
    } else {
      setCurrentProducts(products);
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    console.log("products",products);
    if (selectedSort == sortOptions[0]) {
      const sortProducts = [...currentProducts].sort((a, b) => a.price - b.price);
      setCurrentProducts(sortProducts);
    } else if (selectedSort == sortOptions[1]) {
      const sortProducts = [...currentProducts].sort((a, b) => b.price - a.price);
      setCurrentProducts(sortProducts);
    } 
  }, [selectedSort, products, setCurrentProducts]);
  return (

      <div className="shop">
        {currentProducts ? (
          <div className="products-grid">
            {currentProducts.map((product) => (
              <ShopCard key={product.id} product={product}></ShopCard>
            ))}
          </div>
        ) : (
          <p>loading ...</p>
        )}
      </div>
    
  );
};
