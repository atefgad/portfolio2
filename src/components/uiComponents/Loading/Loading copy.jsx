import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={`${classes.loading}`}>
      <div className={`${classes.profile__img}`}>
        <img
          src="/images/avatar-logo.png"
          alt="atef gad"
          width={270}
          height={205}
        />
      </div>
    </div>
  );
};

export default Loading;
