import classes from "./CartButtonForm.module.css";
import React, { useRef } from "react";

const CartButtonForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <div>
      <form className={classes.cart_button} onSubmit={submitHandler}>
        <button type="submit">Add Item</button>
        <div>
          <h5>Amount:</h5>
          <input
            ref={amountRef}
            placeholder="amount"
            type="number"
            defaultValue="1"
            min="1"
            max="5"
          />
        </div>
      </form>
    </div>
  );
};

export default CartButtonForm;
