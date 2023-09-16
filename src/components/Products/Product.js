import React from "react";
import { storeSliceActions } from "../../store/react-store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import classes from "./Product.module.css";


const Product = ({ header, image, altTag }) => {


  const dispatch = useDispatch();

  const onClick = () => {
    console.log("clicked!")
  }

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
