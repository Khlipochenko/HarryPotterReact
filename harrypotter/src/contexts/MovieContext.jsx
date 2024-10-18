import { createContext, useState } from "react";

export const MovieContext=createContext();
export const MovieProvider=({children})=>{
    const [movies, setMovies] = useState(null);
    return(
    <MovieContext.Provider value={{movies, setMovies}}>{children}</MovieContext.Provider>)
}