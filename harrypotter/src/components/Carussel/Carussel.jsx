import  "./Carussel.scss";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import{useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";


export const Carousel=()=>{
  const{movies}=useContext(MovieContext)
    const[index, setIndex]=useState(0)
    const navigate= useNavigate()
  
    function handleClick(movie){
        console.log(movie);
        console.log(movie.serial);
        navigate(`/movies/${movie.serial}`)}

    return(
        <>
        <div className="carousel">
       
        <button onClick={()=>setIndex( index>0? index-1:index)}> <TbArrowBigLeftLinesFilled style={{color:'#DA6763'}} /></button>
    
       { movies.slice(index, index+3).map((movie)=>(
     
        <img src={movie.poster} alt={movie.title} className="skills-img" key={movie.serial} onClick={()=>handleClick(movie)} ></img>
        
        
       ))
}
<button    onClick={()=>setIndex(movies.length-3>index? index+1:index)}><TbArrowBigRightLinesFilled   style={{color:'#DA6763'}}   /></button>
        </div>
       
        </>
    )
}