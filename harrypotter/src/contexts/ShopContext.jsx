import { createContext, useState } from "react";

export const ShopContext =createContext();
export const ShopProvider=({children})=>{
    const[favorite, setFavorite]=useState([]);
    const[cart, setCart]=useState([]);
    const[countProducts, setCountsProducts]=useState(1)
    const [currentProducts, setCurrentProducts] = useState([]);
return(
    <ShopContext.Provider value={{favorite, setFavorite,cart, setCart, countProducts, setCountsProducts,currentProducts, setCurrentProducts}}>{children}</ShopContext.Provider>
)
}