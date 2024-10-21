import { useEffect, useContext } from "react";
import { MoviesCard } from "../../components/MoviesCard/MoviesCard";
import {Carousel} from "../../components/Carussel/Carussel"
import { useNavigate } from "react-router-dom";
import { MovieBookContext } from "../../contexts/MovieBookContext";
import "./Movies.scss"
export const Movies = () => {
  const{movies, setMovies}=useContext(MovieBookContext)
  const navigate = useNavigate();
  async function fetchMovies() {
    const response = await fetch(
      "https://potterhead-api.vercel.app/api/movies"
    );
    const data = await response.json();
    setMovies(data);
  }
  function handleChange(movie) {
    console.log(movie);
    navigate(`/movies/${movie.serial}`, {state:{value:movie}});
  }
  useEffect(() => {

    fetchMovies();
  }, []);
  return (
    <>
      <div className="movies">
        {movies ? (
        
            <Carousel
               props={movies}/>
          
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
