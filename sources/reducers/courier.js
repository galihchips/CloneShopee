const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false,
	couriers : [],
	courier : {}
};

const dataCouriers = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_COURIER_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'FETCH_COURIER_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, couriers : action.payload.data};
		break;
		case 'FETCH_COURIER_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'GET_COURIER_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'GET_COURIER_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, courier : action.payload.data};
		break;
		case 'GET_COURIER_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default dataCouriers;