import React, { useEffect, useState } from "react";
import Product from "./Product";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import setProducts from "../../store/react-store"
import axios from 'axios';


const Products = () => {

    const [productsList, setProductsList] = useState([]);
  
      useEffect(() => {
        const fetchProductFromAxios = async () => {

          const response = await axios.get('/api');
          setProductsList(response.data.fetchedProducts)
        };

        fetchProductFromAxios();
      }, [])

 
  return (
    <div>
      <div className={classes.products}>
        {productsList.map((data) => (
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
