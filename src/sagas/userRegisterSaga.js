
// import firebase from "firebase";
import { eventChannel } from 'redux-saga';
import axios from 'axios';
import { takeLatest, take, put, fork, all } from 'redux-saga/effects';
import { registerAction, } from '../store/registerUsers/actions';
import qs from 'qs';
import firebase from './config';


function* startListener() {
  const channel = new eventChannel(emiter => {
      const listener = firebase.database().ref('/users').on('value', snapshot => {
          emiter({ data: snapshot.val() || {} });
      });

      return () => {
          listener.off();
      };
  });
  while (true) {
    const { data } = yield take(channel);
     const d = Object.values(data)

      yield put({
        type: 'REGISTER_SUCCESS_ASYNC',
         payload: {
            data: d,
            error: '',
            success: true
         } 
      });
  }
}


function* userRegisterUpdate(action) {
  try {

      yield   axios({
          data: qs.stringify(action.payload.data),
          method: 'POST',
          url: 'https://us-central1-enyeregisteruser.cloudfunctions.net/users',
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
      });

      yield put({
        type: 'REGISTER_SUCCESS_ASYNC',
         payload: {
            data: action.payload.data,
            error: '',
            success: true
         } 
      });
  } catch (error) {
      console.log(error);
  }
}
function* watchUserRegisterRequest() {
  try {
      yield takeLatest(registerAction().type, userRegisterUpdate);
  } catch (error) {
      console.log(error);
  }
}

function* watchStartListener() {
  try {
      yield fork(startListener);
  } catch (error) {
      console.log(error);
  }
}
export default function* rootSaga() {
  yield all([
      watchStartListener(),
      watchUserRegisterRequest(),
  ]);
}