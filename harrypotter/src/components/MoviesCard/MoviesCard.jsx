export const MoviesCard=({props, onClick} )=>{
    const movie=props
    return(
       <div className="movieCard" onClick={onClick}>
<h2>{movie.title}</h2>
<img src={movie.poster} alt={movie.title}/>
<p>Release date: {movie.realise_date}</p>
<p>Serial: {movie.serial}</p>

       </div>
    )
}