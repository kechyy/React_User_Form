import { combineReducers } from 'redux';
const initialState  = { success: false, data: [], error: '' };

export const registerReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case 'REGISTER_SUCCESS_ASYNC' : 
    return {
      ...state,
      ...payload,
      data: [...payload.data, ...state.data]
    }
    default:
      return state
  }
};

export const rootReducer = combineReducers({
  registerReducer
});