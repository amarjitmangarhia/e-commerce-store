import React from "react";
import classes from "./Slider.module.css";
import featuredImage from "../../img/featured_product.jpg"
import { NavLink } from "react-router-dom";
const Slider = () => {
  return (
    <div>
      <div className={classes.content}>
        <div className={classes.featuredImage}>
          <img src={featuredImage} alt="featuredImage" />
        </div>
        <div className={classes.featuredText}>
          <h2>Most Selling One!</h2>
          <div className={classes.title}>Intel Core i9 Desktop Processor</div>
          <div className={classes.description}>Intel Core i9-10900K Desktop Processor 10 Cores up to 5.3 GHz Unlocked  LGA1200 (Intel 400 Series Chipset) 125W</div>
          <div className={classes.button}>
           <NavLink to ="/featured_product"> Shop Now </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
