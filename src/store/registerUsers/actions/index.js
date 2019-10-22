
import { REGISTER_SUCCESS } from '../actionTypes';


export const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: {
    data,
    success: true
  }
});

export const registerAction = (userData)  => {
  return registerSuccess(userData);
};
