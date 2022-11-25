import React from "react";
import styles from "./styles.module.scss";
export default function PageLoader({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
}
