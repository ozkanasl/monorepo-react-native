import { combineReducers } from 'redux';
import homeReducer from './Home/Home.reducer';

const rootReducer = combineReducers({
	data: homeReducer,
});

export default rootReducer;

