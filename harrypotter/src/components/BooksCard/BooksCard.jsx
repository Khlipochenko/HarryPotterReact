import { useNavigate } from "react-router-dom";
import "./BooksCard.scss"
export const BooksCard=({props})=>{
    const navigate= useNavigate()
    const book=props;
    function handleClick(){
        navigate(`/books/${book.serial}`)
    }
    return(<>
        <div className="book-card" onClick={handleClick}>
           
            <img src={book.cover} alt={book.title}/>
            <p>{book.release_date}</p>

        </div>
    </>)
}