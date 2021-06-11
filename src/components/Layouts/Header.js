import classes from "./Header.module.css";
import React from "react";
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <a href="/">BirYani</a>
        </div>
        <div>
          <HeaderCartButton onShowCart={props.onShowCart} />
        </div>
      </nav>
      <div className={classes.hero}>
        <img src="/images/1.jpg" alt="best food ever" />
      </div>
      <div className={classes.feature_word}>
        <h3>Worlds Largest Oraganic Food</h3>
        <p>
          Here You can buy oragnic food like vegetables and fast food and meaty
          food.You will get freesh vegetables here with no formalins. No
          Presticide use in food and bebarages.
        </p>
      </div>
    </>
  );
};

export default Header;
