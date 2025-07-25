import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={`${classes.loading__container}`}>
      <div className={`${classes.loading}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
