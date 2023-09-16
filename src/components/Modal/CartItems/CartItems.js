import React from "react";
import classes from "./CartItems.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { storeSliceActions } from "../../../store/react-store";
import Form from "../../Form/Form";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const showForm = useSelector((state) => state.showForm);
  const length = cartItems.length;
  const removeHandler = (id) => {
    dispatch(storeSliceActions.removeItem(id));
  };

  const showFormHandler = () => {
    dispatch(storeSliceActions.showForm());
  };

  return (
    <div>
      {length > 0 ? (
        cartItems.map((item) => (
          <div className={classes.cartItems} key={item.id}>
            <div className={classes.image}>
              <img className={classes.img} src={item.image} alt="x"></img>
            </div>
            <div>
              <div className={classes.modalItems}>{item.name}</div>
              <button
                className={classes.button}
                onClick={() => removeHandler(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={classes.modalItems}>No Items. Try Adding One.</div>
      )}
      {length > 0 && !showForm && (
        <div className={classes.orderbutton}>
          <button onClick={showFormHandler}>Order</button>
        </div>
      )}
      {showForm && length > 0 && <Form />}
    </div>
  );
};

export default CartItems;
