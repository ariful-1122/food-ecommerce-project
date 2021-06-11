import classes from "./Products.module.css";
import React from "react";
import ProductItem from "./ProductItem";
import products from "../../data/products";

const Product = () => {
  return (
    <div className={classes.products}>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Product;
