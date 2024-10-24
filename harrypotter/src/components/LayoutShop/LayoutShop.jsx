import { Outlet } from "react-router-dom"
import { ShopHeader } from "../ShopHeader/ShopHeader"
import { ShopProvider } from "../../contexts/ShopContext"
export const LayoutShop=()=>{
    return(<>
    
    
        <ShopHeader></ShopHeader>
        <Outlet></Outlet>
      
    </>)
}