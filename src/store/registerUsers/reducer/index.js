import { combineReducers } from 'redux';
import { REGISTER_SUCCESS } from '../actionTypes';
const initialState  = { success: false, data: [] };

export const registerReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case REGISTER_SUCCESS : 
    return {
      ...state,
      ...payload
    }
    default:
      return state
  }
};

export const rootReducer = combineReducers({
  registerReducer
});