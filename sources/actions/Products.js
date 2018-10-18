import axios from 'axios';
export function fetchProducts(){
	return {
		type: 'FETCH_PRODUCT',
		payload : axios.get('http://192.168.0.10:5000/api/products/')
	};
}
export function getProduct(id){
	return {
		type : 'GET_PRODUCT',
		payload: axios.get(`http://192.168.0.10:5000/api/products/${id}`)
	};
}
