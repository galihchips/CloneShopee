const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false,
	fashions : [],
	fashion : {}
};

const dataFashions = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_FASHION_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'FETCH_FASHION_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, fashions:action.payload.data};
		break;
		case 'FETCH_FASHION_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'GET_FASHION_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'GET_FASHION_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, fashion : action.payload.data};
		break;
		case 'GET_FASHION_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default dataFashions;