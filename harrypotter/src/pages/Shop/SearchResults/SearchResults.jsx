import { useLocation, Link } from "react-router-dom";
import "./SearchResults.scss";
import { ShopCard } from "../../../components/ShopCard/ShopCard";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../../contexts/ShopContext";
export const SearchResults = () => {
  const location = useLocation();
  const {
    currentProducts,
    setCurrentProducts,
    products,
    setProducts,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
    categories,
    sortOptions,
  } = useContext(ShopContext);

  useEffect(() => {
    const updateSearch = products.filter((product) =>
             product.name.toLowerCase().includes(location.state.search.toLowerCase())
  
    );
    setCurrentProducts(updateSearch);
  }, [products, selectedSort,selectedCategory,selectedSort, setCurrentProducts,location.state.search]);
  useEffect(() => {
    setSelectedSort("");
    const updateSearch = products.filter((product) =>
      product.name.toLowerCase().includes(location.state.search.toLowerCase()))
    if (selectedCategory != "") {
      
      const filterProducts = updateSearch.filter(
        (product) => product.category == selectedCategory
      );
      setCurrentProducts(filterProducts);
    } else {
   
      setCurrentProducts(updateSearch);
    }
  }, [selectedCategory, products,location.state.search]);

  useEffect(() => {
    if (selectedSort == sortOptions[0]) {
      const sortProducts = [...currentProducts].sort(
        (a, b) => a.price - b.price
      );
      setCurrentProducts(sortProducts);
    } else if (selectedSort == sortOptions[1]) {
      const sortProducts = [...currentProducts].sort(
        (a, b) => b.price - a.price
      );
      setCurrentProducts(sortProducts);
    }
  }, [selectedSort, products, setCurrentProducts]);
  return (
    <div className="search-results-page">
      <h2>Search results for {location.state.search} </h2>
      <Link to="/shop">Go back</Link>
      {currentProducts.length > 0 ? (
        <div className="liste-search">
          {currentProducts.map((product) => (
            <ShopCard product={product} key={product.id}></ShopCard>
          ))}
        </div>
      ) : (
        <h3>Not found. Please go back.</h3>
      )}
    </div>
  );
};
