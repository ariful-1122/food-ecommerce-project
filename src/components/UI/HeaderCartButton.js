import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [showBump, setShowBump] = useState(false);
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;

  const cartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setShowBump(true);
    const timer = setTimeout(() => {
      setShowBump(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onShowCart}
      className={`${classes.button} ${showBump ? classes.bump : ""} `}
    >
      <span className={classes.cartIcon}>🛒</span>
      <span className={classes.middle}>Your Cart</span>
      <span className={classes.badge}> {cartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
