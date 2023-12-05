import React, { useEffect, useState } from "react";
import Product from "./Product";
import classes from "./Products.module.css";
import axios from 'axios';


const Products = () => {

    const [productsList, setProductsList] = useState([]);

      useEffect(() => {
        const fetchProductFromAxios = async () => {

          // const response = await axios.get('https://amarecommerce.vercel.app/api');
          const response = await axios.get('/api');

          console.log("simple response: " +  response)
          console.log("response data: " + response.data)

          const fetchedProducts = response.data.fetchedProducts;

          console.log(fetchedProducts)

          setProductsList(fetchedProducts)
        };

        fetchProductFromAxios();
      }, [])
 
  return (
    <div>
      <div className={classes.products}>
        { productsList?.map((data) => (
          <Product
            header={data.header}
            image={data.image}
            key={data._id}
            id={data._id}
            altTag={data.altTag}
            price = {data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
