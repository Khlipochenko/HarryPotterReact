import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom"
import './Nav.scss'
import { useContext, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
export const Nav=()=>{

    const{show, setShow}=useContext(CharactersContext)
function handleClick()
{
    if(window.innerWidth<=768){
        setShow(false)
    }
}
    
    return(<div className="menu">
    <button><GiHamburgerMenu onClick={()=>setShow(!show)}/></button>
    <nav className= {show?"nav show":'nav'} >
    <NavLink to='/home' onClick={handleClick}>Home</NavLink>
    <NavLink to='/characters' onClick={handleClick}>Characters</NavLink>
    <NavLink to='/movies' onClick={handleClick}>Movies</NavLink>
    <NavLink to='/books' onClick={handleClick}>Books</NavLink>
    <NavLink to='/spells' onClick={handleClick}>Spells</NavLink> 
    <NavLink to='/shop' onClick={handleClick}>Shop</NavLink>

    </nav></div>
    
)
}