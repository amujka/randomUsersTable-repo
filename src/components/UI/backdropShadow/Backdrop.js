import React from "react";
import { connect } from "react-redux";
import classes from "./Backdrop.module.scss";
import { disableModalAction } from "../../../redux/actions/disableModalAction";
// black screen behind modal-----------
const Backdrop = ({ ModalEnabled, disableModal }) => {
  return (
    <div
      className={`${classes["Backdrop"]}  ${
        ModalEnabled ? classes["BackdropEnabled"] : null
      }`}
      onClick={() => disableModal()}
    ></div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    disableModal: () => dispatch(disableModalAction()),
  };
};
export default connect(null, mapDispatchToProps)(Backdrop);
