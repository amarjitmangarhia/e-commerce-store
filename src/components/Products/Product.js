import React, { useEffect, useState } from "react";
import { storeSliceActions } from "../../store/react-store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import classes from "./Product.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';


const Product = ({ header, image, altTag, id}) => {

  const navigate = useNavigate();  

  const onClick = () => {
    console.log("image clicked!")
    navigate(id);
  };
  
  return (
    <div>
      <div className={classes.product}>
        <div className={classes.header}>{header}</div>
        <div className={classes.image}>
          <img  onClick={onClick} src={image} alt={altTag}></img>  
        </div>
        <div className={classes.button}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default Product;
