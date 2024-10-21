import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import {Footer} from "../Footer/Footer"
import { Provider } from '../../contexts/CharactersContext'
import { MovieProvider } from "../../contexts/MovieBookContext"
export const Layout=()=>{
    return(<>
     <Provider>
     <MovieProvider>
   
        <Header></Header>
        <Outlet></Outlet>

        <Footer></Footer>
        </MovieProvider>
         </Provider>
    </>)
}