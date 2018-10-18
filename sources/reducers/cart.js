const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false,
	carts : [],
	cart : {}
};

const dataCart = function(state = initialState, action){
	switch(action.type) {
		case 'CREATE_CART_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'CREATE_CART_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true,  carts : action.payload.data };
		break;
		case 'CREATE_CART_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'FETCH_CART_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'FETCH_CART_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, carts : action.payload.data};
		break; 
		case 'FETCH_CART_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'GET_CART_PENDING' :
			return {...state, isLoading: true};
		break;
		
		case 'GET_CART_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, cart:action.payload.data};

		break;
		case 'GET_CART_REJECTED' :
			return {...state, isError: action.payload};
		break;
		case 'DELETE_CART_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'DELETE_CART_FULFILLED' :
			const deleted = state.carts.filter(cart => cart._id != action.payload.data._id)

	      return {...state, isLoading : false, isSuccess: true, carts: deleted };
		break;
		case 'DELETE_CART_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default dataCart;