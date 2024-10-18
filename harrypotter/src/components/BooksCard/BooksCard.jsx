import { useNavigate } from "react-router-dom";

export const BooksCard=({props})=>{
    const navigate= useNavigate()
    const book=props;
    function handleClick(){
        navigate(`/books/${book.serial}`)
    }
    return(<>
        <div className="book-card" onClick={handleClick}>
            <h2> {book.title}</h2>
            <img src={book.cover} alt={book.title}/>
            <p>{book.release_date}</p>

        </div>
    </>)
}