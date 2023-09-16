import React from "react";
import classes from "./SortItems.module.css";
const SortItems = () => {
  return (
    <div className={classes.inlineContent}>
      <div className={classes.content}>Popular</div>
      <div className={classes.content}>Newest</div>
      <div className={classes.content}>Most Rated</div>
    </div>
  );
};

export default SortItems;
