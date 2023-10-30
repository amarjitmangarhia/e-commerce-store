import React from "react";
import { useDispatch } from "react-redux";
import { storeSliceActions } from "../../store/react-store";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const cartItems = useSelector((state) => state.items);
  const length = cartItems.length;

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(storeSliceActions.showCart());
  };

  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <NavLink to="/">Tech Cart</NavLink>
        </div>
        <div className={classes.links}>
          {/* <div className={`${classes.link} ${classes.hide}`}>Home</div> */}
          <div className={`${classes.link} ${classes.hide}`}>Categories</div>
          <NavLink to="/about"> <div className={`${classes.link} ${classes.hide}`}> About </div></NavLink>
          <NavLink to="/contact">  <div className={`${classes.link} ${classes.hide}`}>Contact Us</div></NavLink>
          <div className={classes.link} onClick={onClickHandler}>
            Cart {length > 0 ? `(${length})` : ""}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
