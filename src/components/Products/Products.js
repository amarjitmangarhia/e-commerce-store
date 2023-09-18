import React from "react";
import Product from "./Product";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = () => {

 
  const productsList = useSelector((state) => state.products);
  return (
    <div>
      <div className={classes.products}>
        {productsList.map((data) => (
          <Product
            header={data.header}
            image={data.image}
            key={data.id}
            id={data.id}
            altTag={data.altTag}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
