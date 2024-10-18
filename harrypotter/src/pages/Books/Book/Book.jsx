import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
export const Book=()=>{
  const {book}=useParams();
  const[bookData, setBookData]=useState(null);
    async function fetchBookData() {
        try{
        const response= await fetch(`https://potterhead-api.vercel.app/api/books/${book}`)
        const data= await response.json();
        setBookData(data)
    }catch(error){
        console.log(error)
    }
        
    }
    useEffect(()=>{
        fetchBookData()
    },[])
    return(<>{bookData?
       ( <div>Book: {bookData.title} </div>):
       (<p>Loading ....</p>)}
    </>)
}