import React from "react";
import classes from "./Modal.module.scss";
const Modal = ({ children, ModalEnabled }) => {
  // console.log(props);
  return (
    <div
      className={`${classes["Modal"]}  ${
        ModalEnabled ? classes["modalEnabled"] : null
      }`}
    >
      {children}
    </div>
  );
};
export default Modal;
