import { Nav } from "../Nav/Nav";
import logo from "../../assets/logo.png"
import './Header.scss'
export const Header=()=>{
    return(
        <div className="header">
        <img src='https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png'alt="logo"/>
        <Nav></Nav>
</div>
    )
}