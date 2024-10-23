import { useContext, useEffect } from "react";
import "./CartCard.scss";
import { ShopContext } from "../../contexts/ShopContext";
export const CartCard = ({ product, index }) => {
  const { deleteCart } = useContext(ShopContext);

  return (
    <div className="cartCard">
      <span className="index">{index}</span>
      <h3 className="name">{product.name}</h3>
      <img className="bild" src={product.imageUrl} alt={product.name}></img>

      <span className="description">{product.description}</span>

      <div className="menge">
        <span>
          Price: <b>{product.price} €</b>
        </span>
        <span>
          Menge: <b>{product.cart}</b>
        </span>
      </div>
      <div className="total">
        <span>
          <b> {(product.price * product.cart).toFixed(2)}€</b>
        </span>
        <button
          className="delete"
          onClick={() => {
            deleteCart(product.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
