import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_PENDING,
  GET_ALL_USERS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getAllUsersPending = () => {
  return {
    type: GET_ALL_USERS_PENDING,
  };
};
const getAllUsersSuccess = (users) => {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: users,
  };
};

const getAllUsersFail = (error) => {
  return {
    type: GET_ALL_USERS_FAIL,
    payload: error,
  };
};

export const fetchAllUsersAction = () => async (dispatch) => {
  try {
    const users = await axios.get(`https://randomuser.me/api/?results=1000`);
    dispatch(getAllUsersPending());
    dispatch(getAllUsersSuccess(users.data.results));
  } catch (error) {
    dispatch(getAllUsersFail(error));
  }
};
