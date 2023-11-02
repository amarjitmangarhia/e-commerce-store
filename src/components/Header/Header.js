import React from "react";
import { useDispatch } from "react-redux";
import { storeSliceActions } from "../../store/react-store";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import {  Link, NavLink } from "react-router-dom";
import techCart from "../../img/techcart.png"

const Header = () => {
  const cartItems = useSelector((state) => state.items);
  const length = cartItems.length;

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(storeSliceActions.showCart());
  };

  return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <NavLink to="/"> <img src={techCart} alt="techCartLogo" /> </NavLink>
        </div>
        <div className={classes.links}>
          {/* <div className={`${classes.link} ${classes.hide}`}>Home</div> */}
          <div className={`${classes.link} ${classes.hide}`}>Categories</div>
          <NavLink to="/about"> <div className={`${classes.link} ${classes.hide}`}> About </div></NavLink>
          <NavLink to="/contact">  <div className={`${classes.link} ${classes.hide}`}>Contact Us</div></NavLink>
         
          <Link to="/cart">
          <div className={classes.link} >
            Cart {length > 0 ? `(${length})` : ""}
          </div>
          </Link>
        </div>
      </nav>
  );
};

export default Header;
