const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false
};

const register = function(state = initialState, action){
	switch(action.type) {
		case 'LOGIN_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'LOGIN_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true};
		break;
		case 'LOGIN_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default register;