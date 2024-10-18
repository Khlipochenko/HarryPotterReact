import { useContext, useEffect, useState } from "react";
import './Paginate.scss'
import ReactPaginate from "react-paginate";
import { CharactersContext } from "../../contexts/CharactersContext";
 export const Paginate = ({ itemsPerPage, itemsData, setCurrentItems })=>{
  //   const{charactersData, setCurrentCharacters }=useContext(CharactersContext);
    const[pageCount,setPageCount]=useState(0)
  
    const[firstIndex, setFirstIndex]=useState(0);


    const handlePageClick=(event)=>{
        const newFirstindex=event.selected*itemsPerPage% itemsData.length;
        setFirstIndex(newFirstindex)
    }
    useEffect(()=>{
        const lastIndex = firstIndex + itemsPerPage;
        setCurrentItems(itemsData.slice(firstIndex, lastIndex));
        setPageCount(Math.ceil(itemsData.length / itemsPerPage));
    },[firstIndex,itemsPerPage,itemsData])
return(
    <>
     <ReactPaginate className="paginate"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}  
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
   
       
      
  
      
      
      </>
)
}