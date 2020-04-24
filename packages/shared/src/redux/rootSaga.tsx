
import { fork } from 'redux-saga/effects';
import getDataSaga from './Home/Home.saga';


export default function* rootSaga() {
	yield fork(getDataSaga);
}
