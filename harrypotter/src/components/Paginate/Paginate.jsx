import { useContext, useEffect, useState } from "react";
import './Paginate.scss'
import ReactPaginate from "react-paginate";
import { CharactersContext } from "../../contexts/CharactersContext";
 export const Paginate = ({ itemsPerPage, itemsData, setCurrentItems,  })=>{
  const{firstIndex, setFirstIndex  ,currentPage, setCurrentPage}=useContext(CharactersContext);
    const[pageCount,setPageCount]=useState(0)//anzahl der Seiten
  
   


    const handlePageClick=(event)=>{
        const newFirstindex=event.selected*itemsPerPage% itemsData.length;
        setFirstIndex(newFirstindex)
        setCurrentPage(event.selected)
    }
    useEffect(()=>{
        const lastIndex = firstIndex + itemsPerPage;
        setCurrentItems(itemsData.slice(firstIndex, lastIndex));
        setPageCount(Math.ceil(itemsData.length / itemsPerPage));
    },[firstIndex,itemsPerPage,itemsData])
return(
    <>
     <ReactPaginate className="paginate"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}  
        pageCount={pageCount}
        previousLabel="<"
        // pageClassName="page-item"
        // pageLinkClassName="page-link"
        // previousClassName="page-item"
        // previousLinkClassName="page-link"
        // nextClassName="page-item"
        // nextLinkClassName="page-link"
        // breakLabel="..."
        // breakClassName="page-item"
        // breakLinkClassName="page-link"
        forcePage={currentPage}
        containerClassName="pagination"
        activeClassName="active"
        // renderOnZeroPageCount={null}
      />
   
       
      
  
      
      
      </>
)
}