import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import setUser from './reducrers/info'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
   try {
      debugger;
      const user = yield call(setTimeout(()=>{console.log('its sagajs call')}),1000);
      yield put(setUser('sagauser'));
   } catch (e) {
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  debugger;
  yield takeEvery('SET_USER', fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default mySaga;