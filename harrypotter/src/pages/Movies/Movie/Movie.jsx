import {  useParams } from "react-router-dom";
import { useContext } from "react";
import "./Movie.scss";
import { MovieContext } from "../../../contexts/MovieContext";
const urlsVideo = [
  "https://www.youtube.com/embed/PbdM1db3JbY?si=Tv_pUqBZHFz9vCY_",
  "https://www.youtube.com/embed/2lSpGlsZtk0?si=DEraLMKQTYQMNeqN",
  "https://www.youtube.com/embed/1ZdlAg3j8nI?si=Bix1bwYeRmCPbND0",
  "https://www.youtube.com/embed/PFWAOnvMd1Q?si=XEgMesBuqCIi14w3",
  "https://www.youtube.com/embed/47PHbQTmw5g?si=Q5HX66R0pQQh6X8X",
  "https://www.youtube.com/embed/JYLdTuL9Wjw?si=qVtdEXxUYx-TZru1" ,
 "https://www.youtube.com/embed/Su1LOpjvdZ4?si=0bRXCHIPi9qHCl38" ,
"https://www.youtube.com/embed/5NYt1qirBWg?si=9N7-u27svTEEdxjA" 
];
export const Movie = () => {
 const{ movies}=useContext(MovieContext)
  const { movie } = useParams();
  console.log(movie);
  const value=movies.find((el)=>el.serial==movie)
  // const [movieData, setMovieData]=useState(null);
  // async function fetchCharacter() {
  //     try{
  //         const response = await fetch(`https://potterhead-api.vercel.app/api/movies/${movie}`);
  //         const data= await response.json();
  //         console.log(data);
  //         setMovieData(data)
  //     }catch(error){
  //         console.log(error);
  //     }

  // }
  // useEffect(()=>{
  //     fetchCharacter()
  // },[movie])
  return (
    <>
      {value ? (
        <div className="movie">
          <h2>Name: {value.title}</h2>
          <img src={value.poster} alt={value.title} />

          <iframe
            width="560"
            height="315"
            src={urlsVideo[Number(movie) - 1]}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <p>
            Realise date: {value.realise_date} Running time:{" "}
            {value.running_time}
          </p>
          <p>Producers: {value.producers}</p>
          <p>{value.summary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
