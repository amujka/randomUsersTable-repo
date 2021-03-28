import React, { useEffect } from "react";
import classes from "./UsersList.module.scss";
import { connect } from "react-redux";
import { fetchAllUsersAction } from "../../redux/actions/getAllUsersAction";
import Modal from "../UI/modal/Modal";
import Table from "../table/Table";
import UserDetails from "./userDetails/UserDetails";
import Backdrop from "../UI/backdropShadow/Backdrop";
const UsersList = ({
  allUsers,
  isLoading,
  error,
  fetchAllUsers,
  userDetail,
  modalEnable,
}) => {
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className={classes.UsersList}>
      {/* Backdrop component */}
      <Backdrop ModalEnabled={modalEnable} />
      {/* Modal component start*/}
      <Modal ModalEnabled={modalEnable}>
        {userDetail.name && userDetail.name.first && (
          <UserDetails userDetails={userDetail} />
        )}
      </Modal>
      {/* Modal component end*/}
      {/* show table of users if loaded or error */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div className={classes.error}>
          <h1>
            <i className="far fa-frown"></i>
          </h1>
          <h1> Ups! Something happened </h1>
          <h2>{error.message}</h2>
        </div>
      ) : (
        //Table component
        <Table users={allUsers} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    allUsers: state.users,
    isLoading: state.loading,
    error: state.error,
    userDetail: state.userDetails,
    modalEnable: state.modalEnabled,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersAction()),
  }; //note the dispatch call
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
