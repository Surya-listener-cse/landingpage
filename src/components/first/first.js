import React from "react";

import styles from "./first.module.css";



const first = (props) => {
  return (
    <div className={styles.first}>
      <div className="fa fa-instagram"></div>
      <div className="fa fa-twitter"></div>
      <div className="fa fa-facebook"></div>
    </div>
  );
};

export default first;