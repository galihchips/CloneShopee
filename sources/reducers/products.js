const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false,
	products : [],
	product : {}
};

const dataProducts = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_PRODUCT_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'FETCH_PRODUCT_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, products:action.payload.data};
		break;
		case 'FETCH_PRODUCT_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'GET_PRODUCT_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'GET_PRODUCT_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, product : action.payload.data};
		break;
		case 'GET_PRODUCT_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default dataProducts;