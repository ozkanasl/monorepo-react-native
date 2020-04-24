import {
	put, call, takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import * as dataActions from './Home.actions';
import { GET_DATA_START } from './Home.constants';


function* getData() {
	try {
		const { data } = yield call( axios.get, 'https://jsonplaceholder.typicode.com/albums' );
		console.log( "data ", data );
		yield put( dataActions.getDataFinish( data ) );

	} catch ( error ) {
		yield put( dataActions.getDataRejected( error.message ) );
	}
}

export default function* getDataSaga() {
	yield takeEvery( GET_DATA_START, getData );
}
