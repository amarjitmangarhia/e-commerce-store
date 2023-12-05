import React, { useEffect, useState } from "react";
import { storeSliceActions } from "../../store/react-store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import classes from "./Product.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';


const Product = ({ header, image, altTag, id}) => {

  const [products, setProducts] = useState([])

  const fetchProductFromAxios = async () => {
    const response = await axios.get('/api');
    let fetchedProducts = response.data.fetchedProducts;
    setProducts(fetchedProducts)
  }

  useEffect(() => {
    fetchProductFromAxios();
  }, [])

  const items = useSelector((state) => state)

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("image clicked!")
    navigate(id);
  };

  const onClickHandler = () => {
    dispatch(
      storeSliceActions.getData({
        header,
        image,
      })
    );
  };
  return (
    <div>
      <div className={classes.product}>
        <div className={classes.header}>{header}</div>
        <div className={classes.image}>
          <img  onClick={onClick} src={image} alt={altTag}></img>  
        </div>
        <div className={classes.button} onClick={onClickHandler}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default Product;
