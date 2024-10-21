import { useParams , NavLink} from "react-router-dom"
import { useContext} from 'react'
import { MovieBookContext } from "../../../contexts/MovieBookContext";
import './Book.scss'
export const Book=()=>{
  const {book}=useParams();
  const {booksData}=useContext(MovieBookContext)
  
  const bookData = booksData.find((el) => el.serial == book);
    return(<>{bookData?
       ( <div className="book-page"> <div className="book-grid"><h2>{bookData.title}</h2> 
       <img src={bookData.cover}alt={bookData.title}/>
       <div className="info">
       
       <p>{bookData.summary}</p>
       <p><b>Pages: </b>{bookData.pages}</p>
       <a href={bookData.wiki}> Harry Potter WIKI</a>

       </div>
       <div className="book-back">
<NavLink to={'/books'}>Go back</NavLink>
       </div>
       </div></div>):
       (<p>Loading ....</p>)}
    </>)
}