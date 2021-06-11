import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartCtx = useContext(cartContext);
  const cartAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <ul className={classes.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartAddHandler.bind(null, item)}
          onRemove={cartRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default CartItems;
