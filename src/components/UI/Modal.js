import classes from "./Modal.module.css";
import React, { useContext } from "react";
import CartItems from "../Cart/CartItems";
import Card from "./Card";
import Button from "./Button";
import cartContext from "../../store/cart-context";

const Modal = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = +cartCtx.totalAmount.toFixed(2);

  return (
    <>
      <div onClick={props.onHideCart} className={classes.backdrop} />
      <Card className={classes.modal}>
        <CartItems />
        <div className={classes.total_part}>
          <div className={classes.modal_amount}>
            <h2>Total Amounts</h2>
            <h4>${totalAmount.toFixed(2)} </h4>
          </div>
          <div className={classes.modal_actions}>
            <Button onClick={props.onHideCart} className={classes.button_1}>
              Close
            </Button>
            {cartCtx.items.length > 0 && (
              <Button className={classes.button_2}>Order</Button>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Modal;
