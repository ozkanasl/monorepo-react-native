import { GET_DATA_START, GET_DATA_FINISH, GET_DATA_REJECTED } from './Home.constants';

interface BaseAction {
	type: string;
}


export const getDataStart = (): BaseAction => ( {
	type: GET_DATA_START
} );


export const getDataFinish = ( data: Object ): BaseAction => ( {
	type: GET_DATA_FINISH,
	data
} );

export const getDataRejected = ( error: string ): BaseAction => ( {
	type: GET_DATA_REJECTED,
	error
} );
