import { NavLink } from "react-router-dom"
import './Nav.scss'
export const Nav=()=>{
    return(<nav className="nav">
    <NavLink to='/characters'>Characters</NavLink>
    <NavLink to='/movies'>Movies</NavLink>
    <NavLink to='/books'>Books</NavLink>
    <NavLink to='/spells'>Spells</NavLink> 
    <NavLink to='/shop'>Shop</NavLink>
    </nav>
)
}