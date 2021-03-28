import { GET_USER_DETAILS } from "./actionTypes";

export const getUserDetailsAction = (rowId) => {
  return {
    type: GET_USER_DETAILS,
    payload: Number(rowId),
  };
};
