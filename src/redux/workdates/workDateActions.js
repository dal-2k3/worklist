import workDateActionTypes from "./workDateActionTypes";

export const setWorkDate = (workDate) => ({
  type: workDateActionTypes.SET_WORK_DATE,
  payload: workDate,
});
export const setWorkDateData = (workDateData) => ({
  type: workDateActionTypes.SET_WORK_DATE_DATA,
  payload: workDateData,
});
export const refreshWorkDateDataId = (id) => ({
  type: workDateActionTypes.REFRESH_WORK_DATE_DATA_ID,
  payload: id,
});
