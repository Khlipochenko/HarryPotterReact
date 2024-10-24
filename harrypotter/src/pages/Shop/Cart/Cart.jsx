import { useContext } from "react";
import { ShopContext } from "../../../contexts/ShopContext";
import { useEffect } from "react";
import { CartCard } from "../../../components/CartCard/CartCard";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.scss";
export const Cart = () => {
  const {
    products,
    currentProducts,
    setCurrentProducts,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
    sortOptions,
    deleteAllCart,
  } = useContext(ShopContext);

  useEffect(() => {
    setSelectedCategory("");
  }, []);

  const navigate = useNavigate();
  
  useEffect(() => {
    const filterProducts = products.filter((product) => product.cart > 0);

    setCurrentProducts(filterProducts);
  }, [
    products,
    selectedSort,
    selectedCategory,
    selectedSort,
    setCurrentProducts,
  ]);
  useEffect(() => {
    setSelectedSort("");
    if (selectedCategory != "") {
      const filterProducts = products.filter(
        (product) => product.category == selectedCategory && product.cart > 0
      );
      setCurrentProducts(filterProducts);
    } else {
      setCurrentProducts(products.filter((product) => product.cart > 0));
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    if (selectedSort == sortOptions[0]) {
      const sortProducts = [...currentProducts]
        .filter((product) => product.cart > 0)
        .sort((a, b) => a.price - b.price);
      setCurrentProducts(sortProducts);
    } else if (selectedSort == sortOptions[1]) {
      const sortProducts = [...currentProducts]
        .filter((product) => product.cart > 0)
        .sort((a, b) => b.price - a.price);
      setCurrentProducts(sortProducts);
    }
  }, [selectedSort, products, setCurrentProducts]);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <Link to="/shop">Go back</Link>
      {products.length > 0 && currentProducts.length > 0 ? (
        <div>
          <div className="total-panel">
            Total:{" "}
            {products
              .reduce((sum, el) => sum + el.price * el.cart, 0)
              .toFixed(2)}{" "}
            €
            <button className="button-buy" onClick={() => navigate("/buy")}>
              Buy
            </button>
            <button className="button-delete-all" onClick={deleteAllCart}>
              Delete all
            </button>
          </div>

          {currentProducts.map((product, index) => (
            <CartCard product={product} index={index + 1} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="empty-wishlist">
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  );
};
