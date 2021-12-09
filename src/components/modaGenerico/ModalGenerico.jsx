import React from "react";
import styles from "./modal.module.css";
import CloseSvg from "./assets/closeX.svg";

export default function ModalGenerico({ setShowModal, children }) {
  return (
    <>
      <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
      <div className={styles.modal}>
        <header className="float-end">
          <img src={CloseSvg} alt="" onClick={() => setShowModal(false)} />
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </>
  );
}
