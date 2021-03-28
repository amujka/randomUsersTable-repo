import {
  DISABLE_MODAL,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_PENDING,
  GET_ALL_USERS_SUCCESS,
  GET_USER_DETAILS,
} from "../actions/actionTypes";
const initState = {
  loading: false,
  error: "",
  users: [],
  userDetails: {},
  modalEnabled: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_PENDING:
      return { ...state, loading: true };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: "",
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        users: [],
      };
    case GET_USER_DETAILS:
      state.users.map((user) => {
        if (state.users.indexOf(user) === action.payload) {
          //console.log(state.modalEnabled);
          state.modalEnabled = true;
          state.userDetails = user;
        }
        return user;
      });
      return { ...state };
    case DISABLE_MODAL:
      return { ...state, user: {}, modalEnabled: false };
    default:
      return state;
  }
};
export default reducer;
