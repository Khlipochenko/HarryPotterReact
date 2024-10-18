import { useEffect, useState } from "react"
import { BooksCard } from "../../components/BooksCard/BooksCard";
export const Books=()=>{
    const[booksData, setBooksData]=useState(null);
    async function fetchBooksData() {
        try{
        const response= await fetch('https://potterhead-api.vercel.app/api/books')
        const data= await response.json();
        setBooksData(data)
    }catch(error){
        console.log(error)
    }
        
    }
    useEffect(()=>{
        fetchBooksData()
    },[])
    return(<>
    {booksData?(
        <div className="books">
            {booksData.map((book)=><BooksCard props={book} key={book.serial}></BooksCard>)}
        </div>
    ):(<p>Loading ...</p>)}
    
  
    
    </>)
}