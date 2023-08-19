import userActionTypes from "./userActionTypes";
const initialState = {
  user: null,
  loading: true,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.SET_USER:
      return { ...state, user: payload, loading: false };
    case userActionTypes.CLEAR_USER:
      return { ...state, user: null, loading: false };

    default:
      return state;
  }
};
export default userReducer;
