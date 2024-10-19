import './Search.scss'

export const Search=()=>{
    return(
        <div className='search-form'>
           <input type="search" placeholder="name" className='search-input'></input>
          <button type='submit' className='search-button'> </button>
        </div>
    )
}