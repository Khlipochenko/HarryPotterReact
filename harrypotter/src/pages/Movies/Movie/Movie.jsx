import { useParams, NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Movie.scss";
import { MovieBookContext} from "../../../contexts/MovieBookContext";
const urlsVideo = [
  "https://www.youtube.com/embed/PbdM1db3JbY?si=Tv_pUqBZHFz9vCY_",
  "https://www.youtube.com/embed/2lSpGlsZtk0?si=DEraLMKQTYQMNeqN",
  "https://www.youtube.com/embed/1ZdlAg3j8nI?si=Bix1bwYeRmCPbND0",
  "https://www.youtube.com/embed/PFWAOnvMd1Q?si=XEgMesBuqCIi14w3",
  "https://www.youtube.com/embed/47PHbQTmw5g?si=Q5HX66R0pQQh6X8X",
  "https://www.youtube.com/embed/JYLdTuL9Wjw?si=qVtdEXxUYx-TZru1",
  "https://www.youtube.com/embed/Su1LOpjvdZ4?si=0bRXCHIPi9qHCl38",
  "https://www.youtube.com/embed/5NYt1qirBWg?si=9N7-u27svTEEdxjA",
];
export const Movie = () => {
  const { movies } = useContext(MovieBookContext);
  const { movie } = useParams();
  console.log(movie);
  const value = movies.find((el) => el.serial == movie);

  return (
    <>
      {value ? (
        <div className="movie">
          <div className="movie-grid">
            <div className="name">
             
              <h2>Name: {value.title}. </h2>
              <h2>( Serial : {value.serial})</h2>
              <NavLink to={'/movies'}><button className="back-button">Go back</button></NavLink>
            </div>
            <div className="bild">
              <img src={value.poster} alt={value.title} />
            </div>
            <div className="video">
              <iframe className="youtube"
                width="560"
                height="315"
                src={`${
                  urlsVideo[Number(movie) - 1]
                }?autoplay=1&mute=1&controls=0`}
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <ul>Producers:  {value.producers.map((producer)=><li key={producer}>{producer} </li>) } </ul>
              <p className="date">
                Realise date: {value.release_date} 
              </p>
            </div>
<div className="summary">
            <p>{value.summary}</p></div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
