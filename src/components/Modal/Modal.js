import React from "react";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { storeSliceActions } from "../../store/react-store";
import CartItems from "./CartItems/CartItems";
const Modal = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(storeSliceActions.showCart());
  };

  return (
    <div>
      <div className={classes.modal}>
        <div className={classes.close} onClick={onClickHandler}>
          X
        </div>
        <CartItems />
      </div>
    </div>
  );
};

export default Modal;
