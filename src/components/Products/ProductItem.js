import classes from "./ProductItem.module.css";
import React, { useContext } from "react";
import CartButtonForm from "../UI/CartButtonForm";
import cartContext from "../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = props.price.toFixed(2);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.product_wrapper}>
      <div className={classes.image}>
        <img src={props.image} alt="best food ever" />
      </div>
      <div className={classes.desc}>
        <h2> {props.name} </h2>
        <p>{props.desc}</p>
        <h4>price: ${price}</h4>
      </div>
      <CartButtonForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default ProductItem;
