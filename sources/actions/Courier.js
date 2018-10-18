import axios from 'axios';
export function fetchCourier(){
	return {
		type: 'FETCH_COURIER',
		payload : axios.get('http://192.168.0.10:5000/api/courier/')
	};
}

export function getCourier(id){
  return {
    type: 'GET_COURIER',
    payload : axios.get(`http://192.168.0.10:5000/api/courier/${id}`)
  };
}
