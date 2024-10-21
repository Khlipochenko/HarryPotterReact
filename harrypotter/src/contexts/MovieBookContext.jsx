import { createContext, useState } from "react";

export const MovieBookContext=createContext();
export const MovieProvider=({children})=>{
    const [movies, setMovies] = useState(null);
    const[index, setIndex]=useState(0)// index für carussel
    const[booksData, setBooksData]=useState(null);
    return(
    <MovieBookContext.Provider value={{movies, setMovies, index, setIndex, booksData, setBooksData}}>{children}</MovieBookContext.Provider>)
}