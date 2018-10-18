import axios from 'axios';
export function fetchFashions(){
	return {
		type: 'FETCH_FASHION',
		payload : axios.get('http://192.168.0.10:5000/api/fashions/')
	};
}
export function getFashion(id){
	return {
		type : 'GET_FASHION',
		payload: axios.get(`http://192.168.0.10:5000/api/fashions/${id}`)
	};
}
