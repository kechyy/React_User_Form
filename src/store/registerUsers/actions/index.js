import { REGISTER_SUCCESS } from "../actionTypes";

export const registerAction = data => ({
  type: REGISTER_SUCCESS,
  payload: {
    error: '',
    data,
    success: true
  }
});

// export const registerAction = data => {
//   return registerSuccess(data);
// };
