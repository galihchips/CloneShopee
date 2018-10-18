const initialState = {

	isLoading: false,
	isError: false,
	isSuccess: false,
	dataUser : []
};

const register = function(state = initialState, action){
	switch(action.type) {
		case 'CREATE_USER_PENDING' :
			return {...state, isLoading: true};
		break;
		case 'CREATE_USER_FULFILLED' :
			return {...state, isLoading : false, isSuccess: true, dataUser :[...state.dataUser, action.payload.data ]};
		break;
		case 'CREATE_USER_REJECTED' :
			return {...state, isError: action.payload};
		break;
		default :
	}

	return state;
}
export default register;