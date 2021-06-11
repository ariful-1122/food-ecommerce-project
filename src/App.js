import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Products from "./components/Products/Products";
import Modal from "./components/UI/Modal";
import ContextProvider from "./store/ContextProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <ContextProvider>
      {cartIsShown && <Modal onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Products />
    </ContextProvider>
  );
};

export default App;
