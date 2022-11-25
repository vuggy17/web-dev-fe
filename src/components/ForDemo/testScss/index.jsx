import React from "react";
import styles from "./styles.module.scss";

export default function TestScss() {
  return (
    <div>
      <div id="a" className={styles.A}>
        A
      </div>
      <div className={styles.B}>B</div>
      <div className={styles.C}>
        <span>C</span>
        <div className={styles.C__C0}>
          C0
          <div className={styles.C__C0__C00}>C00</div>
        </div>

        <div className={styles.C__C1}>
          C1
          <div className={styles.C__C1__C11}>C11</div>
        </div>
      </div>
    </div>
  );
}
