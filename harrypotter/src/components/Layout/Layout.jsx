import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import {Footer} from "../Footer/Footer"
import { Provider } from '../../contexts/CharactersContext'
import { MovieProvider } from "../../contexts/MovieBookContext"
import { ShopProvider } from "../../contexts/ShopContext"
export const Layout=()=>{
    return(<>
     <Provider>{/*   für character */}
     <MovieProvider>{/*   für movies und books */}
   <ShopProvider>   {/*   für shop */}
        <Header></Header>
        <Outlet></Outlet>

        <Footer></Footer>
        </ShopProvider>
        </MovieProvider>
         </Provider>
    </>)
}