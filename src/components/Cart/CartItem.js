import classes from "./CartItem.module.css";
import React, { useContext } from "react";
import cartContext from "../../store/cart-context";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <li className={classes.cart_item}>
        <div className={classes.item_info}>
          <h3> {props.name} </h3>
          <p>price: {price}</p>
        </div>
        <div>
          <span> {props.amount}x</span>
        </div>
        <div className={classes.cart_actions}>
          <button onClick={props.onRemove}> ➖ </button>
          <button onClick={props.onAdd}>➕</button>
        </div>
      </li>
    </>
  );
};

export default CartItem;
