import { createContext, useState } from "react";
import data from "../pages/Shop/ShopDatei.json";
export const ShopContext =createContext();
export const ShopProvider=({children})=>{
 
  

    const [currentProducts, setCurrentProducts] = useState(data.products);//die zeigen werden
    const [products, setProducts] = useState(data.products);//datei von json
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedSort, setSelectedSort] = useState("");
  const categories = [
    "Wands",
    "Clothing",
    "Accessories",
    "Collectibles",
    "Toys",
    "Sweets",
  ];
  const toggleFavorite = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, favorite: !product.favorite }
          : product
      )
    );
  };
    const addCart = (productId, count) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, stock: product.stock-count, cart:product.cart+count}
            : product
        )
      );};
      const changeCartCount = (productId, count) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, 
                
                stock: 
                
                product.stock+product.cart-count,
                cart:count }
              : product
          )
        );};
       const deleteCart = (productId) => {
         setProducts((prevProducts) =>
           prevProducts.map((product) =>
             product.id === productId
               ? { ...product, stock: product.stock+product.cart, cart:0 }
               : product
           )
       );};
       const deleteAllCart=()=>{
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.cart>0
              ? { ...product, stock: product.stock+product.cart, cart:0 }
              : product
          ) );};

  const sortOptions = ["low to high", "high to low"];
return(
    <ShopContext.Provider value={{currentProducts, setCurrentProducts,products, setProducts,selectedCategory, setSelectedCategory,selectedSort, setSelectedSort,categories,sortOptions,toggleFavorite, addCart, deleteCart, deleteAllCart, changeCartCount}}>{children}</ShopContext.Provider>
)
}