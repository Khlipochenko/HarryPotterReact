import { useState } from "react";
import "./Search.scss";

import { useNavigate } from "react-router-dom";

export const Search = ({ searchItems }) => {
  const [selectedItem, setSelectedItem] = useState(""); // die gesuchte name
  const [sucheActiv, setSucheActiv] = useState(false); // suche is aktiv oder nein
  const [filterItems, setFilterItems] = useState([]); // data die passen
  const navigate = useNavigate();
  function changeHandle(e) {
    //
    setSelectedItem(e.target.value); // speichert datei von Sucher

    const currentSuche = searchItems.filter((el) =>{
        const elOhneReg=new RegExp(e.target.value, 'i')// ohne register suchen
      if( elOhneReg.test(el)){
        return el
      }
    }
     
    );
    setFilterItems(currentSuche);
  } // set passende data

  function handleSubmit() {
    if (selectedItem) {
      navigate(`/characters/${selectedItem}`);
    }
  }

  function handleClick(el) {
    setFilterItems([]);
    setSucheActiv(false);
    setSelectedItem(el);
  }
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          className="search-input "
          value={selectedItem}
          onChange={(e) => changeHandle(e)}
          onFocus={() => setSucheActiv(true)}
        ></input>
        <button className="button-search">search</button>
      </form>
      {filterItems.length > 0 && (
        <ul className="items-liste" style={filterItems.length>5?{ overflowY: 'scroll'}:{overflowY:undefined }}>
       
          {filterItems.map((el, i) => (
            <li key={i} onClick={() => handleClick(el)}>
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
