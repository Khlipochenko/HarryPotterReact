import { createContext, useState } from "react";
import data from "../pages/Shop/ShopDatei.json";
export const ShopContext =createContext();
export const ShopProvider=({children})=>{
    const [favoriteProducts, setFavoriteProducts]=useState([])
    const[cart, setCart]=useState([]);
    const[countProducts, setCountsProducts]=useState(1)
    const [currentProducts, setCurrentProducts] = useState([]);//die zeigen werden
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
      // const minusCart = (productId) => {
      //   setProducts((prevProducts) =>
      //     prevProducts.map((product) =>
      //       product.id === productId
      //         ? { ...product, stock: product.stock+1, cart:product.cart-1 }
      //         : product
      //     )
        // );};

  const sortOptions = ["low to high", "high to low"];
return(
    <ShopContext.Provider value={{favoriteProducts, setFavoriteProducts,cart, setCart, countProducts, setCountsProducts,currentProducts, setCurrentProducts,products, setProducts,selectedCategory, setSelectedCategory,selectedSort, setSelectedSort,categories,sortOptions,toggleFavorite, addCart}}>{children}</ShopContext.Provider>
)
}