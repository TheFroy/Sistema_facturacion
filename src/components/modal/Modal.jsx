import React from "react";
import styles from "./modal.module.css";
import CloseSvg from "./assets/closeX.svg";

export default function Modal() {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <header>
          <img src={CloseSvg} alt="" />
        </header>
        <div className={styles.title}>
          <h1>Agregar Articulo</h1>
        </div>
        <div className={styles.body}></div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
}
