import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import "./MengeChangeButton.scss"
export const MengeChangeButton = ({ product }) => {
  const [count, setCount] = useState(product.cart);
  const [isAdd, setIsAdd] = useState(false);
  const { changeCartCount, products } = useContext(ShopContext);
  console.log('in mengeButton',product.cart);
 console.log('count', count);
// useEffect(()=>{
// setCount(product.cart)
// },[product.cart])
  function changeCart() {
    changeCartCount(product.id, count);
    
    setIsAdd(true);
    setTimeout(() => {
      setIsAdd(false);
    }, 2000);
    console.log(product);
  }
  return (
    <div className="menge-button">
      <button
        className="button-add"
        onClick={() =>
          setCount((prev) =>
            prev < product.stock + product.cart
              ? prev + 1
              : product.stock + product.cart
          )
        }
      >
        +
      </button>

      <input type="text" name="menge" readOnly value={count}/>
      <button
        className="button-minus"
        onClick={() => {
          count > 1 && setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button className="change-cart" onClick={changeCart}>
        change
      </button>
    
        <p className="stock">Still in stock: {product.stock}</p>
    </div>
  );
};