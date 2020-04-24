import { GET_DATA_START, GET_DATA_FINISH, GET_DATA_REJECTED } from './Home.constants';


const initialState = {
	data: []
};

const homeReducer = ( state: Object = initialState, action: Object ) => {
	switch ( action.type ) {
		case GET_DATA_START:
			return {
				...state
			};

		case GET_DATA_FINISH:
			return {
				...state,
				data: action.data
			};
		case GET_DATA_REJECTED:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}

};


export default homeReducer;
