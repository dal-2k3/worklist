import workDateActionTypes from "./workDateActionTypes";

const initialState = {
  workDate: "",
  workDateData: null,
  refreshWorkDateDataId: Math.random(),
};

const workDateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case workDateActionTypes.SET_WORK_DATE:
      return { ...state, workDate: payload };
    case workDateActionTypes.SET_WORK_DATE_DATA:
      return { ...state, workDateData: payload };
    case workDateActionTypes.REFRESH_WORK_DATE_DATA_ID:
      return { ...state, refreshWorkDateDataId: payload };

    default:
      return state;
  }
};
export default workDateReducer;
