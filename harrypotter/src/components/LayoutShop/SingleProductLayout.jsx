import { Outlet } from "react-router-dom"
import { SingleProductHeader } from "../ShopHeader/SingleProductHeader/SingleProductHeader"
export const SingleProductLayout=()=>{
    return(<>
        <SingleProductHeader></SingleProductHeader>
        <Outlet></Outlet>
    </>)

}